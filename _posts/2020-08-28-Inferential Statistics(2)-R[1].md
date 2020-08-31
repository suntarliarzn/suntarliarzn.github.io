---

title: Inferential Statistics(2)-R[1]
key: 20200828

tags: Statistics; R; Matrix; Factors; Dataframes; List; Function; Mean; Data load; ggplot2;

layout: article

---

# Inferential Statistics(2)-R[1]

<!--more-->

## 1.  Matrices

In R, a matrix is a collection of elements of the same data type (numeric, character, or logical) arranged into a fixed number of rows and columns. Since you are only working with rows and columns, a matrix is called two-dimensional.

You can construct a matrix in R with the matrix() function. Consider the following example: `matrix(1:9, byrow = TRUE, nrow = 3, ncol = 3)`

In the matrix() function:

- The first argument is the collection of elements that R will arrange into the rows and columns of the matrix. Here, we use 1:9 which constructs the vector c(1, 2, 3, 4, 5, 6, 7, 8, 9).

- The argument byrow indicates that the matrix is filled by the rows. This means that the matrix is filled from left to right and when the first row is completed, the filling continues on the second row. If we want the matrix to be filled by the columns, we just place byrow = FALSE.

- The third argument nrow indicates that the matrix should have three rows.

- The fourth argument ncol indicates the number of columns that the matrix should have

- **Instructions**

  - Construct a matrix with 5 rows and 4 columns containing the numbers 1 up to 20 and assign it to the variable `m`. Specify the `byrow` argument to be `TRUE`
  - Print m to the console

- **Answer**

  ```R
  # Construction of a matrix with 5 rows that contain the numbers 1 up to 20 and assign it to m
  m<-matrix(1:20,byrow = TRUE, nrow=5)
  
  # print m to the console
  m
  ```

  ```R
  > # Construction of a matrix with 5 rows that contain the numbers 1 up to 20 and assign it to m
  > m<-matrix(1:20,byrow = TRUE, nrow=5)
  > 
  > # print m to the console
  > m
       [,1] [,2] [,3] [,4]
  [1,]    1    2    3    4
  [2,]    5    6    7    8
  [3,]    9   10   11   12
  [4,]   13   14   15   16
  [5,]   17   18   19   20
  ```

  

## 2. [Factors](https://www.zhihu.com/question/48472404)

因子被用来表示类别数据，因此也被称为“类别变量”。

The term factor refers to a statistical data type used to store categorical variables. The difference between a categorical variable and a continuous variable is that a categorical variable can belong to a limited number of categories. A continuous variable, on the other hand, can correspond to an infinite number of values.

It is important that R knows whether it is dealing with a continuous or a categorical variable, as the statistical models you will develop in the future treat both types differently.

A good example of a categorical variable is the variable `student_status`. An individual can either be "student" or "not student". This means that "student" and "not student" are two values of the categorical variable `student_status` and every observation can be assigned one of these values. We can do this using the `factor` function.

- **Instructions**

  - Turn the vector `student_status` into a factor and put this in a variable called `categorical_student`
  - Print the variable `categorical_student`

- **Answers**

  ```R
  # a vector called student_status
  student_status <- c("student", "not student", "student", "not student")
  
  # turn student_status into a factor and save it in the variable categorical_student
  categorical_student<-factor(student_status)
  
  # print categorical_student to the console
  categorical_student
  ```

  ```R
  > student_status <- c("student", "not student", "student", "not student")
  > 
  > # turn student_status into a factor and save it in the variable categorical_student
  > categorical_student<-factor(student_status)
  > 
  > # print categorical_student to the console
  > categorical_student
  [1] student     not student student     not student
  Levels: not student student
  ```



## 3. Dataframes

You may remember the matrix, a multi-dimensional object that we discussed earlier. All the elements that you put in a matrix should be of the same type. However, when performing a market research survey, you often have questions such as:

- 'Are your married?' or 'yes/no' questions (= boolean data type)
- 'How old are you?' (= numeric data type)
- 'What is your opinion on this product?' or other 'open-ended' questions (= character data type)

The output, namely the respondents' answers to the questions formulated above, is a data set of different data types. You will often find yourself working with data sets that contain different data types instead of only one. A data frame has the variables of a data set as columns and the observations as rows. This will be a familiar concept for those coming from different statistical software packages such as SAS or SPSS.

### 3.1 Inspecting dataframes

There are several functions you can use to inspect your dataframe. To name a few

- `head`: this by default prints the first 6 rows of the dataframe

- `tail`: this by default prints the last 6 rows to the console

- `str`: this prints the structure of your dataframe

