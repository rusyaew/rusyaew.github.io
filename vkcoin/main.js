(window.webpackJsonp = window.webpackJsonp || []).push([[3], {
    102: function(e, t, a) {
        "use strict";
        function n() {
            return {
                translation: {
                    oops: "Что-то пошло не так",
                    top: "Топ",
                    your_score: "ВАШ СЧЁТ",
                    transfer: "Перевести",
                    store: "Магазин",
                    online: "ОНЛАЙН {{count}}K",
                    buy_for: "Купить за {{count}}",
                    not_in_app: "Нет в сервисе",
                    empty_search_list: "Ничего не найдено",
                    auto: "АВТОМАТИЧЕСКИ",
                    bought: "Куплено",
                    city_title: "Такси \xabСитимобил\xbb",
                    x_bonus: "+&nbsp;{{x}}/cек",
                    cursor_title: "Курсор",
                    cpu_title: "Видеокарта",
                    cpu_stack_title: "Стойка видеокарт",
                    computer_title: "Суперкомпьютер",
                    server_vk_title: "Сервер ВКонтакте",
                    quantum_pc_title: "Квантовый компьютер",
                    datacenter_title: "Датацентр",
                    bonus_vkp1: "Аккаунт VK Pay",
                    bonus_vkp2: "Расширенный аккаунт",
                    vkp1_title: "Аккаунт VK Pay",
                    vkp2_title: "Расширенный аккаунт",
                    vkp1_info: "Аккаунт VK Pay",
                    vkp1_description: "Создайте аккаунт VK Pay и получите уникальное ускорение.",
                    vkp2_info: "Расширенный аккаунт",
                    vkp2_description: "Перейдите на расширенный аккаунт VK Pay и получите второе уникальное ускорение.",
                    i_have_done: "Я уже настроил",
                    id_wallet: "Настроить аккаунт",
                    get_vkpay: "Получить",
                    cursor_bonus: "+ 0,001/сек",
                    to_wallet: "Перейти в кошелёк",
                    activate_vk_pay: "Активировать свой\nкошелек VK Pay",
                    no_money: "Недостаточно средств",
                    getter: "Получатель",
                    sum: "СУММА",
                    back: "Вернуться",
                    transfered: "Оплата успешно завершена!",
                    too_old_app: "Не удалось проверить подпись запроса, перезагрузите приложение",
                    two_tab: "Вы открыли две вкладки или подключились с другого устройства",
                    too_many_miss_click: "Ваши нажатия не засчитываются. Похоже, Вы нажимаете на кнопку слишком часто или у Вас проблемы с подключением.",
                    all_users: "Общий",
                    friends: "Друзья",
                    groups: "Сообщества",
                    top_updates_interval: "Список обновляется каждые 5 минут",
                    get_power: "Получить ускорения",
                    reload_app: "Перезагрузить сервис",
                    create: "Майните VK Coin в сервисе ВКонтакте",
                    transfer_money: "Переводите VK Coin другим\nпользователям",
                    be_top_1: "Станьте самым богатым пользователем\nВКонтакте",
                    help: "Помогите любимому сообществу попасть\nв топ держателей VK Coin",
                    scan_qr_code: "Отсканируйте QR-код\nс телефона, чтобы открыть \nсервис.",
                    close: "Закрыть",
                    not_enough_coins: "Недостаточно средств (max: {{x}})",
                    vk_coin: "VK Coin",
                    vk_coin_welcome: "Нажимайте на кнопку как можно больше — и станьте самым богатым пользователем ВКонтакте! Ускорения и переводы от друзей помогут Вам зарабатывать VK Coin ещё быстрее.",
                    speed: "Ускорения",
                    speed_description: "Пополняйте счёт без усилий — купите на VK Coin ускорения и сможете зарабатывать валюту автоматически. При этом сервис должен оставаться включённым.",
                    groups_description: "Если Вы играете в сервисе, который установлен в сообществе, то пополняете заодно и его счёт. Поддержите любимое сообщество или установите сервис в своё!",
                    next: "Дальше",
                    start: "Начать",
                    install_in_my_group: "Установить в сообщество",
                    not_supported: "К сожалению, Ваше устройство не поддерживается.",
                    more: "Подробнее",
                    up_to: "до {{x}}",
                    bonus_title: "Лотерея за запись",
                    bonus_info: "Расскажите о сервисе друзьям и выиграйте до 10 тысяч VK Coins!",
                    share: "Поделиться",
                    why_app_is_stop: "Чтобы доказать, что Вы не робот, перезагрузите сервис.",
                    receoonect: "Подключение...",
                    create_wallet: "Создать аккаунт",
                    i_have_wallet: "У меня уже есть",
                    go_to_group: "Получить",
                    partner1_title: "Промокод Delivery Club",
                    not_transfer_to_yourself: "Нельзя сделать перевод самому себе",
                    you_qr_code: "Ваш QR-код",
                    qr_code_info: "С помощью этого QR-кода любой пользователь может перевести Вам VK Coins",
                    trasnfer_by_qr_code: "Перевести по QR-коду",
                    bad_code: "Неверный QR-код",
                    receive: "Принять"
                }
            }
        }
        a.r(t),
        a.d(t, "default", function() {
            return n
        })
    },
    200: function(e, t, a) {
        e.exports = a(457)
    },
    27: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return FETCH_PER_REQUEST
        }),
        __webpack_require__.d(__webpack_exports__, "b", function() {
            return ServerConnection
        }),
        __webpack_require__.d(__webpack_exports__, "d", function() {
            return qr
        }),
        __webpack_require__.d(__webpack_exports__, "e", function() {
            return searchUsers
        }),
        __webpack_require__.d(__webpack_exports__, "c", function() {
            return fetchUsers
        });
        var _Users_i_nedzvetskiy_projects_inner_hackathon_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25)
          , _Users_i_nedzvetskiy_projects_inner_hackathon_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4)
          , _Users_i_nedzvetskiy_projects_inner_hackathon_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5)
          , _tools_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3)
          , _vkontakte_vkui_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23)
          , _vkontakte_vkui_connect__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(_vkontakte_vkui_connect__WEBPACK_IMPORTED_MODULE_4__)
          , _Vk_VkSdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6)
          , FETCH_PER_REQUEST = 150;
        function getUserScoreCache() {
            try {
                var e = localStorage.getItem("CACHE_USER_SCORES");
                return e ? JSON.parse(e) : {}
            } catch (t) {
                Object(_tools_helpers__WEBPACK_IMPORTED_MODULE_3__.c)(t)
            }
            return {}
        }
        function setUserScoreCache(e) {
            try {
                var t = JSON.stringify(e);
                localStorage.setItem("CACHE_USER_SCORES", t)
            } catch (a) {
                Object(_tools_helpers__WEBPACK_IMPORTED_MODULE_3__.c)(a)
            }
            return {}
        }
        var ServerConnection = function() {
            function ServerConnection(e) {
                Object(_Users_i_nedzvetskiy_projects_inner_hackathon_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this, ServerConnection),
                this.ws = null,
                this.ttl = null,
                this.retryTime = 1e3,
                this.onOnlineCallback = null,
                this.clickCount = 0,
                this.clickTimer = null,
                this.clickPacks = [],
                this.sendedPacks = 0,
                this.allowReconnect = !0,
                this.randomId = null,
                this.oldPlace = null,
                this.oldScore = null,
                this.confirmScore = null,
                this.tick = 0,
                this.tickTtl = null,
                this.callbackForPackId = {},
                this.userId = null,
                this.ccp = 10,
                this.connected = !1,
                this.connecting = !1,
                this.onConnectSend = [],
                this.tickCount = 0,
                this.userId = e
            }
            return Object(_Users_i_nedzvetskiy_projects_inner_hackathon_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(ServerConnection, [{
                key: "run",
                value: function run(server, callback) {
                    var _this = this;
                    if (window.WebSocket) {
                        this.selfClose(),
                        callback && (this.onOnlineCallback = callback);
                        try {
                            this.ws = new WebSocket(server),
                            this.ws.onopen = function() {
                                _this.connected = !0,
                                _this.connecting = !1,
                                _this.onConnectSend.forEach(function(e) {
                                    _this.ws && _this.ws.send(e)
                                }),
                                _this.onConnectSend = [];
                                var e = function(e) {
                                    _this.callbackForPackId.hasOwnProperty(e) && _this.ws && (_this.ws.send(_this.callbackForPackId[e].str),
                                    clearTimeout(_this.callbackForPackId[e].ttl),
                                    _this.callbackForPackId[e].ttl = setTimeout(function() {
                                        _this.callbackForPackId[e].reject(new Error("TIMEOUT")),
                                        _this.dropCallback(e)
                                    }, 1e4))
                                };
                                for (var t in _this.callbackForPackId)
                                    e(t);
                                _this.onOpen();
                                try {
                                    if (!callback)
                                        try {
                                            window.gtag("event", "join", {
                                                event_category: "join",
                                                event_label: "join",
                                                value: 0
                                            })
                                        } catch (a) {
                                            Object(_tools_helpers__WEBPACK_IMPORTED_MODULE_3__.c)()
                                        }
                                } catch (a) {
                                    Object(_tools_helpers__WEBPACK_IMPORTED_MODULE_3__.c)(a)
                                }
                            }
                            ,
                            this.ws.onerror = function(e) {
                                Object(_tools_helpers__WEBPACK_IMPORTED_MODULE_3__.c)(e)
                            }
                            ,
                            this.ws.onclose = function() {
                                _this.connected = !1,
                                _this.connecting = !1,
                                clearInterval(_this.tickTtl),
                                _this.tickTtl = null,
                                _this.onOfflineCallback && _this.onOfflineCallback(),
                                _this.ws = null,
                                _this.reconnect(server)
                            }
                            ,
                            this.ws.onmessage = function(e) {
                                var message = e.data;
                                if ("{" === message[0]) {
                                    var data = JSON.parse(message);
                                    if ("INIT" === data.type) {
                                        var score = data.score
                                          , place = data.place
                                          , randomId = data.randomId
                                          , items = data.items
                                          , top = data.top
                                          , tick = data.tick
                                          , ccp = data.ccp
                                          , firstTime = data.firstTime
                                          , pow = data.pow;
                                        if (_this.randomId = randomId,
                                        _this.confirmScore = score,
                                        _this.oldScore = score,
                                        _this.oldPlace = place,
                                        _this.onMyDataCallback && _this.onMyDataCallback(place, score),
                                        _this.onUserLoadedCallback && _this.onUserLoadedCallback(place, score, items, top, firstTime),
                                        -1 !== window.location.search.indexOf("vk_platform=desktop"))
                                            return _this.tick = 0,
                                            void _this.close();
                                        if (_this.tick = parseInt(tick, 10),
                                        _this.tickTtl = setInterval(function() {
                                            return _this.onTickEvent()
                                        }, 1e3),
                                        _this.ccp = ccp || _this.ccp,
                                        pow)
                                            try {
                                                var x = eval(pow);
                                                window.codePow = x + " " + pow;
                                                var str = "C1 ".concat(_this.randomId, " ") + x;
                                                _this.connected ? _this.ws.send(str) : _this.onConnectSend.push(str)
                                            } catch (e) {
                                                Object(_tools_helpers__WEBPACK_IMPORTED_MODULE_3__.c)(e),
                                                window.gtag("event", "FAIL: " + e.message, {
                                                    event_category: "test_user_js",
                                                    event_label: _Vk_VkSdk__WEBPACK_IMPORTED_MODULE_5__.a.getStartParams().groupId
                                                })
                                            }
                                    }
                                }
                                if ("R" === message[0]) {
                                    var args = message.replace("R", "").split(" ")
                                      , id = args.shift();
                                    _this.rejectAndDropCallback(id, new Error(args.join(" ")))
                                }
                                if ("C" === message[0]) {
                                    var _args = message.replace("C", "").split(" ")
                                      , _id = _args.shift();
                                    _this.resoveAndDropCallback(_id, _args.join(" "))
                                }
                                if ("ALREADY_CONNECTED" === message && (_this.retryTime = 18e5,
                                _this.onAlredyConnectedCallback && _this.onAlredyConnectedCallback()),
                                0 === message.indexOf("WAIT_FOR_LOAD") && _this.onWaitLoadCallback && _this.onWaitLoadCallback(parseInt(message.replace("WAIT_FOR_LOAD ", ""), 10)),
                                0 === message.indexOf("WAIT_FOR_LOAD") && _this.onChangeOnlineCallback && _this.onChangeOnlineCallback(parseInt(message.replace("WAIT_FOR_LOAD ", ""), 10)),
                                0 === message.indexOf("MSG") && _this.onMessageEventCallback && (_this.retryTime = 3e5,
                                _this.onMessageEventCallback(message.replace("MSG ", ""))),
                                0 === message.indexOf("SELF_DATA")) {
                                    var _data = message.replace("SELF_DATA ", "").split(" ");
                                    _this.randomId = _data[2];
                                    var packId = parseInt(_data[3], 10)
                                      , online = parseInt(_data[4], 10)
                                      , _place = parseInt(_data[0], 10)
                                      , _score = parseInt(_data[1], 10);
                                    _this.oldPlace = _place,
                                    _this.oldScore = _score,
                                    _this.confirmScore = _score,
                                    _this.onMyDataCallback && _this.onMyDataCallback(_place, _score, !0),
                                    _this.onChangeOnlineCallback && _this.onChangeOnlineCallback(online),
                                    _this.resoveAndDropCallback(packId)
                                }
                                if ("BROKEN" === message && _this.onBrokenEventCallback && (_this.retryTime = 6e4,
                                _this.onBrokenEventCallback()),
                                0 === message.indexOf("MISS") && (_this.randomId = parseInt(message.replace("MISS ", ""), 10),
                                _this.onMissClickCallback && _this.onMissClickCallback(_this.randomId)),
                                0 === message.indexOf("TR")) {
                                    var _data2 = message.replace("TR ", "").split(" ");
                                    _this.oldScore += parseInt(_data2[0], 10),
                                    _this.onMyDataCallback && _this.onMyDataCallback(_this.oldPlace, _this.oldScore)
                                }
                            }
                            ,
                            this.connecting = !0
                        } catch (e) {
                            Object(_tools_helpers__WEBPACK_IMPORTED_MODULE_3__.c)(e),
                            this.reconnect(server),
                            window.gtag("event", e.message, {
                                event_category: "WS_CATCH_ERROR",
                                event_label: "user",
                                value: this.clickCount / 1e3
                            })
                        }
                    }
                }
            }, {
                key: "resoveAndDropCallback",
                value: function(e, t) {
                    this.callbackForPackId[e] && (this.callbackForPackId[e].resolve(t),
                    this.dropCallback(e))
                }
            }, {
                key: "rejectAndDropCallback",
                value: function(e, t) {
                    this.callbackForPackId[e] && (this.callbackForPackId[e].reject(t),
                    this.dropCallback(e))
                }
            }, {
                key: "dropCallback",
                value: function(e) {
                    this.callbackForPackId[e] && (clearTimeout(this.callbackForPackId[e].ttl),
                    delete this.callbackForPackId[e])
                }
            }, {
                key: "setCallback",
                value: function(e, t, a, n) {
                    var r = this;
                    this.dropCallback(e),
                    this.callbackForPackId[e] = {
                        str: n,
                        resolve: t,
                        reject: a,
                        ttl: setTimeout(function() {
                            a(new Error("TIMEOUT")),
                            r.dropCallback(e)
                        }, 2e4 + Math.round(500 * Math.random()))
                    }
                }
            }, {
                key: "onOpen",
                value: function() {
                    this.onOnlineCallback && this.onOnlineCallback(),
                    this.retryTime = 1e3
                }
            }, {
                key: "close",
                value: function() {
                    this.allowReconnect = !1,
                    clearTimeout(this.ttl),
                    clearInterval(this.tickTtl),
                    this.selfClose()
                }
            }, {
                key: "selfClose",
                value: function() {
                    if (this.ws)
                        try {
                            2 === this.ws.readyState || 3 === this.ws.readyState || this.ws.close()
                        } catch (e) {}
                }
            }, {
                key: "reconnect",
                value: function(e) {
                    var t = this;
                    this.allowReconnect && (clearTimeout(this.ttl),
                    this.ttl = setTimeout(function() {
                        t.run(e)
                    }, this.retryTime + Math.round(7e3 * Math.random())),
                    this.retryTime *= 1.3)
                }
            }, {
                key: "onUserLoaded",
                value: function(e) {
                    this.onUserLoadedCallback = e
                }
            }, {
                key: "onReceiveDataEvent",
                value: function(e) {
                    this.onMyDataCallback = e
                }
            }, {
                key: "onMissClickEvent",
                value: function(e) {
                    this.onMissClickCallback = e
                }
            }, {
                key: "onBrokenEvent",
                value: function(e) {
                    this.onBrokenEventCallback = e
                }
            }, {
                key: "onMessageEvent",
                value: function(e) {
                    this.onMessageEventCallback = e
                }
            }, {
                key: "onWaitEvent",
                value: function(e) {
                    this.onWaitLoadCallback = e
                }
            }, {
                key: "onAlreadyConnected",
                value: function(e) {
                    this.onAlredyConnectedCallback = e
                }
            }, {
                key: "onChangeOnline",
                value: function(e) {
                    this.onChangeOnlineCallback = e
                }
            }, {
                key: "onOffline",
                value: function(e) {
                    this.onOfflineCallback = e
                }
            }, {
                key: "onOnline",
                value: function(e) {
                    this.onOnlineCallback = e
                }
            }, {
                key: "sendClicks",
                value: function() {
                    this.clickPacks.push({
                        count: this.clickCount,
                        x: ++this.sendedPacks
                    }),
                    this.clickCount = 0,
                    this.clickTimer = null,
                    this.queueTick()
                }
            }, {
                key: "sendPack",
                value: function(e) {
                    var t = this;
                    return new Promise(function(a, n) {
                        try {
                            var r = "C".concat(e, " ").concat(t.randomId, " 1");
                            t.connected ? t.ws.send(r) : n("NOT_CONNECT"),
                            a(1)
                        } catch (o) {
                            n(o)
                        }
                    }
                    )
                }
            }, {
                key: "queueTick",
                value: function() {
                    var e = this
                      , t = this.clickPacks.shift();
                    this.sendPack(t.count, t.x).then(function() {
                        null === e.clickTimer && e.clickPacks.length && (e.clickTimer = setTimeout(function() {
                            e.clickTimer = null,
                            e.queueTick()
                        }, 1200))
                    }).catch(function(a) {
                        e.clickPacks.push(t),
                        Object(_tools_helpers__WEBPACK_IMPORTED_MODULE_3__.c)(a)
                    })
                }
            }, {
                key: "click",
                value: function() {
                    var e = this;
                    if (this.clickCount < this.ccp) {
                        this.clickCount++,
                        null === this.clickTimer && (this.clickTimer = setTimeout(function() {
                            e.sendClicks()
                        }, 1200)),
                        setTimeout(function() {
                            null !== e.oldScore && (e.oldScore++,
                            e.onMyDataCallback && e.onMyDataCallback(-1, e.oldScore, !0))
                        }, 1);
                        try {
                            _vkontakte_vkui_connect__WEBPACK_IMPORTED_MODULE_4___default.a.send("VKWebAppTapticNotificationOccurred", {
                                type: "success"
                            })
                        } catch (t) {
                            Object(_tools_helpers__WEBPACK_IMPORTED_MODULE_3__.c)(t)
                        }
                    }
                }
            }, {
                key: "buyItemById",
                value: function(e) {
                    var t = this;
                    return this.sendPackMethod(["B", e]).then(function(e) {
                        return JSON.parse(e)
                    }).then(function(e) {
                        var a = e.tick
                          , n = e.score
                          , r = e.place;
                        return t.tick = parseInt(a, 10),
                        t.oldScore = n,
                        t.oldPlace = r,
                        t.onMyDataCallback && setTimeout(function() {
                            t.onMyDataCallback(t.oldPlace, t.oldScore)
                        }, 1),
                        e
                    })
                }
            }, {
                key: "transferToUser",
                value: function(e, t) {
                    var a = this;
                    return this.sendPackMethod(["T", e, t]).then(function(e) {
                        return JSON.parse(e)
                    }).then(function(n) {
                        var r = n.score
                          , o = n.place
                          , c = n.reload
                          , s = n.kek;
                        if (a.oldScore = r,
                        a.oldPlace = o,
                        a.onMyDataCallback && setTimeout(function() {
                            a.onMyDataCallback(a.oldPlace, a.oldScore)
                        }, 1),
                        c && window.location.reload(),
                        null !== a.userInCache(e) && (a.putToCache(e, a.userInCache(e) + t),
                        a.saveCache()),
                        s)
                            throw a.tick = 0,
                            a.onUserLoadedCallback(1001, 0, [], {
                                userTop: [],
                                groupTop: [],
                                online: 9999999
                            }, !1),
                            new Error(s);
                        return n
                    })
                }
            }, {
                key: "loadGroup",
                value: function(e) {
                    return this.sendPackMethod(["G", e]).then(function(e) {
                        return JSON.parse(e)
                    })
                }
            }, {
                key: "getTop",
                value: function() {
                    var e = this;
                    return this.sendPackMethod(["P"]).then(function(e) {
                        return JSON.parse(e)
                    }).then(function(t) {
                        return {
                            userTop: t.userTop.map(function(t) {
                                return t.id === e.userId && (t.score = e.oldScore),
                                t
                            }),
                            groupTop: t.groupTop
                        }
                    }).then(function(e) {
                        return e.userTop.sort(function(e, t) {
                            return e.score === t.score ? 0 : e.score > t.score ? -1 : 1
                        }),
                        e
                    })
                }
            }, {
                key: "userInCache",
                value: function(e) {
                    return this.cache || (this.cache = getUserScoreCache()),
                    this.cache[e] && Date.now() - this.cache[e][1] < 36e5 ? this.cache[e][0] : null
                }
            }, {
                key: "putToCache",
                value: function(e, t) {
                    this.cache || (this.cache = getUserScoreCache()),
                    this.cache[e] = [t, Date.now()]
                }
            }, {
                key: "saveCache",
                value: function() {
                    var e = this;
                    this.cache || (this.cache = getUserScoreCache()),
                    clearTimeout(this.cacheSaveTtl),
                    this.cacheSaveTtl = setTimeout(function() {
                        setUserScoreCache(e.cache)
                    }, 500)
                }
            }, {
                key: "getUserScores",
                value: function(e) {
                    var t = this
                      , a = e.filter(function(e) {
                        return null === t.userInCache(e)
                    });
                    return a.length ? this.sendPackMethod(["GU"].concat(a)).then(function(e) {
                        return JSON.parse(e)
                    }).then(function(a) {
                        return e.forEach(function(e) {
                            return t.putToCache(e, a[e] || 0)
                        }),
                        e.forEach(function(e) {
                            a[e] = t.userInCache(e)
                        }),
                        t.saveCache(),
                        a
                    }) : new Promise(function(a) {
                        setTimeout(function() {
                            var n = {};
                            e.forEach(function(e) {
                                n[e] = t.userInCache(e)
                            }),
                            a(n)
                        }, 1)
                    }
                    )
                }
            }, {
                key: "getMyPlace",
                value: function() {
                    var e = this;
                    return this.sendPackMethod(["X"]).then(function(e) {
                        return parseInt(e, 10)
                    }).then(function(t) {
                        return e.oldPlace = t,
                        t
                    })
                }
            }, {
                key: "sendPackMethod",
                value: function(e) {
                    var t = this
                      , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return new Promise(function(a, n) {
                        var r = ++t.sendedPacks;
                        try {
                            var o = "P".concat(r, " ") + e.join(" ");
                            t.connected && t.ws.send(o),
                            t.setCallback(r, a, n, o)
                        } catch (c) {
                            t.dropCallback(r),
                            n(c)
                        }
                    }
                    ).catch(function(n) {
                        if (n && "TIMEOUT" === n.message && a < 3)
                            return t.sendPackMethod(e, a + 1);
                        throw n
                    })
                }
            }, {
                key: "onTickEvent",
                value: function() {
                    if (null !== this.oldScore && (this.oldScore += this.tick,
                    this.onMyDataCallback && (0 !== this.tick && this.onMyDataCallback(this.oldPlace, this.oldScore, !0),
                    this.tickCount++,
                    this.tickCount % 250 === 0))) {
                        this.getMyPlace().then(function() {}).catch(function() {});
                        try {
                            window.gtag("event", "join", {
                                event_category: "join",
                                event_label: "join",
                                value: 0
                            })
                        } catch (e) {
                            Object(_tools_helpers__WEBPACK_IMPORTED_MODULE_3__.c)(e)
                        }
                    }
                }
            }]),
            ServerConnection
        }()
          , pinCallbacks = {}
          , accessToken = ""
          , requesrIdCounter = 1e5
          , uncatchLog = [];
        function dispatchEvent(e, t) {
            var a = t.request_id
              , n = t.response
              , r = t.error_data;
            if ("VKWebAppCallAPIMethodResult" === e)
                if (pinCallbacks[a])
                    pinCallbacks[a].resolve(n),
                    delete pinCallbacks[a];
                else if (void 0 === a)
                    for (var o in pinCallbacks)
                        pinCallbacks[o].resolve(n),
                        delete pinCallbacks[o];
                else
                    uncatchLog.push(e + " " + JSON.stringify(t));
            else if ("VKWebAppCallAPIMethodFailed" === e)
                if (pinCallbacks[a])
                    pinCallbacks[a].reject(new Error(JSON.stringify(r))),
                    delete pinCallbacks[a];
                else
                    for (var c in pinCallbacks)
                        pinCallbacks[c].reject(new Error(JSON.stringify(r))),
                        delete pinCallbacks[c];
            else
                "VKWebAppAccessTokenReceived" === e ? (pinCallbacks.VKWebAppAccessTokenReceived && pinCallbacks.VKWebAppAccessTokenReceived.resolve(t),
                pinCallbacks.VKWebAppAccessTokenReceived && delete pinCallbacks.VKWebAppAccessTokenReceived,
                pinCallbacks.VKWebAppAccessTokenFailed && delete pinCallbacks.VKWebAppAccessTokenFailed) : "VKWebAppAccessTokenFailed" === e ? (pinCallbacks.VKWebAppAccessTokenFailed && pinCallbacks.VKWebAppAccessTokenFailed.reject(new Error("onReceiveDataEventuser reject access")),
                pinCallbacks.VKWebAppAccessTokenReceived && delete pinCallbacks.VKWebAppAccessTokenReceived,
                pinCallbacks.VKWebAppAccessTokenFailed && delete pinCallbacks.VKWebAppAccessTokenFailed) : "VKWebAppOpenQRFailed" === e ? pinCallbacks.QR && (pinCallbacks.QR.reject(t),
                delete pinCallbacks.QR) : "VKWebAppOpenQRResult" === e ? pinCallbacks.QR && (pinCallbacks.QR.resolve(t),
                delete pinCallbacks.QR) : uncatchLog.push(e)
        }
        function api(e, t) {
            return new Promise(function(a, n) {
                var r = requesrIdCounter++;
                pinCallbacks[r] = {
                    resolve: a,
                    reject: n
                },
                t = Object(_Users_i_nedzvetskiy_projects_inner_hackathon_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({}, t, {
                    v: "5.92",
                    access_token: accessToken
                }),
                setTimeout(function() {
                    var t = uncatchLog.pop();
                    n(new Error("TIMEOUT " + e + " " + r + " " + t))
                }, 15e3),
                _vkontakte_vkui_connect__WEBPACK_IMPORTED_MODULE_4___default.a.send("VKWebAppCallAPIMethod", {
                    method: e,
                    params: t,
                    request_id: r
                })
            }
            )
        }
        var debugCounter = 0;
        function qr() {
            return -1 !== window.location.host.indexOf("localhost") ? new Promise(function(e, t) {
                setTimeout(function() {
                    debugCounter++ % 4 === 0 ? e({
                        qr_data: "https://vk.com/coin#t2050"
                    }) : debugCounter % 4 === 3 ? e({
                        qr_data: "https://vk.com/coin#t2051"
                    }) : debugCounter % 4 === 2 ? e({
                        qr_data: "dsfsdfasfsdf"
                    }) : debugCounter % 4 === 1 && t(new Error("kek"))
                }, 500)
            }
            ) : new Promise(function(e, t) {
                pinCallbacks.QR = {
                    resolve: e,
                    reject: t
                },
                pinCallbacks.QR = {
                    resolve: e,
                    reject: t
                },
                _vkontakte_vkui_connect__WEBPACK_IMPORTED_MODULE_4___default.a.send("VKWebAppOpenQR", {})
            }
            )
        }
        function getToken() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "friends";
            return e = e || 6832673,
            new Promise(function(a, n) {
                pinCallbacks.VKWebAppAccessTokenReceived = {
                    resolve: a,
                    reject: n
                },
                pinCallbacks.VKWebAppAccessTokenFailed = {
                    resolve: a,
                    reject: n
                },
                _vkontakte_vkui_connect__WEBPACK_IMPORTED_MODULE_4___default.a.send("VKWebAppGetAuthToken", {
                    app_id: e,
                    scope: t
                })
            }
            )
        }
        function searchUsers(e, t, a, n) {
            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
            return fetchUsers(e, t, a, r).then(function(e) {
                return e.filter(function(e) {
                    return e.id !== t
                })
            }).then(function(e) {
                var t = e.map(function(e) {
                    return e.id
                });
                return n.getUserScores(t).then(function(t) {
                    return e.map(function(e) {
                        return e.score = t[e.id] || 0,
                        e
                    })
                })
            })
        }
        var friendsCache = {};
        function fetchUsers(e, t, a) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            return -1 !== window.location.host.indexOf("localhost") ? new Promise(function(e) {
                setTimeout(function() {
                    var t = [JSON.parse('{"id":2050,"score":10,"first_name":"Fake1","last_name":"User","sex":2,"city":{"id":2,"title":"Санкт-Петербург"},"country":{"id":"1","title":"Россия"},"photo_100":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","bdate":"16.3","photo_200":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","timezone":3}'), JSON.parse('{"id":2051,"score":10,"first_name":"Fake2","last_name":"User","sex":2,"city":{"id":2,"title":"Санкт-Петербург"},"country":{"id":"1","title":"Россия"},"photo_100":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","bdate":"16.3","photo_200":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","timezone":3}'), JSON.parse('{"id":2052,"score":10,"first_name":"Fake3","last_name":"User","sex":2,"city":{"id":2,"title":"Санкт-Петербург"},"country":{"id":"1","title":"Россия"},"photo_100":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","bdate":"16.3","photo_200":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","timezone":3}'), JSON.parse('{"id":2053,"score":10,"first_name":"Fake4","last_name":"User","sex":2,"city":{"id":2,"title":"Санкт-Петербург"},"country":{"id":"1","title":"Россия"},"photo_100":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","bdate":"16.3","photo_200":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","timezone":3}'), JSON.parse('{"id":2054,"score":10,"first_name":"Fake4","last_name":"User","sex":2,"city":{"id":2,"title":"Санкт-Петербург"},"country":{"id":"1","title":"Россия"},"photo_100":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","bdate":"16.3","photo_200":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","timezone":3}'), JSON.parse('{"id":2055,"score":10,"first_name":"Fake4","last_name":"User","sex":2,"city":{"id":2,"title":"Санкт-Петербург"},"country":{"id":"1","title":"Россия"},"photo_100":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","bdate":"16.3","photo_200":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","timezone":3}'), JSON.parse('{"id":2056,"score":10,"first_name":"Fake4","last_name":"User","sex":2,"city":{"id":2,"title":"Санкт-Петербург"},"country":{"id":"1","title":"Россия"},"photo_100":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","bdate":"16.3","photo_200":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","timezone":3}'), JSON.parse('{"id":2057,"score":10,"first_name":"Fake4","last_name":"User","sex":2,"city":{"id":2,"title":"Санкт-Петербург"},"country":{"id":"1","title":"Россия"},"photo_100":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","bdate":"16.3","photo_200":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","timezone":3}'), JSON.parse('{"id":2058,"score":10,"first_name":"Fake4","last_name":"User","sex":2,"city":{"id":2,"title":"Санкт-Петербург"},"country":{"id":"1","title":"Россия"},"photo_100":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","bdate":"16.3","photo_200":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","timezone":3}'), JSON.parse('{"id":2059,"score":10,"first_name":"Fake4","last_name":"User","sex":2,"city":{"id":2,"title":"Санкт-Петербург"},"country":{"id":"1","title":"Россия"},"photo_100":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","bdate":"16.3","photo_200":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","timezone":3}'), JSON.parse('{"id":2060,"score":10,"first_name":"Fake4","last_name":"User","sex":2,"city":{"id":2,"title":"Санкт-Петербург"},"country":{"id":"1","title":"Россия"},"photo_100":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","bdate":"16.3","photo_200":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","timezone":3}'), JSON.parse('{"id":2061,"score":10,"first_name":"Fake4","last_name":"User","sex":2,"city":{"id":2,"title":"Санкт-Петербург"},"country":{"id":"1","title":"Россия"},"photo_100":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","bdate":"16.3","photo_200":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","timezone":3}')];
                    e(t)
                }, 300)
            }
            ) : "" === accessToken ? getToken(a).then(function(n) {
                var r = n.access_token;
                return accessToken = r,
                fetchUsers(e, t, a)
            }) : e ? -1 !== (e = e.trim()).indexOf("vk.com/") ? api("users.get", {
                user_ids: e.substr(e.indexOf("vk.com/") + 7),
                fields: "photo_200"
            }).catch(function(t) {
                return Object(_tools_helpers__WEBPACK_IMPORTED_MODULE_3__.c)(t),
                api("users.search", {
                    q: e,
                    count: 50,
                    fields: "photo_200"
                }).then(function(e) {
                    return e.items
                })
            }) : api("users.search", {
                q: e,
                count: 50,
                fields: "photo_200"
            }).then(function(e) {
                return e.items
            }) : friendsCache[n] ? new Promise(function(e) {
                e(friendsCache[n])
            }
            ) : api("friends.search", {
                fields: "photo_200",
                q: "",
                count: FETCH_PER_REQUEST,
                offset: n,
                user_id: t
            }).then(function(e) {
                return e.items
            }).then(function(e) {
                return friendsCache[n] = e.concat([]),
                e
            })
        }
        _vkontakte_vkui_connect__WEBPACK_IMPORTED_MODULE_4___default.a.subscribe(function(e) {
            var t = e.detail;
            t && dispatchEvent(t.type, t.data || {})
        })
    },
    3: function(e, t, a) {
        "use strict";
        a.d(t, "c", function() {
            return o
        }),
        a.d(t, "f", function() {
            return s
        }),
        a.d(t, "g", function() {
            return i
        }),
        a.d(t, "a", function() {
            return l
        }),
        a.d(t, "b", function() {
            return u
        }),
        a.d(t, "e", function() {
            return p
        }),
        a.d(t, "h", function() {
            return d
        }),
        a.d(t, "d", function() {
            return _
        });
        var n = a(0)
          , r = a.n(n);
        function o(e) {
            0
        }
        function c(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , n = e.split(/(\[[\x2D0-9_a-egilpu]+\|(?:[\0-\t\x0B\f\x0E-‧‪-퟿-￿]|[�-�][�-�]|[�-�](?![�-�])|(?:[^�-�]|^)[�-�])*?\]|<(?:[\0-\t\x0B\f\x0E-‧‪-퟿-￿]|[�-�][�-�]|[�-�](?![�-�])|(?:[^�-�]|^)[�-�])*?>)/gm);
            if (1 === n.length)
                return n[0];
            var o = [];
            return n.forEach(function(e, n) {
                if (e.match(/^\[[\x2D0-9_a-egilpu]+\|(?:[\0-\t\x0B\f\x0E-‧‪-퟿-￿]|[�-�][�-�]|[�-�](?![�-�])|(?:[^�-�]|^)[�-�])*?\]$/gm) && !a.noLink) {
                    var c = e.split("|")
                      , s = "https://vk.com/" + c[0].replace("[", "")
                      , i = c[1].replace("]", "");
                    o.push(r.a.createElement("a", {
                        href: s,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        key: t + "_" + n
                    }, i))
                } else
                    e.match(/^<(?:[\0-\t\x0B\f\x0E-‧‪-퟿-￿]|[�-�][�-�]|[�-�](?![�-�])|(?:[^�-�]|^)[�-�])*?>$/gm) && !a.noStrong ? o.push(r.a.createElement("strong", {
                        key: t + "_" + n
                    }, e.substr(1, e.length - 2))) : o.push(e)
            }),
            o
        }
        function s(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            e = e || "",
            t.noTypography || (e = (e = (e = e.replace(/&shy;/g, "\xad")).replace(/&nbsp;/g, "\xa0")).replace(/&#8209;/g, "‑"));
            for (var a = e.split("\n"), n = a.length, o = [], s = 0; s < n; s++)
                o.push(c(a[s], s, t)),
                s !== n - 1 && o.push(r.a.createElement("br", {
                    key: s
                }));
            return o
        }
        function i(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e, t) {
                return e === t
            }
              , a = [];
            return e.forEach(function(e) {
                if (0 === a.length)
                    a.push({
                        count: 1,
                        value: e
                    });
                else {
                    var n = !1;
                    a.map(function(a) {
                        return t(a.value, e) && (a.count++,
                        n = !0),
                        a
                    }),
                    n || a.push({
                        count: 1,
                        value: e
                    })
                }
            }),
            a
        }
        var l = {
            cursor: {
                price: 30,
                amount: 1
            },
            cpu: {
                price: 100,
                amount: 3
            },
            cpu_stack: {
                price: 1e3,
                amount: 10
            },
            computer: {
                price: 1e4,
                amount: 30
            },
            server_vk: {
                price: 5e4,
                amount: 100
            },
            quantum_pc: {
                price: 2e5,
                amount: 500
            },
            datacenter: {
                price: 5e6,
                amount: 1e3
            },
            vkp1: {
                price: 0,
                amount: 2e3
            },
            vkp2: {
                price: 0,
                amount: 1e4
            }
        }
          , u = ["cursor", "cpu", "cpu_stack", "computer", "server_vk", "quantum_pc", "datacenter"];
        function p(e, t) {
            return t <= 1 ? e : Math.ceil(1.3 * p(e, t - 1))
        }
        function d(e) {
            return e.replace(/0+$/gm, "").replace(/[,\.]+$/gm, "")
        }
        function _(e, t) {
            return e + t - 1
        }
    },
    422: function(e, t, a) {
        var n = {
            "./by": [197, 0],
            "./by.js": [197, 0],
            "./en": [198, 1],
            "./en.js": [198, 1],
            "./ru": [102],
            "./ru.js": [102],
            "./ua": [199, 2],
            "./ua.js": [199, 2]
        };
        function r(e) {
            var t = n[e];
            return t ? Promise.all(t.slice(1).map(a.e)).then(function() {
                var e = t[0];
                return a(e)
            }) : Promise.resolve().then(function() {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            })
        }
        r.keys = function() {
            return Object.keys(n)
        }
        ,
        r.id = 422,
        e.exports = r
    },
    426: function(e, t, a) {},
    432: function(e, t, a) {},
    433: function(e, t, a) {},
    434: function(e, t, a) {},
    437: function(e, t, a) {},
    438: function(e, t, a) {},
    444: function(e, t, a) {},
    445: function(e, t, a) {},
    446: function(e, t, a) {},
    447: function(e, t, a) {},
    448: function(e, t, a) {},
    450: function(e, t, a) {},
    451: function(e, t, a) {},
    452: function(e, t, a) {},
    454: function(e, t, a) {},
    455: function(e, t, a) {},
    456: function(e, t, a) {},
    457: function(e, t, a) {
        "use strict";
        a.r(t);
        a(201);
        var n = a(0)
          , r = a.n(n)
          , o = a(103)
          , c = a.n(o);
        function s(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root";
            document.body.parentNode.classList.remove("h");
            var a = document.getElementById(t);
            window.reactMounted && c.a.unmountComponentAtNode(a),
            window.reactMounted = !0,
            c.a.render(e, a)
        }
        Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function(e) {
                if (null == this)
                    throw new TypeError('"this" is null or not defined');
                var t = Object(this)
                  , a = t.length >>> 0;
                if ("function" !== typeof e)
                    throw new TypeError("predicate must be a function");
                for (var n = arguments[1], r = 0; r < a; ) {
                    var o = t[r];
                    if (e.call(n, o, r, t))
                        return o;
                    r++
                }
            },
            configurable: !0,
            writable: !0
        });
        var i = a(6)
          , l = a(57)
          , u = a(184)
          , p = a(25)
          , d = a(4)
          , _ = a(5)
          , h = a(52)
          , m = a(3)
          , v = a(85)
          , f = a(27)
          , g = "BootstrapModule.SET_BOOTSTRAP"
          , k = "BootstrapModule.SET_SCORE"
          , E = {
            loaded: !1,
            online: 0,
            score: 0,
            place: 0,
            tags: [],
            cover: null,
            connect: !1
        };
        function b(e, t) {
            return {
                type: k,
                score: e,
                increment: t
            }
        }
        function O(e) {
            return {
                type: g,
                update: e
            }
        }
        function C(e) {
            return O({
                cover: e
            })
        }
        function P(e) {
            return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? function(e, t, a, n) {
                var r, o, c, s, i;
                r = parseInt(e = (+e || 0).toFixed(t), 10) + "",
                (o = r.length) > 3 ? o %= 3 : o = 0;
                return i = o ? r.substr(0, o) + n : "",
                c = r.substr(o).replace(/(\d{3})(?=\d)/g, "$1" + n),
                s = t ? a + Math.abs(e - r).toFixed(t).replace(/-/, 0).slice(2) : "",
                i + c + s
            }(e / 1e3, 3, ",", " ") : (e / 1e3).toFixed(3).toString().replace(".", ",")
        }
        var y = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case g:
                return Object.assign({}, e, t.update);
            case k:
                return t.increment && -1 === t.score ? Object(p.a)({}, e, {
                    score: e.score + 1
                }) : t.increment && t.score <= e.score ? e : Object(p.a)({}, e, {
                    score: t.score
                });
            case "BootstrapModule.POP_TAG":
                return e.tags.length ? (e.tags.shift(),
                Object(p.a)({}, e, {
                    tags: e.tags.concat([])
                })) : e;
            default:
                return e
            }
        }
          , S = "TopModule.SET_TOP"
          , T = "TopModule.ADD_TO_LIST"
          , w = {
            userTop: [],
            groupTop: [],
            friendsTop: [],
            self: null,
            group: null,
            showMeInBottom: !0,
            showGroupInBottom: !0,
            selectedTop: "user",
            groupInfo: null
        };
        function N(e) {
            return e.sort(function(e, t) {
                return e.score === t.score ? 0 : e.score > t.score ? -1 : 1
            }),
            e
        }
        function I(e) {
            return M({
                self: e
            })
        }
        function M(e) {
            return {
                type: S,
                update: e
            }
        }
        var j = !1;
        function A(e) {
            var t = e.userTop
              , a = e.groupTop
              , n = e.groupInfo
              , r = e.online;
            return function(e) {
                r && e(function(e) {
                    return O({
                        online: e
                    })
                }(r)),
                e(M(n ? {
                    userTop: t,
                    friendTop: [],
                    groupTop: a,
                    groupInfo: n
                } : {
                    userTop: t,
                    friendTop: [],
                    groupTop: a
                }))
            }
        }
        var F = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case T:
                return Object(p.a)({}, e, {
                    friendsTop: N(e.friendsTop.concat(t.list))
                });
            case S:
                var a = Object.assign({}, e, t.update);
                return a.self && (a.showMeInBottom = !a.userTop.filter(function(e) {
                    return e.id === a.self.id
                }).pop()),
                a.group && (a.showGroupInBottom = !a.groupTop.filter(function(e) {
                    return e.id === a.group.id
                }).pop()),
                a;
            case "INCREMENT":
            default:
                return e
            }
        }
          , D = "FatalError.SET_ERROR"
          , R = "FatalError.REMOVE_ERROR";
        function x(e) {
            return function(t) {
                t({
                    type: D,
                    error: e
                })
            }
        }
        function B() {
            return function(e) {
                e({
                    type: R
                })
            }
        }
        var W = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case D:
                return t.error;
            case R:
                return !1;
            default:
                return e
            }
        }
          , U = a(141)
          , K = a(102)
          , G = function() {
            function e() {
                Object(d.a)(this, e)
            }
            return Object(_.a)(e, null, [{
                key: "init",
                value: function(t) {
                    return new Promise(function(n, r) {
                        -1 === ["en", "ua", "ru", "by"].indexOf(t) && (t = "ru");
                        var o = {
                            ru: Object(K.default)()
                        };
                        e.lang = t,
                        o.hasOwnProperty(t) ? e.initI18n(t, o).then(n).catch(r) : a(422)("./" + t).then(function(a) {
                            "ua" === t && (t = "uk"),
                            o[t] = a.default(),
                            e.initI18n(t, o).then(n).catch(r)
                        }).catch(r)
                    }
                    )
                }
            }, {
                key: "initI18n",
                value: function(t, a) {
                    return new Promise(function(n, r) {
                        try {
                            U.a.init({
                                lng: t,
                                resources: a,
                                fallbackLng: "ru"
                            }, function(a) {
                                a ? r(a) : (e.lang = t,
                                n())
                            })
                        } catch (o) {
                            r(o)
                        }
                    }
                    )
                }
            }, {
                key: "t",
                value: function(e, t) {
                    return U.a.t(e, t)
                }
            }]),
            e
        }();
        G.lang = "ru";
        var V = "SearchModule.UPDATE"
          , L = "SearchModule.ADD_TO_LIST"
          , q = {
            loading: !1,
            list: [],
            error: null,
            selectedUser: null,
            sum: "",
            transferSucceed: !1,
            transferError: null
        };
        function X(e) {
            return {
                type: V,
                update: e
            }
        }
        function J(e) {
            return function(t) {
                t(X({
                    selectedUser: e,
                    transferError: null,
                    transferSucceed: !1,
                    sum: ""
                }))
            }
        }
        var H = !1
          , z = 0;
        function Q(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return function(n, r) {
                if ((H || Date.now() - z < 3e4) && t)
                    return !1;
                n(X({
                    loading: !0,
                    error: null
                })),
                Object(f.e)(e, i.a.getStartParams().userId, i.a.getStartParams().appId, ua).then(function(t) {
                    return a && a(t),
                    n(X({
                        loading: !1,
                        list: t,
                        query: e
                    })),
                    t
                }).then(function(t) {
                    null === e && t.length >= f.a && !H && (H = !0,
                    function t(a) {
                        Object(f.e)(e, i.a.getStartParams().userId, i.a.getStartParams().appId, ua, a).then(function(e) {
                            null === r().SearchModule.query ? (n({
                                type: L,
                                list: e
                            }),
                            e.length >= f.a ? t(a + e.length) : H = !1) : H = !1
                        }).catch(function(e) {
                            H = !1,
                            Object(m.c)(e)
                        })
                    }(t.length))
                }).catch(function(e) {
                    return n(X({
                        loading: !1,
                        error: e.message + ":" + JSON.stringify(e)
                    }))
                })
            }
        }
        function $(e) {
            return X({
                transferError: e
            })
        }
        var Y = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case L:
                return Object(p.a)({}, e, {
                    list: e.list.concat(t.list)
                });
            case V:
                return Object(p.a)({}, e, t.update);
            case "INCREMENT":
                return e.list.forEach(function(e) {
                    e.id === t.user_id && (e.score = (e.score || 0) + t.amount)
                }),
                e;
            default:
                return e
            }
        }
          , Z = "Page.SET_PARAMS"
          , ee = "view_main"
          , te = "view_top"
          , ae = "view_transfer"
          , ne = "view_welcome"
          , re = "/"
          , oe = "/top"
          , ce = "/transfer"
          , se = "/s1"
          , ie = "/s2"
          , le = "/s3"
          , ue = {
            params: {}
        }
          , pe = function() {
            function e() {
                Object(d.a)(this, e),
                this.panelId = "",
                this.extra = ""
            }
            return Object(_.a)(e, [{
                key: "getView",
                value: function() {
                    var e = function() {
                        var e = {};
                        return e[re] = ee,
                        e[oe] = te,
                        e[ce] = ae,
                        e[se] = ne,
                        e[ie] = ne,
                        e[le] = ne,
                        e
                    }()[this.panelId];
                    return e || ee
                }
            }], [{
                key: "fromRaw",
                value: function(t) {
                    var a = new e;
                    return a.panelId = t.split("|").shift(),
                    a.extra = t.split("|").pop(),
                    -1 === [re, ce, se, ie, se, oe].indexOf(a.panelId) && (a.panelId = re),
                    a
                }
            }]),
            e
        }();
        function de(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            return function(a, n) {
                var r = n().PageModule.params;
                t ? a(fe(t)) : !t && Object.keys(r).length && a(fe({})),
                a(Object(h.c)(e))
            }
        }
        function _e() {
            return Object(h.b)()
        }
        function he(e) {
            return function(t) {
                switch (ve(e).panelId) {
                case oe:
                    ua.getTop().then(function(e) {
                        return t(A(e))
                    }).catch(function(e) {
                        return Object(m.c)(e)
                    });
                    break;
                case ce:
                    t(Q(null, !0)),
                    t(J(null))
                }
            }
        }
        function me(e) {
            return e
        }
        function ve(e) {
            return pe.fromRaw(e)
        }
        function fe(e) {
            return {
                type: Z,
                params: e
            }
        }
        var ge = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case "Page.SET_PAGE":
                return e.path.push({
                    name: e.name,
                    params: e.params
                }),
                Object.assign({}, e, {
                    name: t.name
                }, {
                    params: t.params
                });
            case Z:
                return Object(p.a)({}, e, {
                    params: t.params
                });
            default:
                return e
            }
        }
          , ke = "StoreModule.SET_STORE"
          , Ee = "StoreModule.SET_BONUS_VALUE"
          , be = "StoreModule.ADD_ACTIVE"
          , Oe = {
            active: [],
            stack: [],
            loading: !1,
            bonus: null,
            total: 0
        };
        function Ce(e) {
            e.stack = Object(m.g)(e.active.filter(function(e) {
                return "bonus" !== e
            }));
            var t = 0;
            return e.stack.forEach(function(e) {
                var a = e.value
                  , n = e.count;
                t += m.a[a].amount * n
            }),
            e.total = t,
            e
        }
        function Pe(e) {
            return {
                type: ke,
                update: e
            }
        }
        function ye(e) {
            return Pe({
                loading: e
            })
        }
        function Se(e) {
            return function(t) {
                var a;
                t(ye(e)),
                Promise.all([ua.buyItemById(e), (a = "bonus" === e ? 3e3 : 1,
                new Promise(function(e) {
                    setTimeout(e, a)
                }
                ))]).then(function(e) {
                    return e.shift()
                }).then(function(a) {
                    var n = a.score
                      , r = a.price;
                    t(ye(!1)),
                    t(function(e) {
                        return {
                            type: be,
                            id: e
                        }
                    }(e)),
                    t(b(n)),
                    "bonus" === e && t({
                        type: Ee,
                        bonus: Math.abs(r)
                    }),
                    "vkp1" !== e && "vkp2" !== e || (t(_e()),
                    t(_e()))
                }).catch(function(e) {
                    t(ye(!1)),
                    "NOT_ENOUGH_COINS" === e.message || (t(x(e)),
                    Object(m.c)(e))
                })
            }
        }
        var Te = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case Ee:
                return Object(p.a)({}, e, {
                    bonus: t.bonus
                });
            case ke:
                return Ce(Object.assign({}, e, t.update));
            case be:
                return Ce(Object(p.a)({}, e, {
                    active: [t.id].concat(e.active)
                }));
            default:
                return e
            }
        }
          , we = Object(l.c)({
            PageModule: ge,
            FatalErrorModule: W,
            BootstrapModule: y,
            TopModule: F,
            SearchModule: Y,
            StoreModule: Te
        })
          , Ne = a(196)
          , Ie = Object(Ne.a)({
            hashType: "noslash"
        })
          , Me = [u.a, Object(h.e)(Ie)]
          , je = l.d.apply(void 0, [l.a.apply(void 0, Me)].concat([]))
          , Ae = Object(l.e)(we, {}, je)
          , Fe = a(17)
          , De = a(10)
          , Re = a(9)
          , xe = a(11)
          , Be = a(459)
          , We = a(15)
          , Ue = a.n(We)
          , Ke = (a(426),
        function(e) {
            function t() {
                return Object(d.a)(this, t),
                Object(De.a)(this, Object(Re.a)(t).apply(this, arguments))
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "render",
                value: function() {
                    var e = this
                      , t = ""
                      , a = this.props.error || {};
                    if (a.message && (t += a.message || "",
                    t += "\n"),
                    a.code && (t += a.code || "",
                    t += "\n"),
                    a.stack && (t += a.stack,
                    t += "\n"),
                    "" === t)
                        try {
                            t = JSON.stringify(a, null, 2)
                        } catch (a) {
                            t = "Empty text and cant't json stringify"
                        }
                    t = window.navigator.userAgent + "\n\n" + t,
                    t = window.location.href.replace(/sid=([A-z0-9]+)/, "[cut]").replace(/access_token=([A-z0-9]+)/, "[cut]").replace(/sign=([A-z0-9]+)/, "[cut]") + "\n\n" + t,
                    a.message && (t = a.message);
                    var n = this.props.height;
                    return r.a.createElement("div", {
                        className: "Cover",
                        style: n ? {
                            minHeight: n
                        } : {}
                    }, r.a.createElement("div", {
                        className: "Cover__content"
                    }, r.a.createElement("div", {
                        className: "Cover__icon"
                    }), G.t("oops"), r.a.createElement("br", null), t, r.a.createElement("div", null, r.a.createElement("br", null), r.a.createElement(Ue.a, {
                        onClick: function() {
                            return e.props.onClose()
                        }
                    }, G.t("close")))))
                }
            }]),
            t
        }(n.Component))
          , Ge = a(137)
          , Ve = a.n(Ge)
          , Le = a(188)
          , qe = a.n(Le)
          , Xe = a(77)
          , Je = a.n(Xe)
          , He = (a(432),
        function(e) {
            function t() {
                return Object(d.a)(this, t),
                Object(De.a)(this, Object(Re.a)(t).apply(this, arguments))
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props.h
                      , t = {};
                    return this.props.h && (t.minHeight = e),
                    r.a.createElement("div", {
                        className: "ScreenSpinner",
                        style: t
                    }, r.a.createElement("div", {
                        className: "ScreenSpinner__inner"
                    }, r.a.createElement(Je.a, {
                        size: "large"
                    })))
                }
            }]),
            t
        }(n.Component))
          , ze = (a(433),
        function(e) {
            function t() {
                return Object(d.a)(this, t),
                Object(De.a)(this, Object(Re.a)(t).apply(this, arguments))
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "render",
                value: function() {
                    for (var e = P(this.props.score), t = [], a = 0; a < e.length; a++) {
                        var n = e[a];
                        t.push(r.a.createElement("span", {
                            key: a,
                            className: "." === n || "," === n ? "dot" : ""
                        }, n))
                    }
                    return t
                }
            }]),
            t
        }(n.Component));
        var Qe = Object(Fe.b)(function(e) {
            return {
                score: e.BootstrapModule.score
            }
        }, {})(ze)
          , $e = (a(434),
        function(e) {
            function t() {
                return Object(d.a)(this, t),
                Object(De.a)(this, Object(Re.a)(t).apply(this, arguments))
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.list;
                    return r.a.createElement("div", {
                        className: "MySlider",
                        style: {
                            maxWidth: this.props.deviceWidth
                        }
                    }, r.a.createElement("div", {
                        className: "MySlider__list"
                    }, t.map(function(t, a) {
                        return r.a.createElement("div", {
                            className: "MySlider__item",
                            key: a
                        }, e.props.renderItem(t, a))
                    })), r.a.createElement("div", {
                        className: "MySlider__scroll-hide"
                    }))
                }
            }]),
            t
        }(n.Component))
          , Ye = a(72)
          , Ze = a.n(Ye);
        a(437);
        var et = function(e) {
            function t() {
                return Object(d.a)(this, t),
                Object(De.a)(this, Object(Re.a)(t).apply(this, arguments))
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "onClick",
                value: function(e) {
                    e.isTrusted ? ua.click() : this.props.setFatalError("event not isTrusted")
                }
            }, {
                key: "renderProduct",
                value: function(e) {
                    var t = e.value
                      , a = e.count;
                    return r.a.createElement("div", {
                        className: "MainPage__active-item"
                    }, a > 1 ? r.a.createElement("div", {
                        className: "MainPage__x"
                    }, "x", a) : null, r.a.createElement("div", {
                        className: "MainPage__image"
                    }, r.a.createElement("div", {
                        className: "MainPage__image-" + t
                    })), r.a.createElement("div", null, r.a.createElement("div", {
                        className: "MainPage__active-item-title"
                    }, G.t(t + "_title")), r.a.createElement("div", {
                        className: "MainPage__active-item-description"
                    }, Object(m.f)(G.t("x_bonus", {
                        x: Object(m.h)(P(m.a[t].amount * a))
                    })))))
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this, a = this.props, n = a.activeItems, o = a.total;
                    return r.a.createElement("div", {
                        className: "MainPage"
                    }, r.a.createElement("div", {
                        className: "MainPage__wrapper"
                    }, r.a.createElement("div", {
                        className: "MainPage__score"
                    }, r.a.createElement("div", {
                        className: "MainPage__score-header"
                    }, G.t("your_score")), r.a.createElement("div", {
                        className: "MainPage__score-value"
                    }, r.a.createElement(Qe, null)))), r.a.createElement("div", {
                        className: "MainPage__navigation"
                    }, r.a.createElement("div", {
                        className: "MainPage__navigation-item"
                    }, r.a.createElement("div", {
                        onClick: function() {
                            return t.props.pushPage(me(oe))
                        },
                        className: "MainPage__navigation-button MainPage__navigation-button--top"
                    }, r.a.createElement("div", {
                        className: "MainPage__star"
                    })), r.a.createElement("div", {
                        className: "MainPage__navigation-description"
                    }, G.t("top"))), r.a.createElement("div", {
                        className: "MainPage__navigation-item"
                    }, r.a.createElement("div", {
                        onClick: function() {
                            return t.props.pushPage(me(ce))
                        },
                        className: "MainPage__navigation-button MainPage__navigation-button--transfer"
                    }, r.a.createElement("div", {
                        className: "MainPage__wallet"
                    })), r.a.createElement("div", {
                        className: "MainPage__navigation-description"
                    }, G.t("transfer"))), r.a.createElement("div", {
                        className: "MainPage__navigation-item"
                    }, r.a.createElement("div", {
                        onClick: function() {
                            return t.props.pushPage([re, Zt].join("|"))
                        },
                        className: "MainPage__navigation-button MainPage__navigation-button--qr"
                    }, r.a.createElement("div", {
                        className: "MainPage__qr-code"
                    })), r.a.createElement("div", {
                        className: "MainPage__navigation-description"
                    }, G.t("receive"))), r.a.createElement("div", {
                        className: "MainPage__navigation-item"
                    }, r.a.createElement("div", {
                        onClick: function() {
                            return t.props.onStoreOpen()
                        },
                        className: "MainPage__navigation-button MainPage__navigation-button--shop"
                    }, r.a.createElement("div", {
                        className: "MainPage__bag"
                    })), r.a.createElement("div", {
                        className: "MainPage__navigation-description"
                    }, G.t("store")))), n && n.length ? r.a.createElement("div", {
                        className: "MainPage__active"
                    }, r.a.createElement("div", {
                        className: "MainPage__active-title"
                    }, G.t("auto"), " ", o ? Object(m.f)(G.t("x_bonus", {
                        x: Object(m.h)(P(o))
                    })) : null), r.a.createElement("div", null, r.a.createElement($e, {
                        list: n,
                        renderItem: function(e, a) {
                            return t.renderProduct(e, a)
                        }
                    }))) : r.a.createElement("div", {
                        className: "MainPage__active"
                    }, r.a.createElement("div", {
                        className: "MainPage__active-title"
                    }, G.t("auto")), r.a.createElement("div", null, r.a.createElement("div", {
                        onClick: function() {
                            return t.props.onStoreOpen()
                        },
                        className: "MainPage__get-power"
                    }, r.a.createElement("span", {
                        className: "flash"
                    }), G.t("get_power")))), r.a.createElement(Ze.a, {
                        vertical: "bottom"
                    }, this.props.connect ? r.a.createElement("div", null, r.a.createElement("div", {
                        className: "MainPage__clickcoin",
                        onClick: function(e) {
                            return t.onClick(e)
                        }
                    }, r.a.createElement("div", {
                        className: "MainPage__clickcoin-inner"
                    }, r.a.createElement("div", null, r.a.createElement("div", {
                        className: "MainPage__online"
                    }, r.a.createElement("span", null, "онлайн ", (e = this.props.online) >= 1e6 ? Math.floor(e / 1e6) + "kk" : e > 1e3 ? Math.ceil(e / 1e3) + "k" : e)))))) : r.a.createElement("div", {
                        className: "MainPage__reconnect"
                    }, G.t("receoonect"), r.a.createElement("div", {
                        className: "MainPage__reconnect-buttons"
                    }, r.a.createElement(Ue.a, {
                        onClick: function() {
                            return window.location.reload()
                        },
                        level: "primary"
                    }, G.t("reload_app"))))))
                }
            }]),
            t
        }(n.Component);
        var tt = Object(Fe.b)(function(e) {
            return {
                connect: e.BootstrapModule.connect,
                online: e.BootstrapModule.online,
                activeItems: e.StoreModule.stack,
                total: e.StoreModule.total
            }
        }, {
            pushPage: de,
            getPathByPanelId: me
        })(et)
          , at = a(189)
          , nt = a.n(at)
          , rt = a(190)
          , ot = a.n(rt)
          , ct = a(105)
          , st = a.n(ct)
          , it = a(78)
          , lt = a.n(it)
          , ut = (a(438),
        function(e) {
            function t() {
                var e, a;
                Object(d.a)(this, t);
                for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return (a = Object(De.a)(this, (e = Object(Re.a)(t)).call.apply(e, [this].concat(r)))).listNode = null,
                a
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "dropScroll",
                value: function() {
                    this.listNode && (this.listNode.scrollTop = 0,
                    document.body && document.body.parentNode && (document.body.parentNode.scrollTop = 0),
                    document.body && (document.body.scrollTop = 0))
                }
            }, {
                key: "setList",
                value: function(e) {
                    this.props.setSelectedTop(e),
                    this.dropScroll()
                }
            }, {
                key: "renderItem",
                value: function(e, t, a) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , o = !1;
                    return e.id === i.a.getStartParams().userId && !1 === n && e.first_name && (o = !0),
                    e.id === i.a.getStartParams().groupId && !1 === n && e.name && (o = !0),
                    r.a.createElement("div", {
                        className: "Top__item"
                    }, r.a.createElement("div", {
                        className: "Top__place"
                    }, (n ? "~" : "") + a), r.a.createElement("div", {
                        className: "Top__avatar " + (o ? "me" : "")
                    }, r.a.createElement(lt.a, {
                        src: e.photo_200,
                        size: 48
                    })), r.a.createElement("div", {
                        className: "Top__texts"
                    }, r.a.createElement("div", {
                        className: "Top__name"
                    }, e.name ? e.name : e.first_name + " " + e.last_name), r.a.createElement("div", {
                        className: "Top__score"
                    }, P(t, !0))))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , a = t.list
                      , n = t.h
                      , o = t.self
                      , c = t.score
                      , s = t.place
                      , i = t.showMeInBottom
                      , l = t.selectedTop
                      , u = t.loading;
                    return r.a.createElement("div", {
                        className: "Top",
                        style: {
                            minHeight: n
                        }
                    }, r.a.createElement(Ze.a, {
                        vertical: "top"
                    }, r.a.createElement(nt.a, {
                        theme: "header",
                        type: "buttons"
                    }, r.a.createElement(ot.a, null, r.a.createElement(st.a, {
                        onClick: function() {
                            return e.setList("user")
                        },
                        selected: "user" === l
                    }, G.t("all_users")), r.a.createElement(st.a, {
                        onClick: function() {
                            return e.setList("friend")
                        },
                        selected: "friend" === l
                    }, G.t("friends")), r.a.createElement(st.a, {
                        onClick: function() {
                            return e.setList("groups")
                        },
                        selected: "groups" === l
                    }, G.t("groups"))))), r.a.createElement("div", {
                        className: "Top__wrapper"
                    }, r.a.createElement("div", {
                        ref: function(t) {
                            return e.listNode = t
                        },
                        className: "Top__list"
                    }, u ? r.a.createElement(Je.a, {
                        size: "large",
                        style: {
                            marginTop: 20
                        }
                    }) : a.map(function(t, a) {
                        return r.a.createElement("a", {
                            key: a,
                            href: t.link,
                            rel: "noopener noreferrer",
                            onClick: function() {
                                return window.HACK_FOR_PREVENT_DISCONNECT_FRO_60SEC = !0
                            },
                            target: "_blank"
                        }, e.renderItem(t, t.score, a + 1))
                    }), r.a.createElement("div", {
                        className: "Top__info"
                    }, G.t("top_updates_interval"))), o && i ? r.a.createElement(Ze.a, {
                        vertical: "bottom"
                    }, r.a.createElement("div", {
                        className: "Top__self"
                    }, r.a.createElement("a", {
                        href: o.link,
                        rel: "noopener noreferrer",
                        onClick: function() {
                            return window.HACK_FOR_PREVENT_DISCONNECT_FRO_60SEC = !0
                        },
                        target: "_blank"
                    }, this.renderItem(o, c, s, !0)))) : null))
                }
            }]),
            t
        }(n.Component));
        var pt = Object(Fe.b)(function(e) {
            var t = e.TopModule.userTop
              , a = e.TopModule.showMeInBottom
              , n = e.BootstrapModule.score
              , r = e.BootstrapModule.place
              , o = "groups" !== e.TopModule.selectedTop ? e.TopModule.self : e.TopModule.group;
            return o && (o.link = "groups" !== e.TopModule.selectedTop ? "https://vk.com/id" + o.id : "https://vk.com/club" + o.id),
            "groups" === e.TopModule.selectedTop && (t = e.TopModule.groupTop,
            a = e.TopModule.showGroupInBottom,
            e.TopModule.groupInfo ? (n = e.TopModule.groupInfo.score,
            r = e.TopModule.groupInfo.place,
            a && (t.length < 100 ? (o.score = n,
            t.push(o),
            t.sort(function(e, t) {
                return e.score === t.score ? 0 : e.score > t.score ? -1 : 1
            }),
            a = !1) : (n > t[t.length - 1].score && (n = t[t.length - 1].score - 1),
            r <= 100 && (r = 101)))) : a = !1),
            "friend" === e.TopModule.selectedTop && (t = e.TopModule.friendsTop,
            a = !1),
            "user" === e.TopModule.selectedTop && a && (t.length && t[t.length - 1].score < n && o && (o.score = n,
            a = !1,
            (t = t.concat([o])).sort(function(e, t) {
                return e.score === t.score ? 0 : e.score > t.score ? -1 : 1
            })),
            r < t.length && (r = t.length + 1)),
            {
                list: t,
                self: o,
                showMeInBottom: a,
                score: n,
                place: r,
                selectedTop: e.TopModule.selectedTop,
                loading: e.TopModule.loading && "friend" === e.TopModule.selectedTop
            }
        }, {
            setSelectedTop: function(e) {
                return "friend" === e ? function(t, a) {
                    j ? t(M({
                        selectedTop: e
                    })) : (t(M({
                        selectedTop: e,
                        loading: !0
                    })),
                    Object(f.e)(null, i.a.getStartParams().userId, i.a.getStartParams().appId, ua).then(function(e) {
                        return a().TopModule.self && (a().TopModule.self.score = a().BootstrapModule.score,
                        e.push(a().TopModule.self)),
                        t(M({
                            friendsTop: N(e)
                        })),
                        e
                    }).then(function(e) {
                        e.length >= f.a && !j ? (j = !0,
                        function e(a) {
                            Object(f.e)(null, i.a.getStartParams().userId, i.a.getStartParams().appId, ua, a).then(function(n) {
                                t({
                                    type: T,
                                    list: n
                                }),
                                n.length >= f.a ? e(a + n.length) : (j = !1,
                                t(M({
                                    loading: !1
                                })))
                            }).catch(function(e) {
                                j = !1,
                                t(M({
                                    loading: !1
                                })),
                                Object(m.c)(e)
                            })
                        }(e.length)) : t(M({
                            loading: !1
                        }))
                    }).catch(function(e) {
                        return t(M({
                            loading: !1,
                            error: e.message + ":" + JSON.stringify(e)
                        }))
                    }))
                }
                : M({
                    selectedTop: e
                })
            }
        })(ut)
          , dt = a(191)
          , _t = a.n(dt)
          , ht = a(192)
          , mt = a.n(ht)
          , vt = (a(444),
        function(e) {
            function t() {
                return Object(d.a)(this, t),
                Object(De.a)(this, Object(Re.a)(t).apply(this, arguments))
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props.blue;
                    return r.a.createElement("span", {
                        className: "WaitDots" + (e ? " blue" : "")
                    }, r.a.createElement("span", {
                        className: "dot dot1"
                    }), r.a.createElement("span", {
                        className: "dot dot2"
                    }), r.a.createElement("span", {
                        className: "dot dot3"
                    }))
                }
            }]),
            t
        }(n.Component))
          , ft = (a(445),
        function(e) {
            function t() {
                var e, a;
                Object(d.a)(this, t);
                for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return (a = Object(De.a)(this, (e = Object(Re.a)(t)).call.apply(e, [this].concat(r)))).state = {
                    search: "",
                    qr_wait: !1,
                    qr_data: "",
                    qr_error: ""
                },
                a.ttl = null,
                a.onChange = function(e) {
                    a.setState({
                        search: e
                    }),
                    clearTimeout(a.ttl),
                    a.ttl = setTimeout(function() {
                        a.props.startSearch(a.state.search)
                    }, 500)
                }
                ,
                a
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "startQr",
                value: function() {
                    var e = this;
                    this.setState({
                        qr_wait: !0
                    }),
                    Object(f.d)().then(function(t) {
                        var a = t.qr_data;
                        if (0 === a.indexOf("https://vk.com/coin#t")) {
                            var n = a.replace("https://vk.com/coin#t", "");
                            e.props.startSearch("vk.com/id".concat(n), !1, function(t) {
                                t && t.length && e.props.setSelectedUser(t[0]),
                                e.setState({
                                    qr_wait: !1
                                })
                            })
                        } else
                            e.setState({
                                qr_wait: !1,
                                qr_error: !0
                            }),
                            setTimeout(function() {
                                e.setState({
                                    qr_error: !1
                                })
                            }, 3e3)
                    }).catch(function(t) {
                        e.setState({
                            qr_wait: !1
                        })
                    })
                }
            }, {
                key: "renderItem",
                value: function(e, t, a) {
                    return r.a.createElement("div", {
                        className: "Transfer__item"
                    }, r.a.createElement("div", {
                        className: "Transfer__avatar"
                    }, r.a.createElement(lt.a, {
                        src: e.photo_200,
                        size: 48
                    })), r.a.createElement("div", {
                        className: "Transfer__texts"
                    }, r.a.createElement("div", {
                        className: "Transfer__name"
                    }, e.first_name + " " + e.last_name), null !== t ? r.a.createElement("div", {
                        className: "Transfer__score"
                    }, P(t)) : r.a.createElement("div", {
                        className: "Transfer__score empty"
                    }, G.t("not_in_app"))))
                }
            }, {
                key: "onSelectUser",
                value: function(e) {
                    this.props.setSelectedUser(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , a = t.users
                      , n = t.h
                      , o = t.loading
                      , c = t.error;
                    return r.a.createElement("div", {
                        className: "Top",
                        style: {
                            minHeight: n
                        }
                    }, r.a.createElement(_t.a, {
                        value: this.state.search,
                        onChange: this.onChange
                    }), r.a.createElement("div", {
                        className: "Transfer__wrapper"
                    }, c ? r.a.createElement(mt.a, {
                        title: "Error",
                        state: "error"
                    }, c) : null, r.a.createElement("div", {
                        onClick: function() {
                            return e.startQr()
                        },
                        className: "Transfer__qr" + (this.state.qr_error ? " err" : "")
                    }, r.a.createElement("span", {
                        className: "text"
                    }, this.state.qr_error ? G.t("bad_code") : G.t("trasnfer_by_qr_code")), this.state.qr_wait ? r.a.createElement(vt, {
                        blue: !0
                    }) : null), o ? r.a.createElement(Je.a, {
                        size: "large",
                        style: {
                            marginTop: 20
                        }
                    }) : null, o ? null : r.a.createElement("div", {
                        className: "Transfer__list"
                    }, a.map(function(t, a) {
                        return r.a.createElement("a", {
                            key: a,
                            rel: "noopener noreferrer",
                            onClick: function(a) {
                                null !== t.score && (a.preventDefault(),
                                e.onSelectUser(t))
                            },
                            href: "https://vk.com/id" + t.id,
                            target: "_blank"
                        }, e.renderItem(t, t.score, a + 1))
                    })), 0 !== a.length || o ? null : r.a.createElement("div", {
                        className: "Transfer__empty"
                    }, G.t("empty_search_list"))))
                }
            }]),
            t
        }(n.Component));
        var gt = Object(Fe.b)(function(e) {
            return {
                loading: e.SearchModule.loading,
                users: e.SearchModule.list,
                error: e.SearchModule.error
            }
        }, {
            startSearch: Q,
            setSelectedUser: J
        })(ft)
          , kt = a(106)
          , Et = a.n(kt);
        a(446);
        Et.a.prototype.componentDidMount = function() {
            this.waitAnimationFinish(this.el, this.onFadeInEnd)
        }
        ,
        Et.a.prototype.componentWillUnmount = function() {
            clearTimeout(this.animationFinishTimeout)
        }
        ;
        var bt = function(e) {
            function t() {
                return Object(d.a)(this, t),
                Object(De.a)(this, Object(Re.a)(t).apply(this, arguments))
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "onClose",
                value: function() {
                    this.props.onClose()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.showCross;
                    return r.a.createElement(Et.a, {
                        v: "bottom"
                    }, r.a.createElement("div", {
                        style: this.props.style || {},
                        onTouchMove: function(e) {
                            return e.stopPropagation()
                        },
                        className: "BottomPopup"
                    }, r.a.createElement("div", {
                        className: "BottomPopup__header"
                    }, t ? r.a.createElement("div", {
                        className: "BottomPopup__close",
                        onClick: function() {
                            return e.onClose()
                        }
                    }) : null), this.props.children, this.props.footer ? r.a.createElement("div", {
                        className: "BottomPopup__footer"
                    }, this.props.footer) : null))
                }
            }]),
            t
        }(n.Component);
        var Ot = Object(Fe.b)(function(e) {
            return {}
        }, {})(bt)
          , Ct = a(86)
          , Pt = (a(447),
        "speed")
          , yt = "store"
          , St = function(e) {
            function t() {
                var e, a, n;
                Object(d.a)(this, t);
                for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++)
                    o[c] = arguments[c];
                return (n = Object(De.a)(this, (e = Object(Re.a)(t)).call.apply(e, [this].concat(o)))).state = {
                    tab: Pt
                },
                n.route = (a = {},
                Object(Ct.a)(a, Pt, n.speed),
                Object(Ct.a)(a, yt, n.shop),
                a),
                n
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "trackClick",
                value: function() {
                    try {
                        window.gtag("event", i.a.getStartParams().userId, {
                            event_category: "click_club",
                            event_label: i.a.getStartParams().groupId
                        })
                    } catch (e) {
                        Object(m.c)(e)
                    }
                }
            }, {
                key: "hasMoney",
                value: function(e) {
                    return this.props.score >= this.getPriceForItem(e)
                }
            }, {
                key: "getPriceForItem",
                value: function(e) {
                    var t = this.props.stack
                      , a = m.a[e].price
                      , n = 0;
                    return t.forEach(function(t) {
                        t.value === e && (n = t.count)
                    }),
                    Object(m.e)(a, n + 1)
                }
            }, {
                key: "buyItem",
                value: function(e) {
                    this.hasMoney(e) && this.props.buyItem(e)
                }
            }, {
                key: "item",
                value: function(e) {
                    var t = this
                      , a = this.props.loadingId;
                    return r.a.createElement("div", {
                        key: e,
                        className: "Store__item"
                    }, r.a.createElement("div", {
                        className: "Store__item-left"
                    }, r.a.createElement("div", {
                        className: "Store__image"
                    }, r.a.createElement("div", {
                        className: "Store__image-" + e
                    })), r.a.createElement("div", {
                        className: "Store__body"
                    }, r.a.createElement("div", {
                        className: "Store__item-title"
                    }, G.t(e + "_title")), r.a.createElement("div", null, r.a.createElement(Ue.a, {
                        disabled: !this.hasMoney(e),
                        onClick: function() {
                            return t.buyItem(e)
                        }
                    }, a === e ? r.a.createElement(vt, null) : r.a.createElement("span", null, r.a.createElement("span", null, G.t("buy_for", {
                        count: P(this.getPriceForItem(e))
                    })), r.a.createElement("span", {
                        className: "Store__vk"
                    })))))), r.a.createElement("div", {
                        className: "Store__item-right"
                    }, r.a.createElement("div", {
                        className: "Store__plus"
                    }, Object(m.f)(G.t("x_bonus", {
                        x: Object(m.h)(P(m.a[e].amount))
                    })))))
                }
            }, {
                key: "shop",
                value: function() {
                    var e = this;
                    return r.a.createElement("div", {
                        className: "Store__list"
                    }, r.a.createElement("div", {
                        className: "Store__item"
                    }, r.a.createElement("div", {
                        className: "Store__item-left"
                    }, r.a.createElement("div", {
                        className: "Store__image"
                    }, r.a.createElement("div", {
                        className: "Store__image-partner1"
                    })), r.a.createElement("div", {
                        className: "Store__body"
                    }, r.a.createElement("div", {
                        className: "Store__item-title"
                    }, G.t("partner1_title")), r.a.createElement("div", null, r.a.createElement(Ue.a, {
                        component: "a",
                        target: "_blank",
                        onClick: function() {
                            return e.trackClick()
                        },
                        href: "https://vk.me/deliveryclub"
                    }, G.t("go_to_group")))))))
                }
            }, {
                key: "speed",
                value: function() {
                    var e = this
                      , t = this.props
                      , a = t.hasBonus
                      , n = t.hasVkp1
                      , o = t.hasVkp2;
                    return r.a.createElement("div", {
                        className: "Store__list"
                    }, m.b.map(function(t) {
                        return e.item(t)
                    }), a ? r.a.createElement("div", {
                        className: "Store__item"
                    }, r.a.createElement("div", {
                        className: "Store__item-left"
                    }, r.a.createElement("div", {
                        className: "Store__image"
                    }, r.a.createElement("div", {
                        className: "Store__image-bonus"
                    })), r.a.createElement("div", {
                        className: "Store__body"
                    }, r.a.createElement("div", {
                        className: "Store__item-title"
                    }, G.t("bonus_title")), r.a.createElement("div", null, r.a.createElement(Ue.a, {
                        onClick: function() {
                            return e.props.openBonus()
                        }
                    }, G.t("more"))))), r.a.createElement("div", {
                        className: "Store__item-right"
                    }, r.a.createElement("div", {
                        className: "Store__plus"
                    }, G.t("up_to", {
                        x: "10 000"
                    })))) : null, n ? r.a.createElement("div", {
                        className: "Store__item"
                    }, r.a.createElement("div", {
                        className: "Store__item-left"
                    }, r.a.createElement("div", {
                        className: "Store__image"
                    }, r.a.createElement("div", {
                        className: "Store__image-vkp1"
                    })), r.a.createElement("div", {
                        className: "Store__body"
                    }, r.a.createElement("div", {
                        className: "Store__item-title"
                    }, G.t("bonus_vkp1")), r.a.createElement("div", null, r.a.createElement(Ue.a, {
                        onClick: function() {
                            return e.props.openBonus("vkp1")
                        }
                    }, G.t("get_vkpay"))))), r.a.createElement("div", {
                        className: "Store__item-right"
                    }, r.a.createElement("div", {
                        className: "Store__plus"
                    }, Object(m.f)(G.t("x_bonus", {
                        x: Object(m.h)(P(m.a.vkp1.amount))
                    }))))) : null, o ? r.a.createElement("div", {
                        className: "Store__item"
                    }, r.a.createElement("div", {
                        className: "Store__item-left"
                    }, r.a.createElement("div", {
                        className: "Store__image"
                    }, r.a.createElement("div", {
                        className: "Store__image-vkp2"
                    })), r.a.createElement("div", {
                        className: "Store__body"
                    }, r.a.createElement("div", {
                        className: "Store__item-title"
                    }, G.t("bonus_vkp2")), r.a.createElement("div", null, r.a.createElement(Ue.a, {
                        onClick: function() {
                            return e.props.openBonus("vkp2")
                        }
                    }, G.t("get_vkpay"))))), r.a.createElement("div", {
                        className: "Store__item-right"
                    }, r.a.createElement("div", {
                        className: "Store__plus"
                    }, Object(m.f)(G.t("x_bonus", {
                        x: Object(m.h)(P(m.a.vkp2.amount))
                    }))))) : null)
                }
            }, {
                key: "tab",
                value: function(e) {
                    var t = this;
                    return r.a.createElement("div", {
                        onClick: function() {
                            return t.setState({
                                tab: e
                            })
                        },
                        className: "Store__tab" + (this.state.tab === e ? " active" : "")
                    }, G.t(e))
                }
            }, {
                key: "render",
                value: function() {
                    return r.a.createElement("div", {
                        className: "Store"
                    }, r.a.createElement("div", {
                        className: "Store__title"
                    }, this.tab(Pt), this.props.pass ? this.tab(yt) : null), r.a.createElement("div", {
                        className: "Store__wrapper",
                        style: {
                            maxHeight: this.props.h - 160 + "px",
                            minHeight: this.props.h - 160 + "px"
                        }
                    }, this.route[this.state.tab].apply(this)))
                }
            }]),
            t
        }(n.Component);
        var Tt = Object(Fe.b)(function(e) {
            return {
                pass: !0,
                hasBonus: -1 === e.StoreModule.active.indexOf("bonus"),
                hasVkp1: -1 === e.StoreModule.active.indexOf("vkp1"),
                hasVkp2: -1 === e.StoreModule.active.indexOf("vkp2"),
                stack: e.StoreModule.stack,
                loadingId: e.StoreModule.loading,
                score: e.BootstrapModule.score
            }
        }, {
            buyItem: Se
        })(St)
          , wt = (a(448),
        function(e) {
            function t() {
                return Object(d.a)(this, t),
                Object(De.a)(this, Object(Re.a)(t).apply(this, arguments))
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.text
                      , a = e.height;
                    return r.a.createElement("div", {
                        className: "Cover",
                        style: a ? {
                            minHeight: a
                        } : {}
                    }, r.a.createElement("div", {
                        className: "Cover__content"
                    }, r.a.createElement("div", {
                        className: "Cover__icon"
                    }), t, r.a.createElement("div", null, r.a.createElement("br", null), r.a.createElement(Ue.a, {
                        onClick: function() {
                            return window.location.reload()
                        }
                    }, G.t("reload_app")))))
                }
            }]),
            t
        }(n.Component))
          , Nt = a(193)
          , It = a.n(Nt)
          , Mt = (a(450),
        function(e) {
            function t() {
                var e, a;
                Object(d.a)(this, t);
                for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return (a = Object(De.a)(this, (e = Object(Re.a)(t)).call.apply(e, [this].concat(r)))).preventTouch = function(e) {
                    return e.preventDefault()
                }
                ,
                a
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    window.addEventListener("touchmove", this.preventTouch, {
                        passive: !1
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("touchmove", this.preventTouch, {
                        passive: !1
                    })
                }
            }, {
                key: "onSumChange",
                value: function(e) {
                    this.props.setSum(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , a = t.user
                      , n = t.sum
                      , o = t.transferSucceed
                      , c = t.transferError;
                    return r.a.createElement("div", {
                        className: "TransferPopup"
                    }, r.a.createElement("div", {
                        className: "TransferPopup__getter"
                    }, r.a.createElement("div", {
                        className: "Transfer__item"
                    }, r.a.createElement("div", {
                        className: "Transfer__avatar"
                    }, r.a.createElement(lt.a, {
                        src: a.photo_200,
                        size: 48
                    })), r.a.createElement("div", {
                        className: "Transfer__texts"
                    }, r.a.createElement("div", {
                        className: "Transfer__name"
                    }, a.first_name + " " + a.last_name), r.a.createElement("div", {
                        className: "Transfer__score empty"
                    }, G.t("getter"))))), o ? r.a.createElement("div", null, r.a.createElement("div", {
                        className: "TransferPopup__success"
                    }, G.t("transfered")), r.a.createElement("div", null, r.a.createElement(Ue.a, {
                        size: "xl",
                        onClick: function() {
                            return e.props.setSelectedUser(null)
                        }
                    }, G.t("back")))) : r.a.createElement("div", null, r.a.createElement("div", {
                        className: "TransferPopup__field-wrapper" + (c ? " error" : "")
                    }, r.a.createElement("div", {
                        className: "TransferPopup__label"
                    }, c || G.t("sum")), r.a.createElement("div", null, r.a.createElement(It.a, {
                        placeholder: 100,
                        onFocus: function() {
                            return e.props.setTransferError(null)
                        },
                        type: "number",
                        value: n,
                        autoFocus: !0,
                        pattern: "[0-9\\.,]*",
                        onChange: function(t) {
                            return e.onSumChange(t.target.value)
                        }
                    }))), r.a.createElement("div", null, r.a.createElement(Ue.a, {
                        size: "xl",
                        onClick: function() {
                            return e.props.transfer()
                        }
                    }, G.t("transfer")))))
                }
            }]),
            t
        }(n.Component));
        var jt = Object(Fe.b)(function(e) {
            return {
                user: e.SearchModule.selectedUser,
                sum: e.SearchModule.sum,
                transferSucceed: e.SearchModule.transferSucceed,
                transferError: e.SearchModule.transferError
            }
        }, {
            setSum: function(e) {
                return X({
                    sum: e
                })
            },
            setSelectedUser: J,
            transfer: function() {
                return function(e, t) {
                    var a = t().SearchModule
                      , n = a.sum
                      , r = a.selectedUser
                      , o = t().BootstrapModule.score;
                    if (n.length) {
                        var c = parseFloat(n.toString().replace(",", "."));
                        if (isNaN(c) || !isNaN(c) && c < 0)
                            return e($("Неверная сумма")),
                            !1;
                        if (1e3 * n - Math.round(1e3 * n) !== 0)
                            return e($("Допускается только три знака после запятой")),
                            !1;
                        var s = Math.round(1e3 * n);
                        if (s > o)
                            return e($(G.t("not_enough_coins", {
                                x: P(o)
                            }))),
                            !1;
                        if (e($(null)),
                        s < 1)
                            return e($("Введите сумму больше 0.001")),
                            !1;
                        ua.transferToUser(r.id, Math.round(1e3 * n)).then(function(t) {
                            e(X({
                                transferSucceed: !0
                            })),
                            e({
                                type: "INCREMENT",
                                user_id: r.id,
                                amount: s
                            })
                        }).catch(function(t) {
                            "NOT_ENOUGH_COINS" === t.message ? e($(G.t("not_enough_coins", {
                                x: P(o)
                            }))) : e(x(t))
                        })
                    } else
                        e($("Введите сумму"))
                }
            },
            setTransferError: $
        })(Mt)
          , At = a(23)
          , Ft = (a(451),
        function(e) {
            function t() {
                var e, a;
                Object(d.a)(this, t);
                for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return (a = Object(De.a)(this, (e = Object(Re.a)(t)).call.apply(e, [this].concat(r)))).preventTouch = function(e) {
                    return e.preventDefault()
                }
                ,
                a.onInstallClick = function(e) {
                    At.supports("VKWebAppAddToCommunity") && (e.preventDefault(),
                    At.send("VKWebAppAddToCommunity", {}))
                }
                ,
                a
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    window.addEventListener("touchmove", this.preventTouch, {
                        passive: !1
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("touchmove", this.preventTouch, {
                        passive: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.h
                      , a = e.top
                      , n = e.tag;
                    return r.a.createElement("div", {
                        style: {
                            minHeight: t + "px",
                            paddingTop: a + "px",
                            marginTop: -a + "px"
                        },
                        className: "WelcomeScreen"
                    }, r.a.createElement("div", {
                        className: "WelcomeScreen__space"
                    }), r.a.createElement("div", {
                        className: "WelcomeScreen__header"
                    }, this.props.header), r.a.createElement("div", {
                        className: "WelcomeScreen__description"
                    }, this.props.children), r.a.createElement("div", {
                        className: "WelcomeScreen__space"
                    }), r.a.createElement("div", {
                        className: "WelcomeScreen__background " + n
                    }), r.a.createElement(Ze.a, {
                        vertical: "bottom"
                    }, "s3" === n ? r.a.createElement("div", {
                        className: "WelcomeScreen__buttons"
                    }, r.a.createElement(Ue.a, {
                        className: "WelcomeScreen__white",
                        onClick: this.props.onNext
                    }, G.t("start")), r.a.createElement(Ue.a, {
                        className: "WelcomeScreen__blue",
                        component: "a",
                        target: "_blank",
                        onClick: this.onInstallClick,
                        href: "https://vk.com/@hs-kak-ustanovit-prilozhenie-v-svoe-soobschestvo"
                    }, G.t("install_in_my_group"))) : r.a.createElement("div", {
                        className: "WelcomeScreen__buttons"
                    }, r.a.createElement(Ue.a, {
                        className: "WelcomeScreen__white",
                        onClick: this.props.onNext
                    }, G.t("next")))))
                }
            }]),
            t
        }(n.Component))
          , Dt = (a(452),
        function(e) {
            function t() {
                return Object(d.a)(this, t),
                Object(De.a)(this, Object(Re.a)(t).apply(this, arguments))
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "share",
                value: function() {
                    var e = this
                      , t = {
                        link_button: "open_url",
                        link_image: "https://pp.userapi.com/c844418/v844418773/1d7ce2/-8_pcgPwNDo.jpg",
                        link_title: "VK Coin",
                        message: "#VKCoin",
                        attachments: "https://vk.com/app" + i.a.getStartParams().appId
                    };
                    i.a.VKWebAppShowWallPostBox(t, function() {
                        e.props.buyItem("bonus")
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , a = t.loadingId
                      , n = t.bonus
                      , o = t.type;
                    return "vkp1" === o ? r.a.createElement("div", {
                        className: "Store"
                    }, r.a.createElement("div", {
                        className: "Store__wrapper",
                        style: {
                            maxHeight: this.props.h - 160 + "px"
                        }
                    }, r.a.createElement("div", {
                        className: "Bonus__title left"
                    }, Object(m.f)(G.t("vkp1_info"))), r.a.createElement("div", {
                        className: "Bonus__description"
                    }, Object(m.f)(G.t("vkp1_description"))), r.a.createElement("div", {
                        className: "Bonus__image vkpay"
                    }), r.a.createElement("div", {
                        className: "Bonus__button vert"
                    }, r.a.createElement(Ue.a, {
                        size: "xl",
                        component: "a",
                        href: "https://vk.com/vkpay",
                        target: "_blank",
                        level: "primary"
                    }, G.t("create_wallet")), r.a.createElement("div", {
                        className: "space"
                    }), r.a.createElement(Ue.a, {
                        size: "xl",
                        onClick: function() {
                            return e.props.buyItem("vkp1")
                        },
                        level: "secondary"
                    }, a ? r.a.createElement(vt, null) : G.t("i_have_wallet"))))) : "vkp2" === o ? r.a.createElement("div", {
                        className: "Store"
                    }, r.a.createElement("div", {
                        className: "Store__wrapper",
                        style: {
                            maxHeight: this.props.h - 160 + "px"
                        }
                    }, r.a.createElement("div", {
                        className: "Bonus__title left"
                    }, Object(m.f)(G.t("vkp2_info"))), r.a.createElement("div", {
                        className: "Bonus__description"
                    }, Object(m.f)(G.t("vkp2_description"))), r.a.createElement("div", {
                        className: "Bonus__image vkpay"
                    }), r.a.createElement("div", {
                        className: "Bonus__button vert"
                    }, r.a.createElement(Ue.a, {
                        size: "xl",
                        component: "a",
                        href: "https://vk.com/vkpay#action=settings",
                        target: "_blank",
                        level: "primary"
                    }, G.t("id_wallet")), r.a.createElement("div", {
                        className: "space"
                    }), r.a.createElement(Ue.a, {
                        size: "xl",
                        onClick: function() {
                            return e.props.buyItem("vkp2")
                        },
                        level: "secondary"
                    }, a ? r.a.createElement(vt, null) : G.t("i_have_done"))))) : r.a.createElement("div", {
                        className: "Store"
                    }, r.a.createElement("div", {
                        className: "Store__wrapper",
                        style: {
                            maxHeight: this.props.h - 160 + "px"
                        }
                    }, r.a.createElement("div", {
                        className: "Bonus__title"
                    }, Object(m.f)(G.t("bonus_info"))), r.a.createElement("div", {
                        className: "Bonus__image " + (n ? "score" : "")
                    }, n ? P(n, !0) : ""), r.a.createElement("div", {
                        className: "Bonus__button"
                    }, r.a.createElement(Ue.a, {
                        size: "xl",
                        onClick: function() {
                            return n ? e.props.onClose() : e.share()
                        },
                        level: n ? "secondary" : "primary"
                    }, a ? r.a.createElement(vt, null) : G.t(n ? "close" : "share")))))
                }
            }]),
            t
        }(n.Component));
        var Rt = Object(Fe.b)(function(e) {
            return {
                loadingId: e.StoreModule.loading,
                bonus: e.StoreModule.bonus
            }
        }, {
            buyItem: Se
        })(Dt)
          , xt = a(138)
          , Bt = a.n(xt)
          , Wt = a(139)
          , Ut = a.n(Wt)
          , Kt = a(194)
          , Gt = a.n(Kt)
          , Vt = a(79)
          , Lt = a.n(Vt)
          , qt = a(21)
          , Xt = a.n(qt)
          , Jt = a(35)
          , Ht = (a(453),
        a(59))
          , zt = a.n(Ht)
          , Qt = (a(454),
        function(e) {
            function t() {
                return Object(d.a)(this, t),
                Object(De.a)(this, Object(Re.a)(t).apply(this, arguments))
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "render",
                value: function() {
                    var e = "https://vk.com/coin#t" + i.a.getStartParams().userId
                      , t = zt.a.QrSegment.makeSegments(e)
                      , a = zt.a.QrCode.encodeSegments(t, zt.a.QrCode.Ecc.QUARTILE, 1, 40, -1, !0).toSvgString();
                    return r.a.createElement("div", {
                        className: "QrCode"
                    }, r.a.createElement("div", {
                        className: "QrCode__header"
                    }, G.t("you_qr_code")), r.a.createElement("span", {
                        className: "QrCode__image",
                        dangerouslySetInnerHTML: {
                            __html: a
                        }
                    }), r.a.createElement("div", {
                        className: "QrCode__footer"
                    }, Object(m.f)(G.t("qr_code_info"))))
                }
            }]),
            t
        }(n.Component))
          , $t = Object(Jt.platform)()
          , Yt = "EXTRA_STORE"
          , Zt = "EXTRA_QR"
          , ea = function(e) {
            function t(e) {
                var a;
                return Object(d.a)(this, t),
                a = Object(De.a)(this, Object(Re.a)(t).call(this, e)),
                0 === t.deviceWidth && (t.deviceWidth = window.innerWidth),
                0 === t.deviceHeight && window.innerHeight && (t.deviceHeight = window.innerHeight),
                t.deviceWidth < 10 && a.recheckDimensions(),
                "onorientationchange"in window && window.addEventListener("orientationchange", function() {
                    t.deviceHeight = window.innerWidth,
                    t.deviceWidth = window.innerHeight,
                    a.setState({
                        time: Date.now()
                    })
                }, !1),
                a
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "componentDidCatch",
                value: function(e, t) {
                    this.props.setFatalError(e)
                }
            }, {
                key: "openProductPopup",
                value: function() {
                    this.props.pushPage([re, Yt].join("|"))
                }
            }, {
                key: "closeProductPopup",
                value: function() {
                    this.props.popPage()
                }
            }, {
                key: "openBonusPopup",
                value: function(e) {
                    this.props.pushPage([re, e || "EXTRA_BONUS"].join("|"))
                }
            }, {
                key: "closeBonusPopup",
                value: function() {
                    this.props.popPage()
                }
            }, {
                key: "getPanelHeight",
                value: function() {
                    return $t === Jt.IOS ? 46 : 56
                }
            }, {
                key: "getAndroidVersion",
                value: function() {
                    var e = window.navigator.userAgent.toLowerCase()
                      , t = e.match(/android\s([0-9\.]*)/);
                    return -1 === e.indexOf("chrome/6") && (!!t && parseInt(t[1], 10))
                }
            }, {
                key: "getIosVersion",
                value: function() {
                    if (/iP(hone|od|ad)/.test(navigator.platform)) {
                        var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        return parseInt(e[1], 10)
                    }
                    return !1
                }
            }, {
                key: "recheckDimensions",
                value: function() {
                    var e = this;
                    t.deviceWidth < 10 && setTimeout(function() {
                        try {
                            t.deviceHeight = window.innerHeight - e.getPanelHeight(),
                            t.deviceWidth = document.documentElement.offsetWidth
                        } catch (a) {
                            t.deviceWidth = window.innerWidth
                        }
                        e.setState({
                            time: Date.now()
                        }),
                        e.recheckDimensions()
                    }, 100)
                }
            }, {
                key: "goBack",
                value: function() {
                    this.props.popPage()
                }
            }, {
                key: "renderBackPanelHeader",
                value: function(e) {
                    var t = this
                      , a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return r.a.createElement(Bt.a, {
                        noShadow: a,
                        left: r.a.createElement(Ut.a, {
                            onClick: function() {
                                return t.goBack()
                            }
                        }, $t === Jt.IOS ? r.a.createElement(qe.a, null) : r.a.createElement(Ve.a, null))
                    }, e)
                }
            }, {
                key: "renderProductPopup",
                value: function(e) {
                    var a = this;
                    return e.extra === Zt ? r.a.createElement(Ot, {
                        showCross: !0,
                        h: t.deviceHeight - this.getPanelHeight(),
                        onClose: function() {
                            return a.closeBonusPopup()
                        }
                    }, r.a.createElement(Qt, {
                        h: t.deviceHeight - this.getPanelHeight()
                    })) : "EXTRA_BONUS" === e.extra ? r.a.createElement(Ot, {
                        showCross: !0,
                        h: t.deviceHeight - this.getPanelHeight(),
                        onClose: function() {
                            return a.closeBonusPopup()
                        }
                    }, r.a.createElement(Rt, {
                        onClose: function() {
                            return a.closeBonusPopup()
                        },
                        h: t.deviceHeight - this.getPanelHeight()
                    })) : e.extra === Yt ? r.a.createElement(Ot, {
                        showCross: !0,
                        h: t.deviceHeight - this.getPanelHeight(),
                        onClose: function() {
                            return a.closeProductPopup()
                        }
                    }, r.a.createElement(Tt, {
                        openBonus: function(e) {
                            return a.openBonusPopup(e)
                        },
                        h: t.deviceHeight - this.getPanelHeight()
                    })) : "vkp1" === e.extra ? r.a.createElement(Ot, {
                        showCross: !0,
                        h: t.deviceHeight - this.getPanelHeight(),
                        onClose: function() {
                            return a.closeBonusPopup()
                        }
                    }, r.a.createElement(Rt, {
                        onClose: function() {
                            return a.closeBonusPopup()
                        },
                        type: e.extra,
                        h: t.deviceHeight - this.getPanelHeight()
                    })) : "vkp2" === e.extra ? r.a.createElement(Ot, {
                        showCross: !0,
                        h: t.deviceHeight - this.getPanelHeight(),
                        onClose: function() {
                            return a.closeBonusPopup()
                        }
                    }, r.a.createElement(Rt, {
                        onClose: function() {
                            return a.closeBonusPopup()
                        },
                        type: e.extra,
                        h: t.deviceHeight - this.getPanelHeight()
                    })) : void 0
                }
            }, {
                key: "renderTransferPopup",
                value: function() {
                    var e = this;
                    return this.props.selectedUser ? r.a.createElement(Ot, {
                        showCross: !0,
                        h: t.deviceHeight - this.getPanelHeight(),
                        onClose: function() {
                            return e.props.setSelectedUser(null)
                        }
                    }, r.a.createElement(jt, null)) : null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    if (this.props.fatal)
                        return r.a.createElement(Ke, {
                            error: this.props.fatal,
                            onClose: function() {
                                return e.props.removeFatalError()
                            }
                        });
                    if (!window.WebSocket || this.getAndroidVersion() && this.getAndroidVersion() <= 4 || this.getIosVersion() && this.getIosVersion() <= 8)
                        return r.a.createElement("div", {
                            className: "not-supported",
                            style: {
                                width: t.deviceWidth,
                                height: t.deviceHeight
                            }
                        }, r.a.createElement("div", {
                            className: "plak-wrapper"
                        }, r.a.createElement("div", {
                            className: "plak"
                        }), r.a.createElement("div", {
                            className: "plak-text"
                        }, G.t("not_supported"))));
                    if (this.props.cover)
                        return r.a.createElement(wt, {
                            text: this.props.cover
                        });
                    if (!this.props.loaded)
                        return r.a.createElement(He, {
                            h: t.deviceHeight + this.getPanelHeight()
                        });
                    var a = ve(this.props.location.pathname);
                    return r.a.createElement(Gt.a, {
                        activeView: a.getView()
                    }, r.a.createElement(Lt.a, {
                        id: ee,
                        activePanel: a.panelId,
                        popout: this.renderProductPopup(a),
                        header: !1
                    }, r.a.createElement(Xt.a, {
                        id: re
                    }, r.a.createElement(tt, {
                        onStoreOpen: function() {
                            return e.openProductPopup()
                        },
                        h: t.deviceHeight
                    })), r.a.createElement(Xt.a, {
                        id: ce
                    }), r.a.createElement(Xt.a, {
                        id: se
                    }), r.a.createElement(Xt.a, {
                        id: ie
                    }), r.a.createElement(Xt.a, {
                        id: le
                    })), r.a.createElement(Lt.a, {
                        id: te,
                        activePanel: a.panelId
                    }, r.a.createElement(Xt.a, {
                        id: oe
                    }, this.renderBackPanelHeader(G.t("top"), !0), r.a.createElement(pt, {
                        h: t.deviceHeight - this.getPanelHeight()
                    })), r.a.createElement(Xt.a, {
                        id: se
                    }), r.a.createElement(Xt.a, {
                        id: ie
                    }), r.a.createElement(Xt.a, {
                        id: le
                    }), r.a.createElement(Xt.a, {
                        id: ce
                    })), r.a.createElement(Lt.a, {
                        id: ae,
                        activePanel: oe,
                        popout: this.renderTransferPopup()
                    }, r.a.createElement(Xt.a, {
                        id: oe
                    }, this.renderBackPanelHeader(G.t("transfer")), r.a.createElement(gt, {
                        h: t.deviceHeight - this.getPanelHeight()
                    })), r.a.createElement(Xt.a, {
                        id: ce
                    }), r.a.createElement(Xt.a, {
                        id: se
                    }), r.a.createElement(Xt.a, {
                        id: ie
                    }), r.a.createElement(Xt.a, {
                        id: le
                    })), r.a.createElement(Lt.a, {
                        id: ne,
                        activePanel: a.panelId
                    }, r.a.createElement(Xt.a, {
                        id: ce
                    }), r.a.createElement(Xt.a, {
                        id: re
                    }), r.a.createElement(Xt.a, {
                        id: se
                    }, r.a.createElement(Ft, {
                        header: G.t("vk_coin"),
                        tag: "s1",
                        onNext: function() {
                            return e.props.pushPage(ie)
                        },
                        top: this.getPanelHeight(),
                        h: t.deviceHeight
                    }, G.t("vk_coin_welcome"))), r.a.createElement(Xt.a, {
                        id: ie
                    }, this.renderBackPanelHeader("", !0), r.a.createElement(Ft, {
                        header: G.t("speed"),
                        tag: "s2",
                        top: this.getPanelHeight(),
                        onNext: function() {
                            return e.props.pushPage(le)
                        },
                        h: t.deviceHeight
                    }, G.t("speed_description"))), r.a.createElement(Xt.a, {
                        id: le
                    }, this.renderBackPanelHeader("", !0), r.a.createElement(Ft, {
                        header: G.t("groups"),
                        tag: "s3",
                        top: this.getPanelHeight(),
                        onNext: function() {
                            return e.props.pushPage(re)
                        },
                        h: t.deviceHeight
                    }, G.t("groups_description")))))
                }
            }]),
            t
        }(n.Component);
        ea.deviceWidth = 0,
        ea.deviceHeight = 0;
        var ta = Object(Be.a)(Object(Fe.b)(function(e) {
            return {
                fatal: e.FatalErrorModule,
                loaded: e.BootstrapModule.loaded,
                cover: e.BootstrapModule.cover,
                selectedUser: e.SearchModule.selectedUser,
                store: !(!e.PageModule.params || !e.PageModule.params.productPopup)
            }
        }, {
            removeFatalError: B,
            popPage: _e,
            pushPage: de,
            setSelectedUser: J,
            setFatalError: x
        })(ea))
          , aa = (a(455),
        "https://vk.com/app" + i.a.getStartParams().appId);
        i.a.getStartParams().groupId && (aa += "_-" + i.a.getStartParams().groupId);
        var na = zt.a.QrSegment.makeSegments(aa)
          , ra = zt.a.QrCode.encodeSegments(na, zt.a.QrCode.Ecc.QUARTILE, 1, 40, -1, !0).toSvgString()
          , oa = function(e) {
            function t() {
                return Object(d.a)(this, t),
                Object(De.a)(this, Object(Re.a)(t).apply(this, arguments))
            }
            return Object(xe.a)(t, e),
            Object(_.a)(t, [{
                key: "render",
                value: function() {
                    var e = this;
                    return this.props.fatal ? r.a.createElement(Ke, {
                        error: this.props.fatal,
                        onClose: function() {
                            return e.props.removeFatalError()
                        }
                    }) : r.a.createElement("div", {
                        className: "DesktopContainer"
                    }, r.a.createElement("div", {
                        className: "DesktopContainer__wrapper"
                    }, r.a.createElement("div", {
                        className: "DesktopContainer__core-label"
                    }, G.t("your_score")), r.a.createElement("div", {
                        className: "DesktopContainer__score"
                    }, r.a.createElement(Qe, null), r.a.createElement("div", {
                        className: "DesktopContainer__coin"
                    })), r.a.createElement("div", {
                        className: "DesktopContainer__box"
                    }, r.a.createElement("div", {
                        className: "DesktopContainer__image create"
                    }), r.a.createElement("div", {
                        className: "DesktopContainer__text"
                    }, Object(m.f)(G.t("create")))), r.a.createElement("div", {
                        className: "DesktopContainer__box"
                    }, r.a.createElement("div", {
                        className: "DesktopContainer__image transfer"
                    }), r.a.createElement("div", {
                        className: "DesktopContainer__text"
                    }, Object(m.f)(G.t("transfer_money")))), r.a.createElement("div", {
                        className: "DesktopContainer__box"
                    }, r.a.createElement("div", {
                        className: "DesktopContainer__image top"
                    }), r.a.createElement("div", {
                        className: "DesktopContainer__text"
                    }, Object(m.f)(G.t("be_top_1")))), r.a.createElement("div", {
                        className: "DesktopContainer__box last"
                    }, r.a.createElement("div", {
                        className: "DesktopContainer__image help"
                    }), r.a.createElement("div", {
                        className: "DesktopContainer__text"
                    }, Object(m.f)(G.t("help")))), r.a.createElement("div", {
                        className: "DesktopContainer__separator"
                    }), r.a.createElement("div", {
                        className: "DesktopContainer__qr-code"
                    }, r.a.createElement("span", {
                        className: "image",
                        dangerouslySetInnerHTML: {
                            __html: ra
                        }
                    }), r.a.createElement("div", {
                        className: "text"
                    }, Object(m.f)(G.t("scan_qr_code"))))))
                }
            }]),
            t
        }(n.Component);
        var ca = Object(Be.a)(Object(Fe.b)(function(e) {
            return {
                fatal: e.FatalErrorModule,
                loaded: e.BootstrapModule.loaded,
                cover: e.BootstrapModule.cover,
                score: e.BootstrapModule.score
            }
        }, {
            removeFatalError: B,
            popPage: _e,
            setSelectedUser: J
        })(oa))
          , sa = a(104)
          , ia = a.n(sa);
        a(456);
        a.d(t, "serverConnection", function() {
            return ua
        }),
        At.send("VKWebAppInit", {});
        var la = "";
        window.location.hash && (la = window.location.hash,
        window.location.hash = "");
        var ua = new f.b(i.a.getStartParams().userId);
        var pa = 0
          , da = null;
        ua.onMissClickEvent(function() {
            0 === pa && (clearTimeout(da),
            da = setTimeout(function() {
                return pa = 0
            }, 6e4)),
            ++pa > 10 && Ae.dispatch(C(G.t("too_many_miss_click")))
        }),
        ua.onReceiveDataEvent(function(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            Ae.getState().BootstrapModule.loaded || Ae.dispatch(function(e) {
                return O({
                    loaded: e
                })
            }(!0)),
            Ae.dispatch(b(t, a)),
            Ae.dispatch(function(e) {
                return O({
                    place: e
                })
            }(e))
        }),
        ua.onWaitEvent(function() {});
        var _a = ia.a.parse(window.location.search)
          , ha = !_a.vk_platform || 0 === _a.vk_platform.toString().indexOf("desktop")
          , ma = i.a.getStartParams().userId
          , va = window.location.origin.replace("https://", "wss://").replace("http://", "ws://") + "/channel/"
          , fa = ma % 32;
        va = va.replace("coin.vkforms.ru", "coin-without-bugs.vkforms.ru"),
        ua.onUserLoaded(function(e, t, a, n, r) {
            if (Ae.dispatch(A(n)),
            Ae.dispatch(Pe({
                active: a
            })),
            Ae.dispatch(C(null)),
            r)
                Ae.dispatch(de(se));
            else {
                if (la && 0 === la.indexOf("#t")) {
                    var o = parseInt(la.replace("#t", ""), 10);
                    o && !isNaN(o) && o > 0 && o < 2e9 && (o === i.a.getStartParams().userId && Ae.dispatch(C(G.t("not_transfer_to_yourself"))),
                    Object(f.c)("vk.com/id" + o, i.a.getStartParams().userId, i.a.getStartParams().appId, 0).then(function(e) {
                        e && e[0] && (Ae.dispatch(de(ce)),
                        Ae.dispatch(J(e[0])))
                    }).catch(m.c))
                }
                "#qr" === la && Ae.dispatch(de([re, Zt].join("|")))
            }
            if (function() {
                try {
                    return window.self !== window.top
                } catch (e) {
                    return !0
                }
            }() && !ha)
                try {
                    ua.close(),
                    Ae.dispatch(C(G.t("why_app_is_stop"))),
                    window.gtag("event", i.a.getStartParams().userId + "-" + i.a.getStartParams().groupId, {
                        event_category: "iframe_in_mobile_detect_3",
                        event_label: i.a.getStartParams().groupId
                    })
                } catch (c) {
                    Object(m.c)(c)
                }
        }),
        Ae.dispatch(function(e) {
            if (-1 !== window.location.host.indexOf("localhost")) {
                var t = '{"id":' + i.a.getStartParams().userId + ',"first_name":"Дмитрий","last_name":"Пантюхов","sex":2,"city":{"id":2,"title":"Санкт-Петербург"},"country":{"id":"1","title":"Россия"},"photo_100":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","bdate":"16.3","photo_200":"https://pp.userapi.com/9X6hfJthXRKC8zPaFpXGuxS8sBer3TE3PFJIWA/aScPdqgGAOw.jpg?ava=1","timezone":3}';
                t = JSON.parse(t),
                e(I(t))
            } else
                new v.a("VKWebAppGetUserInfo",{},"VKWebAppGetUserInfoResult","VKWebAppGetUserInfoFailed").send().then(function(t) {
                    return e(I(t))
                }).catch(function() {});
            i.a.getStartParams().groupId && ua.loadGroup(i.a.getStartParams().groupId).then(function(t) {
                return e(M({
                    group: t
                }))
            }).catch(m.c)
        }),
        ua.onBrokenEvent(function() {
            Ae.dispatch(C(G.t("too_old_app") + " " + (window.codePow ? window.codePow : "")))
        }),
        ua.onMessageEvent(function(e) {
            Ae.dispatch(C(e))
        }),
        ua.onAlreadyConnected(function() {
            Ae.dispatch(C(G.t("two_tab")))
        });
        var ga = va + fa + "/" + window.location.search + "&ver=1&pass=".concat(Object(m.d)(i.a.getStartParams().userId, 0));
        ua.onOffline(function() {
            Ae.dispatch(O({
                connect: !1
            }))
        }),
        ua.onOnline(function() {
            Ae.dispatch(O({
                connect: !0
            }))
        }),
        At.send("VKWebAppGetUserInfo", {});
        try {
            At.send("VKWebAppSetViewSettings", {
                status_bar_style: "dark"
            })
        } catch (ba) {
            Object(m.c)(ba)
        }
        var ka = !1;
        At.subscribe(function(e) {
            var t = e.detail;
            if (t) {
                var a = t.type;
                a && 0 === a.toString().indexOf("VKWebApp") && (ka || (ka = !0,
                ua.run(ga))),
                "VKWebAppUpdateInsets" === a && At.send("VKWebAppSetViewSettings", {
                    status_bar_style: "dark"
                })
            }
        });
        var Ea = i.a.getStartParams();
        G.init(Ea.getLangCode()).then(function() {
            var e;
            Ae.dispatch((e = Ie,
            function(t) {
                e.listen(function(e) {
                    t(he(e.pathname))
                })
            }
            )),
            Ae.dispatch(he(Ie.location.pathname)),
            s(ha ? r.a.createElement(Fe.a, {
                store: Ae
            }, r.a.createElement(h.a, {
                history: Ie
            }, r.a.createElement(ca, null))) : r.a.createElement(Fe.a, {
                store: Ae
            }, r.a.createElement(h.a, {
                history: Ie
            }, r.a.createElement(ta, null))))
        }).catch(function(e) {
            s(r.a.createElement(Ke, {
                error: e
            }))
        }),
        setTimeout(function() {
            return window.location.reload()
        }, 36e5)
    },
    6: function(e, t, a) {
        "use strict";
        var n = a(4)
          , r = a(5)
          , o = a(104)
          , c = a.n(o)
          , s = function() {
            function e() {
                Object(n.a)(this, e)
            }
            return Object(r.a)(e, [{
                key: "isInGroup",
                value: function() {
                    return this.groupId && this.groupId > 0
                }
            }, {
                key: "isAdmin",
                value: function() {
                    return this.isInGroup() && this.viewerGroupRole === e.VIEWER_GROUP_ROLE_ADMIN
                }
            }, {
                key: "isModerator",
                value: function() {
                    return this.isInGroup() && this.viewerGroupRole === e.VIEWER_GROUP_ROLE_MODERATOR
                }
            }, {
                key: "isEditor",
                value: function() {
                    return this.isInGroup() && this.viewerGroupRole === e.VIEWER_GROUP_ROLE_EDITOR
                }
            }, {
                key: "isMember",
                value: function() {
                    return this.isInGroup() && this.viewerGroupRole === e.VIEWER_GROUP_ROLE_MEMBER
                }
            }, {
                key: "isNobody",
                value: function() {
                    return this.isInGroup() && this.viewerGroupRole === e.VIEWER_GROUP_ROLE_NOBODY
                }
            }, {
                key: "getLangCode",
                value: function() {
                    return this.language === e.LANG_UKR ? "ua" : this.language
                }
            }, {
                key: "userId",
                get: function() {
                    return this._userId
                },
                set: function(e) {
                    this._userId = e
                }
            }, {
                key: "appId",
                get: function() {
                    return this._appId
                },
                set: function(e) {
                    this._appId = e
                }
            }, {
                key: "isAppUser",
                get: function() {
                    return this._isAppUser
                },
                set: function(e) {
                    this._isAppUser = e
                }
            }, {
                key: "areNotificationsEnabled",
                get: function() {
                    return this._areNotificationsEnabled
                },
                set: function(e) {
                    this._areNotificationsEnabled = e
                }
            }, {
                key: "language",
                get: function() {
                    return this._language
                },
                set: function(e) {
                    this._language = e
                }
            }, {
                key: "accessTokenSettings",
                get: function() {
                    return this._accessTokenSettings
                },
                set: function(e) {
                    this._accessTokenSettings = e
                }
            }, {
                key: "groupId",
                get: function() {
                    return this._groupId
                },
                set: function(e) {
                    this._groupId = parseInt(e, 10)
                }
            }, {
                key: "viewerGroupRole",
                get: function() {
                    return this._viewerGroupRole
                },
                set: function(e) {
                    this._viewerGroupRole = e
                }
            }, {
                key: "sign",
                get: function() {
                    return this._sign
                },
                set: function(e) {
                    this._sign = e
                }
            }]),
            e
        }();
        s.LANG_RUS = "ru",
        s.LANG_UKR = "uk",
        s.LANG_BEL = "be",
        s.LANG_ENG = "en",
        s.LANG_ESP = "es",
        s.LANG_FIN = "fi",
        s.LANG_DEU = "de",
        s.LANG_ITA = "it",
        s.VIEWER_GROUP_ROLE_ADMIN = "admin",
        s.VIEWER_GROUP_ROLE_EDITOR = "editor",
        s.VIEWER_GROUP_ROLE_MODERATOR = "moder",
        s.VIEWER_GROUP_ROLE_MEMBER = "member",
        s.VIEWER_GROUP_ROLE_NOBODY = "none";
        var i = function() {
            function e() {
                Object(n.a)(this, e)
            }
            return Object(r.a)(e, null, [{
                key: "fromQueryParams",
                value: function(e) {
                    var t = "integer"
                      , a = "string"
                      , n = "boolean"
                      , r = "json_to_object";
                    function o(e, o, c, s, i) {
                        var l, u = i;
                        void 0 !== o[c] && (u = o[c]),
                        s === a ? u = u.toString() : s === t ? u = parseInt(u, 10) : s === n ? u = !!+u : s === r && (u = u ? JSON.parse(u) : null),
                        e[(l = c.replace("vk_", ""),
                        l.replace(/(_\w)/g, function(e) {
                            return e[1].toUpperCase()
                        }))] = u
                    }
                    var c = new s;
                    return o(c, e, "vk_user_id", t, 0),
                    o(c, e, "vk_app_id", t, 0),
                    o(c, e, "vk_is_app_user", n, !1),
                    o(c, e, "vk_are_notifications_enabled", n, !1),
                    o(c, e, "vk_language", a, "ru"),
                    o(c, e, "vk_access_token_settings", a, ""),
                    o(c, e, "vk_group_id", t, 0),
                    o(c, e, "vk_viewer_group_role", a, "none"),
                    o(c, e, "vk_sign", a, ""),
                    c
                }
            }]),
            e
        }()
          , l = a(85);
        a.d(t, "a", function() {
            return u
        });
        var u = function() {
            function e() {
                Object(n.a)(this, e)
            }
            return Object(r.a)(e, null, [{
                key: "getStartParams",
                value: function() {
                    return null === e.startParams && (e.startParams = i.fromQueryParams(c.a.parse(window.location.search)),
                    e.startSearch = window.location.search),
                    e.startParams
                }
            }, {
                key: "allowNotifications",
                value: function(e, t) {
                    new l.a("VKWebAppAllowNotifications",{},"VKWebAppAllowNotificationsResult","VKWebAppAllowNotificationsFailed").send().then(function(t) {
                        return e(t)
                    }).catch(function(e) {
                        return t(e)
                    })
                }
            }, {
                key: "VKWebAppShowWallPostBox",
                value: function(e, t, a) {
                    new l.a("VKWebAppShowWallPostBox",e,"VKWebAppShowWallPostBoxResult","VKWebAppShowWallPostBoxResult").send().then(function(e) {
                        return t(e)
                    }).catch(function(e) {
                        return a(e)
                    })
                }
            }]),
            e
        }();
        u.startParams = null,
        u.startSearch = ""
    },
    85: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return s
        });
        var n = a(4)
          , r = a(5)
          , o = a(23)
          , c = a.n(o)
          , s = function() {
            function e(t, a) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0
                  , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
                Object(n.a)(this, e),
                this.command = t,
                this.params = a,
                this.successEvent = r,
                this.failEvent = o
            }
            return Object(r.a)(e, [{
                key: "send",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return new Promise(function(a, n) {
                        if (void 0 !== e.successEvent || void 0 !== e.failEvent) {
                            c.a.subscribe(function r(o) {
                                var s = o.detail;
                                if (s) {
                                    var i = s.type
                                      , l = s.data
                                      , u = function(e, t) {
                                        c.a.unsubscribe(r),
                                        t ? a(e) : n(e)
                                    };
                                    "VKWebAppOpenQRResult" !== e.successEvent || "VKWebAppOpenQRResult" !== i && "VKWebAppQRDone" !== i ? void 0 !== e.successEvent && e.successEvent === i ? t && l.request_id && t === l.request_id ? u(l, !0) : t || u(l, !0) : void 0 !== e.failEvent && e.failEvent === i && (t && l.request_id && t === l.request_id ? u(l, !1) : t || u(l, !1)) : u(l, !0)
                                }
                            })
                        }
                        c.a.send(e.command, e.params)
                    }
                    )
                }
            }]),
            e
        }()
    }
}, [[200, 4, 5]]]);
