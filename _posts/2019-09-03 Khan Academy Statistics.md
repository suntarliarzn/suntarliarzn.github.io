---

title: Khan Academy
Statistics Basics

key: C20190903

tags: Random Variable; Poisson Distribution; Normal Distribution; Central Limit Theorem; Interval Confidence; T-distribution and Z-distribution; P Value; Linear Regression; R^2; X^2;   

layout: article

mathjax_autoNumber: true

---

# Statistics Basics

*<!--more-->*

## 1. Statistics

- Descriptive

- Inferential

- ### 1.1 Mean, Median, Mode

  > Find the mean, median and mode of the following set of numbers:
  >
  > 23 29 20 32 23 21 33 25

  $$
  mean = sum/total
  $$

  - mean = 25.75

  $$
  median = middle number
  $$

  - median = (23+25)/2=24

  $$
  mode众数
  $$

  - mode = 23 

  [^]: 出现了两次

  

  

- ### 1.2 Range and midrange

  > Find the mean, median and mode of the following set of numbers:
  >
  > 65 81 73 85 94 79 67 83 82

  $$
  Range= Largest-Smallest
  $$

  - Range=94-65=29

  $$
  Mid-Range=(Lagrest+Smallest)/2
  $$

  - Mid-Range=(94+65)/2=79.5

## 2. Central Tendency

- Mean
  - Arithmetic mean算数平均数
  - Geometric mean几何平均数

- Median中位数
- Mode众数

## 3. Sample and Population

- Sample
  $$
  sample \ mean = \overline x ={{ \sum_{i=1}^{n}{x_i}}\over{n}}
  $$
  
- Population
  $$
  Population \ mean =\mu={\sum_{i=1}^{N}{x_i}\over{N}}
  $$
  

## 4. Dispersion 离散

- variance方差
  $$
  variance=\sigma{^2}={\sum_{i=1}^{N}{(x_i-\mu)^2}\over{N}}={\sum_{i=1}^{N}{X_i^2}\over{N}}-\mu^2
  $$

- sample variance 样本方差
  $$
  sample\ variance=S^2={\sum_{i=1}^{n}{(x_i-{\overline x})^2}\over{n}}
  $$

- 更好的样本方差计算
  $$
  unbiased\ sample\ variance=S^2={\sum_{i=1}^{n}{(x_i-{\overline x})^2}\over{n-1}}
  $$

- standard deviation 标准差
  $$
  standard \ deviation = \sigma = \sqrt{{\sum_{i=1}^{N}{(x_i-\mu)^2}\over{N}}}
  $$

## 5. Random Variable 随机变量

- Discrete 离散随机变量--有限个数

  - $$
    Discrete \ Radndom \ Variable = 
    \begin{Bmatrix}
    1&if \ it \ rains \ tommorrow \\
    0&if \ not \ rains \ tommorrow 
    \end{Bmatrix}
    $$

  - 

- Continuous 连续随机变量--无限个数

  - Probability Density概率密度函数=连续函数下一定区间的面积概率

    ![概率密度函数](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Khan%20Academy%20Statistics/probablity%20density%20function.jpg)

    - **概率密度函数面积必定为1**



## 6. Expected Random Variable 随机变量期望值

- *expected random variable(sample mean) = population mean* 

- calculate the sample with many times

  - 计算投掷6次骰子出现正面的概率？

  $$
  E(x) = n * p\qquad
  0 * 1.56\% + 1 * 9.37\% + 2 * 23.43\% + 3 * 31.25\% + 4 * 23.43\% + 5 * 9.37\% + 6 * 1.56\% = 3
  $$

  ![probability distribution](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Khan%20Academy%20Statistics/probablity%20density%20rolling%20dice.jpg)
  
- 二项式分布公式
  $$
  P_{(x=k)}=C^k_n(p^k)*(1-p)^{(n-k)}
  $$

  - n表示试验次数
  - k表示指定事件发生次数
  - p代表指定事迹在一次试验中的发生概率

## 7.Poisson Distribution 泊松分布

- 公式 

  - *λ*为单位时间的随机事件平均发生次数=*μ*

  $$
  P_{(x=k)}= {λ^k\over k!} * e^{-λ}
  $$

  