- `dim`: this by default prints the dimensions, that is, the number of rows and columns of your dataframe

- `colnames`: this prints the names of the columns of your dataframe

- **Instructions**

  - Print the first 6 rows of mtcars
  - Print the structure of the dataframe mtcars
  - Print the dimensions of the dataframe mtcars

- **Answers**

  ```R
  # print the first 6 rows of mtcars
  head(mtcars)
  tail(mtcars)
  # print the structure of mtcars
  str(mtcars)
  
  # print the dimensions of mtcars
  dim(mtcars)
  colnames(mtcars)
  ```

  ```R
  > # print the first 6 rows of mtcars
  > head(mtcars)
                     mpg cyl disp  hp drat    wt  qsec vs am gear carb
  Mazda RX4         21.0   6  160 110 3.90 2.620 16.46  0  1    4    4
  Mazda RX4 Wag     21.0   6  160 110 3.90 2.875 17.02  0  1    4    4
  Datsun 710        22.8   4  108  93 3.85 2.320 18.61  1  1    4    1
  Hornet 4 Drive    21.4   6  258 110 3.08 3.215 19.44  1  0    3    1
  Hornet Sportabout 18.7   8  360 175 3.15 3.440 17.02  0  0    3    2
  Valiant           18.1   6  225 105 2.76 3.460 20.22  1  0    3    1
  > tail(mtcars)
                  mpg cyl  disp  hp drat    wt qsec vs am gear carb
  Porsche 914-2  26.0   4 120.3  91 4.43 2.140 16.7  0  1    5    2
  Lotus Europa   30.4   4  95.1 113 3.77 1.513 16.9  1  1    5    2
  Ford Pantera L 15.8   8 351.0 264 4.22 3.170 14.5  0  1    5    4
  Ferrari Dino   19.7   6 145.0 175 3.62 2.770 15.5  0  1    5    6
  Maserati Bora  15.0   8 301.0 335 3.54 3.570 14.6  0  1    5    8
  Volvo 142E     21.4   4 121.0 109 4.11 2.780 18.6  1  1    4    2
  > # print the structure of mtcars
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
   $ am  : num  1 1 1 0 0 0 0 0 0 0 ...
   $ gear: num  4 4 4 3 3 3 3 4 4 4 ...
   $ carb: num  4 4 1 1 2 1 4 2 2 4 ...
  > 
  > # print the dimensions of mtcars
  > dim(mtcars)
  [1] 32 11
  > colnames(mtcars)
   [1] "mpg"  "cyl"  "disp" "hp"   "drat" "wt"   "qsec" "vs"   "am"   "gear"
  [11] "carb"
  ```

  

### 3.2 Constructing a dataframe yourself

Since using built-in data sets is not even half the fun of creating your own data sets, the rest of this chapter is based on your personally developed data set.

As a first goal, you want to construct a data frame that describes the main characteristics of eight planets in our solar system. The main features of a planet are:

- The type of planet (Terrestrial or Gas Giant).
- The planet's diameter relative to the diameter of the Earth.
- The planet's rotation across the sun relative to that of the Earth.
- If the planet has rings or not (TRUE or FALSE).

You construct a data frame with the `data.frame()` function. As arguments, you should provide the above mentioned vectors as input that should become the different columns of that data frame. Therefore, it is important that each vector used to construct a data frame has an equal length. But do not forget that it is possible (and likely) that they contain different types of data.

- **Instructions**

  - Use the function `data.frame()` to construct a data frame. Call this variable `planet_df`.

