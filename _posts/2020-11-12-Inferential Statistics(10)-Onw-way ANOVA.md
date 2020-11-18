---

title: Inferential Statistics(10)-ANOVA

tags: Statistics; R;  Inferential Statistics; ANOVA; multiple categorical explanatory variable; one quantitative response variable; F-TEST; pairwise comparison; factorial analysis; two-way ANOVA; Multiple Regression; main effect; interaction;

layout: article

mathjax: true

mathjax_autoNumber: true

---

# Inferential Statistics(10) - ANOVA

<!--more-->

## 1. ANOVA

A quantitative response variable has a categorical explanatory variable.

- **ANOVA(analysis of variances)**: the inferential method of comparing means of several groups
- **factor**: categorical explanatory variables in multiple regression and in ANOVA.
  - **one-way ANOVA**: single factor
  - **two-way ANOVA**: two factors

## 2. One-way ANOVA--F test

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/01%20variance.jpg){:height="60%" width="60%"}

- F test:[Inferences Using Multiple Regression](https://suntarliarzn.github.io/2020/10/12/Inferential-Statistics(8)-Multiple-Regression.html#2-inferences-using-multiple-regression)
  
- ANOVA can be presented as a special case of multiple regression.
  
- **Assumption**

  - Independent random samples(random sampling or a randomized experiment)
  - normal population distributions with equal standard deviations.

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/03%20assumption.jpg){:height="60%" width="60%"}

- **Hypotheses**

  - $$
    H_0:\mu_1=\mu_2=...=\mu_g \\
    H_a: at \ least \ two \ of \ the \ population \ means \ are \ not \ equal.
    $$

- **F test**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/02%20F%20test.jpg){:height="60%" width="60%"}

  - $$
    F = \frac{Between-groups \ variability}{Within-groups \ variability} \\
    df_1=g-1 \\
    df_2=N-g
    $$

  - Between-groups variability(**MS Group**)

    - $$
      \frac{n_1(\overline{y_1}-\overline{y})^2+n_2(\overline{y_2}-\overline{y})^2+n_3(\overline{y_3}-\overline{y})^2+...+n_g(\overline{y_g}-\overline{y})^2}{g-1}
      $$

    - $$
      \overline{y_1},\overline{y_2}...\overline{y_g}
      $$

      denote the group sample means

    - $$
      \overline{y}
      $$

      denotes the mean of means of groups(grand mean)

  - Within-groups variability(**MS Error**)

    - $$
      s^2 = \frac{s_1^2 + s_2^2+s_3^2...+s_g^2}{n-g}
      $$

    - s1,s2,...summarize the variation of the observations within the groups.

- **P-value**

  - right-tail probability above observed F-value

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/04%20ANOVA.jpg){:height="60%" width="60%"}

- **Conclusion**

  - reject H0 if P-value < significance level

<video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/4.5.02%20One-way%20ANOVA%20-%20Assumptions%20and%20F-test.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/04%20ANOVA.jpg">
      </video>



## 3. One-way ANOVA --Single Pairwise Comparison*(Post-hoc t-test)&Confidence Interval

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/05%20single%20test.jpg){:height="60%" width="60%"}

- **Assumptions**

  - independence
  - normality
  - homogeneity of variances

- **T-test**

  - $$
    t= \frac{\overline{y}_i-\overline{y}_j}{\sqrt{MSE}*\sqrt{\frac{1}{n_i}+\frac{1}{n_j}}}
    $$

  - $$
    CI=(\overline{y}_i-\overline{y}_j) \pm t_{\alpha/2} *{\sqrt{MSE}*\sqrt{\frac{1}{n_i}+\frac{1}{n_j}}} \\
    df_2=N-g
    $$
    

- **Note: MSE is based on Sum of Squares of within all groups not just group i and j.**
  
  - When the standard deviations are quite different, with the ratio of the largest to smallest exceeding about 2, it is preferable to use the **separate standard deviation.**
  
    - $$
      CI_{large \ deviation}=(\overline{y}_i-\overline{y}_j) \pm t_{\alpha/2}*\sqrt{\frac{s^2_i}{n_i}+\frac{s^2_j}{n_j}}
	$$

