/**
 * Created by Administrator on 2018/9/19 0019.
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
    //吸顶盒
//    var topPart = document.getElementById("headAll");
    var navBar= document.getElementById("nav-bk");
    var mainPart = document.getElementById("banner-dr");
    window.onscroll = function () {
        if (scroll().top >152) {
            navBar.className = "fixed";
            mainPart.style.paddingTop = 75 + "px";//记得加单位
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

}