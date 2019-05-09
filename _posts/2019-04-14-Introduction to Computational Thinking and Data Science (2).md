---

title: Introduction to Computational Thinking and Data Science(2)

key: B20190414

tags: python; plotting; stochastic thinking; random walk

layout: article
---

# Week Two: Introduction to Computational Thinking and Data Science(2)

<!--more-->

1. # [Plotting](<https://suntarliarzn.github.io/2019/03/14/Introduction-to-computer-science-and-programming-using-Python(7).html>)

2. # Stochastic Thinking

   1. ## Stochastic Processes

      > An ongoing process where the next state might depend on both the previous states and **some random element**

      ```python
      import random
      random.seed(0) #用于指定随机数生成时所用算法开始的整数值，如果使用相同的seed( )值，则每次生成的随即数都相同，如果不设置这个值，则系统根据时间来自己选择这个值，此时每次生成的随机数因时间差异而不同。
      def rolldice():
          return random.choice([1,2,3,4,5,6]) # return a interger randomly each time calls it.
      ```

      - ### [`random`函数](<https://www.jb51.net/article/130368.htm>)

        ```python
        import random
        
        print( random.randint(1,10) )        # 产生 1 到 10 的一个整数型随机数  
        print( random.random() )             # 产生 0 到 1 之间的随机浮点数
        print( random.uniform(1.1,5.4) )     # 产生  1.1 到 5.4 之间的随机浮点数，区间可以不是整数
        print( random.choice('tomorrow') )   # 从序列中随机选取一个元素
        print( random.randrange(1,100,2) )   # 生成从1到100的间隔为2的随机整数
        
        a=[1,3,5,6,7]                # 将序列a中的元素顺序打乱
        random.shuffle(a)
        print(a)
        ```

        

      - exercise 4

        ```python
        ​```
        Are the following two distributions equivalent?
        Yes
        ​```
        
        import random
        def dist1():
            return random.random() * 2 - 1
        
        def dist2():
            if random.random() > 0.5:
                return random.random() #not the same random.random() in if clause!
            else:
                return random.random() - 1 
        ```

   2. ### Simulation Models

      - A description of computations that provide useful information about the possible behaviors of the system being modeled

      - **Descriptive**, not prescriptive in optimazation

      - **Only an approximation to reality**

      - > "All models are wrongm but some are useful."---George Box, American Statistician

      - Useful:

        - To model systems that are mathematically intractable
        - To extract useful intermediate results
        - Lend themselves to development by successive
          refinement and “what if” questions

      - **Random Walks**

        ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%202/random%20walk.jpg)

   3. ### Random Walk

      1. Presented a related collection of data abstractions

         - Location
         - Field
         - Drunk
           - UsualDrunk
           - ColdDrunk

      2. 3 structuring simulations

         1. Simulate one walk of k steps

         2. Simulate n suck walks
         3. Report aggregated results

         ```python
         # -*- coding: utf-8 -*-
         """
         Created on Tue Apr 16 10:57:14 2019
         
         @author: Administrator
         """
         
         import random
         import pylab as pl
         
         class Location(object):
             def __init__(self, x, y):
                 self.x = x
                 self.y = y
             def move(self, movex, movey):
                 return Location(self.x + movex, self.y + movey)
             def getx(self):
                 return self.x
             def gety(self):
                 return self.y
             def distFrom(self,other):
                 ox = other.x
                 oy = other.y
                 distFromx = ox - self.x
                 distFromy = oy - self.y
                 return (distFromx**2 + distFromy**2)**0.5
             def __str__(self):
                 return '<' + self.x +','+self.y + '>'
         
         class Field(object):
             def __init__(self):
                 self.drunklist = {}
             def addDrunk(self,drunk,loc):
                 if drunk not in self.drunklist:
                     self.drunklist[drunk] = loc
             def moveDrunk(self,drunk):
                 xvalue,yvalue = drunk.takesteps()
                 currentLocation = self.drunklist[drunk]
                 self.drunklist[drunk] = currentLocation.move(xvalue,yvalue)
             def getLoc(self,drunk):
                 return self.drunklist[drunk]
         class Drunk(object):
             def __init__(self,name = None):
                 self.name = name
             def __str__(self):
                 return 'This drunk is named' + self.name
         
         class UsualDrunk(Drunk):
             def takesteps(self):
                 stepChoices = [(0,1), (0,-1), (1, 0), (-1, 0)]
                 return random.choice(stepChoices)
         
         class ColdDrunk(Drunk):
             def takesteps(self):
                 stepChoices = [(0.0,0.9), (0.0,-1.1),
                                (1.0, 0.0), (-1.0, 0.0)]
                 return random.choice(stepChoices)         
                 
         def walk(f,d,numsteps):
             start = f.getLoc(d)
             for s in range(numsteps):
                 f.moveDrunk(d)
             return start.distFrom(f.getLoc(d))
         
         def Simwalk(numSteps,numTrials, dclass):
             Homer = dclass()
             Origin = Location(0,0)
             distances = []
             for i in range(numTrials):
                 f = Field()
                 f.addDrunk(Homer,Origin)
                 distances.append(round(walk(f,Homer,numSteps),1))
             return distances
         
         def drunkTest(walklenths,numTrials,dclass):
             for numSteps in walklenths:
                 distances = Simwalk(numSteps, numTrials, dclass)
                 print(dclass.__name__, 'random walk of', numSteps, 'steps')
                 print('Mean =', round(sum(distances)/len(distances),4))
                 print('Max = ', max(distances), 'Min = ', min(distances))
         
         random.seed(0)
         drunkTest((10,100,1000,10000), 100, UsualDrunk)
             
                 
             
                 
         ```


