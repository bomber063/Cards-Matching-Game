# Cards-Matching-Game
# 第一次提交 #
完成html、CSS,部分JS代码
# 第二次提交
继续调试，加入JQ框架来写
# 第三次提交
增加hover
# 第四次提交
卡牌可以打开，但是不能匹配
#第五次提交
调试调用的函数
#第六次提交
只能打开两张卡牌，然后关闭之后无法再打开
#第七次提交
增加更多注释
#第八次提交
修改委托事件
卡牌是可以打开，也可以对比，相同可以保持匹配状态，但是不同的话就会移除掉open和show，但是这里移除是所有的卡牌的open和show，就是包括了已经打开并且匹配的卡牌。代码问题估计在第30行和第31行这里
#第九次提交
我的问题卡在通过判断点击的两个元素的class不相同后，需要移除open show，但是我想达到的效果是只移除点击的两个卡片，但是实际会移除掉所有的卡牌。
解决步骤如下：
1.opendeCard通过JS遍历的方式也就是通过（forEach）来把选中数组内的元素。
openCards.forEach(function(card) {
    // 添加一个 shake 左右晃动动画
    card.attr("class", "card open show error animated shake");
    setTimeout(function() {
      // 动画进行 1s 后移除所有 class, 恢复翻过去的状态
      card.attr("class", "card");
    }, 1000);
});

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




  
