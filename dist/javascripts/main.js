'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

window.onload = function (params) {
    Vue.component('tabbar', {
        template: '#tabbar', //用什么模板来渲染他
        data: function data() {
            return {
                buttonTab: [{
                    "link": "home",
                    "title": "首页",
                    "icon": "icon-shouye",
                    "green": true,
                    "num": "1"
                }, {
                    "link": "fenlei",
                    "title": "分类",
                    "icon": "icon-fenlei",
                    "green": false,
                    "num": "1"
                }, {
                    "link": "gouwuche",
                    "title": "购物车",
                    "icon": "icon-icon",
                    "green": false,
                    "num": "1"
                }, {
                    "link": "my",
                    "title": "我",
                    "icon": "icon-wode3",
                    "green": false,
                    "num": "1"
                }]
            };
        },

        methods: {}
    });
    var home = Vue.component('home', {
        template: '#home' //用什么模板来渲染他
    });
    var fenlei = Vue.component('fenlei', {
        template: '#list', //用什么模板来渲染他
        data: function data() {
            return {
                goods: [],
                listHeight: [],
                scrollY: 0,
                offsetH: '',
                pbtm: {
                    'padding-bottom': '0',
                    'overflow': 'hidden'
                },
                overhide: 'overflow: hidden',
                overf: {
                    'overflow-y': 'scroll'
                },
                titleList: [{
                    title: '肉禽蛋品',
                    color: true
                }, {
                    title: '冷冻食品',
                    color: false
                }, {
                    title: '酒水饮料',
                    color: false
                }, {
                    title: '肉禽',
                    color: false
                }, {
                    title: '蛋品',
                    color: false
                }, {
                    title: '禽',
                    color: false
                }, {
                    title: '蛋',
                    color: false
                }, {
                    title: '品',
                    color: false
                }, {
                    title: '肉',
                    color: false
                }]
            };
        },
        mounted: function mounted() {
            this.offsetH = document.body.offsetHeight;
            var offsetH = this.offsetH - 95;
            console.log(offsetH);
            $('.listTab').css('height', offsetH);
            $('.boxR').css('height', offsetH);
            $('.box').css('height', offsetH);
            $('.weui-tab__panel').css('height', offsetH);
        },
        created: function created() {
            // this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
            // this.$http.get('/api/goods').then((res) => {
            //     res = res.body
            //     if (res.errno === ERR_OK) {
            //         this.goods = res.data
            //         this.$nextTick(() => { // 3 在这个函数中调用以防内容还未加载完就执行，获取不到元素的高度导致无法滑动
            //             //console.log(this)   //可以打印看看this的内容
            //             this._initScroll()
            //         })
            //     }
            // })
        },

        methods: {
            goAnchor: function goAnchor(selector, i) {
                var anchor = this.$el.querySelector(selector);
                // document.body.scrollTop = anchor.offsetTop;
                console.log(anchor.offsetTop);
                document.querySelector('.boxR').scrollTop = anchor.offsetTop;
                for (var e = 0; e < this.titleList.length; e++) {
                    this.titleList[e].color = false;
                    this.titleList[i].color = true;
                }
            }
        }
    });
    var gouwuche = Vue.component('gouwuche', {
        template: '#gouwuche', //用什么模板来渲染他
        data: function data() {
            return {
                edit: true, //显示按钮
                disableds: false, //禁止结算
                checkboxAll: false, //全部选择结算
                offsetH: '',
                commoditys: [{
                    'goodsId': '0031655',
                    'selects': false,
                    'commodityImg': 'images/111.jpg',
                    'title': '名字能多长我不知道你们震他妈的凡人啊傻逼们',
                    'price': '9999.00',
                    'values': 1
                }, {
                    'goodsId': '0031665',
                    'selects': false,
                    'commodityImg': 'images/111.jpg',
                    'title': '真陶渊明的待不下去了一群傻逼好凡人',
                    'price': '88.00',
                    'values': 1
                }, {
                    'goodsId': '0031675',
                    'selects': false,
                    'commodityImg': 'images/111.jpg',
                    'title': '真陶渊去了一群傻逼好凡人',
                    'price': '882.00',
                    'values': 2
                }, {
                    'goodsId': '0031685',
                    'selects': false,
                    'commodityImg': 'images/111.jpg',
                    'title': '一群傻逼好凡人',
                    'price': '881.01',
                    'values': 1
                }]
            };
        },
        mounted: function mounted() {
            this.offsetH = document.body.offsetHeight;
            var offsetH = this.offsetH - 95;
            console.log(this.$roete);
            $('.weui-tab__panel').css('height', offsetH);
        },

        computed: {
            listLength: function listLength() {
                return this.commoditys.length;
            },
            total: function total() {
                var ices = 0;
                for (var i in this.commoditys) {
                    if (this.commoditys[i].selects) {
                        ices += Number(this.commoditys[i].price) * Number(this.commoditys[i].values);
                        console.log(_typeof(Number(this.commoditys[i].price)));
                    }
                }
                if (ices == 0) {
                    //按钮禁止
                    this.disableds = true;
                } else {
                    this.disableds = false;
                }
                return ices;
            }
        },
        methods: {
            editSwitch: function editSwitch(edit) {
                //选择商品
                this.edit = !this.edit;
            },
            editDel: function editDel() {
                //删除
                console.log('删除');
                for (var i = 0; i < this.commoditys.length; i++) {
                    console.log(this.commoditys[i].selects);
                    if (this.commoditys[i].selects) {
                        this.commoditys.splice(i, 1);
                        this.editDel();
                    }
                }
            },
            closing: function closing(_index) {
                //结算
                alert(this.total);
            },
            increase: function increase(_index) {
                //增加
                console.log('增加');
                this.commoditys[_index].values += 1;
                if (this.commoditys[_index].values > 9999) {
                    this.commoditys[_index].values = 9999;
                }
            },
            reduce: function reduce(_index) {
                //减少
                console.log('减少');
                this.commoditys[_index].values -= 1;
                if (this.commoditys[_index].values < 1) {
                    this.commoditys[_index].values = 1;
                }
            },
            checkboxAlls: function checkboxAlls() {
                if (this.checkboxAll == true) {
                    for (var i = 0; i < this.commoditys.length; i++) {
                        this.commoditys[i].selects = true;
                    }
                } else {
                    for (var i = 0; i < this.commoditys.length; i++) {
                        this.commoditys[i].selects = false;
                    }
                }
            }
        }
    });
    var my = Vue.component('my', {
        template: '#myHome' //用什么模板来渲染他
    });
    var myOrder = Vue.component('myOrder', {
        template: '#myOrder' //用什么模板来渲染他
    });
    var cartAddress = Vue.component('cartAddress', {
        template: '#cartAddress', //用什么模板来渲染他
        data: function data() {
            return {
                hs: "background:#ccc",
                addressList: [{
                    addressId: '01', //地址id
                    name: '名字',
                    phone: '13666666666',
                    address: '广东省广州市萝岗区天慧路3号广州互联网产业园C601深圳市商沃科技有限公司',
                    tabNum: '1', //标签 1 公司 2 家 0 学校
                    defaults: '1' // 默认地址 1 不是默认0
                }, {
                    addressId: '02',
                    name: '名字2',
                    phone: '136777777776',
                    address: '广东省广州市萝岗区天慧路3号广州互联网产业园C601深圳市商沃科技有限公司',
                    tabNum: '2',
                    defaults: '0'
                }]
            };
        },

        methods: {
            alert: function (_alert) {
                function alert(_x) {
                    return _alert.apply(this, arguments);
                }

                alert.toString = function () {
                    return _alert.toString();
                };

                return alert;
            }(function (g) {
                alert(123);
            })
        }
    });
    var addresss = Vue.component('addresss', {
        template: '#addresss', //用什么模板来渲染他
        data: function data() {
            return {
                addressList: [],
                tabList: [{
                    tabID: '1',
                    tabName: '公司',
                    tabColor: 'false',
                    addresBox: ''
                }]
            };
        },
        mounted: function mounted() {
            document.addEventListener('click', function (params) {
                var abox = document.querySelectorAll(".acs");
                for (var i = 0; i < abox.length; i++) {
                    abox[i].onclick = function () {
                        for (var i = 0; i < abox.length; i++) {
                            abox[i].classList.remove('act');
                        }
                        this.classList.add("act");
                    };
                }
            });
        },

        methods: {}
    });
    var maps = Vue.component('maps', {
        template: '#maps', //用什么模板来渲染他
        data: function data() {
            return {
                locat: '',
                locats: '',
                longitudes: 0, //经度
                latitudes: 0, //维度
                addressBox: []
            };
        },
        mounted: function mounted() {
            console.log('模板编译完成');
            // alert('模板编译完成')
            var self = this;
            window.navigator.geolocation.getCurrentPosition(function (position) {
                self.longitudes = position.coords.longitude;
                self.latitudes = position.coords.latitude;
                var url = "https://restapi.amap.com/v3/assistant/coordinate/convert?locations=" + self.longitudes + "," + self.latitudes + "&coordsys=gps&output=json&key=c962412697057591abdf0be494fc2c2b";
                $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "jsonp",
                    success: function success(data) {
                        if (data.status == 1) {
                            self.locat = data.locations;
                            self.locats = self.locat.split(',');
                            self.initMap(self.locats[0], self.locats[1]);
                        }
                    },
                    error: function error(data) {
                        alert("错误了");
                    }
                });
            });
        },
        created: function created() {
            console.log('实例已经创建完成');
        },

        methods: {
            clickName: function clickName(n) {
                alert(n);
            },
            initMap: function initMap(q1, q2) {
                var self = this;
                AMapUI.loadUI(['misc/PositionPicker'], function (PositionPicker) {
                    var map = new AMap.Map('containers', {
                        zoom: 17,
                        center: [q1, q2],
                        // center: [121.59996, 31.197646],
                        resizeEnable: true,
                        scrollWheel: false
                    });
                    var positionPicker = new PositionPicker({
                        mode: 'dragMap',
                        map: map
                    });

                    positionPicker.on('success', function (positionResult) {
                        self.addressBox = [];
                        console.log(positionResult);
                        var addsLen = positionResult.regeocode.pois;
                        // console.log(JSON.stringify(addsLen))
                        addsLen.forEach(function (el) {
                            self.addressBox.push(el);
                            // console.log(el)
                        }, this);
                    });
                    positionPicker.on('fail', function (positionResult) {
                        console.log(positionResult);
                    });

                    positionPicker.start();
                    map.panBy(0, 1);

                    map.addControl(new AMap.ToolBar({
                        liteStyle: true
                    }));
                });
            }
        }
    });

    // 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

    // 1. 定义（路由）组件。
    // 可以从其他文件 import 进来
    // const Foo = {
    //     template: '<div>foo</div>'
    // }
    // const Bar = {
    //     template: '<div>bar</div>'
    // }

    // 2. 定义路由
    // 每个路由应该映射一个组件。 其中"component" 可以是
    // 通过 Vue.extend() 创建的组件构造器，
    // 或者，只是一个组件配置对象。
    // 我们晚点再讨论嵌套路由。
    var routes = [{
        path: '/home',
        component: home
    }, {
        path: '/fenlei',
        component: fenlei,
        meta: {
            scrollToTop: true
        }
    }, {
        path: '/gouwuche', //{{ $route.params.id }} 展示接收的ID
        component: gouwuche
        // children: [{
        //     // 当 /user/:id/profile 匹配成功，
        //     // UserProfile 会被渲染在 User 的 <router-view> 中
        //     path: 'cartAddress',
        //     component: cartAddress
        // }],

    }, {
        path: '/my',
        component: my
    }, {
        path: '/cartAddress',
        component: cartAddress
    }, {
        path: '/addresss',
        component: addresss
    }, {
        path: '/maps',
        component: maps
    }, {
        path: '/myOrder',
        component: myOrder
    }, {
        path: '/', //首页固定
        redirect: '/home'
    }];

    // 3. 创建 router 实例，然后传 `routes` 配置
    // 你还可以传别的配置参数, 不过先这么简单着吧。
    var router = new VueRouter({
        // mode: 'history',
        routes: routes, // （缩写）相当于 routes: routes
        linkActiveClass: 'linkActive', //激活后的连接颜色Class
        scrollBehavior: function scrollBehavior(to, from, savedPosition) {
            // return 期望滚动到哪个的位置
            //  return { x: 0, y: 0 }
            if (to.hash) {
                return {
                    selector: to.hash
                };
            }
            if (savedPosition) {
                // saved头寸仅适用于popstate导航。
                return savedPosition;
            } else {
                var position = {};
                // 新的导航。
                // 通过返回选择器滚动到锚点
                if (to.hash) {
                    position.selector = to.hash;
                }
                // 检查是否有任何匹配的路由配置需要滚动到顶部
                if (to.matched.some(function (m) {
                    return m.meta.scrollToTop;
                })) {
                    // 如果不提供选择器，就会使用连线，cords will be used if no selector is provided,
                    // 或者如果选择器不匹配任何元素。
                    position.x = 0;
                    position.y = 0;
                }
                // 如果返回的位置是假的或空的对象，
                // 将保留当前的滚动位置。
                return position;
            }
        }
    });

    // 4. 创建和挂载根实例。
    // 记得要通过 router 配置参数注入路由，
    // 从而让整个应用都有路由功能
    var app = new Vue({
        el: '#container',
        router: router,
        data: function data() {
            return {};
        }
    });

    // 现在，应用已经启动了！
};
'use strict';

