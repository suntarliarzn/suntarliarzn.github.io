---

title: Inferential Statistics(13)-R[07]-Non-parametric tests
key: 20201127

tags: Statistics; R; binom.test(); wilcox.test(,paired=TRUE), wilcox.test(dependent_variable~independent_variable), kruskal.test(), cor.test(x,y, method="spearman") 

layout: article

mathjax: true

mathjax_autoNumber: true

---

# Inferential Statistics(13)-R[07]-Non-parametric tests

<!--more-->

## 1.  Sign test(01)

  As you may have understood from the lecture, there are several reasons to use nonparametric methods instead of parametric methods. Let's summarise the main reasons first:

1. **The underlying probability distribution is unknown or deviates from what the parametric method requires**
2. **The sample size may be very small so that is not possible to test whether the parametric assumptions are met**
3. **The measurement level may be different from what the parametric methods requires. For instance, it could be ordinal.**
4. **There may be no parametric method available to test your specific question.**

The first nonparametric test that we will treat is the sign test. This is the nonparametric equivalent to the one-sample t test. This test calculates the probability of x successes or more on n trials if the true probability is p. For some these parameters may sound familiar. We have already come across them when we've been working with the binomial distributions. Let's take one step back though. Before we move on to doing a sign test in R, let's first get our hypotheses right. To do so, let's work with an example of the American elections. Let's consider only two democratic nominees: Hillary Clinton and Bernie Sanders. Choose the most appropriate set of hypotheses for a sign test using this example given the fact that we do not indicate directionality in our hypotheses.

- **Hypotheses**
  - H0: There's an equal chance that an American citizen votes for Hillary Clinton or Bernie Sanders. 
  - H1: There's not an equal chance that an American citizen votes for Hillary Clinton or Bernie Sanders.



## 2. sign test(02) `binom.test(x, n, p = 0.5,alternative = c("two.sided", "less", "greater"),conf.level = 0.95)`
To test our hypothesis, we've started to collect data. We sampled a total of 350 American citizens from different states. In our little census, we found that 60% of our sample indicated that they would vote for Hillary Clinton. Does this still mean that there is an equal chance that an American citizen votes for Hillary Clinton or Bernie Sanders?

In order to test this, we use the R function `binom.test()`. This functions accepts the parameters `x`, `n`, `p` and `alternative`. x here represents the number of successes. In this case that would be `0.6 * 350` as this the amount of people that voted for Hillary Clinton in our sample. n represents the sample size which is 350 in our current example. p represents the hypothesized probability of success. As our null hypothesis states that we expect an equal amount of American citizens to vote for Hillary Clinton or Bernie Sanders, this comes down to 0.5 in our example. alternative indicates what sort our hypothesis we are doing. As we are doing two-sided hypothesis testing, this argument can be put to two.sided (the default). A full example with arbitrary values of using the binom.test function is the following: `binom.test(300, 350, alternative = "two.sided")`

- ### `binom.test()`

  - ##### Usage

    ```R
    binom.test(x, n, p = 0.5,
               alternative = c("two.sided", "less", "greater"),
               conf.level = 0.95)
    ```

    ##### Arguments

    - x

      number of successes, or a vector of length 2 giving the numbers of successes and failures, respectively.

    - n

      number of trials; ignored if `x` has length 2.

    - p

      hypothesized probability of success.

    - alternative

      indicates the alternative hypothesis and must be one of `"two.sided"`, `"greater"` or `"less"`. You can specify just the initial letter.

    - conf.level

      confidence level for the returned confidence interval.

- **Instructions**

  - Test the hypotheses stated in our previous exercise by using the `binom.test()` function.
  - State your conclusion in a variable `conclusion`. Would you accept or reject the null hypothesis that there is an equal number of American citizens voting for Hillary Clinton and Bernie Sanders? Assign the variable `conclusion` either the value of "accepted" or "rejected".