- **Answers**

  ```R
  # planets vector
  planets <- c("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune")
  
  # type vector
  type <- c("Terrestrial planet", "Terrestrial planet", "Terrestrial planet", "Terrestrial planet", "Gas giant", "Gas giant", "Gas giant", "Gas giant")
  
  # diameter vector
  diameter <- c(0.382, 0.949, 1, 0.532, 11.209, 9.449, 4.007, 3.883)
  
  # rotation vector
  rotation <- c(58.64, -243.02, 1, 1.03, 0.41, 0.43, -0.72, 0.67)
  
  # rings vector
  rings <- c(FALSE, FALSE, FALSE, FALSE, TRUE, TRUE, TRUE, TRUE)
  
  # construct a dataframe planet_df from all the above variables
  planet_df<-data.frame(planets, type, diameter, rotation, rings)
  planet_df
  ```

  ```R
  > # planets vector
  > planets <- c("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune")
  > 
  > # type vector
  > type <- c("Terrestrial planet", "Terrestrial planet", "Terrestrial planet", "Terrestrial planet", "Gas giant", "Gas giant", "Gas giant", "Gas giant")
  > 
  > # diameter vector
  > diameter <- c(0.382, 0.949, 1, 0.532, 11.209, 9.449, 4.007, 3.883)
  > 
  > # rotation vector
  > rotation <- c(58.64, -243.02, 1, 1.03, 0.41, 0.43, -0.72, 0.67)
  > 
  > # rings vector
  > rings <- c(FALSE, FALSE, FALSE, FALSE, TRUE, TRUE, TRUE, TRUE)
  > 
  > # construct a dataframe planet_df from all the above variables
  > planet_df<-data.frame(planets, type, diameter, rotation, rings)
  > planet_df
    planets               type diameter rotation rings
  1 Mercury Terrestrial planet    0.382    58.64 FALSE
  2   Venus Terrestrial planet    0.949  -243.02 FALSE
  3   Earth Terrestrial planet    1.000     1.00 FALSE
  4    Mars Terrestrial planet    0.532     1.03 FALSE
  5 Jupiter          Gas giant   11.209     0.41  TRUE
  6  Saturn          Gas giant    9.449     0.43  TRUE
  7  Uranus          Gas giant    4.007    -0.72  TRUE
  8 Neptune          Gas giant    3.883     0.67  TRUE
  ```



### 3.3 Indexing and selecting columns from a dataframe

In the same way as you indexed your vectors, you can select elements from your dataframe using square brackets. Different from dataframes however, you now have multiple dimensions: rows and columns. That's why you can use a comma in the middle of the brackets to differentiate between rows and columns. For instance, the following code `planet_df[1,2]` would select the element in the first row and the second column from the dataframe `planet_df`.

You can also use the `$` operator to select an entire column from a dataframe. For instance, `planet_df$planets` would select the entire planets column from the dataframe planet_df.

- **Instructions**

  - Select the elements in the first row, and the second and third column from `planet_df`
  - Select the entire third column from `planet_df`

- **Answers**

  ```r
  # select the values in the first row and second and third columns
  planet_df[1,c(2,3)]
  # select the entire third column
  planet_df$diameter
  ```

  ```R
  > # select the values in the first row and second and third columns
  > planet_df[1,c(2,3)]
                  type diameter
  1 Terrestrial planet    0.382
  > # select the entire third column
  > planet_df$diameter
  [1]  0.382  0.949  1.000  0.532 11.209  9.449  4.007  3.883
  ```

  

## 4. List

A list in R is similar to your to-do list at work or school: the different items on that list most likely differ in length, characteristic, type of activity that has to do be done.

A list in R allows you to gather a variety of objects under one name (that is, the name of the list) in an ordered way. These objects can be matrices, vectors, data frames, even other lists, etc. It is not even required that these objects are related to each other.

You can easily construct a list using the `list()` function. In this function you can wrap the different elements like so: `list(item1, item2, item3)`.

- **Instructions**

  - Put the objects `my_vector`, `my_matrix` and `my_df` into a list called `my_list`
  - Make sure to print `my_list`

- **Answers**

  ```R
  # Vector with numerics from 1 up to 10
  my_vector <- 1:10 
  
  # Matrix with numerics from 1 up to 9
  my_matrix <- matrix(1:9, ncol = 3)
  
  # First 10 elements of the built-in data frame 'mtcars'
  my_df <- mtcars[1:10,]
  
  # Construct my_list with these different elements:
  my_list<-list(my_vector,my_matrix,my_df)
  
  # print my_list to the console
  ```

  ```R
  ># Vector with numerics from 1 up to 10
  >my_vector <- 1:10 
  >
  ># Matrix with numerics from 1 up to 9
  >my_matrix <- matrix(1:9, ncol = 3)
  >
  > # First 10 elements of the built-in data frame 'mtcars'
  > my_df <- mtcars[1:10,]
  > 
  > # Construct my_list with these different elements:
  > my_list<-list(my_vector,my_matrix,my_df)
  > 
  > # print my_list to the console
  > my_list
  [[1]]
   [1]  1  2  3  4  5  6  7  8  9 10
  
  [[2]]
       [,1] [,2] [,3]
  [1,]    1    4    7
  [2,]    2    5    8
  [3,]    3    6    9
  
  [[3]]
                     mpg cyl  disp  hp drat    wt  qsec vs am gear carb
  Mazda RX4         21.0   6 160.0 110 3.90 2.620 16.46  0  1    4    4
  Mazda RX4 Wag     21.0   6 160.0 110 3.90 2.875 17.02  0  1    4    4
  Datsun 710        22.8   4 108.0  93 3.85 2.320 18.61  1  1    4    1
  Hornet 4 Drive    21.4   6 258.0 110 3.08 3.215 19.44  1  0    3    1
  Hornet Sportabout 18.7   8 360.0 175 3.15 3.440 17.02  0  0    3    2
  Valiant           18.1   6 225.0 105 2.76 3.460 20.22  1  0    3    1
  Duster 360        14.3   8 360.0 245 3.21 3.570 15.84  0  0    3    4
  Merc 240D         24.4   4 146.7  62 3.69 3.190 20.00  1  0    4    2
  Merc 230          22.8   4 140.8  95 3.92 3.150 22.90  1  0    4    2
  Merc 280          19.2   6 167.6 123 3.92 3.440 18.30  1  0    4    4
  ```

