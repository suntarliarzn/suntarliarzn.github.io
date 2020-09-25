---

title: Inferential Statistics(06)-Describing Quantitative Association

tags: Statistics; R;  Inferential Statistics; Quantitative Association; Linear Regression; r; r^2; residual; ANOVA table; Exponential regression;

layout: article

mathjax: true

mathjax_autoNumber: true

---

# Inferential Statistics(06) - Describing Quantitative Association

<!--more-->

## 1. Regression Analysis with samples

1. ###  [the Correlation r](https://suntarliarzn.github.io/2020/04/12/Basic-Statistics(3)-Correlation-&-Regression.html#2-pearsons-r)

   - r=[-1,1]
   - the larger the absolute value of r, the stronger the linear association.

2. ### [Least Squares Line](https://suntarliarzn.github.io/2020/04/12/Basic-Statistics(3)-Correlation-&-Regression.html#ordinary-least-square-regression-%E6%9C%80%E5%B0%8F%E4%BA%8C%E4%B9%98%E6%B3%95)

- Let x denote the mean of x, y the mean of y, **S<sub>x</sub> the standard deviation of the x values, and S<sub>y</sub> the standard deviation of the y values.**
  
- $$
  \hat{y}=b*x + a \\
  b = r(\frac{S_y}{S_x}) \\
  a= \overline{y}-b\overline{x}
  $$

- $$
  sum \ of \ squared \ residuals\ = \sum{(residual)^2}=\sum(y-\hat{y})^2
  $$

- 
  $$
  \mu_y=\alpha + \beta*\chi \\ with \ \sigma= standard \ deviation
  $$

  
3. ### Residual

   The difference y-y^ between an observed outcome y and its predicted value y^ is the *prediction error*, called a **residual**.

   - A residual is the vertical distance between the data point and the regression line.
   - The smaller the distance, the better the prediction.

## 2. Regression Model with population

- A **model** is a simple approximation for how variables relate in a population.

- **Conditional distribution** is the probability distribution of y values at a fixed value of χ.

- A **regression model** describes how the population mean μ_y of each conditional distribution for the response variable depends on the value  χ of the explanatory variable.

- a straight-line model:

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/01%20regression%20model.jpg){:height="60%" width="60%"}

## 3. Significance Test About a Population Slope β


1. **Assumptions**:

   1. Relationship in population satisfies regression model

   2. data gathered using randomization

   3. population y values at each x value have normal distribution, with same standard deviation at each x value.

2. **Hypotheses**

   - H<sub>0</sub>: β=0 (x is independent from y)
   - H<sub>a</sub>: β≠0

3. **Test statistic**
   $$
   t = \frac{(b-0)}{se_b}
   $$
   
4. **P-value**

   Two-tail probability of t test statistic value more extreme than observed, **using t distribution with df=n-2.**

5. **Conclusion**

   Interpret P-value in context. If a decision is needed, reject H<sub>0</sub> if P-value ≦ significance level.

## 4. Confidence Interval for β

$$
\beta=b \pm t_.025(se) \\
df=n-2
$$

- ### Confidence Interval and Prediction Interval

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/10%20CI%20PI.jpg){:height="60%" width="60%"}

  - The residual standard deviation
    $$
    SD_{res} = \sqrt{\frac{\sum{(y-\hat{y})}^2}{n-2}}
    $$

    - the residual sum of squares
    - n-2 because 2 variables a and b

  - **Confidence Interval**

    -  μ_y refers to the variability of all the y values around their mean y
      $$
      CI_{\mu_y}= \hat{y}\pm2\frac{SD_{res}}{\sqrt{n}}
      $$

  - **Prediction Interval**

    - individual y variability at a fixed x.

    - wider than CI
      $$
      PI_{y_i}=\hat{y}\pm2SD_{res}
      $$

  - **r^2**

    - r^2 gives the proportion of the overall variability in y that can be attributed to the linear regression model.

      ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/11%20r2.jpg){:height="60%" width="60%"}

    

    

## 5. The Strength of Association

- ### *r*

  - correlation

  - If an x value is a certain number of standard deviations from its mean, then the predicted y is r times that many standard deviations from its mean.

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/02%20regression%20toward%20the%20mean.jpg){:height="60%" width="60%"}

