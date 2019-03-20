---
title: Introduction to Computer Science and Programming Using Python(7)

key: B20190314

tags: Visualization of Data; Plotting; Pylab; Summary; Computational Thinking

layout: article
---

# Week Seven: Plotting

<!--more-->

# 1.  Plotting

1. ## Visualization of data

   ```py
   import pylab as plt
   
   mySamples = []
   myLinear = []
   myQuadratic = []
   myCubic = []
   myExponential = []
   
   for i in range(0,30):
       mySamples.append(i)
       myLinear.append(i)
       myQuadratic.append(i**2)
       myCubic.append(i**3)
       myExponential.append(1.5**i)
       
   # first trial   
   plt.plot(mySamples, myLinear)
   plt.plot(mySamples, myQuadratic)
   plt.plot(mySamples, myCubic)
   plt.plot(mySamples, myExponential)
   ```

   ![plotting](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/visuliaztion%20of%20data.jpg)

2. ## Different Plots

   ```python
   import pylab as plt
   
   mySamples = []
   myLinear = []
   myQuadratic = []
   myCubic = []
   myExponential = []
   
   for i in range(0,30):
       mySamples.append(i)
       myLinear.append(i)
       myQuadratic.append(i**2)
       myCubic.append(i**3)
       myExponential.append(1.5**i)
       
   # second trial   
   plt.figure('lin')
   plt.plot(mySamples, myLinear)
   plt.figure('quad')
   plt.plot(mySamples, myQuadratic)
   plt.figure('cube')
   plt.plot(mySamples, myCubic)
   plt.figure('expo')
   plt.plot(mySamples, myExponential)
   ```

   ![different plots](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/plot%201%202.jpg)

   ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/plot%203%204.jpg)

3. ## label & title & clf 

   - **label**:横纵轴标签

   - **title**:表格标题

     ```python
     import pylab as plt
     
     mySamples = []
     myLinear = []
     myQuadratic = []
     myCubic = []
     myExponential = []
     
     for i in range(0,30):
         mySamples.append(i)
         myLinear.append(i)
         myQuadratic.append(i**2)
         myCubic.append(i**3)
         myExponential.append(1.5**i)
         
     # second trial   
     plt.figure('lin')
     plt.plot(mySamples, myLinear)
     plt.figure('quad')
     plt.plot(mySamples, myQuadratic)
     plt.figure('cube')
     plt.plot(mySamples, myCubic)
     plt.figure('expo')
     plt.plot(mySamples, myExponential)
     
     plt.figure('lin')
     plt.xlabel('Sample Points')
     plt.ylabel('myLinear')
     plt.title('Linear')
     
     plt.figure('quad')
     plt.xlabel('Sample Points')
     plt.ylabel('myQuad')
     plt.title('Quad')
     ```

     ![title](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/title.jpg)

   - **clf**:清除表格信息
   ```python
     import pylab as plt
     mySamples = []
     myLinear = []
     myQuadratic = []
     myCubic = []
     myExponential = []
   
     for i in range(0,30):
         mySamples.append(i)
         myLinear.append(i)
         myQuadratic.append(i2)
         myCubic.append(i3)
         myExponential.append(1.5**i)
         
         plt.figure('lin')
         plt.plot(mySamples, myLinear)
         plt.figure('quad')
         plt.plot(mySamples, myQuadratic)
         plt.figure('cube')
         plt.plot(mySamples, myCubic)
         plt.figure('expo')
         plt.plot(mySamples, myExponential)
   
         plt.figure('lin')
         plt.xlabel('Sample Points')
         plt.ylabel('myLinear')
         plt.title('Linear')
   
         plt.figure('quad')
         plt.xlabel('Sample Points')
         plt.ylabel('myQuad')
         plt.title('Quad')
   
         plt.figure('quad')
         plt.clf() #清除表格信息
   
   
   ```

   ![clf](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/clf.jpg)

