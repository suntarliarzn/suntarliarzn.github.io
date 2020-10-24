---

title: Inferential Statistics(08)-Multiple Regression

tags: Statistics; R;  Inferential Statistics; Quantitative Association; Multiple Regression; R; R^2; F-test; Single test; assumptions; categorical predictors; categorical response; interaction;  

layout: article

mathjax: true

mathjax_autoNumber: true

---

# Inferential Statistics(08) - Multiple Regression

<!--more-->

## 1. Regression Analysis with samples

The **multiple regression model** relates the mean μ<sub>y</sub> of a quantitative response variable y to a set of explanatory variables x<sub>1</sub>,x<sub>2</sub>......

- $$
  \mu_y = \alpha + {\beta}_1*x_1+ {\beta}_2*x_2+ {\beta}_3*x_3+....+ {\beta}_m*x_m
  $$

  

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/01%20multiple%20regression.jpg){:height="60%" width="60%"}

- Simple&Multiple regression

  - **Multiple regression**: controlling for other variables.
    - **the model assumes that the slope for a particular explanatory is identical for all fixed values of the other explanatory variables.**(??? not sure about this!!!)
      - 因变量受欢迎程度和变量猫的毛发和年纪两者有关联，但是毛发会随着年纪增加而减少。
      - 因变量房屋的价值和自变量卧室数量、大小等有关联，但卧室数量和大小密切相关。
  - **Simple regression**: ignoring other variables.

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/02%20simpe%20and%20multiple%20regression.jpg){:height="60%" width="60%"}

- scatterplot matrix

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/04%20scatterplot%20matrix.jpg){:height="60%" width="60%"}

## 2. R and R<sup>2</sup>  for Multiple Regression

- ###  Multiple Correlation R[0,1]

  For a multiple regression model, the multiple correlation is the correlation between the observed y values and the predicted y^ values(determined by a set of explanatory variables).

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/03%20multiple%20regression%20R.jpg){:height="60%" width="60%"}

  - correlation matrix

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/05%20correlation%20matrix.jpg){:height="60%" width="60%"}

- ### R<SUP>2</SUP>

   R<sup>2</sup> denotes the proportion of variance in y accounted for by the model.
  
  - $$
    R^2 = \frac{\sum{(y-\overline{y})^2}-\sum{(y-\hat{y})^2}}{\sum{(y-\overline{y})^2}}
    $$

    
  
  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/06%20r2.jpg){:height="60%" width="60%"}
  
  - **Properties of R<sup>2</sup> **
    - R<sup>2</sup> [0,1]
    - R<sup>2</sup>  gets larger or stays  the same at worst, whenever an additional explanatory variable is added to the multiple regression model.
    - The value of R<sup>2</sup> value does not depend on the units of measurement.

## 2. Inferences Using Multiple Regression

