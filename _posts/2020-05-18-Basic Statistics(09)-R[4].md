---

title: Basic Statistics - (09) R[4] Sampling Distribution

tags: Statistics; R; Sampling Distribution; Sample Distribution; sample(); `pnorm(z-score, lower.tail=TRUE/FALSE)`;

layout: article

mathjax: true

mathjax_autoNumber: true

---

# Basic Statistics - (09) R[4] Sampling Distribution

<!--more-->

## 1.  Sampling from the population

- ### `sample(data,size=)`

  In this lab we have access to the entire population. In real life, this is rarely the case. Often we gather information by taking a sample from a population. In the lectures, you've become familiar with the male beard length (in millimeters) of hipsters in Scandinavia. In this lab, we will be working with this example.

  If we were interested in estimating the average male beard length of hipsters in Scandinavia, in R we can use the `sample()` function to sample from the population. For instance, to sample 50 inhabitants from our Scandinavian male hipster population which is included in the variable `scandinavia_data`, we could do the following: `sample(scandinavia_data, size = 50)`. This command collects a simple random sample of size 50. If we didn't have access to the entire male hipster Scandinavian population, working with these 50 inhabitants would be considerably simpler than having to go through the entire Scandinavian male hipster population.

  - Instruction

    - Make sure not to remove the `set.seed(11225)` code. This makes sure that you will get the same results as the solution code
    - Sample 100 values from the dataset `scandinavia_data` and store this in a variable `first_sample`
    - Calculate the mean of `first sample` and print the result.

  - **Answer**

    ```R
    # variable scandinavia_data contains the beard lengths of scandinavian male population
    set.seed(11225)
    first_sample<-sample(scandinavia_data, size= 100)
    first_sample
    mean(first_sample)
    ```

    ```R
    > # variable scandinavia_data contains the beard lengths of scandinavian male population
    > set.seed(11225)
    > first_sample<-sample(scandinavia_data, size= 100)
    > first_sample
      [1] 27.99663 24.06417 23.48866 23.75189 27.29676 24.45529 28.23739 23.04652
      [9] 23.74036 28.76409 28.12697 31.55525 22.05166 23.69069 27.32476 22.51063
     [17] 27.79851 28.65205 19.44881 21.84980 31.13625 27.46308 26.22158 22.35466
     [25] 20.81535 27.51356 22.84791 27.03847 20.50305 26.59806 24.03845 33.41994
     [33] 25.07562 27.25052 27.96126 26.65947 20.68557 26.78273 31.56429 16.31928
     [41] 23.27613 25.58413 23.68520 30.32883 24.99264 22.70653 22.07276 28.34237
     [49] 31.62887 25.12103 22.62322 26.29557 22.99453 21.99805 28.44408 24.74419
     [57] 20.63301 27.68588 26.60778 23.19137 22.59585 25.24416 20.86827 25.24960
     [65] 31.63289 24.96406 26.42585 23.94020 23.19363 28.22559 23.36927 22.90029
     [73] 24.71661 24.60919 29.18013 32.82084 23.33415 28.00259 29.57501 22.81163
     [81] 30.19587 23.66761 20.68534 28.89661 23.27482 21.55286 28.16404 29.45489
     [89] 24.22142 25.88669 22.46760 23.97159 25.77642 31.02772 26.19912 23.75873
     [97] 24.82717 24.50296 21.66709 26.00112
    > mean(first_sample)
    [1] 25.42916
    ```
    
    


## 2. Loop 循环

- ### `for(i in ){}`

  Not surprisingly, every time we take another random sample, we get a different sample mean. It's useful to get a sense of just how much variability we should expect when estimating the population mean this way.

  The distribution of sample means, or the sampling distribution, can help us understand this variability. However, before continuing with the sampling distribution, we will firstly introduce the concept of a for loop in R.

  Every time some operation has to be repeated a specific number of times, a for loop may come in handy. We only need to specify how many times or upon which conditions those operations need execution: we assign initial values to a control loop variable, perform the loop and then, once finished, we typically do something with the results.

  - Instruction

    Look at the example in the sample code and think what this code will do. Subsequently, press "Submit Answer".

  - **Answer**

    ```R
    # initialize an empty vector
    new_number <- NULL
    
    # run an operation 10 times.
    # The ith position of new number will be set to i
    # at the end of the loop, the vector new_number is printed
    for (i in 1:10){
      new_number[i] <- i
    }
    
    print(new_number)
    ```

    ```R
    # initialize an empty vector
    > new_number <- NULL
    > 
    > # run an operation 10 times.
    > # The ith position of new number will be set to i
    > # at the end of the loop, the vector new_number is printed
    > for (i in 1:10){
        new_number[i] <- i
      }
    > 
    > print(new_number)
     [1]  1  2  3  4  5  6  7  8  9 10
    ```



## 3.  Mean of the Sampling Distribution

