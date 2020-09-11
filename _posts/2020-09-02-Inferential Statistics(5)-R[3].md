---

title: Inferential Statistics(5)-R[3]
key: 20200828

tags: Statistics; R; contingency table; Chi-square; chisq.test(); cramer's v; residuals; fisher's exact test；fisher.test();

layout: article

---

# Inferential Statistics(5)-R[3]

<!--more-->

## 1.  How to construct a contingency table

```R
#matrix添加数据矩阵。
data<-c(421,278,398,367,244,198)
party<-matrix(data,ncol=3)
```


```R
party
```


<table>
<tbody>
	<tr><td>421</td><td>398</td><td>244</td></tr>
	<tr><td>278</td><td>367</td><td>198</td></tr>
</tbody>
</table>


```R
#添加列名称。
rownames(party)<-c("female","male")
```


```R
party
```


<table>
<tbody>
	<tr><th scope=row>female</th><td>421</td><td>398</td><td>244</td></tr>
	<tr><th scope=row>male</th><td>278</td><td>367</td><td>198</td></tr>
</tbody>
</table>




```R
#添加行名称
colnames(party)<-c("democrat","independent","republican")
```


```R
party
```


<table>
<thead><tr><th></th><th scope=col>democrat</th><th scope=col>independent</th><th scope=col>republican</th></tr></thead>
<tbody>
	<tr><th scope=row>female</th><td>421</td><td>398</td><td>244</td></tr>
	<tr><th scope=row>male</th><td>278</td><td>367</td><td>198</td></tr>
</tbody>
</table>




```R
#rowSums()添加合计栏
total <- rowSums(party)
```


```R
total

```


<dl class=dl-horizontal>
	<dt>female</dt>
		<dd>1063</dd>
	<dt>male</dt>
		<dd>843</dd>
</dl>


```R
#cbind/rbind添加新的行和列
party <- cbind(party, total)
```


```R
party
```


<table>
<thead><tr><th></th><th scope=col>democrat</th><th scope=col>independent</th><th scope=col>republican</th><th scope=col>total</th></tr></thead>
<tbody>
	<tr><th scope=row>female</th><td>421 </td><td>398 </td><td>244 </td><td>1063</td></tr>
	<tr><th scope=row>male</th><td>278 </td><td>367 </td><td>198 </td><td> 843</td></tr>
</tbody>
</table>


```R
prop_table<-round(prop.table(party[,c(1,2,3)],1),3)
prop_table
```


<table>
<thead><tr><th></th><th scope=col>democrat</th><th scope=col>independent</th><th scope=col>republican</th></tr></thead>
<tbody>
	<tr><th scope=row>female</th><td>0.396</td><td>0.374</td><td>0.230</td></tr>
	<tr><th scope=row>male</th><td>0.330</td><td>0.435</td><td>0.235</td></tr>
</tbody>
</table>




```R
round(prop.table(party[,c(1,2,3)],2),3)
```


<table>
<thead><tr><th></th><th scope=col>democrat</th><th scope=col>independent</th><th scope=col>republican</th></tr></thead>
<tbody>
	<tr><th scope=row>female</th><td>0.602</td><td>0.52 </td><td>0.552</td></tr>
	<tr><th scope=row>male</th><td>0.398</td><td>0.48 </td><td>0.448</td></tr>
</tbody>
</table>


```R
round(prop.table(party[,c(1,2,3)]),3)
```


<table>
<thead><tr><th></th><th scope=col>democrat</th><th scope=col>independent</th><th scope=col>republican</th></tr></thead>
<tbody>
	<tr><th scope=row>female</th><td>0.221</td><td>0.209</td><td>0.128</td></tr>
	<tr><th scope=row>male</th><td>0.146</td><td>0.193</td><td>0.104</td></tr>
</tbody>
</table>


```R
#t函数将表格行列互换！
reverse_t<-t(prop_table)
reverse_t
```


