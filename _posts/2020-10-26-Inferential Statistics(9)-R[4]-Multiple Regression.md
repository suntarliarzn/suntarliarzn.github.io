---

title: Inferential Statistics(09)-R[05]-Multiple Regression
key: 20201026

tags: Statistics; R; Multiple Regression; lm(y~x1+x2); lm().summary(); lm(y~x1+x2)$residual; confint(,level=); as.factor; glm(y~x1+x2,family= binomial);

layout: article

mathjax: true

mathjax_autoNumber: true

---

# Inferential Statistics(08)-R[05]-Multiple Regression

<!--more-->

## 1.  The Regression Coefficients--`lm(response ~ predictor1 + predictor2)`

So now we know our regression model, we need to find a parameter estimates for the intercept, the slope of smiling, and the slope of money. We're going to use the `lm()` function to find these estimates.

To find the parameter estimates for just money and liking we used `lm(liking ~ money)`. We can add another predictor simply using `+`. For instance, `lm(response ~ predictor1 + predictor2)`.

- **Instructions**

  - In your script, use the `lm()` function to find the regression coefficients for our model examining how money and smiling predicts how much someone likes us.
  - Make sure that `smile` is the first predictor, followed by `money`.
  - Feel free to experiment with this in your console before submitting your script!

- **Answers**

  ```R
  # Vector containing the amount of money you gave participants (predictor)
  money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  
  # Vector containing the amount the participants liked you (response)
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  
  # Find the regression coefficients for liking, predicted by smile and money
  lm(liking~money+smile)
  ```
  
  
  
  
  ```R
  # Vector containing the amount of money you gave participants (predictor)
  money  <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  # Vector containing the amount the participants liked you (response)
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  # Find the regression coefficients for liking, predicted by smile and money
  lm(liking~money+smile)
  
  Call:
  lm(formula = liking ~ money + smile)
  
  Coefficients:
  (Intercept)        money        smile  
       0.6162       0.8008       1.4895  
  ```



## 2. Multiple R squared I--`lm().summary()`

The R squared represents the proportion of improvement in the model from using the regression line over using the mean. In our case, it looks at how we can predict how much someone will like us based on how much money we give them, and how much we smile at them, compared to just using the average amount that someone likes us.

R gives us this automatically when we use `summary()` on the model we found using **`lm()`. `summary()`** tells us a lot about the model. To extract the R squared in particular, we can use the `$`. For example, **`summary(*regression model*)$r.squared`** would return the R squared value. Let's try this!

- **Instruction**

  - In your console, use the `summary()` function on our `lm()` model, and assign the resulting object to variable `mod1`.
  - In your console, use the `$` to print the value of the R-squared from `mod1`.

- **Answers**

  ```R
  # Vector containing the amount of money you gave participants (predictor)
  money <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  
  # Vector containing the amount the participants liked you (response)
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  
  # Assign the summary of lm(liking ~ smile + money) to 'mod1'
  mod1 <- summary(lm(liking ~ smile + money))
  mod1
  # Print the R-squared of 'mod1'
  mod1$r.squared
  ```

  ```R
  # Vector containing the amount of money you gave participants (predictor)
  money <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  # Vector containing the amount the participants liked you (response)
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  # Assign the summary of lm(liking ~ smile + money) to 'mod1'
  mod1 <- summary(lm(liking ~ smile + money))
  mod1
  
  Call:
  lm(formula = liking ~ smile + money)
  
  Residuals:
      Min      1Q  Median      3Q     Max 
  -2.3173 -0.5423 -0.1371  0.2068  3.6332 
  
  Coefficients:
              Estimate Std. Error t value Pr(>|t|)   
  (Intercept)   0.6162     1.5449   0.399  0.70189   
  smile         1.4895     1.7123   0.870  0.41319   
  money         0.8008     0.1894   4.229  0.00389 **
  ---
  Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
  
  Residual standard error: 1.704 on 7 degrees of freedom
  Multiple R-squared:  0.7196,	Adjusted R-squared:  0.6395 
  F-statistic: 8.984 on 2 and 7 DF,  p-value: 0.01167
  # Print the R-squared of 'mod1'
  mod1$r.squared
  [1] 0.7196303
  ```

  

