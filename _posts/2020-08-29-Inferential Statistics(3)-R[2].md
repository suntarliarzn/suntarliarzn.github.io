---

title: Inferential Statistics(3)-R[2]
key: 20200829

tags: Statistics; R; prop.test; 

layout: article

mathjax: true

mathjax_autoNumber: true

---



# Inferential Statistics(3)-R[2]

*<!--more-->*

## 1. Comparing two proportions--`prop.test()`

**(1)**When we deal with categorical data, our parameter of interest is a sample proportion. An example of a sample proportion could be the proportion of people that are left wing voters. Imagine that we want to compare the proportion of males that are left wing voters to the proportion of females that are left wing voters. In this case our two groups are independent. To do the above analysis, we usually use a Z test.

Before we do a Z test however to see whether the difference between two proportions is meaningful, we usually calculate 2 things:

1. The difference between the two sample proportions
2. The standard error

The difference between the two sample proportions is easily calculated with the following formula: p1−p2. The formula for the standard error is a little bit trickier as it involves the calculation of pooled estimate p<sup>^</sup>. You can calculate p<sup>^</sup> with the following formula: p=(p1+p2)/(n1+n2). Here, p1 stands for the number of successes in group 1, p2 for the number of successes in group 2, n1 for the sample size of group 1 and n2 for the sample size of group 2.

- **Instructions**

  - In this exercise we have a sample of 100 males with a proportion of left wing voters of 0.6 and a sample of 150 females with a proportion of left-wing voters of 0.42. Calculate the difference between the male and the female sample proportion and store it in the variable `difference`
  - Calculate the pooled estimate p^p^ and store it in a variable called pooled `pooled`

- **Answers**

  ```R
  # calculate the difference in sample proportions and store it in a variable called difference
  n1<-100
  p1<-0.6
  n2<-150
  p2<-0.42
  difference<-(p1-p2)
  
  # calculate the pooled estimate and store it in a variable called pooled
  pooled<-(n1*p1+n2*p2)/(n1+n2)
  pooled
  ```

  ```R
  > # calculate the difference in sample proportions and store it in a variable called difference
  > n1<-100
  > p1<-0.6
  > n2<-150
  > p2<-0.42
  > difference<-(p1-p2)
  > 
  > # calculate the pooled estimate and store it in a variable called pooled
  > pooled<-(n1*p1+n2*p2)/(n1+n2)
  > pooled
  [1] 0.492
  ```

**(2)** Now we have calculated the pooled estimate p<sup>^</sup>, we can move on to calculate the standard error. The formula for the standard error is the following:
$$
z = \frac{\hat{p}_1-\hat{p}_2}{\sqrt{\hat{p}(1-\hat{p})({1\over{n_1}}+{1\over{n_2}})}}\\
where \ \hat{p}=\frac{n_1{\hat{p}_1}+n_2{\hat{p}_2}}{n_1+n_2}
$$

- **Instructions**

  - The pooled estimate is given in the sample code. It is named `pooled`. Use this variable to calculate the standard error and store this in the variable called `se`. Remeber that the sample sizes n1 = 100 and n2 = 150

- **Answer**

  ```R
  # calculate the difference in sample proportions and store it in a variable called difference
  difference <- 0.6 - 0.42
  
  
  # calculate the pooled estimate and store it in a variable called pooled
  pooled <- ((0.6 * 100) + (0.42 * 150)) / (100 + 150)
  
  # calculate the standard error and store it in a variable called se
  se<-sqrt(pooled*(1-pooled)*((1/100)+(1/150)))
  se
  ```

  ```R
  > # calculate the difference in sample proportions and store it in a variable called difference
  > difference <- 0.6 - 0.42
  > 
  > # calculate the pooled estimate and store it in a variable called pooled
  > pooled <- ((0.6 * 100) + (0.42 * 150)) / (100 + 150)
  > 
  > # calculate the standard error and store it in a variable called se
  > se<-sqrt(pooled*(1-pooled)*((1/100)+(1/150)))
  > se
  [1] 0.06454146
  ```



**(3)** So now we know both the difference in proportions and we know our standard error. We now have enough information to calculate the z value. The formula for the z value of differences between two proportions in slightly different from the regular formula but it will generally feel very familiar. The formula is displayed below:
$$
z = \frac{\hat{p}_1-\hat{p}_2}{\sqrt{\hat{p}(1-\hat{p})({1\over{n_1}}+{1\over{n_2}})}}\\
where \ \hat{p}=\frac{n_1{\hat{p}_1}+n_2{\hat{p}_2}}{n_1+n_2}
$$

