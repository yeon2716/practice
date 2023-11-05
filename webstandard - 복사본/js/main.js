$('.tit .btn').click(function(){
  $('.nav').slideToggle();
  $(this).toggleClass('on');
});

/*
.slideToggle() 
보이지 않는 요소는 아래쪽으로 서서히 나타나게 하고, 보이는 요소는 위쪽으로 서서히 사라지게 합니다.

$("button").click(function(){
  $("p").slideToggle();
});


.toggleClass()
$('.tit .btn').click(function(){
  $(this).toggleClass('on');
}); 

*/



$('.multiple-items').slick({
  infinite: true,//무한반복
  slidesToShow: 3,//한 화면에 보이는 갯수
  slidesToScroll: 1,//버튼 클릭하면 넘어가는 갯수
  dots: true,//이미지 아래 토글 유무
});