### 4.1 Selecting elements from a list

Your list will often be built out of numerous elements and components. Therefore, getting a single element, multiple elements, or a component out of it is not always straightforward. One way to select a component is using the numbered position of that component. For example, to "grab" the first component of `my_list` you type `my_list[[1]]`

Another way to check is to refer to the names of the components: `my_list[["my_vector"]]` selects the `my_vector` vector.

A last way to grab an element from a list is using the `$` sign. The following code would select `my_df` from `my_list`: `my_list$my_df`.

Besides selecting components, you often need to select specific elements out of these components. For example, with `my_list[[1]][1]` you select from the first component of `my_list` the first element. This would select the number 1.

- **Instructions**

  - Grab the second element of my_list and print it to the console
  - Grab the first column of the third component of `my_list` and print it to the console

- **Answers**

  ```R
  # Vector with numerics from 1 up to 10
  my_vector <- 1:10 
  
  # Matrix with numerics from 1 up to 9
  my_matrix <- matrix(1:9, ncol = 3)
  
  # First 10 elements of the built-in data frame 'mtcars'
  my_df <- mtcars[1:10,]
  
  # Construct list with these different elements:
  my_list <- list(my_vector, my_matrix, my_df)
  my_list
  # Grab the second element of my_list and print it to the console
  my_list[2]
  my_list[[2]]
  
  # Grab the first column of the third component of `my_list` and print it to the console
  my_list[3]
  my_list[[3]]
  my_list[[3]][,1]
  ```

  

  ```R
  > # Vector with numerics from 1 up to 10
  > my_vector <- 1:10
  > 
  > # Matrix with numerics from 1 up to 9
  > my_matrix <- matrix(1:9, ncol = 3)
  > 
  > # First 10 elements of the built-in data frame 'mtcars'
  > my_df <- mtcars[1:10,]
  > 
  > # Construct list with these different elements:
  > my_list <- list(my_vector, my_matrix, my_df)
  > my_list
  [[1]]
   [1]  1  2  3  4  5  6  7  8  9 10
  
  [[2]]
       [,1] [,2] [,3]
  [1,]    1    4    7
  [2,]    2    5    8
  [3,]    3    6    9
  
  [[3]]
                     mpg cyl  disp  hp drat    wt  qsec vs am gear carb
  Mazda RX4         21.0   6 160.0 110 3.90 2.620 16.46  0  1    4    4
  Mazda RX4 Wag     21.0   6 160.0 110 3.90 2.875 17.02  0  1    4    4
  Datsun 710        22.8   4 108.0  93 3.85 2.320 18.61  1  1    4    1
  Hornet 4 Drive    21.4   6 258.0 110 3.08 3.215 19.44  1  0    3    1
  Hornet Sportabout 18.7   8 360.0 175 3.15 3.440 17.02  0  0    3    2
  Valiant           18.1   6 225.0 105 2.76 3.460 20.22  1  0    3    1
  Duster 360        14.3   8 360.0 245 3.21 3.570 15.84  0  0    3    4
  Merc 240D         24.4   4 146.7  62 3.69 3.190 20.00  1  0    4    2
  Merc 230          22.8   4 140.8  95 3.92 3.150 22.90  1  0    4    2
  Merc 280          19.2   6 167.6 123 3.92 3.440 18.30  1  0    4    4
  > # Grab the second element of my_list and print it to the console
  > my_list[2]
  [[1]]
       [,1] [,2] [,3]
  [1,]    1    4    7
  [2,]    2    5    8
  [3,]    3    6    9
  > my_list[[2]]
       [,1] [,2] [,3]
  [1,]    1    4    7
  [2,]    2    5    8
  [3,]    3    6    9
  > 
  > # Grab the first column of the third component of `my_list` and print it to the console
  > my_list[3]
  [[1]]
                     mpg cyl  disp  hp drat    wt  qsec vs am gear carb
  Mazda RX4         21.0   6 160.0 110 3.90 2.620 16.46  0  1    4    4
  Mazda RX4 Wag     21.0   6 160.0 110 3.90 2.875 17.02  0  1    4    4
  Datsun 710        22.8   4 108.0  93 3.85 2.320 18.61  1  1    4    1
  Hornet 4 Drive    21.4   6 258.0 110 3.08 3.215 19.44  1  0    3    1
  Hornet Sportabout 18.7   8 360.0 175 3.15 3.440 17.02  0  0    3    2
  Valiant           18.1   6 225.0 105 2.76 3.460 20.22  1  0    3    1
  Duster 360        14.3   8 360.0 245 3.21 3.570 15.84  0  0    3    4
  Merc 240D         24.4   4 146.7  62 3.69 3.190 20.00  1  0    4    2
  Merc 230          22.8   4 140.8  95 3.92 3.150 22.90  1  0    4    2
  Merc 280          19.2   6 167.6 123 3.92 3.440 18.30  1  0    4    4
  > my_list[[3]]
                     mpg cyl  disp  hp drat    wt  qsec vs am gear carb
  Mazda RX4         21.0   6 160.0 110 3.90 2.620 16.46  0  1    4    4
  Mazda RX4 Wag     21.0   6 160.0 110 3.90 2.875 17.02  0  1    4    4
  Datsun 710        22.8   4 108.0  93 3.85 2.320 18.61  1  1    4    1
  Hornet 4 Drive    21.4   6 258.0 110 3.08 3.215 19.44  1  0    3    1
  Hornet Sportabout 18.7   8 360.0 175 3.15 3.440 17.02  0  0    3    2
  Valiant           18.1   6 225.0 105 2.76 3.460 20.22  1  0    3    1
  Duster 360        14.3   8 360.0 245 3.21 3.570 15.84  0  0    3    4
  Merc 240D         24.4   4 146.7  62 3.69 3.190 20.00  1  0    4    2
  Merc 230          22.8   4 140.8  95 3.92 3.150 22.90  1  0    4    2
  Merc 280          19.2   6 167.6 123 3.92 3.440 18.30  1  0    4    4
  > my_list[[3]][,1]
   [1] 21.0 21.0 22.8 21.4 18.7 18.1 14.3 24.4 22.8 19.2
  ```