- **Instructions**

  - Using the data and code in our sample code, calculate the Z value and store it in a variable `z_value`.
  - Print the variable `z_value` to the console

- **Answers**

  ```R
  # calculate the difference in sample proportions and store it in a variable called difference
  difference <- 0.6 - 0.42
  
  # calculate the pooled estimate and store it in a variable called pooled
  pooled <- ((0.6 * 100) + (0.42 * 150)) / (100 + 150)
  
  # calculate the standard error and store it in a variable called se
  se <- sqrt(pooled * (1 - pooled) * ((1 / 100) + (1/ 150)))
  
  # calculate the z value and store it in a variable called z_value
  z_value<-difference/se
  z_value
  ```

  ```R
  > # calculate the difference in sample proportions and store it in a variable called difference
  > difference <- 0.6 - 0.42
  > 
  > # calculate the pooled estimate and store it in a variable called pooled
  > pooled <- ((0.6 * 100) + (0.42 * 150)) / (100 + 150)
  > 
  > # calculate the standard error and store it in a variable called se
  > se <- sqrt(pooled * (1 - pooled) * ((1 / 100) + (1/ 150)))
  > 
  > # calculate the z value and store it in a variable called z_value
  > z_value<-difference/se
  > z_value
  [1] 2.788905
  ```

**(4)**The last step in the process is to calculate the p value associated with the Z value and to compare it to the critical cut-off point. To calculate this, you can use the `pnorm()` function again. In order to check whether this p value is small enough to reject our null hypothesis, we first have to know two things:

1. What is the significance level against which we are testing?
2. Are we doing a one-sided or two-sided hypothesis test?

In this exercise, we are going to be testing against a significance level of 0.01. We are also going to do a two-sided hypothesis test. If you are using a significance level of 0.01, a two-tailed test allots half of your alpha to testing the statistical significance in one direction and half of your alpha to testing statistical significance in the other direction. This means that .005 is in each tail of the distribution of your test statistic. If you would sum both tails, you would end up having a total significance level of 0.01. Using the `pnorm()` function to calculate a p value that is associated with a z value, you only calculate the p value in 1 of the tails. If you do a two-sided hypothesis test, you would therefore need to multiply this p value by 2.