4. ## lim & Overlaying & Legend

   - **lim**:限制横纵轴参数

     ```python
     import pylab as plt
     
     mySamples = []
     myLinear = []
     myQuadratic = []
     myCubic = []
     myExponential = []
     
     for i in range(0,30):
         mySamples.append(i)
         myLinear.append(i)
         myQuadratic.append(i**2)
         myCubic.append(i**3)
         myExponential.append(1.5**i)
         
     # second trial   
     plt.figure('lin')
     plt.plot(mySamples, myLinear)
     plt.figure('quad')
     plt.plot(mySamples, myQuadratic)
     plt.figure('cube')
     plt.plot(mySamples, myCubic)
     plt.figure('expo')
     plt.plot(mySamples, myExponential)
     
     plt.figure('lin')
     plt.xlabel('Sample Points')
     plt.ylabel('myLinear')
     plt.title('Linear')
     
     plt.figure('quad')
     plt.xlabel('Sample Points')
     plt.ylabel('myQuad')
     plt.title('Quad')
     
     plt.figure('quad')
     plt.clf()
     plt.ylim(0,1000)
     plt.plot(mySamples, myQuadratic)
     ```

     ![ylim](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/ylim.jpg)

   - **overlaying**:比较两个图表

     ```python
     import pylab as plt
     
     mySamples = []
     myLinear = []
     myQuadratic = []
     myCubic = []
     myExponential = []
     
     for i in range(0,30):
         mySamples.append(i)
         myLinear.append(i)
         myQuadratic.append(i**2)
         myCubic.append(i**3)
         myExponential.append(1.5**i)
         
     # second trial   
     plt.figure('lin')
     plt.plot(mySamples, myLinear)
     plt.figure('quad')
     plt.plot(mySamples, myQuadratic)
     plt.figure('cube')
     plt.plot(mySamples, myCubic)
     plt.figure('expo')
     plt.plot(mySamples, myExponential)
     
     plt.figure('lin')
     plt.xlabel('Sample Points')
     plt.ylabel('myLinear')
     plt.title('Linear')
     
     plt.figure('quad')
     plt.xlabel('Sample Points')
     plt.ylabel('myQuad')
     plt.title('Quad')
     
     plt.figure('quad')
     plt.clf()
     plt.ylim(0,1000)
     plt.plot(mySamples, myQuadratic)
     
     plt.figure('lin quad')
     plt.clf()
     plt.plot(mySamples, myLinear)
     plt.plot(mySamples, myQuadratic)
     plt.title('lin vs. quad')
     ```

     ![lin vs. quad](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/lin%20vs.%20quad.jpg)

   - **legend**:图例

     ```python
     import pylab as plt
     
     mySamples = []
     myLinear = []
     myQuadratic = []
     myCubic = []
     myExponential = []
     
     for i in range(0,30):
         mySamples.append(i)
         myLinear.append(i)
         myQuadratic.append(i**2)
         myCubic.append(i**3)
         myExponential.append(1.5**i)
         
     # second trial   
     plt.figure('lin')
     plt.plot(mySamples, myLinear)
     plt.figure('quad')
     plt.plot(mySamples, myQuadratic)
     plt.figure('cube')
     plt.plot(mySamples, myCubic)
     plt.figure('expo')
     plt.plot(mySamples, myExponential)
     
     plt.figure('lin')
     plt.xlabel('Sample Points')
     plt.ylabel('myLinear')
     plt.title('Linear')
     
     plt.figure('quad')
     plt.xlabel('Sample Points')
     plt.ylabel('myQuad')
     plt.title('Quad')
     
     plt.figure('quad')
     plt.clf()
     plt.ylim(0,1000)
     plt.plot(mySamples, myQuadratic)
     
     plt.figure('lin quad')
     plt.clf()
     plt.plot(mySamples, myLinear)
     plt.plot(mySamples, myQuadratic)
     plt.title('lin vs. quad')
     
     plt.figure('lin quad')
     plt.clf()
     plt.plot(mySamples, myLinear, label = 'linear')
     plt.plot(mySamples, myQuadratic, label = 'Quadratic')
     plt.legend(loc = 'upper left')
     ```

     ![legend](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/legend.jpg)

     

