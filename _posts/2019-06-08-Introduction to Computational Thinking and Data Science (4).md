---

title: MIT 6.00.2x
Introduction to Computational Thinking and Data Science(4)

key: B20190608

tags: polyfit; R^2; Fitting for Data; Overfitting; Cross Validation;

layout: article

mathjax_autoNumber: true

---

# Introduction to Computational Thinking and Data Science(4)

*<!--more-->*

## 3.1 Fitting Curves to Data

1. ### Hook's Law

$$
F = -K * X
$$

$$
F = mass * acc
$$

胡克定律由R.胡克于1678年提出，表达式为F=-k·x或△F=-k·Δx，其中k是常数，是物体的[劲度系数](https://baike.baidu.com/item/劲度系数)（[倔强系数](https://baike.baidu.com/item/倔强系数)）（弹性系数）。在[国际单位制](https://baike.baidu.com/item/国际单位制)中，F的单位是牛，x的单位是米，它是形变量（[弹性形变](https://baike.baidu.com/item/弹性形变)），k的单位是牛/米。劲度系数在数值上等于弹簧伸长（或缩短）单位长度时的[弹力](https://baike.baidu.com/item/弹力)。

2. ###  Fitting Curves to Data

   1. Least squares

      ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%204/linear%20fit.jpg)
      $$
      \sum_i^{len(obserbved)-1}(observed[i]-predicted[i])^2
      $$
      
2. Polynomials(多项式表示Curve)
   
   - Line: `ax+b`
      - Parabola(U-shape): `ax**2 = bx +  c`
   
3. ### pylab.polyfit(x,y,n)
   
   - `polyfit(x,y,n)`多项式曲线拟合
   
     - `p = polyfit(x,y,n)` 返回阶数为 `n` 的多项式 `p(x)` 的系数，该阶数是 `y` 中数据的最佳拟合（在最小二乘方式中）。`p` 中的系数按降幂排列，`p` 的长度为 `n+1`。
   
   - `y = polyval(p,x)`多项式计算
   
     - `y = polyval(p,x)` 计算多项式 `p` 在 `x` 的每个点处的值。参数 `p` 是长度为 `n+1` 的向量，其元素是 `n` 次多项式的系数（降幂排序）
   
     ```python
        def fitData(fileName):
            xVals, yVals = getData(fileName)
            xVals = pylab.array(xVals)
            yVals = pylab.array(yVals)
            xVals = xVals*9.81 #get force
            pylab.plot(xVals, yVals, 'bo',
                       label = 'Measured  points')
            labelPlot()                 
            a,b = pylab.polyfit(xVals, yVals, 1) #返回最佳系数值
            estYVals = a*xVals + b #最佳系数值图形
            print('a =', a, 'b =', b)
            pylab.plot(xVals, estYVals, 'r',
                       label = 'Linear fit, k = '
                       + str(round(1/a, 5)))
            pylab.legend(loc = 'best')	
        ```
   
     ​	
   
3. ###  `R^2`---coefficient of determination

   $$
   R^2 = 1-{\frac{\sum_i(y[i]-p[i])^2}{\sum_i(y[i]-\mu)^2}}
   $$

   

   ```python
   def rSquared(observed, predicted):
       error = ((predicted - observed)**2).sum()
       meanError = error/len(observed)
       return 1 - (meanError/numpy.var(observed))
   ```

   

   - The coefficient of determination is a measure used in statistical analysis that assesses how well a model explains and predicts future outcomes. It is indicative of the level of explained variability in the data set. The coefficient of determination, also commonly known as "[R-squared](https://www.investopedia.com/terms/r/r-squared.asp)," is used as a guideline to measure the accuracy of the model.

     - The coefficient of determination is a complex idea centered on the statistical analysis of **a future model of data**.
     - The coefficient of determination is used to explain how much **variability of one factor** can be caused by its relationship to another factor.
- This correlation is known as the "[goodness of fit](https://www.investopedia.com/terms/g/goodness-of-fit.asp)." A value of 1.0 indicates a perfect fit, and it is thus a very reliable model for future forecasts, indicating that the model explains *all* of the variations observed. A value of 0, on the other hand, would indicate that the model fails to accurately model the data at all. For a model with several variables, such as a multiple regression model, the adjusted R2 is a better coefficient of determination. In economics, an R2 value above 0.60 is seen as worthwhile.

