---

title: Basic Statistics - (02) R[1]
key: 202004111

tags: Statistics; R; Bar graph; Histogram; Mode,median&mean; Range; Quartiles; Standard deviation; z-score;

layout: article

---

# Basic Statistics - (02) R[1]

<!--more-->

## 1.  Bar Graph

- ### Making A Bar Graph

  We easily can make graphs to visualize our data. Let's visualize the number of manual and automatic transmissions in our car sample through a bar graph, using the function `barplot()`. The first argument of `barplot()` is a vector containing the heights of each bar. These heights correspond to the proportional frequencies of a desired measure in your data. You can obtain this information using the `table()` function.

  We are going to make a bar graph of the `am` (transmission) variable of the `mtcars` dataset. In this case, the height of the bars can be the frequency of manual and automatic transmission cars. Therefore, here we are going to use `table()` and `barplot()` to make this plot.

  Remember, you can select a specific variable using either `$` or `[,]`. If you need to look at your data you can simply enter `mtcars` into your console, or if you just want to check the variables you can always enter `str(mtcars)` in your console.

  - Instructions

    - In your script, create an object called `height` using the frequencies of the `am` variable of the `mtcars` dataset
    - Use this variable and the `barplot()` function to create a bar plot of transmission types in our car sample

  - **Answer**

    ```R
    #Assign the frequency of the mtcars variable "am" to a variable called "height"
    str(mtcars)
    height <- table(mtcars$am)
    #Create a barplot of "height"
    barplot(height)
    ```

    ```R
    > #Assign the frequency of the mtcars variable "am" to a variable called "height"
    > str(mtcars)
    'data.frame':	32 obs. of  11 variables:
     $ mpg : num  21 21 22.8 21.4 18.7 18.1 14.3 24.4 22.8 19.2 ...
     $ cyl : num  6 6 4 6 8 6 8 4 4 6 ...
     $ disp: num  160 160 108 258 360 ...
     $ hp  : num  110 110 93 110 175 105 245 62 95 123 ...
     $ drat: num  3.9 3.9 3.85 3.08 3.15 2.76 3.21 3.69 3.92 3.92 ...
     $ wt  : num  2.62 2.88 2.32 3.21 3.44 ...
     $ qsec: num  16.5 17 18.6 19.4 17 ...
     $ vs  : num  0 0 1 1 0 1 0 1 1 1 ...
     $ am  : Factor w/ 2 levels "0","1": 2 2 2 1 1 1 1 1 1 1 ...
     $ gear: num  4 4 4 3 3 3 3 4 4 4 ...
     $ carb: num  4 4 1 1 2 1 4 2 2 4 ...
    > height <- table(mtcars$am)
    > #Create a barplot of "height"
    > barplot(height)
    ```

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/R/01%20barplot.png)

  

- ### Labelling A Bar Graph

  Now we're going to add some labels to the bar graph, still using `barplot()`. The first argument of `barplot()` was a vector of the bar heights. Following this, we can add arguments to format the graph as necessary. For instance, `barplot(height, argument1, argument2)`. Here we are going to add a label to the y axis using the argument `ylab = "name here"`, and x axis labels to the bars using the argument `names.arg = "vector of names here"`.

  - Instruction

    - Make a vector of the names of the bars using the `c()` command. Assign this to the variable `barnames`. Remember that the first bar is `automatic` and the second is `manual`.
    - Add the `ylab =` and `names.arg =` commands to your `barplot(height)` code
    - Label the y axis "number of cars" and use `barnames` to label the bars.
    - Remeber that arguments in a function are separated with a comma (e.g. function(argument1, argument2, argument3))

  - **Answer**

    ```R
    # vector of bar heights
    height <- table(mtcars$am)
    # Make a vector of the names of the bars called "barnames"
    barnames <- c("automatic","manual")
    # Label the y axis "number of cars" and label the bars using barnames
    barplot(height, ylab = "number of cars", names.arg = barnames)
    ```

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/R/02%20barplot%20with%20labels.png)

    

## 2. Histograms

