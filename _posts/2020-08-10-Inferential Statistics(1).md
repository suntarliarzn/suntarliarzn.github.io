---

title: Inferential Statistics -（01）Introduction
key: 20200810

tags: Statistics; R;  Inferential Statistics; 2 independent proportions; 2 independent means; 2 dependent proportions; 2 dependent means; controlling variables; Simpson's paradox;

layout: article

mathjax: true

mathjax_autoNumber: true

---

# Inferential Statistics - (01) Introduction

*<!--more-->*

## 1. Power(1-β)

power is the probability of correctly rejecting H0.(1-β)

- **Type I error(false positive)**: H0 is rejected when H0 is true.

  - **Solution:** decrease significance level α(0.05->0.01)::arrow_right:larger Z/T-score:arrow_right:wider CI:arrow_right: harder to reject H0:arrow_right:H0 more likely to be true.

- **Type II error(false negative)(β)**: H0 is accepted when H0 is false.

  - **Solution**: lower standard error:arrow_right:less β; more power(1-β):arrow_right:narrower CI:arrow_right:harder to accept H0:arrow_right:H0  more likely to be false
    $$
    se=\frac{S}{\sqrt{(n)}}
    $$
    

    - smaller standard deviation

      - **more reliable instruments**
      - **more homogeneous sample**

    - larger sample

      - selecting a stronger manipulation
      - more responsive sample

    - **parametric test> non-parametric test**: assumptions about population distribution and parameters.(**more power(1-β)**)

    - [非参数检验（parametric test）](https://zhuanlan.zhihu.com/p/49472487)

      参数检验通常是假设总体服从正态分布，样本统计量服从T分布的基础之上，对总体分布中一些未知的参数，例如总体均值、总体方差和总体标准差等进行统计推断。如果总体的分布情况未知，同时样本容量又小，无法运用中心极限定理实施参数检验，推断总体的集中趋势和离散程度的参数情况。这时，可以用非参数检验，非参数检验对总体分布不做假设，直接从样本的分析入手推断总体的分布。

      与参数检验相比，非参数检验适用范围广，特别适用于小样本数据、总体分布未知或偏态、方差不齐及混合样本等各类型数据。二者的对比如下图：

      ![](https://pic3.zhimg.com/80/v2-f1aef2b235a2f28a534052d8fd47aa55_1440w.jpg)

    - 非参数检验常用的检验方法表

      ![](https://picb.zhimg.com/80/v2-4b80dad4e155abc71c4b77d896860e81_1440w.jpg){:height="60%" width="60%"}

- ### Estimate power

  1. **post-hoc**: estimate power **after** the data have been collected.

  2. **a priori**: estimate power **before** we collect any data. 

     - ### [standard effect size(S/M/L)](https://www.simplypsychology.org/effect-size.html)

       Effect size is a quantitative measure of the magnitude of the experimenter effect. The larger the effect size the stronger the relationship between two variables.BI

       - [安利一款超好用的效应量（effect size）计算工具](https://zhuanlan.zhihu.com/p/126845169)

     - helpful
       - research design
       - test selection
       - feasibility of research

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%201%20introduction/01%20standard%20effect%20size.jpg){:height="60%" width="60%"}

## 2. Two independent proportions

- [z-test](https://suntarliarzn.github.io/2020/05/12/Basic-Statistics(08)-Probability&-Distribution.html#3-population-distribution--sample-distribution--sampling-distribution)

- ### z-test 2 proportions

  1. **Assumptions**

     - independence(random assignment and/or selection)
     - sufficient observations in each sample
       - one-side: 10 negative; 10 positive;
       - two-side: 5 negative; 5 positive;

  2. **Hypotheses**

     1. H~0~: p1-p2 = 0
     2. H~a~: p1-p2 ≠ 0

  3. **Test statistic**

     ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%201%20introduction/02%20z%20test%202%20proportion.jpg){:height="60%" width="60%"}

     

     ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%201%20introduction/z%20test.jpg){:height="60%" width="60%"}

     

  5. **P-value**

     Two-tail probability from standard normal distribution of values even more extreme than observed z test statistic presuming the null hypothesis is true.

  6. **Conclusions**

     - if p <= α, reject H~0~.
     - if p > α, accept H~0~.

- ### Confidence Interval

$$
CI= ({\hat{p}_1-\hat{p}_2}) \pm Z_{\alpha} * \sqrt{\frac{\hat{p}_1*(1-\hat{p}_1)}{n_1}+\frac{\hat{p}_2*(1-\hat{p}_2)}{n_2}}
$$

- Relative risk

  equals ratio of two proportions.

  This is especially useful if the proportions are very small and the relevance of the absolute difference is hard to evaluate.

  eg. medical sciences.

## 3. Two independent means

- [t-test](https://suntarliarzn.github.io/2020/07/31/Basic-Statistics(12)-Hypotheses-and-Significance-Tests.html#4-mean-significane-test-and-confidence-interval)

- ### t-test 2 means

  1. **Assumption**

     - independent observations(random assignment/selection)
     - normally distributed?(one-sided test) (usually > 30)

  2. **Hypotheses**

     - H~0~: μ1-μ2 = 0
     - H~a~: μ1-μ2 ≠ 0

  3. **Test statistic**

     ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%201%20introduction/03%20t%20test%202%20means.jpg){:height="60%" width="60%"}

  4. **P-value & Conclusion**

     ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%201%20introduction/04%20p-value.jpg){:height="60%" width="60%"}

- Alternative calculation

  1. **Assumption**

     - independent observations(random assignment/selection)
     - normally distributed?(one-sided test) (usually > 30)
     - **equal variances**

  2. **Hypotheses**

     - H~0~: μ1-μ2 = 0
     - H~a~: μ1-μ2 ≠ 0

  3. **Test statistic**

     ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%201%20introduction/05%20t%20test%202%20means%20alternative.jpg){:height="60%" width="60%"}

  4. **P-value & Conclusion**