## 3.2 Fits for Data, Overfitting & Cross-Validation

- Model needs to be generalized, therefore the fittest on training data, did worst on out of sample.

- Learning the parameters of a prediction function and testing it on the same data is a methodological mistake: a model that would just repeat the labels of the samples that it has just seen would have a perfect score but would fail to predict anything useful on yet-unseen data. This situation is called **overfitting**.

  - Choosing an over-complex model can lead to overfitting to the training data.

  - Increases the risk of a model that works poorly on data not included in the training set.

    > everything should be made as simple as possible but not simpler.---Albert Einstein

- ### Cross-Validation

  - Use cross-validate results guide the choice of model complexity

    - If dataset small, use **leave-one-out cross validation**
    - If dataset large enough, use **k-fold cross validation** or **repeated-random-sampling validation**.

  - Cross Validation(CV)是一种评估模型性能的重要方法，主要用于在多个模型中（不同种类模型或同一种类不同超参数组合）挑选出在当前问题场景下表现最优的模型（model selection）。cv主要分为以下两类：

    - k折，K-fold

      k折交叉验证是最基本的cv方法，具体方法为，将训练集**随机**等分为k份，取其中一份为验证集评估模型，其余k-1份为训练集训练模型，重复该步骤k次，每次都取一份不同的子集为验证集，最终得到k个不同的模型（不是对一个模型迭代k次）和k个评分，综合这k个模型的表现（平均得分或其他）评估模型在当前问题中的优劣。

      ![K-fold](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%204/k-fold.png)

      k值的选取很有讲究，k越大，在训练集上的Bias就会越小，但训练集越大会导致Variance越大，同时花费的时间越长，所以选取适当大小的k很重要，经验值（empirical value）是k=10。

    - 留一法，Leave one out（LOO）

      留一法每次在训练集的N个样本中选一个不同的样本作为验证集，其余样本为训练集，训练得到N-1个不同的模型。LOOCV是特殊的K-fold，当K=N时，二者相同。

      

    - 重复随机抽样，Repeated Random Sampling(RRS)

      将样本集合随机“打散”后划分为训练集、测试集

      The [`ShuffleSplit`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit) iterator will generate a user defined number of independent train / test dataset splits. Samples are first shuffled and then split into a pair of train and test sets.

    

   <video id="video" controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%204/k-fold.png">
         <source id="mp4" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%204/cross%20validation.mp4">
       <iframe width="560" height="315" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%204/k-fold.png" frameborder="0" allowfullscreen></iframe>
    </video>

  ```python
  L = [0.59,18.38, 33.01, 54.14, 72.48, 89.8, 97.07, 112.6, 142.87, 199.84]
  A = [1,2,3,4,5,6,7,8,9,10]
  xVals = pylab.array(A)
  yVals = pylab.array(L)
  
  numSubsets = 10
  dimensions = [1,2,3,4,5]
  rSquares = {}
  for d in dimensions:
      rSquares[d] = []
  
  def splitData(xVals, yVals):
      toTrain = random.sample(range(len(xVals)),len(xVals)//2)
      trainX, trainY, testX, testY = [],[],[],[]
      for i in range(len(xVals)):
          if i in toTrain:
              trainX.append(xVals[i])
              trainY.append(yVals[i])
          else:
              testX.append(xVals[i])
              testY.append(yVals[i])
      return trainX, trainY, testX, testY
  for f in range(numSubsets):
      trainX, trainY, testX, testY = splitData(xVals,yVals)
      for d in dimensions:
          model = pylab.polyfit(trainX, trainY, d)
          estYVals = pylab.polyval(model, trainX)
          estYVals = pylab.polyval(model, testX)
          rSquares[d].append(r2_score(testY, estYVals))
  for d in dimensions:
      mean = round(sum(rSquares[d])/len(rSquares[d]), 4)
      sd = round(numpy.std(rSquares[d]), 4)
      print('For dimensionality', d, 'mean =', mean,
            'Std =', sd)
  ```

  