## 5. Function

### 5.1 Mean

**1.**So far we have seen many datatypes in R. The next thing to learn about is functions. We have already seen many functions when working with vectors, dataframes and lists. For instance, when making a list, we used the function `list()` to make one.

In programming, functions are used to incorporate sets of instructions that we want to use repeatedly. A function is actually a piece of code written to carry out a specified task; it may accept arguments or parameters (or not) and it may return one or more values (or not!).

Let's look at a pre-programmed function in R: `mean`. To consult the R documentation on this function, you can use the following commands:

- `help(mean)`
- `?mean`

Try these commands out in the console. If you do so, you'll be redirected to www.RDocumentation.org. If you would type this function into you R studio console, a help tab would automatically open in R studio.

There is another way of getting help on a function. For instance, if you want to know which parameters need to be provided, you can use the R function `args` on the specified function. An example of using `args` on a function is the following: `args(mean)`

- **Instructions**

  - Consult the documentation of the `mean()` function by typing `?mean` into the console. Also type the code to get the documentation of the `mean()` function in your R script.
  - Consult the arguments that the `mean()` function takes by typing `args(mean)` into the console. Also type the code to get the arguments of the `mean()` function in your R script.

- **Answers**

  ```R
  # ask for help on the mean function
  ?mean
  
  # ask for the arguments used by the mean function
  args(mean)
  ```

  ```R
  > # ask for help on the mean function
  > ?mean
  > 
  > # ask for the arguments used by the mean function
  > args(mean)
  function (x, ...) 
  NULL
  ```

**2.**When getting help on the mean function, you saw that it takes an argument x. X here is just an arbitrary name for the object that you want to find the mean of. Usually this object will be an R vector. We also saw the `...`. This is called an elipsis and is used to provide a number of optional arguments to the function.

Remember that R can match arguments both by position and by name. Let's say we want to find the mean of a vector called temperature. An example of matching by name is the following:

```
mean(x = temperature)
```

An example of matching by position is the following:

```
mean(temperature)
```

In this exercise, we have provided you with a vector of 5 numbers. There are the grades that you got during the semester.

- **Instructions**
  - Calculate the mean of the vector `grades` using matching by position
  - Calculate the mean of the vector `grades` using matching by name

