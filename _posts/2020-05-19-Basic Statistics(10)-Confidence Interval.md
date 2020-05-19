---

title: Basic Statistics(10)-Confidence Interval
key: 20200519

tags: Statistics; Confidence Interval; Confidence Level; Sample Size; 

layout: article
mathjax: true
mathjax_autoNumber: true

---

# Basic Statistics - (10) Confidence Interval

<!--more-->

## 1. Inferential Statistics

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/inferential%20statistics.jpg){:height="40%" width="40%"}

- Estimation
  - a point estimate
  - **an interval estimate is   a range of numbers** which, most likely, contains the actual population value.

## 2. Confidence Interval(CI)

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/02%20confidence%20interval.jpg){:height="40%" width="40%"}

- **公式**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/03%20formula%20of%20CI.jpg){:height="40%" width="40%"}

## 3. CI for mean with unknown population

- It is impossible to compute the confidence interval because we usually don't **know the value of the population standard deviation.**

  - $$
    \overline{x} \pm 1.96*\sigma_{\overline{x}}
    $$

  - $$
    \sigma_{\overline{x}} = \frac{\sigma}{\sqrt{n}}
    $$

  - 总数标准差未知。

- ### [**T Distribution**](https://suntarliarzn.github.io/2019/09/03/Khan-Academy-AP-Statistics-Basics-(1).html#16-t-distribution-vs-z-distribution)

  - The **T distribution** (also called **Student’s T Distribution**) is a family of distributions that look almost identical to the [normal distribution ](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/normal-distributions/)curve, only a bit shorter and fatter. The t distribution is used instead of the normal distribution when you have small samples (for more on this, see: [t-score vs. z-score](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/hypothesis-testing/t-score-vs-z-score/)). The larger the [sample size](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/find-sample-size/), the more the t distribution looks like the normal distribution. In fact, for sample sizes larger than 20 (e.g. more degrees of freedom), the distribution is almost exactly like the normal distribution.

  - [T table](http://www.ttable.org/)

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/04%20t%20score.jpg){:height="40%" width="40%"}

  - <video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/603%20CI%20for%20mean%20with%20unknown%20population%20sd.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/04%20t%20score.jpg">
          </video>

  - 2 assumptions

    - randomization sampling
    - approximately normal population distribution
      - **be wary of extreme outliers**

## 4. CI for proportions

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/05%20formula%20of%20proportion.jpg){:height="40%" width="40%"}

- It is impossible to compute the confidence interval because we usually don't **know the value of the population standard deviation.**

  - 

  $$
  p \pm 1.96*\sigma_p
  $$

  - 

  $$
  \sigma_p = \sqrt{\frac{\pi(1-\pi)}{n}}
  $$

  - the population standard deviation **pi** is unknown.

- **公式**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/06%20ci%20for%20proportion.jpg){:height="40%" width="40%"}

  - ### 二项样本分布：stick to standard normal distribution

  - 1 assumption

    - **at least 15 successes and 15 failures.**
      $$
      \begin{align*}
      np &\geq15 \\ 
      n(1-p) &\geq 15
      \end{align*}
      $$
      

## 5. Confidence Level

- We have to compromise between **confidence** and **precision**.

  As one gets better, the other gets worse.

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/07%20confidence%20level.jpg){:height="40%" width="40%"}



## 6. Sample Size

- Mean

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/08%20mean%20sample%20size.jpg){:height="40%" width="40%"}

  - $$
    n = \frac{\sigma^2 * z^2}{m^2}
    $$

  - *m*: margin of error 容错区间。

  - \sigma: educated guess

- Proportion

  - $$
    n= \frac{p(1-p) z^2}{m^2}
    $$

  - safe approach最大数值

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/09%20proportion%20sample%20size.jpg){:height="40%" width="40%"}



## 7. Example

<video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/607%20Example.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/04%20t%20score.jpg">
      </video>