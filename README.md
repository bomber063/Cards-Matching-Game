# Cards-Matching-Game
## 第一次提交
完成html、CSS,部分JS代码
## 第二次提交
继续调试，加入JQ框架来写
## 第三次提交
增加hover
## 第四次提交
卡牌可以打开，但是不能匹配
## 第五次提交
调试调用的函数
## 第六次提交
只能打开两张卡牌，然后关闭之后无法再打开
## 第七次提交
增加更多注释
## 第八次提交
修改委托事件
卡牌是可以打开，也可以对比，相同可以保持匹配状态，但是不同的话就会移除掉open和show，但是这里移除是所有的卡牌的open和show，就是包括了已经打开并且匹配的卡牌。代码问题估计在第30行和第31行这里
## 第九次提交
我的问题卡在通过判断点击的两个元素的class不相同后，需要移除open show，但是我想达到的效果是只移除点击的两个卡片，但是实际会移除掉所有的卡牌。
* 解决步骤如下：
>1.opendeCard通过JS遍历的方式也就是通过（forEach）来把选中数组内的元素。
```openCards.forEach(function(card) {
    // 添加一个 shake 左右晃动动画`
    card.attr("class", "card open show error animated shake");
    setTimeout(function() {
      // 动画进行 1s 后移除所有 class, 恢复翻过去的状态
      card.attr("class", "card");`    }, 1000);
}); 
```
>
>2.该问题存在于35行中，此处的card指代数组中的索引的值。简单来说如果数组是['1','a']；那么card分别就代表1使用一次，然后a使用一次。
因为此处选择的是card的class属性，又出现新问题。
>
>3.新问题存在71行中，因为此处已经选择了class，就有点问题，li元素的class都是card。
而li元素的子元素选择i的class是两两不同的。也就是不相同的。
>
>4、此时如果需要使用遍历class open的就需要在71行中把点击的li元素放入到opendeCard中。此时又出先新问题。
>
>5.matching的对比已经改变了，之前选择openedCard的是i元素的class对比，而修改后的opendeCard是li元素，所以要通过改变找到li元素的子元素的class对比。
>
>6.然后我通过console(openedCard)发现清空数组openedCard放在57行中，会导致35行所使用的openedCard已经为空，空的数组无法遍历，我想是不是通过setTImeout延迟后，先清空了数组，在调用第24行的函数。这里我没有搞清楚。
>
>7、针对清空数组修改，把57行的数组清空注释掉，改到36行或者40行，也就是在forEach中的就可以移除掉open和show，但是放到function和function2和else if里面就不可以了，这里我还需要想想为什么。不知道是延迟的原因还是全局或者局部变量的原因。<
>
>8、最后一个问题，发现在49行中，也就是匹配相同的class这里我使用了 (".card.open").toggleClass("match")，因为匹配相同里面我没有使用遍历，所以针对于匹配相同的matchedCard数组会不停的添加或者删除match，于是我改成了(".card.open").addClass("match").这样就不会删除match的class了。
>
>直到这里我终于把16个卡片实现了2张卡牌匹配相同保持open和match和show的class状态，如果2张卡片匹配不相同，也仅仅移除选中的这两张卡片的open和show的class。
应该说完成了一大半了，后面还需要一些工作处理，左右晃动的动画我也没有实现，加油了，O(∩_∩)O哈哈~！

## 第十次提交
已完成计时器，计步器，匹配完成弹出胜利页面。

通过使用git config --global core.autocrlf false解决warning: LF will be replaced by CRLF 问题

## 第十一次提交
抖动效果完成

## 第十二次提交
抖动效果完成删除多余代码弹出胜利界面可以重置

## 第十三次提交
胜利的字体修改，CSS效果从index文件中拿出来放在CSS文件里面，JS尽量都改成JQ

## 第十四次提交
通过选中第一个DIV增加hide()和show（）功能实现最后胜利画面只有一个

## 第十五次提交
优化计步器，完成星数。

## 第45次commit后的JS建议  
### 技巧  
> [push()](http://www.w3school.com.cn/jsref/jsref_push.asp) 方法可向数组的末尾添加一个或多个元素，并返回新的长度。 
   
所以此处我们可以对代码进行简化合并：  
`matchedCard.push(openedCard[0], openedCard[1]);`  

### 资源
78-88行，推荐在写 HTML，CSS 和 JavaScript 代码时，注重代码的格式，让其易于阅读。  
> 每次写完代码后就用下面的网站对 JavaScript 进行自动排版：  
[js-beautify](https://countwordsfree.com/js-formatter)

### 建议
#### 没有块级作用域
JS代码第137行  
JavaScript 没有块级作用域经常会导致理解上的困惑。在其他类C的语言中，由花括号封闭的代码块都有自己的作用域（如果用 ECMAScript 的话来讲，就是它们都有自己的执行环境），因而支持根据条件来定义变量。例如，下面的代码在 JavaScript 中并不会得到想象中的结果：  
```
if (true) {  
  var color = 'blue';  
}  

alert(color);     // blue  
```
这里是在一个 if 语句中定义了变量 color。如果是在 C，C++或Java中，color会在if语句执行完毕后被销毁。但在JavaScript中，if语句中的变量声明会将变量添加到当前的执行环境（在这里是全局环境）中。在使用for语句时尤其要牢记这一差异，例如：  
```
for (var i=0; i < 10; i++) {  
  doSomething(i);  
}  
alert(i);     // 10  
```
对于有块级作用域的语言来说，for语句初始化变量的表达式所定义的变量，会只存在于循环的环境中。而对于JavaScript来说，由for语句创建的变量 i 即使在 for 循环执行结束后，也依旧会存在于循环外部的执行环境中。  
  
所以今后我们推荐在for循环中使用 let 来声明一个 块范围变量 ，让变量只在定义它的块中起有效：  
```
for (let i=0; i < 10; i++) {  
  doSomething(i)  
}  
  
alert(i);   // 控制台报错：Uncaught ReferenceError: i is not defined  
```
#### 推荐阅读
[Is there any reason to use the “var” keyword in ES6?](https://softwareengineering.stackexchange.com/questions/274342/is-there-any-reason-to-use-the-var-keyword-in-es6/274352#274352)  
[每天学点ES6－let和const对比](https://cookfront.github.io/2015/05/28/es6-let-const/)  

### 分享
第149行代码  
棒极了  
实时展示了当前所花时间，👍  

分享一个可以更方便操纵或格式化日期、时间的 JS 库，有兴趣可以去瞧瞧：  
[Moment.js | Home](https://momentjs.com/)
