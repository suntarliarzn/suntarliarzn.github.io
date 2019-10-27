---
title: Khan Academy AP Statistics Basics (2)

key: S201909032

tags: P Value; Linear Regression; R^2; X^2;   

layout: article

mathjax_autoNumber: true


---

# Statistics Basics (2)

<!--more-->



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
     \sigma^2_z =\sigma{^2_{x+y}} = \sigma{^2_x} + \sigma{^2_y}
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

  - **Correlation**: X and Y happens the same time, but it does not mean X➡️Y or Y➡️X.

    