- **Answer**

  ```R
  # a grades vector
  grades <- c(8.5, 7, 9, 5.5, 6)
  
  # calculate the mean of grades using matching by name
  mean(x=grades)
  
  # calculate the mean of grades using matching by position
  mean(grades)
  ```

  ```R
  > # a grades vector
  > grades <- c(8.5, 7, 9, 5.5, 6)
  > 
  > # calculate the mean of grades using matching by name
  > mean(x=grades)
  [1] 7.2
  > 
  > # calculate the mean of grades using matching by position
  > mean(grades)
  [1] 7.2
  ```

  

**3.**When we looked at the documentation of `mean`. The documentation showed us the following method:

```R
mean(x, trim = 0, na.rm = FALSE, ...)
```

其中，参数x为计算对象，可以是向量、矩阵、数组或数据框；trim用于设置计算均值前去掉两端数据的百分比，即计算结尾均值，取值在0~0.5之间；na.rm为逻辑值，指示是否允许有缺失值(NA)的情况，默认为FALSE（不允许）

As you can see, both `trim` and `na.rm` have default values. However, `x` doesn't. This makes x a required argument. That means that the function mean will throw an error if x hasn't been specified. Trim and na.rm are however optional arguments with default values and can be changed or specified by the user.

Na.rm can be changed by the user if a given vector contains missing values. For instance, if a the aforementioned vector called temperature would have missing values, calling mean on it would throw an output of `NA`. If you want the mean function to exclude the NA values when calculating the mean, you can specify `na.rm = TRUE`. Let's bring this into practice:

- **Instructions**

  - Calculate the mean of the grades vector without removing `NA` values.
  - Calculate the mean of the grades vector with removing `NA` values and observe the difference.

- **Answers**

  ```R
  # a grades vector
  grades <- c(8.5, 7, 9, NA, 6)
  
  mean(x=grades)
  mean(grades, na.rm = TRUE)
  mean(grades, na.rm= TRUE, trim=0.3)
  ```

  ```R
  > # a grades vector
  > grades <- c(8.5, 7, 9, NA, 6)
  > 
  > mean(x=grades)
  [1] NA
  > mean(grades, na.rm = TRUE)
  [1] 7.625
  > mean(grades, na.rm= TRUE, trim=0.3)
  [1] 7.75
  ```



### 5.2 Making your own functions

During the last 3 exercises, we have been using existing functions. However, you can also write your own functions. You can define a function using `function()` code chunk. For instance, look at the code below to see a function that takes 2 parameters, `a` and `b`, sums them, and returns them.

```
sum_a_b <- function(a, b){
  return (a + b)
}
```

You could call this function and assign its result to the variable `result`, using the following code: `result = sum_a_b(4, 5)`

This would put the value of 9 into the variable `result`. Off you go; now it's your turn !

- **Instructions**

  - Look at the construction of the function `sum_a_b`. Make a similar function that multiplies a and b and call this `multiply_a_b`
  - Call `multiply_a_b` with the values `a = 3` and `b = 7` and store the result into a variable called `result`

- **Answers**

  ```R
  # make a function called multiply_a_b
  multiply_a_b<-function(a,b){
    return (a*b)
  }
  
  # call the function multiply_a_b and store the result into a variable result
  multiply_a_b(3,7)
  ```

  ```R
  > # make a function called multiply_a_b
  > multiply_a_b<-function(a,b){
      return (a*b)
    }
  > 
  > # call the function multiply_a_b and store the result into a variable result
  > multiply_a_b(3,7)
  [1] 21
  ```



## 6. Getting your data into R

**6.1.**One important thing before you actually do analyses on your data, is that you will need to get your data into R. R contains many functions to read in data from different formats. To name only a few:

- `read.table`: Reads in tabular data such as txt files
- `read.csv`: Read in data from a comma-separated file format
- `readWorksheetFromFile` : Reads in an excel worksheet
- `read.spss`: Reads in data from .sav SPSS format.

For the current exercise, we have put the R mtcars dataset into a csv file format and put this on github. The data can be found on the following link: http://s3.amazonaws.com/assets.datacamp.com/course/uva/mtcars.csv

- **Instructions**

  - Load in the mtcars dataset using the `read.csv` function. Your code should look something like: read.csv("dataset_url"). Store the result into a variable called `cars`
  - Print the first 6 rows of the dataset using the `head` function