- ### Making A Histogram

  It can be useful to plot frequencies as histograms to visualize the spread of our data.

  Let's make a histogram of the number of carburetors in our `mtcars` dataset using the function `hist()`. The first argument of `hist()` is vector of values for which the histogram is desired. Following this, we can add arguments to format the graph as necessary. For instance, `hist(variable, argument1, argument2)`

  - Instruction

    - In your script, write a code to produce a histogram of the number of carburetors in each car using the variable `carb` of the data set `mtcars`.
    - Make the title of this histogram "Carburetors" by adding the argument `main = "title*"` inside your `hist()` function.
    - Remember, you can select a specific variable using either `$` or `[,]`. If you need to look at your data you can simply enter `mtcars` into your console, or if you just want to check the variables you can always enter `str(mtcars)` in your console.

  - **Answer**

    ```R
    # Make a histogram of the carb variable from the mtcars data set. Set the title to "Carburetors"
    hist(mtcars$carb, main = "Carburetors")
    ```

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/R/03%20Histogram.png)

- ### Formatting Your Histogram

  Sometimes we have to change things because R's default setting isn't suitable for our graph. In the same way as we added a title argument to `hist()`, we can change the scale of the y-axis through adding the argument `ylim` followed by the range we want (e.g. for a scale from 0 to 50, we would say `ylim = c(0,50)`). We can also label the x-axis using the argument `xlab = "title"`, or change the colour of the bars to blue with the argument `col = "blue"`.

  - Instruction

    - Change the y axis scale from 0 to 20
    - Make the bars "red"
    - Label the x-axis "Number of Carburetors"
    - Remember that you should separate each argument with a comma

  - **Answer**

    ```R
    # arguments to change the y-axis scale to 0 - 20, label the x-axis and colour the bars red
    hist(mtcars$carb, ylim = c(0,20), xlab = "Number of Cuarburetors", col = "red", main = "Carburetors")
    ```

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/R/04%20histogram%20with%20labels.png)

## 3. Mean and Median

- ### `mean()`&`median()`

  We can measure the mean and median of a variable using the functions `mean()` and `median()`, using the variable in question as the first argument between brackets. Let's try it out!

  - Instruction

    - In the editor calculate the mean and median miles per gallon (`mpg`) of the `mtcars` data set
    - Remember, you can select a specific variable using either `$` or `[,]`. If you need to look at your data you can simply enter `mtcars` into your console, or if you just want to check the variables you can always enter `str(mtcars)` in your console.

  - **Answer**

    ```R
    str(mtcars)
    # Calculate the mean miles per gallon
    mean(mtcars$mpg)
    # Calculate the median miles per gallon
    median(mtcars$mpg)
    ```

    ```R
    > str(mtcars)
    'data.frame':	32 obs. of  11 variables:
     $ mpg : num  21 21 22.8 21.4 18.7 18.1 14.3 24.4 22.8 19.2 ...
     $ cyl : num  6 6 4 6 8 6 8 4 4 6 ...
     $ disp: num  160 160 108 258 360 ...
     $ hp  : num  110 110 93 110 175 105 245 62 95 123 ...
     $ drat: num  3.9 3.9 3.85 3.08 3.15 2.76 3.21 3.69 3.92 3.92 ...
     $ wt  : num  2.62 2.88 2.32 3.21 3.44 ...
     $ qsec: num  16.5 17 18.6 19.4 17 ...
     $ vs  : num  0 0 1 1 0 1 0 1 1 1 ...
     $ am  : Factor w/ 2 levels "0","1": 2 2 2 1 1 1 1 1 1 1 ...
     $ gear: num  4 4 4 3 3 3 3 4 4 4 ...
     $ carb: num  4 4 1 1 2 1 4 2 2 4 ...
    > # Calculate the mean miles per gallon
    > mean(mtcars$mpg)
    [1] 20.09062
    > # Calculate the median miles per gallon
    > median(mtcars$mpg)
    [1] 19.2
    ```

## 4. Mode