- two ways comparison

  - **unequal variance(usually preferred)**
    - safer
    - just as good
  - **equal variance**
    - larger df
    - smaller 
    - larger chance to correctly reject H~0~

- ### Confidence Interval between two means

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%201%20introduction/06%20CI%202%20means.jpg){:height="60%" width="60%"}

- ### [Permutation test 置换检验](https://www.bioinfo-scrounger.com/archives/564/)

  This test derives the sampling distribution by considering all possible (or a large sample of random) permutations of the original data. A permutation is one particular way of dividing the (n~1~+n~2~) observations into two groups of size n~1~ and n~2~, respectively. For each such permutation, the test statistic (e.g., the difference in the sample means) is computed from the resulting dataset.

  - **Assumptions**
    - A quantitative response variable observed in each of two groups.
    - Independent random samples, either from random sampling or a randomized experiment. For an experiment, the assumption of a random sample of subjects is not necessary as long as the subjects are assigned to the two groups.
  - **Hypotheses**
    - H~0~: μ~1~-μ~2~ = 0
    - H~a~: μ~1~-μ~2~ ≠ 0
  - **Test Statistic**
    - The difference (x~1~-x~2~) of sample means.
  - **P-Value**
    - The P-Value is the proportion out of all possible permutations with a test statistic as extreme or even more extreme than the observed test statistic. 
      - When the number of all possible permutation is too large, a random sample of a large number of permutations( such as 10000) is considered.
  - **Conclusion**
    - Smaller P-Value give stronger evidence against H~0~ and supporting H~a~. Reject H~0~ if P-Value ≤ significance level(0.05)

## 4. Two dependent proportions

- pairs/same cases-->eliminates random errors

- ### McNemar's test

  - **Assumptions**
    - sufficient observations
      - 1-sided: n~01~+n~10~≥30
      - 2-sided: no lower limit
  - **Hypotheses**
    - H~0~:p~1~=p~2~-->n~01~=n~10~
    - H~a~:p~1~≠p~2~-->n~01~≠n~10~
  - **Test statistic: z-test**
    - ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%201%20introduction/07%20z%20test%202%20dependent%20proportions.jpg){:height="60%" width="60%"}
  - **P-Value & Conclusion**
    - ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%201%20introduction/08%20z%20test%202%20dependent%20proportions%20p%20value.jpg){:height="60%" width="60%"}

## 5. Two dependent means

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%201%20introduction/09%20t%20test%202%20dependent%20means.jpg){:height="60%" width="60%"}

- **CI**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%201%20introduction/10%20t%20test%202%20dependent%20means.jpg)c



## 6 [Controlling for other variables](https://suntarliarzn.github.io/2019/11/09/Social-Science-Quantitative-methods(02)-The-method.html#variable)

<video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%201%20introduction/4.1.09%20Controlling%20for%20other%20variables.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/04%20t%20score.jpg">
</video>

- **Controlling variables**
  - experimental
    - randomization
    - keeping constant--> turn into constant 将变量变为常量。
  - statistical
    - measure and check at every level of control variable

- Possible explanations of other variables

  - Confounder (lurking variable)--A common cause of dependent and independent variables, resulting in a spurious relation.

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%201%20introduction/11%20confunder.jpg){:height="60%" width="60%"}

  - Moderator--The relation becomes weaker or stronger.

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%201%20introduction/12%20moderator.jpg){:height="60%" width="60%"}

  - Mediator--intermediate

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%201%20introduction/13%20intermidiate.jpg)

- ### [Simpson's paradox]([https://baike.baidu.com/item/%E8%BE%9B%E6%99%AE%E6%A3%AE%E6%82%96%E8%AE%BA/4475862?fromtitle=Simpson%27s%20paradox&fromid=11319487&fr=aladdin](https://baike.baidu.com/item/辛普森悖论/4475862?fromtitle=Simpson's paradox&fromid=11319487&fr=aladdin))(田忌赛马！不看总量，只看比率都是算流氓！)

  <video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/607%20Example.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%206/04%20t%20score.jpg">
        </video>
