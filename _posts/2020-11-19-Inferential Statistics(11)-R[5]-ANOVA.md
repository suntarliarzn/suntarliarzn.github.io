---

title: Inferential Statistics(11)-R[06]-ANOVA
key: 20201119

tags: Statistics; R; ANOVA; pf(); shapiro.test(); 正态分布检验; bartlett.test(); 方差齐性检验; aov(y~x); pairwise.t.test(); TukeyHSD();

layout: article

mathjax: true

mathjax_autoNumber: true

---

# Inferential Statistics(11)-R[06]-ANOVA

<!--more-->

## 1.  Anova and types of variability (dataframe)

The reason why an analysis of variance is called an analysis of variance is that we compare two different types of variability. Essentially we test the ratio of between group and within group variability. Let's consider visually what this means. To do so, we use a subset of data from the 1 million song dataset retrieved from the following link: "http://labrosa.ee.columbia.edu/millionsong/blog/11-2-28-deriving-genre-dataset"

![img](https://s3.amazonaws.com/assets.datacamp.com/production/course_786/datasets/variance_genres.png)

On the left most visualization, the big red dots represents the group averages. Given the example we use in this lab, this represents the average song duration per genre. As you can see, there are some differences in the average song duration per genre. You can consider this to be the between group variability. On the right most visualizaiton, the red lines represent the variability in song duration within each genre. As you see, for this sample of songs, the song duration of classical songs range from approximately 100 seconds to a little over 700 seconds. This variability can be considered the within group variability.

The larger the variability between groups relative to the variability within groups, the larger our F statistic becomes. Before we continue to calculate our F statistic, let's first calculate some useful summary statistics. Make sure to round each number to two decimals. You can do so using the round function: `round(mean(data$duration), digits = 2)`.

- **Instructions**

  - Calculate the overall average song duration and store it in a variable called `grand_mean`. The overall data is available in a dataframe called `song_data`
  - Calculate the average song duration for the classical genre and store it in a variable called `classical_average`. The classical song data is available in a dataframe called `classical_data`.
  - Calculate the average song duration for the hip hop genre and store it in a variable called `hiphop_average`. The hip hop song data is available in a dataframe called `hiphop_data`.
  - Calculate the average song duration for the pop genre and store it in a variable called `pop_average`. The pop song data is available in a dataframe called `pop_data`.

- **Answers**

  ```R
  # calculate the overall mean and store it in a variable called grand_mean
  song_data
  grand_mean<-round(mean(song_data$duration), digits=2)
  grand_mean
  
  # calculate the mean song duration of the classical songs and store it in a variable
  #' called classical_average
  classical_average<-round(mean(classical_data$duration),digits=2)
  classical_average
  
  # calculate the mean song duration of the hip hop songs and store it in a variable
  #' called hiphop_average
  hiphop_average<-round(mean(hiphop_data$duration),digits=2)
  hiphop_average
  
  # calculate the mean song duration of the pop songs and store it in a variable
  #' called pop_average
  pop_average<-round(mean(pop_data$duration),digits=2)
  pop_average
  ```

  ```R
  # calculate the overall mean and store it in a variable called grand_mean
  song_data
         genre  duration
  1  classical 226.16771
  2  classical 296.35873
  3  classical 306.83383
  4  classical 546.01098
  5  classical 660.03546
  6  classical 723.85261
  7  classical 184.26730
  8  classical 522.99710
  9  classical 373.47220
  10 classical 448.96608
  11 classical  84.37506
  12 classical  87.22240
  13 classical 253.09995
  14 classical 620.77342
  15 classical 453.90322
  16   hip-hop  50.23302
  17   hip-hop 215.30077
  18   hip-hop 236.19873
  19   hip-hop 305.50159
  20   hip-hop 299.23220
  21   hip-hop 266.63138
  22   hip-hop  29.88363
  23   hip-hop 344.84200
  24   hip-hop  65.07057
  25   hip-hop  57.20771
  26   hip-hop 217.93914
  27   hip-hop 250.95791
  28   hip-hop  65.30567
  29   hip-hop 229.56363
  30   hip-hop 249.96526
  31   hip-hop  37.61587
  32       pop 246.43873
  33       pop 202.94485
  34       pop 286.90240
  35       pop 225.14893
  36       pop  64.67873
  37       pop 151.64036
  38       pop 235.96363
  39       pop 220.21179
  40       pop 160.23465
  41       pop 251.66322
  42       pop 264.67220
  43       pop 189.49179
  44       pop 196.17914
  45       pop 191.84281
  46       pop 282.22649
  47       pop 180.74077
  48       pop 230.37342
  grand_mean<-round(mean(song_data$duration), digits=2)
  grand_mean
  [1] 256.07
  # calculate the mean song duration of the classical songs and store it in a variable
  #' called classical_average
  classical_average<-round(mean(classical_data$duration),digits=2)
  classical_average
  [1] 385.89
  # calculate the mean song duration of the hip hop songs and store it in a variable
  #' called hiphop_average
  hiphop_average<-round(mean(hiphop_data$duration),digits=2)
  hiphop_average
  [1] 182.59
  # calculate the mean song duration of the pop songs and store it in a variable
  #' called pop_average
  pop_average<-round(mean(pop_data$duration),digits=2)
  pop_average
  [1] 210.67
  ```





## 2. Calculating the between group variance

Now that we've got our grand mean and the means of the different genres, we can calculate the between group variance. The formula for the between group variance is the following:

- $$
  \frac{n_1 * (\bar{y}_1 - \bar{y})^2 + n_2 * (\bar{y}_2 - \bar{y})^2 + ... + n_g * (\bar{y}_g - \bar{y})^2}{g - 1}
  $$

  

Okay, this formula looks really complicated so let's chop it up into parts. n here represents the sample size, so n1n1 represents the sample size of group 1 while ngng represents the sample size of gth group. In our current example, we only have three different genres and thus three different groups so this formula would go up n3n3. y¯1y¯1 represents the average of group 1. y¯y¯ would represent our overall average which is available in the variable `grand_mean`. g here represents the number of groups.

In the current exercise our overall average is stored in the console in the variable `grand_mean` while our group averages are stored in the variables `classical_average`, `hiphop_average` and `pop_average`. The dataframes `classical_data`, `hiphop_data` and `pop_data` contain our samples per genre.

- **Instructions**

  - Calculate the sample size of each group. Store the sample size of the classical genre in the variable called `sample_classical`, the sample size of hip hop genre in the variable called `sample_hiphop` and the sample size of the pop genre in the variable `sample_pop`. Because these are all dataframes, you can use the `nrow()` function on for instance the dataframes `classical_data` to calculate the sample size of this genre.
  - Calculate the between group variance and store it in a variable called `between_group_variance`.

- **Answers**

  ```R
  # calculate the sample size of the classical genre
  sample_classical<-nrow(classical_data)
  sample_classical
  # calculate the sample size of the hip hop genre
  sample_hiphop<-nrow(hiphop_data)
  sample_hiphop
  # calculate the sample size of the pop genre
  sample_pop<-nrow(pop_data)
  sample_pop
  # calculate the between group variance
  between_group_variance<-(sample_classical*(classical_average-grand_mean)^2+sample_hiphop*(hiphop_average-grand_mean)^2+sample_pop*(pop_average-grand_mean)^2)/(3-1)
  between_group_variance
  ```

  ```R
  # calculate the sample size of the classical genre
  sample_classical<-nrow(classical_data)
  sample_classical
  [1] 15
  # calculate the sample size of the hip hop genre
  sample_hiphop<-nrow(hiphop_data)
  sample_hiphop
  [1] 16
  # calculate the sample size of the pop genre
  sample_pop<-nrow(pop_data)
  sample_pop
  [1] 17
  # calculate the between group variance
  between_group_variance<-(sample_classical*(classical_average-grand_mean)^2+sample_hiphop*(hiphop_average-grand_mean)^2+sample_pop*(pop_average-grand_mean)^2)/(3-1)
  between_group_variance
  [1] 187113.6
  ```



## 3. Calculating within group variance

Now that we've got our grand mean and the means of the different genres and our between group variance, we continue to calculate our within group variance. The formula for the within group variance is the following:

- $$
  \frac{\sum(y_{i1} - \bar{y}_1)^2 + \sum(y_{i2} - \bar{y}_2)^2 + ... + \sum(y_{ig} - \bar{y}_g)^2}{n - g}
  $$

  

Again this formula looks complicated so let's chop it up into parts. yi1yi1 represents each observation in a group and $\bar{y}_i} represents the mean for that group. What we then do is that we subtract the group mean from each group observation, square this and then sum it. If we are done with the first group, we repeat this procedure for the second group and so on. The total sum of this procedure, which is called the within sum of squares, is then divided by the sample size (n) - the number of groups (g). The result is the within group variance.

In the current exercise our overall average is stored in the variable `grand_mean` while our group averages are stored in the variables `classical_average`, `hiphop_average` and `pop_average`. The dataframes `classical_data`, `hiphop_data` and `pop_data` contain our samples per genre.

- **Instructions**

  - The instruction code includes the code to calculate the sum of squares for the first group: the classical genre. You can use this code to do the same for the hiphop genre and the pop genre and store the results in the variables `sum_squares_hiphop` and `sum_squares_pop`.
  - Add the within sum of squares for every group together and divide this by the n−gn−g. Round the result to zero digits and store it in the variable `within_group_variance`.

- **Answers**

  ```R
  # calculate sum of squares for the classical genre and put it in a variable sum_squares_classical
  sum_squares_classical <- sum((classical_data$duration - classical_average)^2) 
  classical_sample <-nrow(classical_data)
  
  # calculate sum of squares for the hiphop genre and put it in a variable sum_squares_hiphop
  sum_squares_hiphop <- sum((hiphop_data$duration - hiphop_average)^2)
  hiphop_sample <-nrow(hiphop_data) 
  
  # calculate sum of squares for the pop genre and put in a variable sum_squares_pop
  sum_squares_pop <- sum((pop_data$duration - pop_average)^2)
  pop_sample <-nrow(pop_data)
  
  # calculate the within group variance and put it in a variable called within_group_variance
  within_group_variance<-round((sum_squares_classical+sum_squares_hiphop+sum_squares_pop)/((classical_sample+pop_sample+hiphop_sample)-3))
  within_group_variance
  ```

  ```R
  # calculate sum of squares for the classical genre and put it in a variable sum_squares_classical
  sum_squares_classical <- sum((classical_data$duration - classical_average)^2) 
  classical_sample <-nrow(classical_data)
  
  # calculate sum of squares for the hiphop genre and put it in a variable sum_squares_hiphop
  sum_squares_hiphop <- sum((hiphop_data$duration - hiphop_average)^2)
  hiphop_sample <-nrow(hiphop_data) 
  
  # calculate sum of squares for the pop genre and put in a variable sum_squares_pop
  sum_squares_pop <- sum((pop_data$duration - pop_average)^2)
  pop_sample <-nrow(pop_data)
  
  # calculate the within group variance and put it in a variable called within_group_variance
  within_group_variance<-round((sum_squares_classical+sum_squares_hiphop+sum_squares_pop)/((classical_sample+pop_sample+hiphop_sample)-3))
  
  within_group_variance
  [1] 17938
  ```





## 4. Calculating the F statistic--`pf()`

Now that we have calculated the between-groups and the within-groups variability, we can calculate its ratio. The ratio of between-groups and within-groups variability produces a F statistic. See the following formula:

- $$
  F = \frac{Between-groups-variability}{within-groups-variability}
  $$

  

An F statistic will become larger if the between-groups variability rises and the within-groups variability stays the same. The F statistic will become smaller if the within-groups variability becomes larger and the between-groups variability stays the same. The F statistic has a F sampling distribution. This distribution is approximately centered around F = 1 when the null hypothesis is true. The larger the F statistic, the stronger the evidence against the null hypothesis.

The F distribution has two different degrees of freedom: df1 and df2. The formula for df1 is the following: df1=g−1df1=g−1 where g is the amount of groups. The formula for df2 is the following: df2=N−gdf2=N−g where N is the sample size of all groups combined and g is the number of groups. These degrees of freedom come in handy when we want to calculate a p value for our obtained F statistic. To calculate a p value for our F statistic, we can use the `pf()` function. This function works similarly as the `pnorm()` and `pbinom()` functions that you may have come across in the course on basic statistics. The `pf()` function takes our F statistic as its first argument, our df1 as its second argument and our df2 as its third argument.

- ### [`pf()`](https://statisticsglobe.com/f-distribution-in-r-df-pf-qf-rf)

  - Usage

    ```
    df(x, df1, df2, log = FALSE)
    pf(q, df1, df2, ncp=0, lower.tail = TRUE, log.p = FALSE)
    qf(p, df1, df2,        lower.tail = TRUE, log.p = FALSE)
    rf(n, df1, df2)
    ```

  - Arguments

    | `x, q`       | vector of quantiles.                                         |
    | ------------ | ------------------------------------------------------------ |
    | `p`          | vector of probabilities.                                     |
    | `n`          | number of observations to generate.                          |
    | `df1, df2`   | degrees of freedom.                                          |
    | `ncp`        | non-centrality parameter.                                    |
    | `log, log.p` | logical; if TRUE, probabilities p are given as log(p).       |
    | `lower.tail` | logical; if TRUE (default), probabilities are *P[X <= x]*, otherwise, *P[X > x]*. |

- **Instructions**

  - The variables `between_group_variance` and `within_group_variance` are available in your console. Use these variables to calculate the F statistic and store the result in a variable called `f_stat`. Round the result to two digits.
  - Calculate the degrees of freedom df1 and df2 and store them in the variables `df1` and `df2`
  - Using the `pf()` function, calculate the p value and store this in the variable `p_value`. Round the result to two digits. Make sure to calculate the p value associated with the upper tail.

- **Answers**

  ```R
  f_stat <- round(between_group_variance / within_group_variance, 2)
  f_stat2 <- between_group_variance / within_group_variance
  f_stat
  
  # calculate the degrees of freedom and store it in the variables df1 and df2
  df1 <- 2
  df2 <- 45
  
  # calculate the associated p value and store it in a variable called p_value
  p_value <- round(1 - pf(f_stat, df1 = df1, df2 = df2), 2)
  p_value2 <- 1 - pf(f_stat, df1 = df1, df2 = df2)
  p_value3 <- 1 - round(pf(f_stat, df1 = df1, df2 = df2), 2)
  p_value
  p_value2
  p_value3
  ```

  ```R
  f_stat <- round(between_group_variance / within_group_variance, 2)
  f_stat2 <- between_group_variance / within_group_variance
  f_stat
  [1] 10.43
  # calculate the degrees of freedom and store it in the variables df1 and df2
  df1 <- 2
  df2 <- 45
  # calculate the associated p value and store it in a variable called p_value
  p_value <- round(1 - pf(f_stat, df1 = df1, df2 = df2), 2)
  p_value2 <- 1 - pf(f_stat, df1 = df1, df2 = df2)
  p_value3 <- 1 - round(pf(f_stat, df1 = df1, df2 = df2), 2)
  p_value
  [1] 0
  p_value2
  [1] 0.0001897985
  p_value3
  [1] 0
  ```



## 5. Assumptions checking analysis of variance---`shapiro.test()`&`bartlett.test()`

As you may recall from the lectures, there are three important assumptions that need to be checked before doing an analysis of variance:

1. **The population distribution for the dependent variable for each of the g groups need to be approximately normal---`shapiro.test()`**
2. **Those distributions for each of the groups have the same standard deviation (homogeneity of variances)---`bartlett.test(y_variable ~ x_variable)`**
3. **The data resulted from randomization**

In this exercise we are going to check the for the first two assumptions. To check for normality in each of our different genres, we are going to use the R function `shapiro.test()`. You can give this function a vector of numeric values from a group. For instance, we can provide it our duration variable, like so: `classical_data$duration`. To check whether each group approximately has the same standard deviation, we are going to use the R function `bartlett.test()`. This function has a formula interface. This interface works similar to the `t.test()` interface. You can use the bartlett test like so: `bartlett.test(y_variable ~ x_variable)`. In our example, the y variable is `duration` and the x variable is `genre`. Both test will test for the null hypothesis that the data is normally distributed and that the variances in each of the groups are the same. If the p value is significant, that is, smaller than 0.05, then these assumptions are not met.

- ### [假设检验](https://mp.weixin.qq.com/s?__biz=MzIzNjk2NDg4NA==&mid=2247483675&idx=1&sn=12e4e92fc43f144de27ec95bf74ca1fb&chksm=e8ce9c60dfb9157657b41d73e7a1e712219fed142aef2f5f01850135c72fb7f2f761cedfd18c&scene=21#wechat_redirect)

  - ### **正态分布检验**

    从经验上看，用样本中位数M与算术平均值的比值和算术平均值与标准差的关系进行判断，反映峰形和峰态：0.9＜中位数/均数＜1.1且 均数＞3倍标准差。如果以上关系成立，则可认为样本大致成正态分布。

    正态检验方法分计算检验法和图示法。

    **计算检验法****：**K-S检验（Kolmogorov-Smirnov检验）、W检验（Shapiro-Wilk W检验）、W’检验（Shapiro-Francia检验）、D检验（D’Agostino）、偏峰度（常用矩法）、χ2拟合优度检验等

    **图示法：**概率图（P-P图）、分位图（Q-Q图）、正态分位图、茎叶图、直方图、箱线图

  - ### **方差齐性检验**

    方差齐性检验有F检验、Bartlett χ2检验、Levene检验、残差图。

    F检验和Bartlett χ2检验要求数据资料具有正态性，Levence检验所分析资料可不具正态性，结果更为稳健。

    Bartlett χ2检验检验统计量为χ2，F检验和Levene检验检验统计量为F。

- [**shapiro.test()**](https://blog.csdn.net/lvsehaiyang1993/article/details/80473265)小样本正态分布检验
  
  - 夏皮罗-威尔克检验是一种在频率上统计检验中检验正态性的方法。
  - 果p值小于选择的显著度水平（α值 通常0.05），那么在更大概率下我们应该拒绝零假设，数据的证据显示我们的样本不是来自一个正态分布母体。另一方面，如果p值比选择的显著度水平大，那么我们没有证据拒绝零假设，数据来自于一个正态分布。
  - 通常用于样本容量n≤50时，检验样本是否符合正态分布。
- [bartlett.test(formula, data, subset, na.action, ...)](http://www.biostatistic.net/thread-7225-1-1.html)方差齐性检验
  
- 方差齐性检验有F检验、Bartlett χ2检验、Levene检验、残差图。**F检验和Bartlett** **χ2检验要求数据资料具有正态性，而且F检验只能检验两个总体方差是否齐同，Levence检验所分析资料可不具正态性，结果更为稳健也可以检验多个总体的方差齐性。**
  
- **Instructions**

  - Look at the example code in your script. This code checks whether the data points of the classical genre are approximately normally distributed. Do the same test for the hip hop genre data. Note that this data is availabe in the `hiphop_data` dataframe
  - Check for homogeneity of variance using the bartlett test. The combined data is available in the `song_data` data frame. Remember that you can extract variables from a dataframe using the dollar notation. Like so `song_data$duration`.

- **Answers**

  ```R
  # check for normality in the classical genre
  shapiro.test(classical_data$duration)
  
  # check for normality in the hip hop genre
  shapiro.test(hiphop_data$duration)
  
  # check for homogeneity of variances using the bartlett test
  bartlett.test(song_data$duration ~song_data$genre)
  ```

  ```R
  # check for normality in the classical genre
  shapiro.test(classical_data$duration)
  
  	Shapiro-Wilk normality test
  
  data:  classical_data$duration
  W = 0.96184, p-value = 0.7243
  
  # check for normality in the hip hop genre
  shapiro.test(hiphop_data$duration)
  
  	Shapiro-Wilk normality test
  
  data:  hiphop_data$duration
  W = 0.86023, p-value = 0.01934
  
  # check for homogeneity of variances using the bartlett test
  bartlett.test(song_data$duration ~song_data$genre)
  
  	Bartlett test of homogeneity of variances
  
  data:  song_data$duration by song_data$genre
  Bartlett's K-squared = 22.231, df = 2, p-value = 1.488e-05
  ```

  

## 6. Explaining the anova function--`aov(y~x)`

In the last exercise we saw that both our assumption of normality and the assumption of homogeneity of variance were not met. Usually this would mean that we would perform a non-parametric test. These test will be illustrated during the next week. However, during this lab we will continue to do an analysis of variance and will interpret the output as though our assumptions are met.

In our you can use two functions to perform an analysis of variance: the `aov()` function and the `lm()` function. There are very few differences between the two functions. However, the main difference is the output that each of these functions produces. The `aov()` function produces the more traditional anova output and may seem more familiar if you are coming from a statistical software package like SPSS.

- **Instructions**

  - Peform an anova using the `aov()` function with genre as the independent variable and song duration as the dependent variable. If y is your dependent variable and x is your independent variable, you could perform an anova like so: `aov(y ~ x)`. Store the result of your anova in a variable called `fit_aov`. Note that our data is available in the `song_data` dataframe.
  - Use the `summary()` function on the the `fit_aov` variable and print the output to the console. You can just provide your `fit_aov` object as the argument to the `summary()` function.
  - Do an anova using the `lm()` function with genre as independent variable and song duration as the dependent variable. Store the result in a variable called `fit_lm`.
  - Use the `summary()` function on the variable `fit_lm` and print the output to the console

- **Answers**

  ```R
  # use the aov function and store the result in fit_aov
  fit_aov<-aov(song_data$duration~song_data$genre)
  fit_aov
  # use the summary function on the object fit_aov
  summary(fit_aov)
  
  # use the lm function and store the result in fit_lm
  fit_lm<-lm(song_data$duration~song_data$genre)
  fit_lm
  # use the summary function on the object fit_lm
  summary(fit_lm)
  ```

  ```R
  # use the aov function and store the result in fit_aov
  fit_aov<-aov(song_data$duration~song_data$genre)
  fit_aov
  Call:
     aov(formula = song_data$duration ~ song_data$genre)
  
  Terms:
                  song_data$genre Residuals
  Sum of Squares         374225.5  807219.5
  Deg. of Freedom               2        45
  
  Residual standard error: 133.9336
  Estimated effects may be unbalanced
  
  # use the summary function on the object fit_aov
  summary(fit_aov)
                  Df Sum Sq Mean Sq F value  Pr(>F)    
  song_data$genre  2 374225  187113   10.43 0.00019 ***
  Residuals       45 807219   17938                    
  ---
  Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
  
  # use the lm function and store the result in fit_lm
  fit_lm<-lm(song_data$duration~song_data$genre)
  fit_lm
  
  Call:
  lm(formula = song_data$duration ~ song_data$genre)
  
  Coefficients:
             (Intercept)  song_data$genrehip-hop      song_data$genrepop  
                   385.9                  -203.3                  -175.2  
  
  # use the summary function on the object fit_lm
  summary(fit_lm)
  
  Call:
  lm(formula = song_data$duration ~ song_data$genre)
  
  Residuals:
      Min      1Q  Median      3Q     Max 
  -301.51  -96.47   17.09   68.10  337.96 
  
  Coefficients:
                         Estimate Std. Error t value Pr(>|t|)    
  (Intercept)              385.89      34.58  11.159  1.5e-14 ***
  song_data$genrehip-hop  -203.30      48.14  -4.223 0.000116 ***
  song_data$genrepop      -175.22      47.45  -3.693 0.000597 ***
  ---
  Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
  
  Residual standard error: 133.9 on 45 degrees of freedom
  Multiple R-squared:  0.3168,	Adjusted R-squared:  0.2864 
  F-statistic: 10.43 on 2 and 45 DF,  p-value: 0.0001897
  ```

  

## 7.  Family-wise error rate

An Anova checks for an overall difference in groups. However, it does not give any indication of which groups differ. Under most circumstances you would therefore like to follow up an Anova with one or multiple post-hoc analyses. However, one has to be careful to control the family-wise error rate when following up an anova with multiple post hoc analyses.

The family-wise error rate is the probability of making a type 1 error. Normally our type 1 error rate is denoted by αα which we usually keep at 0.05. This means that there is a 5% chance of falsely rejecting the null hypothesis. If we would do multiple analyses, say 10, our family-wise error rate increases. This is because for each individual test we do, there is a 5% chance that we falsely reject the null hypothesis and this adds up. If we don't control for multiple testing, the family-wise error rate 

- $$
  FWER=1-(1-\alpha)^m
  $$

- m where m is the number of tests that we do.

If we do 10 tests all with a significance level αα of 5%, what would become our family-wise error rate?

The family-wise error rate becomes 40%. This means that there's a probability of 0.4 that we falsely reject at least 1 null hypothesis.



## 8. Anova: Multiple comparisons--`pairwise.t.test(dependent_variable, g = grouping_variable, p.adj = "bonf")`& `TukeyHSD()`  

In R a handy function to follow up an Anova with pairwise comparisons is the `pairwise.t.test()` function. pairwise.t.test() takes an argument `x` that is the name of your response variable, followed by the argument `g =` where you tell the function your grouping variable. Furthermore, you can choose an adjusment method for the p value by specifying the p.adj parameter. For instance, if you want to do a Bonferroni correction or a Holm correction, you can specify set the p.adj argument to either `p.adj = "bonf"` or `p.adj = "holm"`. So all in all the usage of the pairwise t test should look something like this:

`pairwise.t.test(dependent_variable, g = grouping_variable, p.adj = "bonf")`

Another often used correction for multiple testing is the Tukey method. To use this in R, you can use the **`TukeyHSD()` function**. You can then assign your Anova object to the x parameter and you can assign your grouping variable to the which argument. The which argument needs to be the exact same grouping variable as specified in your Anova object.

- ### `TukeyHSD(x, which, ordered = FALSE, conf.level = 0.95, ...)`

  - | `x`          | A fitted model object, usually an `aov` fit.                 |
    | ------------ | ------------------------------------------------------------ |
    | `which`      | A character vector listing terms in the fitted model for which the intervals should be calculated. Defaults to all the terms. |
    | `ordered`    | A logical value indicating if the levels of the factor should be ordered according to increasing average in the sample before taking differences. If `ordered` is true then the calculated differences in the means will all be positive. The significant differences will be those for which the `lwr` end point is positive. |
    | `conf.level` | A numeric value between zero and one giving the family-wise confidence level to use. |
    | `...`        | Optional additional arguments. None are used at present.     |

- **Instructions**

  - Use the `pairwise.t.test()` function to follow up your Anova analyses and print the output to the console. Make sure to specify the duration variable to x argument and the genre variable to the g argument. Also make sure to use a Bonferroni correction. All variables are available in the `song_data` dataframe.
  - Do a Tukey to follow up your Anova. Your Anova object is availabe under the name `fit_aov`. Set the which argument to the character argument "song_data$genre" and print the output to the console.

- **Answers**

  ```R
  #' follow up your anova with pairwise t tests using a bonferroni corection 
  #' and print the output to the console
  pairwise.t.test(song_data$duration, g= song_data$genre, p.adj="bonf")
  
  # do a Tukey test and print the output to the console.
  fit_aov
  TukeyHSD(fit_aov)
  plot(TukeyHSD(fit_aov))
  ```

  ```R
  #' follow up your anova with pairwise t tests using a bonferroni corection 
  #' and print the output to the console
  pairwise.t.test(song_data$duration, g= song_data$genre, p.adj="bonf")
  
  	Pairwise comparisons using t tests with pooled SD 
  
  data:  song_data$duration and song_data$genre 
  
          classical hip-hop
  hip-hop 0.00035   -      
  pop     0.00179   1.00000
  
  P value adjustment method: bonferroni 
  
  # do a Tukey test and print the output to the console.
  fit_aov
  Call:
     aov(formula = song_data$duration ~ song_data$genre)
  
  Terms:
                  song_data$genre Residuals
  Sum of Squares         374225.5  807219.5
  Deg. of Freedom               2        45
  
  Residual standard error: 133.9336
  Estimated effects may be unbalanced
  TukeyHSD(fit_aov)
    Tukey multiple comparisons of means
      95% family-wise confidence level
  
  Fit: aov(formula = song_data$duration ~ song_data$genre)
  
  $`song_data$genre`
                          diff        lwr       upr     p adj
  hip-hop-classical -203.29850 -319.96017 -86.63684 0.0003348
  pop-classical     -175.22119 -290.21060 -60.23178 0.0016990
  pop-hip-hop         28.07731  -84.98698 141.14160 0.8198189
  plot(TukeyHSD(fit_aov))
  ```

  ![](data:image/png;base64,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iVUTPFvkeO9ipeZPY61msgl2DzN8vnntgO047UXGcbd7bQvcA1yCX/0RhXzxfhKrv94fa00ElihKfQZuoXX0e6zefwfgCGBUyPGCwqznxVjT1wb8BDwYS8hhZJvHpBKm2YIlxG74CXEQ8GaB8RZjD20P2g4/qRfajps6jxpquzdjVRvXYCX2k7GEXmgZSjnuPOU6jismza1cumE7/0DgKOCPWB1asU2oZgELgGux0mc9dqEo18WwYocPmonV89/gxg3Woeeb7u5YE8sGYA12gTJYkotCvng/hpXm33LDfgurK67kPMFK0tOwJLkA/+JX2G0Wdj2/jFWbXIzV147GLmBOzjJsplzzKGWa0910zsGvfz4o3wiB8dYDY933T9K5DrnQdlyKXcgNO/z38KuZemLrwis1F1qGUo67bMo9vbJIc0KfCHyEHbQXYCWDfBfWctmEtaUdgNXtvY+VnnI1pyp2+KCOwLjNWAnplBDT3RJrY78CK7E10LluOwr54p2ONSGdibXHPojOp7aVmKdnMlY/PbnI8SD8et4IHIqVRJcBvwVOxZJyIbnmUco0N2BJ+dvYhezzsdYb2ar2MpfjCODHWCn5l8BDgf6FtuNVwHVunuNCDL8f1oLqNDfMWjfPMMtQynGXTbmnJyJSMQ9jSTaOwv5TNM7LICJSMfth9eF1wNex6ouBkUaUW66EnqRlEBGpmO9hLZJWYs16D3Xdd8D/Q13mK9d/GaKSaxlEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREpET/B0IVsojoU9jnAAAAAElFTkSuQmCC)

## 9. Two-way Anova--`aov()`

To conduct a two-way Anova, we can use the exact same functions as when conducting a one-way Anova. This means that both the `aov()` and `lm()` functions will work out. When doing a two-way anova, our between-group variance is split across both groups. This essentially means that our first variable will explain a certain amount of variance and our second variable will explain a certain amount of variance.

You can use the `aov()` with multiple independent variables like so:

```R
aov(dependent_variable ~ independent_variable1 + independent_variable2)
```

- **Instructions**

  - For the current exercise, all our data is available in the dataframe `song_data`. Conduct a two-way Anova using the `aov()` function. Note that you can add variables to your anova by putting a `+` sign behind your first independent variable followed by the name of the second independent variable. Add the anova model to the variable `two_way_fit`
  - Call the summary function on your your `two_way_fit` object and print the output to the console.

- **Answers**

  ```R
  # run a two-way anove and store it in the object two_way_fit
  song_data
  two_way_fit<-aov(song_data$duration~song_data$genre+song_data$continent)
  two_way_fit
  # call the summary function on the object two_way_fit
  summary(two_way_fit)
  ```

  ```R
  # run a two-way anove and store it in the object two_way_fit
  song_data
         genre  duration     continent
  1  classical 723.85261 North America
  2  classical 660.03546 North America
  3  classical 620.77342 North America
  4  classical 546.01098 North America
  5  classical 522.99710 North America
  6  classical 453.90322        Europe
  7  classical 448.96608        Europe
  8  classical 373.47220 North America
  9    hip-hop 344.84200 North America
  10 classical 306.83383 North America
  11   hip-hop 305.50159 North America
  12   hip-hop 299.23220 North America
  13 classical 296.35873        Europe
  14       pop 286.90240        Europe
  15       pop 282.22649        Europe
  16   hip-hop 266.63138 North America
  17       pop 264.67220 North America
  18 classical 253.09995 North America
  19       pop 251.66322        Europe
  20   hip-hop 250.95791 North America
  21   hip-hop 249.96526        Europe
  22       pop 246.43873        Europe
  23   hip-hop 236.19873        Europe
  24       pop 235.96363        Europe
  25       pop 230.37342        Europe
  26   hip-hop 229.56363 North America
  27 classical 226.16771 North America
  28       pop 225.14893 North America
  29       pop 220.21179 North America
  30   hip-hop 217.93914 North America
  31   hip-hop 215.30077 North America
  32       pop 202.94485 North America
  33       pop 196.17914        Europe
  34       pop 191.84281        Europe
  35       pop 189.49179        Europe
  36 classical 184.26730        Europe
  37       pop 180.74077 North America
  38       pop 160.23465 North America
  39       pop 151.64036 North America
  40 classical  87.22240        Europe
  41 classical  84.37506        Europe
  42   hip-hop  65.30567        Europe
  43   hip-hop  65.07057        Europe
  44       pop  64.67873 North America
  45   hip-hop  57.20771        Europe
  46   hip-hop  50.23302        Europe
  47   hip-hop  37.61587        Europe
  48   hip-hop  29.88363        Europe
  
  two_way_fit<-aov(song_data$duration~song_data$genre+song_data$continent)
  two_way_fit
  Call:
     aov(formula = song_data$duration ~ song_data$genre + song_data$continent)
  
  Terms:
                  song_data$genre song_data$continent Residuals
  Sum of Squares         374225.5            124610.7  682608.8
  Deg. of Freedom               2                   1        44
  
  Residual standard error: 124.5546
  Estimated effects may be unbalanced
  
  # call the summary function on the object two_way_fit
  summary(two_way_fit)
                      Df Sum Sq Mean Sq F value   Pr(>F)    
  song_data$genre      2 374225  187113  12.061 6.66e-05 ***
  song_data$continent  1 124611  124611   8.032  0.00691 ** 
  Residuals           44 682609   15514                     
  ---
  Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
  ```



## 10. Interaction

The inclusion of multiple variables in an Anova allows you to examine another interesting phenomenon: the interaction effect. If there is an interaction between two factor variables, it means that the effect of either factor on the response variable is not the same at each category of the other factor. The easiest way to understand an interaction effect at play is to visualize the effect.

![](https://s3.amazonaws.com/assets.datacamp.com/production/course_786/datasets/interaction_plots.png)

The visualization above, contains 3 parts. The left top visualization contains the main effect of genre on song duration. As you can see, the pop and hip-hop genres are fairly similar to each other but a classical song has a much longer duration on average. This is where the significance of the genre variable comes from. The left bottom visualization contains the main effect of continent. As you can see, North American songs have on average a longer duration than European songs. However, if you look at the right most plot, you see that this pattern holds for North American and European classical and hip-hop songs but not for pop songs. European pop songs have a higher song duration than American pop songs. This is exactly what is meant with the statement that the effect of either factor on the response variable is not the same at each category of the other factor.

In R, you include an an interaction term in your model by putting a colon between your first and second variables, like so:

```R
independent_variable1:independent_variable2
```

You would then have to add this term into your anova function like so:

```R
aov(dependent_variable ~ independent_variable1 + independent_variable2 + independent_variable1:independent_variable2)
```

- **Instructions**

  - For the current exercise, all our data is available in the dataframe `song_data`. Conduct a two-way Anova using the `aov()` function with an interaction between the variables genre and continent and store the anova model in the object `two_way_fit`
  - Call the summary function on your your `two_way_fit` object and print the output to the console.

- **Answers**

  ```R
  #' conduct a two-way anova with an interaction term of genre and continent
  #' store the model in the object two_way_fit
  two_way_fit<-aov(song_data$duration~song_data$genre+song_data$continent+song_data$genre:song_data$continent)
  two_way_fit
  # call the summary function on the object two_way_fit and print the output to the console
  summary(two_way_fit)
  ```

  ```R
  #' conduct a two-way anova with an interaction term of genre and continent
  #' store the model in the object two_way_fit
  two_way_fit<-aov(song_data$duration~song_data$genre+song_data$continent+song_data$genre:song_data$continent)
  two_way_fit
  Call:
     aov(formula = song_data$duration ~ song_data$genre + song_data$continent + 
      song_data$genre:song_data$continent)
  
  Terms:
                  song_data$genre song_data$continent
  Sum of Squares         374225.5            124610.7
  Deg. of Freedom               2                   1
                  song_data$genre:song_data$continent Residuals
  Sum of Squares                             158829.2  523779.7
  Deg. of Freedom                                   2        42
  
  Residual standard error: 111.6734
  Estimated effects may be unbalanced
  
  # call the summary function on the object two_way_fit and print the output to the console
  summary(two_way_fit)
                                      Df Sum Sq Mean Sq F value   Pr(>F)    
  song_data$genre                      2 374225  187113  15.004 1.21e-05 ***
  song_data$continent                  1 124611  124611   9.992  0.00292 ** 
  song_data$genre:song_data$continent  2 158829   79415   6.368  0.00384 ** 
  Residuals                           42 523780   12471                     
  ---
  Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
  ```

  

