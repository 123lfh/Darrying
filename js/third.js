window.onload = function () {
    //头部   nav 戒指  鼠标悬停事件
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


// //头部   nav   鼠标悬停事件
    var oLi = document.querySelectorAll('.nav-bk .nav-dr li'),
        oT1 = document.querySelectorAll('.nav-bk .navsuv');
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].num2 = i;
        oLi[i].onmouseover = function () {
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

//footer点击事件
    var oJt = document.querySelectorAll('.dr_langues .dr_langueBtn') [0],
        oFt = document.querySelectorAll('.dr_langues .dr_langueList')[0];
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

//头部input点击事件   简体英文繁体
    var oShu = document.querySelector('.header-center2 .shuru');
    oShu.onclick = function () {
        oShu.placeholder = '';
        oShu.style.borderColor = '#d5a0a0';
    };

//banner 轮播
    var LL = document.querySelectorAll('.banner .mm li'),//图
        LLs= document.querySelectorAll('.banner')[0],//图
        Span = document.querySelectorAll('.banner .drbanner_xdcort .drbanner_xd li span'),//圆圈
        dd = document.querySelectorAll('.banner .drbanner_xdcort .drbanner_xd li'),//点点
        Arrow = document.querySelector('.banner .arrow '),
        zy = document.querySelectorAll('.banner .arrow div');
    console.log(zy);
    var timer1 = null;
    for (var i = 0; i < dd.length; i++) {//遍历到每一个点点
        dd[i].index = i;
        dd[i].onclick = function () {//绑定事件
            for (var j = 0; j < LL.length; j++) {//遍历每一个图
                LL[j].style.display = 'none';//图全部隐藏
                Span[j].classList.remove('now');//移除点点（每走一张图片  之前的移除）
            }
            LL[this.index].style.display = 'block';//点击哪个 让那个显示
            Span[this.index].classList.add('now');//显示当前的点点
        };
    }
    var  index = 0;
    LLs.onmouseover=function(){
        clearInterval(timer1);
    };
    LLs.onmouseout=function(){
        timer1=setInterval(right,2000)
    };
    timer1=setInterval(right,1000);
    function right(){
        index++;
        if(index>LL.length-1){
            index=0;
        }
        for (var j = 0; j < LL.length; j++) {
            LL[j].style.display='none';
            Span[j].classList.remove('now');
        }
        LL[index].style.display='block';
        Span[index].classList.add('now');
    }
    zy[1].onclick=right;
    clearInterval(timer1);
    zy[0].onclick = function() {
        clearInterval(timer1);
        index--;
        if (index < 0) {
            index = LL.length - 1;
        }
        for (var j = 0; j < LL.length; j++) {
            LL[j].style.display = 'none';
            Span[j].classList.remove('now');
        }
        LL[index].style.display = 'block';
        Span[index].classList.add('now');

    };
//吸顶盒
        var topPart = document.getElementById("headAll");
        var navBar = document.getElementById("nav-bk");
        var mainPart = document.getElementById("banner-dr");
        window.onscroll = function () {
            if (scroll().top > 152) {
                navBar.className = "fixed";
                mainPart.style.paddingTop = 75 + "px";
            } else {
                navBar.className = "";
                mainPart.style.paddingTop = 0;
            }
        };
        function scroll() {
            return {
                top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
            };
        }

//返回顶部
        var oFan = document.querySelector(".yyjd3");
        var timer2 = null;
        var target = 0;
        var leader = 0;
        oFan.onclick = function () {
            clearInterval(timer2);
            timer2 = setInterval(function () {
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                window.scrollTo(0, leader);
                if (leader === 0) {
                    clearInterval(timer2);
                }
            }, 25);
        };

};