<table>
<thead><tr><th></th><th scope=col>female</th><th scope=col>male</th></tr></thead>
<tbody>
	<tr><th scope=row>democrat</th><td>0.396</td><td>0.330</td></tr>
	<tr><th scope=row>independent</th><td>0.374</td><td>0.435</td></tr>
	<tr><th scope=row>republican</th><td>0.230</td><td>0.235</td></tr>
</tbody>
</table>


```R
barplot(reverse_t)
```


![png](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/04%20Inferential%20statistics/week%202%20Categorical%20association/output_14_0.png)



## 2. Contingency Table I

An advertising company is trying out some different ads on different groups, and testing which of the ads the groups prefer.

One ad features a child, one features a college party and one features an office workplace. They show these ads to some students, some parents and some business people, who in turn report which ad they preferred.

The dataframe containing the outcome of your research is saved in your console as `data`. The rows represent the person groups, the columns represent the type of ad, and the values represent how many individuals from a given group preferred the given ad.

- **Instructions**

  - In your *console*, enter `data` and examine the contingency table.
  - In your *console* (or elsewhere if you prefer), calculate the total number of individuals in the sample.
  - In your *script*, report the total number of individuals in the sample as a numerical value.

- **Answers**

  ```R
  # How large is your sample?
  data
  frame<-data.frame(data)
  frame
  rowtotal<-rowSums(data)
  sum(rowtotal)
  ```

  ```r
  > # How large is your sample?
  > data
            Party Child Office
  Student      12     5      6
  Parent        7    15      7
  Corporate     5     5     14
  > frame<-data.frame(data)
  > frame
            Party Child Office
  Student      12     5      6
  Parent        7    15      7
  Corporate     5     5     14
  > rowtotal<-rowSums(data)
  > sum(rowtotal)
  [1] 76
  ```



## 3. Conditional Proportions

The data for your advertising experiment is still saved in your console as `data`. If you enter `rowSums(data)` into your console you can see that we had different numbers of people in each category. In order to compare the categories, we need to standardise the values accross rows. We can do this by finding the conditional proportions for each row. We obtain the conditional proportions per row by dividing the value in each cell by the row total.

We can index a row from our data using `[,]`. For example, `data[1,]` would index the first row (enter it into your console and have a look!). We can find the sum (or total) value in R using the function `sum()`.

So, if we wanted to find the total value of the first row, we would enter `sum(data[1,])`. To *divide* the value of each cell in a row by the total, it's as simple as: `data[1,]/sum(data[1,])` - this basically tells R: "take every value of the first row, and divide it by the total of all values in the first row".

We're going to do this for all three rows and assign it to a new table called `datastand`! We've done the first one for you, so you just have to do the second two.

- **Instructions**

  - In your script, add a line of code to calculate the conditional proportions per row for the second row.
  - In your script, add a line of code to calculate the conditional proportions per row for the third row.
  - In your script, print your new standardised contingency table `datastand`.
  - Remember, to index you use square brackets `[ ]`, whereas for functions and calculations you use circle brackets `()`.

- **Answer**

  ```R
  # Make the new data frame 'datastan' by copying 'data'
  datastand <- data
  # Make the first row of datastan into the old value of 'data', divided by the sum of the row 'data'
  datastand[1,] <- data[1,] / sum(data[1,])
  # Make the second row of datastan into the old value of 'data', divided by the sum of the row 'data'
  datastand[2,] <- data[2,]/sum(data[2,])
  # Make the third row of datastan into the old value of 'data', divided by the sum of the row 'data'
  datastand[3,] <- data[3,]/sum(data[3,])
  # Print your new 'datastand' table
  datastand
  prop.table(data,1)
  ```

  ```R
  > # Make the new data frame 'datastan' by copying 'data'
  > datastand <- data
  > # Make the first row of datastan into the old value of 'data', divided by the sum of the row 'data'
  > datastand[1,] <- data[1,] / sum(data[1,])
  > # Make the second row of datastan into the old value of 'data', divided by the sum of the row 'data'
  > datastand[2,] <- data[2,]/sum(data[2,])
  > # Make the third row of datastan into the old value of 'data', divided by the sum of the row 'data'
  > datastand[3,] <- data[3,]/sum(data[3,])
  > # Print your new 'datastand' table
  > datastand
                Party     Child    Office
  Student   0.5217391 0.2173913 0.2608696
  Parent    0.2413793 0.5172414 0.2413793
  Corporate 0.2083333 0.2083333 0.5833333
  #data不是一个向量，无法进行函数计算。需将数据转换为矩阵数据 matrix<-as.matrix(datastand)
  > prop.table(data,1)
  Error: 'x' is not an array
  ```



