---

title: Inferential Statistics(07)-R[04]-Describing Quantitative association
key: 20201011

tags: Statistics; R; Quantitative association; lm(y~x); summary();

layout: article

mathjax: true

mathjax_autoNumber: true

---

# Inferential Statistics(07)-R[04]-Describing Quantitative association

<!--more-->

## 1.  Predictor vs. Response Variable

When using regression, the **response variable** is the variable we attempt to predict, and the **predictor variable** is what we use to predict the response variable.

Let's say you run an experiment investigating the amount that people like you after you give them money. In your experiment you gave people different amounts of money, and afterwards measured how much they like you. One of these variables (liking or money) is the predictor variable, and one is the response variable. Which do you think is which based on our experiment? Let's label these!

- **Instructions**

  - Your script provides you with two vectors - one containing the amount of money you gave participants, one containing the amount participants liked you afterwards.
  - Based on which variable should be the 'predictor' variable, and which variable is 'response', label one vector as `money` and one as `liking`.
  - You can label a vector simply by writing `money` or `liking` to the left of the `<-` (make sure there is a space between `<-` and the label!)

- **R**

  ```r
  # The predictor variable
    money <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  
  # The response variable
   liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  ```

  

## 2. The Regression Equation

We know that the regression equation is *y=a+bx*, where y is the variable you are predicting, a is the intercept (the value of the response variable when the predictor is 0) and b is the slope. We can calculate the value of b with the following equation:

$$
b = r \frac{sd_y} {sd_x}
$$
Remember that x is the predictor variable and y is the response variable, and rr is the correlation between the two.



We're going to have a go at manually calculating the value of the slope in our money and liking study!

To do this you'll need to use two functions: `cor()` and `sd()`. 

- `cor()` is used to calculate a correlation coefficient, and takes the two variables you are interested in as its first arguments. For example: `cor(variable1, variable2)`. 
- `sd()` calculates the standard deviation of given data, and takes the name of your data object as its first argument. For example: `sd(variable1)`. Let's put these to use in your script!

- **Instructions**

  - Add code your script to assign the correlation between `liking` and `money` to `cxy`.
  - Add code to your script to assign the standard deviation of `money` to `sx`.
  - Add code to your script to assign the standard deviation of `liking` to `sy`.
  - In your script, use `cxy`, `sx` and `sy` to calculate the slope using the slope equation.

- **Answer**

  ```R
  # Vector containing the amount of money you gave participants (predictor)
  money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  
  # Vector containing the amount the participants liked you (response)
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  
  # Correlation between money and liking
  cxy <-cor(money,liking)
  cxy
  
  # Standard deviation of money
  sx <- sd(money)
  
  # Standard deviation of liking
  sy <- sd(liking)
  
  # Calculate the the regression slope using cxy, sx and sy
  b<-cxy*(sy/sx)
  b
  ```

  ```R
  > # Vector containing the amount of money you gave participants (predictor)
  > money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  > 
  > # Vector containing the amount the participants liked you (response)
  > liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  > 
  > # Correlation between money and liking
  > cxy <-cor(money,liking)
  > cxy
  [1] 0.8302539
  > 
  > # Standard deviation of money
  > sx <- sd(money)
  > 
  > # Standard deviation of liking
  > sy <- sd(liking)
  > 
  > # Calculate the the regression slope using cxy, sx and sy
  > b<-cxy*(sy/sx)
  > b
  [1] 0.7781818
  ```



## 3. Calculating the Intercept

In your experiment where you gave participants money and measured how much they liked you, you found that the slope was 0.778. So for every single unit increase in money, the participant likes you 0.778 more! But how much do they like you when you don't give them any money (i.e. when money = 0)? To find this out we can calculate the intercept, using the equation
$$
intercept = \bar y - (slope * \bar x)
$$


\- pretty straight forward, right?

To calculate this equation you'll need to use the function `mean()`, which takes the name as your variable as it's argument. For example: `mean(variable1)` would give you the mean of variable 1.

- **Instructions**

  - In your script, add a line that calculates the intercept and assign this to the variable `intercept`.
  - In your script, print the value of `intercept`.
  - Remember to use brackets when necessary!

