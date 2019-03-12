---

title: Introduction to Computer Science and Programming Using Python(6)

key: B20190303

tags: Complexity; Big Oh Notation; Fib complexity; Algorithmic Search; Bisection Search; Sorting; Bubble Sorting; Monkey Sorting; Merge Sorting; Selection Sorting 

layout: article
---

# Week Six: Algorithmic Complexity

<!--more-->

## 1.  Order of growth

1. ### 3 ways to go

   ![3 ways](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/3%20ways%20to%20go.jpg)

2. ### Need a better way

   ![need a better way](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/still%20need%20a%20better%20way.jpg)

3. ### Best, Average, Worst cases

   ![best, average,worst cases](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/best%2Caverage%2C%20worst%20cases.jpg)

4. ### Orders of Growth

   ![orders of growth](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/goals.jpg)

5. ### Types of Orders of Growth

   ![types of orders of growth](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/types%20of%20growth.jpg)

## 2.  Big Oh Notation

1. ### Big Oh

   - worst case
   - rate of growth of program relative to the input size

2. ###  Example

   ![example](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/exapmles%20of%20class%20methods%20%20instances.gif)

3. ### Complexity Classes Ordered low to high

   ![low to high](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/order%20low%20to%20high.jpg)

4. ### Laws

   - law of addition: O(n)+O(n*n) = O(n^2)
   - law of multiplication: O(n)*O(n) = O(n^2)

5. ###  Complexity Classes

   <video id="video" controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/order%20low%20to%20high.jpg">
         <source id="mp4" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Analyzing%20Complexity.mp4" type="video/mp4">
       <iframe width="560" height="315" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Analyzing%20Complexity.mp4" frameborder="0" allowfullscreen></iframe>
         </video>
   

6. ### Exponential Complexity

   - most time-consuming one
   - Recursive:Hanoi tower

   ![Exponential Complexity](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/Week%206/EXPONENTIAL%20COMPLEXITY.jpg)

   [^]: 迭代（iteration）在原有知识上不断更新，但基本架构不变。
   [^]: 递归（recursion）回归起点，重新梳理原有知识，重新架构，并更新。（更花时间，但有效率提升的可能性）

   

   

7. ### Recursion Complexity

   - fib recursion

     ![Fib Recursion](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/Week%206/Fib%20recurs%20code.jpg)

   - Fib with a dict

     ![fib with a dict](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/Week%206/fib%20with%20a%20dict.jpg)

   - **Complexity of Iterative Fib**

     ![complexity of iterative fib](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/Week%206/com%20of%20iter%20fib.jpg)

   - **Complexity of Recursive Fib**

     ![complexity of recursive fib](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/Week%206/con%20of%20rec%20fib.jpg)

8. **Complexity of Common Python Functions**

   ![Complexity of Common Python Functions](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/Week%206/com%20of%20python%20functions.jpg)



## 3. Search Algorithms

1. ### Linear search

2. ### Bisection search

   - Sorted List

   - **Cutting down the size of the problem in half!!**

   - complexity = O(logn)

   - 2 Bisection Search Implementation

     ```python
     def bisect_search1(L, e):
         if L == []:
             return False
         elif len(L) == 1:
             return L[0] == e
         else:
             half = len(L)//2
             if L[half] > e:
                 return bisect_search1( L[:half], e)
             else:
                 return bisect_search1( L[half:], e)
     
     
     
     def bisect_search2(L, e):
         def bisect_search_helper(L, e, low, high):
             if high == low:
                 return L[low] == e
             mid = (low + high)//2
             if L[mid] == e:
                 return True
             elif L[mid] > e:
                 if low == mid: #nothing left to search
                     return False
                 else:
                     return bisect_search_helper(L, e, low, mid - 1)
             else:
                 return bisect_search_helper(L, e, mid + 1, high)
         if len(L) == 0:
             return False
         else:
             return bisect_search_helper(L, e, 0, len(L) - 1)
     ```

     ![two implementations](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/Week%206/Complexity%20of%202%20bisection%20implementation.jpg)

3. ### sorting

   1. ### Monkey Sort

      - **bogosort** also known as **permutation sort**, **stupid sort**,**slowsort**,**shotgun sort** or **monkey sort**) 
      - a **highly ineffective sorting** algorithm based on the generate and test paradigm. 
      - The function **successively generates permutations** of its input until it finds one that is sorted. 
      - It is not useful for sorting, but may be used for educational purposes, to contrast it with more efficient algorithms.

   2. ### Bubble Sort

      - compare consecutive pairs of elements

      - swap elements in pair such that smaller is first

      - when reach end of list, start over again

      - stop when no more swaps have been made

      - ```python
        def bubble_sort(L):
            swap = False
            while not swap:
                swap = True
                for j in range(1,len(L)):
                    print(L)
                    if L[j] < L[j-1]:
                        temp = L[j]
                        L[j] = L[j-1]
                        L[j-1] = temp
                        swap = False
        
        L = [1, 5, 3, 8, 4, 9, 6, 2]
                        
        ```

        

   3. ### Selection Sort

      - ![Selection Sort idea](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/Week%206/selection%20sort.jpg)

      - ```python
        def Selection_sort(L):
            suffix = 0
            while suffix != len(L):
                for i in range(suffix, len(L)):
                    if L[i] < L[suffix]:
                        temp = L[i]
                        L[i] = L[suffix]
                        L[suffix] = temp
                suffix += 1
                print(L)    
        L = [1, 5, 3, 8, 4, 9, 6, 2]
        ```

        

   4. ### Merge Sort

      - go through two lists

      - compare only **smallest elements in each sublist**

      - ![Merge Sort](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/Week%206/merge%20sort.jpg)

      - overall complexity is O(n*log(n))

      - ```python
        import operator
        
        def mergeSort(L, compare = operator.lt):
            if len(L) < 2:
                return L[:]
            else:
                middle = int(len(L)/2)
                left = mergeSort(L[:middle], compare)
                right = mergeSort(L[middle:], compare)
                print(left)
                print(right)
                return merge(left, right, compare)
        
        def merge(left, right, compare):
            result = []
            i,j = 0, 0
            while i < len(left) and j < len(right):
                if compare(left[i], right[j]):
                    result.append(left[i])
                    i += 1
                else:
                    result.append(right[j])
                    j += 1
            while (i < len(left)):
                result.append(left[i])
                i += 1
            while (j < len(right)):
                result.append(right[j])
                j += 1
            return result
        
        L = [1, 5, 3, 8, 4, 9, 6, 2]
        ```

   5. ### Sorting Summary

      ![Summary](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/Week%206/Sorting%20Summary.jpg)

