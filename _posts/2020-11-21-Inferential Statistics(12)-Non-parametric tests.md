---

title: Inferential Statistics(12)-Non-parametric tests

tags: Statistics; R;  Inferential Statistics; Non-parametric statistics; Wilcoxon Test; Wilcoxon rank-sum test; Mann-Whitney U test; Kruskal-Wallis test; Sign test; Wilconxon Signed-Rank test; Spearman correlation; runs test for randomness;

layout: article

mathjax: true

mathjax_autoNumber: true

---

# Inferential Statistics(12)-Non-parametric tests

<!--more-->

## 1. Non-parametric statistics

- [t-test](https://suntarliarzn.github.io/2020/08/10/Inferential-Statistics(1)-Introduction.html#t-test-2-means) 
  - to compare 2 independent means
    - **Assumptions**
      - independent observations(random assignment/selection)
      - normally distributed?(one-sided test) (usually > 30)

- [ANOVA](https://suntarliarzn.github.io/2020/11/12/Inferential-Statistics(10)-Onw-way-ANOVA.html#6-anova-and-regression)
  - A quantitative response variable has a categorical explanatory variable.
    - **Assumptions**
      - Independent random samples(random sampling or a randomized experiment)
      - normal population distributions with equal standard deviations.(n in each group ≧ 10)
  
- t-test vs. ANOVA
  
  1. t-test 只关注**两组样本**直接的差异。ANOVA关注**多个样本**。
  2. t-test 假设两组样本**均值相等**，置信区间为**两组差值范围**。
     ANOVA假设**factor(Categorical variable)导致多个样本组均值**，置信区间**可用t-test**计算.
  3. t-test为t分布。ANOVA为F分布。
  
- ### Non-parametric statistics

  - do not assume a particular form of distribution, such as the normal distribution, for the population distribution.

    - 对于总体/样本正态性未知或非正态分布

      - 小样本<20

      - 排列参数（Ordinal/rank）

    - [正态分布检验](https://suntarliarzn.github.io/2020/11/19/Inferential-Statistics(11)-R-5-ANOVA.html#%E6%AD%A3%E6%80%81%E5%88%86%E5%B8%83%E6%A3%80%E9%AA%8C)



## 2. Wilcoxon Test: Comparing Mean Ranks(Two independent samples)

The test comparing two groups based on the sampling distribution of the difference between the sample mean ranks.

- **Assumptions**

  - Independent random samples from two groups
    - random sampling
    - randomized experiment

- **Hypotheses:**

  - $$
    H_0= Identical\ population \ distributions \ for \ the \ two \ groups \\ (this \ impllies \ equal \ population \ mean  \ ranks.)
    $$

  - $$
    H_a = Different \ population \ mean \ ranks \ (two-sided) \\
    H_a = Higher \ population \ mean\ rank\ for \ a \ specified \ group \ (one-sided)
    $$

- **Test statistic:**

  - Difference between sample mean ranks for the two groups

- **P-value**

  - One-tail or two-tail probability depending on Ha, that the difference between the sample mean ranks is as extreme or more extreme than observed.

- **Conclusion**

  - Interpret in context

  

## 3. Large-Sample P-Value Use a Normal Sampling Distribution(Z-test)

Using the normal distribution for the large-sample(n>20) test does not mean we are assuming that the normal distribution for the response variable has a normal distribution. We are merely using the fact that the sampling distribution for the test statistic is approximately normal.

- **Z-test**
  $$
  z = (difference\ between \ sample \ mean \ ranks)/ se
  $$

- **P-Value**

  - Asymp.Sig.(two-tailed)

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%207%20nonparametric%20test/01%20%20Wilcoxon%20test.jpg){:height="60%" width="60%"}

  

## 4. Nonparametric Estimation(CI) Comparing Two Groups

- Additional assumption

  - the population distributions for the two groups have the same shape.

- Point estimate for group difference

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%207%20nonparametric%20test/02%20point%20estimate.jpg){:height="60%" width="60%"}

## 5. Wilcoxon rank-sum test(Mann-Whitney U test) (Two independent samples)

<video id="video" src="https://youtu.be/BT1FKd1Qzjw"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/04%20ANOVA.jpg">
      </video>

- U-test

  - ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%207%20nonparametric%20test/10%20U%20test%201.jpg){:height="60%" width="60%"}

  
- ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%207%20nonparametric%20test/11%20U%20test%202.jpg){:height="60%" width="60%"}
    - where R1 = sum of the ranks for group 1 and R2 = sum of the ranks for group 2.

- In every test, we must determine whether the observed U supports the null or research hypothesis. This is done following the same approach used in parametric testing. Specifically, we determine a critical value of **the smaller U** such that **if the observed value of U is less than or equal to the critical value, we reject H0 in favor of H1 and if the observed value of U exceeds the critical value we do not reject H0.**

- U-table

  <iframe src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%207%20nonparametric%20test/U-table.pdf" max-width=100%; width=100%; border= none; position=absolute; height=100%;  ></iframe>

## 6. Kruskal-Wallis Test: Comparing mean ranks of several group

<video id="video" src="https://youtu.be/q1D4Di1KWLc"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/04%20ANOVA.jpg">
      </video>

- **Assumptions:**

  - Independent random samples from several groups, either from random sampling or a randomized experiment.

- **Hypotheses:**

  - $$
    H_0: Identical \ population \ distributions \ for \ the \ g \ groups \\
    H_a: Population \ distributions \ not \ all \ identical
    $$

- **Test statistic:**

  - Uses between-groups variability of sample mean ranks

  - $$
    K=(\frac{12}{n(n+1)})\sum n_i(\overline{R_i}-\overline{R})^2
    $$

  - ![](https://www.statisticshowto.com/wp-content/uploads/2016/02/h-test.png)

    

    - Ri = sample mean rank
    - R = the combined sample mean of g groups
    - n = total number of data points 
    - df = g-1

- **P-value**

  - test statistic value from [chi-squared distribution](https://suntarliarzn.github.io/2020/08/31/Inferential-Statistics(4)-the-Association-Between-Categorical-Variables.html#2-testing-categorical-variables-for-independence) with df=g-1

  - [chi-square table](https://www.medcalc.org/manual/chi-square-table.php)

    ![](https://www.medcalc.org/manual/_help/images/chi-sq_curve.png)

- **Conclusion**

  - If the P-value is small, to find out which pairs of groups significantly differ, we could follow up the Kruskal-Wallis test by a Wilcoxon test to compare each pair.



## 7. Sign test: Comparing Matched Pairs(Dependent samples)

<video id="video" src="https://www.youtube.com/watch?v=9TlM3ef_oFw&ab_channel=MathsAcademyUK"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/04%20ANOVA.jpg">
      </video>

- **Assumptions**

  - Random sample of matched pairs for which we can evaluate which observation in a pair has the better response.
  - pretend the equal data points do not exist

- **Hypotheses**

  - $$
    H_0: Population \ proportion \ p \ =  \ 0.5 \\
    H_a: \ p ≠ 0.5 \ (two -sided) \\
    or \ H_a: \ p> 0.5 \ or \ p<0.5 \ (one-sided)
    $$

- **Test statistic**

  - $$
    Z = \frac{(\hat{p}-0.5)}{se} \\
    se = \sqrt{(0.5)(0.5)/n}
    $$

- **P-value**

  - for large samples(n>30), use tail probabilities from standard normal. (z-score)

  - for smaller n, use binomial distribution

    - $$
      P(x)=\frac{n!}{x!(n-x)!}p^x(1-p)^{n-x}
      $$

    - [binomial distribution table](https://www.statisticshowto.com/tables/binomial-distribution-table/)



## 8. Wilcoxon Signed-Rank test: Ranking and Comparing Matched Pairs(Dependent samples)

<video id="video" src="https://youtu.be/TqCg2tb4wJ0"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/04%20ANOVA.jpg">
      </video>

- **Assumption**
  
- Random sample of matched pairs for which the differences of **observations have a symmetric population distribution** and can be ranked.
  
- **Hypotheses**

  - $$
    H_0: Population \ median \ of \ difference \ socres \ is \ 0 \\
    H_a: Population \ median \ of \ difference \ scores \ in \ not \ 0 \ (one-sided \ also \ possible)
    $$

- **Test statistic**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%207%20nonparametric%20test/03%20Wilcoxon%20Signed-Rank%20test.jpg){:height="60%" width="60%"}

  - Rank the absolute values of the difference scores for the matched pairs
  - find the sum of ranks for those differences that were positive

- **P-value**

  <iframe src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%207%20nonparametric%20test/Wilcoxon%20signed%20rank%20test%20Table2005.pdf" max-width=100%; width=100%; border= none; position=absolute; height=100%;  ></iframe>

  - a P-value based on all the possible samples with the given absolute differences
  - for large samples, it uses an approximate normal sampling distribution.

- **Conclusion**

  - **the smaller W** such that **if the observed value of W is less than or equal to the critical value, we reject H0 in favor of H1 and if the observed value of W exceeds the critical value we do not reject H0.**

- ### Notes:

  - Because of Wilcoxon signed ranks test's extra assumption of **Symmetry**, many statisticians prefer to use the matched pairs [t test](https://suntarliarzn.github.io/2020/08/10/Inferential-Statistics(1)-Introduction.html#t-test-2-means) for such data.

  - [How to select the right t-test to compare two sample means?](https://www.youtube.com/watch?v=uwTYD60nng4&list=PLfGMkZaH76AmBzace1FjpQveu80dmC-80&index=10&ab_channel=EugeneO%27Loughlin)

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%207%20nonparametric%20test/04%20select%20the%20right%20t%20test.jpg){:height="60%" width="60%"}



## 9. Spearman ranked correlation

- Correlation coefficient = standardized measure of association

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%207%20nonparametric%20test/05%20spearman%20correlation.jpg){:height="60%" width="60%"}

| Pearson                                                      | Spearman                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Parametric                                                   | Non-parametric                                               |
| [-1,1]                                                       | [-1,1]                                                       |
| 1. linear association<br />2. variables are bivariate normally distributed<br />3.sensetive to outliers and skewedness | 1. non -linear association<br />2. measures strength of monotonic function(单调函数)<br />3. ordinal variable<br />4. can contain outliers<br />5. non-normal distribution is okay |

<video id="video" src="https://youtu.be/DE58QuNKA-c"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/04%20ANOVA.jpg">
      </video>

## 10.  Runs Test for Randomness

A runs test is a statistical procedure that examines whether a [string of data](https://www.investopedia.com/terms/d/data-analytics.asp) is occurring randomly from a specific [distribution](https://www.investopedia.com/terms/n/normaldistribution.asp). The runs test analyzes the occurrence of similar events that are separated by events that are different.

- A run is a succession of identical values or labels which are followed and preceded by different values or labels.

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%207%20nonparametric%20test/06%20a%20run.jpg){:height="60%" width="60%"}

- two variation form

- ### run test properties

  - only consider binominal data

  - numerical data

    - values above/below mean
    - increasing/decreasing values

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%207%20nonparametric%20test/07%20run%20test%20variation.jpg){:height="60%" width="60%"}

  - more than two categories

    - aggregate to two

  - ordering is crucial

    - **don't re-arrange data**

- runs test

  count number of runs in the data.

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%207%20nonparametric%20test/08%20run%20test%20n%20number.jpg){:height="60%" width="60%"}

  - group sizes: m or n <10 :arrow_right: probability table
  - m or n > 10 :arrow_right: z-test
    - ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%207%20nonparametric%20test/09%20z%20test%20for%20runs.jpg){:height="60%" width="60%"}
      - total sample size N = m + n

<video id="video" src="https://youtu.be/NvWm7-QD3DQ"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/04%20ANOVA.jpg">
      </video>