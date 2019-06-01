---

title: Introduction to Computational Thinking and Data Science(3)

key: B20190519

tags: python; Law of Large Numbers; Standard Deviation; Normal Distribution; Central Limit Theorem; Monte Carlo Simulation; 

layout: article

mathjax: true

mathjax_autoNumber: true
---

# Introduction to Computational Thinking and Data Science(3)

*<!--more-->*

## 3.1 Law of Large Numbers

- In [probability theory](https://en.wikipedia.org/wiki/Probability_theory), the **law of large numbers** (**LLN**) is a [theorem](https://en.wikipedia.org/wiki/Theorem) that describes the result of performing the same experiment a large number of times. According to the law, the [average](https://en.wikipedia.org/wiki/Average) of the results obtained from a large number of trials should be close to the [expected value](https://en.wikipedia.org/wiki/Expected_value), and will tend to become closer as more trials are performed.
- In [statistics](https://en.wikipedia.org/wiki/Statistics), **regression toward** (or **to**) **the mean** is the phenomenon that arises if a [random variable](https://en.wikipedia.org/wiki/Random_variable) is extreme on its first measurement but closer to the [mean](https://en.wikipedia.org/wiki/Mean) or [average](https://en.wikipedia.org/wiki/Average) on its second measurement and if it is extreme on its second measurement but closer to the average on its first.
  - following an extreme random event, the next random event is likely to be less extreme.
  - [sophomore slump](https://en.wikipedia.org/wiki/Sophomore_slump) 二年级墙
  - ![Gambler's Fallacy](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%203/gambler's%20fallacy.jpg)
    - **Explanation**: Compare to n times of reds/blacks(= 1/2), probability of 15/25/35 consecutive reds is small numbers. Although their probability seems to be very influential,a large number of 1/2 will offset the number.  
    - **Interpretation**: 赌徒谬误的产生是因为人们错误的诠释了“大数法则”的平均律。投资者倾向于认为大数法则适用于大样本的同时，也适用于小样本。Tversky and Kahneman把赌徒谬误戏称为“小数法则”（law of small numbers）。在统计学和经济学中，最重要的一条规律是“大数定律”，即随机变量在大量重复实验中呈现出几乎必然的规律，样本越大、则对样本期望值的偏离就越小。例如，抛掷硬币出现正面的概率或期望值是0.5，但如果仅抛掷一次，则出现正面的概率是0或1（远远偏离0.5）。随着抛掷次数的增加（即样本的增大），那么硬币出现正面的概率就逐渐接近0.5。但根据认知心理学的“小数定律”，人们通常会忽视样本大小的影响，认为小样本和大样本具有同样的期望值。

## 3.2 Standard Deviation

### 3.2.1 Standard deviation(标准差)

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%203/normal%20distribution.jpg)
$$
variance(X) = \frac{\sum\limits_{i=1}^{N}(X_{i}-\mu)^{2}}{N}
$$

$$
\sigma = \sqrt{\frac{\sum\limits_{i=1}^{N}(X_{i}-\mu)^{2}}{N}}
$$

```python
def getMeanAndStd(x):
	mean = sum(x)/float(len(x))
	tot = 0.0
	for n in x:
		tot += (n - mean)**2
	std = (tot/len(x)) ** 0.5
	return mean, std
```



### 3.2.2 Empirical Rule

- The Empirical Rule gives us a rule of thumb for approximating the proportion of a Normal distribution that falls within 1, 2, or 3 standard deviations of its mean.
  - 68% of a Normal distribution can be found within 1 standard deviation of its mean
  - 95% of a Normal distribution can be found within 2 standard deviations of its mean
  - 99.7% of a Normal distribution can be found within 3 standard deviations of its mean
  - ![empirical rule](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%203/empirical%20rule.gif)
- **Two key assumptions**
  - The mean estimation error is zero.(errors can be biased)
  - The distribution of the errors in the estimates is normal

## 3.3 Normal Distribution

- **Discrete random variables(离散分布)** drawn from finite set of values:roll of dice

- **Continuous random variables (连续分布)** drawn from reals between two numbers(i.e. infinite set of values): the speed of driving.

  - can't enumerate probability for each of an infinite set of values
  - **PDF(probability density functions)**
    - Probability of a random variable lying between two values
    - a curve where the values on the x=axis lie between minimum and maximum value of the variable
    - Area under curve between two points is probability of example falling within that range.

     <video id="video" controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%203/pdf.jpg">
           <source id="mp4" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%203/PDF.mp4" type="video/mp4">
         <iframe width="560" height="315" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%203/PDF.mp4" frameborder="0" allowfullscreen></iframe>
           </video>

- **Normal Distributions**
  $$
  P(x) = \frac{1}{{\sigma \sqrt {2\pi}}}e^{
  \frac{ - ( {x - \mu } )^2 }  {2\sigma ^2 }}
  $$

  - ![Normal Distributions](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%203/normal%20distribution.jpg)

  - Generating Normal Distributions

    ```python
    import pylab
    import random 
    def GenNorDis():
        dist = []
        for i in range(100000):
            dist.append(random.gauss(0,30))
        pylab.hist(dist,30)
    ```

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%203/generating%20normal%20distribution.jpg)

    

## 3.4 SciPy

- SciPy library contains my useful mathematical
  functions used by scientists and engineers
- `scipy.integrate.quad(func，lower limit, upper limit, tuple(opt))` has up to four arguments: 
  - a function or method to be integrated
  - a number representing the lower limit of the integration,
  - a number representing the upper limit of the integration
  - an optional tuple supplying values for all arguments, except the first, of the function to be integrated
- `scipy.integrate.quad` returns a tuple
  -  Approximation to result
  -  Estimate of absolute error

## 3.5 The Central Limit Theorem (CLT)

The central limit theorem states that the distribution of sample means approximates a normal distribution as the sample size gets larger (assuming that all samples are identical in size), regardless of population distribution shape.

1. The means of the samples in a set of samples (the
   sample means) will be approximately normally
   distributed.
2. This normal distribution will have a mean close to the mean of the population.
3. The variance of the sample means will be close to the variance of the population divided by the sample size.

- **`pylab.hist()`**

  ```python
  def hist(
          x, bins=None, range=None, density=None, weights=None,
          cumulative=False, bottom=None, histtype='bar', align='mid',
          orientation='vertical', rwidth=None, log=False, color=None,
          label=None, stacked=False, normed=None, *, data=None,
          **kwargs):
      return gca().hist(
          x, bins=bins, range=range, density=density, weights=weights,
          cumulative=cumulative, bottom=bottom, histtype=histtype,
          align=align, orientation=orientation, rwidth=rwidth, log=log,
          color=color, label=label, stacked=stacked, normed=normed,
          **({"data": data} if data is not None else {}), **kwargs)
  ```

  

  - **x** : (n,) array or sequence of (n,) arrays

    这个参数是指定每个bin(箱子)分布的数据,对应x轴

  - **bins** : integer or array_like, optional

    这个参数指定bin(箱子)的个数,也就是总共有几条条状图

  - **normed** : boolean, optional

    If `True`, the first element of the return tuple will be the counts normalized to form a probability density, i.e.,`n/(len(x)`dbin)`

    这个参数指定密度,也就是每个条状图的占比例比,默认为1

  - **weights**:An array of weights, of the same shape as *x*. **weights should have the same shape as x**.

    x轴的参数大小

    ```python
    L = [1,1,1,1,2]
    pylab.hist(L)
    factor = pylab.array(len(L)*[1])/len(L)
    print(factor)
    pylab.figure()
    pylab.hist(L, weights = factor)
    ```

    ![pylab.hist(weights =)](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%203/pylab.hist(weights).jpg)

    

## 3.6 Monte Carlo Simulation

通过“实验”方法，用频率代替概率或得到随机变量的某些数字特征，以此作为问题的解。

- [模特卡洛模拟在项目管理上的应用](<https://www.jianshu.com/p/cb44f4b457c3>)

- ```python
  import random
  def noReplacementSimulation(numTrials):
      '''
      Runs numTrials trials of a Monte Carlo simulation
      of drawing 3 balls out of a bucket containing
      3 red and 3 green balls. Balls are not replaced once
      drawn. Returns the a decimal - the fraction of times 3 
      balls of the same color were drawn.
      '''
      mean = []
      balllist = [1,2,-3,0,0,0]/*以合计数字为零来统计概率！！！*/
      for n in range(numTrials):
          count = 0
          result = sum(random.sample(balllist,3))
          if result == 0:
              count += 1
          mean.append(count)
      return sum(mean)/len(mean)
  
  numTrials = 1000000
  print(noReplacementSimulation(numTrials))
  ```

- Infinite monkey theorem

  - The **infinite monkey theorem** states that a monkey hitting keys at [random](https://en.wikipedia.org/wiki/Randomness) on a typewriter keyboard for an [infinite](https://en.wikipedia.org/wiki/Infinity)amount of time will [almost surely](https://en.wikipedia.org/wiki/Almost_surely) type any given text, such as the complete works of [William Shakespeare](https://en.wikipedia.org/wiki/William_Shakespeare). In fact, the monkey would almost surely type every possible finite text an infinite number of times. 

## 3.7 Sample

1. ### pylab辅助线

   1. `plt.vlines(x, ymin, ymax, colors='k', label='') 和 plt.hlines(y, xmin, xmax, colors='k', label='')`绘制一条垂直/水平的辅助线，以 vlines 为例，说明重要参数：
   - x：横坐标
      - ymin，ymax：辅助线纵坐标的最小值、最大值
   - label：标签内容
   2. `plt.axvline(x=0, ymin=0, ymax=1, hold=None, **kwargs)` 和 `plt.axhline(y=0, xmin=0, xmax=1, hold=None, **kwargs)`绘制一条横跨当前图表的垂直/水平辅助线，以 axvline 为例，说明重要参数：
   - x：横坐标
      - ymin, ymax：辅助线两头纵坐标相对于整个图表的位置，范围在 0 到 1 之间。
3. **与 vlines 的区别在于:**
      - 可以不规定 ymin 和 ymax
      - ymin 和 ymax 的定义也不同，axvline 中是做了归一化，按比例
      - 不能增加 label
   
2. Error Bars

   - Graphical representation of the variability of data
   - Way to visualize uncertainty
   - **Error bar**:An error bar is a line through a point in the graph.Usually, we draw it parallel to the y-axis, but it can be parallel to the x-axis.It represents the uncertainty, or error,of the corresponding coordinate of the point.

    <video id="video" controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%203/error%20bar.jpg">
          <source id="mp4" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%203/error%20bar.mp4">
        <iframe width="560" height="315" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%203/error%20bar.mp4" frameborder="0" allowfullscreen></iframe>
          </video>

   ```python
   pylab.errorbar(xVals, sizeMeans, yerr= 1.96*pylab.array(sizeSDs)), fmt = 'o', label = 'g5% Confidence Interval'
   ```

   ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%203/sample%20error%20bar.jpg)

3. ### Standard Error of the Mean

   $$
   SE =\frac\sigma{\sqrt {n }}
   $$

   

4. ### To estimate mean from a single sample

   1. Choose sample size based on estimate of skew (**skew** is a measure of the asymmetry of a probability distribution) in population
   2. Choose a random sample from the population
   3. Compute the mean and standard deviation of that sample
   4. Use the standard deviation of that sample to estimate the SE(?)
   5. Use the estimated SE to generate confidence intervals around the sample mean

   ```python
   random.seed(0)
   temps = getHighs()
   popMean = sum(temps)/len(temps)
   sampleSize = 200
   numTrials = 10000
   numBad = 0
   for t in range(numTrials):
       sample = random.sample(temps, sampleSize)
       sampleMean = sum(sample)/sampleSize
       se = numpy.std(sample)/sampleSize**0.5
       /*compute an approximation to the standard error*/
       if abs(popMean - sampleMean) > 1.96*se:
           /*check whether the sampleMean falls within 1.96 standard errors of the population*/
           numBad += 1
   print('Fraction outside 95% confidence interval =',
         numBad/numTrials)
   ```

   

