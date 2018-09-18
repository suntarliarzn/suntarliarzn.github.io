---

title: Introduction to Computer Science and Programming Using Python

key: B20180916

tags: python; basics; knowledge

layout: article
---

# Week one: Introduction to Python

<!--more-->

1. ## What does a computer do?

   Calculations and Store

2. ## Types of Knowledge

   *Declarative knowledge* is **statements of fact**.

   *Imperative knowledge* is a **recipe** or "how-to" knowledge

3. ## What is a recipe?

   1. sequence of simple **steps**

   2. **flow of control** process that specifies when each step is executed

   3. a means of determining **when to stop**

      ### STEPS 1+2+3 = an algorithm

4. #### Aspects of LANGUAGES

   numbers,strings,simple operations.

   - **syntax**

     - **English**:"Cat dog boy" > not syntactically valid

       ​               "Cat hugs boy" > syntactically valid

     - **Programming language**: "hi" * 5 > not syntactically valid

        		                               3.2 * 5 > syntactically valid

5. ## Where things go wrong

   - syntactic errors
   - static semantic errors
   - no semantic errors but **different meaning than what programmer intended**

6. ## Objects

   - Programs manipulate **data objects**

   - Objects have a ==**type**== that defines the kinds of things programs can do to them.

   - objects are

     - **scalar** (cannot be subdivided) 标量（有数值，无方向）
     - **non-scalar**(have internal structure that can be accessed)

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
