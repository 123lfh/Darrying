/**
 * Created by Administrator on 2018/10/5 0005.
 */
window.onload = function () {

    //头部   nav 戒指   鼠标悬停事件
    var zuan1 = document.querySelectorAll('.nav-drz-left .list1 li'),
        oTu1 = document.querySelectorAll('.nav-drz-left .jz1 a');
    var zuan2 = document.querySelectorAll('.nav-drz-right .list2 li'),
        oTu2 = document.querySelectorAll('.nav-drz-right .jz2 a');
    function aaa(zuan, oTu, ev) {
        for (let i = 0; i < zuan.length; i++) {
            zuan[i][ev] = function () {
                for (var j = 0; j < oTu.length; j++){
                    oTu[j].style.display = 'none';
                }
                oTu[i].style.display = 'block';
            };
        }
    }
    aaa(zuan1, oTu1,'onmouseover');
    aaa(zuan2, oTu2,'onmouseover');

    //头部   nav   鼠标悬停事件
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
        oT1[j].num3=j;
        oT1[j].onmouseover = function () {
            oT1[this.num3].style.display = 'block'
        };
        oT1[j].onmouseout = function () {
            oT1[this.num3].style.display = 'none'
        };
    }


    //头部input框点击事件  英文繁简体体
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

 //轮播
    var odj1=document.querySelectorAll('.shopBanNav li'),
        lun1=document.querySelectorAll('.shopBanPics li');
    function  olb(odj,lun){
        for (let i = 0; i <odj.length; i++) {
            odj[i].onclick= function () {
                clearInterval(timer1);
                for (let j = 0; j <lun.length; j++){
                    lun[j].classList.remove('select');
                    odj[j].classList.remove('select')
                }
                lun[i].classList.add('select');
                odj[i].classList.add('select')
            };
        }
    }
    olb(odj1,lun1);
    var timer1=null;
    var  index=0;
    timer1=setInterval(right,2000);
    odj1.onmouseover=function(){
        clearInterval(timer1);
    };
    odj1.onmouseout=function(){
        timer1=setInterval(right,2000)
    };

    function right(){
        index++;
        if(index>lun1.length-1){
            index=0;
        }
        for (var j = 0; j < lun1.length; j++) {
            lun1[j].classList.remove('select');
            odj1[j].classList.remove('select')
        }
        lun1[index].classList.add('select');
        odj1[index].classList.add('select')
    }

//--search 搜索下拉
    var tit1=document.getElementById('searchShop'),
        cont1=document.getElementById('shopSearch_Bottom');
    function showHide(tit,cont){
        tit.onclick=function(){
            if(cont.style.display=='block'){
                cont.style.display='none';
            }else{
                cont.style.display='block';
            }
        }
    }
    showHide(tit1,cont1);

var oa=document.querySelectorAll('.shopSearch_title a'),
    shopSearch_same=document.querySelectorAll('.shopSearch_same');
function tab(tit1,cont1){
        for (let i = 0; i < tit1.length; i++) {
            tit1[i].onclick=function(){
                console.log(1);
                for (var j = 0; j < cont1.length; j++) {
                    cont1[j].style.display='none';
                    cont1[j].classList.remove('active')
                }
                cont1[i].style.display='block';
                cont1[i].classList.add('active')
            }
         }
}
    tab(oa,shopSearch_same);

    //吸顶盒
    var navBar= document.getElementById("nav-bk");
    var mainPart = document.getElementById("banner-dr");
    console.log(mainPart);
    window.onscroll = function () {
        if (scroll().top >152) {
            navBar.className = "fixed";
            mainPart.style.paddingTop ="75px";
            navBar.classList.add('active');
        } else {
            navBar.className = "";
            mainPart.style.paddingTop = "0";
            navBar.classList.add('active');
        }
    };
    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }


};



