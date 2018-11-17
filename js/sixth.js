/**
 * Created by Administrator on 2018/9/26 0026.
 */
window.onload = function () {

    //头部   nav 戒指   鼠标悬停事件
    var zuan1 = document.querySelectorAll('.nav-drz-left .list1 li'),
        oTu1 = document.querySelectorAll('.nav-drz-left .jz1 a');
    var zuan2 = document.querySelectorAll('.nav-drz-right .list2 li'),
        oTu2 = document.querySelectorAll('.nav-drz-right .jz2 a');

    function aaa(zuan, oTu) {
        for (var i = 0; i < zuan.length; i++) {
            zuan[i].num = i;
            zuan[i].onmouseover = function () {
                for (var j = 0; j < oTu.length; j++) {
                    oTu[j].style.display = 'none';
                }
                oTu[this.num].style.display = 'block';
            };
        }
    }

    aaa(zuan1, oTu1);
    aaa(zuan2, oTu2);

    //头部   nav   鼠标悬停事件
    var oLi = document.querySelectorAll('.nav-bk .nav-dr li'),
        oT1 = document.querySelectorAll('.nav-bk .navsuv');
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].num2 = i;
        oLi[i].onmouseover = function () {
            console.log(1);
            oT1[this.num2].style.display = 'block';
        };
        oLi[i].onmouseout = function () {
            oT1[this.num2].style.display = 'none';
        }
    }
    for (var j = 0; j < oT1.length; j++) {
        oT1[j].num3 = j;
        oT1[j].onmouseover = function () {
            oT1[this.num3].style.display = 'block'
        };
        oT1[j].onmouseout = function () {
            oT1[this.num3].style.display = 'none'
        };
    }

    //头部input框点击事件  简体英文繁体
    var oShu = document.querySelector('.header-center2 .shuru');
    oShu.onclick = function () {
        oShu.placeholder = '';
        oShu.style.borderColor = '#d5a0a0';
    };


    //footer点击事件      简体英文繁体
    var oJt = document.querySelectorAll('.dr_langues .dr_langueBtn')[0],
        oFt = document.querySelectorAll('.dr_langues .dr_langueList ')[0];
    oJt.onclick = function () {
        if (oFt.style.display == 'block') {
            oFt.style.display = 'none';
        } else {
            oFt.style.display = 'block'
        }
    };
    oFt.onmouseover = function () {
        oFt.style.display = 'block';
    };
    oFt.onmouseout = function () {
        oFt.style.display = 'none';
    };

//轮播图点击事件
//    var oGg1 = document.querySelectorAll('.za .zong .fang li'),
//        wrap = document.querySelectorAll('.za .wrop2 .wrop')[0],
//
//        oKk1 = document.querySelectorAll(' .swiper');
//    var oGg2 = document.querySelectorAll('.xg .ul li'),
//        oKk2 = document.querySelectorAll(' .xg-down');
//    function bbb (oGg,oKk){
//        for (var i = 0; i < oGg.length; i++) {
//            oGg[i].index = i;
//            oGg[i].onclick = function () {
//                console.log(this.index);
//                wrap.style.left=this.index*(-1320)+'px';
//                //for (var j = 0; j <oKk.length; j++){
//                //oKk[j].style.display = 'none';
//                //}
//                //oKk[this.num].style.display = 'block';
//            };
//        }
//    }
//    bbb(oGg1,oKk1);
//    bbb(oGg2,oKk2);

//返回顶部
    var oFan = document.querySelector(".yyjd3");
    var timer = null;
    var target = 0; //目标位置
    var leader = 0; //显示区域自身的位置
    oFan.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            window.scrollTo(0, leader);
            if (leader === 0) {
                clearInterval(timer);
            }
        }, 25);
    };

//hand选项卡

    var ochangehand1 = document.querySelectorAll('.change-hand .shou'),
        hand1 = document.getElementsByClassName('try-hand-show');

    function osh(ochangehand, hand) {
        for (let i = 0; i < ochangehand.length; i++) {
            ochangehand[i].onclick = function () {
                for (var j = 0; j < hand.length; j++) {
                    hand[j].style.display = 'none';
                    ochangehand[j].classList.remove('activate')
                }
                hand[i].style.display = 'block';
                ochangehand[i].classList.add('activate')
            };
        }
    }

    osh(ochangehand1, hand1);


