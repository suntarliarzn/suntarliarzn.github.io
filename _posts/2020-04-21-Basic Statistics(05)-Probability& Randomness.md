---

title: Basic Statistics(05)-Probability & Randomness
key: 20200413

tags: Statistics; Probability; Randomness; The Law of Large Numbers; Tree Diagram; Event; Union; independence; Bayes' Law;

layout: article

mathjax: true

mathjax_autoNumber: true

---

# Basic Statistics - (05) Probability & Randomness

<!--more-->

## 1.Randomness 

- Randomness is not a property of a phenomenon.

- Humans are not very good in **assessing randomness.**

  - Gambler's fallacy

  - Over-interpretation of randomness

    - **apophenia**

      **When someone sees patterns which do not really exist, this is known as apophenia. ** Apophenia can take a wide range of forms, from thinking that the same number turns up too often to be mere coincidence to seeing a [man in the moon](https://www.wisegeek.com/what-is-the-man-in-the-moon.htm). 

- Humans are bad in **constructing random data**.

  - Random sampling by software

## 2.Probability

> Persistence pays off.
>
> Persistence beats the odds.

- ### **The Law of Large Numbers**大数定理

  - 小数定律是说，如果统计数据很少，那么事件就表现为各种极端情况，而这些情况都是偶然事件，跟它的期望值一点关系都没有。但如果是大数呢，这就有了大数定理。

  - **大数定律说如果统计数据足够大，那么事物出现的频率就能无限接近他的期望值。**

- Event:一次事件结果

- Independent trial: [独立试验]([https://baike.baidu.com/item/%E7%8B%AC%E7%AB%8B%E8%AF%95%E9%AA%8C/12728918?fr=aladdin](https://baike.baidu.com/item/独立试验/12728918?fr=aladdin))

- Experiment: 实验

  - consists of independent trials which are repeated many times.

- ### **Probability**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/01%20sample%20space.jpg){:height="40%" width="40%"}

  - a way to quantify randomness.

  - 0~1

  - Sample Space 样本空间

    - 随机试验E的所有基本结果组成的集合为E的样本空间。样本空间的元素称为样本点(node)或基本事件（Event）。
    - probability = 1

  - Event

    - A subset of the sample space
    - probability = 0~1

  - quantify probabilities 事件发生概率测量

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/02%20quntify%20probabilities.jpg){:height="40%" width="40%"}

    - Experiments
    - Specify plausible assumptions(Reasoning)

- ### Tree diagram

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/03%20tree%20diagram.jpg){:height="40%" width="40%"}

  - How to calculate?

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/04%20tree%20diagram%20calculation.jpg){:height="40%" width="40%"}

  - A tree diagram makes thinking about **SMALL** problems easy.
  - A tree diagram requires specification of probabilities at each node.
    
    - Instances equally likely and independent from previous choices.(**只有当事件独立且具有稳定概率时才有效！！！**)

- ### Basic set-theoretic concepts

  - **disjoint/mutually exclusive event独立/互斥事件**: two or more events in a sample space that do not share any outcomes.

    - one case of an event is happening and the other(s)(互补事件) is not happening.
    - probability <= 1

  - **Collectively exhaustive events完备/穷尽事件**: multiple events which together **fill up the complete sample space**.

    - probability = 1

  - [**Venn-diagram**]([https://baike.baidu.com/item/%E6%96%87%E6%B0%8F%E5%9B%BE/5017234?fr=aladdin](https://baike.baidu.com/item/文氏图/5017234?fr=aladdin))

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/05%20venn%20diagram.jpg){:height="40%" width="40%"}

    维恩图（英语：Venn diagram），或译Venn图、文氏图、温氏图、范氏图，是在所谓的[集合论](https://baike.baidu.com/item/集合论/494533)（或者类的理论）数学分支中，在不太严格的意义下用以表示[集合](https://baike.baidu.com/item/集合/2908117)（或[类](https://baike.baidu.com/item/类/6824538)）的一种草图。

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/06%20A%26B.jpg){:height="40%" width="40%"}

- ### Probability Practice

  <video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/306%20Practice%20with%20sets.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/order%20low%20to%20high.jpg">
        </video>
  - Union of events (合集&并集)
  
    <video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/307%20Union.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/order%20low%20to%20high.jpg">
          </video>

## 3. Joint and Marginal Probabilities

- #### Joint Probabilities

  - probabilities for the intersection of certain outcomes of the variables

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/07%20joint%20probabilities.jpg){:height="40%" width="40%"}

- #### Marginal Probabilities

  - probabilities for an outcome of each individual variable

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/08%20marginal%20probabilities.jpg){:height="40%" width="40%"}

## 4. Conditional Probabilities 条件概率

- The probability of an event, given that another event occurs.