- ### *r^2*

  $$
  r^2=\frac{\sum{(y-\overline{y})^2}-\sum{(y-\hat{y})^2}}{\sum{(y-\overline{y})^2}}\\
  where \\   \hat{y} = predicted \ y \ on\ the\ regression\ line \\
  \overline{y} = mean \ of \ y
  $$

  - r^2 is interpreted as the **proportional reduction in error.** 

    - For instance if r^2 = 0.4, the error using y^ to predict y is 40% smaller than the error using y_  to predict y.

  - **Properties of r^2**

    - r^2 falls between 0 and 1

    - r^2=1

      ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/03%20r%3D1.jpg){:height="60%" width="60%"}

      - when y-y^ = 0
      - all the data points fall exactly on the regression line.
      - There is no prediction error using x to predict y.

    - r^2=0

      ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/04%20r%3D0.jpg){:height="60%" width="60%"}

      - when y-y^=y-y-
      - y^=y-
      - slope b=0
      - the regression line and mean give the same predictions.

    - the closer r^2 is to 1, the stronger the linear association.

      - the more effective the regression equation y= a + bx.

- **Correlation r and square r^2**

  - **r**
    - r falls between -1 and 1.
    - It represents by how many standard deviations y is predicted to change when x changes by one standard deviation.
    - regression toward the mean.
  - **r^2**
    - r^2 falls between 0 and 1.
    - It summarizes the reduction in the prediction error when using the regression equation rather than the mean of y.

## 6. Potential Problems with Regression

1. ### Nonlinearity

   ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/07%20nonlinearity.jpg){:height="60%" width="60%"}

   - same r but different shape.

2. ### Outliers

   - check **standardized residuals**

     ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/09%20outliers.jpg){:height="60%" width="60%"}

3. ### [Correlation≠ Causation](https://suntarliarzn.github.io/2020/04/12/Basic-Statistics(3)-Correlation-&-Regression.html#exclamationcorrelationregression--causation-%E7%9B%B8%E5%85%B3%E5%9B%9E%E5%BD%92%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%9B%A0%E6%9E%9C)

4. ### Inappropriate extrapolation

   ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/08%20inapropriate%20extrapolation.jpg){:height="60%" width="60%"}

5. ### Ecological fallacy

   if the subjects are grouped for the observations, such as when the data refer to county summaries instead of individual people. the correlation tends to increase in magnitude.

   - **[Ecological fallacy](https://wiki.mbalib.com/wiki/%E5%8C%BA%E7%BE%A4%E8%B0%AC%E8%AF%AF)**:区群谬误,又称生态谬误，层次谬误，是一种在分析[统计资料](https://wiki.mbalib.com/wiki/统计资料)时常犯的错误。和以偏概全相反，区群谬误是一种以全概偏，如果仅基于[群体](https://wiki.mbalib.com/wiki/群体)的统计数据就对其下属的个体性质作出推论，就是犯上区群谬误。这谬误假设了群体中的所有个体都有群体的性质(因此塑型(Sterotypes)也可能犯上区群谬误)。区群谬误的相反情况为[化约主义](https://wiki.mbalib.com/w/index.php?title=化约主义&action=edit)（Reductionism)。

   ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/05%20ecological%20fallacy.jpg){:height="60%" width="60%"}

6. ### Restriction of range

   the size of the correlation depends on the range of x values sampled: The correlation tends to be smaller when we sample only a restricted range of x values than when we use the entire range.

   ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/06%20reverse%20linear%20relation.jpg){:height="60%" width="60%"}



## 7. The Analysis of Variance(ANOVA) table 

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/12%20ANOVA%20TABLE.jpg){:height="60%" width="60%"}

- Total SS = Regression SS + Residual SS
  $$
  \sum(y-\overline{y})^2=\sum(y-\hat{y})^2+\sum(\hat{y}-\overline{y})^2
  $$
  
- Mean square(MS)

  - Mean square error(MSE)

    MSE is the residual sum of squares divided by tis *df* value
    $$
    s^2=\frac{\sum{(y-\hat{y})^2}}{n-2}
    $$
    
- MSE= (SDres)^2
  
- ANOVA F statistic
    $$
    F=\frac{Mean\ square\ for\ regression(Regression\ SS)}{Mean\ square\ error(MSE)}
    $$
    

## 8. Exponential regression

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/13%20exponential%20regression.jpg){:height="60%" width="60%"}

<video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%202%20Categorical%20association/4.2.06%20Fisher%27s%20exact%20test.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/13%20exponential%20regression.jpg">
      </video>

