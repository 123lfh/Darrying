/**
 * Created by Administrator on 2028/8/29 0029.
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
                for (var j = 0; j < oTu.length; j++){
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
        oT1[j].num3=j;
        oT1[j].onmouseover = function () {
            oT1[this.num3].style.display = 'block'
        };
        oT1[j].onmouseout = function () {
            oT1[this.num3].style.display = 'none'
        };
    }

    //头部input框点击事件  简体英文繁体
    var oShu =document.querySelector('.header-center2 .shuru');
    oShu.onclick=function(){
        oShu.placeholder='';
        oShu.style.borderColor='#d5a0a0';
    };


    //footer点击事件      简体英文繁体
    var oJt = document.querySelectorAll('.dr_langues .dr_langueBtn')[0],
        oFt =document.querySelectorAll('.dr_langues .dr_langueList ')[0];
    oJt.onclick=function(){
        if(oFt.style.display=='block'){
            oFt.style.display='none';
        }else{
            oFt.style.display='block'
        }
    };
    oFt.onmouseover=function(){
        oFt.style.display='block';
    };
    oFt.onmouseout=function() {
        oFt.style.display = 'none';
    };

//轮播图点击事件
//    var oGg1 = document.querySelectorAll('.za .zong .fang li'),
//        wrap = document.querySelectorAll('.za .wrop2 .wrop')[0],
//
//        oKk1 = document.querySelectorAll(' .swiper');
//    var oGg2 = document.querySelectorAll('.xg .ul li'),
//        oKk2 = document.querySelectorAll(' .xg-down');
    //console.log(oGg1);
    //console.log(oKk1);
    //console.log(wrap);
    //function bbb (oGg,oKk){
    //    for (var i = 0; i < oGg.length; i++) {
    //        oGg[i].index = i;
    //        oGg[i].onclick = function () {
    //            console.log(this.index);
    //            wrap.style.left=this.index*(-1320)+'px';
                //for (var j = 0; j <oKk.length; j++){
                    //oKk[j].style.display = 'none';
                //}
                //oKk[this.num].style.display = 'block';
            //};
        //}
    //}
    //bbb(oGg1,oKk1);
    //bbb(oGg2,oKk2);

//返回顶部
    var oFan = document.querySelector(".yyjd3");
    var timer = null;
    var target = 0;
    var leader = 0;
    oFan.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            var step = (target-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader +step;
            window.scrollTo(0,leader);
            if(leader === 0){
                clearInterval(timer);
            }
        },25);
    };




//滑动轮播1
    var fang=document.querySelectorAll('.fang li'),
        swiper=document.querySelectorAll('.swiper'),
        fang1=document.querySelectorAll('.ul ul li'),
        xgdown=document.querySelectorAll('.xg-down');
    console.log(fang1);
    console.log(xgdown);
    function fff(tit4,cont4,ev){
        for (let i = 0; i < tit4.length; i++) {
        tit4[i][ev]=function(){
            for (var j = 0; j < cont4 .length; j++) {
                cont4[j].style.display='none';
                tit4[j].classList.remove('active')
            }
            cont4[i].style.display='block';
            tit4[i].classList.add('active')
        }
        }
    }
    fff(fang,swiper,'onclick');
    fff(fang1,xgdown,'onclick');

//吸顶盒
    var topPart = document.getElementById("headAll");
    var navBar= document.getElementById("nav-bk");
    var mainPart = document.getElementById("banner-dr");
    window.onscroll = function () {
        if (scroll().top >152) {
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



};



