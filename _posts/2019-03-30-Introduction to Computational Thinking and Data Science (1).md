---

title: MIT 6.00.2x
Introduction to Computational Thinking and Data Science(1)

key: B20190303

tags: python; 0/1 Knapsack Problem; Greedy Algorithm; Brute Force Algorithm

layout: article
---

# Week one: Introduction to Computational Thinking and Data Science(1)

1. # Optimization and the Knapsack Problem

   1. ## 0/1 Knapsack Problems

      - ### Optimization Model

        - **An objective function** that is to be **maximized or minimized**:
          - Minimize time spent traveling from NY to Boston
        - **A set of constraints** (possibly empty) that must be honored:
          - Can not spend more than $100
          - Must be in Boston before 5:00 p.m.

      - ### Knapsack problem

        ![Knapsack Problem](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%201/knapsack%20problem.jpg)

        - variables:`I[<value,weight>]`

        - `L`: the set of available itmes

        - `V`: value(0,1) to indicate whether or not items are taken.

        - Find a L that maximizes(both):
          $$
          \sum_{i=0}^{n-1}V[i]*I[i].value
          $$

          $$
          \sum_{i=0}^{n-1}V[i]*I[i].weight<W limit
          $$

   2. ## Greedy Algorithms

      - put the **best** available item in knapsack

      - **best** mean:

        - Most valuable?
        - Least expensive?
        - Highest value/units?

      - ```python
        # -*- coding: utf-8 -*-
        """
        Created on Sat Mar 30 11:31:52 2019
        
        @author: Administrator
        """
        
        class Food(object):
            def __init__(self, item, value, calories):
                self.item = item
                self.value = value
                self.calories = calories
            def getValue(self):
                return self.value
            def getCalories(self):
                return self.calories
            def density(self):
                return self.getValue()/self.getCalories()
            def __str__(self):
                return self.item +':<' + str(self.value)+','+ str(self.calories) + '>'
        
        def buildMenu(items, values, calories):
            menu=[]
            for i in range(len(values)):
                menu.append(Food(items[i],values[i],calories[i]))
            return menu
        
        def greedy(items, maxCost, keyFunction):
            itemsCopy = sorted(items, key= keyFunction, reverse = True)
            result = []
            totalValue, totalCost = 0.0, 0.0
            for i in range(len(itemsCopy)):
                if (totalCost + itemsCopy[i].getCalories()) <= maxCost:
                    result.append(itemsCopy[i])
                    totalValue += itemsCopy[i].getValue()
                    totalCost += itemsCopy[i].getCalories()
            return (result, totalValue)
        
        def testGreedy(items, constraint, keyFunction):
            taken, val = greedy(items, constraint, keyFunction)
            print('Total value of items taken =', val)
            for item in taken:
                print('', item)
        
        def testGreedys(foods, maxUnits):
            print('Use greedy by value to allocate', maxUnits,
                  'calories')
            testGreedy(foods, maxUnits, Food.getValue)
            print('\nUse greedy by cost to allocate', maxUnits,
                  'calories')
            testGreedy(foods, maxUnits,
                       lambda x: 1/Food.getCalories(x))
            print('\nUse greedy by density to allocate', maxUnits,
                  'calories')
            testGreedy(foods, maxUnits, Food.density)
        
        
        items = ['wine', 'beer', 'pizza', 'burger', 'fries',
                 'cola', 'apple', 'donut', 'cake']
        values = [89,90,95,100,90,79,50,10]
        calories = [123,154,258,354,365,150,95,195]
        foods = buildMenu(items, values, calories)
        testGreedys(foods, 1000)
        ```

      - **lambda**

        - lambda<id1,id2,...idn>:<expression>

        - ```python
          lambda x: x-1
          Out[1]: <function __main__.<lambda>(x)>
          
          f1 = lambda x : x-1
          
          f1(3)
          Out[3]: 2
          
          f2 = lambda x,y: x+y
          
          f2(3,4)
          Out[5]: 7
          
          f3 = lambda x,y: 'factor' if (x%y ==0) else 'not factor'
          
          f3(5,8)
          Out[7]: 'not factor'
          
          f3(3,9)
          Out[8]: 'not factor'
          
          f3(9,3)
          Out[9]: 'factor'
          ```

          