- **Answers**

  ```R
  > # Vector containing the amount of money you gave participants (predictor)
  > money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  > 
  > # Vector containing the amount the participants liked you (response)
  > liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  > 
  > # Calculate the intercept
  > intercept <- mean(liking)-(0.778 *mean(money))
  > 
  > # Print the value of the intercept
  > intercept
  [1] 1.501
  ```



## 4. Finding the Slope and Intercept Using `lm(y~x)`

So you conducted your experiment when you gave people money and measured how much they like you. You calculated the slope and the intercept manually, so that you have the equation: liking=1.501+0.778∗money

Another way of calculating the intercept and slope is through the R function `lm()`. When you tell `lm()` your regression model, it produces your intercept and slope coefficients. You give `lm()` your model by first specifying the y (or response) variable, followed by a `~` symbol, then your x (or predictor variable). For example: `lm(y~x)`. Try it for yourself in your script!

- **Instructions**

  - In your script, add a line of code that calculates the intercept and slope using `lm()`
  - Hit 'submit' and look at the answer!

- **Answer**

  ```R
  # Vector containing the amount of money you gave participants
  money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  
  # Vector containing the amount the participants liked you
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  
  # Calculate the intercept and slope using lm()
  lm(liking~money)
  ```

  ```R
  > # Vector containing the amount of money you gave participants
  > money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  > 
  > # Vector containing the amount the participants liked you
  > liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  > 
  > # Calculate the intercept and slope using lm()
  > lm(liking~money)
  
  Call:
  lm(formula = liking ~ money)
  
  Coefficients:
  (Intercept)        money  
       1.5000       0.7782
  ```



## 5. Predictive Power `summary()`

In our experiment about how much people like you when you give them different amounts of money, we found the regression equation: liking=1.501+0.778∗money. We can look at how well the predictor (money) describes the response variable (liking) through looking at the R squared. This tells us how much of the variance in the response variable (liking) is explained by the predictor variable (money).

One way of finding the R squared is through **squaring** the correlation between the predictor and response variable. To find this you can use the function `cor()`, which takes your two variables, separated by a comma, as arguments. e.g. `cor(variable1, variable2)`. Remember that you can square a value in R using `^2`. For example, `3^2` would return `9`.

However, another way of finding the R squared is using `lm()` and `summary()`. If we ask R to give us the summary of `lm()` we get quite a lot of extra information in addition to our regression coeffcients, including the R squared! To use the `summary()`, simply place the information you want to find information about between brackets. E.g. `summary(lm(variable1~variable2)).`

- **Instructions**

  - In your script, calculate the R squared using the function `cor()`.
  - In your script, **add** the `summary()` function to the `lm()` function you used earlier. Assign this to the object `sum`.
  - In your script, print `sum`.
  - Hit 'Submit' and compare the R squared values obtained by both of these methods!

- **Answer**

  ```R
  # Vector containing the amount of money you gave participants
  money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  
  # Vector containing the amount the participants liked you
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  
  # Calculate the R squared of our regression model using cor()
  r<-cor(money,liking)
  R_squared<-r^2
  R_squared
  # Assign the summary of lm(liking ~ money) to 'sum'
  sum <- summary(lm(liking ~ money))
  
  # Print sum
  sum
  ```

  ```R
  > # Vector containing the amount of money you gave participants
  > money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  > 
  > # Vector containing the amount the participants liked you
  > liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  > 
  > # Calculate the R squared of our regression model using cor()
  > r<-cor(money,liking)
  > R_squared<-r^2
  > R_squared
  [1] 0.6893216
  > # Assign the summary of lm(liking ~ money) to 'sum'
  > sum <- summary(lm(liking ~ money))
  > 
  > # Print sum
  > sum
  
  Call:
  lm(formula = liking ~ money)
  
  Residuals:
      Min      1Q  Median      3Q     Max 
  -2.4473 -0.9409 -0.0800  0.6232  3.3091 
  
  Coefficients:
              Estimate Std. Error t value Pr(>|t|)   
  (Intercept)   1.5000     1.1461   1.309  0.22694   
  money         0.7782     0.1847   4.213  0.00294 **
  ---
  Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
  
  Residual standard error: 1.678 on 8 degrees of freedom
  Multiple R-squared:  0.6893,	Adjusted R-squared:  0.6505 
  F-statistic: 17.75 on 1 and 8 DF,  p-value: 0.002943
  ```



