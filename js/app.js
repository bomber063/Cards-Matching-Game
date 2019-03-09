/*
 * 创建一个包含所有卡片的数组
 */
var cards = [];
for (var i = 0; i < $('.card').length; i++) {
	cards.push($('.card')[i]);
}

cards = shuffle(cards);
$(".card").remove();
for(var i = 0; i < cards.length; i++){
    $(".deck").append(cards[i]);
}





// function mountCardClickEvent() {
//         $('.card').off('click').on('click', (e) => {
//             if (!isCounting) {
//                 startCountTime();
//                 isCounting = true;
//             }
//             if (underMatching) {
//                 return;
//             }
//             if ($('.open').length === 2) {
//                 return;
//             }
//             var timeoutID = null;
//             var $element = $(e.target);
//             var $target = $element.hasClass('card') ? $element : $element.parent();
//             if ($target.hasClass('match')) {
//                 return;
//             }
//             $target.addClass('open');
//             clearTimeout(timeoutID);
//             timeoutID = setTimeout(() => {
//                 $target.addClass('show');
//                 underMatching = $('.show').length !== 1;
//                 if (!underMatching) {
//                     return;
//                 }
//                 checkMatch($($('.open')[0]).attr('value'), $($('.open')[1]).attr('value'))
//             }, 400);

//         });
//     }


$(document).ready(function() {
    $('.card').on('click', function() {
        if ($(this).hasClass('open')) {
               //     var openedCards=[];
               // for(var i=0; i<2; i++){
               //      openedCards.push($(this.target).children('i')); 
               //  }
               //    if(openedCards[0]==openedCards[1]){

               //         // $('.card').removeClass('open');
               //         // $('.card').toggleClass('open show match');
               //         console.log('通过对比第一个和第二个选择的class的子元素匹配相同，保持open match'); 
                   
               // }else if(openedCards[0]!=openedCards[1]){

               //      // $('.card').toggleClass('open show match');
               //      // $(this.target).unbind();
               //      console.log('通过对比第一个和第二个选择的class的子元素匹配不相同，移除open show match类'); 
               // }else{
                 console.log('其他');
               
   
        } else {
            $(this).toggleClass('open show');
            // $(this).removeClass('open');
            // $(this).addClass('open show');
                        console.log('点击了一个没有open class的元素,增加open show的class');
                               var openedCards=[];
               for(var i=0; i<2; i++){
                    openedCards.push($(this.target).children('i').attr('class')); 
                }
                  if(openedCards[0]==openedCards[1]){

                       // $('.card').removeClass('open');
                       $(this.target).toggleClass('open show match');
                       console.log('通过对比第一个和第二个选择的class的子元素匹配相同，保持open match'); 
                   
               }else if(openedCards[0]!=openedCards[1]){
                // 这里如果不添加函数好像不行？
                  function firstFun(){
                    $('.card,.open,.show').toggleClass('open show');
                    // 这里不应该写$(this.target).toggleClass('open show match');
                    // $(this.target).unbind();
                    console.log('通过对比第一个和第二个选择的class的子元素匹配不相同，移除open show match类'); 
                  }
               }else{
                 console.log('其他');


        }
      }
    });
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