## 4. Marginal Probabilities

To check whether person group and ad type are independent, we can find the expected probabilities under the null hypothesis (i.e. what you would expect to see if the variables are indeed independent), and then compare these values to your actual observations.

The data containing the observed frequencies in your advertising experiment is still saved in your console as `data`. To find the observed probabilities for these values, we simply divide each value by the total number of observations. We can do this simply by entering `data/76` into the console.

To find the predicted probabilities for each cell, we need to find the marginal probabilities for each category, and multiply these probabilities together for each cell of our data table.

We can do this manually - but why would we do that when we have R to help us!? We're going to have a go at using a loop that does this for us. A loop works by repeating the same task as many times as you ask it to. In our case we can loop our expected probability calculation, so that it runs through each cell of our contingency table.

Don't worry if it seems a little daunting - the loop is just a tool for doing the calculations quickly. You just need to understand what the loop is doing, not how it works!

- **Instructions**

  - We have already calculated the marginal probabilities and saved them as `margcol` and `margrow`, and made an empty data frame to hold the expected probabilities called `expProb`.
  - Have a look at the loop in your script. It runs three times, each time inserting the expected probabilities into `expProb`.. First i = 1, so positions [1,1], [2,1], and [3,1] in `expProb` should take their expected value based on the marginal probabilites in `margcol` and `margrow`.
  - When i = 2, the second row positions [1,2], [2,2], [3,2] are filled.
  - In your script, write the code for adding the correct expected value for the third row.
  - In your script, add a line of code to print the observed probabilities.

- **Answers**

  ```R
  # Calculate marginal probabilities
  margcol <- colSums(data) / sum(data)
  margrow <- rowSums(data) / sum(data)
  
  # Empty data frame for holding expected probabilities
  expProb <- data.frame()
  
  #Loop to fill in data frame
  for (i in 1:3){
    # Makes row 1 and column i into the expected joint probability based on marginal probability
    expProb[1,i] <- (margcol[i] * margrow[1])
    # Makes row 2 and column i into the expected joint probability based on marginal probability
    expProb[2,i] <- (margcol[i] * margrow[2])
    # Add code to makes row 3 and column i into the expected joint probability based on marginal probability
    expProb[3,i] <- (margcol[i] * margrow[3])
  }
  
  # Print expected probabilities
  expProb
  expProb*76
  # Print observed probabilities
  data/76
  ```

  ```R
  > # Calculate marginal probabilities
  > margcol <- colSums(data) / sum(data)
  > margrow <- rowSums(data) / sum(data)
  > 
  > # Empty data frame for holding expected probabilities
  > expProb <- data.frame()
  > 
  > #Loop to fill in data frame
  > for (i in 1:3){
      # Makes row 1 and column i into the expected joint probability based on marginal probability
      expProb[1,i] <- (margcol[i] * margrow[1])
      # Makes row 2 and column i into the expected joint probability based on marginal probability
      expProb[2,i] <- (margcol[i] * margrow[2])
      # Add code to makes row 3 and column i into the expected joint probability based on marginal probability
      expProb[3,i] <- (margcol[i] * margrow[3])
    }
  > 
  > # Print expected probabilities
  > expProb
            V1         V2        V3
  1 0.09556787 0.09954986 0.1075139
  2 0.12049861 0.12551939 0.1355609
  3 0.09972299 0.10387812 0.1121884
  > expProb*76
          V1       V2        V3
  1 7.263158 7.565789  8.171053
  2 9.157895 9.539474 10.302632
  3 7.578947 7.894737  8.526316
  > # Print observed probabilities
  > data/76
                 Party      Child     Office
  Student   0.15789474 0.06578947 0.07894737
  Parent    0.09210526 0.19736842 0.09210526
  Corporate 0.06578947 0.06578947 0.18421053
  ```

