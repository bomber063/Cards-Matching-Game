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
  function myFunctions2() {//怎么才能选择opencard数组中的$(".card .open .show").removeClass("open show")
    // 这里$(.card空格.open空格.show) 和 $(.card逗号.open逗号.show)
    // $(openedCard).attr('.card,.open,.show").removeClass("open,show");
    // $(".card,.open,.show").removeClass("open,show");//如果点击的两次所取得类不一样，就返回继续关闭。也就是移除open和show的class。
       // $(openedCard).find('i').removeClass("open show");
                   console.log('通过点击两次对象判断为不相等');
       console.log(openedCard);
    // console.log($(".card,.open,.show").removeClass("open show"));
    openedCard.forEach(function(card){
      card.attr("class","card open show");
      setTimeout(function(){
        card.attr("class","card");
      },1000);
              openedCard = [];
    });


  };
};

var matching = function () {
    if ((openedCard.length == 2) && (openedCard[0].children().attr('class') === openedCard[1].children().attr('class'))) {
      $(".card.open").addClass("match");
      matchedCard.push(openedCard[0]);
      matchedCard.push(openedCard[1]);
      console.log('通过点击两次对象判断为相等');
      openedCard = []
    } else if ((openedCard.length == 2) && (openedCard[0].children().attr('class') !== openedCard[1].children().attr('class')) ) {
            console.log('通过点击两次对象判断为不相等');
      setTimeout(myFunction, 500);
      // openedCard = []
    };
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
      console.log(openedCard[0].children().attr('class'));
            console.log(openedCard[1]);
      matching();
    }
  };

});






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