- **P-value**

  - ### **Family-Wise Error Rate(FWER)**

    the probability of at least one false rejection of H0

    - **Bonferroni**

      - $$
        corrected \ \alpha =\frac{desired \ overall\ \alpha (FWER)}{numver \ of \ comparisons}
        $$

      - error probability 0.05/5=0.01

      - FWER<= overall a

      - conservative :arrow_right:less power! too strict!

    - **Tukey's Honestly Significant Difference(HSD)**

      - FWER ≈desired overall a
      - more powerful tests
      - calculated with software



## 4. Two-way ANOVA(factorial analysis)

- two or more factors

- **one dependent variable**

- :crossed_swords:    multivariate ANOVA(factor analysis)

  - two or more dependent variables

- ### Main effect

  - The effects of individual factors tested with these two null hypotheses(each level of factors)

- ### Interaction effect

  - Two-factor analysis with 2x2 design
  
- **test for each effect**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/06%20factorial%20analysis.jpg){:height="60%" width="60%"}

  - The main effect for a factor

    - 

    $$
    F= \frac{MS \ for \ the \ factor}{MS \ error}
    $$

    - The MS for the factor is a variance estimate based on between-groups variation for that factor.

  - The interaction effect

    - $$
      F = \frac{MS \ for\ interaction}{MS \ error}
      $$

- ### Over-all F-test

  - **Assumptions**

    - independent observations(random sampling)
    - response variables should be normally distributed (n>10 in each group)
    - homogeneous varainces
      - 2 * smallest sd >= largest sd

  - **Hypotheses**

    - Main effect

      - 

      $$
      H_0: \mu_r = \mu_c \&  \mu_r = \mu_c \\
      H_a: \mu_r \neq \mu_c \ or/and \ \mu_r \neq \mu_c
      $$

    - Interaction effect

      - $$
        H_0: \mu_{rp}-\mu_{cp}= \mu_{rf}-\mu_{cf} \\
        H_a:\mu_{rp}-\mu_{cp} \neq \mu_{rf}-\mu_{cf}
        $$

        

  - **F-test**

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/07%20overall%20f-test.jpg){:height="60%" width="60%"}

  - **p-value**

    - [F-table P=0.05](http://www.tutor-homework.com/statistics_tables/f-table-0.05.html)

      ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/09%20p%20value.jpg){:height="60%" width="60%"}

    - the P-value is the right-tail probability above the observed F value. That is, it is the probability (presuming H0 is true) of even more extreme results than we observed in the sample.

  - **Interpretation**

    - Use [confidence intervals](https://suntarliarzn.github.io/2020/10/12/Inferential-Statistics(8)-Multiple-Regression.html#single-test) to investigate the sizes of the main effects. 

      - $$
        (\overline{y}_i-\overline{y}_j) \pm t_0.025*se \\
        se = s*\sqrt{\frac{1}{n_i}+\frac{1}{n_j}}
        $$

      - s is the square root of the MS error

      - df = df for MS error

    - Confidence intervals can be constructed by multiple regression line.

  - **Post-hoc comparison**

    - **CHECK INTERACTION BEFORE MAIN EFFECT**

      ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/08%20pairwise%20comparison.jpg){:height="60%" width="60%"}

      - It is not meaningful to test the main effects hypotheses when there is interaction. A small P-value in the test of H0: no interaction suggests that each factor has an effect, but the size of effect for one factor varies according to the category of the other factor. Then, you should investigate the nature of the interaction by plotting the sample cell means, using a plot like Figure 14.6. You should compare categories of one factor separately at different levels of the other factor.

    - **Adjusted SS**

      ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/10%20interaction%20and%20main%20effect.jpg){:height="60%" width="60%"}

      - When conducting a two-way ANOVA for samples of different sizes, the analysis (using software) will often have to be performed as a General Linear Model. Notice that the Analysis of Variance table here shows both a Seq SS and an Adj SS column. **You should use the Adjusted SS and Adjusted MS for the tests**.



## 5. Factorial Analysis Example

<video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/4.5.05%20Factorial%20ANOVA%20-%20Assumptions%20and%20tests.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/04%20ANOVA.jpg">
      </video>



## 6. ANOVA and Regression

ANOVA = Multiple Regression

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%206%20ANOVA/11%20regression%20and%20anova.jpg){:height="60%" width="60%"}