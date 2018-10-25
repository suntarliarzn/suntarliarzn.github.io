---

title: MIT 6.00.1x
Introduction to Computer Science and Programming Using Python(2)

key: B20180919

tags: strings; floats; function； Files

layout: article
---

# Week two: Simple Programs

1. ## Slice strings using[start:stop:step]

   ```python
   s = 'abcdefgh'
   s[::-1] #evaluates to 'hgfedcba'
   s[3:6] #evaluates to 'def'
   s[-1] #evaluates to 'h'
   ```

2. ## Floating Point Arithmetic: Issues and Limitations

   No matter how many base 2 digits you’re willing to use, the decimal value 0.1 cannot be represented exactly as a base 2 fraction. In base 2, 1/10 is the infinitely repeating fraction

   ```python
   0.0001100110011001100110011001100110011001100110011...
   ```

   t’s important to realize that this is, in a real sense, an illusion: you’re simply rounding the *display* of the true machine value.

   One illusion may beget another. For example, since 0.1 is not exactly 1/10, summing three values of 0.1 may not yield exactly 0.3, either:

   \>>>

   ```python
   >>> .1 + .1 + .1 == .3
   False
   ```

   Also, since the 0.1 cannot get any closer to the exact value of 1/10 and 0.3 cannot get any closer to the exact value of 3/10, then pre-rounding with [`round()`](https://docs.python.org/3/library/functions.html#round) function cannot help:

   \>>>

   ```python
   >>> round(.1, 1) + round(.1, 1) + round(.1, 1) == round(.3, 1)
   False
   ```

   Though the numbers cannot be made closer to their intended exact values, the [`round()`](https://docs.python.org/3/library/functions.html#round)function can be useful for post-rounding so that results with inexact values become comparable to one another:

   \>>>

   ```python
   >>> round(.1 + .1 + .1, 10) == round(.3, 10)
   True
   ```

   References: https://docs.python.org/3/tutorial/floatingpoint.html

3. ## Scope Example

   1. ```python
      def f(y):
          x = 1
          x += 1
          print(x)
      
      x = 5
      f(x) # f(x) = 2
      print(x) # 5
      
      ```

   2. ```python
      def g(y):
          print(x)
          print(x+1)
      
      x = 5
      g(x) # Print(5), Print(6)
      print(x) # 5
      
      ```

   3. ```python
      def h(y):
          x = x + 1
      
      x = 5
      h(x) #x = x + 1
      UnboundLocalError: local variable 'x' referenced before assignment
      
      print(x)
      
      # When you do x = 'abc' it simply binds 'abc' to the name x and treat x as a local variable within the local scope, no looking up needed.
      
      #But when you do x = x + 1 like the h(y) example in the video, the right hand side is evaluated first, it starts looking for x in the current scope, and it finds a binding of x in the current scope which is x = x + 1, so x is a local variable that is referenced before it is bound, hence the error.
      
      #When you call print(x)in the g(y) example in the video, it looks for x in the current scope, nothing is found, so it looks to x from the global scope and prints it. No rule is violated.
      
      #When you call print(x)in the example of f() above, it looks for x in the current scope, it actually finds the binding x = 'abc', so x is a local variable that is referenced before it is bound, hence the error.
      ```

4. #### Aspects of LANGUAGES

   <em>numbers,strings,simple operations.</em>>

   - **syntax**

     - **English**:"Cat dog boy" > not syntactically valid

       ​               "Cat hugs boy" > syntactically valid

     - **Programming language**: "hi" * 5 > not syntactically valid

        		                               3.2 * 5 > syntactically valid

5. ## where things go wrong

   - syntactic errors
   - static semantic errors
   - no semantic errors but **different meaning than what programmer intended**

6. ## Objects

   - Programs manipulate **data objects**

   - Objects have a ==**type**== that defines the kinds of things programs can do to them.

   - objects are

     **scalar** (cannot be subdivided) 标量（有数值，无方向）

     **non-scalar**(have internal structure that can be accessed)

   - ### Scalar objects

     - int --- integers整数型:5
     - float --- real numbers浮点型: 3.27
     - bool--- BOOLEAN VALUES布尔型: True and False
     - NoneType --- special and has one value: None

7. ## 'for' loop

   ```python
   >>> for n in range(5):
   	print(n)
   
   	
   0
   1
   2
   3
   4  
   ```

8. ### **Iteration & Recursion**

   - a way to design solutions to problems by <em>**divide-and-conquer or decrease-and-conquer**.</em>

   - in programming, goal is to NOT have infinite recursion

     - must have <em>**1 or more base cases**</em> that are easy to solve
     - must solve the same problem on <em>**some other input**</em> with the goal of simplifying the larger problem input.

   - ##### Iteration

     ```python
     def mult_iter(a,b):
         result = 0
         while b > 0:
             result += a
             b = b -1
         return result
     ```

   - ##### Recursion

     ```python
     def mult(a,b):
         if b <= 1:
             return a
         else:
             return a + mult(a,b-1)
     ```

9. ### Modules

<em>a **module** is a `.py` file containing a collection Python definitions and statements</em>

```python
pi = 3.14159
def area(radius):
    return pi*(radius**2)
def circumference(radius):
    return 2*pi*radius
```

```python
import circle
pi = 3

print(pi)
print(circle.pi)
print(circle.area(3))

print(circle.circumference(3))
```

```python
from circle import *
print(pi)
print(area(3))
```

10. ### Files

<em>Python provides an operating-system independent means to access fies, using a **file handle**</em>

```python
nameHandle = open('kids', 'w') #'kids' is the file name; 'w' means writing.
```

**Files Write Example**

```python
nameHandle = open('kids.doc','w')
for i in range(2):
    name = input ('Enter name:')
    nameHandle.write(name + '\\')
nameHandle.close()
                     
```

**Files Read Example**

```python
nameHandle = open('kids.py', 'r')
for line in nameHandle:
    print(line)
nameHandle.close()
```