## 3. Multiple R squared II--`lm(y ~ X1 + X2)$residual`

We know that the multiple R squared for our model is `0.7196303` - this means that our model including money and smiling is about 72% better than just using the mean to predict how much someone will like us.

Let's break down how R found this value to calculate it manually ourselves.

To find this we need to look at the difference between the **mean** amount that our sample liked us, compared to the **observed**  amount they liked us - if we square and sum this value we have the **total sum of squares**. We can also look at the difference between the **predicted** amount that our sample liked us according to our model, compared to the **observed** observed amount they liked us - if we square and sum this value we have the **residual sum of squares**.

R gives us the residuals from our model automatically. We can index it from `lm()` using the `$`. For example, **`lm(y ~ X1 + X2)$residual`**. Easy!

The total sum of squares is pretty straight forward too. We find the mean of `liking` using the function `mean()` - for example `mean(y)` and subtract every value of y from this. For example, `mean(y) - y`.

The values produced by R come out as a vector of numbers. To square these values we can use `^2`, and to sum we put the vectors inside the function `sum()`. For example,`sum((mean(y) - y)^2)`. If we find these values and assign them to objects we can do anything we like with them!

- **Instructions**

  - Obtain the residual sum of squares and assign to object `ssr`. Remember to use brackets to square and sum!
  - Obtain the total sum of squares and assign to object `sst`. Again, remember to use brackets to square and sum!
  - Use sst and ssr to calculate the multiple R squared.

- **Answers**

  ```R
  # Vector containing the amount of money you gave participants (predictor)
  money <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  
  # Vector containing the amount the participants liked you (response)
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  
  # Sum and square the residuals from lm(liking ~ smile + money), assign to object 'ssr'
  ssr <- sum(lm(liking~smile+money)$residual^2)
  ssr
  # Sum and square the value of mean liking - observed liking, assign to object 'sst'
  sst <- sum((mean(liking)-liking)^2)
  sst
  # Find the R squared as (sst - ssr)/sst
  (sst-ssr)/sst
  ```

  ```R
  # Vector containing the amount of money you gave participants (predictor)
  money <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  # Vector containing the amount the participants liked you (response)
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  # Sum and square the residuals from lm(liking ~ smile + money), assign to object 'ssr'
  ssr <- sum(lm(liking~smile+money)$residual^2)
  ssr
  [1] 20.32007
  # Sum and square the value of mean liking - observed liking, assign to object 'sst'
  sst <- sum((mean(liking)-liking)^2)
  sst
  [1] 72.476
  # Find the R squared as (sst - ssr)/sst
  (sst-ssr)/sst
  [1] 0.7196303
  ```



## 4. Overall Tests rms/mse

The F test statistic represents the 'explained' variance divided by the 'error' variance. In our experiment on how much giving people money and smiling at them predicts them liking us, R tells us that the F-statistic is 8.984.

Let's see how R found this!

The F-statistic is calculated by dividing the **regression mean square** by the **mean square error**.

The **regression mean square** is calculated by:

- $$
  \frac{SS_{total} - SS_{residual}}{k-1}
  $$

  - where k is the number of predictors plus one for the intercept.

The **mean square error** is calculated by

- $$
  \frac{SS_{residual}}{n-k}
  $$

  - where n is the number of observations and kk is the number of predictors plus one for the intercept.

Luckily for us we already found the total sum of squares (`sst`) and the residual sum of squares (`ssr`) when we found the R squared. Let's rearrange these to find the F-statistic.

- **Instructions**

  - Assign the value of the regression mean square to object `rms`.
  - Assign the value of the mean square error to object `mse`.

