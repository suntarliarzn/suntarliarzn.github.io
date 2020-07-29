---

title: Basic Statistics - (11) R[5] Confidence Interval

tags: Statistics; confidence interval; standard deviation; z table; t distribtuition; proportion; 

layout: article

mathjax: true

mathjax_autoNumber: true

---

# Basic Statistics - (11) R[5] Confidence Interval

<!--more-->

## 1.  Confidence Interval With Known SD

In the last question we demonstrated how 95% of a population fall between 1.96 standard deviations above and below the population mean.
Let's pretend we have psychic knowledge that the standard deviation of sadness in the world is 8, but we need to find out what the mean is. We take a sample of 300 people. Let's estimate where the population mean is likely to lie using this sample.

If you remember, the formula for calculating the confidence interval is the sample mean +/- 1.96 * standard deviation. In this case, the standard deviation is the population standard deviation, divided by the square root of the sample size.

- Instruction

  - The saddness level of each participant in your sample is saved in your console as `samp`
  - Complete the steps in your script to calculate the confidence interval for `samp`
  - Remember to format your calculations correctly and use `()` where appropriate

- **Answer**

  ```R
  # Assign the sample mean to object "m"
  m <- mean(samp)
  
  # Assign the standard deviation of sample to object "s"
  s <- 8 / sqrt(300)
  
  ```




## 2. Confidence Interval Without The Population Standard Deviation

Unfortunately in reality we usually don't know a population standard deviation, and thus must rely on sample standard deviations and T-scores. T-scores come from T-distributions, which help us account for error that occurs when we sample from a population. We use a different T-distribution to calculate cumulative probabilites depending on our degrees of freedom.

Lets say we conducted another study on how often people get angry when they're driving (known as 'road rage') using a sample of 200 people chosen at random, saved in your console as `rrage`. Let's calculate the 95% confidence interval for where the population mean lies.

This time we must use a slightly different formula: sample mean +/- t value * standard error. The standard error is calculated as the population standard deviation, divided by the square root of the sample size. The T-score for a df of 199 is 1.9720.

- Instruction

  - The road rage level of each participant in your sample is saved in your console as `rrage`
  - Complete the steps in your script to calculate the confidence interval for `rrage`
  - Remember to format your calculations correctly and use `()` where appropriate

- **Answer**

  ```R
  # Assign the sample mean to object "m"
  m<-mean(rrage)
  
  # Assign the sample standard error to object "s"
  s<- sd(rrage)/sqrt(200)
  
  # Calculate the upper 95% confidence interval
  m+1.9720*s
  
  # Calculate the lower 95% confidence interval
  m-1.9720*s
  ```

  ```R
  > # Assign the sample mean to object "m"
  > m<-mean(rrage)
  > 
  > # Assign the sample standard error to object "s"
  > s<- sd(rrage)/sqrt(200)
  > 
  > # Calculate the upper 95% confidence interval
  > m+1.9720*s
  [1] 52.60419
  > 
  > # Calculate the lower 95% confidence interval
  > m-1.9720*s
  [1] 48.72093
  ```

  

## 3 Calculating A Confidence Interval for a Proportion I

Instead of measuring road rage as a continuous variable, you ask a sample to simply answer "yes" or "no" to the question "do you have road rage?". The outcome is saved in your console as `roadrage`. Let's find what proportion of your sample do have road rage.

- Instruction

  - In your console, check the frequency of "yes" (indicating the presence have road rage) and "no" (indicating no road rage)
  - Using your script, calculate use this information to calculate what proportion of your sample have road rage and assign this to the object `p`

- **Answer**

  ```R
  # Make p the proportion of the sample with road rage 
  mytable<-table(roadrage)
  mytable
  propmytable<-prop.table(mytable)
  propmytable
  p<-propmytable[2]
  ```

  ```R
  > # Make p the proportion of the sample with road rage
  > mytable<-table(roadrage)
  > mytable
  roadrage
   no yes 
  130  70
  > propmytable<-prop.table(mytable)
  > propmytable
  roadrage
    no  yes 
  0.65 0.35
  > p<-propmytable[2]
  ```

  - `table()`用于统计数据，制成表格。
  - `prop.table()`用于计算表格中数据。