5. ## Changing Data Display

   - **color & style**:

     - `-`:line
     - `o`:circle
     - `^`:triange
     - `--`:dash

   - **linewidth**:线宽

     ```python
     import pylab as plt
     
     mySamples = []
     myLinear = []
     myQuadratic = []
     myCubic = []
     myExponential = []
     
     for i in range(0,30):
         mySamples.append(i)
         myLinear.append(i)
         myQuadratic.append(i**2)
         myCubic.append(i**3)
         myExponential.append(1.5**i)
         
     
     plt.figure('lin quad')
     plt.clf()
     plt.plot(mySamples, myLinear, 'b-', label = 'linear', linewidth = 4.0)
     plt.plot(mySamples, myQuadratic, 'r--', label = 'quadratic', linewidth = 1.0)
     ```

     ![color & width](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/color%20width.jpg)

   - **subplot**

     ![subplot](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/subplots.jpg)

     ```python
     import pylab as plt
     
     mySamples = []
     myLinear = []
     myQuadratic = []
     myCubic = []
     myExponential = []
     
     for i in range(0,30):
         mySamples.append(i)
         myLinear.append(i)
         myQuadratic.append(i**2)
         myCubic.append(i**3)
         myExponential.append(1.5**i)
         
     
     plt.figure('lin quad')
     plt.clf()
     plt.subplot(211)
     plt.ylim(0,900)
     plt.plot(mySamples, myLinear, 'g-', label = 'linear', linewidth = 2.0)
     plt.subplot(212)
     plt.ylim(0,1000)
     plt.plot(mySamples, myQuadratic, 'r--', label = 'quadratic', linewidth = 1.0)
     
     ```

     ![subplot](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/subplot%20frames.jpg)

   - **scale**

     ```python
     import pylab as plt
     
     mySamples = []
     myLinear = []
     myQuadratic = []
     myCubic = []
     myExponential = []
     
     for i in range(0,30):
         mySamples.append(i)
         myLinear.append(i)
         myQuadratic.append(i**2)
         myCubic.append(i**3)
         myExponential.append(1.5**i)
         
     
     plt.figure('cube exp log')
     plt.clf()
     plt.plot(mySamples, myCubic, 'g--', label = 'cubic', linewidth = 2.0)
     plt.plot(mySamples, myExponential, 'r', label = 'exponential', linewidth = 4.0)
     plt.yscale('log')
     plt.legend()
     plt.title('Cubic vs. Exponential')
     
     plt.figure('cube exp linear')
     plt.clf()
     plt.plot(mySamples, myCubic, 'g--', label = 'cubic', linewidth = 2.0)
     plt.plot(mySamples, myExponential, 'r', label = 'exponential', linewidth = 4.0)
     plt.legend()
     plt.title('Cubic vs. Exponential')
     ```

     ![scale log](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/scale%20log.jpg)

6. ## An Example---Retirement Saving

   1. ### compound interest

      ```python
      import pylab as plt
      
      def retirement(monthly, rate, terms):
          base = [0]
          value = [0]
          mrate = rate/12
          for i in range(terms):
              base += [i]
              value += [value[-1] * (1 + mrate) + monthly]
          return base, value 
      ```

      

   2. ### display retirement

      ```python
      def displayretirement(monthlies, rate, terms):
         plt.figure('retirement')
         plt.clf
         for i in monthlies:
             xvalue,yvalue = retirement(i, rate, terms)
             plt.plot(xvalue,yvalue, label = "retire:" + str(i))
             plt.legend(loc='upper left')
             
      displayretirement([400, 600, 800], 0.03, 30*12)
      ```

      

   3. ### display retirement rates

      ```python
      def displayretirementrate(monthly, rates, terms):
          plt.figure('retirement rate')
          plt.clf
          for i in rates:
              xvalue,yvalue = retirement(monthly, i, terms)
              plt.plot(xvalue,yvalue, label = "retirerate:" + str(i))
              plt.legend(loc = 'upper left')
             
      displayretirementrate(600, [0.03, 0.04, 0.05], 30*12)
      ```

      

   4. ### display both retirement

      ```python
      def displaybothretirement(monthlies, rates, terms):
          plt.figure('retirement monthlies rate')
          plt.clf
          plt.xlim(25*12, 30*12)
          monthlabels = ['r', 'b', 'g','k']
          ratelabels = ['-', 'o', '--']
          for i in range(len(monthlies)):
              month = monthlies[i]
              monthlabel = monthlabels[i % len(monthlies)] #循环赋值
              for j in range(len(rates)):
                  rate = rates[j]
                  ratelabel = ratelabels[j % len(ratelabels)] #循环赋值
                  xvalue,yvalue = retirement(month, rate, terms)
                  plt.plot(xvalue,yvalue, monthlabel+ratelabel,  label = "retire:" + str(month) + ':' +str(rate) ) #赋值线段属性
                  plt.legend(loc = 'upper left')
      
      
      displaybothretirement([400, 600, 800, 1000], [0.03, 0.04, 0.05], 30*12)
      
      ```

      

7. ## Course Summary

   - ### Topics covered

     - ![topics](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/topics.jpg)

   - ### Computational thinking

     - #### The process

       ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/computational%20thinking%20process.jpg)

     - #### 3 As

       ![abstraction automation algorithms]()

     - #### Think recursively!!!

       ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/think%20recursively.jpg)

   - ## One more thing

     ![Good Luck](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/week%207/good%20luck.jpg)

   

  