window.onload = function () {
    var agumon = new Vue({
        el: '#app', //id 在这个盒子里面才能操作下面的东西
        data: { //数据
            message: 'Hello Vue!',
            msg: '哈哈哈',
            foot: false,
            checked: false,
            titleAll: ['商品信息', '商品规格', '商品主图', '商品详情', '客户价格设置'],
            goodsMsg: ['商品名称', '商品类型', '商品单位', '品牌', '描述'],
            msgKey: ['', '', '', '', ''],
            msgType: ['Action', 'Action', 'Action', 'Action'],
            iCss: 'line-height:35px;',
            standard: ['规格', '属性'],
            goodsStandard: [{
                name: 'standard',
                fish: false,
                val: '',
                title: '自定义规格'
            }, {
                name: 'color',
                fish: false,
                val: '',
                title: '例如：颜色'
            }, {
                name: 'size',
                fish: false,
                val: '',
                title: '例如：尺寸'
            }, {
                name: 'goodsBody',
                fish: false,
                val: '',
                title: '例如：品种'
            }],
            otable: ['零售价(元)', '成本价(元)', '库存', '缩略图', '商品编码', '操作'],
            otableGoods: [],
            addOtbGoods: { //add table goods 
                name: 'standOne',
                fish: false,
                msg: '颜色尺寸等..'
            },
            childSet: [],
            childColors: [],
            childSize: [],
            childBody: [],
            json: {
                name: 'standOne',
                fish: false,
                val: '',
                childColors: ''
            },
            todos: [{
                text: 'Learn JavaScript'
            }, {
                text: 'Learn Vue'
            }, {
                text: 'Build something awesome'
            }],
            oimg: ['../framework/lg.jpg', '../framework/lg.jpg', '../framework/lg.jpg'],
            childOne: false, //状态1
            childTwo: false, //状态2
            childThree: false, //状态3
            childfour: false //状态4

        },
        computed: {
            titleLen: function titleLen() {
                return this.msgKey[0].length;
            },
            titleLen2: function titleLen2() {
                return this.msgKey[2].length;
            },
            titleLen3: function titleLen3() {
                return this.msgKey[3].length;
            },
            titleLen4: function titleLen4() {
                return this.msgKey[4].length;
            },
            titleLen5: function titleLen5() {
                return this.msgKey[5].length;
            }
        },
        methods: { //事件操作

            add: function add() {
                this.arr.push('message');
            },
            nextInput: function nextInput(is, os) {
                console.info(is, os, this.goodsStandard.length);
                console.info(this.msgKey[0]);
                console.info(this.goodsStandard[0].val);

                console.info(!this.goodsStandard[0].val);
                if (this.goodsStandard[0].val && os) {
                    // console.info('！')
                } else {}
                    // console.info('输入啊！')

                    // if (os == true) {
                    //     if (this.goodsStandard.length >= 2) {
                    //         this.goodsStandard.splice(is, 1)
                    //         console.info('都不做')
                    //     } else {
                    //         this.goodsStandard.push(this.goodsColor)
                    //     }
                    // }
                    // if (os == false) {
                    //     this.goodsStandard.splice(is + 1, 1)
                    //     console.info('什么都不做')
                    // }
            },

            //   父规格值
            keyInput: function keyInput(i, v, t) {
                // 规格状态改变
                console.log(i, v, t, this.otableGoods.length);
                //   第一个
                if (v != '' && i == 0) {
                    if (this.childOne == false) {
                        this.otPush();
                        this.childOne = !this.childOne;
                    }
                } else if (v == '' && i == 0) {
                    if (this.childOne == true) {
                        this.otableGoods.splice(i, 1);
                        this.childOne = !this.childOne;
                    }
                };
                console.log(this.otableGoods);
                // 第二个
                if (v != '' && i == 1) {
                    if (this.childTwo == false) {
                        this.childColors.push('');
                        this.childTwo = true;
                    }
                } else if (v == '' && i == 1) {
                    if (this.childTwo == true) {
                        this.childColors.splice(i, 1);
                        this.childTwo = false;
                    }
                };
                //   第三个
                if (v != '' && i == 2) {
                    if (this.childThree == false) {
                        this.childSize.push('');
                        this.childThree = true;
                    }
                } else if (v == '' && i == 2) {
                    if (this.childThree == true) {
                        this.childSize.splice(i, 1);
                        this.childThree = false;
                    }
                }
                //第四个
                if (v != '' && i == 3) {
                    if (this.childfour == false) {
                        this.childBody.push('');
                        this.childfour = true;
                    }
                } else if (v == '' && i == 3) {
                    if (this.childfour == true) {
                        this.childBody.splice(i, 1);
                        this.childfour = false;
                    }
                }
            },
            otPush: function otPush() {
                //简单拷贝一份OBJ
                this.otableGoods.push(JSON.parse(JSON.stringify(this.addOtbGoods)));
            },

            //字属性的输入地方
            nextGoods: function nextGoods(i) {
                console.info(this.childSet[i], i);
                if (this.childSet[i]) {
                    console.info('初めまして');
                } else {
                    console.info('输入啊!!！');
                }
            }
        }
    });
};
"use strict";
'use strict';
'use static';