- **Instruction**

  - You can use the [`pnorm()` function](https://suntarliarzn.github.io/2020/05/02/Basic-Statistics(07)-R-3.html#dnormpnormqnormrnorm) the following way: `pnorm(q, lower.tail = FALSE)`. In this case the q parameter is your z value.
  - Calculate the associated p value with our z value multiplied by 2. Assign this to the object `p_value`.
  - Would you reject the null hypothesis that there is not difference between the proportion of male and female left-wing voters? Assign either "rejected" or "not rejected" to the variable `conclusion`

- **Answers**

  ```R
  # calculate the difference in sample proportions and store it in a variable called difference
  difference <- 0.6 - 0.42
  
  
  # calculate the pooled estimate and store it in a variable called pooled
  pooled <- ((0.6 * 100) + (0.42 * 150)) / (100 + 150)
  
  # calculate the standard error and store it in a variable called se
  se <- sqrt(pooled * (1 - pooled) * ((1 / 100) + (1/ 150)))
  
  # calculate the z value and store it in a variable called Z_value
  z_value = difference / se
  z_value
  # calculate the associated p_value and store it in a variable called p_value
  p_value<-2*pnorm(z_value, lower.tail=FALSE)
  p_value
  # decide what your decision is and put it in a variable called conclusion
  conclusion<-c("rejected")
  ```

  ```R
  > # calculate the difference in sample proportions and store it in a variable called difference
  > difference <- 0.6 - 0.42
  > 
  > # calculate the pooled estimate and store it in a variable called pooled
  > pooled <- ((0.6 * 100) + (0.42 * 150)) / (100 + 150)
  > 
  > # calculate the standard error and store it in a variable called se
  > se <- sqrt(pooled * (1 - pooled) * ((1 / 100) + (1/ 150)))
  > 
  > # calculate the z value and store it in a variable called Z_value
  > z_value = difference / se
  > z_value
  [1] 2.788905
  > # calculate the associated p_value and store it in a variable called p_value
  > p_value<-2*pnorm(z_value, lower.tail=FALSE)
  > p_value
  [1] 0.005288657
  > # decide what your decision is and put it in a variable called conclusion
  > conclusion<-c("rejected")
  ```



**(5)**After the last 4 exercises you may have wondered if there would be a convenience function in R that makes it easier to see whether two proportions differ significantly. If this is the case, your intuition was right. 

**In R you can use the function `prop.test()` whether there is a significant difference between two proportions.**

```R
prop.test(x, n, p = NULL, alternative = c("two.sided","less","greater"),conf.level = 0.95,correct = TRUE)
```

- x具有特征的样本数

  a vector of counts of successes, a one-dimensional table with two entries, or a two-dimensional table (or matrix) with 2 columns, giving the counts of successes and failures, respectively.

- n样本总数

  a vector of counts of trials; ignored if `x` is a matrix or a table.

- p设置假设检验的原假设比率值

  a vector of probabilities of success. The length of `p` must be the same as the number of groups specified by `x`, and its elements must be greater than 0 and less than 1.

- alternative设置检验方式

  a character string specifying the alternative hypothesis, must be one of `"two.sided"` (default), `"greater"` or `"less"`. You can specify just the initial letter. Only used for testing the null that a single proportion equals a given value, or that two proportions are equal; ignored otherwise.

- conf.level置信水平

  confidence level of the returned confidence interval. Must be a single number between 0 and 1. Only used when testing the null that a single proportion equals a given value, or that two proportions are equal; ignored otherwise.

- correct是否使用Yates连续修正，默认为TRUE。

  a logical indicating whether Yates' continuity correction should be applied where possible.

There are several ways of providing input to the function of `prop.test()`. We will perform the function on the matrix `vote_behavior` that is available in your scrip. This matrix essentially is the same as a contingency table. Each cell provides information on both sex and voting behavior. For instance, the first cell provides the information on the the amount of males that are left-wing voters, while the cell in the first row and second column provides information on the number of males that are not left wing voters.

- **Instructions**

  - Print the matrix `vote_behavior` to the console to inspect it.
  - Call the `prop.test()` function on our matrix `vote_behavior`. Specify the argument `conf.level` to be `0.99` and set `correct` to `FALSE`.
  - Take a good look at the output of the `prop.test()` function. You will need it during the next exercise

- **Answers**

  ```R
  # Constructing the matrix
  vote_behavior <- matrix(c(60, 63, 40, 87), nrow=2)
  colnames(vote_behavior) <- c('left','no left')
  rownames(vote_behavior) <- c('male','female')
  vote_behavior
  # Call the prop.test function on the matrix vote_behavior
  help(prop.test)
  prop.test(vote_behavior, conf.level=0.99, correct=FALSE)
  prop.test(vote_behavior, conf.level=0.99, correct=TRUE)
  ```

  ```R
  > # Constructing the matrix
  > vote_behavior <- matrix(c(60, 63, 40, 87), nrow=2)
  > colnames(vote_behavior) <- c('left','no left')
  > rownames(vote_behavior) <- c('male','female')
  > vote_behavior
         left no left
  male     60      40
  female   63      87
  > # Call the prop.test function on the matrix vote_behavior
  > help(prop.test)
  > prop.test(vote_behavior, conf.level=0.99, correct=FALSE)
  
  	2-sample test for equality of proportions without continuity
  	correction
  
  data:  vote_behavior
  X-squared = 7.778, df = 1, p-value = 0.005289
  alternative hypothesis: two.sided
  99 percent confidence interval:
   0.01660225 0.34339775
  sample estimates:
  prop 1 prop 2 
    0.60   0.42
  
  > prop.test(vote_behavior, conf.level=0.99, correct=TRUE)
  
  	2-sample test for equality of proportions with continuity correction
  
  data:  vote_behavior
  X-squared = 7.0745, df = 1, p-value = 0.007819
  alternative hypothesis: two.sided
  99 percent confidence interval:
   0.008268919 0.351731081
  sample estimates:
  prop 1 prop 2 
    0.60   0.42
  ```

  


## 2.  Comparing two means--`t.test()`

**(1)** From the course on basic statistics, you may recall the t statistic. We usually use this statistic when we compare the means from two independent samples.

However, before we calculate the t statistic to see whether the difference between two sample means is meaningful, we usually calculate 2 other things first

1. The difference between two independent sample means
2. The standard error of the difference between two independent sample means

Two formula for the difference between two independent sample means is relatively straightforward: You substract one mean from the other. See the following formula: x1 - x2. The formula for the standard error of the difference between two independent samples is slightly more complicated:
$$
se = \sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}
$$


