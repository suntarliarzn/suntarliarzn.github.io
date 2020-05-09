---

title: Basic Statistics - (07) R[3] Randomness & Probability

tags: Statistics; R; Randomness; Probability; dnorm(); pnorm();qnorm();rnorm(); dbinom(); pbinom(); qbinom(); rbinom(); cumsum();

layout: article

---

# Basic Statistics - (07) R[3] Randomness & Probability

<!--more-->

## 1.  Probability mass and density functions

- ### `barplot()`

  From the lectures you may recall the concepts of probability mass and density functions. Probability mass functions relate to the probability distributions discrete variables, while probability density functions relate to probability distributions of continuous variables. Suppose we have the following probability density function:

  ![img](https://s3.amazonaws.com/assets.datacamp.com/production/course_785/datasets/probability_density.png)

  - Instruction

    Using the `barplot` function, make a probability histrogram of the above above probability mass function. Specify the height of the bars with the y variable and the names of the bars (`names.arg`), that is, the labels on the x axis, with the x variable in your dataframe.

  - **Answer**

    ```R
    # the data frame
    data <- data.frame(outcome = 0:5, probs = c(0.1, 0.2, 0.3, 0.2, 0.1, 0.1))
    
    # make a histogram of the probability distribution
    barplot(data$probs, ylim=c(0,1), names.arg=data$outcome)
    ```

    ![](data:image/png;base64,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)

- ### **The Normal Distribution**

  Density, distribution function, quantile function and random generation for the normal distribution with mean equal to `mean` and standard deviation equal to `sd`.

  - Keywords

    [distribution](https://www.rdocumentation.org/search/keywords/distribution)

- ##### [Usage](https://www.w3cschool.cn/r/r_normal_distribution.html)

```
dnorm(x, mean = 0, sd = 1, log = FALSE)
pnorm(q, mean = 0, sd = 1, lower.tail = TRUE, log.p = FALSE)
qnorm(p, mean = 0, sd = 1, lower.tail = TRUE, log.p = FALSE)
rnorm(n, mean = 0, sd = 1)
```

- ##### Arguments

  - x, q

    vector of quantiles.

  - p

    vector of probabilities.

  - n

    number of observations. If `length(n) > 1`, the length is taken to be the number required.

  - mean

    vector of means.

  - sd

    vector of standard deviations.

  - log, log.p

    logical; if TRUE, probabilities p are given as log(p).

  - lower.tail

    logical; if TRUE (default), probabilities are \(P[X \le x]\) otherwise, \(P[X > x]\).

- ##### Details

  

  If `mean` or `sd` are not specified they assume the default values of `0` and `1`, respectively.

  The normal distribution has density $$ f(x) = \frac{1}{\sqrt{2\pi}\sigma} e^{-(x-\mu)^2/2\sigma^2}$$ where \(\mu\) is the mean of the distribution and \(\sigma\) the standard deviation.

  

- ##### Value

  **`dnorm` gives the density, `pnorm` gives the distribution function, `qnorm` gives the quantile function, and `rnorm` generates random deviates.**

  The length of the result is determined by `n` for `rnorm`, and is the maximum of the lengths of the numerical arguments for the other functions.

  The numerical arguments other than `n` are recycled to the length of the result. Only the first elements of the logical arguments are used.

  For `sd = 0` this gives the limit as `sd` decreases to 0, a point mass at `mu`. `sd < 0` is an error and returns `NaN`.

- ### `dnorm()`&`pnorm`&`qnorm()`&`rnorm()`

  - `dnorm(data,mean,sd)`

    **绘制给定数字分布图**:该函数给出给定平均值和标准偏差在每个点的概率分布的高度。

    需要先给定数字范围

    并利用`plot(x="给定data范围",y="dnorm(data,mean,sd)")进行绘制。`

  - `pnorm(X值, mean, sd)`

    **累积分布函数**:该函数给出正态分布随机数的概率小于给定数的值。**查找相应X值的累积概率。**

  - `qnorm(percent(%),mean,sd)`

    该函数采用概率值，并给出累积值与概率值匹配的数字。**查找相应累积概率的X值。**

  - `rnorm(number)`

    此函数用于生成n个分布正常的随机数。 它将样本大小作为输入，并生成许多随机数。

- Exercise

  ### **`dnorm()`**

  For continuous variables, the values of a variable are associated with a probability density. To get a probability, you will need to consider an interval under the curve of the probability density function. Probabilities here are thus considered surface areas.

  In this exercise, we will simulate some random normally distributed data using the `rnorm()` function. This data is contained within the `data` vector. You will then need to visualize the data.

  - Instruction

    - Check the documentation of the the `dnorm` function using `help(dnorm)`
    - Now calculate the density of the `data` vector and store it in a vector called `density`
    - Finally make a plot with as x variable the `data` vector and as y variable the `density` variable

  - **Answer**

    ```R
    # simulating data
    set.seed(11225)
    data <- rnorm(10000)
    
    # check for documentation of the dnorm function
    help(dnorm)
    
    # calculate the density of data and store it in the variable density
    density <- dnorm(data)
    
    # make a plot with as x variable data and as y variable density
    plot(x = data, y = density)
    ```

    ![](data:image/png;base64,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)

- ### The cumulative probability distribution

  ### **`cumsum()`**

  In the last two exercises, we saw the probability distributions of a discrete and a continuous variable. In this exercise we will jump into cumulative probability distributions. Let's go back to our probability density function of the first exercise:

  ![img](https://s3.amazonaws.com/assets.datacamp.com/production/course_785/datasets/probability_density.png)

  All the probabilities in the table are included in the dataframe `probability_distribution` which contains the variables `outcome` and `probs`. We could sum individual probabilities in order to get a cumulative probability of a given value. However, in some cases, the function `cumsum()` may come in handy. What `cumsum()` does is that returns a vector whose elements are the cumulative sums of the elements of the arguments. For instance, if we would have a vector which contains the elements: `c(1, 2, 3)`, `cumsum()` would return `c(1, 3, 6)`

  - Instructions

    - Calculate the probability that a variable x is smaller or equal to two. Put the result in the variable `prob`. You can use the values from the table displayed above.
    - Calculate the cumulative probability that a variable x is respectively 0, smaller or equal to one, smaller or equal to two, and smaller or equal to three. Use the `cumsum()` functions for this and print the output to the console.

  - **Answer**

    ```R
    # probability that x is smaller or equal to two
    0.6
    
    #' probability that x is 0, smaller or equal to one,
    #' smaller or equal to two, and smaller or equal to three
    cumsum(probability_distribution$probs)
    ```

    ```R
    # probability that x is smaller or equal to two
    0.6
    
    #' probability that x is 0, smaller or equal to one,
    #' smaller or equal to two, and smaller or equal to three
    cumsum(probability_distribution$probs)
    ```

    

## 2. Summary statistics

- ### The mean

  One of the first things that you would like to know about a probability distribution are some summary statistics that capture the essence of the distribution. One example of such a summary statistics is the mean. The mean of a probability distribution is calculated by taking the weighted average of all possible values that a random variable can take. In the case of a discrete variable, you calculate the sum of each possible value times its probability. Let's go back to our probability mass function of the first exercise.

  ![img](https://s3.amazonaws.com/assets.datacamp.com/production/course_785/datasets/probability_density.png)
  - Instruction

    - Calculate the expected value of the probability distribution and store this in the variable `expected_score`. `expected_score` should be a number rounded to 1 decimal. Note that you have a dataframe `data` available in your console that contains a vector of outcomes called `outcome` and a vector of probabilities called `probs`. This dataframe is the exact same as the table displayed above.
    - Print the variable `expected_score`

  - **Answer**

    ```r
    # calculate the expected probability value and assign it to the variable expected_score
    expected_score<-sum(data$outcome * data$probs)
    # print the variable expected_score
    expected_score
    ```

    ```R
    # calculate the expected probability value and assign it to the variable expected_score
    expected_score<-sum(data$outcome * data$probs)
    # print the variable expected_score
    expected_score
    ```

- ### Variance and the standard deviation

  In addition to the mean, sometimes you would also like to know about the spread of the distribution. The variance is often taken as a measure of spread of a distribution. It is the squared deviation of an observation from its mean. If you want to calculate it on the basis of a probability distribution, it is the sum of the squared difference between the individual observation and their mean multiplied by their probabilities. See the following formula: var(X)=∑(xi−x¯)2∗Pi(xi)var(X)=∑(xi−x¯)2∗Pi(xi).

  If we want to turn that variance into the standard deviation, all we need to do is to take its square root. Let's go back to our probability mass function of the first exercise and see if we can get the variance.

  ![img](https://s3.amazonaws.com/assets.datacamp.com/production/course_785/datasets/probability_density.png)

  - Instruction

    - Calculate the variance of the mass function displayed above and store this in a variable called `variance`. The mean of probability mass function, displayed as x¯x¯ in the formula, is stored in the variable `expected_score`. Note that you have a dataframe `data` available in your console that contains a vector of outcomes called `outcome` and a vector of probabilities called `probs`. This dataframe is the exact same as the table displayed above.
    - Calculate the standard deviation of the mass function displayed above and store this in a variable called `std`.

  - **Answer**

    ```r
    # the mean of the probability mass function
    expected_score <- sum(data$outcome * data$probs)
    
    # calculate the variance and store it in a variable called variance
    variance <- sum((data$outcome-expected_score)^2*data$probs)
    variance
    # calculate the standard deviation and store it in a variable called std
    std<-sqrt(variance)
    ```

    ```R
    > # the mean of the probability mass function
    > expected_score <- sum(data$outcome * data$probs)
    > expected_score
    [1] 2.3
    > # calculate the variance and store it in a variable called variance
    > variance <- sum((data$outcome-expected_score)^2*data$probs)
    > variance
    [1] 2.01
    > # calculate the standard deviation and store it in a variable called std
    > std<-sqrt(variance)
    > std
    [1] 1.417745
    ```

    

## 3. The Normal Distribution and Cumulative Probability

- ### `pnorm()`

  In the previous assignment we calculated probabilities according to the normal distribution by looking at an image. However, it is not always as simple as that. Sometimes we deal with cases where we want to know the probability that a normally distributed variable is between a certain interval. Let's work with an example of female hair length.

  Hair length is considered to be normally distributed with a mean of 25 centimeters and a standard deviation of 5. Imagine we wanted to know the probability that a woman's hair length is less than 30. We can do this in R using the `pnorm()` function. This function calculates the cumultative probability. We can use it the following way: `pnorm(30, mean = 25, sd = 5)`. If you wanted to calculate the probability of a woman having a hair length larger or equal to 30 centimers, you can set the `lower.tail` argument to FALSE. For instance, `pnorm(30, mean = 25, sd = 5, lower.tail = FALSE)`. Let's visualize this. Note that the first example is visualized on the left, while the second example is visualized on the right:

  ![img](https://s3.amazonaws.com/assets.datacamp.com/production/course_785/datasets/prob_visualization.png)

  - Instruction

    Calculate the probability of a woman having a hair length less than 20 centimeters using a mean of 25 and a standard deviation of 5. Use the `pnorm()` function and round the value to two decimals.

  - **Answer**

    ```R
    # probability of a woman having a hair length of less than 20 centimeters
    lower<-pnorm(20, mean= 25, sd = 5)
    round(lower, 2)
    ```

## 4. The normal distribution and quantiles

- ### `qnorm()`

  Sometimes we have a probability that we want to associate with a value. This is basically the opposite situation as the situation described in the previous question. Say we want the value of a woman's hair length that corresponds with the 0.2 quantile (=20th percentile). Let's consider visually what this means:

  ![img](https://s3.amazonaws.com/assets.datacamp.com/production/course_785/datasets/prob_visualization2.png)

  In the visualization, we are given a blue area with a probability of 0.2. We however want to know the value that is associated with the yellow dotted vertical line. This value is the 0.2 quantile (=20th percentile) and divides the curve in an area that contains the lower 20% of the scores and an area that the rest of the scores. If our variable is normally distributed, in R we can use the function `qnorm()` to do so. We can specify the probability as the first parameter, then specify the mean and then specify the standard deviation, for example, `qnorm(0.2, mean = 25, sd = 5)`.

  - Instruction

    Calculate the 85th percentile of the distribution of female hair length and round this value to two decimals. Note that the mean is 25 and the standard deviation is 5.

  - **Answer**

    ```R
    # 85th percentile of female hair length
    quantile<-qnorm(0.85, mean = 25, sd = 5)
    round(quantile, 2)
    ```

## 5. The normal distribution and Z scores

A special form of the normal probability distribution is the standard normal distribution, also known as the z - distribution. A z distribution has a mean of 0 and a standard deviation of 1. Often you can transform variables to z values. You can transform the values of a variable to z-scores by subtracting the mean, and dividing this by the standard deviation. If you perform this transformation on the values of a data set, your transformed data set will ave a mean of 0 and a standard deviation of 1. The formula to transform a value to a z score is the following:



![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/R/week%203/01%20z-score.jpg)



The Z-score represents how many standard deviations from the mean a value lies.

- Instruction

  Imagine we have a woman with a hair length of 38 centimers and the average hair length was 25 centimers and the standard deviation was 5 centimers. Calculate the Z value for this woman and store it in the variable `z_value`. Round `z_value` to one decimal.

- **Answer**

  ```R
  # calculate the z value and store it in the variable z_value
  z_value <- function(x){(x-25)/5}
  z_value(38)
  ```

  

## 6. The binomial distribution

The binomial distribution is important for discrete variables. There are a few conditions that need to be met before you can consider a random variable to binomially distributed:

1. There is a phenomenon or trial with two possible outcomes and a constant probability of success - this is called a Bernoulli trial
2. All trials are independent

Other ingredients that are essential to a binomial distribution is that we need to observe a certain number of trials, let's call this n, and we count the number of successes in which we are interested, let's call this x. Useful summary statistics for a binomial distribution are the same as for the normal distribution: the mean and the standard deviation.

The mean is calculated by multiplying the number of trials n by the probability of a success denoted by p. The standard deviation of a binomial distribution is calculated by the following formula: 

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/R/week%203/02%20binomial%20std.jpg)

- Instruction

  - Consider an example where we have made an exam consisting of 25 multiple choice questions. Each questions has 5 possible answers. This means that the probability of answering a question correctly by chance is 0.2. Calculate the mean of this distribution and store it in a variable called `mean_chance`
  - Calculate the standard deviation of this distribution and store it in the variable `std_chance`.

- **Answer**

  ```R
  # calculate the mean and store it in the variable mean_chance
  mean_chance<-0.2*25
  mean_chance
  # calculate the standard deviation and store it in the variable std_chance
  std_chance<-(25*0.2*0.8)^0.5
  std_chance
  ```



## 7. Calculating probabilities of binomial distributions in R

- ### [`dbinom()` & `pbinom()`](https://www.w3cschool.cn/r/r_binomial_distribution.html)

  - 二项分布

    ```R
    dbinom(x, size, prob)
    pbinom(x, size, prob)
    qbinom(p, size, prob)
    rbinom(n, size, prob)
    ```

    - **x**是数字的向量。
    - **p**是概率向量。
    - **n**是观察的数量。
    - **size**是试验的数量。
    - **prob**是每个试验成功的概率。

  Just as with the normal distribution, we can also calculate probabilities according to the binomial distributions. Let's consider the example in the previous question. We had an exam with 25 questions and 0.2 probability of guessing a question correctly. In contrast to the normal distribution, when we have to deal with a binomial distribution we can calculate the probability of exactly answering say 5 questions correctly. This is because a binomial distribution is a discrete distribution.

  When we want to calculate the probability of answering 5 questions correctly, we can use the `dbinom` function. This function calculates an exact probability. If we would like to calculate an interval of probabilities, say the probability of answer 5 or more questions correctly, we can use the `pbinom` function. We have already seen a similar function when we were dealing with the normal distribution: the `pnorm()` function.

  

  - Instruction

    - Look at the documentation of the functions `dbinom()` and `pbinom()`. Calculate the exact probability of answering 5 questions correctly and store this in the variable `five_correct`
    - Calculate the cumulative probability of answering at least 5 questions correctly and store this in the variable `atleast_five_correct`

  - **Answer**

    ```R
    # probability of answering 5 questions correctly
    five_correct <- dbinom(5, size = 25, prob = 0.2)
    
    # probability of answering at least 5 questions correctly
    atleast_five_correct <- pbinom(4, size = 25, prob = 0.2, lower.tail = FALSE)
    ```

- ### `pbinom()`

  Remember the concept of quantiles? If not, let me briefly recap it. Quantiles are used when you have a probability and you want to associate this probability with a value. In our last example we had 25 questions and the probability of guessing a question correctly was 0.2. Also, in our last example we wanted to know the probability of answering at least 5 questions correctly and used the `pbinom()` function to do so. With quantiles, we do the exact opposite; we want to calculate the value that is associated with for instance the 0.2 quantile (=20th percentile). In case we are working with a binomial distribution, we can use the function `qbinom()` for this.

  - Instructions

    Calculate the 60th percentile of the binomial distribution of exam questions. Note that the number of questions is 25 and the probability of guessing a question correctly is 0.2.

  - **Answer**

    ```R
    # calculate the 60th percentile
    qbinom(0.6, 25, 0.2)
    ```

    