- ### Overall test

  - **F-test**

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/07%20overall%20test%20assumpution.jpg)

    1. Assumptions

       - The regression equation truly holds for the population means.

       - The data were gathered using randomization.

       - The response variable y has a normal distribution at each combination of values of the explanatory variables, with the same standard deviation.

    2. Hypothesis
       
       - $$
          H_0:\beta_1=\beta_2=...=\beta_n=0 \\
          H_a: At \ least \ one \ \beta\ parameter\ is\ not\ equal\ to\ 0.
       $$
       
          
       
    3. F-test

       - $$
          F = \frac{Mean\ square\ for \ regression(MSR)}{Mean\ square\ error(MSE)}
          $$

          ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/08%20F%20test.jpg){:height="60%" width="60%"}

          ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/09%20F-TEST.jpg){:height="60%" width="60%"}

       - Degree of freedom

         ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/10%20f-test%20degree%20of%20freedom.jpg){:height="60%" width="60%"}

         - df1 = number of explanatory variables in the model.(自变量个数)
         - df2= n-number of parameters in regression equation.(样本数-（自变量+常数）)

    4. P-Value

       - [p-value](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/11%20p-value.jpg)
       - [F-table](http://www.tutor-homework.com/statistics_tables/f-table-0.05.html)

       - [How to use a F table](https://youtu.be/gzhXvTcdQG8)

    5. Conclusion

       - The smaller the P-value, the stronger the evidence that **at least one explanatory has an effect on y.**

- ### Single test

  **Aim:** to follow up from the F test to investigate which explanatory variables have a statistically significant effect on predicting y.

  - **T-test**

    1. **Assumptions**

       - Multiple regression model  holds for population mean. This implies that there is a linear relationship between the mean of y and each explanatory variable, holding the others constant.
       - The slope of this line is the same, no matter what the values for these other predictors.(**自变量之间不会相互影响！！！**)
         - 思考：现实生活中并不是这样，卧室数量的变化会导致人们对厕所数量看法的变化。

    2. **Hypotheses**:
       
       - $$
          H_0:\beta_i=0, controlling\ for \ other \ predictions \\
          H_a: \beta_i≠0, controlling \ for \ other \ predictions
       $$
       
          
       
    3. **T-test**:

       - $$
          t= (b_i-0)/se \\
          df = n-number \ of\ parameters\ in \ regression \ equation
          $$

          

    4. **P-value**:

       Two-tail probability from t distribution of values larger than observed t test statistic.

    5. **Conclusion**:

  - **Confidence Interval**
    $$
    b_i \pm_\alpha/2 * se_{b_i} \\
    df = n-number \ of \ parameters \ in \ regression \ equation
    $$
    

- Interpretation

  - The F test is typically performed first before looking at the individual t inferences. The F test result tells us if there is sufficient evidence to make it worthwhile to consider the individual effects.

    

## 3. Checking a Regression Model Using Residual Plots

- **Assumptions:**

  1. linearity

     - for each predictor x:**x and y linearly related for any combination of other x**

     ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/12%20assumptions%20for%20each%20variable.jpg){:height="60%" width="60%"}

  2. normality

     - Residuals, which measure the deviations from the mean of y as predicted by the regression equation, should distributed normally.

     - residuals of the overall test!!

     - **Solution: histogram**

       ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/14%20assumptions%20normality.jpg){:height="60%" width="60%"}

       - skew is not a problem as long as the sample size is large.

  3. homoscedasticity 同方差性

     - variance of residuals same over entire range of x

     - 一般来说, 受教育水平越高的人群收入变动越大,而教育水平较低的人群收入相差不会太大 (比如说, 有最低工资法)。这时就出现异方差问题了, 因为e的方差会随着教育水平x的增大而增大。

     - **violation of homoscedasticity**:

       ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/13%20assumptions%20homoscedasticity.jpg){:height="60%" width="60%"}

  4. independence of errors

     - Residuals unrelated
     - **Solution:** random sampling/ random assignment
     - !! time series samples

  5. sufficient observation

     - enough observations:
       - n≥10*the number of predictors

  6. absence of  outliers

     - Inspect standardized residuals more extreme than -3/+3
     - only remove outliers when this is a plausible explanation.

  

## 4. Categorical Predictors

- Binary indicators

  Binary indicators represent not the quantity of a measured property, but its quality. 

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/15%20binary%20predictors.jpg){:height="60%" width="60%"}

