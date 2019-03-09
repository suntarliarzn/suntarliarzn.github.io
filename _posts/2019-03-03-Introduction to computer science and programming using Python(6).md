---

title: Introduction to Computer Science and Programming Using Python(6)

key: B20190303

tags: Complexity; Big Oh Notation; Fib complexity   

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

   <video id="video" controls="" preload="none" poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/order%20low%20to%20high.jpg">
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

     !(Fib Recursion)[https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/Week%206/Fib%20recurs%20code.jpg]

   - Fib with a dict

     ![fib with a dict](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/Week%206/fib%20with%20a%20dict.jpg)

   - **Complexity of Iterative Fib**

     ![complexity of iterative fib](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/Week%206/com%20of%20iter%20fib.jpg)

   - **Complexity of Recursive Fib**

     ![complexity of recursive fib](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/Week%206/con%20of%20rec%20fib.jpg)

8. **Complexity of Common Python Functions**

   ![Complexity of Common Python Functions](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Introduction%20to%20Python/Week%206/com%20of%20python%20functions.jpg)

   