## 5. Expected Frequencies

We can also check for independence or dependence in the data using frequencies, rather than probabilities. In our Chi-square analysis we compare the observed values, to expected values under the null hypothesis. One way to calculate the expected frequency is
$$
(row marginal frequency * column marginal frequency)/sample size
$$


Here is an example of what we would tell R to find the expected frequency for the top left cell: `(sum(data[1,]) * sum(data[,1]))/sum(data)`. `data[1,]` refers to the *first column* of `data`, and `data[,1]` refers to the *first row* of `data`. So R is saying *"take the sum of the first column, multiplied by sum of the first row, and divide this by the total sample size"*. We can then input this into a new table of expected values!

- **Instructions**

  - Have a look at the loop in your script, it first makes an empty data frame to hold the expected values called `expDat`, then loops three times. First i = 1, so positions [1,1], [1,2], and [1,3] in `exptDat` should take their expected value based on the frequencies from `data`.
  - When i = 2, the second row positions [2,1], [2,2], [2,3] are filled.
  - In your script, write the correct code for adding the correct expected value for the third column.

- **Answers**

  ```R
  # Empty dataframe
  expDat <- data.frame()
  
  # Loop that makes i = 1, then i = 2, then i = 3
  for (i in 1:3){
    # Makes row i and column 1 into the expected value
    expDat[i,1] <- (sum(data[i,]) * sum(data[,1])) / sum(data)
     # Makes row i and column 1 into the expected value
    expDat[i,2] <- (sum(data[i,]) * sum(data[,2])) / sum(data)
    #Add a line that calculates the third column values
    expDat[i,3] <- (sum(data[i,]))*sum(data[,3])/sum(data)
  }
  
  # Print expected values
  expDat
  ```

  ```R
  > # Empty dataframe
  > expDat <- data.frame()
  > 
  > # Loop that makes i = 1, then i = 2, then i = 3
  > for (i in 1:3){
      # Makes row i and column 1 into the expected value
      expDat[i,1] <- (sum(data[i,]) * sum(data[,1])) / sum(data)
       # Makes row i and column 1 into the expected value
      expDat[i,2] <- (sum(data[i,]) * sum(data[,2])) / sum(data)
      #Add a line that calculates the third column values
      expDat[i,3] <- (sum(data[i,]))*sum(data[,3])/sum(data)
    }
  > 
  > # Print expected values
  > expDat
          V1       V2        V3
  1 7.263158 7.565789  8.171053
  2 9.157895 9.539474 10.302632
  3 7.578947 7.894737  8.526316
  ```



## 6. Residuals

Your null hypothesis is that there is no difference in ad preference accross categories of people. If this is the case then your values will be relatively even accross groups.

We now have a table with your expected values - called `exptDat`. These values represent what your data would look like under the null hypothesis. You also have a table with your observed values - called `data`. These values are what *actually* happened. Let's have a look at the difference between these values - known as the residuals.

While in real life you might have to calculate each value individually, in R you can do it in one line. Let's say you have `table1` containing observed values and `table2` containing expected values. To get the residuals, you would simply type `residuals <- table1 - table2` and R would calculate the residuals for every cell at once, and assign it to a new object called "residuals" - cool, right?

- **Instructions**

  - Your observed values are saved in your console as `data`, and your expected values are saved as `expDat`.
  - Use `expDat` and `data` to calculate a table of residuals.
  - Assign your table of residuals to object `resid`.
  - Print `resid` and examine the output.