- **Answers**

  ```R
  #' test the hypothesis that there is an equal number of american citizens voting for 
  #' Hillary Clinton and Bernie Sanders
  binom.test(0.6*350, 350, p =0.5, alternative = "two.sided")
  
  #' State your conclusion in the variable conclusion. Assign it either the value of "rejected"
  #' or the value of "accepted"
  conclusion<-"rejected"
  ```

  ```r
  #' test the hypothesis that there is an equal number of american citizens voting for 
  #' Hillary Clinton and Bernie Sanders
  binom.test(0.6*350, 350, p =0.5, alternative = "two.sided")
  
  	Exact binomial test
  
  data:  0.6 * 350 and 350
  number of successes = 210, number of trials = 350, p-value = 0.0002161
  alternative hypothesis: true probability of success is not equal to 0.5
  95 percent confidence interval:
   0.5465790 0.6517141
  sample estimates:
  probability of success 
                     0.6 
  #' State your conclusion in the variable conclusion. Assign it either the value of "rejected"
  #' or the value of "accepted"
  conclusion<-"rejected"
  ```

  

## 3. The Wilcoxon Signed-Rank Test(01)

In the last exercise, you performed a sign test. However sometimes you will have ordinal data where people have been rating two different products and where the difference in ratings matters. Let's assume we work for a consumer goods company and we have been releasing two different beers. Our first beer is an IPA and our second is a wheat beer. We allow our test panel of customers to rate both beers on a scale from 1 - 5. In order to analyze this data, we can use A Wilcoxon signed rank test. This is the equivalent of a one-sample t-test.

Before we move on to doing a Wilcoxon signed-rank test in R, let's first get our hypotheses right. To do so, let's work with our example of rating two different types of beer: the IPA and the wheat beer. In this example we have preliminary evidence that consumers prefer our IPA to our wheat beer. To gain further evidence for this, we are presenting both beers to our test panel. Choose the most appropriate set of hypotheses using this example given the fact that we want to indicate directionality in our hypotheses.

- **Hypotheses**
  - H0: The beers are equally appreciated by our test panel. 
  - H1: Our IPA receives higher appreciation from our test panel than the wheat beer.

## 4. The Wilcoxon Signed-Rank Test (02)--`wilcox.test(x, y = NULL, alternative = c("two.sided", "less", "greater"),             paired = FALSE)`

Our Wilcoxon signed-rank test is the nonparametric equivalent of the dependent t test. It actually calculates a difference score between the ratings of the first beer, the IPA, and the ratings of our second beer, the wheat beer. As these beers are rated on a scale from 1 to 5, we regard a score of 5 as the highest possible score and a score of 1 as the lowest possible score. The largest possible difference score thus is 4.

