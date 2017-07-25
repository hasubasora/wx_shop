  window.onload = function() {
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
                  msg: '颜色尺寸等..',
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
              childfour: false, //状态4

          },
          computed: {
              titleLen() {
                  return this.msgKey[0].length;
              },
              titleLen2() {
                  return this.msgKey[2].length;
              },
              titleLen3() {
                  return this.msgKey[3].length;
              },
              titleLen4() {
                  return this.msgKey[4].length;
              },
              titleLen5() {
                  return this.msgKey[5].length;
              },
          },
          methods: { //事件操作

              add: function() {
                  this.arr.push('message');
              },
              nextInput(is, os) {
                  console.info(is, os, this.goodsStandard.length);
                  console.info(this.msgKey[0]);
                  console.info(this.goodsStandard[0].val);

                  console.info(!this.goodsStandard[0].val);
                  if (this.goodsStandard[0].val && os) {
                      // console.info('！')
                  } else {
                      // console.info('输入啊！')
                  }
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
              keyInput(i, v, t) { // 规格状态改变
                  console.log(i, v, t, this.otableGoods.length)
                      //   第一个
                  if (v != '' && i == 0) {
                      if (this.childOne == false) {
                          this.otPush()
                          this.childOne = !this.childOne;
                      }
                  } else if (v == '' && i == 0) {
                      if (this.childOne == true) {
                          this.otableGoods.splice(i, 1)
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
              otPush() {
                  //简单拷贝一份OBJ
                  this.otableGoods.push(JSON.parse(JSON.stringify(this.addOtbGoods)))
              },
              //字属性的输入地方
              nextGoods(i) {
                  console.info(this.childSet[i], i)
                  if (this.childSet[i]) {
                      console.info('初めまして')
                  } else {
                      console.info('输入啊!!！')
                  }
              }
          }
      })
  }