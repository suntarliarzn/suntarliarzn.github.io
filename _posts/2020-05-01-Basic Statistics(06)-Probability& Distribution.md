---

title: Basic Statistics(06)-Probability Distribution
key: 20200501

tags: Statistics; Probability Distribution; variable; variance; covariance; normal distribution; z-score; binominal distribution;

layout: article

---

# Basic Statistics - (06) Probability Distribution

<!--more-->

## 1. Random Variable(*X*)

Variables whose possible values are numerical outcomes of a random phenomenon.

- Discrete
  - countable number of distinct values
- Continuous
  - infinite number of possible values
- probability distribution
  - Discrete
    - **probability mass function**
  - Continuous
    - **probability density function**
      - **a certain internal under the curve** rather than the height of the curve.

## 2. Cumulative Probability Distribution

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/01%20cumulative%20function.jpg){:height="40%" width="40%"}

- CPD answers two questions

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/02%20answer%202%20questions.jpg){:height="40%" width="40%"}

- Quantile

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/03%20symmetric%20distribution.jpg){:height="40%" width="40%"}

## 3. The Mean of a Random Variable

-  $$\mu_x$$

  - mean of random variable

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/04%20the%20mean%20of%20a%20random%20variable.jpg){:height="40%" width="40%"}

- add or subtract two random variables: X+/- Y

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/05%20abb%20or%20subtract%20mean.jpg){:height="40%" width="40%"}
  $$
  \mu_{a+bX}=a + b*X
  $$

  $$
  \mu_{x+y} = \mu_x + \mu_y
  $$

  

## 4. Variance of a Random Variable

- variance 方差

  方差用于衡量[随机变量](https://baike.baidu.com/item/随机变量/828980)或一组数据的离散程度，方差在在统计描述和概率分布中有不同的定义和计算公式。

  - 概率论中方差用来度量[随机变量](https://baike.baidu.com/item/随机变量/828980)和其[数学期望](https://baike.baidu.com/item/数学期望/5362790)（即[均值](https://baike.baidu.com/item/均值/5922988)）之间的偏离程度；
  - 统计中的方差(样本方差)是每个样本值与全体样本均值之差的平方值的[平均数](https://baike.baidu.com/item/平均数/11031224)，代表每个变量与总体均值间的离散程度。

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/06%20variance%20of%20a%20variable.jpg){:height="40%" width="40%"}

- variance equations

  - plus and minus

  $$
  var(a\pm X) = var(X)
  $$

  $$
  var(bX) = b^2 * var(X) \\
  \sigma(bX) = \sqrt{b^2(var(X))}
  $$

  - Two Variables X and Y
    $$
    var(X + Y) = var(X) + var(Y) {\color{BurntOrange}+} 2cov(X,Y) \\
    var(X-Y) = var(X) + var(Y) {\color{BurntOrange}+} 2cov(X,Y)
	$$

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/07%20covariance.jpg){:height="40%" width="40%"}
  
- [covariance 协方差](https://www.zhihu.com/question/20852004)
$$
cov(X,Y) = E{[(X-\mu_x)(Y-\mu_y)]}
$$
公式简单翻译一下是：**如果有X,Y两个变量，每个时刻的“X值与其均值之差”乘以“Y值与其均值之差”得到一个乘积，再对这每时刻的乘积求和并求出均值（其实是求“期望”，但就不引申太多新概念了，简单认为就是求均值了）。**

## 5. [Normal Probability Distribution 正态分布](https://suntarliarzn.github.io/2019/05/19/Introduction-to-Computational-Thinking-and-Data-Science-(3).html#33-normal-distribution)

- 表达式

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/10%20equation%20for%20normal%20distribution.jpg){:height="40%" width="40%"}

- ### 公式

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/11%20equation%20explaination.jpg){:height="40%" width="40%"}
  $$
  f(x) = {1\over\sqrt{2\pi}\sigma} * e^{-{1\over2}*({x-\mu\over\sigma})^2}
  $$

  - μ:总体期望均值

  - σ^2:方差

  - x:随机变量

  - **Z score**
    $$
    {x-\mu}\over{\sigma}
    $$
    

- μ& σ

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/08%20normal%20distribution.jpg){:height="40%" width="40%"}

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/09%20cummulative%20denstiy%20distribution.jpg){:height="40%" width="40%"}



## 6.[Empirical Rule(68-95-99.7 法则)]([https://suntarliarzn.github.io/2019/09/03/Khan-Academy-AP-Statistics-Basics-(1).html#9-normalgaussian-distribution-%E6%AD%A3%E6%80%81%E9%AB%98%E6%96%AF%E5%88%86%E5%B8%83](https://suntarliarzn.github.io/2019/09/03/Khan-Academy-AP-Statistics-Basics-(1).html#9-normalgaussian-distribution-正态高斯分布)

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/12%20z%20score.jpg){:height="40%" width="40%"}

## 7. Z-Score

- z-score

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/14%20z%20score.jpg){:height="40%" width="40%"}

- standardized data

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/13%20standardize%20data.jpg){:height="40%" width="40%"}
  
- How to calculate Z-score?

<video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/407%20The%20standard%20normal%20distribution.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/14%20z%20score.jpg">
      </video>

## 8. [Binominal Distribution 二项分布]([https://suntarliarzn.github.io/2019/09/03/Khan-Academy-AP-Statistics-Basics-(1).html#16-%E4%BC%AF%E5%8A%AA%E5%88%A9%E5%88%86%E5%B8%83bernoulli-distribution](https://suntarliarzn.github.io/2019/09/03/Khan-Academy-AP-Statistics-Basics-(1).html#16-伯努利分布bernoulli-distribution)

- binomial distribution=discrete probability distribution

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/16%20binominal%20probability.jpg){:height="40%" width="40%"}

- 公式

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%204/15%20binominial%20equation.jpg){:height="40%" width="40%"}

- 属性
  $$
  \mu = n * p
  $$

  $$
  \sigma = \sqrt{np(1-p)}
  $$

  *n*: trials

  *p*: probability of success