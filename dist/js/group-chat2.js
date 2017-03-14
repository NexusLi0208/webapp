"use strict";

$(function () {
    // 建立环信链接
    var conn = {}
    conn = new WebIM.connection({
        isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
        https: typeof WebIM.config.https === 'boolean' ? WebIM.config.https : location.protocol ===
            'https:',
        url: WebIM.config.xmppURL,
        isAutoLogin: true,
        heartBeatWait: WebIM.config.heartBeatWait,
        autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
        autoReconnectInterval: WebIM.config.autoReconnectInterval
    });
    // 环信回调函数
    conn.listen({
        onOpened: function (message) { //连接成功回调，连接成功后才可以发送消息
            //如果isAutoLogin设置为false，那么必须手动设置上线，否则无法收消息
            // 手动上线指的是调用conn.setPresence(); 在本例中，conn初始化时已将isAutoLogin设置为true
            // 所以无需调用conn.setPresence();
            console.log("登录成功");
        },
        onTextMessage: function (message) {
            // 在此接收和处理消息，根据message.type区分消息来源，私聊或群组或聊天室
            console.log(message);
            groupChat.getGroupMsg(message);
        }, //收到文本消息
        onEmojiMessage: function (message) {
            // 当为WebIM添加了Emoji属性后，若发送的消息含WebIM.Emoji里特定的字符串，connection就会自动将
            // 这些字符串和其它文字按顺序组合成一个数组，每一个数组元素的结构为{type: 'emoji(或者txt)', data:''}
            // 当type='emoji'时，data表示表情图像的路径，当type='txt'时，data表示文本消息
            console.log('Emoji');
            var data = message.data;
            for (var i = 0, l = data.length; i < l; i++) {
                console.log(data[i]);
            }
        }, //收到表情消息
        onPictureMessage: function (message) {
            console.log('Picture');

            var options = {
                url: message.url
            };
            options.onFileDownloadComplete = function () {
                // 图片下载成功
                console.log('Image download complete!');
            };
            options.onFileDownloadError = function () {
                // 图片下载失败
                console.log('Image download failed!');
            };
            WebIM.utils.download.call(conn, options); // 意义待查

        }, //收到图片消息
        onCmdMessage: function (message) {
            console.log('CMD');
        }, //收到命令消息
        onAudioMessage: function (message) {
            console.log("Audio");
        }, //收到音频消息
        onLocationMessage: function (message) {
            console.log("Location");
        }, //收到位置消息
        onFileMessage: function (message) {
            console.log("File");
        }, //收到文件消息
        onVideoMessage: function (message) {
            var node = document.getElementById('privateVideo');
            var option = {
                url: message.url,
                headers: {
                    'Accept': 'audio/mp4'
                    
                },
                onFileDownloadComplete: function (response) {
                    var objectURL = WebIM.utils.parseDownloadResponse.call(conn, response);
                    node.src = objectURL;
                },
                onFileDownloadError: function () {
                    console.log('File down load error.')
                }
            };
            WebIM.utils.download.call(conn, option);
        }, //收到视频消息
        onPresence: function (message) {
            switch (message.type) {
                case 'subscribe': // 对方请求添加好友
                    // 同意对方添加好友
                    document.getElementById('agreeFriends').onclick = function (message) {
                        conn.subscribed({
                            to: 'asdfghj',
                            message: "[resp:true]"
                        });
                        // 需要反向添加对方好友
                        conn.subscribe({
                            to: message.from,
                            message: "[resp:true]"
                        });
                    };
                    // 拒绝对方添加好友
                    document.getElementById('rejectFriends').onclick = function (message) {
                        conn.unsubscribed({
                            to: message.from,
                            message: "rejectAddFriend" // 拒绝添加好友回复信息
                        });
                    };

                    break;
                case 'subscribed': // 对方同意添加好友，已方同意添加好友
                    break;
                case 'unsubscribe': // 对方删除好友
                    break;
                case 'unsubscribed': // 被拒绝添加好友，或被对方删除好友成功
                    break;
                case 'joinChatRoomSuccess': // 成功加入聊天室
                    console.log('join chat room success');
                    break;
                case 'joinChatRoomFaild': // 加入聊天室失败
                    console.log('join chat room faild');
                    break;
                case 'joinPublicGroupSuccess': // 意义待查
                    console.log('join public group success', message.from);
                    break;
            }
        }, //收到联系人订阅请求（加好友）、处理群组、聊天室被踢解散等消息
        onRoster: function (message) {
            console.log('Roster');
        }, //处理好友申请
        onInviteMessage: function (message) {
            console.log('Invite');
        }, //处理群组邀请
        onOnline: function () {
            console.log('onLine');
        }, //本机网络连接成功
        onOffline: function () {
            console.log('offline');
        }, //本机网络掉线
        onError: function (message) {
            console.log('Error');
        }, //失败回调
        onBlacklistUpdate: function (list) {
            // 查询黑名单，将好友拉黑，将好友从黑名单移除都会回调这个函数，list则是黑名单现有的所有好友信息
            console.log(list);
        } // 黑名单变动
    });







    // 业务逻辑---------------------------------------
    var groupChat = {
        init: function () {
            this.login();
            this.sendMsg();
        },
        // 自动登录
        login: function () {
            var option = {
                apiUrl: WebIM.config.apiURL,
                user: 'lipeng111',
                pwd: 'li940208',
                appKey: WebIM.config.appkey
            };
            conn.open(option);
        },
        // 发送群消息
        sendMsg: function () {
            var _this = this;
            $("#sendMsg").on("click", function () {
                _this.sendGroupText();
            })
        },
        // 滚至底部
        scrollbtm: function () {
            $('.main-cantainer').animate({
                scrollTop: 10000
            }, 500);
        },
        //接收群组消息
        getGroupMsg: function (message) {
            var _this = this;
            $(".js-chartBox").append("<div class='msgItem otherMsg clearfix'>" +
                "<div class='userIcon floatl'><img src='../../css/img/usericon.jpg' ></div>" +
                "<p class='user-msg floatl'>" + message.data + "</div>")
            _this.scrollbtm();
        },
        // 发送群消息
        sendGroupText: function () {
            var _this = this;
            var msgTxt = $("#msgbox").val();
            var id = conn.getUniqueId(); // 生成本地消息id
            var msg = new WebIM.message('txt', id); // 创建文本消息
            var option = {
                msg: msgTxt, // 消息内容
                to: '9207342497796', // 接收消息对象(群组id)
                roomType: false,
                chatType: 'chatRoom',
                success: function () {
                    $("#msgbox").val("");
                    $(".js-chartBox").append("<div data-userId='" + id + "'  class='msgItem mineMsg clearfix'>" +
                        "<div class='userIcon floatr'><img src='../../css/img/usericon.jpg' ></div>" +
                        "<p class='user-msg floatr'>" + msgTxt + "</div>");
                    _this.scrollbtm();
                },
                fail: function () {
                    console.log('failed');
                }
            };
            msg.set(option);
            msg.setGroup('groupchat');
            conn.send(msg.body);
        }
    }
    groupChat.init();
})