- **P(A\|B) = P(A and B)/P(B)**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/09%20conditional%20probabilities.jpg){:height="40%" width="40%"}

- ### Independent & Non-independent Joint Probability

  - **P(A and B) = P(B) * P(A\|B)**



## 5. Independence between random events

- ### Independence

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/10%20independence.jpg){:height="40%" width="40%"}

  - P(A\|B) = P(A) or P(B\|A) = P(B)
  - P(A and B) =P(A) * P(B)

- **概率论上讲，万物都是联系的，基本不具有独立性。比如蝴蝶效应。因此，[要将两个事件独立起来，需要特别谨慎](https://www.bilibili.com/video/BV1o7411a76m)。**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/13%20hard%20to%20be%20independent.jpg){:height="40%" width="40%"}

- ### [Disjoint vs. independent events 互斥事件 vs. 独立事件](https://www.zhihu.com/question/25257915)

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/12%20disjoint%20vs%20independent.jpg){:height="40%" width="40%"}

  - 概括而言：看图。

    1. 能否AB都发生，我有一只宠物，既是猫又是狗。不可能，这是互斥事件。
    2. 老王周末有20%概率吃川菜，80%概率喝可乐，他一边吃川菜一边喝可乐概率是3%，吃川菜和和可乐是互相不影响的独立事件吗？
       20% X 80% = 16%  ≠ 3%
    3. 可能川菜太辣，老王改喝酸奶，或者老王喜欢搭配啤酒，这两件事情互相有影响。
    4. 如果他一边吃川菜一边喝可乐概率是16%，这两件事就是独立事件，喝可乐不影响吃辣，吃川菜不影响买可乐。

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/11%20disjoint%20and%20independent%20events.jpg){:height="40%" width="40%"}

    > 作者：大猫布丁
    > 链接：https://www.zhihu.com/question/25257915/answer/324999623
    > 来源：知乎
    > 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

  

## 6. Bayes' Law 贝叶斯定理

- Conditional probability = the Probabilities of A in a reduced sample space B

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/14%20disjoint%20A.jpg){:height="40%" width="40%"}

- The relationship between **marginal, conditional and joint probabilities**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/15%20probabilities.jpg){:height="40%" width="40%"}

- ### [Bayes' Law](https://www.bilibili.com/video/BV1R7411a76r/?spm_id_from=333.788.videocard.1)

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/16%20bayes%20law%201.jpg){:height="40%" width="40%"}

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/17%20bayes%20law%202.jpg){:height="40%" width="40%"}

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%203/18%20bayes%20law%203.jpg){:height="40%" width="40%"}

  - [贝叶斯](https://baike.baidu.com/item/贝叶斯)的统计学中有一个基本的工具叫贝叶斯公式、也称为贝叶斯法则， 尽管它是一个数学公式，但其原理毋需数字也可明了。如果你看到一个人总是做一些好事，则那个人多半会是一个好人。这就是说，当你不能准确知悉一个事物的本质时，你可以依靠与事物特定本质相关的事件出现的多少去判断其本质属性的[概率](https://baike.baidu.com/item/概率)。 用数学语言表达就是：支持某项属性的事件发生得愈多，则该属性成立的可能性就愈大。

    贝叶斯公式又被称为贝叶斯定理、贝叶斯规则是概率统计中的应用所观察到的现象对有关[概率分布](https://baike.baidu.com/item/概率分布)的主观判断（即[先验概率](https://baike.baidu.com/item/先验概率)）进行修正的标准方法。

    所谓贝叶斯公式，是指当分析样本大到接近总体数时，样本中事件发生的概率将接近于总体中事件发生的概率。**但[行为经济学](https://baike.baidu.com/item/行为经济学)家发现，人们在决策过程中往往并不遵循贝叶斯规律，而是给予最近发生的事件和最新的经验以更多的权值，在决策和做出判断时过分看重近期的事件。面对复杂而笼统的问题，人们往往走捷径，依据可能性而非根据概率来决策。这种对经典模型的系统性偏离称为“偏差”。由于心理偏差的存在，投资者在决策判断时并非绝对理性，会行为偏差，进而影响[资本市场](https://baike.baidu.com/item/资本市场/969)上价格的变动。但长期以来，由于缺乏有力的替代工具，[经济学家](https://baike.baidu.com/item/经济学家)不得不在分析中坚持贝叶斯法则。**

- **启发**: 当新的信息产生时，需要对原始观点进行修正，但也不能下绝对定论。因此，人需要不断学习新知识，从而创造条件改善自己的观念。同时，也不能轻易从新的信息中下结论，需要考虑背景信息、以往经验等（这是最难的）。**因此，需要通过数学来在不确定中，寻找相对确定的答案。** 总结古人的一句话：“学而不思则罔，思而不学则殆。”