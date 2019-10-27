---

title: Khan Academy AP Statistics Basics (1)

key: S201909031

tags: Random Variable; Poisson Distribution; Normal Distribution; Central Limit Theorem; Interval Confidence; T-distribution and Z-distribution;

layout: article

mathjax_autoNumber: true

---

# Statistics Basics (1)

<!--more-->



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
  sample \ mean = \overline x ={\sum_{i=1}^{n}{x_i}\over{n}}
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
  sample \ variance=S^2={\sum_{i=1}^{n}{(x_i-{\overline x})^2}\over{n}}
  $$

- 更好的样本方差计算
  $$
  unbiased\ sample\ variance=S^2={\sum_{i=1}^{n}{(x_i-{\overline x})^2}\over{n-1}}
  $$

- standard deviation 标准差
  $$
  standard \ deviation = \sigma = \sqrt{\sum_{i=1}^{N}{(x_i-\mu)^2}\over{N}}
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
  f(x) = {1\over\sqrt{2\pi}\sigma} * e^{-{1\over2}*({x-\mu\over\sigma})^2}
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