- ### `sort()`

  Sometimes it is useful to look at the the most frequent value in a data set, known as the 'mode'. R doesn't have a standard function for mode, but we can calculate the mode easily using the `table()` function, which you might be familiar with now.

  When you have a large data set, the output of `table()` might be too long to manually identify which value is the mode. In this case it can be useful to use the `sort()` function, which arranges a vector or factor into ascending order. (You can add the argument `decreasing = TRUE` to `sort()` if you want to arrange it in to descending order.)

  Lets use `sort()` and `table()` to find the mode of the `carb` variable of `mtcars`.

  - Instruction

    - Produce a frequency table of `carb` from `mtcars` in descending order of frequency
    - Remember that you should separate arguments with a comma

  - **Answer**

    ```R
    # Produce a sorted frequency table of `carb` from `mtcars`
    table(mtcars$carb)
    sort(table(mtcars$carb), decreasing = TRUE)
    ```

    ```R
    > # Produce a sorted frequency table of `carb` from `mtcars`
    > table(mtcars$carb)
    
     1  2  3  4  6  8 
     7 10  3 10  1  1
    > sort(table(mtcars$carb), decreasing = TRUE)
    
     2  4  1  3  6  8 
    10 10  7  3  1  1
    ```

## 5. Range

- ### `max()&min()`

  The range of a variable is the difference between the highest and lowest value. We can find these values using `max()` and `min()` on the variables of our choice. The value returned tells us which row (or case) contains the requested value. We can then index this case to find the desired values. Remember, you can index using `[]`.

  - Instructions

    - In your script, assign the minimum value of `mtcars$mpg` to `x`
    - In your script, assign the maximum value of `mtcars$mpg` to `y`
    - In your script, use the values of x and y to calculate the range of miles per gallon.

  - **Answer**

    ```R
    # Minimum value
    x <- min(mtcars$mpg)
    # Maximum value
    y <- max(mtcars$mpg)
    # Calculate the range of mpg using x and y
    y
    x
    y - x
    ```

    ```R
    > # Minimum value
    > x <- min(mtcars$mpg)
    > # Maximum value
    > y <- max(mtcars$mpg)
    > # Calculate the range of mpg using x and y
    > y
    [1] 33.9
    > x
    [1] 10.4
    > y - x
    [1] 23.5
    ```



## 6. Quartiles

- ### `quartile()`

  You can calculate the quartiles in your data set using the function `quantile()`. The output of `quantile()` gives you the lowest value, first quartile, second quartile, third quartile and highest value. 25% of your data lies below the first quartile value, 50% lies below the second quartile, and 75% lies below the third quartile value. Let's see for ourselves!

  - Instruction

    - In your console, calculate the quartiles of the variable `qsec` from `mtcars` using the `quantile()` function.
    - From the output, answer the questions in your script.

  - **Answer**

    ```R
    quantile(range(0,10))
    quantile(mtcars$qsec)
    ```

    ```R
    > quantile(range(0,10))
      0%  25%  50%  75% 100% 
     0.0  2.5  5.0  7.5 10.0
    > quantile(mtcars$qsec)
         0%     25%     50%     75%    100% 
    14.5000 16.8925 17.7100 18.9000 22.9000
    ```

- ### `boxplot()`&`IQR()`

  To better visualise your data's quartiles you can create a boxplot using the function `boxplot()` (in the same way as you used `hist()` and `barplot()`). Similarly, you can calculate the interquartile range manually by subtracting the value of the third quartile from the value of the first quartile, or we can use the function `IQR()` on your variable of interest. Let's try out making a boxplot and calculating the interquartile range of the `mtcars` variable `qsec`.

  - Instruction

    - Use the `boxplot()` function on the variable `qsec` of `mtcars`
    - Calculate the interquartile range of `qsec` from `mtcars` using `IQR()`

  - **Answers**

    ```R
    # Make a boxplot of qsec
    boxplot(mtcars$qsec)
    # Calculate the interquartile range of qsec
    IQR(mtcars$qsec)
    ```

    ![boxplot](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/R/05%20boxplot.png)

    ```R
    > # Make a boxplot of qsec
    > boxplot(mtcars$qsec)
    > # Calculate the interquartile range of qsec
    > IQR(mtcars$qsec)
    [1] 2.0075
    ```

