$('.nav> ul> li').mouseover(function () {
  /* 실행문 */
  $(this).find('.submenu').stop().slideDown();
});

$('.nav> ul> li').mouseout(function () {
  $(this).find('.submenu').stop().slideUp();
});

//slide

let currentIndex = 0;
// console.log(currentIndex)

//setInterval(어떤일, 시간)//시간마다 어떤 일이 일어남 무한반복
//setInterval(function(){}, 3000)-->3초마다 함수가 실행된다.

//if(조건문){조건문이 참 일때 실행}else{조건문 거짓일때 실행}

setInterval(function () {
  if (currentIndex < 2) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  console.log(currentIndex)
  let slidePosition = currentIndex * (-1000) + "px";
  console.log(slidePosition)


  // $('.slidelist').animate({실행문},시간)
$('.slidelist').animate({
  left: slidePosition
}, 1000)

}, 3000)

//팝업창
$('#content1 .right').click(function(){
  $('.layer-bg').fadeIn();
});

$('.layer .close').click(function(){
  // $('.layer-bg').hide();
  $('.layer-bg').fadeOut(200); /* 0.2초 */
});

// window 창 열기
$('.contact').click(function(){
  window.open("contact.html", "child", "top=0,left=0,width=400,height=400");
})

/* 탭메뉴 
*/
let tabBtn=$('.tab_menu ul li');
let tabCont=$('.tab_cont>div');

//.eq() ==> equivalent(동등)
tabCont.hide().eq(0).show();

tabBtn.click(function(){
  let index=$(this).index();
console.log(index)
tabCont.hide()
.eq(index).show();tabBtn.removeClass('active');
$(this).addClass('active');

});