## 6. Regression Model Testing

- ### Hypotheses

  We're running an experiment on how much people like you after you give them different amounts of money. We're pretty sure that the more money you give someone, the more they will like you. Before we can test this we need to properly establish our hypotheses! Let's do this now

  - **Instructions**

    - In your script there are three string statements.
    - Label the statement containing the null hypothesis as such, by assigning it to `nh`.
    - Label the alternative hypothesis as such by assigning it to `ah`.
    - Delete the hypothesis that is neither the null, nor the alternative hypothesis.

  - **Answer**

    ```R
    nh<- "There will be no relationship between money and liking"
    
    ah<- "More money will be related to more liking"
    
    <- "Money will be linked to how much someone likes us"
    ```

- ### Testing The Regression Model I

  So we have established that we are testing our hypothesis whether giving people more money leads to them liking us more.

  Remember how we used `lm()` and `summary()` before to see the R squared of our model? Well we're going to use these functions again to find our t-value, and associated p-value. No manual calculations necessary - pretty great, right?

  The `lm()` function takes the format `lm(response variable ~ predictor variable)` (however of course you would write your own variable names here).

  The `summary()` function takes the object you would like a summary of as its first argument. In this case it's going to be your regression model.

  - **Instructions**

    - In your script, assign your regression model to the variable `mod1` using the function `lm()`.
    - In your script, use the `summary()` function to find the summary of `mod1`, and assigning this to `sum1`.
    - Hit 'Submit' and have a look at the output!

  - **Answer**

    ```R
    # Vector containing the amount of money you gave participants
    money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    
    # Vector containing the amount the participants liked you
    liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
    
    # Assign regression model to variable "mod1"
    mod1 <- lm(liking~money)
    
    # Assign the summary of 'mod1' to 'sum1'
    sum1 <- summary(mod1)
    
    # Print 'sum1'
    sum1
    ```

    ```R
     # Vector containing the amount of money you gave participants
    > money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    > 
    > # Vector containing the amount the participants liked you
    > liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
    > 
    > # Assign regression model to variable "mod1"
    > mod1 <- lm(liking~money)
    > 
    > # Assign the summary of 'mod1' to 'sum1'
    > sum1 <- summary(mod1)
    > 
    > # Print 'sum1'
    > sum1
    
    Call:
    lm(formula = liking ~ money)
    
    Residuals:
        Min      1Q  Median      3Q     Max 
    -2.4473 -0.9409 -0.0800  0.6232  3.3091 
    
    Coefficients:
                Estimate Std. Error t value Pr(>|t|)   
    (Intercept)   1.5000     1.1461   1.309  0.22694   
    money         0.7782     0.1847   4.213  0.00294 **
    ---
    Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
    
    Residual standard error: 1.678 on 8 degrees of freedom
    Multiple R-squared:  0.6893,	Adjusted R-squared:  0.6505 
    F-statistic: 17.75 on 1 and 8 DF,  p-value: 0.002943
    ```

    - The column "Estimate" shows the coefficients for the intercept (top) and the regression slope (bottom),
    - "Std.Error" shows you the standard error
    - "t value" shows the t-value
    - "Pr(>|t|)" shows you the p-value associated with the t-value

