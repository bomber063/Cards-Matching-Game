/*
 * 创建一个包含所有卡片的数组
 */
var cards = [];
for (var i = 0; i < $('.card').length; i++) {
  cards.push($('.card')[i]);
}

cards = shuffle(cards);
$(".card").remove();
for (var i = 0; i < cards.length; i++) {
  $(".deck").append(cards[i]);
}

// 设置一个用于存放打开卡片的数组
var openedCard = [];
// 设置一个用于存放打开并匹配卡片的数组
var matchedCard = [];
// 设置一个关闭卡片函数
function myFunction() {
  setTimeout(myFunctions2, 200);
  //关闭
  function myFunctions2() {
    openedCard.forEach(function(card){
      card.attr("class","card open show shake");
      setTimeout(function(){
        card.attr("class","card");
      },1000);
              openedCard = [];
    });


  };
};

var matching = function () {

    if ((openedCard.length == 2) && (openedCard[0].children().attr('class') === openedCard[1].children().attr('class'))) {
      $(".card.open").addClass("match rubberBand");
      matchedCard.push(openedCard[0]);
      matchedCard.push(openedCard[1]);

      openedCard = []
        numberOfsteps(a);
  a=a+1;
console.log(a);
    } else if ((openedCard.length == 2) && (openedCard[0].children().attr('class') !== openedCard[1].children().attr('class')) ) {

      setTimeout(myFunction, 500);
      // openedCard = []
        numberOfsteps(a);
  a=a+1;

    };

        if(matchedCard.length == cards.length) { //停止计时函数
                      

 $("#dd").on("click","i",function()
   // oStart.onclick= function () 
{
    clearInterval(timer);
    oTxt.value="00:00:00";
    n=0;
    // setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
//     timer=setInterval(function () 
//     {
//         n++;
//         var m=parseInt(n/3600)
//         var s=parseInt(n/60%60);
//         var M=parseInt(n%60);
//         oTxt.value=toDub(m)+":"+toDub(s)+":"+toDub(M);
//     },1000/60);
});



HideStar(a);
                        win();

                        document.getElementById("Endtimes").innerHTML = oTxt.value;
                        // document.getElementById("Endsteps").innerHTML = a;//JS来更改html
a=a-1;
                        $('#Endsteps').html(a); //JQ来更改html                      
                        // $('div').attr('class','container')remove();
                        $('div').first().hide(1000);//通过first选中第一个div
                        // $('div').eq(0).hide();通过eq也可以实现选中第一个div。
console.log(a);
                      };                  

// console.log(this);

};









// $('.card').on('click', function (e) {　如果click后面没有selector就是绑定事件，点击事件一开始就会调用函数
   $('.deck').on('click','li',function (e) {　//如果click后面有selector就是委托事件，点击事件一开始不会调用函数，需要通过冒泡到card才会调用函数。
       // $('.card').on('click','li',function (e) {　//改成这样的委托事件就打不开卡牌了。
  // console.log(e.target) -> HTML dom
  // console.log($(this))  -> Jquery
  // console.log( $('.card') ) -> Jquery


 



  if ($(this).hasClass("open show match") === false) {
    if ($(this).hasClass("open show") === false) {
      $(this).toggleClass("open show");
      var op = $(this);//.find("i");//.attr("class");// 提取所点击对象的子元素i的class类
      openedCard.push(op);//把提取的图片的类放到数组openedCard里面去
      matching();
    }
  };

});


   $('.restart').on('click','i',function () {　
// var restart=$('.deck').find('li').attr('class');

       $(".card.open.show.match.rubberBand").removeClass('open show match rubberBand');
       $(".card.open.show.match").removeClass('open show match');
       $(".card.open.show").removeClass('open show');
       $(".card.open").removeClass('open');     

           
   var cards = [];
   for (var i = 0; i < $('.card').length; i++) {
     cards.push($('.card')[i]);
   }

   cards = shuffle(cards);
   $(".card").remove();
   for (var i = 0; i < cards.length; i++) {
     $(".deck").append(cards[i]);
   }


    clearInterval(timer);
    oTxt.value="00:00:00";
    n=0;


a=0;
        numberOfsteps(a);
        a=1;
matchedCard=[];//重置后需要把匹配的卡片重新赋值为空，要不然一直都是2都是会显示胜利界面。
});



$('.restartWin').on('click','i',function () {　
// var restartWin=$('.deck').find('li').attr('class');

       $(".card.open.show.match.rubberBand").removeClass('open show match rubberBand');
       $(".card.open.show.match").removeClass('open show match');
       $(".card.open.show").removeClass('open show');
       $(".card.open").removeClass('open');     

           
   var cards = [];
   for (var i = 0; i < $('.card').length; i++) {
     cards.push($('.card')[i]);
   }

   cards = shuffle(cards);
   $(".card").remove();
   for (var i = 0; i < cards.length; i++) {
     $(".deck").append(cards[i]);
   }







    clearInterval(timer);
    oTxt.value="00:00:00";
    n=0;


a=0;
        numberOfsteps(a);
        a=1;
winadd();
matchedCard=[];
                        $('div').first().show(1000);//通过first选中第一个div
                        // $('div').eq(0).hide();//通过eq(0)选中第一个div
});













// var oTxt=document.getElementsByTagName("input")[0];//TagName用JQ的写法，取到的是一个数组吗？必须要给出[]?
var oTxt=$("input")[0];//TagName用JQ的写法，后面必须要加[0]取到的是一个数组吗？取到的是一个数组吗？必须要给出[]


var n= 0;
var timer=null;
//开始计时
   $("ul").on("click","li",function()
   // oStart.onclick= function () 
{
     
   clearInterval(timer);
    // setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
    timer=setInterval(function () 
    {
        n++;
        var m=parseInt(n/3600)
        var s=parseInt(n/60%60);
        var M=parseInt(n%60);
        oTxt.value=toDub(m)+":"+toDub(s)+":"+toDub(M);
    },1000/60);
});
//暂停并且清空计时器


//补零
function toDub(n){
    return n<10?"0"+n:""+n;
}

  var a=1;
function numberOfsteps(a) {

    // document.getElementById('steps').innerHTML = a;//JS的写法
       $('.moves').html(a);//JQ的写法
              $('#steps').html(a);//JQ的写法

}




/*
 * 显示页面上的卡片
 *   - 使用下面提供的 "shuffle" 方法对数组中的卡片进行洗牌
 *   - 循环遍历每张卡片，创建其 HTML
 *   - 将每张卡的 HTML 添加到页面
 */

// 洗牌函数来自于 http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



function HideStar(a) {
    if(a > 15) {
        $("#star1").hide();
        $("#star11").hide();
    }
    if(a > 25) {
        $("#star2").hide();
        $("#star22").hide();
    }
    if(a > 35) {
        $("#star3").hide();
        $("#star33").hide();
    }
}


function winadd() {
    $(".containerWin").addClass("winDisply");
};


function win() {
    $(".containerWin").removeClass("winDisply");
};


/*
 * 设置一张卡片的事件监听器。 如果该卡片被点击：
 *  - 显示卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 将卡片添加到状态为 “open” 的 *数组* 中（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 如果数组中已有另一张卡，请检查两张卡片是否匹配
 *    + 如果卡片匹配，将卡片锁定为 "open" 状态（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果卡片不匹配，请将卡片从数组中移除并隐藏卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 增加移动计数器并将其显示在页面上（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果所有卡都匹配，则显示带有最终分数的消息（将这个功能放在你从这个函数中调用的另一个函数中）
 */