Here s*1^2 represents that variance of the first sample, n*1 represents the sample size of the first sample, s*2 represents the variance of the second sample and n*2 represents the sample size of the second sample.

- **Instructions**

  - In this exercise we have a sample of 100 males that do sports on average 4.2 hours per week and a sample of 150 females that do sports on average 5.8 hours per week. Calculate the difference between the average of the male and the female sample and store it in the variable `mean_difference`
  - The male sample has a standard deviation of 2.3 hours and the female sample has a standard deviaton of 3.1 hours. Calculate the standard error of the difference and store it in a variable called `se`. To square a value, you can use the `^` sign in R. To take the square root of a value, you can use the `sqrt()` function in R.

- **Answers**

  ```R
  # average difference between male and female sample in hours of sport per week
  mean_difference<-c(4.2-5.8)
  
  # standard error of the difference between male and female sample in hours of sport per week
  se<-sqrt(2.3^2/100+3.1^2/150)
  ```

  

**(2)** In the previous exercise we used the primary formula to calculate the standard error when comparing two means. There is however an alternative approach to calculating the standard error when we can assume that the variability across both groups is the same. This is called the pooled standard deviation from which we can then calculate the standard error.

The formula for the pooled standard deviation is the following:
$$
s = \sqrt{\frac{{(n_1 - 1) * s_1^2 + (n_2 - 1) * s_2^2}}{n_1 + n_2 - 2}}
$$
From this formula, we can then calculate the standard error using the following formula:
$$
se = s * \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}
$$

- **Instructions**

  - Consider our previous example with the average number of hours that people do sport. This time we assume that the standard deviation for males and females is equal. The standard deviation for both groups now is 2.8. Calculate the pooled standard deviation and put it in a variable called `pooled`. The sample sizes were respectively 100 and 150
  - Calculate the standard error and put it in a variable called `se`

- **Answers**

  ```R
  # calculate the pooled standard deviation and put it in a variable called pooled
  pooled<- sqrt((99*2.8^2+149*2.8^2)/(100+150-2))
  pooled
  # calculate the standard error and put it in a variable called se
  se<-pooled*sqrt(1/100+1/150)
  se
  ```

  ```R
  > # calculate the pooled standard deviation and put it in a variable called pooled
  > pooled<- sqrt((99*2.8^2+149*2.8^2)/(100+150-2))
  > pooled
  [1] 2.8
  > # calculate the standard error and put it in a variable called se
  > se<-pooled*sqrt(1/100+1/150)
  > se
  [1] 0.3614784
  ```

**(3)** Now that we have seen different ways of calculating the standard deviation and standard error, we can move to the next step of calculating the t statistic. We do so using the following formula:
$$
t = \frac{\bar{x_1} - \bar{x_2} - 0}{se}
$$
x1¯represents the sample mean of the first sample, x2¯ represents the sample mean of the second sample, the 0 represents the null hypothesis that the difference between the two sample means is zero, and se represents the standard error of the mean difference.

- **Instructions**

  - Let's go back to our example where we had a sample of 100 males that do sports on average 4.2 hours per week and a sample of 150 females that do sports on average 5.8 hours per week. The standard deviation of the male sample was 2.3 hours and the female sample was 3.1 hours. All these variables are available in the sample code.
  - Calculate the t score and assign it to the variable `t_score`

  ```R
  # average difference between male and female sample in hours of sport per week
  mean_difference <- 4.2 - 5.8
  
  # standard error of the difference between male and female sample in hours of sport per week
  se <- sqrt((2.3^2 / 100) + (3.1^2 / 150))
  
  # calculate the t score and assign it to the variable t_score
  t_score<-mean_difference/se
  t_score
  ```

  ```R
  > # average difference between male and female sample in hours of sport per week
  > mean_difference <- 4.2 - 5.8
  > 
  > # standard error of the difference between male and female sample in hours of sport per week
  > se <- sqrt((2.3^2 / 100) + (3.1^2 / 150))
  > 
  > # calculate the t score and assign it to the variable t_score
  > t_score<-mean_difference/se
  > t_score
  [1] -4.678309
  ```