- ### Confidence interval

  Our output provided us with a p-value for our model (enter `summary(mod1)` in your console), however we still need to have a look at the confidence interval for our slope coefficient. If the confidence interval does not include the value 0, then we say that the relationship we found here in the sample also exists in the population.

  The calculation for the confidence interval is
  $$
  test \ statistic \pm margin \ of \ error
  $$
  

  Where the margin of error is
  $$
  (t_{\alpha/2, df = n-2 }) * se_{slope}
  $$
  Let's try this out. In our money experiment we had a sample size of 10, so our t-value (where df = 8, and p = 0.025) is **2.306**.

  - **Instruction**

    - In your script, assign the upper limit of the confidence interval to `upper`.
    - In your script, assign the lower limit of the confidence interval to `lower`.
    - Use the provided t-value, and obtain standard error and the slope value from the summary of the regression (see console). You can write `summary(mod1)` into your console if you need to retreive the summary again!

  - **Answer**

    ```R
    > summary(mod1)
    
    Call:
    lm(formula = liking ~ money)
    
    Residuals:
        Min      1Q  Median      3Q     Max 
    -2.4473 -0.9409 -0.0800  0.6232  3.3091 
    
    Coefficients:
                Estimate Std. Error t value Pr(>|t|)   
    (Intercept)   1.5000     1.1461   1.309  0.22694   
    money         0.7782     0.1847   4.213  0.00294 **
    ---
    Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
    
    Residual standard error: 1.678 on 8 degrees of freedom
    Multiple R-squared:  0.6893,	Adjusted R-squared:  0.6505 
    F-statistic: 17.75 on 1 and 8 DF,  p-value: 0.002943
    
    > # Calculate the upper confidence interval
    > me<-0.1847*4.213
    > upper <- 1.5+me
    > 
    > # Calculate the lower confidence interval
    > lower <- 1.5-me
    > 
    > # Print the upper confidence interval
    > upper
    [1] 2.278141
    > 
    > # Print the lower confidence interval
    > lower
    [1] 0.7218589
    > # Calculate the upper confidence interval
    > upper <- 0.7782 + (0.1847 * 2.306)
    > 
    > # Calculate the lower confidence interval
    > lower <- 0.7782 - (0.1847 * 2.306)
    > 
    > # Print the upper confidence interval
    > upper
    [1] 1.204118
    > 
    > # Print the lower confidence interval
    > lower
    [1] 0.3522818
    ```



## 7. Residuals 

- ### `data$residuals`

  Before we run a regression analysis we need to check whether several assumptions are met. A lot of these assumptions involve residuals.

  Have a look at the graph. The circles represent data points - or how much someone liked you after you gave them a specific amount of money **in reality**. The line going through the graph is the slope, which gives an **estimated** amount amount that someone liked you after you gave them money based on the slope equation. The amount of space between a data point and the line is known as the **residual**, and its using the values of these residuals that we can test assumptions.

  One way to get these would be to count them manually. Fortunately, it's not the 1800's anymore, and we can make R do this for us! In the same way as we used `$` to index columns and rows from dataframes and matrixes (e.g. `data$variable1` would give you the variable named `variable1`), we can use this indexing to obtain the values of the residuals from our regression model that we stored as `mod1`.

  - **Instructions**

    - `lm()` automatically calculates the residuals for your model, which are saved in `mod1` after.
    - In your script, add code to obtain the residuals (named `residuals`) from `mod1` using `$` and assign these to `resmod1`.

  - **Answer**

    ```R
    # Vector containing the amount of money you gave participants
    money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    
    # Vector containing the amount the participants liked you
    liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
    
    # Assign regression model to variable "mod1"
    mod1 <- lm(liking ~ money)
    
    # Obtain the residuals from mod1 using $, assign to "resmod1"
    resmod1 <- mod1$residuals
    
    # Print the residuals
    resmod1
    ```

    ```r
    > # Vector containing the amount of money you gave participants
    > money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    > 
    > # Vector containing the amount the participants liked you
    > liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
    > 
    > # Assign regression model to variable "mod1"
    > mod1 <- lm(liking ~ money)
    > 
    > # Obtain the residuals from mod1 using $, assign to "resmod1"
    > resmod1 <- mod1$residuals
    > 
    > # Print the residuals
    > resmod1
              1           2           3           4           5           6 
    -0.07818182 -0.25636364  0.66545455 -1.51272727  3.30909091 -1.16909091 
              7           8           9          10 
    -2.44727273  1.07454545  0.49636364 -0.08181818
    ```

