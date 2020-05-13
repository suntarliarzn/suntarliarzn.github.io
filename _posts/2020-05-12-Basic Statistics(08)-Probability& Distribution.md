---

title: Basic Statistics(08)-Sampling Distribution
key: 20200512

tags: Statistics; Probability Distribution; Sampling Distribution; Central Limit Theorem; Binominal Sampling Distribution;

layout: article

mathjax: true

mathjax_autoNumber: true

---

# Basic Statistics - (08) Sampling Distribution

<!--more-->

## 1. Inferential Statistics

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%205/01%20inferential%20statistics.jpg){:height="40%" width="40%"}

Methods to draw conclusion about **a population** based on data coming from **samples**.

- ### Sampling methods

  1. Simple Random Sample

     ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%205/02%20simple%20random%20sample.jpg){:height="40%" width="40%"}

     Each subject has the same choice to be chosen.

  2.  [Random Multi-stage Cluster Sample](https://suntarliarzn.github.io/2019/12/22/Social-Science-Quantitative-methods(05)-Sampling.html#multi-stage-cluster-sampling-%E5%A4%9A%E9%98%B6%E6%AE%B5%E6%95%B4%E4%BD%93%E6%8A%BD%E6%A0%B7)

     ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%205/03%20randm%20multi%20stage%20cluster.jpg){:height="40%" width="40%"}

     - :+1: unknow sampling frame

  3. [Stratified Random Sample](https://suntarliarzn.github.io/2019/12/22/Social-Science-Quantitative-methods(05)-Sampling.html#stratified-random-sampling-分层随机抽样slicing-切片)

     ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%205/04%20stratified%20sampling.jpg){:height="40%" width="40%"}

     - :+1: More representative in every stratum
     - :crossed_swords:Must know sampling frame 



## 2. Sampling Distribution and Central Limit Theorem

- ### [Sampling Distribution](https://suntarliarzn.github.io/2019/09/03/Khan-Academy-AP-Statistics-Basics-(1).html#14-sampling-distribution-of-the-sample-mean-样本均值的抽样分布)

  **With infinite number of samples,**Distribution of sample means is bell-shaped with a mean equal to the population mean.

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%205/05%20sampling%20distribution.jpg){:height="40%" width="40%"}

- ### [Central Limit Theorem](https://suntarliarzn.github.io/2019/09/03/Khan-Academy-AP-Statistics-Basics-(1).html#13-central-limit-theorem-中心极限定理)

  - the sampling distribution of sample mean x_bar is approximately normal (provided that n is sufficiently large).

  - **even if the variable is not normally distributed in the population.(n>30)**

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%205/06%20sample%20mean.jpg){:height="40%" width="40%"}

- Sample mean
  $$
  \mu_{\overline{x}} = \mu
  $$
  

  
  
  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%205/07%20mean%20example.jpg){:height="40%" width="40%"}
  
- Sample deviation
  $$
  \sigma_{\overline{x}} =  \frac{\sigma} {\sqrt{n}}
  $$

  
  - 总体方差与样本方差正相关。Larger variation in population :arrow_right:larger variation in samples
    - 样本数量与样本方差负相关。Larger n :arrow_right:lower variation in samples(**Central limit theorem!!!**)

## 3. Population distribution & Sample distribution & Sampling distribution

- ### Differences of 3 distributions

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%205/08%203%20distributions.jpg){:height="40%" width="40%"}

  - sample distribution是一次取样分布。
  - sampling distribution **(theoretical distribution)**是无限次取样分布，符合中央极限定理，平均值无限接近总体平均值。
  - population distribution 总体分布。

- Z-score for sample mean

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%205/09%20sample%20mean.jpg){:height="40%" width="40%"}

  这个问题问的是取样平均值在某个区间的概率，应该**利用sampling distribution来进行计算。**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%205/10%20sample%20and%20subjects.jpg){:height="40%" width="40%"}

## 4. Binominal Sampling Distribution

- Sampling Distribution of Sample Proportion

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%205/11%20sample%20proportion.jpg){:height="40%" width="40%"}

  - Sample space
    $$
    n * \pi >= 15
    $$
    
    $$
n(1-\pi) >= 15
    $$
    
    
    
    
  n为每次sample取样，样本个数。所以，一次取样样本量小的话，sampling distribution将不准确。
    
  - mean
    $$
    \mu_p =\pi
    $$
    
  
    pi为事件成功概率。
    
  - deviation
    $$
    \sigma_{p}^2 =\frac{\pi(1-\pi)}{\sqrt{n}}
    $$
    
    
    注：[二项分布总体方差](https://suntarliarzn.github.io/2019/09/03/Khan-Academy-AP-Statistics-Basics-(1).html#16-伯努利分布bernoulli-distribution):
    $$
    \sigma^2 = p(1-p)
    $$
    

## 5. Example

<video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%205/507%20Example.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/order%20low%20to%20high.jpg">
      </video>

## 6. Conclusion

无论是二项分布还是正态分布：

1. **无限次样本量的平均值（sampling mean）都无限接近总体平均值（population mean）。**
2. **由于中央极限定理，无限次样本会趋中，所以方差需要除以样本个数，以降低趋中趋势。*