- **Answers**

  ```R
  # Vector containing the amount of money you gave participants (predictor)
  money <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  
  # Vector containing the amount the participants liked you (response)
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  
  # Sum and square the residuals from lm(liking ~ smile + money), assign to object 'ssr'
  ssr <- sum((lm(liking~ smile + money)$residual) ^ 2)
  
  # Sum and square the value of mean liking - observed liking, assign to object 'sst'
  sst <- sum((mean(liking) - liking) ^ 2)
  
  # Find the regression mean square
  rms <- (sst-ssr)/(3-1)
    
  # Find the mean squared error
  mse <- ssr/(10-3)
    
  # Use rms and mse to find the F statsitic
  rms/mse
  ```

  ```R
  # Vector containing the amount of money you gave participants (predictor)
  money <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  # Vector containing the amount the participants liked you (response)
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  # Sum and square the residuals from lm(liking ~ smile + money), assign to object 'ssr'
  ssr <- sum((lm(liking~ smile + money)$residual) ^ 2)
  # Sum and square the value of mean liking - observed liking, assign to object 'sst'
  sst <- sum((mean(liking) - liking) ^ 2)
  # Find the regression mean square
  rms <- (sst-ssr)/(3-1)
    
  # Find the mean squared error
  mse <- ssr/(10-3)
    
  # Use rms and mse to find the F statsitic
  rms/mse
  [1] 8.983518
  ```



## 5. Individual Tests of Predictors--`confint()`

We saw that R gave us the parameter estimates when we entered `summary(lm(liking ~ smile + money))`.

We can calculate the confidence interval as the:

- $$
  coefficient \; value \pm margin \;of \;error
  $$
  
  - where
  
    - $$
      margin \; of \; error = t * se
      $$
  
      

You've done this manually before. Let's try a faster way - using the function `confint()`. This function takes your fitted model as its first argument. Don't be scared by this, it just means it wants the output of your model `lm(liking ~ smile + money)`. It then produced a two-sided confidence interval, the size of which you specify using the argument `level` (e.g `level = 0.95` is 95%). Let's try it out!

- **Instructions**

  - In your script, the fitted model is already assigned to `mod`.
  - In your script, find the confidence interval of `mod` by placing it between brackets inside `confint()`.
  - The default setting of `confint()` is to produce the 95% confidence interval, however we are going to find the 90% confidence interval by adding the argument `level = 0.9` inside the brackets.

- **Answers**

  ```R
  # Fited model
  mod <- lm(liking ~ smile + money)
  confint(mod)
                   2.5 %   97.5 %
  (Intercept) -3.0370146 4.269436
  smile       -2.5594405 5.538505
  money        0.3529717 1.248529
  
  # Find confidence interval of fitted model
  confint(mod,level=0.9)
                     5 %     95 %
  (Intercept) -2.3108177 3.543239
  smile       -1.7545761 4.733641
  money        0.4419823 1.159519
  
  confint(mod,level=0.9, "smile")
              5 %     95 %
  smile -1.754576 4.733641
  ```



## 6. Assumptions I--Linearity&Homoscedasticity

Before we can use regression analyses we need to make sure that our data fits all necessary assumptions.

The assumption of **linearity** says that the predictors should be linearly related to the response variable. As we cannot really do this when we have more than one predictor, we are going to look at the residuals against the response variable. We would hope to see the residuals move in a straight line.

While we are looking at these residuals, we can also check out the assumption of **homoscedasticity**. To check this we should make sure the variation in residuals is roughly even at all levels of the predictor.

We can get the residuals from the `summary()` of our model, using `$residuals`. For example: `summary(model)$residuals`. We can then plot the residuals against the predictors using `plot()`, which takes the x-axis data as the first argument, and the y-axis data as the second argument.