- **Answers**

  ```R
  # Make a new object called "resid" containing your residuals
  resid<-data-expDat
  # Print resid
  resid
  ```

  ```r
  > # Make a new object called "resid" containing your residuals
  > resid<-data-expDat
  > # Print resid
  > resid
                Party     Child    Office
  Student    4.736842 -2.565789 -2.171053
  Parent    -2.157895  5.460526 -3.302632
  Corporate -2.578947 -2.894737  5.473684
  ```

## 7. Chi-Square I

So now you have your expected values saved as `expDat`, observed values saved as `data` and your residuals (i.e. the difference between your expected and observed values) saved as `resid`. These are more than enough ingredients to calculate your Chi square value!

If you remember, the formula for Chi-square is:
$$
\sum\frac{(observed_i- expected_i)^2}{expected_i}
$$
If we did this by hand, you would have to do a calculation for each cell of your table, and then sum it. Luckily for us, we can do it all in one go with R!

To square the expected value minus the observed value, and divide by the expected value, you can simply square the **whole table** of residuals and divide this by the table of observed values. If you do this inside the `sum()` function, it will sum these values, resulting in the Chi-square value. To use `sum()` you simply put your values between brackets. For instance `sum(data)` would add up all the values in `data` and give you 64!

- **Instructions**
  - Calculate the Chi-square value for `data`.
  - Remember, you can square a value using `^2` - for instance, `3^2` would return `9`.

- **Answers**

  ```R
  # Calculate the Chi-square value for your data
  chi<- sum(resid^2/expDat)
  chi
  ```

  ```R
  > # Calculate the Chi-square value for your data
  > chi<- sum(resid^2/expDat)
  > chi
  [1] 14.68201
  ```



## 8. Degrees of Freedom

So you've already calculated your Chi-square value, now we need to find out how many degrees of freedom our data has. You can calculate this as **df=(number of rows−1)∗(number of columns−1)**.



## 9. Chi-square 

So you've managed to calculate your Chi-square value manually, but actually there was a really easy way to do it in R. The function `chisq.test()` takes your observed data as its first argument. 

###  `chisq.test(*insert data name here*)`. 

- **Instructions**

  - In your script, calculate the Chi-square value for the dataframe `data` (saved in your console) using the function `chisq.test()`.

- **Answers**

  ```R
  > # Calculate the chi-square value of 'data' using chisq.test()
  > data
            Party Child Office
  Student      12     5      6
  Parent        7    15      7
  Corporate     5     5     14
  > chisq.test(data)
  
  	Pearson's Chi-squared test
  
  data:  data
  X-squared = 14.682, df = 4, p-value = 0.005408
  ```

## 10. Cramér’s V

Now we have a Chi-square value (and a p-value) for our advertising investigation. These tell us that there is an association between the type of person, and their ad preference.

We can find out the strength of the association by calculating Cramér’s V. The formula for Cramér’s V is 
$$
\sqrt \frac{\chi^2}{n * m}
$$
where **n** is the number of observations and **m** is the number of rows OR number of columns - 1, where rows or columns are selected based on which is smaller. Let's find Cramér’s V for our data.

Our contingency table is saved as `data`. You can find the square root in R using the function `sqrt()`, for example `sqrt(9)` would return `3`. Your Chi-square value is 14.682.

A quick way to find the total number of observations is to simply enter `sum(data)` into your console.

- **Instructions**

  - In your script, assign the value of m to `m`. You can check your table by entering `data` into your console.
  - In your console, find the number of observations and number of rows/columns in `data`.
  - In your script, use `m`, the number of observations and your Chi-square value to calculate Cramér’s V.