//模板字符串

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _templateObject = _taggedTemplateLiteral(['\u4ECA\u5929\u7684\u65E9\u9910\u662F ', ' \u548C ', ' !'], ['\u4ECA\u5929\u7684\u65E9\u9910\u662F ', ' \u548C ', ' !']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

{

    // 分解模板字符串 kitcchen

    var kitcchen = function kitcchen(strings) {
        console.log(strings); //输出字符串

        for (var _len = arguments.length, vals = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            vals[_key - 1] = arguments[_key];
        }

        console.log(vals); //输出模板里面的值
        // raw会把原始的字符串输出
    };

    var bao = '鲍',
        mian = '面';
    var _to = kitcchen(_templateObject, bao, mian);
}

// 判断一个字符串里面是不是包含其他字符串
{
    console.log(
    // 1.以某个字符串开头的
    to.startsWith('今天'), //返回是 true
    // 2.某个结尾的
    to.endsWith('!'), //返回是 true 不是返回false
    // 3.是不是包含某个字符串
    to.includes('早餐') //返回是 true
    );
}

// ... 语法 把东西展开
{
    var _console;

    var art = ['1', '2'],
        foods = ['3'].concat(art);
    (_console = console).log.apply(_console, art);
    console.log(foods); //1,2,3
}

// ...剩余的还有 参数
{
    var ice = function ice(p1, p2) {
        var _console2;

        for (var _len2 = arguments.length, p3 = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            p3[_key2 - 2] = arguments[_key2];
        }

        console.log(p1, p2, p3);
        // 想展开数组的话在前面输出的...
        (_console2 = console).log.apply(_console2, [p1, p2].concat(p3));
    };

    //后面输出的会是数组

    // 结构对象
    var obj = function obj(p1, p2) {
        var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            p3 = _ref.p3,
            p4 = _ref.p4;

        console.log(p1, p2, p3, p4);
    };

    ice('1', '2', '3', '4');
    obj('1', '2', '3', '4');
}

// 函数name属性
{
    var breaks = function breaks(params) {};

    console.log(breaks.name); //breaks

    // 匿名函数表达式 名字就是变量的名字
    var breaks2 = function breaks2(params) {};
    console.log(breaks2.name); //breaks

    //函数声明的名字
    var breaks3 = function cat(params) {};
    console.log(breaks3.name); //cat
}

// 箭头函数=>
{
    var backs = function backs(des) {
        return des;
    };
    // 普通函数写法
    var backs2 = function backs2(des) {
        return des;
    };
    var backs3 = function backs3(des, des2) {
        return des + des2;
    };
    var backs5 = function backs5(des, des2) {
        return des + des2;;
    };

    // 普通函数写法
    var backs4 = function backs4(des) {
        return des + des2;
    };
}

// 对象方法
{
    var _dessert = 'cart',
        drink = 'hede';
    var _food = {
        dessert: _dessert,
        drink: drink,
        backs: function backs() {} //等于 backs:function(){}

    };
    console, log(_food);
}

//输出带空格的对象名字
{
    var _food2 = {};

    foode.dessert = 'caki';
    foode['hot drink'] = 'cha';

    // 或者定义一个变量
    var _drink = 'hot drink';
    // 输出同上
    foode[_drink] = 'cha';
}

// 判断是不是一个东西Object.is(NaN, NaN) 
{
    // +0==-0// true
    // +0===-0//true
    // NaN==NaN//false
    // 用Object.is()判断两个东西相同
    Object.is(NaN, NaN); //true
    Object.is(-0, N + 0); //false
}

// 一个对象的属性赋值到另一个对象Object.assign(‘接收者，目标’，‘赋值的元素’)
{
    var _backs = {};
    Object.assign(_backs, {
        drink: 'cha'
    }, {
        drink: '会覆盖上面'
    });
}

// 创建对象以后去改变对象
{
    var _backs2 = {
        getDrink: function getDrink() {
            return 'cha';
        }
    };
    var dinner = {
        getDrink: function getDrink() {
            return 'pijiu';
        }
    };
    // 创建一个对象 得到判断是不是这个对象里面的Object.getPrototypeOf()
    var sunday = Object.create(_backs2);
    console.log(sunday.getDrink()); //‘cha’
    console.log(Object.getPrototypeOf(sunday) == _backs2); //true
    // 再设置他的对象Object.setPrototypeOf('要设置的对象','要设置成这个对象')
    Object.setPrototypeOf(sunday, dinner);
    console.log(sunday.getDrink()); //pijiu
    console.log(Object.getPrototypeOf(sunday) == _backs2); //false
}

// __proto__ 可以设置对象里面的__proto__
{
    var _backs3 = {
        getDrink: function getDrink() {
            return 'cha';
        }
    };
    var _dinner = {
        getDrink: function getDrink() {
            return 'pijiu';
        }
    };
    var _sunday = {
        __proto__: _backs3
    };
    console.log(_sunday.getDrink()); //‘cha’
    console.log(Object.getPrototypeOf(_sunday) == _backs3); //true
    _sunday.__proto__ = _dinner;
    console.log(_sunday.getDrink()); //pijiu
    console.log(Object.getPrototypeOf(_sunday) == _backs3); //false
}

// super执行以下那个对象返回的东西
{
    var _obj;

    var _backs4 = {
        getDrink: function getDrink() {
            return 'cha';
        }
    };
    var _dinner2 = {
        getDrink: function getDrink() {
            return 'pijiu';
        }
    };
    var _sunday2 = _obj = {
        __proto__: _backs4,
        getDrink: function getDrink() {
            //  super执行以下那个对象返回的东西
            return _get(_obj.__proto__ || Object.getPrototypeOf(_obj), 'getDrink', this).call(this) + '茶';
        }
    };
    console.log(_sunday2.getDrink()); //‘cha茶’
}

/**
 * Iterators迭代器，轮流,交换，特点，每次执行会返回一个对象，
 * {value:xx,dome:ture/false}
 * 对象里面有两样东西，一个是返回来的值，一个是布尔值
 * 表示还有没有迭代的东西，没有就dome的值是ture意思就是完成迭代，
 * 还有next()对象，执行返回对象{value:xx,dome:ture/false}
 * 如果没有迭代东西执行的时候，value的值就变成undefined，dome会变成ture
 * 在ES6 有个Generators可以去生成迭代器
 * 
 */
{
    var _chef = function _chef(foods) {
        var i = 0;

        return {
            next: function next() {
                var done = i >= foods.length;
                var value = !done ? foods[i++] : undefined;

                return {
                    value: value,
                    done: done
                };
            }
        };
    };

    var wg = _chef(['xihongsi', 'chaojidan']);
    console.log(wg.next());
    console.log(wg.next());
    console.log(wg.next());
}

//Generators迭代器
{
    var _chef2 = regeneratorRuntime.mark(function _chef2(params) {
        return regeneratorRuntime.wrap(function _chef2$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return '苹果';

                    case 2:
                        _context.next = 4;
                        return '笑';

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _chef2, this);
    });

    var wh = _chef2();

    console.log(wh.next());
    console.log(wh.next());
    console.log(wh.next());
}

//Generators迭代器
{
    var _chef3 = regeneratorRuntime.mark(function _chef3(foods) {
        var i;
        return regeneratorRuntime.wrap(function _chef3$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        i = 0;

                    case 1:
                        if (!(i < foods.length)) {
                            _context2.next = 7;
                            break;
                        }

                        _context2.next = 4;
                        return foods[i];

                    case 4:
                        i++;
                        _context2.next = 1;
                        break;

                    case 7:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _chef3, this);
    });

    var _wh = _chef3(['1', '2']);
    console.log(_wh.next());
    console.log(_wh.next());
    console.log(_wh.next());
}
//Generators迭代器 表达式
{
    var _chef4 = regeneratorRuntime.mark(function _chef4(foods) {
        var i;
        return regeneratorRuntime.wrap(function _chef4$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        i = 0;

                    case 1:
                        if (!(i < foods.length)) {
                            _context3.next = 7;
                            break;
                        }

                        _context3.next = 4;
                        return foods[i];

                    case 4:
                        i++;
                        _context3.next = 1;
                        break;

                    case 7:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _chef4, this);
    });
    var _wh2 = _chef4(['1', '2']);
    console.log(_wh2.next());
    console.log(_wh2.next());
    console.log(_wh2.next());
}

// 定义类

{
    var Chef = function () {
        //创建一个类 
        function Chef(foods) {
            _classCallCheck(this, Chef);

            //添加一个方法 创建实例后会自动执行这个方法初始化的东西放到这
            this.foods = food;
            this.dish = [];
        }

        _createClass(Chef, [{
            key: 'menu',
            get: function get() {
                //得到东西的方法
                return this.dish;
            },
            set: function set(dish) {
                //设置东西的方法
                this.dish.push(dish);
            }

            // cook() { //自定义的方法输出
            //     console.log(this.foods)
            // }

            // 在类里面静态的方法 不需要实例化就可以使用的方法

        }], [{
            key: 'cook',
            value: function cook(foods) {
                console.log(foods);
            }
        }]);

        return Chef;
    }();
    // 创建一个实例


    var kk = new chef('1');
    kk.cook();

    // 创建一个实例 使用menu这个设置器
    console.log(kk.menu = '1');
    console.log(kk.menu = '2');
    console.log(kk.menu); //输出数组

    // static 在类里面静态的方法 不需要实例化就可以使用的方法
    Chef.cook('apple'); //传递过去的值直接输出
}

// 名词类的数据结构 对象 map 一个对象里面可以包含多个项目 每个项目都有一个名字 和一个对应的值
//使用对象可能会有一些限制或者引起冲突 不能用对象作为项目的名字

// 创建一个 map
var food = new Map();
var fruit = {},
    //对象
cook = function cook() {},
    //函数 也可以做位key
dessert = '甜点'; //字符串

// 上面的变量food里面表示的map里面的key

// 向里面添加项目 
// food.set(key项目的名字，val值);
food.set(fruit, '柠檬'); //Map{Object {}=>"柠檬"}
food.set(cook, '刀叉'); //Map{Object {}=>"柠檬"，function function=>"刀叉"}
food.set(dessert, '甜甜圈'); //Map{Object {}=>"柠檬"，function function=>"刀叉","甜点"=>"甜甜圈"}

console.log(food); //map 空对象
console.log(food.size); // 想知道里面有多少个项目 //3
console.log(food.get(fruit)); // 得到对应的值

// 删除里面的项目
food.delete(cook);
console.log(food.has(cook)); //false

// 循环map里面的东西可以用foreach
food.forEach(function (val, key) {
    console.log(key + '=' + val);
});

// 清空map
food.clear();

//定义模块module
"use strict";
'use strict';

/**
 *@param ele 传入的第一个对象 a 
 *@param window 等系统变量在插件内部就有了一个局部的引用，可以提高访问速度，会有些许性能的提升
 */
;
(function ($, window, document, undefined) {
    // 定义构造函数
    var fixedStar = function fixedStar(ele, opt) {
        this.$element = ele, //需要操作的对象
        this.defaults = {
            'width': '300px',
            'height': '300px'
        }, this.options = $.extend({}, this.defaults, opt), this.imglength = this.$element.find("canvas").length;
    };
    // 定义一个方法
    fixedStar.prototype = {
        lazyload: function lazyload() {
            if (this.imglength > 0) {
                this.$element.find("canvas").each(function () {
                    var imgSrc = $(this).data("src");
                    var imgObj = new Image();
                    imgObj.canvas = $(this)[0];
                    var cvs = imgObj.canvas.getContext('2d');
                    console.log(cvs);
                    if (cvs) {
                        imgObj.onload = function () {
                            imgObj.canvas.width = this.width;
                            imgObj.canvas.height = this.height;
                            cvs.drawImage(this, 0, 0);
                            $(imgObj.canvas).css("background-image", "none");
                        };
                        console.log(imgObj);
                        console.log('这里是插件');
                        imgObj.src = imgSrc;
                    }
                });
            }
        }
    };
    //插件中使用对象
    $.fn.myCanvas = function (options) {
        var can = new fixedStar(this, options);
        //调用其方法
        return can.lazyload();
    };
})(jQuery, window, document);
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

window.onload = function (params) {
    Vue.component('tabbar', {
        template: '#tabbar', //用什么模板来渲染他
        data: function data() {
            return {
                buttonTab: [{
                    "link": "/home",
                    "title": "首页",
                    "icon": "icon-shouye",
                    "green": true,
                    "num": "1"
                }, {
                    "link": "/fenlei",
                    "title": "分类",
                    "icon": "icon-fenlei",
                    "green": false,
                    "num": "1"
                }, {
                    "link": "/gouwuche",
                    "title": "购物车",
                    "icon": "icon-icon",
                    "green": false,
                    "num": "1"
                }, {
                    "link": "/my",
                    "title": "我",
                    "icon": "icon-wode3",
                    "green": false,
                    "num": "1"
                }]
            };
        },

        methods: {}
    });
    var home = Vue.component('home', {
        template: '#home' //用什么模板来渲染他
    });
    var fenlei = Vue.component('fenlei', {
        template: '#list', //用什么模板来渲染他
        data: function data() {
            return {
                goods: [],
                listHeight: [],
                scrollY: 0,
                offsetH: '',
                pbtm: {
                    'padding-bottom': '0',
                    'overflow': 'hidden'
                },
                overhide: 'overflow: hidden',
                overf: {
                    'overflow-y': 'scroll'
                },
                titleList: [{
                    title: '肉禽蛋品',
                    color: true
                }, {
                    title: '冷冻食品',
                    color: false
                }, {
                    title: '酒水饮料',
                    color: false
                }, {
                    title: '肉禽',
                    color: false
                }, {
                    title: '蛋品',
                    color: false
                }, {
                    title: '禽',
                    color: false
                }, {
                    title: '蛋',
                    color: false
                }, {
                    title: '品',
                    color: false
                }, {
                    title: '肉',
                    color: false
                }]
            };
        },
        mounted: function mounted() {
            this.offsetH = document.body.offsetHeight;
            var offsetH = this.offsetH - 95;
            console.log(offsetH);
            $('.listTab').css('height', offsetH);
            $('.boxR').css('height', offsetH);
            $('.box').css('height', offsetH);
            $('.weui-tab__panel').css('height', offsetH);
        },
        created: function created() {
            // this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
            // this.$http.get('/api/goods').then((res) => {
            //     res = res.body
            //     if (res.errno === ERR_OK) {
            //         this.goods = res.data
            //         this.$nextTick(() => { // 3 在这个函数中调用以防内容还未加载完就执行，获取不到元素的高度导致无法滑动
            //             //console.log(this)   //可以打印看看this的内容
            //             this._initScroll()
            //         })
            //     }
            // })
        },

        methods: {
            goAnchor: function goAnchor(selector, i) {
                var anchor = this.$el.querySelector(selector);
                // document.body.scrollTop = anchor.offsetTop;
                console.log(anchor.offsetTop);
                document.querySelector('.boxR').scrollTop = anchor.offsetTop;
                for (var e = 0; e < this.titleList.length; e++) {
                    this.titleList[e].color = false;
                    this.titleList[i].color = true;
                }
            }
        }
    });
    var gouwuche = Vue.component('gouwuche', {
        template: '#gouwuche', //用什么模板来渲染他
        data: function data() {
            return {
                edit: true, //显示按钮
                disableds: false, //禁止结算
                checkboxAll: false, //全部选择结算
                offsetH: '',
                commoditys: [{
                    'goodsId': '0031655',
                    'selects': false,
                    'commodityImg': 'images/111.jpg',
                    'title': '名字能多长我不知道你们震他妈的凡人啊傻逼们',
                    'price': '9999.00',
                    'values': 1
                }, {
                    'goodsId': '0031665',
                    'selects': false,
                    'commodityImg': 'images/111.jpg',
                    'title': '真陶渊明的待不下去了一群傻逼好凡人',
                    'price': '88.00',
                    'values': 1
                }, {
                    'goodsId': '0031675',
                    'selects': false,
                    'commodityImg': 'images/111.jpg',
                    'title': '真陶渊去了一群傻逼好凡人',
                    'price': '882.00',
                    'values': 2
                }, {
                    'goodsId': '0031685',
                    'selects': false,
                    'commodityImg': 'images/111.jpg',
                    'title': '一群傻逼好凡人',
                    'price': '881.01',
                    'values': 1
                }]
            };
        },
        mounted: function mounted() {
            this.offsetH = document.body.offsetHeight;
            var offsetH = this.offsetH - 95;
            console.log(this.$roete);
            $('.weui-tab__panel').css('height', offsetH);
        },

        computed: {
            listLength: function listLength() {
                return this.commoditys.length;
            },
            total: function total() {
                var ices = 0;
                for (var i in this.commoditys) {
                    if (this.commoditys[i].selects) {
                        ices += Number(this.commoditys[i].price) * Number(this.commoditys[i].values);
                        console.log(_typeof(Number(this.commoditys[i].price)));
                    }
                }
                if (ices == 0) {
                    //按钮禁止
                    this.disableds = true;
                } else {
                    this.disableds = false;
                }
                return ices;
            }
        },
        methods: {
            editSwitch: function editSwitch(edit) {
                //选择商品
                this.edit = !this.edit;
            },
            editDel: function editDel() {
                //删除
                console.log('删除');
                for (var i = 0; i < this.commoditys.length; i++) {
                    console.log(this.commoditys[i].selects);
                    if (this.commoditys[i].selects) {
                        this.commoditys.splice(i, 1);
                        this.editDel();
                    }
                }
            },
            closing: function closing(_index) {
                //结算
                alert(this.total);
            },
            increase: function increase(_index) {
                //增加
                console.log('增加');
                this.commoditys[_index].values += 1;
                if (this.commoditys[_index].values > 9999) {
                    this.commoditys[_index].values = 9999;
                }
            },
            reduce: function reduce(_index) {
                //减少
                console.log('减少');
                this.commoditys[_index].values -= 1;
                if (this.commoditys[_index].values < 1) {
                    this.commoditys[_index].values = 1;
                }
            },
            checkboxAlls: function checkboxAlls() {
                if (this.checkboxAll == true) {
                    for (var i = 0; i < this.commoditys.length; i++) {
                        this.commoditys[i].selects = true;
                    }
                } else {
                    for (var i = 0; i < this.commoditys.length; i++) {
                        this.commoditys[i].selects = false;
                    }
                }
            }
        }
    });
    var my = Vue.component('my', {
        template: '#myHome' //用什么模板来渲染他
    });
    var myOrder = Vue.component('myOrder', {
        template: '#myOrder', //用什么模板来渲染他
        data: function data() {
            return {};
        },

        computed: {
            // 计算的地方
        }
    });
    var cartAddress = Vue.component('cartAddress', {
        template: '#cartAddress', //用什么模板来渲染他
        data: function data() {
            return {
                hs: "background:#ccc",
                addressList: [{
                    addressId: '01', //地址id
                    name: '名字',
                    phone: '13666666666',
                    address: '广东省广州市萝岗区天慧路3号广州互联网产业园C601深圳市商沃科技有限公司',
                    tabNum: '1', //标签 1 公司 2 家 0 学校
                    defaults: '1' // 默认地址 1 不是默认0
                }, {
                    addressId: '02',
                    name: '名字2',
                    phone: '136777777776',
                    address: '广东省广州市萝岗区天慧路3号广州互联网产业园C601深圳市商沃科技有限公司',
                    tabNum: '2',
                    defaults: '0'
                }]
            };
        },

        methods: {
            alert: function (_alert) {
                function alert(_x) {
                    return _alert.apply(this, arguments);
                }

                alert.toString = function () {
                    return _alert.toString();
                };

                return alert;
            }(function (g) {
                alert(123);
            })
        }
    });
    var addresss = Vue.component('addresss', {
        template: '#addresss', //用什么模板来渲染他
        data: function data() {
            return {
                addressList: [],
                tabList: [{
                    tabID: '1',
                    tabName: '公司',
                    tabColor: 'false',
                    addresBox: ''
                }]
            };
        },
        mounted: function mounted() {
            document.addEventListener('click', function (params) {
                var abox = document.querySelectorAll(".acs");
                for (var i = 0; i < abox.length; i++) {
                    abox[i].onclick = function () {
                        for (var i = 0; i < abox.length; i++) {
                            abox[i].classList.remove('act');
                        }
                        this.classList.add("act");
                    };
                }
            });
        },

        methods: {}
    });
    var maps = Vue.component('maps', {
        template: '#maps', //用什么模板来渲染他
        data: function data() {
            return {
                locat: '',
                locats: '',
                longitudes: 0, //经度
                latitudes: 0, //维度
                addressBox: []
            };
        },
        mounted: function mounted() {
            console.log('模板编译完成');
            // alert('模板编译完成')
            var self = this;
            window.navigator.geolocation.getCurrentPosition(function (position) {
                self.longitudes = position.coords.longitude;
                self.latitudes = position.coords.latitude;
                var url = "https://restapi.amap.com/v3/assistant/coordinate/convert?locations=" + self.longitudes + "," + self.latitudes + "&coordsys=gps&output=json&key=c962412697057591abdf0be494fc2c2b";
                $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "jsonp",
                    success: function success(data) {
                        if (data.status == 1) {
                            self.locat = data.locations;
                            self.locats = self.locat.split(',');
                            self.initMap(self.locats[0], self.locats[1]);
                        }
                    },
                    error: function error(data) {
                        alert("错误了");
                    }
                });
            });
        },
        created: function created() {
            console.log('实例已经创建完成');
        },

        methods: {
            clickName: function clickName(n) {
                alert(n);
            },
            initMap: function initMap(q1, q2) {
                var self = this;
                AMapUI.loadUI(['misc/PositionPicker'], function (PositionPicker) {
                    var map = new AMap.Map('containers', {
                        zoom: 17,
                        center: [q1, q2],
                        // center: [121.59996, 31.197646],
                        resizeEnable: true,
                        scrollWheel: false
                    });
                    var positionPicker = new PositionPicker({
                        mode: 'dragMap',
                        map: map
                    });

                    positionPicker.on('success', function (positionResult) {
                        self.addressBox = [];
                        console.log(positionResult);
                        var addsLen = positionResult.regeocode.pois;
                        // console.log(JSON.stringify(addsLen))
                        addsLen.forEach(function (el) {
                            self.addressBox.push(el);
                            // console.log(el)
                        }, this);
                    });
                    positionPicker.on('fail', function (positionResult) {
                        console.log(positionResult);
                    });

                    positionPicker.start();
                    map.panBy(0, 1);

                    map.addControl(new AMap.ToolBar({
                        liteStyle: true
                    }));
                });
            }
        }
    });
    var goodsList = Vue.component('goodsList', {
        template: '#goodsList', //用什么模板来渲染他
        data: function data() {
            return {};
        }
    });

    var orderTab1 = Vue.component('orderTab1', {
        template: '#orderTab1', //用什么模板来渲染他
        data: function data() {
            return {
                goodsList: [{
                    'nextTime': '2017年7月24日12:08:58',
                    'orderStatus': 3, //0 未付款 1 已付款 2 已取消 3 已完成
                    'totalPrices': 0,
                    list: [{
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
                        'price': '20', //金额
                        'values': 2 //数量

                    }, {
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
                        'price': '20.10', //金额
                        'values': 4 //数量

                    }]
                }, {
                    'nextTime': '2017年7月24日12:08:58',
                    'orderStatus': 1, //0 未付款 1 已付款 2 已取消 3 已完成
                    'totalPrices': 1000,
                    list: [{
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '由各种物质组成的巨型球状天体，',
                        'price': '220', //金额
                        'values': 1 //数量

                    }, {
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '叫做星球。星球有一定的形状，有自己的运行轨道',
                        'price': '20.30', //金额
                        'values': 4 //数量

                    }]
                }, {
                    'nextTime': '2017年7月24日13:08:58',
                    'orderStatus': 2, //0 未付款 1 已付款 2 已取消 3 已完成
                    'totalPrices': 10100,
                    list: [{
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '由各种物质组成的巨型球状天体1，',
                        'price': '220', //金额
                        'values': 1 //数量

                    }]
                }]
            };
        }
    });
    var orderTab2 = Vue.component('orderTab2', {
        template: '#orderTab2', //用什么模板来渲染他
        data: function data() {
            return {
                goodsList: [{
                    'nextTime': '2017年7月24日12:08:58',
                    'orderStatus': 0, //0 未付款 1 已付款 2 已取消 3 已完成
                    'totalPrices': 0,
                    list: [{
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
                        'price': '20', //金额
                        'values': 2 //数量

                    }, {
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
                        'price': '20.10', //金额
                        'values': 4 //数量

                    }]
                }]
            };
        }
    });
    var orderTab3 = Vue.component('orderTab3', {
        template: '#orderTab3', //用什么模板来渲染他
        data: function data() {
            return {
                goodsList: [{
                    'nextTime': '2017年7月24日12:08:58',
                    'orderStatus': 1, //0 未付款 1 已付款 2 已取消 3 已完成
                    'totalPrices': 0,
                    list: [{
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
                        'price': '20', //金额
                        'values': 2 //数量

                    }, {
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
                        'price': '20.10', //金额
                        'values': 4 //数量

                    }]
                }]
            };
        }
    });
    var orderTab4 = Vue.component('orderTab4', {
        template: '#orderTab4', //用什么模板来渲染他
        data: function data() {
            return {
                goodsList: [{
                    'nextTime': '2017年7月24日12:08:58',
                    'orderStatus': 2, //0 未付款 1 已付款 2 已取消 3 已完成
                    'totalPrices': 9999,
                    list: [{
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
                        'price': '20', //金额
                        'values': 2 //数量

                    }, {
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
                        'price': '20.10', //金额
                        'values': 8 //数量

                    }]
                }]
            };
        }
    });
    var orderDet = Vue.component('orderDet', {
        template: '#orderDet', //用什么模板来渲染他
        data: function data() {
            return {};
        }
    });
    var wxpay = Vue.component('wxpay', {
        template: '#wxpay', //用什么模板来渲染他
        data: function data() {
            return {};
        }
    });

    var goodsDet = Vue.component('goodsDet', {
        template: '#goodsDet', //用什么模板来渲染他
        data: function data() {
            return {};
        },
        mounted: function mounted() {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true
            });
        }
    });

    // 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

    // 1. 定义（路由）组件。
    // 可以从其他文件 import 进来
    // const Foo = {
    //     template: '<div>foo</div>'
    // }
    // const Bar = {
    //     template: '<div>bar</div>'
    // }

    // 2. 定义路由
    // 每个路由应该映射一个组件。 其中"component" 可以是
    // 通过 Vue.extend() 创建的组件构造器，
    // 或者，只是一个组件配置对象。
    // 我们晚点再讨论嵌套路由。
    var routes = [{
        path: '/home',
        component: home
    }, {
        path: '/fenlei',
        component: fenlei,
        meta: {
            scrollToTop: true
        }
    }, {
        path: '/gouwuche', //{{ $route.params.id }} 展示接收的ID
        component: gouwuche
        // children: [{
        //     // 当 /user/:id/profile 匹配成功，
        //     // UserProfile 会被渲染在 User 的 <router-view> 中
        //     path: 'cartAddress',
        //     component: cartAddress
        // }],

    }, {
        path: '/goodsList',
        component: goodsList
    }, {
        path: '/goodsDet',
        component: goodsDet
    }, {
        path: '/my',
        component: my
    }, {
        path: '/cartAddress',
        component: cartAddress
    }, {
        path: '/addresss',
        component: addresss
    }, {
        path: '/maps',
        component: maps
    }, {
        path: '/myOrder',
        component: myOrder,
        redirect: '/myOrder/orderTab1',
        children: [{
            path: 'orderTab1',
            component: orderTab1
        }, {
            path: 'orderTab2',
            component: orderTab2
        }, {
            path: 'orderTab3',
            component: orderTab3
        }, {
            path: 'orderTab4',
            component: orderTab4
        }]
    }, {
        path: '/orderDet/:id',
        component: orderDet
    }, {
        path: '/wxpay/:id',
        component: wxpay
    }, {
        path: '/', //首页固定
        redirect: '/home'
    }];

    // 3. 创建 router 实例，然后传 `routes` 配置
    // 你还可以传别的配置参数, 不过先这么简单着吧。
    var router = new VueRouter({
        // mode: 'history',
        routes: routes, // （缩写）相当于 routes: routes
        linkActiveClass: 'linkActive', //激活后的连接颜色Class
        scrollBehavior: function scrollBehavior(to, from, savedPosition) {
            // return 期望滚动到哪个的位置
            //  return { x: 0, y: 0 }
            if (to.hash) {
                return {
                    selector: to.hash
                };
            }
            if (savedPosition) {
                // saved头寸仅适用于popstate导航。
                return savedPosition;
            } else {
                var position = {};
                // 新的导航。
                // 通过返回选择器滚动到锚点
                if (to.hash) {
                    position.selector = to.hash;
                }
                // 检查是否有任何匹配的路由配置需要滚动到顶部
                if (to.matched.some(function (m) {
                    return m.meta.scrollToTop;
                })) {
                    // 如果不提供选择器，就会使用连线，cords will be used if no selector is provided,
                    // 或者如果选择器不匹配任何元素。
                    position.x = 0;
                    position.y = 0;
                }
                // 如果返回的位置是假的或空的对象，
                // 将保留当前的滚动位置。
                return position;
            }
        }
    });

    // 4. 创建和挂载根实例。
    // 记得要通过 router 配置参数注入路由，
    // 从而让整个应用都有路由功能
    var app = new Vue({
        el: '#container',
        router: router,
        data: function data() {
            return {};
        }
    });

    // 现在，应用已经启动了！
};