2. # Decision Trees and Dynamic Programming

   1. ## Brute Force Algorithms

      1. **Search Tree**:  run through all 0/1 possibility

      2. 0/1 Knapsack problem

         ![Decision Tree](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/introduction%20to%20computational%20thinking%20and%20data%20science/week%201/decision%20tree.jpg)

         ```python
         def maxValue(listitems, avail):
             if listitems == [] or avail == 0:
                 result= (0,())
             elif listitems[0].getCost()  > avail: #fisrt item exceeds the calorie limit
                 result = maxValue(listitems[1:], avail) #set the constraints
             else:
                 item = listitems[0] # take the first item out
                 totalleftValue, lefttaken = maxValue(listitems[1:], avail - item.getCost()) # take the left branch
                 totalleftValue += item.getValue()
                 totalrightValue, righttaken = maxValue(listitems[1:], avail) # take the right branch recursively
                 if totalleftValue > totalrightValue: # top-down to the deepest level and compare value
                     result = (totalleftValue, lefttaken +(item,))  # return the best approach with the first item
                 else:
                     result = (totalrightValue, righttaken) # return the best aprroach without the first item
             return result
         
         def testmaxValue(foods, maxUnits):
             print('Use search tree to allocate', maxUnits,
                   'calories')
             val, taken = maxValue(foods, maxUnits)
             print('Total value of items taken =', val)
             for item in taken:
                 print('   ', item)
         ```

      3. [位运算（exercise 1）](<https://www.jianshu.com/p/25ddeb1d9adf>)

         ```python
         # generate all combinations of N items
         def powerSet(items):
             N = len(items)
             # enumerate the 2**N possible combinations
             for i in range(2**N):
                 combo = []
                 for j in range(N):
                     # test bit jth of integer i
                     if (i >> j) % 2 == 1:
                         combo.append(items[j])
                 yield combo
                 
         def yieldAllCombos(items):
             """
                 Generates all combinations of N items into two bags, whereby each 
                 item is in one or zero bags.
         
                 Yields a tuple, (bag1, bag2), where each bag is represented as a list 
                 of which item(s) are in each bag.
             """
             N = len(items)
             for i in range(3**N):
                 bag1 = []
                 bag2 = []
                 for j in range(N):
                     if (i // 3**j) % 3 == 0:
                         bag1.append(items[j])
                     if (i // 3**j) % 3 == 1:
                         bag2.append(items[j])
                 yield bag1, bag2
         ```

         

         > This is a hard exercise indeed. But things will be much easier when you know the following.
         >
         > Let's assume we have 8 digits, each digit can hold either 1 or 0, how many combinations can be made ? .. let's draw a table :
         >
         > ```
         > d8    d7    d6    d5    d4    d3    d2    d1
         > 0     0     0     0     0      0      0     0
         > 0     0     0     0     0      0      0     1
         > 0     0     0     0     0      0      1     0
         > 0     0     0     0     0      0      1     1
         > 0     0     0     0     0      1      0     0
         > 0     0     0     0     0      1      0     1
         > ..
         > ..
         > ..
         > 1     1     1     1     1      1      1     1
         > ```
         >
         > The number or rows (which is the same as the number of different combinations) is equal to 2**8 (8 is the number of digits).
         >
         > So, basically .. until now we are just talking about the number of combinations. However, this is well related to binary numbering system.
         >
         > In binary system, a number is represented in 1's and 0's. The digits have weights which mean, the number under d8 in the previous example will be multiplied by 128 (so if under d8 there is 1, it will worth 128, otherwise it will worth 0) .. and the number under d7 will be multiplied by 64 .. the multiplicands are powers of 2 and are decreasing from left to right .. until d1 which is multiplied by 1 (2**0). So what we get if all the 8 digits are 1's ? 1*128 + 1*64 + 1*32 + 1*16 + 1*8 + 1*4 + 1*2 + 1*1 = 255. So, how many numbers can be represented in those 8 digits ? actually it's the same questions as "how many combinations can be made using 8 digits" and the answer is 2**8.
         >
         > If you understand what I have said so far, then the rest will be easy.
         >
         > The code in *powerSet* make use of this similarity between binary numbers and the idea of the number of combinations. So, if we have N items, we could have 2**N different combinations, we can also represent each combination using a different binary number represented in N digits.
         >
         > So if the items are pizza, cheese, apple, water, juice, meat, egg, rice we can write the table again but a little bit different
         >
         > ```
         > pizza   cheese   apple   water   juice   meat   egg   rice
         > 0       0        0       0       0       0      0     0
         > 0       0        0       0       0       0      0     1
         > 0       0        0       0       0       0      1     0
         > 0       0        0       0       0       0      1     1
         > 0       0        0       0       0       1      0     0
         > ...
         > ...
         > 1       1        1       1       1       1      1     1
         > ```
         >
         > 1 means that we will take that item, 0 means that we won't take it. At the same time, we can represent each different combination by it's corresponding binary value. So taking "rice" only is equal to 1, taking rice and egg is equal to 3 .. and etc.
         >
         > So what does the code says ? First, it iterates through all 2**N possible combinations (possible binary numbers) Second, for each combination of them (represented in its binary form) check for the 1's inside the number and add the corresponding items to the *combo* list. But how does it do it ? In a very smart way.
         >
         > The shift operator >> shifts all digits to the right X times, where X is the number on the right of the >> operator. For example, 8 (which is equal to 1000) >> 1, will shift the 4 digits 1 step to the right to be (0100) which is equal to 4. Even numbers in binary always have 0 as the first digit on the right whereas odd numbers have 1 as the first number on the right. So, 8 (1000) has 0 on the right .. when we shift it right by 1 .. 4(0100) has 0 on the right, 2(0010) has 0 on the right .. 1(0001) has 1 on the right. So, if we check if the number is **odd** or not, we can know if there is 1 on the right or not.
         >
         > Using this idea, the code tries to shift each different combination by numbers from 0 to N, each time it checks if it's odd or not by checking if there's a remainder of 1 (if (i >> j) % 2 == 1) .. if so, then the number of times we shifted the current combination (j in this case) is the original position of the 1 in the combination .. which we can use as an index for the corresponding item we want to take.
         >
         > So if the current combination is 1000 (8) and by shifting it 3 times to the right we have 0001 which is odd, we know that 1 in 1000 is the 3rd bit (starting from 0 from the right to the left). if the list of items are [rice, meat, egg, juice] then items[3] is juice.
         >
         > So, for each different combination, we use the binary representation of that combination and use the previous method to search for the 1's in the number and add the corresponding items to the list of the items to be taken.
         >
         > It's quite long and complex especially for those who never got exposed to binary numbers before .. but this is the trick.
         >
         > The solution to the exercise is quite tricky .. I'm not going to post anything about it here but the idea is so similar but is still tricky.
         >
         > Good luck.       

   2. ### Recursive Fib

      - Recursive Fibonnaci

        ```python
        def fib(n):
            if n == 0 or n == 1:
                return 1
            else:
                return fib(n-1) + fib(n-2)
        ```

        

      - Without a dictionary, it takes a long time:
      ```python
        def testmaxValue(foods, maxUnits):
         print('Use search tree to allocate', maxUnits,
          'calories')
         val, taken = maxValue(foods, maxUnits)
         print('Total value of items taken =', val)
         for item in taken:
        print('   ', item)
        
        import random
        def buildLargeMenu(numItems, maxVal, maxCost):
            items = []
            for i in range(numItems):
                items.append(Food(str(i),random.randint(1,maxVal), random.randint(1,maxCost)))
            return items
        
        for numItems in (5, 10, 15, 20, 25, 30, 35, 40, 45):
            print('Try a menu with', numItems, 'items')
            items = buildLargeMenu(numItems, 90, 250)
            testmaxValue(items, 750)
        
      ```

   3. ### Dynamic Programming

      - Fibonnaci  with dictionary 

        [^]: memoization

        

        ```python
        def fib_efficient(n,d):
            if n in d:
                return d[n]
            else:
                ans = fib_efficient(n-1,d) + fib_efficient(n-2,d)
                d[n] = ans
                return ans
        
        d = {1:1, 2:2}  
            
        ```

        

      - **memoization**

        - Trade a time for space

          [^Philosophy]: Time and Space

        - Create a dictionary to record what we've done.

          [^Paper topics]:  Memoization in translation processing

          

        - Prerequisite:

          - **Optimal substructure**: a globally optimal solution to local subproblems(recursive calls)

          - **Overlapping subproblems:** solving the same problem multiple times or the computation takes the same path.(available weight)

      - **Knapsack  0/1 Problem Exercise** 

        ```python
        import random
        def buildLargeMenu(numItems, maxVal, maxCost):
            items = []
            for i in range(numItems):
                items.append(Food(str(i),random.randint(1,maxVal), random.randint(1,maxCost)))
            return items
        
        def fastMaxVal(toConsider, avail, memo={}):
            if (len(toConsider), avail) in memo: #(items left to be considered, available weight)
                result = memo[(len(toConsider), avail)]
            elif toConsider == [] or avail == 0:
                result = ((),0)
            elif toConsider[0].getCost() > avail:
                result = fastMaxVal(toConsider[1:], avail, memo)
            else:
                item = toConsider[0]
                taken, values = fastMaxVal(toConsider[1:], avail-item.getCost(), memo)
                values += item.getValue()
                nottaken, notvalues = fastMaxVal(toConsider[1:], avail, memo)
                if values > notvalues:
                    result = (taken +(item,), values)
                else:
                    result = (nottaken, notvalues)
            memo[(len(toConsider), avail)] = result
            return result
                   
        def testMaxVal(foods, maxUnits, algorithm):
            print('Menu contains', len(foods), 'items')
            print('Use search tree to allocate', maxUnits,
                  'calories')
            taken,val  = algorithm(foods, maxUnits)
            print('Total value of items taken =', val)
            for item in taken:
                print('   ', item)
                    
        for numItems in (5, 10, 15, 20, 25, 30, 35, 40, 45, 50,900):
            items = buildLargeMenu(numItems, 90, 250)
            testMaxVal(items, 750, fastMaxVal)
        ```

        

  ​           



3. # Graph Problems

   1. ## Graph Model

      - Set of **nodes (vertices)**
        ◦ Might have properties associated with them
      - Set of **edges (arcs)** each consisting of a pair of nodes
        ◦ Undirected (graph)
        ◦ Directed (digraph)
        ◦ Source (parent) and destination (child) nodes
        ◦ Unweighted or weighted

   2. ##  Path Optimization

      - Adjacency matrix

        - Rows: source nodes
        - Columns: destination nodes
        - Cell[s,d] = 1/values/lists[] if there is an edge from s to d, otherwise 0

      - Adjacency list

        - Associate with each node a list of destination nodes

        ```python
        class Node(object):
            def __init__(self,name):
                self.name = name
            def getName(self):
                return self.name
            def __str__(self):
                return self.name
        
        class Edge(object):
            def __init__(self, src, dest):
                self.src = src
                self.dest = dest
            def getSource(self):
                return self.src
            def getDestination(self):
                return self.dest
            def __str__(self):
                return self.src.getName() + '->' + self.dest.getName()
        
        class Digraph(object):
            def __init__(self):
                self.edges = {} #a dictionary maps values of node to lists of edge
            def addNode(self, node):
                self.edges[node] = []
            def addEdge(self, edge):
                src = edge.getSource()
                dest = edge.getDestination()
                self.edges[src].append(dest)
            def childrenOf(self, node):
                return self.edges[node]
            def getNode(self, name):
                for n in self.edges:
                    if n.getName() == name:
                        return n
                raise NameError(name)
            def __str__(self):
                result = ''
                for src in self.edges:
                    for dest in self.edges[src]:
                        result = result + src.getName() + '->'\
                                 + dest.getName() + '\n'
                return result[:-1] #omit final newline
        
        class Graph(Digraph):
            def addEdge(self, edge):
                rev = Edge(edge.getDestination(), edge.getSource())
                Digraph.addEdge(self, rev)
        
        
        def buildCityGraph(graphType):
            g = graphType()
            for name in ('Boston', 'Providence', 'New York', 'Chicago',
                         'Denver', 'Phoenix', 'Los Angeles'): #Create 7 nodes
                g.addNode(Node(name))
            g.addEdge(Edge(g.getNode('Boston'), g.getNode('Providence')))
            g.addEdge(Edge(g.getNode('Boston'), g.getNode('New York')))
            g.addEdge(Edge(g.getNode('Providence'), g.getNode('Boston')))
            g.addEdge(Edge(g.getNode('Providence'), g.getNode('New York')))
            g.addEdge(Edge(g.getNode('New York'), g.getNode('Chicago')))
            g.addEdge(Edge(g.getNode('Chicago'), g.getNode('Phoenix')))
            g.addEdge(Edge(g.getNode('Chicago'), g.getNode('Denver')))
            g.addEdge(Edge(g.getNode('Denver'), g.getNode('Phoenix')))
            g.addEdge(Edge(g.getNode('Denver'), g.getNode('New York')))
            g.addEdge(Edge(g.getNode('Los Angeles'), g.getNode('Boston')))
            return g
        
        print(buildCityGraph(Graph))
        ```

        

      - Shortest Path

        - Depth-first Search(DFS)

          - Similar to left-first depth-first method of tree search
          - **MAIN Difference**: have cycles

          ```python
          class Node(object):
              def __init__(self,name):
                  self.name = name
              def getName(self):
                  return self.name
              def __str__(self):
                  return self.name
          
          class Edge(object):
              def __init__(self, src, dest):
                  self.src = src
                  self.dest = dest
              def getSource(self):
                  return self.src
              def getDestination(self):
                  return self.dest
              def __str__(self):
                  return self.src.getName() + '->' + self.dest.getName()
          
          class Digraph(object):
              def __init__(self):
                  self.edges = {} #a dictionary maps values of node to lists of edge
              def addNode(self, node):
                  self.edges[node] = []
              def addEdge(self, edge):
                  src = edge.getSource()
                  dest = edge.getDestination()
                  self.edges[src].append(dest)
              def childrenOf(self, node):
                  return self.edges[node]
              def getNode(self, name):
                  for n in self.edges:
                      if n.getName() == name:
                          return n
                  raise NameError(name)
              def __str__(self):
                  result = ''
                  for src in self.edges:
                      for dest in self.edges[src]:
                          result = result + src.getName() + '->'\
                                   + dest.getName() + '\n'
                  return result[:-1] #omit final newline
          
          class Graph(Digraph):
              def addEdge(self, edge):
                  rev = Edge(edge.getDestination(), edge.getSource())
                  Digraph.addEdge(self, rev)
          
          
          def buildCityGraph(graphType):
              g = graphType()
              for name in ('Boston', 'Providence', 'New York', 'Chicago',
                           'Denver', 'Phoenix', 'Los Angeles'): #Create 7 nodes
                  g.addNode(Node(name))
              g.addEdge(Edge(g.getNode('Boston'), g.getNode('Providence')))
              g.addEdge(Edge(g.getNode('Boston'), g.getNode('New York')))
              g.addEdge(Edge(g.getNode('Providence'), g.getNode('Boston')))
              g.addEdge(Edge(g.getNode('Providence'), g.getNode('New York')))
              g.addEdge(Edge(g.getNode('New York'), g.getNode('Chicago')))
              g.addEdge(Edge(g.getNode('Chicago'), g.getNode('Phoenix')))
              g.addEdge(Edge(g.getNode('Chicago'), g.getNode('Denver')))
              g.addEdge(Edge(g.getNode('Denver'), g.getNode('Phoenix')))
              g.addEdge(Edge(g.getNode('Denver'), g.getNode('New York')))
              g.addEdge(Edge(g.getNode('Los Angeles'), g.getNode('Boston')))
              return g
          
          def printPath(path):
              """Assumes path is a list of nodes"""
              result = ''
              for i in range(len(path)):
                  result = result + str(path[i])
                  if i != len(path) - 1:
                      result = result + '->'
              return result 
          
          def DFS(graph, start, end, path, shortest, toPrint = False):
              path = path + [start]
              if toPrint:
                  print('Current DFS path:', printPath(path))
              if start == end:
                  return path
              for node in graph.childrenOf(start):
                  if node not in path: # avoid cycles
                      if shortest == None or len(path) < len(shortest):
                          newPath = DFS(graph, node, end, path, shortest, toPrint)
                          if newPath != None:
                              shortest = newPath
                  elif toPrint:
                      print('Already visited', node)
              return shortest
          
          def shortestPath(graph, start, end, toPrint = False):
              return DFS(graph, start, end, [], None, toPrint)
          
          def testSP(source, destination):
              g = buildCityGraph(Digraph)
              sp = shortestPath(g, g.getNode(source), g.getNode(destination),
                                toPrint = True)
             
              if sp != None:
                  print('Shortest path from', source, 'to',
                        destination, 'is' , printPath(sp))
              else:
                  print('There is no path from', source, 'to', destination)
          
          testSP('Boston', 'Phoenix')
          ```

        - Breadth-first Search(BFS)

          - store paths by using temppaths
          - cannot minimize the sum of the weights of the edges

          ```python
          def BFS(graph, start, end, toPrint = False):
              initPath = [start]
              pathQueue = [initPath] # stored  possible breadth pathes
              while len(pathQueue) != 0:
                  tmpPath = pathQueue.pop(0) #for each path, add nextNode till lastNode == end
                  print('Current BFS path:', printPath(tmpPath))
                  lastNode = tmpPath[-1]
                  if lastNode == end:
                      return tmpPath
                  else:
                      for nextNode in graph.childrenOf(lastNode):
                          newPath = tmpPath + [nextNode]
                          pathQueue.append(newPath)
              return None
              
          def shortestPath(graph, start, end, toPrint = False):
              """Assumes graph is a Digraph; start and end are nodes
                 Returns a shortest path from start to end in graph"""
              return BFS(graph, start, end, toPrint)
              
          testSP('Boston', 'Phoenix')
          ```

          