- **Answers**

  ```R
  # load in the data and store it in the variable cars
  cars<-read.csv("http://s3.amazonaws.com/assets.datacamp.com/course/uva/mtcars.csv")
  # print the first 6 rows of the dataset using the head() function
  head(cars)
  ```

  ```R
  > # load in the data and store it in the variable cars
  > cars<-read.csv("http://s3.amazonaws.com/assets.datacamp.com/course/uva/mtcars.csv")
  > # print the first 6 rows of the dataset using the head() function
  > head(cars)
     mpg cyl disp  hp drat    wt  qsec vs am gear carb               car
  1 21.0   6  160 110 3.90 2.620 16.46  0  1    4    4         Mazda RX4
  2 21.0   6  160 110 3.90 2.875 17.02  0  1    4    4     Mazda RX4 Wag
  3 22.8   4  108  93 3.85 2.320 18.61  1  1    4    1        Datsun 710
  4 21.4   6  258 110 3.08 3.215 19.44  1  0    3    1    Hornet 4 Drive
  5 18.7   8  360 175 3.15 3.440 17.02  0  0    3    2 Hornet Sportabout
  6 18.1   6  225 105 2.76 3.460 20.22  1  0    3    1           Valiant
  ```

**6.2.**In the last exercise, you just read in your first dataset. All you needed to specify was the "address" where the dataset could be found. However, sometimes data isn't stored into the most convenient format. For instance, sometimes the separator that separates all the different cells is different than you would expect.

You can specify the separator in your `read.csv` function using the `sep` argument. By default, this argument for csv files is a comma. You can however easily change this to a tab by using the following code: `sep = '\t'`. In the current exercise, you will be working with the following url:

http://s3.amazonaws.com/assets.datacamp.com/course/uva/mtcars_semicolon.csv

- **Instructions**

  - For this exercise we'll be working with the same dataset found at the following url specified above. The dataset however has a ";" as separator. Load in the dataset by specifying the ";" as separator. Save it in the variable `cars`
  - Print the first 6 rows of cars to the console using the `head()` function

- **Answers**

  ```R
  # load in the dataset
  cars<-read.csv("http://s3.amazonaws.com/assets.datacamp.com/course/uva/mtcars_semicolon.csv", sep=";")
  
  # print the first 6 rows of the dataset
  cars
  ```

  ```R
  > # load in the dataset
  > cars<-read.csv("http://s3.amazonaws.com/assets.datacamp.com/course/uva/mtcars_semicolon.csv", sep=";")
  > 
  > # print the first 6 rows of the dataset
  > cars
      mpg cyl  disp  hp drat    wt  qsec vs am gear carb
  1  21.0   6 160.0 110 3.90 2.620 16.46  0  1    4    4
  2  21.0   6 160.0 110 3.90 2.875 17.02  0  1    4    4
  3  22.8   4 108.0  93 3.85 2.320 18.61  1  1    4    1
  4  21.4   6 258.0 110 3.08 3.215 19.44  1  0    3    1
  5  18.7   8 360.0 175 3.15 3.440 17.02  0  0    3    2
  6  18.1   6 225.0 105 2.76 3.460 20.22  1  0    3    1
  7  14.3   8 360.0 245 3.21 3.570 15.84  0  0    3    4
  8  24.4   4 146.7  62 3.69 3.190 20.00  1  0    4    2
  9  22.8   4 140.8  95 3.92 3.150 22.90  1  0    4    2
  10 19.2   6 167.6 123 3.92 3.440 18.30  1  0    4    4
  11 17.8   6 167.6 123 3.92 3.440 18.90  1  0    4    4
  12 16.4   8 275.8 180 3.07 4.070 17.40  0  0    3    3
  13 17.3   8 275.8 180 3.07 3.730 17.60  0  0    3    3
  14 15.2   8 275.8 180 3.07 3.780 18.00  0  0    3    3
  15 10.4   8 472.0 205 2.93 5.250 17.98  0  0    3    4
  16 10.4   8 460.0 215 3.00 5.424 17.82  0  0    3    4
  17 14.7   8 440.0 230 3.23 5.345 17.42  0  0    3    4
  18 32.4   4  78.7  66 4.08 2.200 19.47  1  1    4    1
  19 30.4   4  75.7  52 4.93 1.615 18.52  1  1    4    2
  20 33.9   4  71.1  65 4.22 1.835 19.90  1  1    4    1
  21 21.5   4 120.1  97 3.70 2.465 20.01  1  0    3    1
  22 15.5   8 318.0 150 2.76 3.520 16.87  0  0    3    2
  23 15.2   8 304.0 150 3.15 3.435 17.30  0  0    3    2
  24 13.3   8 350.0 245 3.73 3.840 15.41  0  0    3    4
  25 19.2   8 400.0 175 3.08 3.845 17.05  0  0    3    2
  26 27.3   4  79.0  66 4.08 1.935 18.90  1  1    4    1
  27 26.0   4 120.3  91 4.43 2.140 16.70  0  1    5    2
  28 30.4   4  95.1 113 3.77 1.513 16.90  1  1    5    2
  29 15.8   8 351.0 264 4.22 3.170 14.50  0  1    5    4
  30 19.7   6 145.0 175 3.62 2.770 15.50  0  1    5    6
  31 15.0   8 301.0 335 3.54 3.570 14.60  0  1    5    8
  32 21.4   4 121.0 109 4.11 2.780 18.60  1  1    4    2
  ```