- ### IQR outliers

  In the boxplot you created you can see a circle above the boxplot. This indicates an outlier. We can calculate an outlier as a value `1.5 * IQR` above the third quartile, or `1.5 * IQR` below the first quartile. Let's try it out with the `qsec` variable from `mtcars`.

  - Instructions

    - In your console, find the value of the interquartile range of the `qsec` variable of `mtcars` using `IQR()`.
    - In your console, find the values of the first and third quartiles of the `qsec` variable of `mtcars` using `quantile()`
    - In your console, calculate the upper threshold value for an outlier. Report this value in your script.

  - **Answer**

    ```R
    iqr <--IQR(mtcars$qsec)
    quartile<--quantile(mtcars$qsec)
    iqr
    quartile
    quartile[2]
    quartile[3]
    # What is the threshold value for an outlier below the first quartile?
    quartile[2]-1.5*iqr
    # What is the threshold value for an outlier above the third quartile?
    quartile[4]+1.5*iqr
    
    ```

    ```R
    > iqr <--IQR(mtcars$qsec)
    > quartile<--quantile(mtcars$qsec)
    > iqr
    [1] -2.0075
    > quartile
          0%      25%      50%      75%     100% 
    -14.5000 -16.8925 -17.7100 -18.9000 -22.9000
    > quartile[2]
         25% 
    -16.8925
    > quartile[3]
       50% 
    -17.71
    > # What is the threshold value for an outlier below the first quartile?
    > quartile[2]-1.5*iqr
          25% 
    -13.88125
    > # What is the threshold value for an outlier above the third quartile?
    > quartile[4]+1.5*iqr
          75% 
    -21.91125
    ```

    

## 7. Standard Deviation

- ### `sd()`

  We can also measure the spread of data through the standard deviation. You can calculate these using the function `sd()`, which takes a vector of the variable in question as its first argument. Let's try it out!

  - Instruction

    - In your script, find the standard deviation and interquartile ranges of horsepower (`hp`) and miles per gallon (`mpg`)
    - Submit, and take a look at the values

  - **Answer**

    ```r
    # Find the IQR of horsepower
    IQR(mtcars$hp)
    # Find the standard deviation of horsepower
    sd(mtcars$hp)
    # Find the IQR of miles per gallon
    IQR(mtcars$mpg)
    # Find the standard deviation of miles per gallon
    sd(mtcars$mpg)
    ```

    ```R
    > # Find the IQR of horsepower
    > IQR(mtcars$hp)
    [1] 83.5
    > # Find the standard deviation of horsepower
    > sd(mtcars$hp)
    [1] 68.56287
    > # Find the IQR of miles per gallon
    > IQR(mtcars$mpg)
    [1] 7.375
    > # Find the standard deviation of miles per gallon
    > sd(mtcars$mpg)
    [1] 6.026948
    ```



## 8. Z-score

We can calculate the z-score for a given value (X) as **(X - mean) / standard deviation**. In R you can do this with a whole variable at once by putting the variable name in the place of X. Let's try this!

- Instruction

  - In your script, calculate the z-score of the `mpg` variable of the `mtcars` data set
  - Remember to put brackets around (X - mean)/standard deviation

- **Answer**

  ```R
  # Calculate the z-scores of mpg
  sd<-sd(mtcars$mpg)
  mean <-mean(mtcars$mpg)
  zscore <- (mtcars$mpg - mean)/sd
  zscore
  str(zscore)
  ```

  ```R
  > # Calculate the z-scores of mpg
  > sd<-sd(mtcars$mpg)
  > mean <-mean(mtcars$mpg)
  > zscore <- (mtcars$mpg - mean)/sd
  > zscore
   [1]  0.15088482  0.15088482  0.44954345  0.21725341 -0.23073453 -0.33028740
   [7] -0.96078893  0.71501778  0.44954345 -0.14777380 -0.38006384 -0.61235388
  [13] -0.46302456 -0.81145962 -1.60788262 -1.60788262 -0.89442035  2.04238943
  [19]  1.71054652  2.29127162  0.23384555 -0.76168319 -0.81145962 -1.12671039
  [25] -0.14777380  1.19619000  0.98049211  1.71054652 -0.71190675 -0.06481307
  [31] -0.84464392  0.21725341
  > str(zscore)
   num [1:32] 0.151 0.151 0.45 0.217 -0.231 ...
  ```

  

