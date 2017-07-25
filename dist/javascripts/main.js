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