- ### linearity

  One of the assumptions for running a regression analysis is that the relationship between the predictor and response variable is linear. It was a little hard to tell if this was definitely the case from plotting money against liking in the last exercise. Let's use those residuals you stored as `resmod1` and plot these against liking to see if we can get a better idea of linearity.

  While we are looking at these residuals, we can also check out the assumption of homoscedasticity. To check this we should make sure the variation in residuals is roughly even at all levels of the predictor and response variables.

  To do this we're going to use the `plot()` function. The first argument that plot takes is the x axis variable, and the second is the y-axis variable. After this `plot()` can take many optional arguments, but you don't need to worry about these right now.

  - **Instructions**

    - The variable `liking` and residuals `resmod1` are saved in your console.
    - Plot the residuals on the y-axis against `liking` using `plot()`
    - Plot the residuals on the y-axis against `money` using `plot()`
    - Have a look at the outcome!

  - **Answer**

    ```R
    # plot the residuals on the y-axis, and liking on the x-axis
    plot(liking,resmod1)
    
    # plot the residuals on the y-axis, and money on the x-axis
    plot(resmod1,liking)
    ```

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/liking~resmod1.png)

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/resmod1~liking.png)

- ### `hist()`

  Another assumption we need to test is to make sure that the residuals are normally distributed. This means that the most common values are around zero, with fewer values as we move higher and lower than zero. We can visualise this easily with a histogram, which shows you the frequency of each value. You can make a histogram easily using the function `hist()`. `hist()` takes your data as its first argument, for example `hist(data)`. Let's try it out!

  - **Instructions**

    - In your script, add a line of code to create a histogram of your residuals using the function `hist()`
    - Hit 'Submit' and examine the output!

  - **Answer**

    ```R
    # Vector containing the amount of money you gave participants
    money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    
    # Vector containing the amount the participants liked you
    liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
    
    # Assign regression model to variable "mod1"
    mod1 <- lm(liking ~ money)
    
    # Obtain the residuals from mod1 using $, assign to "resmod1"
    resmod1 <- mod1$residuals
    
    # Make a histogram of your residuals
    hist(resmod1)
    ```

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%203%20simple%20regression/resmod1~liking.png)

## 8. Prediction `predict(model, newdata, level=0.9, interval="confidence/predict")`

- ### function(x){}

  Our experiments data was slightly problematic for meeting certain assumptions. In real life your leniency with assumptions would depend on your research questions, and you would likely have more data with which to check your assumptions.

  Let's say we have met all of our assumptions and decide to continue with our regression analysis!

  Earlier we found intercept and slope values in our experiment. You can see these if you enter `mod1` into your console. You can use these coefficients in the formula liking=a+b∗moneyliking=a+b∗money to create the regression equation. Using this equation we can make predictions of how much someone in our sample would like us after giving them a specific amount of money by inputting this amount of money into the equation. Let's try this!

  In your console, estimate how much someone from our sample would like us if we gave them 2.5 units of money.

  ```R
  > mod1
  
  Call:
  lm(formula = liking ~ money)
  
  Coefficients:
  (Intercept)        money  
       1.5000       0.7782
  > lm<-function(x){ 
      y<-0.7782x+1.5
      print(y)}
  > lm(2.5)
  > 3.446
  ```

