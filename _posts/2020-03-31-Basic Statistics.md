---

title: Basic Statistics - (01) Introduction
key: 20200331

tags: Statistics; R;  Bar graph; Histogram; Mode,median&mean; Range; Quartiles; Standard deviation; z-score; 

layout: article

mathjax: true

mathjax_autoNumber: true

---

# Basic Statistics - (01) Introduction

<!--more-->

## 1. Cases, Variables and levels of measurements

- **Variables**

  - characteristics of something or someone

- **Cases**

  - something or someone

  ![cases and variables](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/01%20cases%20and%20varibles.jpg){:height="30%" width="30%"}

- **Variable vs Constant**

  ![variable vs constant](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/02%20variables%20vs%20constants.jpg){:height="30%" width="30%"}

- [**Levels of measurements**](https://suntarliarzn.github.io/2019/12/15/Social-Science-Quantitative-methods(04)-Measurement.html)

  ![levels of measurements](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/03%20level%20of%20measurements.jpg){:height="30%" width="30%"}

## 2. Data matrix and frequency table

![Data Processing](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/07%20data%20processing%20process.jpg){:height="30%" width="30%"}

- Data Matrix**

  - data table: the starting point of any statistic analysis

  ![Data Matrix](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/04%20data%20matrix.jpg){:height="30%" width="30%"}

- **Frequency Table**

  - Categorical

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/05%20categorical%20frequency%20table.jpg){:height="30%" width="30%"}

  - Ordinal

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/06%20ordinal%20frequency%20table.jpg){:height="30%" width="30%"}

## 03 Graphs and shapes of distributions

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/14%20summary%20of%20charts.jpg){:height="30%" width="30%"}

- **Graphs**

  - Nominal/ ordinal

  - **bar vs pie**

    - pie chart

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/08%20pie%20chart.jpg){:height="30%" width="30%"}

    - bar graph

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/09%20bar%20garph.jpg){:height="30%" width="30%"}

  - advantages and contrast of bar/pie

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/09%20advantages%20of%20bar%20and%20pie.jpg){:height="30%" width="30%"}

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/11%20comparison%20of%20bar%20and%20pie.jpg){:height="30%" width="30%"}

- **Histogram**

  - Interval/ratio
  - histogram

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/12%20histogram.jpg){:height="30%" width="30%"}

- **Shapes of distributions**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/13%20normal%20distribution.jpg){:height="30%" width="30%"}

  - unimodal: bell shape
  - other shapes:
    - skewed to the right/left
    - bimodal: two peaks

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/15%20summary%20of%20histogram.jpg){:height="30%" width="30%"}

## 4.Mode, median and mean

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/16%20mode%2Cmedian%20and%20mean.jpg){:height="30%" width="30%"}

- **Mode** 众数

  - value that occurs most frequently(the most frequently)
  - often used if a variable is measured on a nominal or ordinal level.

- **Median**中位数

  - the middle value of your observations when arranged from the smallest to the largest
  - even respondents: **average of the two middle values**

- **Mean**平均值

  - the sum of all the values divided by the number of observations

  $$
  \overline x = \frac{\sum x}{n}
  $$



## 5 Range, interquartile range and box plot

- **Range**

  - the difference between **highest and lowest** value
  - :heavy_check_mark:easy to understand
  - :heavy_check_mark:simple to compute
  - :negative_squared_cross_mark:doesn't give a good impression of the **variability**
    - only takes account of extreme values

- **Interquartile range**四分位距

  - leaves out the extreme values

  - distribution in four equal parts

  - Q1&Q3

    - Turkey: 直接将数组以中位数（Q2）分为两个数组，并分别寻找两个数组中位数作为Q1和Q3。

      - 数组：1,2,3,4,5,6,7,8,9,10

        Q1=3；Q3=8

    - 更常用方法为：取（n+1）/4分位的数为Q1位置。

      - 比如：数组：1,2,3,4,5,6,7,8,9,10

        Q1位置为：(10+1)/4 =2.75， 即数组的第2.75位=（2\*0.25+3\*0.75）=2.75

        同理：Q3=（8\*0.75 + 9\*0.25）=8.25

    - **注意：Interquartile range有不同的计算方式，结果会稍有不同。[参见](http://www.haiweb.org/medicineprices/manual/quartiles_iTSS.pdf)**

  - **IQR**

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/17%20IQR.jpg){:height="30%" width="30%"}

    - IQR是interquartile range的缩写，中文叫四分位距。对于一组样本，我们计算出第一四分位数Q1Q1以及第三四分位数Q3Q3，IQR就是它们的差。
      $$
      Q_2=median
      $$
      
      $$
      IQR = Q_3 - Q_1
      $$
      
      

  - **离群点**：我们经常用IQR做离群点排除，比如小于q1−1.5(IQR)的数或者大于q3+1.5(IQR)的数就被认为是离群点。

- [**Box plot箱型图**]([https://baike.baidu.com/item/%E7%AE%B1%E5%BD%A2%E5%9B%BE/10671164?fr=aladdin](https://baike.baidu.com/item/箱形图/10671164?fr=aladdin))

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/18%20box%20plot.jpg){:height="30%" width="30%"}

  

## 6 Variance and standard deviation

- **Variance 方差**

  - 方差是在概率论和统计方差衡量[随机变量](https://baike.baidu.com/item/随机变量/828980)或一组数据时离散程度的度量。概率论中方差用来度量[随机变量](https://baike.baidu.com/item/随机变量/828980)和其[数学期望](https://baike.baidu.com/item/数学期望/5362790)（即[均值](https://baike.baidu.com/item/均值/5922988)）之间的偏离程度。统计中的方差（样本方差）是每个样本值与全体样本值的平均数之差的平方值的[平均数](https://baike.baidu.com/item/平均数/11031224)。

  $$
  S^2 = \frac{\sum(x-\overline{x})^2}{(n-1)}
  $$

  
  - larger variance -->larger variability-->the more the values are spread out around the mean
  - **disadvantage:** the metric of the variance is the metric of the variable under analysis **SQUARED**.

- **Standard deviation 标准差**
  
  
  $$
  S = \sqrt{\frac{\sum(x-\overline{x})^2}{(n-1)}}
  $$
  
  - most often used measure of dispersion

## 7 Z-score

- number of standard deviations removed from the mean.

- z分数（z-score），也叫标准分数（standard score）是一个数与平均数的差再除以标准差的过程。在统计学中，标准分数是一个观测或数据点的值高于被观测值或测量值的平均值的标准偏差的符号数。

  z分数可以回答这样一个问题："一个给定分数距离[平均数](https://baike.baidu.com/item/平均数)多少个标准差?"在平均数之上的分数会得到一个正的标准分数，在平均数之下的分数会得到一个负的标准分数。 z分数是一种可以看出某分数在分布中相对位置的方法。

$$
Z = \frac{x-\overline{x}}{S}
$$



![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/19%20z%20score.jpg){:height="30%" width="30%"}

- **z score and normal distribution**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/20%20normal%20distribution.jpg){:height="30%" width="30%"}

- any distribution

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/22%20any%20distribution%202%20means.jpg){:height="30%" width="30%"}

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/23%20any%20distribution%203%20means.jpg){:height="30%" width="30%"}

- standardization process 标准化

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/03%20Basic%20Statistics/week%20one%20introduction/21%20standardization.jpg){:height="30%" width="30%"}