- **Answers**

  ```R
  > # Assign the correct value to m
  > data
            Party Child Office
  Student      12     5      6
  Parent        7    15      7
  Corporate     5     5     14
  > m <- 2
  > chisq.test(data)
  
  	Pearson Chi-squared test
  
  data:  data
  X-squared = 14.682, df = 4, p-value = 0.005408
  
  ># Calculate Cramér’s V
  > sum(data)
  [1] 76
  > # sqrt(chisq.test(data)/(sum(data)*m))
  > sqrt(14.682/(76*2))
  [1] 0.3107927
  ```

  

## 11. Standardized Residuals

Our Chi-square test has told us that the categories in our investigation are not independent, and the Cramér’s V value of 0.31 tells us that there is a moderate association (0 means no association, and 1 is perfect). Now let's take a look at the residuals you calculated previously to see where there is the most deviation from the expected values.

To standardise our residuals we need to divide each residual value by its standard error.

It is possible to do this manually, but we can also do this in R very simply. When you assign the output of your `chisq.test()` to an object, this object contains more information than just the Chi-square value, including the standardised residuals! You can access these by indexing using `$`. For example, `your_object$stdres` would print your standardised residuals. Let's try it now!

- **Instructions**

  - Add a line of code to your script to print the standardised residuals from your Chi-square test.
  - Relax and admire your output!

- **Answers**

  ```R
  > # Assign chi square output to object 'model'
  > data
            Party Child Office
  Student      12     5      6
  Parent        7    15      7
  Corporate     5     5     14
  > data$std
  NULL
  > model <- chisq.test(data)
  > # Print standardised residuals
  > model
  
  	Pearson Chi-squared test
  
  data:  data
  X-squared = 14.682, df = 4, p-value = 0.005408
  > model$std
                Party     Child    Office
  Student    2.544487 -1.363592 -1.132685
  Parent    -1.096214  2.744428 -1.629494
  Corporate -1.369141 -1.520432  2.822363
  > model$res
                 Party      Child     Office
  Student    1.7576248 -0.9328115 -0.7595062
  Parent    -0.7130704  1.7679594 -1.0289305
  Corporate -0.9367809 -1.0302444  1.8745586
  ```



## 12. Chi-squared Goodness of Fit

Your null hypothesis is that 60% of college students go to parties regularly, 30% go occaisionally and 10% never go.

We already know you can run a Chi-squared test by hand - you've proven that! Let's use the R function `chisq.test()` this time. The first argument of `chisq.test()` is an object containing your observed data, and then we add your expected data using the argument `p =`. For instance:

**`chisq.test(your_data_here, p = expected_probabilites)`**

- **Instructions**

  - Your observed values are saved in your console as `observed`. The expected probabilities are assigned to object `probs` in your script.
  - In your script, assign the output of the chi-squared goodness of fit test to object `x`.
  - In your script, print `x`.
  - Hit 'Submit' and have a look at the results!

- **Answers**

  ```R
  # expected probabilities
  probs <- c( 6 / 10, 3 / 10, 1 / 10 )
  probs
  observed
  # run the chi-square goodness of fit test, assign to x
   x <- chisq.test(observed, p=probs)
    
  # Print x
  x
  ```

  ```R
  > # expected probabilities
  > probs <- c( 6 / 10, 3 / 10, 1 / 10 )
  > probs
  [1] 0.6 0.3 0.1
  > observed
       regular occaisionally never
  [1,]      52            41     7
  > # run the chi-square goodness of fit test, assign to x
  >  x <- chisq.test(observed, p=probs)
  > 
  > # Print x
  > x
  
  	Chi-squared test for given probabilities
  
  data:  observed
  X-squared = 6, df = 2, p-value = 0.04979
  ```



## 13. Fisher's Exact Test

You had expected that parents would like the ad with a child in it because you thought that people with children like children more.

To investigate this further, you took a sample of 15 adults, asked them whether or not they have children, and whether or not they like children. The results are saved in your console as a 2x2 table named `child`.

Fisher's exact test compares the observed values to a probability distribution. We find this comparison distribution by examining all possible rearrangements of our table. The restrictions are that the marginal frequencies must be the same.