- ### `mean(sample)`

  The mean of a sample that you take from the population will never be very far away from the population mean (provided that you randomly sample from the population). Furthermore, the mean of the sampling distribution, that is the mean of the mean of all the samples that we took from the population will never be far away from the population mean. Let's observe this in practice.

  - Instruction

    - Calculate the mean of the population and print it. Note that the population is included in the variable `scandinavia_data`.
    - Calculate the mean of the sample means and print it. Note that the sample means are included in the variable `sample_means`.
    - Note how close the two are.

  - **Answer**

    ```R
    # set the seed such that you will get the same sample as in the solution code
    set.seed(11225)
    
    # empty vector sample means
    sample_means <- NULL
    
    # take 200 samples from scandinavia_data
    for (i in 1:500){
      samp <- sample(scandinavia_data, 200)
      sample_means[i] <- mean(samp)
    }
    
    # calculate the population mean, that is, the mean of scandinavia_data and print it
    mean(scandinavia_data)
    
    # calculate the mean of the sample means, that is, sample_means
    mean(sample_means)
    ```

    ```R
    > # set the seed such that you will get the same sample as in the solution code
    > set.seed(11225)
    > 
    > # empty vector sample means
    > sample_means <- NULL
    > 
    > # take 200 samples from scandinavia_data
    > for (i in 1:500){
        samp <- sample(scandinavia_data, 200)
        sample_means[i] <- mean(samp)
      }
    > 
    > # calculate the population mean, that is, the mean of scandinavia_data and print it
    > mean(scandinavia_data)
    [1] 24.97331
    > 
    > # calculate the mean of the sample means, that is, sample_means
    > mean(sample_means)
    [1] 24.9644
    ```

    

## 4.  Standard Deviation of the Sampling Distribution

- ### σ/sqrt(n)

  In the previous weeks you have become familiar with the concept of standard deviation. You may recall that this concept refers to the spread of a distribution. In R you can calculate the standard deviation using the function `sd()`.

  However, the standard deviation of the sampling distribution is called the standard error. The standard error is calculated slightly differently from the standard deviation. The formula for the standard error can be found below:
  $$
  \overline{x} = \frac{\sigma}{\sqrt{n}}
  $$
  

  In this formula, the sigma refers to the standard deviation, while n refers to the sample size of the sample.

  - Instruction

    - Calculate the standard deviation of the population and put it in the variable `population_sd`. Note that the population can be found in the variable `scandinavia_data`. Print `population_sd` to the console.
    - Use `population_sd` to calculate the standard error of a sample of 200 cases and put it in the variable `sampling_sd`. Print `sampling_sd` to the console.

  - **Answer**

    ```R
    # standard deviation of the population
    population_sd<-sd(scandinavia_data)
    population_sd
    # standard deviation of the sampling distribution
    
    sampling_sd<-population_sd/sqrt(200)
    sampling_sd
    ```

    ```R
    > # standard deviation of the population
    > population_sd<-sd(scandinavia_data)
    > population_sd
    [1] 3.466054
    > # standard deviation of the sampling distribution
    > 
    > sampling_sd<-population_sd/sqrt(200)
    > sampling_sd
    [1] 0.245087
    ```



## 5 The Central Limit Theorem

Earlier we touched on the sampling distribution and its mean and standard deviations. Now, we will look at the central limit theorem, one of the most important theorems when it comes to inferential statistics. Briefly this theorem states the following:

"Provided that the sample size is sufficiently large, the sampling distribution of the sample mean is approximately normally distributed even if the variable of interest is not normally distributed in the population"

In this exercise we will take a look at a new population of simulated household income of citizens in the United States. The data is stored in a variable called `household_income`. This population is right skewed. We will take a 1000 samples of n = 200 from this population and calculate the sample mean each time. You will see that the sampling distribution, just as the central limit theorem states, is normally distributed.

- Instructions

  - Make a histogram of the variable `household_income` and see how the population is skewed to the right.
  - Make a histogram of the variable sample_means. Can you see how this variable looks normally distributed?
  - You can press on the button "Previous plot" to check the previous histogram.

- **Answer**

  ```R
  # empty vector sample means
  sample_means <- NULL
  
  # take 200 samples from scandinavia_data
  for (i in 1:1000){
    samp <- sample(household_income, 200)
    sample_means[i] <- mean(samp)
  }
  
  # make a histogram of household_income
  hist(household_income, xlab="INCOME", ylab="N", main="household income")
  # make a histogram of sample_means
  hist(sample_means, xlab="INCOME", ylab="N", main="sample mean")
  ```

  ![](data:image/png;base64,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)

  ![](data:image/png;base64,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)

​    

## 6. Z-SCORE