**6.3. get your own dataset from your computer**

In the previous assignments, we practised reading in files in R. So far, all of these files were on the internet. However, if you would work with R studio on your own computer, you would probably like to read in local files.

When reading in local files, it's good to have an idea what your working directory is. Your working directory is basically the part of your file system that R will look for files. Usually this is something along the lines of C:/Users/Username/documents. Of course this working directory is not static and can be changed by the user.

### **6.4.准备工作**

在R中进行任何操作和分析工作之前，先需要读取数据。保存在工作目录中的数据可以直接读取，非工作目录的其他位置在读取时需要指明路径。因此第一步工作是了解R的工作目录。下面是具体的代码，输入getwd函数，R返回当前的工作目录。

```R
#查看工作目录``getwd``()``[1] ``"C:/Users/Documents"
```

你也可以对R的工作目录进行更改，使用setwd函数可以更改工作目录的路径。下面是具体的代码。

```
#设置工作目录``setwd``(``"C:\\Users\\ r"``)
```

设置好工作目录后，开始读取数据，并创建数据表。我们的数据在工作目录下，因此直接读取并命名为loandata。

```R
#读取并创建数据表``loandata=``data.frame``(``read.csv``(``'loan_data.csv'``,header = 1))
```

In R there are two important functions:

- `getwd()`: This function will retrieve the current working directory for the user
- `setwd()`: This functions allows the user to set her own working directory

- **Instructions**

  - Retrieve your current working directory

- **Answers**

  ```R
  # retrieve the current working directory
  getwd()
  ```

  ```R
  > # retrieve the current working directory
  > getwd()
  [1] "/home/repl"
  ```

  

**6.5. Checking files in your working directory**

R has some great convenience functions for checking the files that exist in your current working directory. For instance, `list.files()` lists all the files that exists in your working directory.

- **Instructions**

  - List all the files that exist in your working directory
  - Read in the `cars.csv` file. Specify the separator to be a `;`

- **Answers**

  ```R
  # list all the files in the working directory
  list.files()
  
  # read in the cars dataset and store it in a variable called cars
  cars<-data.frame(read.csv("cars.csv", sep=";"))
  
  # print the first 6 rows of cars
  head(cars)
  ```

  ```R
  > # list all the files in the working directory
  > list.files()
  [1] "cars.csv"
  > 
  > # read in the cars dataset and store it in a variable called cars
  > cars<-data.frame(read.csv("cars.csv", sep=";"))
  > 
  > # print the first 6 rows of cars
  > head(cars)
     mpg cyl disp  hp drat    wt  qsec vs am gear carb
  1 21.0   6  160 110 3.90 2.620 16.46  0  1    4    4
  2 21.0   6  160 110 3.90 2.875 17.02  0  1    4    4
  3 22.8   4  108  93 3.85 2.320 18.61  1  1    4    1
  4 21.4   6  258 110 3.08 3.215 19.44  1  0    3    1
  5 18.7   8  360 175 3.15 3.440 17.02  0  0    3    2
  6 18.1   6  225 105 2.76 3.460 20.22  1  0    3    1
  ```



## 7.  `ggplot2`

Although base R comes with a lot of useful functions, you will not be able to fully leverage the full power of R without being able to import R modules developed by others. Imagine we want to do some great plotting and we want to use ggplot2 for it. If we want to do so, we need to take 2 steps:

1. Install the package ggplot2 using `install.packages("ggplot2")`
2. Load the package ggplot2 using `library(ggplot2)` or `require(ggplot2)`

In datacamp however, most packages are already installed and readily available. As such, you won't need to run `install.packages()`

- **Instructions**

  - Load the ggplot2 package using the `library` function
  - Load the ggplot2 package using the `require` function

- **Answers**

  ```R
  # load the ggplot2 package using the library function
  library(ggplot2)
  # load the ggplot2 package using the require function
  require(ggplot2)
  ?ggplot2
  ```

  