- **Instruction**

  - In your script, index the residuals from your model using `$`, and assign them to the object `resmod`
  - In your script, plot `resmod` alongside `smile` and `money` using the function `plot()`.
  - The first argument of `plot()` is the data that goes on the x-axis, and the second is the data on the y-axis. For example: `plot(x_data, y_data)`.

- **Answers**

  ```R
  # sample code# Vector containing the amount of money you gave participants (predictor)
  money <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  
  # Vector containing the amount the participants liked you (response)
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  
  # Assign regression model to object "mod"
  mod <- lm(liking ~ smile + money)
  
  # Obtain the residuals from mod using $, assign to "resmod"
  resmod <- mod$residuals
  
  # Plot the 'smile' on the x-axis, with the residuals on the y-axis
  plot(smile, resmod)
  
  
  # Plot the 'money' on the x-axis, with the residuals on the y-axis
  plot(money, resmod)
  
  ```

  ![](data:image/png;base64,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)

  ![](data:image/png;base64,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)

## 7. Assumptions II--Independent errors&Sufficient observations&Outliers(residuals/SD)

Let's pretend that we obtained our data randomly from independent participants. That means we have addressed the assumption of **independent errors**.

Another assumption that we can tell definitively is **sufficient observations**. We have ten observations and two predictors - we know already that this is not enough!

One good thing about having only ten observations is that it is easy to manually check for regression outliers. We do this by looking at the standardized residuals. We can find the standardized residuals by *dividing the values of the residuals by the standard deviation of the residuals*. Standardized residuals greater than 3 or less than -3 are likely outliers.

- **Instructions**

  - Your residuals are in your script as `resmod`, and you can find the standard deviation of the residuals using the function `sd()`, which takes the object containing your residuals between brackets.
  - In your script, add a line of code to print the standardised resdiuals.
  - Inspect the output and see if you can see any standardized outliers over 3, or under -3.

- **Answers**

  ```R
  # Vector containing the amount of money you gave participants (predictor)
  money <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  
  # Vector containing the amount the participants liked you (response)
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  
  # Assign regression model to object "mod"
  mod <- lm(liking ~ smile + money)
  
  # Obtain the residuals from mod using $, assign to "resmod"
  resmod <- mod$residuals
  resmod
  # Print the standardized residuals
  sd<-sd(resmod)
  resmod/sd
  plot(resmod/sd)
  ```

  ```R
  # Vector containing the amount of money you gave participants (predictor)
  money <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  # Vector containing the amount the participants liked you (response)
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  # Assign regression model to object "mod"
  mod <- lm(liking ~ smile + money)
  # Obtain the residuals from mod using $, assign to "resmod"
  resmod <- mod$residuals
  resmod
             1            2            3            4            5            6 
  -0.110680705 -0.460384427 -0.007994613 -0.868166014  3.633177032 -0.569666993 
             7            8            9           10 
  -2.317277179  0.586159403 -0.163544319  0.278377816 
  # Print the standardized residuals
  sd<-sd(resmod)
  resmod/sd
             1            2            3            4            5            6 
  -0.073659800 -0.306393286 -0.005320544 -0.577778530  2.417938104 -0.379122602 
             7            8            9           10 
  -1.542185459  0.390098567 -0.108841391  0.185264941 
  plot(resmod/sd)
  ```

  ![](data:image/png;base64,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)

## 8. Assumptions III-- Residuals Normality

The last assumption we're going to check is whether residuals are normally distributed. We can do this through plotting the residuals in a histogram using the function `hist()`. If residuals are normally distributed there should be the highest frequency around the middle value, and gradually less as you move away from this.

Let's try it!

- **Instructions**

  - Add a line of code to your script that produces a histogram of residuals using the function `hist()`.
  - `hist()` takes a vector of values as its first (and in this case, only) argument.

- **Answers**

  ```R
  # Vector containing the amount of money you gave participants (predictor)
  money <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  
  # Vector containing the amount the participants liked you (response)
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  
  # Assign regression model to object "mod"
  mod <- lm(liking ~ smile + money)
  
  # Obtain the residuals from mod using $, assign to "resmod"
  resmod <- mod$residuals
  
  # Plot the residuals in a histogram using hist()
  hist(resmod)
  ```

  ![](data:image/png;base64,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)



