/**
 *@param ele 传入的第一个对象 a 
 *@param window 等系统变量在插件内部就有了一个局部的引用，可以提高访问速度，会有些许性能的提升
 */
;
(function($, window, document, undefined) {
    // 定义构造函数
    var fixedStar = function(ele, opt) {
        this.$element = ele, //需要操作的对象
            this.defaults = {
                'width': '300px',
                'height': '300px'
            },
            this.options = $.extend({}, this.defaults, opt),
            this.imglength = this.$element.find("canvas").length
    };
    // 定义一个方法
    fixedStar.prototype = {
        lazyload: function() {
            if (this.imglength > 0) {
                this.$element.find("canvas").each(function() {
                    var imgSrc = $(this).data("src");
                    var imgObj = new Image();
                    imgObj.canvas = $(this)[0];
                    var cvs = imgObj.canvas.getContext('2d');
                    console.log(cvs)
                    if (cvs) {
                        imgObj.onload = function() {
                            imgObj.canvas.width = this.width;
                            imgObj.canvas.height = this.height;
                            cvs.drawImage(this, 0, 0);
                            $(imgObj.canvas).css("background-image", "none");
                        }
                        console.log(imgObj)
                        console.log('这里是插件')
                        imgObj.src = imgSrc;
                    }
                })
            }
        }
    };
    //插件中使用对象
    $.fn.myCanvas = function(options) {
        var can = new fixedStar(this, options);
        //调用其方法
        return can.lazyload()
    }

})(jQuery, window, document);