- ### `pnorm(z-score, lower.tail=TRUE/FALSE)`

  A zscore by itself may not always be easy to interpret. Yes, it does indicate the amount of standard deviations away from the population mean, but this may sound like jibberish to many people. Wouldn't it be great to translate a z score to a probability?

  Z scores can be easily translated to probabilities. There are multiple ways to do so:

  1. Look up the z score in a table
  2. Calculate the probability using R

  In R we can use the `pnorm()` function to calculate the probability of obtaining a given score or a more extreme score in the population. Basically this calculate an area under the bell curve. The function `pnorm()` has several parameters you can include such as:

  - q: The observation for which you want to calculate the probability
  - mean: The population mean
  - sd: The population standard deviation
  - lower.tail: Indicates whether you want to calculate the area under the curve left of your observations or right of your observations

  Let's look at how to use `pnorm()` and let's play around with the `lower.tail` option.

  - **直接给出z值后，就不用再输入mean和sd了。**

  - Instruction

    - Recall that the z score for the scandinavian hipster in the previous exercise was 2.02. Calculate the area left of this observation by specifying `lower.tail = TRUE` in pnorm and print this probability.
    - Now calculate the area under the curve right of this observation by specifying `lower.tail = FALSE` and print this probability.
    - You can use `pnorm()` the following way: `pnorm(2.02, lower.tail = TRUE)`

  - **Answer**

    ```R
    # calculate the area under the curve left of the observation
    pnorm(2.02,lower.tail= TRUE)
    # calculate the area under the curve right of the observation
    pnorm(2.02,lower.tail= FALSE)
    ```

    ```R
    > # calculate the area under the curve left of the observation
    > pnorm(2.02,lower.tail= TRUE)
    [1] 0.9783083
    > # calculate the area under the curve right of the observation
    > pnorm(2.02,lower.tail= FALSE)
    [1] 0.02169169
    ```



## 7. Sample Distribution of Sampling Distribution

So far we have calculated the probabilities of observations using mean and standard deviation values from the population. However, we can also calculate these observation probabilities using mean and standard deviation values from the sample. For instance, we could have a question along the lines of what is the probability that the sample mean of the beard length of 50 Scandinavian hipsters is larger or equal to 26 millimeters. Because in this example we are talking about a specific sample from the population, we make use of the sampling distribution and not the population distribution.

Because we make use of the sampling distribution, we are now using the standard deviation of the sampling distribution which is calculated using the formula σ/sqrt(n).

- Instruction

  Calculate the probability that a sample mean of the beard length of 50 Scandinavian hipsters is larger or equal to 26 millimeters. Recall that the population is contained in the variable `scandinavia_data`. Take all the steps indicated by comments in the editor.

- **Answer**

  ```R
  # calculate the population mean
  population_mean <- mean(scandinavia_data)
  
  # calculate the population standard deviation
  population_sd <- sd(scandinavia_data)
  
  # calculate the standard deviation of the sampling distribution and put it in a variable sampling_sd
  sampling_sd<- population_sd/sqrt(50)
  sampling_sd
  # calculate the Z score and put in a variable called z_score
  z_score<- (26-population_mean)/sampling_sd
  z_score
  # cumulative probability calculation. Don't forget to set lower.tail to FALSE
  pnorm(z_score, lower.tail=FALSE)
  ```

  ```R
  > # calculate the population mean
  > population_mean <- mean(scandinavia_data)
  > 
  > # calculate the population standard deviation
  > population_sd <- sd(scandinavia_data)
  > 
  > # calculate the standard deviation of the sampling distribution and put it in a variable sampling_sd
  > sampling_sd<- population_sd/sqrt(50)
  > sampling_sd
  [1] 0.4901741
  > # calculate the Z score and put in a variable called z_score
  > z_score<- (26-population_mean)/sampling_sd
  > z_score
  [1] 2.094534
  > # cumulative probability calculation. Don't forget to set lower.tail to FALSE
  > pnorm(z_score, lower.tail=FALSE)
  [1] 0.01810623
  ```



## 8. Sample Distribution of Binominal Distribution

So let's continue working with proportions. Imagine we took a random sample of 200 people from London's general population, and a proportion of 0.13 of these people were hipsters. We however know that in the population of London, the proportion of hipsters is 0.10. What is the probability of finding a sample of 200 with a proportion of 0.13 or more hipsters?

Let's break this problem into steps. Firstly we can calculate the standard deviation of the sampling distribution. The second step is using a function that may look familiar: `pnorm()`. Although we do not have a mean, we can use our sampling and population proportions. Our sampling proportion will constitute the q argument here, while our population proportion will constitute the mean argument. Now let's get going, what is the probability of finding a sample of 200 with a proportion of 0.13 or more hipsters?

- Instruction
  - Calculate the probability of finding a sample of 200 with a proportion of 0.13 or more hipsters using the `pnorm()` function.

- **Answer**

  ```R
  # calculate the standard deviation of the sampling distribution and put in a variable called sample_sd
  sample_sd = sqrt(0.1*0.9/200)
  
  # calculate the probability
  pnorm(0.13, mean=0.1, sd= sample_sd, lower.tail=FALSE)
  ```

  ```R
  > # calculate the standard deviation of the sampling distribution and put in a variable called sample_sd
  > sample_sd = sqrt(0.1*0.9/200)
  > 
  > # calculate the probability
  > pnorm(0.13, mean=0.1, sd= sample_sd, lower.tail=FALSE)
  [1] 0.0786496
  ```

  