## 9. Categorical Predictors I--`as.factor(variable)`

So far we have given participants money, smiled at them, but haven't said anything - a bit creepy, right?

Let's include a variable called `talk`. We either said something neutral ("Nice weather today"), rude ("You smell"), or polite ("You are great"). We coded these responses as 1, 2, and 3, respectively. We have to tell R that these values (1, 2, and 3) are categories and not numbers! We do this by making them into **factors** using the function `as.factor()`. For example: `as.factor(variable)`. This tells R that 'data' is categorical.

Let's make `talk` into a categorical variable, and add it to our regression analysis!

- **Instructions**
  - In your script, add `talk` to your regression model as a predictor.
  - In your regression mode, use the function `as.factor()` on `talk` so that the model knows that the variable `talk` is a factor (category).
  - Hit "Submit" and look at the outcome!

- **Answer**

  ```R
  # Vector containing the amount of money you gave participants (predictor)
  money <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  
  # Vector containing the amount the participants liked you (response)
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  
  # Vector containing what you said to participants (predictor)
  talk <- c(1, 2, 3, 2, 3, 1, 2, 1, 3, 1)
  as.factor(talk)
  # Add "talk" to your regression model as a factor predictor
  mod <- lm(liking ~ smile + money+as.factor(talk))
  
  # Obtain regression coefficients from "mod"
  summary(mod)
  ```

  ```R
  # Vector containing the amount of money you gave participants (predictor)
  money <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  # Vector containing the amount the participants liked you (response)
  liking <- c(2.2, 2.8, 4.5, 3.1, 8.7, 5.0, 4.5, 8.8, 9.0, 9.2)
  # Vector containing what you said to participants (predictor)
  talk <- c(1, 2, 3, 2, 3, 1, 2, 1, 3, 1)
  as.factor(talk)
   [1] 1 2 3 2 3 1 2 1 3 1
  Levels: 1 2 3
  # Add "talk" to your regression model as a factor predictor
  mod <- lm(liking ~ smile + money+as.factor(talk))
  # Obtain regression coefficients from "mod"
  summary(mod)
  
  Call:
  lm(formula = liking ~ smile + money + as.factor(talk))
  
  Residuals:
        1       2       3       4       5       6       7       8       9      10 
  -0.3812  1.0200 -0.9840 -0.1779  1.7028 -1.1737 -0.8420  1.3264 -0.7188  0.2285 
  
  Coefficients:
                   Estimate Std. Error t value Pr(>|t|)   
  (Intercept)        1.9694     1.4816   1.329  0.24120   
  smile             -0.1523     1.5761  -0.097  0.92676   
  money              0.7033     0.1610   4.367  0.00724 **
  as.factor(talk)2  -1.4892     1.0999  -1.354  0.23373   #控制其中一个变量
  as.factor(talk)3   1.5572     1.1558   1.347  0.23571   
  ---
  Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
  
  Residual standard error: 1.378 on 5 degrees of freedom
  Multiple R-squared:  0.8689,	Adjusted R-squared:  0.7641 
  F-statistic: 8.286 on 4 and 5 DF,  p-value: 0.01973
  ```

- **Explained**

  Enter `summary(lm(liking ~ smile + money + talk))` into your console to see the output from your regression analysis that includes how much giving people money, smiling and saying neutral, rude or polite statments predicts how much people like you.

  You included the neutral/rude/polite statments in your model as the values 1, 2, and 3. Behind the scenes, R compares the regression slope for rude statements, to the regression slope for neutral statements (`talk2`), and compared the regression slope for polite statements to the regression slope for neutral statements (`talk3`). The output shows coefficient estimates `talk2` and `talk3`.