**(4)** Now that we have the t score, we can easily calculate the p value. We can do so using the `pt()` function. One last thing we need to calculate this p value is the degrees of freedom `df`. You can calculate the degrees of freedom of a two-samples independent t test with the following formula:
$$
df = n_1 + n_2 - 2
$$

- **[Instructions--dt()]([https://suntarliarzn.github.io/2020/08/06/Basic-Statistics(13)-R-6.html#1-t%E5%88%86%E5%B8%83%E5%87%BD%E6%95%B0](https://suntarliarzn.github.io/2020/08/06/Basic-Statistics(13)-R-6.html#1-t分布函数)**

  - Assume in this exercise that we are doing two-sided hypothesis testing. Firstly calculate the degrees of freedom and store it in variable called `df`. Remember that the sample size for the first group is 100 and for the second group is 150.
  - Using the `pt()` function, calculate the p value. You can use the the `pt()` function the following way: `pt(t_value, df)`. Make sure to multiply this p value by two as we are doing two-sided hypotheses testing.
  - Calculate the 99% confidence interval and report it the following way: `c(lower_value, upper_value)`. Round both values to two decimals. Be aware that you can use the `qt()` function with the 99.5 percentile and the degrees of freedom, like so: `qt(0.995, df)`. You would then need to multiply this value by the standard error. You can subsequently add and subtract this calculated value from your variable `mean_difference`.

- **Answers**

  ```R
  # average difference between male and female sample in hours of sport per week
  mean_difference <- 4.2 - 5.8
  
  # standard error of the difference between male and female sample in hours of sport per week
  se <- sqrt((2.3^2 / 100) + (3.1^2 / 150))
  se
  # calculate the t score and assign it to the variable t_score
  t_score <- mean_difference / se
  t_score
  # calculate the degrees of freedom and store it in a variable called df
  df<-100+150-2
  
  # calculate the p value
  p_value<-pt(t_score,df)*2
  p_value
  # calculate the 99% confidence interval and print it to the console
  qt(0.995,df)
  mean_difference+c(-1,1)*qt(0.995,df)*se
  ```

  ```R
  > # average difference between male and female sample in hours of sport per week
  > mean_difference <- 4.2 - 5.8
  > 
  > # standard error of the difference between male and female sample in hours of sport per week
  > se <- sqrt((2.3^2 / 100) + (3.1^2 / 150))
  > se
  [1] 0.3420039
  > # calculate the t score and assign it to the variable t_score
  > t_score <- mean_difference / se
  > t_score
  [1] -4.678309
  > # calculate the degrees of freedom and store it in a variable called df
  > df<-100+150-2
  > 
  > # calculate the p value
  > p_value<-pt(t_score,df)*2
  > p_value
  [1] 4.758365e-06
  > # calculate the 99% confidence interval and print it to the console
  > qt(0.995,df)
  [1] 2.595799
  > mean_difference+c(-1,1)*qt(0.995,df)*se
  [1] -2.4877732 -0.7122268
  ```

### **(5)** [**t-test**](https://suntarliarzn.github.io/2020/08/06/Basic-Statistics(13)-R-6.html#3-t-test)

You may have been wondering if there is an easier way to do this in R? If so, you are right. In R we can easily use the student t test which actually does a lot of work for us.

The function `t.test()` performs a student t test. It either takes a vector x which contains data from your first sample and a vector y which contains data from your second sample or you can use the formula interface. By using the formula interface you firstly provide your dependent variable then a tilde and lastly your independent variable. An example of this using the built-in sleep dataset is the following:

```R
t.test(x, y = NULL,
       alternative = c("two.sided", "less", "greater"),
       mu = 0, paired = FALSE, var.equal = FALSE,
       conf.level = 0.95, …)
```

| 参数        | 释义                                                         |
| ----------- | ------------------------------------------------------------ |
| x           | 唯一的必选参数，一个数值型非空向量，若为单样本检验，那么这里就是那个样本；若为双样本检验，这里就是样本之一 |
| y           | 可选参数，单样本检验时可以为空，双样本检验时是样本之一       |
| alternative | "two.sided"双侧检验，“greater”和“less”都是单侧检验，“greater”是右侧，“less”是左侧 |
| mu          | 单样本检验的时候是样本均值，双样本检验的时候是样本均值之差，默认值=0 |
| spaired     | 是否为配对t检验，TRUE为配对t检验                             |
| var.equal   | 是否将两个样本的方差视为相等，一般来说如果不能很确定会相等，这里就设置为FALSE，默认值为FALSE |
| conf.level  | 置信度，e.g. 0.95                                            |

- **Instruction**
  - In this exercise we have simulated some data that available in your console as `sport`. This dataframe contains the `hours` variable which contains the average number of hours of sport that an individual does per week and the `gender` variable which contains the gender of the person (for simplicity's sake this only contains the male and the female gender).
  - Perform a student t test on the data by using the formula interface where hours is your dependent variable and gender is you independent variable. Set the argument `conf.level` to be equal to 0.99. Print the output to the console

- **Answer**

  ```R
  # do a student t test and print the output to the console
  t.test(hours ~ gender, data = sport, conf.level = 0.99)
  ```

  ```R
  > # do a student t test and print the output to the console
  > t.test(hours ~ gender, data = sport, conf.level = 0.99)
  
  	Welch Two Sample t-test
  
  data:  hours by gender
  t = -4.4017, df = 242.37, p-value = 1.611e-05
  alternative hypothesis: true difference in means is not equal to 0
  99 percent confidence interval:
   -2.243203 -0.578739
  sample estimates:
    mean in group male mean in group female 
              4.477749             5.888720
  ```



### 3.Comparing two proportions for paired samples--`Mcnemar.test()`

**(1)** Now that we have our hypotheses set up, let's calculate the parameters that pertain to these hypotheses. p1p1 would relate to the proportion of surveyed individuals that approve of the European Union, while p2p2 would relate to the proportion of partners of the surveyed individuals that approve of the European union. Once again, the contingency table is displayed below:

![img](https://s3.amazonaws.com/assets.datacamp.com/production/course_786/datasets/european_union.png)

- **Instructions**

  - Calculate p1p1 and assign it to the variable `p1`
  - Calculate p2p2 and assign it to the variable `p2`

- **Answers**

  ```R
  # calculate p1
  p1<-200/335
  p1
  # calculate p2
  p2<-185/335
  p2
  ```

  ```R
  > # calculate p1
  > p1<-200/335
  > p1
  [1] 0.5970149
  > # calculate p2
  > p2<-185/335
  > p2
  [1] 0.5522388
  ```



**(2)** Now that we've got our 2 parameters, we can actually check whether the difference is significant. To do so, we will use the McNemar test. The formula for the McNemar test is displayed below:
$$
z = \frac{n_{01} - n_{10}}{\sqrt{n_{01} + n_{10}}}
$$
Let's fill in some of the parameters using our own data (see below). To calculate this Z value, you would need to fill in the gaps. $n*01$ in this case is the value in row zero and the first column. This would thus be the value of 50. $n*10$ in this case is the value in the first row and column zero. This would thus be 35.

![img](https://s3.amazonaws.com/assets.datacamp.com/production/course_786/datasets/european_union.png)

- **Instructions**

  - Calculate the z statistic using the McNemar test. Assign this to a variable `z_value`
  - Use the function `pnorm()` to check the p value that pertains to the z value and print it to the console. To use the `pnorm()` function, you can just fill in the the `z_value` as the first parameter. Also make sure to set the `lower.tail` argument to `FALSE`. Lastly, make sure to multiply the p value by 2 as we are doing a two-sided hypothesis test.
  - Is there a significant difference between the amount of surveyed people that approve of the European Union and the amount of their partners that approve of the European union? Assign either a `yes` or a `no` to the variable `difference`

- **Answers**

  ```r
  # calculate the z value and assign it to the variable z_value
  z_value<- (50-35)/sqrt(50+35)
  z_value
  # calculate the p value that pertains to the z value
  p_value<-pnorm(z_value, lower.tail=FALSE)*2
  p_value
  
  # assign a yes or a no to the variable difference
  difference<-"no"
  ```

  ```R
  > # calculate the z value and assign it to the variable z_value
  > z_value<- (50-35)/sqrt(50+35)
  > z_value
  [1] 1.626978
  > # calculate the p value that pertains to the z value
  > p_value<-pnorm(z_value, lower.tail=FALSE)*2
  > p_value
  [1] 0.1037417
  > 
  > # assign a yes or a no to the variable difference
  > difference<-"no"
  ```

  

**(3)** Of course there are convenience functions in R available that make it easier to perform a McNemar test. The function is conveniently called `mcnemar.test()`. This functions takes a two-dimensional contingency table in matrix form. This test then calculates a chi-square and outputs a p value. An example of using the `mcnemar.test()` function is the following: 

### [`mcnemar.test(matrix)`](https://mp.weixin.qq.com/s?__biz=MzIzNjk2NDg4NA==&mid=2247484909&idx=1&sn=d9051dcb06f97617bdbfdd29f83b8f37&chksm=e8ce9896dfb911800ee450ed43658c34fa7d1ffa6e492e60caf20e1625edcf426e9b40aa356a&token=1645696766&lang=zh_CN#rd)

```r
mcnemar.test(x, y = NULL, correct = TRUE)
```

##### Arguments

- x

  either a two-dimensional contingency table in matrix form, or a factor object.

- y

  a factor object; ignored if `x` is a matrix.

- correct

  a logical indicating whether to apply continuity correction when computing the test statistic.

- **Instructions**

  - Saved in your console is a contingency matrix called `europe`. Perform the McNemar test on this matrix and print the results to the console.

- **Answers**

  ```R
  # perform a mcnemar test on the matrix europe
  mcnemar.test(europe)
  ```

  ```R
  > mcnemar.test(europe)
  
  	McNemar's Chi-squared test with continuity correction
  
  data:  europe
  McNemar's chi-squared = 2.3059, df = 1, p-value = 0.1289
  ```



## 4. Comparing two means for paired samples--`t.test()`

**(1)** Now that we have our hypotheses set up, let's calculate the parameters that pertain to these hypotheses. Because we work with paired continuous data, our main testing parameter is called x<sub>diff</sub>. This is actually the average difference between our pre-test and our post-test. The formula to calculate it is the following: 
$$
\bar{x}_{diff} = \bar{x}_1 - \bar{x}_2
$$


In addition to our parameter, we would also need a standard error in order to check whether the difference between both means is significant. Before we move to the formula of the standard error, which is essentially the same as that of the standard error when doing a independent t test, let's first consider the formula for the standard deviation. The formula for the standard deviation is given below:
$$
s_d = sd(\bar{x}_{diff})
$$
 In R we can use the function `sd()` to get the standard deviation so all we would need to do is to wrap our first variable - our second variable within this function. Like so: `sd(first_variable - second_variable)`.

To get the standard error from the standard deviation, we only have to divide the standard deviation by the square root of the sample size:
$$
se=s_d/\sqrt{n}
$$


- **Instructions**

  - We have simulated a weight dataset which is contained in the dataframe `weight`. This dataset contains the variables `pre_weight` and `post_weight`. `pre_weight` contains the weight scores prior to taking the diet, while `post_weight` contains the weight scores after taking the diet. Calculate the x¯diffx¯diff and assign it to a variable called `x_diff`.
  - Calculate the standard deviation and put it in the variable called `std`
  - Calculate the standard error and put it in a variable called `se`. A convient way to get the sample size is to use `nrow(weight)`. This gets the amount of rows of our dataframe weight which equals the sample size.

- **Answers**

  ```R
  # calculate the variable x_diff
  x_diff <- mean(weight$pre_weight - weight$post_weight)
  x_diff
  
  # calculate the variable std
  std <- sd(weight$pre_weight - weight$post_weight)
  std
  
  # calculate the variable se
  se <- std / sqrt(nrow(weight))
  se
  ```

  ```r
  > # calculate the variable x_diff
  > x_diff <- mean(weight$pre_weight - weight$post_weight)
  > x_diff
  [1] 3.32642
  > 
  > # calculate the variable std
  > std <- sd(weight$pre_weight - weight$post_weight)
  > std
  [1] 11.93946
  > 
  > # calculate the variable se
  > se <- std / sqrt(nrow(weight))
  > se
  [1] 1.193946
  ```



**(2)** Now that we know how to calculate our test parameter x¯diffx¯diff and to calculate its standard error, we can test where the difference between the pre diet weight and post diet weights are significant. We are going to do this this test two times. The first time we'll do the test by doing a lot of manual work. The second time, we will do the test by using R's built-in `t.test()` function.

- **Instructions**

  - In the current exercise, our `weight` dataframe is once again available in your console. We have also made the variables `x_diff`, `std` and `se` available that you calculated in the previous exercise.
  - Calculate the degrees of freedom (n - 1) against which we are testing and store it in the variable `df`
  - Calculate the t value and store it in a variable called `t_value`
  - Calculate the p value under the assumption that we are doing a two-sided hypothesis test and store it in a variable called `p_value`
  - Print the variable `p_value` to the console.

- **Answers**

  ```R
  # calculate the degrees of freedom against which we are testing and store it in df
  df<-nrow(weight)-1
  df
  
  # calculate the t value
  t_value<-x_diff/se
  t_value
  
  # calculate the p value
  p_value<-pt(t_value,df,lower.tail=FALSE)*2
  
  # print p value to the console
  p_value
  ```

  ```R
  > # calculate the degrees of freedom against which we are testing and store it in df
  > df<-nrow(weight)-1
  > df
  [1] 99
  > 
  > # calculate the t value
  > t_value<-x_diff/se
  > t_value
  [1] 2.786071
  > 
  > # calculate the p value
  > p_value<-pt(t_value,df,lower.tail=FALSE)*2
  > 
  > # print p value to the console
  > p_value
  [1] 0.00639493
  ```

**(3)** Did you see how cumbersome this was? Calculating the 95% confidence interval, the t values and the p value can be done a lot easier using the built-in R function `t.test()`. This function outputs all these statistics in one go.

We have already used the function `t.test()` when working with independent group means. The function however works similar when working with paired samples. **The main difference is that we need to set the argument pairs `paired = TRUE` because we are working with paired data. Also, as we are dealing with a dataframe that contains two vectors `pre_weight` and `post_weight`, you would need to specify the x and y arguments of the `t.test()` function, like so: `t.test(x = pre_variable, y = post_variable)`**

- ### [`t.test`](https://suntarliarzn.github.io/2020/08/06/Basic-Statistics(13)-R-6.html#3-t-test)

- **Instructions**

  - Your console once again contains the `weight` dataframe which contains the variables `pre_weight` and `post_weight`. Use the function `t.test()` to perform a paired samples t.test. Don't forget to set the argument pairs `paired = TRUE`.

- **Answer**

  ```R
  # perform a paired samples t test
  # 2 sample test
  t.test(x=weight$pre_weight,y=weight$post_weight, conf.level=0.95, alternative="two.sided", spaired=TRUE)
  #paired test
  t.test(x = pre_weight, y = post_weight, data = weight, paired = TRUE,conf.level=0.95, alternative="two.sided" )
  #注意有没有加data项区别！！！
  ```

  ```R
  > # perform a paired samples t test
  # 2 sample test
  > t.test(x=weight$pre_weight,y=weight$post_weight, conf.level=0.95, alternative="two.sided", spaired=TRUE)
  
  	Welch Two Sample t-test
  
  data:  weight$pre_weight and weight$post_weight
  t = 2.7079, df = 194.83, p-value = 0.007374
  alternative hypothesis: true difference in means is not equal to 0
  95 percent confidence interval:
   0.9036932 5.7491461
  sample estimates:
  mean of x mean of y 
   81.53587  78.20945
  
  #paired test
  > t.test(x = pre_weight, y = post_weight, data = weight, paired = TRUE,conf.level=0.95, alternative="two.sided" )
  
  	Paired t-test
  
  data:  pre_weight and post_weight
  t = 2.7861, df = 99, p-value = 0.006395
  alternative hypothesis: true difference in means is not equal to 0
  95 percent confidence interval:
   0.957371 5.695468
  sample estimates:
  mean of the differences 
                  3.32642
  ```



## 5. Simpson's paradox --`prop.test()`

Let's dive deeper into the data from the previous exercise and see whether this relationship between gender and admission ratio actually is significant. The data is again displayed below.

![img](https://s3.amazonaws.com/assets.datacamp.com/production/course_786/datasets/gender_bias.png)

- **Instruction**
  - You can get the number of men and women that are admitted by multiplying the total number that applied by the percentage that has been accepted. For men this is 3715≈0.44∗8442 and for women this is 1513≈0.35∗4321.
  - Use the `prop.test()` function on the data and print the output to the console. Remember that you can get `prop.test()` a data matrix as input, like so: `prop.test(matrix)`. Alternatively you can provide the `x` argument of the function a vector of successes (number of men and number of women admitted) and the `n` argument a vector of total counts (total applicants), like so: `prop.test(x = c(10, 10), n = (20, 20))`.
- **[`prop.test()`](https://suntarliarzn.github.io/2020/04/13/Basic-Statistics(4)-R-2.html#proptable)**