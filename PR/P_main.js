

let currentIndex = 0;

setInterval(function(){
    if(currentIndex<2){
        currentIndex++;
    }else{
        currentIndex=0;
    }let slidePosition=currentIndex *(-1000)+"px";
    $('.slidelist').animate({left:slidePosition},1000)
},3000)