![](https://s3.amazonaws.com/assets.datacamp.com/production/course_786/datasets/beer_scores.png)

Above are displayed the scores that our test panel of 3 individuals gave to each of the beer. From all the scores, the difference score is calculated. In the example, this is done by detracting the score of the wheat beer from the IPA. This is done in the fourth column. Finally, the differences are ranked. Here, difference scores of zero are usually ignored.

In R, you can perform a Wilcoxon signed-rank test with the function `wilcox.test()`. You can give this function two different vectors with scores. Also, you have to set the paired parameter to `TRUE`. If we would use this test on the data a provided in the table, we could do so in the following way: `wilcox.test(c(5, 4, 5), c(1, 2, 2), paired = TRUE)`. We can also specify the alternative parameter. By default this is set to "two.sided" meaning that we are doing a two-sided test. If you want to check whether you first vector is greater than your second vector, you change this to "greater".

- ### `wilcox.test()`

  - `wilcox.test(x, y = NULL, alternative = c("two.sided", "less", "greater"),            mu = 0, paired = FALSE, exact = NULL, correct = TRUE, conf.int = FALSE, conf.level = 0.95, …)`

    - ##### Arguments

      - x

        numeric vector of data values. Non-finite (e.g., infinite or missing) values will be omitted.

      - y

        an optional numeric vector of data values: as with `x` non-finite values will be omitted.

      - alternative

        a character string specifying the alternative hypothesis, must be one of `"two.sided"` (default), `"greater"` or `"less"`. You can specify just the initial letter.

      - mu

        a number specifying an optional parameter used to form the null hypothesis. See ‘Details’.

      - paired

        a logical indicating whether you want a paired test.

      - exact

        a logical indicating whether an exact p-value should be computed.

      - correct

        a logical indicating whether to apply continuity correction in the normal approximation for the p-value.

      - conf.int

        a logical indicating whether a confidence interval should be computed.

      - conf.level

        confidence level of the interval.

      - formula

        a formula of the form `lhs ~ rhs` where `lhs` is a numeric variable giving the data values and `rhs` a factor with two levels giving the corresponding groups.

      - data

        an optional matrix or data frame (or similar: see `model.frame`) containing the variables in the formula `formula`. By default the variables are taken from `environment(formula)`.

      - subset

        an optional vector specifying a subset of observations to be used.

      - na.action

        a function which indicates what should happen when the data contain `NA`s. Defaults to `getOption("na.action")`.

      - …

        further arguments to be passed to or from methods.

- **Instructions**

  - There are two vectors available in your console. The vector `score_ipa` contains the scores that participants gave to the IPA. The vector `score_wheat` contains the scores that participants gave to the wheat beer. Perform a Wilcoxon signed-rank test using the function `wilcox.test()`. You actually want to test the hypothesis whether the IPA was appreciated to a greater extent by the test panel then the wheat beer.
  - Assign your conclusion to the variable `conclusion`. Is the null hypothesis that the IPA and the wheat beer are equally appreciated accepted or rejected. Assign either "rejected" or "accepted" to the variable `conclusion`.

- **Answers**

  ```R
  # do a Wilcoxon test
  wilcox.test(score_ipa, score_wheat, paired=TRUE, alternative="greater")
  
  # assign your conclusion to the variable conclusion
  conclusion<-"rejected"
  ```

  ```R
  # do a Wilcoxon test
  wilcox.test(score_ipa, score_wheat, paired=TRUE, alternative="greater")
  Warning message: cannot compute exact p-value with ties
  
  	Wilcoxon signed rank test with continuity correction
  
  data:  score_ipa and score_wheat
  V = 50, p-value = 0.00733
  alternative hypothesis: true location shift is greater than 0
  
  # assign your conclusion to the variable conclusion
  conclusion<-"rejected"
  ```





## 5. The Wilcoxon rank-sum test(Mann-Whitney) (01)

The Wilcoxon rank-sum test is the nonparametric equivalent of the two sample t test. Your confusion may stem from the fact that this name is really similar to the Wilcoxon signed-rank test. **You can use the Wilxocon rank-sum test when you deal with two different groups and want to test whether they differ significantly.** Let's take our previous example with the IPA and wheat beer. One half of our test panel will consume the IPA. The other half of the test panel will drink the wheat beer. After, each group member will report their levels of satisfaction with the drink.

Before we move on to doing a Wilcoxon rank-sum test in R, let's first get our hypotheses for this new experiment. In this example we still have preliminary evidence that the IPA is associated with higher levels of satisfaction than our wheat beer. Choose the most appropriate set of hypotheses using this example given the fact that we want to indicate directionality in our hypotheses.

- **Hypotheses**
  - H0: The IPA and wheat beer groups will report equal levels of satisfaction with their drink. 
  - H1: The IPA group will report a higher level of satisfaction than the wheat beer group.

## 6. The Wilcoxon rank-sum test(Mann-Whitney) (02)--`wilcox.test(dependent_variable ~ independent_variable)`

Our Wilcoxon rank-sum test is the nonparametric equivalent of the independent t test. It actually calculates the sum of the ranks for both the IPA and the wheat beer group. As these beers are rated on a scale from 1 to 5, we regard a score of 5 as the highest possible score and a score of 1 as the lowest possible score. The largest possible difference score thus is 4.

![](https://s3.amazonaws.com/assets.datacamp.com/production/course_786/datasets/beer_scores2.png)

Above are displayed the scores of our two groups. Each score is ranked. In case of a tie in rating, the average rank is taken. In R, you can do a Wilcoxon rank-sum test with the function `wilcox.test()`. You can give this function two different vectors with scores. Alternatively, you can use the formula interface when you are doing a rank-sum test. In this formula interface you specify your dependent variable ~ your independent variable, like so: 

- `wilcox.test(dependent_variable ~ independent_variable)`

If we would use this test on the data a provided in the table and we presume that this data is contained in a dataframe `beer_data`, we could do so in the following way: `wilcox.test(beer_data$rating ~ beer_data$group)`. We can also specify the alternative parameter. By default this is set to "two.sided" meaning that we are doing a two-sided test. If you want to check whether you first group is greater than your second group, you change this to "greater".

- **Instructions**

  - There is a dataframe `beer_data` available in your console. It contains two vectors: `rating` and `group`. Peform a Wilcoxon rank-sum test using the function `wilcox.test()`. You actually want to test the hypothesis whether the IPA group experienced greater satisfaction than the wheat beer group.
  - Assign your conclusion to the variable `conclusion`. Is the null hypothesis that the IPA group is equally satisfied as the wheat beer group rejected? Assign either "rejected" or "accepted" to the variable `conclusion`.

- **Answers**

  ```R
  # do a Wilcoxon rank-sum test
  wilcox.test(beer_data$rating~beer_data$group, alternative="greater")
  
  # assign your conclusion to the variable conclusion
  conclusion<-"rejected"
  ```

  ```R
  # do a Wilcoxon rank-sum test
  wilcox.test(beer_data$rating~beer_data$group, alternative="greater")
  Warning message: cannot compute exact p-value with ties
  
  	Wilcoxon rank sum test with continuity correction
  
  data:  beer_data$rating by beer_data$group
  W = 72.5, p-value = 0.0425
  alternative hypothesis: true location shift is greater than 0
  # assign your conclusion to the variable conclusion
  conclusion<-"rejected"
  ```



## 7. The Kruskall-Wallis test(01)

Just as the comparison of means across two groups can be extended to a comparison of means across many groups, the non-parametric approach to compare mean ranks between two groups can also be extended to multiple groups. The test that does this is called the Kruskall-Wallis test which is a non-parametric counterpart of the one-way analysis of variance. In the exercises on using the Kruskall-Wallis test, we will be working with our example of beer. However, we will extend this example by introducing a third beer type that is being tested by our test panel: the amber ale.

Before we move on to doing a Kruskall-Wallis test in R, let's first get our hypotheses for this new experiment. Because we just introduced a new type of beer, we have no preliminary evidence for which beer may be best. Choose the most appropriate set of hypotheses using this example given the fact that we do not want to indicate directionality in our hypotheses.

- **Hypotheses**
  - H0: There is no difference in satisfaction between the different beer groups. 
  - H1: There is a difference in satisfaction between the different beer groups.



## 8. The Kruskall-Wallis test(02)--`kruskal.test()`

The first step in conducting a Kruskal-Wallis test is ranking the entire sample. When ties occur between two or more values, these values are given the mean of the ranks for which they are tied. After ranking the data, you return the scores to their groups and sum these scores within each group. The sum of ranks for each group is denoted Ri (where i is used to denote the particular group). You also calculate the mean rank over all groups denoted by R¯. Lastly you detract R¯ from each mean group rank, square this difference and multiply it by the group sample size.

The test statistic that is calculated by the Kruskal-Wallis test has an approximate chi-squared distribution with g - 1 degrees of freedom. In R you can do such a test with the `kruskal.test()` function. This test again works with a formula interface that you can provide a dependent variable and an independent variable.

- ### `kruskal.test()`

  - `kruskal.test(formula, data, subset, na.action, …)`

    - ##### Arguments

      - x

        a numeric vector of data values, or a list of numeric data vectors. Non-numeric elements of a list will be coerced, with a warning.

      - g

        a vector or factor object giving the group for the corresponding elements of `x`. Ignored with a warning if `x` is a list.

      - formula

        a formula of the form `response ~ group` where `response` gives the data values and `group` a vector or factor of the corresponding groups.

      - data

        an optional matrix or data frame (or similar: see `model.frame`) containing the variables in the formula `formula`. By default the variables are taken from `environment(formula)`.

      - subset

        an optional vector specifying a subset of observations to be used.

      - na.action

        a function which indicates what should happen when the data contain `NA`s. Defaults to `getOption("na.action")`.

      - …

        further arguments to be passed to or from methods.

- **Instructions**

  - There is a dataframe `beer_data` available in your console. It contains two vectors: `rating` and `group`. Peform a Kruskall-Wallis test using the function `kruskal.test()` and print the output to the console.
  - Assign your conclusion to the variable `conclusion`. Is the null hypothesis that there is no difference in satisfaction between the different beer groups accepted or not? Assign either "rejected" or "not" to the variable `conclusion`.

- **Answers**

  ```R
  # do a Kruskal-Wallis test
  beer_data
  kruskal.test(rating~group, data=beer_data)
  
  
  # assign your conclusion to the variable conclusion
  conclusion<-"not"
  ```

  ```R
  
  # assign your conclusion to the variable conclusion
  # do a Kruskal-Wallis test
  beer_data
          group rating
  1    IPA_beer      4
  2    IPA_beer      4
  3    IPA_beer      3
  4    IPA_beer      4
  5    IPA_beer      5
  6    IPA_beer      5
  7    IPA_beer      4
  8    IPA_beer      4
  9    IPA_beer      3
  10   IPA_beer      2
  11 wheat_beer      2
  12 wheat_beer      3
  13 wheat_beer      2
  14 wheat_beer      3
  15 wheat_beer      4
  16 wheat_beer      4
  17 wheat_beer      5
  18 wheat_beer      3
  19 wheat_beer      2
  20 wheat_beer      1
  21 amber_beer      2
  22 amber_beer      2
  23 amber_beer      2
  24 amber_beer      3
  25 amber_beer      4
  26 amber_beer      5
  27 amber_beer      3
  28 amber_beer      3
  29 amber_beer      2
  30 amber_beer      2
  kruskal.test(rating~group, data=beer_data)
  
  	Kruskal-Wallis rank sum test
  
  data:  rating by group
  Kruskal-Wallis chi-squared = 5.1705, df = 2, p-value = 0.07538
  # assign your conclusion to the variable conclusion
  conclusion<-"not"
  ```



## 9. Spearman correlation--`cor(X,Y, method="spearman")`

There are also non-parametric ways to measure for instance the association between variables. The most important of these is the Spearman rank correlation coefficient which is often treated as the non-parametric counterpart of the Pearson correlation coefficient.

The Spearman correlation coefficient is a good replacement of the Pearson correlation if one of these conditions applies to your variables:

- **they are not numerical but one or both of the variables are ordinal**
- **they are not linearly related**
- **they contain one or more outliers**
- **they don't follow a bivariate normal distribution or you cannot check this due to lack of data.**

You can interpret the Spearman correlation in the same fashion as the Pearson correlation coefficients. a ρ of smaller than 0 denotes a negative relationship while a ρ of larger than 0 denotes a positive relationship. To calculate the correlation in R, you can work with the familiar `cor()` function. This function accepts an `x` and `y` vector. Also, you can specify the correlation method in this function by using the `method` parameter. By default this is set to "pearson". If you set it to "spearman", the function calculates the spearman correlation coefficient.

- **Instructions**

  - In your console, a dataframe called `beer_data` is available which contains the frequency of craft beer consumption. This frame contains the variables `education_level` which represents the highest completed education level of a respondee. 1 represents primary school, 2 high school, 3 bachelor, 4 master, 5 PhD. The variable `consumption` represents the frequency with which the respondee consumes craft beer. 1 represents never, 2 rarely, 3 occassionally, 4 often and 5 very often. Calculate the Spearman correlation between education level and craft beer ratings and print this to the console.

- **Answers**

  ```R
  # calculate the spearman correlation between education level and rating of craft beer
  beer_data
  cor(beer_data$education_level, beer_data$consumption, method="pearson")
  cor(beer_data$education_level, beer_data$consumption, method="spearman")
  ```

  ```R
  # calculate the spearman correlation between education level and rating of craft beer
  beer_data
     education_level consumption
  1                1           2
  2                2           2
  3                2           2
  4                2           3
  5                3           4
  6                3           4
  7                4           5
  8                5           4
  9                4           4
  10               4           3
  11               3           2
  12               3           1
  13               3           3
  14               2           4
  15               2           3
  16               2           2
  17               3           4
  18               4           5
  19               3           3
  20               2           1
  cor(beer_data$education_level, beer_data$consumption, method="pearson")
  [1] 0.5881315
  cor(beer_data$education_level, beer_data$consumption, method="spearman")
  [1] 0.6092038
  ```

  

## 10. Spearman correlation test--`cor.test(x,y,method="spearman")`

In the last exercise we calculated the Spearman correlation coefficient between education level and craft beer consumption. We now know our absolute correlation coefficent, yet we do not know whether this is significantly different from 0. In order to test this, we can use the R function `cor.test()`. In addition to calculating the correlation coefficient, this function also tests the hypothesis whether our obtained correlation coefficient is different from 0.

The function `cor.test()` accepts the same parameter as the function `cor()`. You can provide it with an `x` and `y` vectors. Also, you specify the `method` parameter to be "spearman".

- **Instructions**

  - In your console, a dataframe called `beer_data` is available which contains the frequency of craft beer consumption. This frame contains the variables `education_level` which represents the highest completed education level of a respondee. 1 represents primary school, 2 high school, 3 bachelor, 4 master, 5 PhD. The variable `consumption` represents the frequency with which the respondee consumes craft beer. 1 represents never, 2 rarely, 3 occassionally, 4 often and 5 very often. Using the R function `cor.test()`, calculate the correlation coefficient, test whether it is is different from zero and print the output to the console.
  - Is the null hypothesis of the correlation coefficient being equal to 0 accepted or rejected? Assign either the value of "accepted" or the value of "rejected" to the variable conclusion

- **Answers**

  ```R
  # calculate the correlation coefficient and test whether it is different from 0
  cor.test(beer_data$education_level, beer_data$consumption,  method="pearson")
  cor.test(beer_data$education_level, beer_data$consumption,  method="spearman")
  
  # is the null hypothesis accepted or rejected. Assign either value to the variable conclusion
  conclusion<-"rejected"
  ```

  ```R
  # calculate the correlation coefficient and test whether it is different from 0
  cor.test(beer_data$education_level, beer_data$consumption,  method="pearson")
  
  	Pearson's product-moment correlation
  
  data:  beer_data$education_level and beer_data$consumption
  t = 3.0852, df = 18, p-value = 0.006382
  alternative hypothesis: true correlation is not equal to 0
  95 percent confidence interval:
   0.1968405 0.8178090
  sample estimates:
        cor 
  0.5881315 
  
  cor.test(beer_data$education_level, beer_data$consumption,  method="spearman")
  Warning message: Cannot compute exact p-value with ties
  
  	Spearman's rank correlation rho
  
  data:  beer_data$education_level and beer_data$consumption
  S = 519.76, p-value = 0.004356
  alternative hypothesis: true rho is not equal to 0
  sample estimates:
        rho 
  0.6092038 
  
  # is the null hypothesis accepted or rejected. Assign either value to the variable conclusion
  conclusion<-"rejected"
  ```

  