//戒指选项卡
    var mm = document.querySelectorAll('.tryRingSmall span'),
        tryRingSame = document.getElementsByClassName('tryRingSame');

    function oshh(ochangehand, hand) {
        for (let i = 0; i < ochangehand.length; i++) {
            ochangehand[i].onclick = function () {
                for (var j = 0; j < hand.length; j++) {
                    hand[j].style.display = 'none';
                    ochangehand[j].classList.remove('active')
                }
                hand[i].style.display = 'block';
                ochangehand[i].classList.add('active')
            };
        }
    }

    oshh(mm, tryRingSame);

    //木马轮播
    ~function () {

        function animate(obj, json, fn) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var flag = true;
                for (var k in json) {
                    if (k === "opacity") {
                        obj.style.opacity = json[k];

                        //var leader = getStyle(obj, k) * 100;
                        //var target = json[k] * 100;
                        //var step = (target - leader) / 10;
                        //step = step > 0 ? Math.ceil(step) : Math.floor(step);
                        //leader = leader + step;
                        //obj.style[k] = leader / 100;
                    } else if (k === "zIndex") {
                        obj.style.zIndex = json[k];
                    } else {
                        var leader = parseInt(getStyle(obj, k)) || 0;
                        var target = json[k];
                        var step = (target - leader) / 10;
                        step = step > 0 ? Math.ceil(step) : Math.floor(step);
                        leader = leader + step;
                        obj.style[k] = leader + "px";
                    }
                    if (leader != target) {
                        flag = false;
                    }
                }
                if (flag) {
                    clearInterval(obj.timer);
                    if (fn) {
                        fn();
                    }
                }
            }, 15);
        }

        function getStyle(obj, attr) {
            if (window.getComputedStyle) {
                return window.getComputedStyle(obj, null)[attr];
            } else {
                return obj.currentStyle[attr];
            }
        }

        var flag = true;//将flag初始值设置为true，表示节流阀是打开的

        //config是配置单，规定了每张图片的大小位置层级透明度
        var config = [
            {
                "width": 400,
                "top": 20,
                "left": 50,
                "opacity": 0,
                "zIndex": 2
            },//0

            {
                "width": 400,
                "top": 20,
                "left": 50,
                "opacity": 0,
                "zIndex": 2
            },//1

            {
                "width": 390,
                "height": 300,
                "top": 70,
                "left": 100,
                "opacity": 0.3,
                "zIndex": 3
            },//2

            {
                "width": 685,
                "height": 425,
                "top": 50,
                "left": 250,
                "opacity": 1,
                "zIndex": 4
            },//3

            {
                "width": 390,
                "height": 300,
                top: 70,
                left: 700,
                opacity: 0.3,
                zIndex: 3
            },//4

            {
                "width": 400,
                "top": 20,
                "left": 750,
                "opacity": 0,
                "zIndex": 2
            },//5

            {
                "width": 400,
                "top": 20,
                "left": 750,
                "opacity": 0,
                "zIndex": 2
            }//6

        ];

        //找人
        var wrap = document.getElementById("customFour");
        var slide = document.getElementById("carousel-container");
        var ul = slide.children[0];
        var lis = ul.children;
        var arrow = document.getElementById("arrow");
        var arrLeft = document.getElementById("carousel-left");
        var arrRight = document.getElementById("carousel-right");
        //鼠标经过盒子，让arrow箭头渐渐地显示出来
        wrap.onmouseover = function () {
            animate(arrow, {"opacity": 1});
        };
        //鼠标离开盒子，让arrow箭头渐渐地隐藏
        wrap.onmouseout = function () {
            animate(arrow, {"opacity": 0});
        };

        function assign() {
            //让所有的li按照config配置单渐渐地各就各位
            for (var i = 0; i < lis.length; i++) {
                animate(lis[i], config[i], function () {
                    flag = true;//当动画执行完成后，将flag设置为true，打开节流阀
                });
            }
        }

        assign();

        //点击右箭头，将配置单中最前面的元素放到最后面
        arrRight.onclick = function () {
            if (flag) {//当flag为true即节流阀是打开的状态时，才能执行动画
                flag = false;//当动画执行时，将flag设置为false，关闭节流阀
                config.push(config.shift());//把最前面的元素放到最后面
                //config.unshift(config.pop());//把最后面的元素放到最前面
                //让所有的li按照新生成的config配置单渐渐地各就各位
                assign();
            }

        };
        //点击左箭头，将配置单中最后面的元素放到最前面
        arrLeft.onclick = function () {
            if (flag) {
                flag = false;
                config.unshift(config.pop());//把最后面的元素放到最前面

                //config.push(config.shift());//把最前面的元素放到最后面
                assign();
            }
        };
    }();


    var yida = document.querySelectorAll('.tryRingSame li'),
        yida1 = document.querySelectorAll('#tryRingShow .tryRingShow');
    var yida2 = document.querySelectorAll('#tryRingShow1 .tryRingShow');
    console.log(yida);
    console.log(yida1);
    //console.log(yida2);
    function hhh(tit5, cont5, ev) {
        for (let i = 0; i < tit5.length; i++) {
            tit5[i][ev] = function () {
                for (var j = 0; j < cont5.length; j++) {
                    cont5[j].style.display = 'none';
                    tit5[j].style.border = '';
                }
                cont5[i].style.display = 'block';
                tit5[i].style.border = '1px solid #000000';
            }

        }
    }
    hhh(yida, yida1, 'onclick');


};