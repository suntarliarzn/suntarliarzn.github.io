---

title: Basic Statistics - (13) R[6] Significance Testing

tags: Statistics; Significance Testing; p-value; t-test();
layout: article

mathjax: true

mathjax_autoNumber: true

---

# Basic Statistics - (13) R[6] Significance Testing

<!--more-->

## 1. T分布函数

- ### `dt(x, df)`t分布密度函数

  x轴x点的区间概率y值。

  ```R
  > dt(0, 100)
  [1] 0.3979462
  ```

  

- ### `pt(x,df,lower.tail = TRUE)` t分布分布函数

  z-score值的累积概率值

  ```R
  > pt(1.96, 100)
  [1] 0.9736105
  > pt(1.96,100,lower.tail=FALSE)
  [1] 0.02638945
  ```

  

- ### `qt(q,df,lower.tail = TRUE)`t分布（下侧）分位数

  概率的z-score值

  ```R
  > qt(0.05, 100)
  [1] -1.660234
  > qt(0.05,100,lower.tail=FALSE)
  [1] 1.660234
  ```

  

- ### `rt(n,df)`n个t分布的随机数

- ### The t distribution example 1

  Often when comparing means of continuous variables we use a t distribution instead of the normal distribution. The main reason to use the t distribution here is because we often have to deal with small samples.

  Now image the following example of height: They say that Dutch people are among the tallest in the world with an average male height of 185 centimeters with a standard deviation of 5 centimers. We take a sample of 50 males from this population and find an average height of 186.5 centimeters which is above the population mean. Imagine we want to do a one-sided hypothesis test where we check whether the population mean of Dutch male height is larger than 185 and we use a significance level of 0.05. There are several things we can do now and 1 thing that we must do.

  Firstly, we need to calculate the degrees of freedom which refers to the amount of independent samples in the set of data, which is equal to the sample size - 1. Thus, the degrees of freedom here is 50−1=49. Secondly, we could either calculate the associated p value or, alternatively, we could calculate the critical cut-off value. The critical cut-off value in this case is the 95th percentile as we are doing a one-sided hypothesis test.

  - Instruction

    - Calculate the critical cut-off value using the `qt()` function given the fact that we perform a one-sided hypothesis test with a significance level of 0.05. Round this value to two digits and store it in a variable called `cut_off`. You can look up the help documentation of this function by typing `help(qt)` in the console.
    - Print the value of `cut_off` to the console.

  - **Answer**

    ```r
    # calculate the critical cut off value and store it in a variable called cut_off
    cut_off<-qt(0.05, 49, lower.tail=FALSE)
    
    
    # print cut_off to the console
    cut_off
    ```

    ```r
    > # calculate the critical cut off value and store it in a variable called cut_off
    > cut_off<-qt(0.05, 49, lower.tail=FALSE)
    > 
    > 
    > # print cut_off to the console
    > cut_off
    [1] 1.676551
    ```

- ### The t distribution example 2

  In the last exercise we calculated the critical value using the `qt()` function. However, we still do not know our t test statistics and whether this statistics is larger than the cut-off value. Let's calculate the t value in this exercise and see which p value is associated with it. The formula for the standard error is the following:


  $$
  \sigma / \sqrt(n)
  $$


  The formula for the t value is the same as the formula for the Z value:
  $$
  t = \frac{\bar{x} - \mu}{se}
  $$

  - Instruction

    - Using our example where we had a sample of 50 males with a mean height of 186.5 and a population standard deviation of 5 and population mean of 185, calculate the associated standard error, round this value to two digits and store it in the variable `se`.
    - Calculate the associated t value, round it to two digits and store it in the variable `t_value`. Remember to use the same formula as when calculating a z score.
    - Using the `pt()` function with `lower.tail = FALSE`, calculate the associated p value, round it to two digits and store it in a variable called `p_value`. Remember that we are doing a one-sided test.
    - print the variable `p_value` to the console.

  - **Answer**

    ```R
    > # calculate the standard error and store it in the variable se
    > se<-round(5/sqrt(50),2)
    > se
    [1] 0.71
    > # calculate the t value and store it in a variable called t_value
    > t_value<-round((186.5-185)/se,2)
    > t_value
    [1] 2.11
    > # calculate the p value and store it in a variable called p_value
    > p_value<-round(pt(t_value, 49, lower.tail=FALSE),2)
    > 
    > # print p_value to the console
    > p_value
    [1] 0.02
    ```

    