- Multiple indicators(dummy variables)

  - Generally, a categorical explanatory variable in a regression model uses one fewer indicator variable than the number of categories.(see below pic)

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/16%20dummmy%20variables.jpg){:height="60%" width="60%"}

  - Why can't we specify the three categories merely by setting up a variable x that equals 1 for homes in good condition, 0 for homes in average condition, and say -1 for poor condition?

    - **Because this would treat condition as quantitative rather than categorical. I t would treat condition as if different categories corresponded to different amounts of the variable. But the variable measures which condition, not how much condition.**

    - **Treating it as quantitative in inappropriate.**

    - 一定要将categorical和quantitative区分！！不要将categorical和quantitative混用，盲目使用量化手段，对数字盲目崇拜。混用两者将制造无尽的混乱。

      - 反例：用quantitative代替categorical，比如高校目标达成度评价。本身中国将分数进行量化成百分值就本不合理，60-70分有多大差距？现在，又将其进行目标细分，每个目标达成度为多少？**目标只有达成与未达成之分，诚然将达成人数和未达成人数统计可以换算为百分比，但这也是binary categories两分法占比，但是现在却拿学生分数作为目标达成比值，比如70分，就是目标达成0.7(70/100)。**0.7目标达成到底是什么意思？学生掌握了知识的70%？那和掌握80%的同学有什么区别？本来categorical(达成/未达成)变成了quantitative(达成程度)，将不可精确量化数值的变量转换为百分数，在数学上完全错误。

        - 相关逻辑谬误---**麦纳马拉谬误(大数据谬误**)[McNamara fallacy](https://www.forbes.com/sites/jonathansalembaskin/2014/07/25/according-to-big-data-we-won-the-vietnam-war/)：

          The **McNamara fallacy** (also known as the **quantitative fallacy**[[1\]](https://en.wikipedia.org/wiki/McNamara_fallacy#cite_note-1)), named for [Robert McNamara](https://en.wikipedia.org/wiki/Robert_McNamara), the [US Secretary of Defense](https://en.wikipedia.org/wiki/United_States_Secretary_of_Defense) from 1961 to 1968, involves making a decision based solely on quantitative observations (or [metrics](https://en.wikipedia.org/wiki/Performance_metric)) and ignoring all others. The reason given is often that these other observations cannot be proven.

          > The first step is to measure whatever can be easily measured. This is OK as far as it goes. The second step is to disregard that which can't be easily measured or to give it an arbitrary quantitative value. This is artificial and misleading. The third step is to presume that what can't be measured easily really isn't important. This is blindness. The fourth step is to say that what can't be easily measured really doesn't exist. This is suicide.
          >
          > — [Daniel Yankelovich](https://en.wikipedia.org/wiki/Daniel_Yankelovich), "Corporate Priorities: A continuing study of the new demands on business" (1972).

          The fallacy refers to McNamara's belief as to what led the United States to defeat in the [Vietnam War](https://en.wikipedia.org/wiki/Vietnam_War)—specifically, his quantification of success in the war (e.g., in terms of enemy [body count](https://en.wikipedia.org/wiki/Body_count)), ignoring other variables.

      - 反例：用categorical代替quantitative, 比如高校科研评价。高校教师科研文章发表数量本身只是一个数字，但经过人为划定，大于某个数值就为好，小于某个数值(quantitative)就是不好（categorical），将数量关系简单转化为两分，非黑即白。这种案例很多很多，人类有简单化评价的倾向，是非、冷暖、好坏，许多对立二元词汇都是二分评价描述，有助于人类进行快速决策。但是，很多事物并非严格对立，并且量变到质变的阈值并不清楚，甚至并不恒定。比如，是否购房决定与房屋大小、位置、卧室数量等变量有关，但卧室数量到达一定数量时，该变量对于购房决定的影响会越来越小，因为很少有人会在意20个卧室和25个卧室有多大区别。所以在统计学中要计算变量之间的Interaction（见下文）。因此，我们要警惕[Occam's razor](https://en.wikipedia.org/wiki/Occam%27s_razor)。虽然我是Less is more的忠实信徒，但同时要记住爱因斯坦的一句话：

        > **“Everything should be made as simple as possible, but no simpler.”**---Einstein

- **Interaction**

  For two explanatory variables, interaction exists when the slope of the linear relationship between μy and one explanatory variable changes as the other explanatory variable changes.

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/18%20interaction.jpg){:height="60%" width="60%"}

  - How do we know whether the interaction shown by the sample is sufficiently large to indicate that there is interaction in the population? 
    - There is **a significance test** for checking this, but it is beyond the scope of this book. In practice,
      **it’s usually adequate to investigate interaction informally by using graphics**. For example, suppose there are two predictors, one quantitative and one categorical. Then you can plot y against the quantitative predictor, identifying the data points by the category of the categorical variable, as we did in Example 11. **Do the points seem to go up or go down at quite different rates, taking into account sampling error? If so, it’s safer to fit a separate regression line for each category, which then allows different slopes.**



## 5. Modeling a Categorical Response

When y is categorical, a different regression model applies, called **logistic regression.**

- ### Logistic regression equation

  A regression equation for an S-shaped curve for the probability of success p is
  
  - $$
    p = \frac{e^{\alpha+\beta x}}{1+e^{\alpha+\beta x}}
    $$
  
    
  
  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/19%20logistic%20regression%20equation.jpg){:height="60%" width="60%"}
  
  - $$
    x= -\frac{\alpha}{\beta}  \\ slope = \frac{\beta}{4}\\ when \ p=0.5
    $$
  
    
  
- Inference for Logistic Regression--z-test
  $$
  z=\frac{\beta-0}{se}
  $$

  
- checking the logistic regression model

  - classification table

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/20%20checking%20the%20logistic%20regression%20model.jpg){:height="60%" width="60%"}



## 6. Example

<video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/4.4.08%20Interpreting%20results.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%205%20multiple%20regression/21%20steps%20of%20mutiple%20regression.jpg">
      </video>