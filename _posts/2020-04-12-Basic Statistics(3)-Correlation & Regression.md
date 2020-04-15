---

title: Basic Statistics- (3)Correlation & Regression
key: 20200412

tags: Statistics; Correlation; Regression; R; R^2; Regression line; Confounding variable; lurking variable; 

layout: article

---

# Basic Statistics - (03) Correlation & Regression

<!--more-->

## 1. Correlation

- ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/01%20correlation.jpg)


- ### Contingency table 列联表

  A contingency table enables you to display the relationship between **two ordinal or nominal variables**.

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/02%20contingency%20table.jpg)

  - **Conditional proportion元素比例**: A particular row/column of the contingency table. 
  - **Marginal proportion综合比例**: the row/column sum of the contingency table.

- ### Scatterplot 分布图

  A scatterplot is a graphical display for **two quantitative variables** using the horizontal (x) axis for the explanatory variable *x* and the vertical (y) axis for the response variable *y*.

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/03%20scatterplot.jpg)



## 2. Pearson's r

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/04%20pearson%27r.jpg)

To determine how strong the correlations are.

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/16%20r%20equation.jpg)

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/07%20r%20formula.jpg)

- The shape of scatterplot

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/05%20scatterplot%20shape.jpg)

- r value: [-1, 1]

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/06%20correlation%20r%20value.jpg)

- **Important note: Check scatterplot before you calculate Pearson's r.**

## 3.Regression

- ### Regression line--r

  - #### Ordinary least square regression 最小二乘法

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/18%20regression%20line.jpg)
  
    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/08%20ordinary%20least%20squre%20regression.jpg)
  
    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/09%20regression%20formula%20example.jpg)
  
  
  
  - #### compute regression line
  
  ![https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/17%20regression%20line%20equation.jpg]()
  
  
  
  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/10%20compute%20regression%20line.jpg)
  
  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/11%20regression%20line%20example.jpg)
  
  - #### r^2
  
    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/14%20explained%20variance.jpg)

  **The prediction with only one variable is much less accurate than when you have information about two "related" variables.**
  
  万物相连，世间的许多关系可能让你无法想象。[巧克力和诺贝尔奖获得者国籍](https://www.nejm.org/doi/full/10.1056/NEJMon1211064)
  
  - tells you how much better a regression line predicts the value of a dependent variable than the mean of the variable.
    
      ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/12%20r%20prediction.jpg)
    
    - the amount of variance in your dependent variable(y) that is explained by your independent variable(x).
    
      ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/13%20r2%20prediction.jpg)
  
  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/15%20r%20and%20r2.jpg)

## 4.**confounding** or **lurking** variables

- ### :exclamation:correlation/regression ≠ causation 相关/回归不等于因果

  - 社会科学主要研究相关性而非因果性。
  - 随时提醒自己注意是否还有其他变量因子。
  - confounding variable 混淆变量
    - include in the study
  - lurking variable 潜在变量
    - not include in the study but has the potential to influence the result.

- ### :exclamation:be aware of outliers

  - Outlier may cause the **positive** coefficient into a **negative** one.

## 5. Example Pearson's r and regression

<div>
    <video id="regression" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%202/208%20Example%20Pearson%27s%20r%20and%20regression.mp4" height=500px loop=true controls=true autoplay="autoplay">example of pearson's r and regression</video>
</div>