## 10. Regression With a Categorical Response I--`glm(response variable ~ predictor variable + predictor variable, family = binomial)`.

So we've seen what happens with a categorical predictor variable, what about a categorical response (response) variable?

Let's say instead of a continuous measure of liking, we have a binary measure - either someone likes us (1), or they don't (0).

We can see whether we can predict whether someone likes us or not using **logistic regression**.

While previously we have used the `lm()` function, for logistic regression we will use the `glm()` function, with the added argument `family = binomial`. This should look something like this: `glm(response variable ~ predictor variable + predictor variable, family = binomial)`.

- $$
  glm(formula,data,family)
  $$

  - **formula**是表示变量之间的关系的符号。
  
  - **data**是给出这些变量的值的数据集。
  
  - **family**是R语言对象来指定模型的细节。 它的值是二项逻辑回归。
  
  - family：每一种响应分布（指数分布族）允许各种关联函数将均值和线性预测器关联起来。
  
    - 常用的family：
      - binomial(link='logit')     ----响应变量服从二项分布，连接函数为logit，即logistic回归
      - binomial(link='probit')    ----响应变量服从二项分布，连接函数为probit
      - poisson(link='identity')   ----响应变量服从泊松分布，即泊松回归
  
- **Instructions**

  - In your script add a line of code that finds the logistic regression model for liking, predicted by smile and money.
  - Assign the outcome of this mode to object `logmod`.
  - Use the `summary()` function to find the regression coefficients for `logmod`.
  - 'Submit' and look at the output!

- **Answers**

  ```R
  # Vector containing the amount the participants liked you (response)
  liking <- as.factor(c(0, 0, 0, 0, 1, 1, 0, 1, 1, 1))
  
  # Vector containing the amount of money you gave participants (predictor)
  money <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  
  # Apply the logistic regression model to our data using glm(), assign to logmod
  logmod <- glm(liking~smile+money,family=binomial(link="logit"))
  
  # Find the regression coefficients for our regression model using summary()
  summary(logmod)
  logfunction<-function(smile,money){
      return (exp(-4.5794-1.4755*smile+0.9312*money)/(1+exp(-4.5794-1.4755*smile+0.9312*money)))
  }
  plot(logfunction(smile,money))
  ```

  ```R
  
  # Vector containing the amount the participants liked you (response)
  liking <- as.factor(c(0, 0, 0, 0, 1, 1, 0, 1, 1, 1))
  # Vector containing the amount of money you gave participants (predictor)
  money <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  # Vector containing how much you smiled (predictor)
  smile <- c(0.6, 0.7, 1.0, 0.1, 0.3, 0.1, 0.4, 0.8, 0.9, 0.2)
  # Apply the logistic regression model to our data using glm(), assign to logmod
  logmod <- glm(liking~smile+money,family=binomial(link="logit"))
  # Find the regression coefficients for our regression model using summary()
  summary(logmod)
  
  Call:
  glm(formula = liking ~ smile + money, family = binomial(link = "logit"))
  
  Deviance Residuals: 
       Min        1Q    Median        3Q       Max  
  -1.77741  -0.25964   0.00357   0.53708   1.33627  
  
  Coefficients:
              Estimate Std. Error z value Pr(>|z|)
  (Intercept)  -4.5794     3.2763  -1.398    0.162
  smile        -1.4755     3.6210  -0.407    0.684
  money         0.9312     0.5934   1.569    0.117
  
  (Dispersion parameter for binomial family taken to be 1)
  
      Null deviance: 13.863  on 9  degrees of freedom
  Residual deviance:  6.943  on 7  degrees of freedom
  AIC: 12.943
  
  Number of Fisher Scoring iterations: 6
  logfunction<-function(smile,money){
      return (exp(-4.5794-1.4755*smile+0.9312*money)/(1+exp(-4.5794-1.4755*smile+0.9312*money)))
  }
  plot(logfunction(smile,money))
  ```

  ![](data:image/png;base64,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)