You can perform Fisher's exact test in the same way as you performed the Chi-square test using the function：

### [**`fisher.test()`**](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/fisher.test.html)

- #### Usage

  ```R
  fisher.test(x, y = NULL, workspace = 200000, hybrid = FALSE,
              hybridPars = c(expect = 5, percent = 80, Emin = 1),
              control = list(), or = 1, alternative = "two.sided",
              conf.int = TRUE, conf.level = 0.95,
              simulate.p.value = FALSE, B = 2000)
  ```

- #### Arguments

  | `x`                | either a two-dimensional contingency table in matrix form, or a factor object. |
  | ------------------ | ------------------------------------------------------------ |
  | `y`                | a factor object; ignored if `x` is a matrix.                 |
  | `workspace`        | an integer specifying the size of the workspace used in the network algorithm. In units of 4 bytes. Only used for non-simulated p-values larger than *2 by 2* tables. Since **R** version 3.5.0, this also increases the internal stack size which allows larger problems to be solved, however sometimes needing hours. In such cases, `simulate.p.values=TRUE` may be more reasonable. |
  | `hybrid`           | a logical. Only used for larger than *2 by 2* tables, in which cases it indicates whether the exact probabilities (default) or a hybrid approximation thereof should be computed. |
  | `hybridPars`       | a numeric vector of length 3, by default describing “Cochran's conditions” for the validity of the chisquare approximation, see ‘Details’. |
  | `control`          | a list with named components for low level algorithm control. At present the only one used is `"mult"`, a positive integer *≥ 2* with default 30 used only for larger than *2 by 2* tables. This says how many times as much space should be allocated to paths as to keys: see file ‘fexact.c’ in the sources of this package. |
  | `or`               | the hypothesized odds ratio. Only used in the *2 by 2* case. |
  | `alternative`      | indicates the alternative hypothesis and must be one of `"two.sided"`, `"greater"` or `"less"`. You can specify just the initial letter. Only used in the *2 by 2* case. |
  | `conf.int`         | logical indicating if a confidence interval for the odds ratio in a *2 by 2* table should be computed (and returned). |
  | `conf.level`       | confidence level for the returned confidence interval. Only used in the *2 by 2* case and if `conf.int = TRUE`. |
  | `simulate.p.value` | a logical indicating whether to compute p-values by Monte Carlo simulation, in larger than *2 by 2* tables. |
  | `B`                | an integer specifying the number of replicates used in the Monte Carlo test. |

- #### Value

  A list with class `"htest"` containing the following components:

  | `p.value`     | the p-value of the test.                                     |
  | ------------- | ------------------------------------------------------------ |
  | `conf.int`    | a confidence interval for the odds ratio. Only present in the *2 by 2* case and if argument `conf.int = TRUE`. |
  | `estimate`    | an estimate of the odds ratio. Note that the *conditional* Maximum Likelihood Estimate (MLE) rather than the unconditional MLE (the sample odds ratio) is used. Only present in the *2 by 2* case. |
  | `null.value`  | the odds ratio under the null, `or`. Only present in the *2 by 2* case. |
  | `alternative` | a character string describing the alternative hypothesis.    |
  | `method`      | the character string `"Fisher's Exact Test for Count Data"`. |
  | `data.name`   | a character string giving the names of the data.             |

- **Instructions**

  - In your script, add a line of code to run a Fisher's exact test on `child`.

- **Answers**

  ```R
  # Perform Fisher's exact test on your child data
  child
  fisher.test(child)
  ```

  ```R
  > # Perform Fisher's exact test on your child data
  > child
             like dislike
  children      7      10
  nochildren    1       9
  > fisher.test(child)
  
  	Fisher Exact Test for Count Data
  
  data:  child
  p-value = 0.1895
  alternative hypothesis: true odds ratio is not equal to 1
  95 percent confidence interval:
     0.5699162 314.2697180
  sample estimates:
  odds ratio 
    5.925802
  ```

  