- [推导](<http://open.163.com/movie/2011/6/O/6/M82IC6GQU_M83JB1UO6.html>)

- [二项分布、泊松分布和正态分布的区别与联系](<http://www.360doc.com/content/17/1231/22/9200790_718001949.shtml>)

## 8. Law of Large Numbers 大数定理

- 当试验次数足够大时，样本的均值将收敛于总体均值或随机变量的期望值。



## 9. Normal/Gaussian Distribution 正态/高斯分布

- 连续函数

- 公式
  $$
  f(x) = {1\over\sqrt{2\pi}\sigma} * e^{-{1\over2}*({{x-\mu}\over{\sigma}})^2}
  $$

  - μ:总体期望均值
  - σ^2:方差
  - x:随机变量
  
- 累积分布函数（cumulative distribution function ）



## 10. z - score

- 定义：

  - How many σ away from the μ

- ### 公式

  - one sample

  $$
  z = {(X - μ) \over σ}
  $$

  - [multiple samples](https://www.statisticshowto.datasciencecentral.com/sigma-sqrt-n-used/)

    - n = sample size

    $$
    z = {(X - μ) \over{σ/\sqrt{n}}}
    $$

    

- **z-score can be applied to non normal distribution.**

- ## [z table](https://www.statisticshowto.datasciencecentral.com/tables/z-table/)

  - standard z table(起始数字为z score=0, probalility = 0.5+查表)

    [standard z score table](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Khan%20Academy%20Statistics/standard%20z%20score%20table.jpg)

  - right hand z table(z>0)

    [right hand z score table](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Khan%20Academy%20Statistics/z-table%20to%20the%20right.png)

  - left hand z table(z<0)

    [left hand z score table](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Khan%20Academy%20Statistics/z-table%20to%20the%20right.png)

## 11. Empirical Rule(68-95-99.7 法则)

- The empirical rule states that for a [normal distribution](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/normal-distributions/), nearly all of the data will fall within three [standard deviations](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/standard-deviation/) of the [mean](https://www.statisticshowto.datasciencecentral.com/mean/). The empirical rule can be broken down into three parts:
  - 68% of data falls within the first standard deviation from the mean.
  - 95% fall within two standard deviations.
  - 99.7% fall within three standard deviations.

- [empirical rule](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Khan%20Academy%20Statistics/empirical%20rule.png)



## 12. Standard Normal Distribution标准正态分布

- 均值μ = 0
- 标准差σ = 1



## 13. Central Limit Theorem 中心极限定理

- The Central Limit Theorem states that the sampling distribution of the sample means approaches a [normal distribution](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/normal-distributions/) as the [sample size](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/find-sample-size/) gets larger — *no matter what the shape of the population distribution*. This fact holds especially true for sample sizes over 30. *All this is saying is that as you take more samples, especially large ones, your graph of the sample means will look more like a normal distribution.*



## 14. Sampling Distribution of the Sample Mean 样本均值的抽样分布

- 样本均值的抽样分布是所有的样本均值形成的分布，即μ的[概率分布](https://baike.baidu.com/item/概率分布/828907)。样本均值的抽样分布在形状上却是对称的。

- 随着样本量n的增大，**不论原来的总体是否服从[正态分布](https://baike.baidu.com/item/正态分布/829892)，样本均值的抽样分布都将趋于正态分布，其分布的[数学期望](https://baike.baidu.com/item/数学期望/5362790)为总体均值μ，[方差(standard error)](https://baike.baidu.com/item/方差/3108412)为总体方差的1/n。**
  $$
  \sigma^2_{\over{x}} = {\sigma^2\over{n}}
  $$

- 样本量n越大，标准差越小，越趋于正态分布。

- The **standard error** of a [statistic](http://onlinestatbook.com/2/glossary/statistics.html) is the [standard deviation](http://onlinestatbook.com/2/glossary/standard_deviation.html) of the [sampling distribution](http://onlinestatbook.com/2/glossary/sampling_distribution.html) of that statistic. For example, the standard error of the mean is the standard deviation of the sampling distribution of the mean. Standard errors play a critical role in constructing [confidence intervals](http://onlinestatbook.com/2/glossary/confidence_interval.html) and in [significance testing](http://onlinestatbook.com/2/glossary/significance_testing.html).



## 15 [Interval Confidence置信区间](https://www.zhihu.com/question/24801731/answer/251576717)

- A confidence interval is how much [uncertainty ](https://www.statisticshowto.datasciencecentral.com/uncertainty-in-statistics/)there is with any particular [statistic](https://www.statisticshowto.datasciencecentral.com/statistic/). Confidence intervals are often used with a [margin of error](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/hypothesis-testing/margin-of-error/#WhatMofE). It tells you how confident you can be that the results from a poll or survey reflect what you would expect to find if it were possible to **survey the entire population**. Confidence intervals are intrinsically connected to [confidence levels](https://www.statisticshowto.datasciencecentral.com/confidence-level/).

- ### Confidence Intervals vs. Confidence Levels

  - **Confidence levels** are expressed as a percentage (for example, a 95% confidence level). It means that should you repeat an experiment or survey over and over again, 95 percent of the time your results will match the results you get from a population (in other words, your statistics would be sound!). 
  - **Confidence intervals** are your results…usually numbers. For example, you survey a group of pet owners to see how many cans of dog food they purchase a year. You test your statistics at the 99 percent confidence level and get a confidence interval of (200,300). That means you think they buy between 200 and 300 cans a year. You’re super confident (99% is a very high level!) that your results are sound, statistically.
  - a level=2 tails interval



## 16 T-distribution vs. Z-distribution

- ### T-Score vs. Z-Score

  - T-Score
    $$
    T={(x-\mu)\over{s\over{\sqrt{n}}}}
    $$

    - x = [sample mean](https://www.statisticshowto.datasciencecentral.com/sample-mean/)
    - μ = [population mean](https://www.statisticshowto.datasciencecentral.com/population-mean/)
    - s = sample [standard deviation](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/standard-deviation/)
    - n =[ sample size](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/find-sample-size/)

  - Z-Score
    $$
    Z ={(x - \mu)\over{\sigma\over{\sqrt n}}}
    $$

    - σ is the sample standard deviation
    - μ is the sample mean

- ### Degrees of Freedom

  - Degrees of freedom of an estimate is **the number of independent pieces of information that went into calculating the estimate**. It’s not quite the same as the number of items in the sample. In order to get the df for the estimate, you have to subtract 1 from the number of items. Let’s say you were finding the mean weight loss for a low-carb diet. You could use 4 people, giving 3 degrees of freedom (4 – 1 = 3), or you could use one hundred people with df = 99.
    $$
    Degrees\ of\ Freedom(Df) = n-1
    $$
    
  - **Why do we subtract 1 from the number of items?**
    
  - Another way to look at degrees of freedom is that they are **the number of values that are free to vary** in a data set. What does “free to vary” mean? Here’s an example using the mean (average):
      **Q**. Pick a set of numbers that have a mean (average) of 10.
      **A**. Some sets of numbers you might pick: 9, 10, 11 or 8, 10, 12 or 5, 10, 15.
      Once you have chosen the first two numbers in the set, the third is fixed. In other words, **you can’t choose the third item in the set**. The only numbers that are free to vary are the first two. You can pick 9 + 10 or 5 + 15, but once you’ve made that decision you **must** choose a particular number that will give you the mean you are looking for. So degrees of freedom for a set of three numbers is TWO.
  
  ​	
  
- 样本量小(n<30)或不知道总样本σ时用T-distribution

  - ### T distribution

    - The **T distribution** (also called **Student’s T Distribution**) is a family of distributions that look almost identical to the [normal distribution ](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/normal-distributions/)curve, only a bit shorter and fatter. The t distribution is used instead of the normal distribution when you have small samples (for more on this, see: [t-score vs. z-score](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/hypothesis-testing/t-score-vs-z-score/)). The larger the [sample size](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/find-sample-size/), the more the t distribution looks like the normal distribution. In fact, for sample sizes larger than 20 (e.g. more degrees of freedom), the distribution is almost exactly like the normal distribution.
    - [T table](http://www.ttable.org/)

- 样本量大(n>30)或知道总样本σ时用z-distribution

  - If you don’t know your [population mean](https://www.statisticshowto.datasciencecentral.com/population-mean/) (μ) but you do know the [standard deviation](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/standard-deviation/) (σ), you can find a confidence interval for the population mean, with the formula:
    $$
    \overline{x} ± z* {σ \over{ \sqrt{n}}}
    $$
    

    

## 16 伯努利分布（Bernoulli Distribution）

- 伯努利分布亦称“零一分布”、“两点分布”。称随机变量X有伯努利分布, 参数为p(0<p<1),如果它分别以概率p和1-p取1和0为值。
  $$
  \mu = p
  $$

  $$
  \sigma^2 = (1-p)(0-p)^2 + p(1-p)^2=p(1-p)
  $$

- p: probability of success



## 17 假设检验和p值（Hypothsis Testing and P-value）

- ### What is a hypothesis?

  - A hypothesis is an **educated guess** about something in the world around you. It should be testable, either by experiment or observation. For example:
    - A new medicine you think might work.
    - A way of teaching you think might be better.
    - A possible location of new species.
    - A fairer way to administer standardized tests.

- ### What is a Hypothesis Statement?

  - If you are going to propose a hypothesis, it’s customary to write a statement. Your statement will look like this:
    “If I…(do this to an [independent variable](https://www.statisticshowto.datasciencecentral.com/independent-variable-definition/))….then (this will happen to the [dependent variable](https://www.statisticshowto.datasciencecentral.com/dependent-variable-definition/)).”
    For example:
    - If I (decrease the amount of water given to herbs) then (the herbs will increase in size).
    - If I (give patients counseling in addition to medication) then (their overall depression scale will decrease).
    - If I (give exams at noon instead of 7) then (student test scores will improve).
    - If I (look in this certain location) then (I am more likely to find new species).
  - A good hypothesis statement should:
    - Include an “if” and “then” statement [(according to the University of California).](http://www.csub.edu/~ddodenhoff/Bio100/Bio100sp04/formattingahypothesis.htm)
    - Include both the independent and [dependent variables.](https://www.statisticshowto.datasciencecentral.com/dependent-variable-definition/)
    - Be testable by experiment, survey or other scientifically sound technique.
    - Be based on information in prior research (either yours or someone else’s).
    - Have design criteria (for engineering or programming projects).

- ### What is Hypothesis Testing?

  - Hypothesis testing in statistics is a way for you to test the results of a survey or experiment to see if you have meaningful results. You’re basically testing whether your results are valid by figuring out the odds that your results have happened by chance. If your results may have happened by chance, the experiment won’t be repeatable and so has little use.
  - Hypothesis testing can be one of the most confusing aspects for students, mostly because before you can even perform a test, you have to know what your **null hypothesis** is. Often, those tricky word problems that you are faced with can be difficult to decipher. But it’s easier than you think; all you need to do is:
    1. Figure out your null hypothesis,
    2. [State your null hypothesis,](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/null-hypothesis/#state)
    3. Choose what kind of test you need to perform,
    4. Either support or [reject the null hypothesis](https://www.statisticshowto.datasciencecentral.com/support-or-reject-null-hypothesis/).

- ### What is the Null Hypothesis?

  - The [null hypothesis](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/null-hypothesis/), H0 is the commonly accepted fact; it is the opposite of the [alternate hypothesis](https://www.statisticshowto.datasciencecentral.com/what-is-an-alternate-hypothesis/). Researchers work to reject, nullify or disprove the null hypothesis. Researchers come up with an alternate hypothesis, one that they think explains a phenomenon, and then work to [reject the null hypothesis](https://www.statisticshowto.datasciencecentral.com/support-or-reject-null-hypothesis/).
  - If you trace back the history of science, the null hypothesis is always the accepted fact. Simple examples of null hypotheses that are generally accepted as being true are:
    1. DNA is shaped like a double helix.
    2. There are 8 planets in the solar system (excluding Pluto).
    3. Taking [Vioxx](https://usatoday30.usatoday.com/news/health/2004-10-12-vioxx-cover_x.htm) can increase your risk of heart problems (a drug now taken off the market).

 <video id="video" controls="" preload="none" width="640" height="360">
     <object ><param name="movie" value="//open.163.com/openplayer/-M82IC6GQU-M83JCBUOI-http://open-image.ws.126.net/cfd9b3d9a2e0441694e4f5f0715d60c9.jpg-openPlayer.swf?isUserAutoPlay=1"></param><param name="allowScriptAccess" value="always"></param><param name="wmode" value="transparent"></param><embed src="//open.163.com/openplayer/-M82IC6GQU-M83JCBUOI-http://open-image.ws.126.net/cfd9b3d9a2e0441694e4f5f0715d60c9.jpg-openPlayer.swf?isUserAutoPlay=1" type="application/x-shockwave-flash" width="640" height="360" allowFullScreen="true" wmode="transparent" allowScriptAccess="always"></embed></object>
  </video>

## 18 [P Value](https://www.statisticshowto.datasciencecentral.com/p-value/)

- A p value is used in [hypothesis testing](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/hypothesis-testing/) to help you [support or reject the null hypothesis](https://www.statisticshowto.datasciencecentral.com/support-or-reject-null-hypothesis/). The p value is the evidence **against** a [null hypothesis](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/null-hypothesis/). The smaller the p-value, the stronger the evidence that you should reject the null hypothesis.

- P values are expressed as decimals although it may be easier to understand what they are if you [convert them to a percentage](http://wagner.nyu.edu/files/students/Math_Review_-_Review_topics_-_Percents.pdf). For example, a p value of 0.0254 is 2.54%. This means there is a 2.54% chance your results could be random (i.e. happened by chance). That’s pretty tiny. On the other hand, a large p-value of .9(90%) means your results have a 90% probability of being completely random and *not* due to anything in your experiment. Therefore, the smaller the p-value, the more important (“significant”) your results.

- ### P Value vs Alpha level

- When you run a [hypothesis test](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/hypothesis-testing/), you compare the p value from your test to the [alpha level ](https://www.statisticshowto.datasciencecentral.com/what-is-an-alpha-level/)you selected when you ran the test. Alpha levels can also be written as percentages.

- Alpha levels are controlled by the researcher and are related to [confidence levels](https://www.statisticshowto.datasciencecentral.com/confidence-level/). You get an alpha level by subtracting your confidence level from 100%. For example, if you want to be 98 percent confident in your research, the alpha level would be 2% (100% – 98%). When you run the hypothesis test, the test will give you a value for p. Compare that value to your chosen alpha level. For example, let’s say you chose an alpha level of 5% (0.05). If the results from the test give you:

  - **A small p** (≤ 0.05), [reject the null hypothesis](https://www.statisticshowto.datasciencecentral.com/support-or-reject-null-hypothesis/). This is strong evidence that the null hypothesis is invalid.
  - **A large p** (> 0.05) means the [alternate hypothesis](https://www.statisticshowto.datasciencecentral.com/what-is-an-alternate-hypothesis/) is weak, so you do not reject the null.

- ### What if I Don’t Have an Alpha Level?

- In an ideal world, you’ll have an alpha level. But if you do not, you can still use the following rough guidelines in deciding whether to support or reject the null hypothesis:

  - If p > .10 → “not significant”
  - If p ≤ .10 → “marginally significant”
  - If p ≤ .05 → “significant”
  - If p ≤ .01 → “highly significant.”

## 19 Type I Error& Type II Error 第一&第二型错误

- ### Type I Error

  - A Type I error (or Type **1**), is the **incorrect rejection of a true null hypothesis**. The alpha symbol, α, is usually used to denote a Type I error.
  - 在进行[假设检验](https://baike.baidu.com/item/假设检验/638320)时，由于[检验统计量](https://baike.baidu.com/item/检验统计量/5850402)是[随机变量](https://baike.baidu.com/item/随机变量/828980)，有一定的[波动性](https://baike.baidu.com/item/波动性/592899)，即使原假设H0为真，在正常的情况下，计算的[统计量](https://baike.baidu.com/item/统计量/2112983)仍有一定的[概率](https://baike.baidu.com/item/概率/828845)α(α称为显著性水平)落入拒绝域内，因此也有可能会错误地拒绝[原假设](https://baike.baidu.com/item/原假设/18891646)H0，这种当原假设H0为真而拒绝原假设的错误，称为假设检验的[第一类错误](https://baike.baidu.com/item/第一类错误/4343510)，又称为拒真错误。

- ## Type II Error

  - Type II error (sometimes called a Type 2 error) is the failure to reject a false [null hypothesis](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/null-hypothesis/). The probability of a type II error is denoted by the beta symbol β.
  - 第二类错误（type Ⅱ error）又称Ⅱ型错误，不拒绝实际上不成立的，为“存伪”的错误(即接受了错误的原假设），其[概率](https://baike.baidu.com/item/概率/828845)通常用β表示。
    - β=P（接受H0∣H0是错误的）

- 二者的关系是，当样本例数固定时，α愈小，β愈大；反之，α愈大，β愈小。因而可通过选定α控制β大小。要同时减小α和β，唯有增加样本例数。统计上将1-β称为[检验效能](https://www.baidu.com/s?wd=检验效能&tn=SE_PcZhidaonwhc_ngpagmjz&rsv_dl=gh_pc_zhidao)或把握度(power of a test)，即两个总体确有差别存在，而以α为检验水准，假设检验能发现它们有差别的能力。实际工作中应权衡两类错误中哪一个重要以选择检验水准的大小。

## 20 Significance Level (alpha level)

- The significance level α is the probability of making the wrong decision when the [null hypothesis](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/null-hypothesis/) is true. Alpha levels (sometimes just called “significance levels”) are used in [hypothesis tests](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/hypothesis-testing/). Usually, these tests are run with an alpha level of .05 (5%), but other levels commonly used are .01 and .10.

- ### Alpha Level

  [Aloha Level](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Khan%20Academy%20Statistics/alpha-level.jpg)

  - An **alpha level** is the probability of a type I error, or you [reject the null hypothesis](https://www.statisticshowto.datasciencecentral.com/support-or-reject-null-hypothesis/) when it is true. A related term, [beta](https://www.statisticshowto.datasciencecentral.com/beta-level/), is the opposite; the probability of rejecting the alternate hypothesis when it is true.

  - Alpha levels can be controlled by you and are related to **confidence levels**. To get α subtract your [confidence level](https://www.statisticshowto.datasciencecentral.com/confidence-level/) from 1. For example, if you want to be 95 percent confident that your analysis is correct, the alpha level would be 1 – .95 = 5 percent, assuming you had a one tailed test. 

- ### Confidence Level

  - The **width** of the [confidence interval](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/confidence-interval/) tells us more about how certain (or uncertain) we are about the true figure in the population. This width is stated as a plus or minus (in this case,+/- 3) and is called the **confidence interval**. When the interval and confidence level are put together, you get a spread of percentage. In this case, you would expect the results to be 35 (38-3) to 41 (35+3) percent, 95% of the time.

  - In general, the higher the coefficient, the more certain you are that your results are accurate. For example, a .99 coefficient is more accurate than a coefficient of .89. It’s extremely rare to see a coefficient of 1 (meaning that you are positive without a doubt that your results are completely, 100% accurate). A coefficient of zero means that you have no faith that your results are accurate at all.

    The following table lists confidence coefficients and the equivalent confidence levels.

    | Confidence coefficient (1 – α) | Confidence level (1 – α * 100%) |
    | ------------------------------ | ------------------------------- |
    | 0.90                           | 90 %                            |
    | 0.95                           | 95 %                            |
    | 0.99                           | 99 %                            |

- 随机变量之差的方差

  - 2个随机变量之和：
    $$
    z = x + y \\
    \mu_z = \mu_{x+y} = \mu_x + \mu_y \\
     \sigma^2_z =\sigma^2_{x+y} = \sigma^2_x + \sigma^2_y
    $$

  - 2个随机变量之差：
    $$
    a = x - y \\
    \mu_a = \mu_{x-y} = \mu_x-\mu_y \\
    \sigma^2_a = \sigma^2_{(x-y)}=  \sigma^2_x + \sigma^2_y
    $$

  - 2个样本均值之差的标准差：
    $$
    \sigma^2_{\overline{x}-\overline{y}} = {\sigma^2_{x}\over{n}}+{\sigma^2_{y}\over{m}} \\
    \sigma_{\overline{x}-\overline{y}} = \sqrt{{\sigma^2_{x}\over{n}}+{\sigma^2_{y}\over{m}}}
    $$
    

## 21 Linear Regression(一元线性回归)

- Regression analysis is used in stats to find trends in data. For example, you might guess that there’s a connection between how much you eat and how much you weigh; regression analysis can help you quantify that. Regression analysis will provide you with an equation for a graph so that you can make predictions about your data. For example, if you’ve been putting on weight over the last few years, it can predict how much you’ll weigh in ten years time if you continue to put on weight at the same rate. 

- You’re probably familiar with plotting [line graphs](https://www.statisticshowto.datasciencecentral.com/line-graph/) with one X axis and one Y axis. The X variable is sometimes called the [independent variable](https://www.statisticshowto.datasciencecentral.com/independent-variable-definition/) and the Y variable is called the [dependent variable](https://www.statisticshowto.datasciencecentral.com/dependent-variable-definition/). Simple linear regression plots one independent variable X against one dependent variable Y.

  ![Simple Linear Regression](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Khan%20Academy%20Statistics/regression-2.jpg)

- [推导过程](http://open.163.com/newview/movie/free?pid=M82IC6GQU&mid=M83JD7VUC)

- ### 公式

$$
y = mx+b \tag{1}\\
$$

$$
  m = {{\overline x\overline y} - \overline {xy}\over{(\overline x) ^2 - \overline {x^2}}} \tag{2}\\
$$

$$
  b = \overline y - m\overline x \tag{3}\\
$$
- [Python实现](https://suntarliarzn.github.io/2019/06/08/Introduction-to-Computational-Thinking-and-Data-Science-(4).html)



## 22 Coefficient of Determination(R^2系数)

- The coefficient of determination, R2, is used to analyze how differences in one [variable ](https://www.statisticshowto.datasciencecentral.com/variable/)can be explained by a difference in a second variable. For example, *when* a person gets pregnant has a direct relation to when they give birth.
- More specifically, R-squared gives you the percentage variation in y explained by x-variables. The range is 0 to 1 (i.e. 0% to 100% of the variation in y can be explained by the x-variables.
- **The higher the coefficient, the higher percentage of points the line passes through when the data points and line are plotted.** If the coefficient is 0.80, then 80% of the points should fall within the regression line. Values of 1 or 0 would indicate the regression line represents all or none of the data, respectively. A higher coefficient is an indicator of a better [goodness of fit](https://www.statisticshowto.datasciencecentral.com/goodness-of-fit-test/) for the observations.
- **线性回归就是将坐标系从原点（0,0）转移到（0，b）点，求出最佳拟合线条y=mx+b。这样可以将绝对比较转换为相对比较。**
- **决定系数就是将最佳拟合（相对坐标系）的线条y=mx=b与实际值进行比较，从而得出拟合百分比，也叫做波动频率。**

![r^2](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Khan%20Academy%20Statistics/r2.jpg)

- 公式
$$
  r^2 = {SE_{line}\over SE_\overline{y}}={\sum(y-\hat y)^2 \over \sum(y-\overline y)^2} \tag{4}
$$
- [计算R2举例](http://open.163.com/newview/movie/free?pid=M82IC6GQU&mid=M83JDG6EU)

- R2计算练习

  > *请计算下列点的最佳拟合线条，并计算R2:*
  >
  > (1,2),(5,4)(-3,-5)(-2,-4)
  >
  > 1.计算平均值：
  >
  > $\overline x =(1+5-3-2)/4=1/4$
  >
  > $\overline y=(2+4-5-4)/4=-3/4$
  >
  > $\overline{xy}=(1*2+5*4+(-3)*(-5)+(-2)*(-4))/4=45/4$
  >
  > $\overline{x^2} = (1^2+5^2+(-3)^2+(-2)^2)/4=39/4$
  >
  > 2.带入公式2求出m值：
  >
  > $m = {{\overline x\overline y} - \overline {xy}\over{(\overline x) ^2 - \overline {x^2}}}=183/155\approx 1.18$
  >
  > 3.带入公式3求出b值：
  >
  > $b = \overline y - m\overline x =-1.045$
  >
  > 4.带入公式1求出最佳拟合线
  >
  > $y = 1.18x-1.045$
  >
  > 5.利用excel算出波动距离
  >
  > ![r^2](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Khan%20Academy%20Statistics/r%5E2%20excercise.jpg)

## 23 Covariance 协方差

- ##### **协方差其意义：**

  **度量各个维度偏离其均值的程度。协方差的值如果为正值，则说明两者是正相关的(从协方差可以引出“相关系数”的定义)，结果为负值就说明负相关的，如果为0，也是就是统计上说的“相互独立”。**

- 公式
$$
  cov(x,y) =E\{[x-E(x)]*[y-E(y)]\} = \overline{xy}-\overline{x}*\overline{y}
$$
- 相关系数和协方差的关系

$$
  m = {cov(x,y)\over var(x)}
$$

## 24 Chi-Square (x^2) test

- 卡方检验就是统计样本的实际观测值与理论推断值之间的偏离程度，实际观测值与理论推断值之间的偏离程度就决定卡方值的大小，如果卡方值越大，二者偏差程度越大；反之，二者偏差越小；若两个值完全相等时，卡方值就为0，表明理论值完全符合。

- There are **two types of chi-square tests**. Both use the chi-square statistic and distribution for different purposes:

  - A **chi-square goodness of fit test** determines if a sample data matches a population. For more details on this type, see: [*Goodness of Fit Test*](https://www.statisticshowto.datasciencecentral.com/goodness-of-fit-test/).
  - A **chi-square test for independence** compares two variables in a contingency table to see if they are related. In a more general sense, it tests to see whether distributions of categorical variables differ from each another.
    - A **very small chi square test statistic** means that your observed data fits your expected data extremely well. In other words, there is a relationship.
    - A **very large chi square test statistic** means that the data does not fit very well. In other words, there isn’t a relationship.

- 方程：
  $$
  {\chi^2_{df}}= \sum{(O_i-E_i)^2\over{E_i}}
  $$

  - df = the degrees of freedom
  - O = observed value
  - E = expected value
  - i = number of items

- chi square table

  ![chi square table](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Khan%20Academy%20Statistics/chi%20square%20table.png)
  
- 列联表 free of degree
  $$
  df = (row-1)*(column-1)
  $$
  

## 25 Analysis of Variance(ANOVA）

1. **SST**: squared sum total

2. **SSW**: squared sum total **within each group**

3. **SSB**: squared sum total **between**
   $$
   SSW = \sum{(each\ data\ point - \overline{x}_{within \ group})}\\
   SSB = \sum{(\overline{x}_{within \ group}-\overline{x}_{total})}\\
   SST = SSW + SSB\\
   df_{SST} = df_{SSW} + df_{SSB}
   $$

4. ### **[F-statistics]( https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/f-statistic-value-test/#Fdist )**

   $$
   F-statistic = {{SSB\over{m-1}}\over{SSW\over{m*(n-1)}}}
   $$

   m = number of groups

   n = data points in a group

5. [F-table]( http://www.socr.ucla.edu/Applets.dir/F_Table.html )

   ![F-distribution](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Khan%20Academy%20Statistics/F%20distri.png)

6. ### ANOVA vs. T Tes

   **A [Student’s t-test](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/t-test/) will tell you if there is a significant variation between groups. A t-test compares means, while the ANOVA compares variances between populations.**
   You *could* technically perform a series of t-tests on your data. However, as the groups grow in number, you may end up with a *lot* of pair comparisons that you need to run. ANOVA will give you a single number (the [f-statistic](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/f-statistic-value-test/)) and one p-value to help you [support or reject the null hypothesis](https://www.statisticshowto.datasciencecentral.com/support-or-reject-null-hypothesis/).

7. ### The F Statistic and P Value

   The F statistic must be used in combination with the p value when you are deciding if your overall results are significant. Why? If you have a significant result, it doesn’t mean that *all* your variables are significant. The statistic is just comparing the joint effect of all the variables together.

   For example, if you are using the F Statistic in[ regression analysis](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/regression-analysis/) (perhaps for a change in [R Squared, the Coefficient of Determination](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/coefficient-of-determination-r-squared/)), you would use the[ p value](https://www.statisticshowto.datasciencecentral.com/p-value/) to get the “big picture.”

   1. If the p value is less than the [alpha level](https://www.statisticshowto.datasciencecentral.com/what-is-an-alpha-level/), go to Step 2 (otherwise your results are not significant and you cannot [reject the null hypothesis](https://www.statisticshowto.datasciencecentral.com/support-or-reject-null-hypothesis/)). A common [alpha level](https://www.statisticshowto.datasciencecentral.com/what-is-an-alpha-level/) for tests is 0.05.
   2. Study the individual p values to find out which of the i  individual variables are [statistically significant.](https://www.statisticshowto.datasciencecentral.com/what-is-statistical-significance/)

   - **F值决定组间差别是否具有显著性；P值决定哪个变量显著性最高。**
- **Reject the null when your p value is smaller than your [alpha level](https://www.statisticshowto.datasciencecentral.com/what-is-an-alpha-level/). You should not reject the null if your critical f value is smaller than your F Value, unless you also have a small p-value. **
   

   
   ## 26 Causality(因果关系) vs. Correlation(相关关系)
   
   - **Causality**: X causes Y
   
   - **Correlation**: X and Y happens the same time, but it does not mean X:arrow_right:Y or Y:arrow_right:X.
   
     