## 2. Confidence interval and significance testing

Do you remember how to calculate confidence intervals? If not, let's shortly recap this. You can calculate a confidence interval, say a 95% confidence interval, by taking the mean and adding and subtracting its standard error multiplied by the given t value or z value. Usually confidence intervals are expressed as a two-sided range as we will also do in this exercise.

A 95% confidence intervals can be interpreted as that we are 95% confident that this interval will contain our population statistic. Take our last example where we found a standard error of 0.71, a population mean of 185, and a sample mean of 186.5. As the sample size was 50, our relevant degrees of freedom were 49.

- Instruction

  - Calculate the associated t value with a 95% confidence interval, round it to two digits and store it in the variable `t_value`. Be aware of the fact that this is similar to a two-way hypothesis testing and you need to consider areas in both tails so you will need to use the 97.5 or a 2.5 percentile.
  - Calculate the 95% confidence interval, round the lower and upper value of the confidence interval to two digits and store it in a variable called `conf_interval`
  - Print the variable `conf_interval` to the console.

- **Answer**

  ```R
  > #' calculate a 95% confidence interval as a vector with two values and store it in a
  > #' a variable called conf_interval.The prefered option
  > conf_interval <- round(186.5 + c(-1, 1) * t_value * 0.71, 2)
  > # other accepted solutions
  > conf_interval2 <- 186.5 + c(-1, 1) * t_value * 0.71
  > conf_interval3 <- 186.5 + c(-1, 1) * t_value2 * 0.71
  > conf_interval4 <- round(186.5 + c(-1, 1) * t_value2 * 0.71, 2)
  > 
  > # print conf_interval to the console
  > conf_interval
  [1] 185.07 187.93
  > # calculate the t value and store it in the variable t_value
  > # The prefered option
  > t_value <- round(qt(0.975, df = 49), 2)
  > # other accepted solution
  > t_value2 <- qt(0.975, df = 49)
  > t_value
  [1] 2.01
  > #' calculate a 95% confidence interval as a vector with two values and store it in a
  > #' a variable called conf_interval.The prefered option
  > conf_interval <- round(186.5 + c(-1, 1) * t_value * 0.71, 2)
  > # other accepted solutions
  > conf_interval2 <- 186.5 + c(-1, 1) * t_value * 0.71
  > conf_interval3 <- 186.5 + c(-1, 1) * t_value2 * 0.71
  > conf_interval4 <- round(186.5 + c(-1, 1) * t_value2 * 0.71, 2)
  > 
  > # print conf_interval to the console
  > conf_interval
  [1] 185.07 187.93
  ```




## 3. [t-test()](https://blog.csdn.net/weixin_38322363/article/details/89811964)

| 参数        | 释义                                                         |
| ----------- | ------------------------------------------------------------ |
| x           | 唯一的必选参数，一个数值型非空向量，若为单样本检验，那么这里就是那个样本；若为双样本检验，这里就是样本之一 |
| y           | 可选参数，单样本检验时可以为空，双样本检验时是样本之一       |
| alternative | "two.sided"双侧检验，“greater”和“less”都是单侧检验，“greater”是右侧，“less”是左侧 |
| mu          | 单样本检验的时候是**0假设值**，双样本检验的时候是样本均值之差，默认值=0 |
| spaired     | 是否为配对t检验，TRUE为配对t检验                             |
| var.equal   | 是否将两个样本的方差视为相等，一般来说如果不能很确定会相等，这里就设置为FALSE，默认值为FALSE |
| conf.level  | 置信度，e.g. 0.95                                            |

```R
data<-c(3,7,3,3,0,8,1,12,5,8)
t.test(data,alternative="two.sided", mu=0)

	One Sample t-test

data:  data
t = 4.2597, df = 9, p-value = 0.002112
alternative hypothesis: true mean is not equal to 0
95 percent confidence interval:
 2.344708 7.655292
sample estimates:
mean of x 
        5 
```



## 4.  Significance testing: one-sided versus two-sided

An important consideration when doing hypothesis testing is whether to do a one-sided or a two-sided test. Consider the example that we are working with a significance level (![img](https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/fonts/HTML-CSS/TeX/png/Math/Italic/400/03B1.png?V=2.7.1)α) of 0.05. In the case we are doing a one-sided hypothesis test, we would only focus on one side of the distribution (either the right or the left side). Our entire cumulative probability of 0.05 would then be allocated to only this side. So what does this mean in practice? In practice this means that our rejection region starts at a probability of 0.95 when our alternative hypothesis tests whether a given value is greater than a population value. Alternatively, our rejection regions starts at a probability of 0.05 when our alternative hypothesis tests whether a given value is smaller than a population value. Let's consider what this means visually:

![img](https://s3.amazonaws.com/assets.datacamp.com/production/course_785/datasets/vis1.png)

In the above visualization, we have taken as an example the sampling distribution of the beard length of samples of 40 scandinavian hipsters. The mean here is 25 and the standard error is 0.55 `round(3.5 / sqrt(40), 2)`. The red area is considered the rejection region when we are doing a one-sided hypothesis where the alternative hypothesis checks whether the population mean of the beard length of scandinavian hipsters is larger than 25 millimeters.

- Instruction

  - The visualization mentions the value 25.90. This is the starting value of the rejection region. Consider our example mentioned above with a mean beard length of 25 and a standard error of 0.55. Reproduce the value of 25.90 using the `qnorm()` function and assign it to the variable `cut_off`. Make sure to round every value in this exercise to two digits.
  - Print the value of cut_off to the console
  
- **Answer**

  ```R
  # calculate the value of cut_off
  # qnorm是正态分布累积分布函数(CDF,Cumulative Distribution Function）的反函数，也就是说它可以视为pnorm的反函数，这里的q指的是quantile，即分位数。结果为得到一定分位数的数值。
  # pnorm函数中的p表示Probability，它的功能是，在正态分布的PDF曲线上，返回从负无穷到q的积分，其中这个q指的是一个Z-score。结果为某值的概率值。
  cut_off<-round(qnorm(0.05, mean=25, sd=0.55, lower.tail= FALSE),2)
  
  # print the value of cut_off to the console
  cut_off
  
  ```
  
  
  
  




## 5. Significance testing: one-sided versus two-sided (2)

In the last exercise, we calculated the cut-off value for a one-sided significance test. It is however more common to do a two-tailed significance test. If we stick to our significance level of 0.05, we would have to chop this value into two. This means that we get two rejection regions each corresponding to a cumulative probability of 0.025. Let's consider what this means visually:

![img](https://s3.amazonaws.com/assets.datacamp.com/production/course_785/datasets/vis2.png)

In the above visualization, we have taken as an example the sampling distribution of the beard length of samples of 40 scandinavian hipsters. The mean here is 25 and the standard error is 0.55 `round(3.5 / sqrt(40), 2)`. The red area is considered the rejection region when we are doing a two-tailed hypothesis test. This corresponds to the alternative hypothesis which checks whether the population mean of the beard length of scandinavian hipsters is not equal to 25 millimeters. As you can see the 0.05 probability is divided into two chunks of 0.025.

- Instruction

  - The visualization mentions the values of 23.92 and 26.08. These values indicate the start of the rejection region. Consider our example mentioned above with a mean beard length of 25 and a standard error of 0.55. Reproduce the value of 23.92 using the `qnorm()` function and assign it to the variable `lower_cut_off`. Make sure to round every value in this exercise to two digits.
  - Reproduce the value of 26.08 using the `qnorm()` function and assign it to the variable `upper_cut_off`. Make sure to round every value in this exercise to two digits.
  - Print the values of `lower_cut_off` and `upper_cut_off` to the console

- **Answer**

  ```R
  # calculate the value of the variable lower_cut_off
  lower_cut_off<- round(qnorm(0.025, mean=25, sd=0.55), 2)
  
  # calculate the value of the variable upper_cut_off
  upper_cut_off<-round(qnorm(0.025, mean=25, sd=0.55, lower.tail=FALSE),2)
  
  # print lower_cut_off to the console
  lower_cut_off
  
  # print upper_cut_off to the console
  upper_cut_off
  ```

  ```R
  > # calculate the value of the variable lower_cut_off
  > lower_cut_off<- round(qnorm(0.025, mean=25, sd=0.55), 2)
  > 
  > # calculate the value of the variable upper_cut_off
  > upper_cut_off<-round(qnorm(0.025, mean=25, sd=0.55, lower.tail=FALSE),2)
  > 
  > # print lower_cut_off to the console
  > lower_cut_off
  [1] 23.92
  > 
  > # print upper_cut_off to the console
  > upper_cut_off
  [1] 26.08
  ```

  

## 6. Significance testing: one-sided versus two-sided (3)

In the last exercises we saw that there are different cut-off values for one-sided and two-tailed hypothesis tests. You saw that in order to reject the null hypothesis when performing a two-tailed hypothesis, you would need to pass a higher threshold. In this exercise and the exercise to come, we will calculate probabilities based on sample means.

Let's go back to our example of scandinavian hipsters. Here we had a population mean of 25 and a population standard deviation of 3.5. Because we were taking samples of 40 subjects from this population, we were actually working with the standard error which was 3.5 / \sqrt(40_. Imagine we found a sample mean of exactly 26 and a corresponding Z score of 1.81. Whether this result is significant depends on the test we do. If we would do a one-sided hypothesis test against a 5% significance level, we would only have to test for the effect in one direction. As such, we could check the following: P(>1.81). In order to do this, we could use our `pnorm()` function which calculates a probability that corresponds to a quantile or z score. We could use it in the following way: `pnorm(1.81, lower.tail = FALSE)`. We set the lower tail equal to `FALSE` because `pnorm()` calculates the cumulative probability until the value of 1.81 and we want to know the probability of finding a value of 1.81 or larger. The functions yields a p value of 0.035 which is smaller than 0.05.

- Instruction

  - Imagine that we found a sample mean of 25.95 with a sample size of 40. Calculate the corresponding test statistic, a z score in this case, and assign it to the variable `z_value`. Look at the hint if you have forgotten the formula to calculate a z score. Assume that the population mean and standard deviation are the same as described above. Round all values in this exercise to two digits.
  - Use the `pnorm()` function to find the probability of finding a sample mean as large or more extreme and store this in the variable `p_value`. Round all values in this exercise to two digits.

- **Answer**

  ```R
  # calculate the z score and assign it to a variable called z_value
  z_value<-round((25.95-25)/(3.5/sqrt(40)),2)
  # calculate the corresponding p value and store it in the variable called p_value
  p_value<-round(pnorm(z_value, lower.tail=FALSE),2)
  
  # print p_value to the console
  p_value
  ```

  ```R
  > # calculate the z score and assign it to a variable called z_value
  > z_value<-round((25.95-25)/(3.5/sqrt(40)),2)
  > # calculate the corresponding p value and store it in the variable called p_value
  > p_value<-round(pnorm(z_value, lower.tail=FALSE),2)
  > 
  > # print p_value to the console
  > p_value
  [1] 0.04
  ```


## 7. Significance testing: one-sided versus two-sided (4)

In the last exercises we calculated a p value corresponding to a one-sided test. Given the fact that we were testing against a significance level of 0.05, we have actually found a significant result. But what if we would have done a two-sided hypothesis test?

In the instructions of the last exercise, we found a sample mean of exactly 26. When doing a one-sided hypothesis test, we find a corresponding p value of 0.04 to our z score of 1.81. If we would however do a two-sided hypothesis test, we should not only look for P(>1.81). In this case we should test for both P(>1.81)and P(<−1.81). As such, to get the p value that corresponds to z score of 1.81 we have to sum both P(>1.81) and P(<−1.81). As the Z distribution we are working with is symmetric, we could multiply the outcome of `round(pnorm(1.81, lower.tail = FALSE), 2)` by 2. This would yields a p value of 0.07 in which case we would fail to reject the null hypothesis as 0.07 is larger than 0.05.

- Instruction
  - Imagine that we found a sample mean of 25.95 with a sample size of 40. Calculate the corresponding test statistic, a z score in this case, and assign it to the variable `z_value`. Assume that the population mean and standard deviation are the same as described above. Round all values to two decimals.
  - Assume that we are doing a two-sided hypothesis test. Use the function `pnorm()` to find the corresponding p value and print this to the console. Round the obtained p value to two decimals.

- **Answer**

  ```R
  # calculate the z score and assign it to a variable called z_value
  z_value<-round((25.95-25)/(3.5/sqrt(40)),2)
  z_value
  # calculate the corresponding p value and store it in the variable called p_value
  p_value<-round(pnorm(z_value, lower.tail=FALSE),2)*2
  
  # print p_value to the console
  p_value
  ```

  ```R
  > # calculate the z score and assign it to a variable called z_value
  > z_value<-round((25.95-25)/(3.5/sqrt(40)),2)
  > z_value
  [1] 1.72
  > # calculate the corresponding p value and store it in the variable called p_value
  > p_value<-round(pnorm(z_value, lower.tail=FALSE),2)*2
  > 
  > # print p_value to the console
  > p_value
  [1] 0.08
  ```



## 8. Hypothesis testing and the binomial distribution (2)

So now we know our hypotheses, let's actually test them. To test hypotheses and calculate p values, we can use the function `pbinom()`. Looks familiar, doesn't it? Imagine we want to test the hypothesis that a student who scored 18 out of 25 questions did better than randomly guessing, we can calculate the area under the curve, that is, `pbinom(17, size = 25, prob = 0.20)`. While this formula calculates the area under the curve for values below 17 and equal to 17, we need to know the area ABOVE 17. Because the total probability of all possible scores occuring is 1, we can subtract the probability of scores less than or equal to 17 from the total area of 1, and the remaining value will be the probability of a score that is equal to or larger than 18.

- Instruction

  - Imagine we have a student who got 12 out of 25 questions correctly and the probability of guessing a question correctly is 0.20. Calculate the probability of answering 12 or more questions correctly given that the student is merely guessing and store this in the variable `p_value`. Round this probability to two digits. Remember that we are doing a one-sided hypothesis test.
  - Print `p_value` to the console
  - Assign your conclusion whether H0 (the student is merely guessing) is accepted or rejected to the variable `conclusion`, that is, assign either the value "accepted" or the value "rejected" to the variable `conclusion`.

- **Answer**

  ```R
  variable p_value
  se<-sqrt(((12/25)*(13/25))/25)
  se
  p_value<-round(1-pbinom(12, size=25, prob = 0.2),2)
  # print the probability calculated above to the console
  p_value
  
  # assign either accepted or rejected to the variable conclusion
  conclusion<-"rejected"
  ```

  ```R
  > #' calculate the probability of answering 12 ore more questions correctly given
  > #' that the student is merely guessing and store this in the variable p_value
  > se<-sqrt(((12/25)*(13/25))/25)
  > se
  [1] 0.09991997
  > p_value<-round(1-pbinom(12, size=25, prob = 0.2),2)
  > # print the probability calculated above to the console
  > p_value
  [1] 0
  > 
  > # assign either accepted or rejected to the variable conclusion
  > conclusion<-"rejected"
  ```

  

## 9. Hypothesis testing and the binomial distribution (3)

In the last exercise, we did a hypothesis test by calculating the p value by using the `pbinom()` function. However, a more widely used way to do so is to calculate the mean (the expected probability) of our distribution and its standard deviation and to verify how many standard deviations the observed probability is removed from the expected probability (the z score). Because we usually test our hypothesis using a sample, we work with the sampling distribution instead of the population distribution. This means that we use the standard error, rather than the standard deviation. Recall that the formula for the standard error for a binomial distribution was the following:
$$
\sqrt{\frac{p(1-p)}{n}}
$$

- Instructions

  - Calculate the mean (expected probability) and standard error and store them in the variable `average` and `se`. Remember that we worked with an exam of 25 questions and the probability of guessing the correct answer on a question was 0.20. Round these values to 2 digits.
  - Assume that a student answered 12 questions correctly. Now calculate the z value and store this in the variable `z_value`. Round this value to 2 digits.
  - Lastly, calculate the associated p value, round this value to two digits and store it in the variable p_value. Remember that we are doing a one-sided hypothesis test.
  - print p_value to the console

- **Answer**

  ```R
  # calculate the mean (expected probability) and assign it to a variable called average
  average<- 0.2
  average
  # calculate the standard error and assign it to a variable called se
  se<- round(sqrt(0.2*0.8/25),2)
  se
  # calculate the z value and assign it to a variable z_value
  z_value<-round((12/25-0.2)/se,2)
  z_value
  # calculate the p value and store it in a variable p_value
  p_value<-round(pnorm(z_value, lower.tail=FALSE),2)
  
  # print p_value to the console
  p_value
  ```

  ```R
  # calculate the mean (expected probability) and assign it to a variable called average
  average<- 0.2
  average
  # calculate the standard error and assign it to a variable called se
  se<- round(sqrt(0.2*0.8/25),2)
  se
  # calculate the z value and assign it to a variable z_value
  z_value<-round((12/25-0.2)/se,2)
  z_value
  # calculate the p value and store it in a variable p_value
  p_value<-round(pnorm(z_value, lower.tail=FALSE),2)
  
  # print p_value to the console
  p_value
  ```

  

