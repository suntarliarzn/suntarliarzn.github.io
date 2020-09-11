---

title: Inferential Statistics（4） -the Association Between Categorical Variables
key: 20200831

tags: Statistics; R;  Inferential Statistics; Categorical Association; Association; Cramér’s V; Goodness of Fit; Fisher's Exact test;

layout: article

mathjax: true

mathjax_autoNumber: true

---

# Inferential Statistics(4) - the Association Between Categorical Variables

<!--more-->

## 1. Independence and Dependence(Association)

- ### Inferential statistics

  - **Single Sampling:arrow_forward:population**: Significance testing & Confidence intervals.
  - **Comparing two proportions/means**: Significance testing & Confidence intervals.
  - **Association between two categorical variables/ quantitative variables.**: chi-square

- ### r-square&chi-square

  - **r-square**:描述的是2个变量（Sample）之间的关系，不能进行推论整体（Population）。
  - **chi-square**:推测多个变量总体（Population）总体关系。

- ### [chi-square](https://www.khanacademy.org/math/statistics-probability/inference-categorical-data-chi-square-tests/chi-square-goodness-of-fit-tests/v/chi-square-distribution-introduction)

  **卡方检验**是一种用途很广的计数资料的[假设检验](https://wiki.mbalib.com/wiki/假设检验)方法。它属于[非参数检验](https://wiki.mbalib.com/wiki/非参数检验)的范畴，主要是比较两个及两个以上样本率( 构成比）以及两个[分类变量](https://wiki.mbalib.com/wiki/分类变量)的关联性分析。其根本思想就是在于比较理论频数和实际频数的吻合程度或拟合优度问题。

  　　它在分类资料[统计推断](https://wiki.mbalib.com/wiki/统计推断)中的应用，包括：两个率或两个构成比比较的卡方检验；多个率或多个构成比比较的卡方检验以及分类资料的[相关分析](https://wiki.mbalib.com/wiki/相关分析)等。



## 2. Testing Categorical Variables for Independence

- ### Expected cell count

  $$
  Expected \ cell \ count = \frac{(Row \ total) * (Column \ total)}{Total\ sample \ size}
  $$

- ### Chi-squared Test Statistic

  $$
  \chi^2=\sum{\frac{(observed \ count-expected \ count)^2}{expected \ count}}
  $$

  
  - #### Chi-squared Distribution

    ![](https://www.seotest.cn/d/file/news/20190925/20170916140534719.png){:height="60%" width="60%"}

    - Always positive

    - Degrees of freedom from row and column
      $$
      df = (r-1)*(c-1)
      $$

    - **Mean equals *df*, standard deviation equals sqrt(2df)**

    - As *df* increases, distribution goes to bell shaped.

    - **Large χ<sup>2</sup> provides evidence against independence**

- ### Five Steps of the Chi-Squared Test

  1. **Assumptions**

     - Two categorical variables
     - Randomization
       - random sampling
       - a randomized experiment

  2. **Hypotheses**

     - H<sub>0</sub>: The two variables are independent.
     - H<sub>a</sub>: The two variables are dependent(associated).

  3. **Test statistic**
     $$
     \chi^2=\sum{\frac{(observed \ count-expected \ count)^2}{expected \ count}}
     $$

     $$
     Expected \ cell \ count = \frac{(Row \ total) * (Column \ total)}{Total\ sample \ size}
     $$

     

  4. **P-value**

     - Right-tail probability above observed  χ<sup>2</sup>  value, for the chi-squared distribution with ***df* = (r-1) * (c-1)**

  5. **Conclusion**

     - reject H<sub>0</sub> when P-value <= significance level

- Misuse of the Chi-Squared Test

  - misuses are interpreting:
    - **a small P-value as automatically providing evidence for a strong and practically meaningful association.**
    - a large P-value as providing evidence for independence.
  - Other misuses are applying the chi-squared test.
    - When some of the expected frequencies are too small.
    - When separate rows or columns are dependent samples(McNemar's test), such as when each row of the table refers to the same subjects.
    - To data that do not result from a random sample or randomized experiment.
    - To data by classifying quantitative variables into categories. This results in a loss of information. It is usually more appropriate to analyze the data with methods for quantitative variables. 

## 3. The Strength of the Association

How strong is the association?

- ### Measure of association

  A measure of association is a statistic or a parameter that summarizes the strength of the dependence between two variables.

  1. Difference of Proportions

  2. Relative Risk

     - The relative risk is often more informative than the difference of proportions for comparing proportions that are both close to 0.

  3. ​    Odds and Odds Ratio

     - This equals p<sub>1</sub>/(1- p<sub>1</sub>) in the first row and  p<sub>2</sub>/(1- p<sub>2</sub>) in the second row.

     - The **odds ratio** is then the ratio of these two odds:
       $$
       odds \ ratio = \frac{p_1/(1-p_1)}{p_2/(1-p_2)}
       $$

       - Values farther from 1 represent stronger associations.

  4. Residual Analysis

     - **Residual**: The difference between an observed and expected count in a particular cell.

     - **Standardized residual for a cell** equals:
       $$
       (observed \ count - expected \ count)/se
       $$

       - *se* denotes a standard error for the sampling distribution of (observed count -expected count), when the variables are independent.
         $$
         se = \sqrt{residual_i*(1-prob_.c)(1-prob_r.)}
         $$
         
       - **a standardized residual larger than 3 in absolute value value provides strong evidence against independence in that cell.**
     
  5. ### [**Cramer's V**](https://www.spss-tutorials.com/cramers-v-what-and-why/)
  
   - Chi-square says that there is a significant relationship between variables, but it does not say just how significant and important this is. Cramer's V is a post-test to give this additional information.
  
   - **Cramér’s V is a number between 0 and 1 that indicates how strongly two categorical variables are associated.**
  
   - #### Formula
  
     $$
       \phi_c = \sqrt{\frac{\chi^2}{N(k - 1)}}
     $$
  
     - ϕc denotes Cramér’s V;
       - χ2 is the Pearson chi-square statistic from the aforementioned test;
       - N is the sample size involved in the test
       - k is the lesser number of categories of either variable.
  
## 4. Goodness of Fit Chi-Squared Tests

- Compare an observed frequency distribution with a frequency distribution on the basis of a theory.
  
  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%202%20Categorical%20association/goodness%20of%20fit%20chi%20square.jpg){:height="60%" width="60%"}
  
  - has to be discrete
    - can be any measurement level(categorical, ordinal, numeric)

  - chi-squared test
  
  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%202%20Categorical%20association/goodness%20of%20fit%20t%20t%20test.jpg){:height="60%" width="60%"}
  
  - **N**: the number of categories(at least 5 )
    
    - *df*: N-1
  - large  χ<sup>2</sup> :arrow_right:small P-value:arrow_right:reject H<sub>0</sub>
  
  - ### Difference between Goodness of Fit and Association
  
  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%202%20Categorical%20association/difference%20between%20goodness%20of%20fit%20and%20association.jpg){:height="60%" width="60%"}
  
- ### Notes for Goodness of Fit
  
  1. Can group several categories to meet the frequency requirements.
    2. **Can only apply to compare observed sample to theoretical sample.  Two samples can be only compared for association.**

## 5. [Fisher's exact test(permutation tests)](https://www.zhihu.com/question/28637406)

1. **Assumptions:**

   - Two binary categorical variables
   - Randomization, such as random sampling or a randomized experiment.
   - number of each cell < 5

2. **Hypotheses:**

   - H<sub>0</sub>: The two variables are independent (H<sub>0</sub>: p<sub>1</sub> =  p<sub>2</sub>)
   - H<sub>a</sub>: The two variables are associated (Choose H<sub>a</sub>: p<sub>1</sub>≠p<sub>2</sub> or p<sub>1</sub>>p<sub>2</sub> or  H<sub>a</sub>: p<sub>1</sub><p<sub>2</sub>)

3. **Test statistic:**

   ![](http://www.quantpsy.org/fisher/fisher4.gif)

   - First cell count(this determines the others, given the margin totals.
   - 遍历计算。

4. **P-value:**

   - Probability that the first cell count equals the observed value or a value even more extreme than observed in the direction predicted by H<sub>a</sub>

5. **Conclusion:**

   - Report P-value and interpret in context. If a decision is needed, reject H<sub>0</sub> when P-value ≦ significance level(such as 0.05)

### [Calculation for Fisher's Exact Test](http://www.quantpsy.org/fisher/fisher.htm)

- Example:

  <video id="video" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%202%20Categorical%20association/4.2.06%20Fisher%27s%20exact%20test.mp4"  controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%202%20Categorical%20association/goodness%20of%20fit%20t%20t%20test.jpg">
        </video>