- ### Prediction Interval

  In the last exercise you used your equation (liking=1.501+0.778∗money) to make a prediction about how much someone would like them if you gave them 2.5 units of money.

  We expect that the amount the person would like us would be **close** to our prediction, but would likely be a little off due to error. We can calculate the interval that the persons liking would fall in though a prediction interval!

    - **Prediction Interval**

    - individual y variability at a fixed x.

    - wider than CI
      $$
      PI_{y_i}=\hat{y}\pm2SD_{res}
      $$
      
  - **Residual SD**
    $$
    
        SD_{res} = \sqrt{\frac{\sum{(y-\hat{y})}^2}{n-2}}
     
    $$
  
  Here, the standard error is approximately the standard deviation of the residuals. Luckily for us, R has a function to do this for us.
  
  We use the `predict()` function, which takes an object containing your model, a data frame containing the value you would like an interval for, an argument containing the size of the interval and the argument `interval = "predict"`. For example, for a 90% prediction interval we might put: `predict(model, newdata, level = 0.9, interval = "predict")`.
  
  Let's try to find the 95% prediction interval for our prediction that if you give someone 3 units of money, they will like you an amount of 3.835.
  
  - **Instructions**
  
    - In your script, add a line of code to calculate the 95% prediction interval for the amount someone from our sample would like us if we gave them 3 units of money.
  
  - **Answer**
  
    ```R
    # Vector containing the amount of money you gave participants
    money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    
    # Vector containing the amount the participants liked you
    liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
    
    # Fitted model
    mod1   <- lm(liking~money)
    mod1
    # Value for which you would like a prediction
    nd <- data.frame( money=3)
    nd
    # Find the prediction interval
    predict(mod1, nd, level=0.95, interval="predict")
    ```
  
    ```R
    > # Vector containing the amount of money you gave participants
    > money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    > 
    > # Vector containing the amount the participants liked you
    > liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
    > 
    > # Fitted model
    > mod1   <- lm(liking~money)
    > mod1
    
    Call:
    lm(formula = liking ~ money)
    
    Coefficients:
    (Intercept)        money  
         1.5000       0.7782
    > # Value for which you would like a prediction
    > nd <- data.frame( money=3)
    > nd
      money
    1     3
    > # Find the prediction interval
    > 
    > # Vector containing the amount of money you gave participants
    > money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    > 
    > # Vector containing the amount the participants liked you
    > liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
    > 
    > # Fitted model
    > mod1   <- lm(liking~money)
    > mod1
    
    Call:
    lm(formula = liking ~ money)
    
    Coefficients:
    (Intercept)        money  
         1.5000       0.7782
    > # Value for which you would like a prediction
    > nd <- data.frame( money=3)
    > nd
      money
    1     3
    > # Find the prediction interval
    > predict(mod1, nd, level=0.95, interval="predict")
           fit        lwr      upr
    1 3.834545 -0.3604029 8.029494
    > # Vector containing the amount of money you gave participants
    > money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    > 
    > # Vector containing the amount the participants liked you
    > liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
    > 
    > # Fitted model
    > mod1   <- lm(liking~money)
    > mod1
    
    Call:
    lm(formula = liking ~ money)
    
    Coefficients:
    (Intercept)        money  
         1.5000       0.7782
    > # Value for which you would like a prediction
    > nd <- data.frame( money=3)
    > nd
      money
    1     3
    > # Find the prediction interval
    > predict(mod1, nd, level=0.95, interval="predict")
           fit        lwr      upr
    1 3.834545 -0.3604029 8.029494
    
    ```
  
  - [predict函数在回归分析中的应用](https://blog.csdn.net/hsdcc217/article/details/78395240)
  
- ### Confidence Interval

  In the last exercise you found that there is quite a wide prediction interval. This meant that the range of possible amounts that someone from our **sample** would like us if we gave them 3 units of money was quite large.

  Let's have a look at the range of mean predicted scores if we gave people 3 units of money in the **population** through calculating the confidence interval. The formula for a confidence interval is
  $$
  \hat{y} \pm margin of error
  $$
  , where the margin of error is
  $$
  2 * \frac{s_{res}}{ \sqrt n}
  $$
  Again, R provides us with a way to do this in one go! We do this in exactly the same way as our prediction interval, except instead of `interval = "predict"`, we use `interval = "confidence"`. For example, for a 90% confidence interval we might put: `predict(model, newdata, level = 0.9, interval = "confidence")`.

  Let's try to find the 95% confidence interval for our prediction that if you give someone 3 units of money, they will like you an amount of 3.835.

  - **Instructions**

    - In your script, add a line of code to calculate the 95% confidence interval for the amount someone from our sample would like us if we gave them 3 units of money.

  - **Answers**

    ```R
    # Vector containing the amount of money you gave participants
    money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    
    # Vector containing the amount the participants liked you
    liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
    
    # Fitted model
    mod1  <- lm(liking~money)
    
    # Value for which you would like a prediction
    nd <- data.frame(money=3)
    
    # Find the confidence interval
    predict(mod1,nd,level=0.9, interval="confidence")
    ```

    ```R
    > # Vector containing the amount of money you gave participants
    > money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    > 
    > # Vector containing the amount the participants liked you
    > liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
    > 
    > # Fitted model
    > mod1  <- lm(liking~money)
    > 
    > # Value for which you would like a prediction
    > nd <- data.frame(money=3)
    > 
    > # Find the confidence interval
    >  predict(mod1,nd,level=0.9, interval="confidence")
           fit      lwr      upr
    1 3.834545 2.526653 5.142438
    ```

    