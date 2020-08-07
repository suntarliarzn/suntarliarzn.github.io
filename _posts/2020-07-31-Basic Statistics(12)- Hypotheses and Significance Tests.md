---

title: Basic Statistics(12)-Hypotheses and significance tests
key: 20200729

tags: Statistics; Hypotheses; Significance tests; P; 

layout: article
mathjax: true
mathjax_autoNumber: true

---

# Basic Statistics - (12) Hypotheses and Significance Tests

<!--more-->

## 1. Hypotheses(由样本出现概率反推假设是否成立)

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%207/01%20hypothesis.jpg){:height="80%" width="80%"}

- expectations about population

- **An hypothesis is formulated as a claim that a population parameter takes a particular value or falls within a specific range of values.**

- ### Null-hypothesis testing

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%207/02%20null%20hypothesis%20testing.jpg){:height="80%" width="80%"}

  - **H0**: null hypothesis
    - the parameter you're interested in takes a **specific** value.
    - will be rejected if the data in your sample suggest that it is a highly unlikely expectation.
  - **Ha**: alternative hypothesis
    - the parameter you're interested in falls within an alternative **range** of values.
  - **failing to reject your null hypothesis DOESN'T mean that the null hypothesis is true.**



## 2. Proportion hypothesis（z-score）

<video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%207/702%20Test%20about%20proportion.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/04%20t%20score.jpg">
      </video>

- Significance level(α): 
  - one-tail:0.05
  - two-tail:0.025 (most)



## 3. Step by step plan

<video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%207/704%20Step-by-step%20plan.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/04%20t%20score.jpg">
      </video>



![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%207/04%20hypothesis%20testing%20steps.jpg){:height="40%" width="40%"}

- ### **One warning**:

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%207/03%20H0%26HA.jpg){:height="40%" width="40%"}



## 4. Mean Significane test and Confidence interval

- ### 2 methods of Inferential statistics

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%207/05%20CI%20HT.jpg){:height="40%" width="40%"}

  - **confidence intervals**
    $$
    \\ \overline{x}\pm{t_{95\%}}(SE)   \\where \ SE = \frac{S}{\sqrt{n}}
    $$
    
  - **significance tests**
  
    
    $$
    \\ t = \frac{\overline{x}-\mu_0}{SE}  \\where \ SE = \frac{S}{\sqrt{n}}
    $$
    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%207/06%20the%20relation%20between%20CI%20and%20HT.jpg){:height="40%" width="40%"}

- the conclusion between CI and HT

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%207/07%20CI%20and%20HT%20conclusion.jpg){:height="40%" width="40%"}



## 5. Type I and Type II error

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%207/08%20Type%201%20and%20Tpye%202%20error.jpg){:height="40%" width="40%"}

- ### Type I

  - H0 为真，却被拒绝。
  - 原因
    - **选取样本太过极端会导致这种错误。**（p<0.5）
  - 解决方案
    - Significance level(α)减小，作出错误判断的概率越小。

- ### Tpye II

  - H0为假，却被接受。
  - **选取假设太过极端会导致这种错误。**

- ### [The relation between Tpye I and Type II](https://zhuanlan.zhihu.com/p/140079450)

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%207/09%20alpha%20beta.jpg){:height="40%" width="40%"}

- ### Solution

  **样本量的增加会降低标准误的大小**（标准误=S/根号N，样本本量N越大，标准误越小，反映在图形中就是两个总体（假设总体和实际总体）变得更“细瘦”，所以重合的部分越少，由此代表犯错概率的图形的面积也会变小。



## 6. Example

- Notes:

  1.  always check the assumption
  2.  always draw the sample distribution and check the critical value.

  <video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%207/707%20example.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/04%20t%20score.jpg">
        </video>



## 7. Limitations of ST

- **When a P-value is small, the significance test indicates that the hypothesized value is not plausible, but it tells us little about which potential parameter values are plausible.**
- **"Do not reject H0" does not mean "Accept H0."**
- **Statistical significance does not mean pratical significane.**
  - A small P-value does not tell us if the parameter value differs by much in pratical terms from the value in H0.
- **The P-value cannot be interpreted as the probability that H0 is true.**
- **It is misleading to report results only if they are "statistically significant."**
- **Some tests may be statistically significant just by chance.**
- **True effects may not be as large as initial estimates reported by the media.**