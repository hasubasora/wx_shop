window.onload = function(params) {
    Vue.component('tabbar', {
        template: '#tabbar', //用什么模板来渲染他
        data() {
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
            }
        },
        methods: {

        }
    });
    const home = Vue.component('home', {
        template: '#home' //用什么模板来渲染他
    });
    const fenlei = Vue.component('fenlei', {
        template: '#list', //用什么模板来渲染他
        data() {
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
            }
        },
        mounted() {
            this.offsetH = document.body.offsetHeight
            var offsetH = this.offsetH - 95;
            console.log(offsetH)
            $('.listTab').css('height', offsetH);
            $('.boxR').css('height', offsetH);
            $('.box').css('height', offsetH);
            $('.weui-tab__panel').css('height', offsetH);
        },
        created() {
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
            goAnchor(selector, i) {
                var anchor = this.$el.querySelector(selector);
                // document.body.scrollTop = anchor.offsetTop;
                console.log(anchor.offsetTop)
                document.querySelector('.boxR').scrollTop = anchor.offsetTop;
                for (var e = 0; e < this.titleList.length; e++) {
                    this.titleList[e].color = false;
                    this.titleList[i].color = true;
                }
            },

        }
    });
    const gouwuche = Vue.component('gouwuche', {
        template: '#gouwuche', //用什么模板来渲染他
        data() {
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
            }
        },
        mounted() {
            this.offsetH = document.body.offsetHeight
            var offsetH = this.offsetH - 95;
            console.log(this.$roete)
            $('.weui-tab__panel').css('height', offsetH);
        },
        computed: {
            listLength() {
                return this.commoditys.length;
            },
            total() {
                let ices = 0;
                for (let i in this.commoditys) {
                    if (this.commoditys[i].selects) {
                        ices += Number(this.commoditys[i].price) * Number(this.commoditys[i].values)
                        console.log(typeof Number(this.commoditys[i].price))
                    }
                }
                if (ices == 0) { //按钮禁止
                    this.disableds = true;
                } else {
                    this.disableds = false;
                }
                return ices;
            },

        },
        methods: {
            editSwitch(edit) { //选择商品
                this.edit = !this.edit;
            },
            editDel() { //删除
                console.log('删除');
                for (var i = 0; i < this.commoditys.length; i++) {
                    console.log(this.commoditys[i].selects);
                    if (this.commoditys[i].selects) {
                        this.commoditys.splice(i, 1);
                        this.editDel();
                    }
                }
            },
            closing(_index) { //结算
                alert(this.total)
            },
            increase(_index) { //增加
                console.log('增加');
                this.commoditys[_index].values += 1;
                if (this.commoditys[_index].values > 9999) {
                    this.commoditys[_index].values = 9999;
                }
            },
            reduce(_index) { //减少
                console.log('减少');
                this.commoditys[_index].values -= 1;
                if (this.commoditys[_index].values < 1) {
                    this.commoditys[_index].values = 1;
                }
            },
            checkboxAlls() {
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
    const my = Vue.component('my', {
        template: '#myHome' //用什么模板来渲染他
    });
    const myOrder = Vue.component('myOrder', {
        template: '#myOrder', //用什么模板来渲染他
        data() {
            return {

            }
        },
        computed: {
            // 计算的地方
        }
    });
    const cartAddress = Vue.component('cartAddress', {
        template: '#cartAddress', //用什么模板来渲染他
        data() {
            return {
                hs: "background:#ccc",
                addressList: [{
                    addressId: '01', //地址id
                    name: '名字',
                    phone: '13666666666',
                    address: '广东省广州市萝岗区天慧路3号广州互联网产业园C601深圳市商沃科技有限公司',
                    tabNum: '1', //标签 1 公司 2 家 0 学校
                    defaults: '1', // 默认地址 1 不是默认0
                }, {
                    addressId: '02',
                    name: '名字2',
                    phone: '136777777776',
                    address: '广东省广州市萝岗区天慧路3号广州互联网产业园C601深圳市商沃科技有限公司',
                    tabNum: '2',
                    defaults: '0',
                }],
            }
        },
        methods: {
            alert(g) {
                alert(123)
            }
        }
    });
    const addresss = Vue.component('addresss', {
        template: '#addresss', //用什么模板来渲染他
        data() {
            return {
                addressList: [],
                tabList: [{
                    tabID: '1',
                    tabName: '公司',
                    tabColor: 'false',
                    addresBox: ''
                }]
            }
        },
        mounted() {
            document.addEventListener('click', function(params) {
                var abox = document.querySelectorAll(".acs");
                for (var i = 0; i < abox.length; i++) {
                    abox[i].onclick = function() {
                        for (var i = 0; i < abox.length; i++) {
                            abox[i].classList.remove('act')
                        }
                        this.classList.add("act");
                    }
                }
            })
        },
        methods: {

        }
    });
    const maps = Vue.component('maps', {
        template: '#maps', //用什么模板来渲染他
        data() {
            return {
                locat: '',
                locats: '',
                longitudes: 0, //经度
                latitudes: 0, //维度
                addressBox: [],
            }
        },
        mounted() {
            console.log('模板编译完成');
            // alert('模板编译完成')
            const self = this;
            window.navigator.geolocation.getCurrentPosition(function(position) {
                self.longitudes = position.coords.longitude;
                self.latitudes = position.coords.latitude;
                let url = "https://restapi.amap.com/v3/assistant/coordinate/convert?locations=" + self.longitudes + "," + self.latitudes + "&coordsys=gps&output=json&key=c962412697057591abdf0be494fc2c2b";
                $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "jsonp",
                    success: function(data) {
                        if (data.status == 1) {
                            self.locat = data.locations;
                            self.locats = self.locat.split(',');
                            self.initMap(self.locats[0], self.locats[1]);
                        }
                    },
                    error: function(data) {
                        alert("错误了");
                    }
                });
            });
        },
        created() {
            console.log('实例已经创建完成');
        },
        methods: {
            clickName(n) {
                alert(n);
            },
            initMap(q1, q2) {
                const self = this;
                AMapUI.loadUI(['misc/PositionPicker'], function(PositionPicker) {
                    var map = new AMap.Map('containers', {
                        zoom: 17,
                        center: [q1, q2],
                        // center: [121.59996, 31.197646],
                        resizeEnable: true,
                        scrollWheel: false
                    })
                    var positionPicker = new PositionPicker({
                        mode: 'dragMap',
                        map: map
                    });

                    positionPicker.on('success', function(positionResult) {
                        self.addressBox = [];
                        console.log(positionResult)
                        let addsLen = positionResult.regeocode.pois;
                        // console.log(JSON.stringify(addsLen))
                        addsLen.forEach(function(el) {
                            self.addressBox.push(el)
                                // console.log(el)
                        }, this);
                    });
                    positionPicker.on('fail', function(positionResult) {
                        console.log(positionResult)
                    });

                    positionPicker.start();
                    map.panBy(0, 1);

                    map.addControl(new AMap.ToolBar({
                        liteStyle: true
                    }))
                });

            }

        }
    });
    const goodsList = Vue.component('goodsList', {
        template: '#goodsList', //用什么模板来渲染他
        data() {
            return {

            }
        },
    })

    const orderTab1 = Vue.component('orderTab1', {
        template: '#orderTab1', //用什么模板来渲染他
        data() {
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
                        'values': 2, //数量

                    }, {
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
                        'price': '20.10', //金额
                        'values': 4, //数量

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
                        'values': 1, //数量

                    }, {
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '叫做星球。星球有一定的形状，有自己的运行轨道',
                        'price': '20.30', //金额
                        'values': 4, //数量

                    }, ]
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
                        'values': 1, //数量

                    }, ]
                }],
            }
        },
    })
    const orderTab2 = Vue.component('orderTab2', {
        template: '#orderTab2', //用什么模板来渲染他
        data() {
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
                        'values': 2, //数量

                    }, {
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
                        'price': '20.10', //金额
                        'values': 4, //数量

                    }]
                }]
            }
        },
    })
    const orderTab3 = Vue.component('orderTab3', {
        template: '#orderTab3', //用什么模板来渲染他
        data() {
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
                        'values': 2, //数量

                    }, {
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
                        'price': '20.10', //金额
                        'values': 4, //数量

                    }]
                }]
            }
        },
    })
    const orderTab4 = Vue.component('orderTab4', {
        template: '#orderTab4', //用什么模板来渲染他
        data() {
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
                        'values': 2, //数量

                    }, {
                        'src': 'framework/lg.jpg',
                        'goodsId': '0031665',
                        'commodityImg': 'images/111.jpg',
                        'title': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
                        'price': '20.10', //金额
                        'values': 8, //数量

                    }]
                }]
            }
        },
    })
    const orderDet = Vue.component('orderDet', {
        template: '#orderDet', //用什么模板来渲染他
        data() {
            return {

            }
        },
    })
    const wxpay = Vue.component('wxpay', {
        template: '#wxpay', //用什么模板来渲染他
        data() {
            return {

            }
        },
    })

    const goodsDet = Vue.component('goodsDet', {
        template: '#goodsDet', //用什么模板来渲染他
        data() {
            return {

            }
        },
        mounted() {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true
            });
        }
    })

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
    const routes = [{
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
            component: gouwuche,
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
            }, ]
        }, {
            path: '/orderDet/:id',
            component: orderDet
        }, {
            path: '/wxpay/:id',
            component: wxpay
        }, {
            path: '/', //首页固定
            redirect: '/home'
        },
        //  {path: '*', //404 redirect: '/home' }
    ]

    // 3. 创建 router 实例，然后传 `routes` 配置
    // 你还可以传别的配置参数, 不过先这么简单着吧。
    const router = new VueRouter({
        // mode: 'history',
        routes, // （缩写）相当于 routes: routes
        linkActiveClass: 'linkActive', //激活后的连接颜色Class
        scrollBehavior(to, from, savedPosition) {
            // return 期望滚动到哪个的位置
            //  return { x: 0, y: 0 }
            if (to.hash) {
                return {
                    selector: to.hash
                }
            }
            if (savedPosition) {
                // saved头寸仅适用于popstate导航。
                return savedPosition
            } else {
                const position = {}
                    // 新的导航。
                    // 通过返回选择器滚动到锚点
                if (to.hash) {
                    position.selector = to.hash
                }
                // 检查是否有任何匹配的路由配置需要滚动到顶部
                if (to.matched.some(m => m.meta.scrollToTop)) {
                    // 如果不提供选择器，就会使用连线，cords will be used if no selector is provided,
                    // 或者如果选择器不匹配任何元素。
                    position.x = 0
                    position.y = 0
                }
                // 如果返回的位置是假的或空的对象，
                // 将保留当前的滚动位置。
                return position
            }
        }
    })

    // 4. 创建和挂载根实例。
    // 记得要通过 router 配置参数注入路由，
    // 从而让整个应用都有路由功能
    const app = new Vue({
        el: '#container',
        router,
        data() {
            return {

            }
        },

    })

    // 现在，应用已经启动了！
}