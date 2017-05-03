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

            $.toastr("环信连接成功");

        },
        onTextMessage: function (message) {
            // 在此接收和处理消息，根据message.tnype区分消息来源，私聊或群组或聊天
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
        },

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
        // 登录用户信息
        userName: "lipeng",
        userPsd: "li940208",
        // 群组所有用户信息
        userinfo: "",
        // 群组ID
        groupId: "9207342497796",
        // 入口函数
        init: function () {
            this.login();
            this.chatUserInfo();
        },
        // 查看其他用户个人信息
        chatUserInfo: function () {
            $(document).on("click", ".js-chatUserInfo", function () {
                // 请求该用户数据
                // success
                $("#chatUserInfo_modal").show();
            })
        },
        // 添加好友
        addImFriend: function () {
            var _this = this;
            $(document).on("click", "js-addImFriend", function () {
                _this.add_ImFriend(userId);
            })
        },
        //  自动登录
        login: function () {
            var option = {
                apiUrl: WebIM.config.apiURL,
                user: this.userName,
                pwd: this.userPsd,
                appKey: WebIM.config.appkey
            };
            conn.open(option);
        },


        //发送好友请求
        add_ImFriend: function (userId) {
            conn.subscribe({
                to: userId,
                message: '加个好友呗!'
            });
        },



    }
    groupChat.init();

})