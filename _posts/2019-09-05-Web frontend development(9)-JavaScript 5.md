---

title: Web Frontend Development (9) - JavaScript 05

key: C20190905

tags: JavaScript; array; Math; Date; This 

layout: article
---

# Week Nine: Web Frontend Development(9)---JavaScript 05

<!--more-->

# 9.1 数组(array)

- 和普通对象功能类似，也是用来存储值的。

- 不同的是普通对象使用字符串为属性名，**数组使用索引（index）操作元素**

  - **索引**：从0开始的整数
  
- 数组的存储功能比普通对象要好，在开发中经常使用数组来存储一些数据。

- **语法**：数组名【索引】 = 值

  ```javascript
  var arr = new Array()
  undefined
  console.log(typeof arr)
  object
  
  arr[0] = 1
  1
  arr[2] = 10
  10
  arr
  (3) [1, empty, 10]
  ```

  - ### 获取数组长度`length`

    - 语法：数组.length

    - 连续数组，使用`length`可以获取元素个数。

    - 非连续数组，使用`length`可以获取最大索引+1

      ```javascript
      arr[100] = 20
      20
      arr.length
      101
      arr
      (101) [1, empty, 10, empty × 97, 20]
      ```

      

    - 修改`length`

      - 如果修改的`length`大于原长度，多出部分会空出来。

      - 如果修改的`length`小于原长度，则多出元素会被删除。

        ```javascript
        arr.length = 10
        10
        
        arr
        (10) [1, empty, 10, empty × 7]
        
        arr.length = 100
        100
        arr
        (100) [1, empty, 10, empty × 97]
        ```

    - 向数组最后添加元素

      - 语法：`数组[数组.length] = 值`

        ```javascript
        arr[arr.length] = 123
        123
        
        arr
        (101) [1, empty, 10, empty × 97, 123]
        ```

  - ### 使用字面量创建数组

    - 语法：`[]`

      ```javascript
      var arr = [1 , ,2 ,3 ,4]
      undefined
      arr
      (5) [1, empty, 2, 3, 4]
      ```

    - 字面量和构造函数创建数组区别

      ```javascript
      arr2 = [10]
      [10]
      arr2
      [10]
      
      var arr3 = new Array(10)
      (10) [empty × 10]
      arr3
      (10) [empty × 10]
      ```

  - ### 数组里可以放任何元素

    ```javascript
    /*向数组添加对象*/
    obj = {name:"孙悟空"}
    {name: "孙悟空"}
    arr[arr.length] = obj
    {name: "孙悟空"}
    
    arr
    (7) [1, empty, 2, 3, 4, "hello", {…}]
    0: 1
    2: 2
    3: 3
    4: 4
    5: "hello"
    6: {name: "孙悟空"}
    
    /*向数组添加函数*/
    function fun(){}
    arr[arr.length] = fun
    
    arr
    (8) [1, empty, 2, 3, 4, "hello", {…}, ƒ]
    0: 1
    2: 2
    3: 3
    4: 4
    5: "hello"
    6: {name: "孙悟空"}
    7: ƒ fun()
    ```

- ## 数组对象方法

  - ### `push()`

    - 向数组末尾添加一个或多个元素，并返回数组新的长度。

  - ### `pop()`

    - 删除最后一个元素，并将被删除的元素作为返回值。

  - ### `shift()`

    - 删除开头一个元素，并将被删除的元素作为返回值。

  - ### `unshift()`

    - 向数组开头添加一个或多个元素，并返回新的数组长度。

    ```javascript
    arr.push('唐生','蜘蛛精','白骨精')
    11
    arr
    (11) [1, empty, 2, 3, 4, "hello", {…}, ƒ, "唐生", "蜘蛛精", "白骨精"]
    
    arr.pop()
    "白骨精"
    
    arr.unshift("牛魔王")
    11
    arr
    (11) ["牛魔王", 1, empty, 2, 3, 4, "hello", {…}, ƒ, "唐生", "蜘蛛精"]
    
    arr.shift()
    "牛魔王"
    arr
    (10) [1, empty, 2, 3, 4, "hello", {…}, ƒ, "唐生", "蜘蛛精"]
    ```
    
  - ### `slice`

    - 从数组中提取对象
    - 语法：`ArrObejct.slice(startIndex, endIndex)`
    - 该方法不会改变原数组，而是截取到新的数组中。
    - **包含开始，不包括结束。**
    - **`endIndex`可以不要，直接截取开始后的所有元素。**
    - **索引可以传递一个负值。**

  - ### `splice`

    - 删除数组中的指定元素。

    - 语法：`ArrObejct.splice(startIndex, number of deletion, new elements)`

    - 该方法会改变原数组，并将删除元素作为返回值。

    - **第三个参数以后，可以传递新元素，并将元素自动插入到startIndex位置。**

      ```javascript
      arr = ['孙悟空','猪八戒','唐僧','白骨精','牛魔王']
      (5) ["孙悟空", "猪八戒", "唐僧", "白骨精", "牛魔王"]
      arr2 = arr.slice(0,2)
      (2) ["孙悟空", "猪八戒"]
      arr
      (5) ["孙悟空", "猪八戒", "唐僧", "白骨精", "牛魔王"]
      arr2
      (2) ["孙悟空", "猪八戒"]
      
      arr.splice(0,2)
      (2) ["孙悟空", "猪八戒"]
      arr
      (3) ["唐僧", "白骨精", "牛魔王"]
      arr.splice(0,0, '红孩儿','白龙马')
      []
      arr
      (5) ["红孩儿", "白龙马", "唐僧", "白骨精", "牛魔王"]
      ```

  - 元素去重练习

    ```javascript
    /*去除数组中重复的数组*/
    var arr = [1,2,3,2,1,3,4,2,5]
    fun = function(arr){
        for (var i = 0; i < arr.length; i++){
            for (var j = i+1; j < arr.length; j++){
                if(arr[i] == arr[j]){
                    arr.splice(j,1);
                	j--;
            }
          }
       }
        return arr
    }
    ```

    

- ## 数组的遍历

  - 遍历数组就是将数组中所有的元素都取出来。

    ```javascript
    arr
    (10) [1, empty, 2, 3, 4, "hello", {…}, ƒ, "唐生", "蜘蛛精"]
    /*遍历循环*/
    for (var i = 0 ; i< 10; i++){
    console.log(arr[i])
    }
    
    1
    undefined
    2
    3
    4
    hello
    {name: "孙悟空"}
    ƒ fun(){}
    唐生
    蜘蛛精
    ```
    
  - ### `forEach()`遍历数组

    - 只支持IE8以上的浏览器。

    - `forEach()`方法需要一个函数作为参数。

    - 这种函数由我们创建，但不由我们调用，我们称为**回调函数**。

    - **数组中有几个元素就会执行几次，每次执行时，浏览器会将遍历的元素以实参传递进来，可以定义形参来读取这些内容。**

    - 浏览器会传递三个参数

      1. 当前遍历的元素。
      2. 当前遍历的元素的索引
      3. 正在遍历的数组。

      ```javascript
      arr = ['白骨精','孙悟空','猪八戒']
      
      arr.forEach(function(value,index,obj){
      console.log(value);
      console.log(index);
      console.log(obj)})
      
      白骨精
      0
      ["白骨精", "孙悟空", "猪八戒"]
      ["白骨精", "孙悟空", "猪八戒"]
      ["白骨精", "孙悟空", "猪八戒"]
      
      孙悟空
      1
      ["白骨精", "孙悟空", "猪八戒"]
      ["白骨精", "孙悟空", "猪八戒"]
      ["白骨精", "孙悟空", "猪八戒"]
      
      猪八戒
      2
      ["白骨精", "孙悟空", "猪八戒"]
      ["白骨精", "孙悟空", "猪八戒"]
      ["白骨精", "孙悟空", "猪八戒"]
      ```

  - ### `concat()`

    - 可以连接两个或多个数组/元素，并将新的数组返回。
  - 该方法不会对原数组产生影响。

  - ### `join()`

    - 将数组转换为字符串
  - 该方法不会对原数组产生影响。
    
  - 在`jion（）`中可以指定一个字符串作为参数，作为连接符。
    
  - ### `reverse（）`

    - 反转数组
  - 该方法直接修改原数组。

  - ### `sort()`

    - 对数组中的元素进行排序

    - **按Unicode编码进行排序！！**

      - 对数字排序，可能有错误结果

      - 可在`sort()`添加一个回调函数，来指定排序规则。

        - 返回一个大于0的值，则元素会交换位置。(a-b>0)
      - 返回等于或小于0的值，则不会交换位置。(a-b<0)

        ```javascript
      arr = [1,2,,5,7,9,6,3,5,2,6,1]
        [1, 2, empty, 5, 7, 9, 6, 3, 5, 2, 6, 1]
        
        arr.sort(function(a,b){
        return a - b;
        })
        [1, 1, 2, 2, 3, 5, 5, 6, 6, 7, 9, empty]
        ```

        

    - 该方法也会影响原数组。

    ```javascript
  arr.reverse()
    [empty, 9, 7, 6, 6, 5, 5, 3, 2, 2, 1, 1]
    
    arr.join('+')
    "+9+7+6+6+5+5+3+2+2+1+1"
    
    arr1 = [1,2,6,5,2,11,21,1,44,0,30]
    [1, 2, 6, 5, 2, 11, 21, 1, 44, 0, 30]
    arr1.sort()
    [0, 1, 1, 11, 2, 2, 21, 30, 44, 5, 6]
    
    arr1.sort(function(a,b){
    return b-a})
    [44, 30, 21, 11, 6, 5, 2, 2, 1, 1, 0]
    
    arr.concat(arr1,"孙悟空")
    [empty, 9, 7, 6, 6, 5, 5, 3, 2, 2, 1, 1, 44, 30, 21, 11, 6, 5, 2, 2, 1, 1, 0, "孙悟空"]
    
    arr
    (12) [empty, 9, 7, 6, 6, 5, 5, 3, 2, 2, 1, 1]
    ```

    

- 练习

  - > 创建一个函数，将下列perArr中满18岁的Person提取出来，然后封装到一个新的数组并返回。
    >
    > ```javascript
    > function Person(name, age){
    >     this.name = name
    >     this.age = age
    > }
    > Person.prototype.toString = function(name, age){
    >     return this.name + this.age
    > }
    > 
    > per1 = new Person("孙悟空", 28)
    > per2 = new Person("猪八戒", 30)
    > per3 = new Person("红孩儿", 8)
    > per4 = new Person("哪吒", 3)
    > per5 = new Person("蜘蛛精", 18)
    > perArr = [per1, per2, per3, per4, per5]
    > 
    > /*解题*/
    > function getAdult(perArr){
    >     var newArr = []
    >     for (var i = 0 ; i < perArr.length; i++){
    >         var p = perArr[i] /*必须重新定义变量！！*/
    >         if (p.age > 18) {
    >         newArr.push(perArr[i]);
    >         }
    >     }
    >     return newArr
    > }
    > ```
    >
  
- # 9.2 函数的方法

  - ### `call()`&`apply()`

    - 这两个方法都是函数对象的方法，需要通过函数对象来调用。

    - 调用`call`和`apply`可以将一个对象指定为第一个参数。此时这个对象将成为函数执行时的`this`

      - `call()`方法可以将实参在对象之后依次传递
      - `apply()`方法需要将实参封装到一个数组中传递。

      ```javascript
      obj = {name:"猪八戒", age: 28}
      {name: "猪八戒", age: 28}
      obj2 = {name:'孙悟空', age: 18}
      {name: "孙悟空", age: 18}
      fun = function{
      return this.name
      }
      
      fun.call()
      ""
      fun.call(obj)
      "猪八戒"
      fun.call(obj2)
      "孙悟空"
      
      /*通过call&apply传递进参数*/
      fun2 = function(a,b){
      console.log(a);
      console.log(b);
      return this.age; 
      }
      
      fun2.apply()
      undefined
      undefined
      undefined
      
      fun2.apply(obj,[2,3])
      2
      3
      28
      fun2.call(obj2,5,6)
      5
      6
      18
      
      ```

  - ### **`this`总结**

    - 以**函数**形式调用，`this`永远是**`window`**
    - 以**方法**形式调用，`this`是调用方法的**对象**
    - 以**构造函数**形式调用，`this`是·指定的**对象**
    - 以`call & apply`调用时，`this`是指定的**那个对象**

  - ### **`arguments`**

    - 在调用函数时，浏览器每次都会传递进两个隐含的参数：

      1. 函数上下文对象`this`
      2. 封装实参的对象`arguments`
         - `arguments`是一个类数组对象，可以通过索引操作数据，也可以获取长度。

    - 调用函数时，**实参都用在`arguments`中保存**。

      - `arguments.length`可以获取实参长度
      - 即使不定义形参，也可以通过`arguments`来使用实参：
        - `arguments[0]`表示第一个实参
        - `arguments`[1]表示第二个实参

    - `arguments.callee`

      - 返回正在指向的函数的对象。

      ```javascript
      function fun(){console.log(arguments.length)}
      
      /*输出实参数量*/
      fun('hello', true)
      2
      
      /*输出相应位置的实参*/
      function fun3(){
      console.log(arguments[0])
      }
      
      fun3(1,2)
      1
      fun3('hello', true)
      hello
      undefined
      ```

      

- ## `Date`对象

  - 如果直接使用构造函数创建一个`Date`对象，则会封装为代码执行的时间。
  - 如果需要指定时间对象，需要再构造函数中传递一个表示时间的字符串作为参数。
    - **格式：月份/日/年 时：分：秒**
  - `Date.getDate()`
    - 获取当前日期对象是几日。
  - `Date.getDay()`
    - 返回当前日期对象是周几。
    - 返回`0-6`的值：**0表示周日**
  - `Date.getMonth()`
    - 获取当前日期对象的月份
    - 返回`0-11`的值：**0表示1月**
  - `Date.getFullYear()`
    - 获取当前日期对象的完整年份
  - `Date.getTime()`
    - 获取当前时间对象的时间戳
    - **时间戳：指格林威治时间的1970.01.01到当前时间之间的毫秒数（1秒 = 1000毫秒）**
    - 计算机底层保存时间都是用的时间戳
  - `Date.now()`
    - 获取当前时间戳

  ```javascript
  var d = new Date()
  d
  Mon Sep 09 2019 17:04:52 GMT+0800 (中国标准时间)
  
  d.getDate()
  9
  d.getDay()
  1
  d.getMonth()
  8
  /*注意月份起始时间*/
  
  var d2 = new Date("05/26/1990 15:30:24") 
  var d3 = new Date("04/11/1990 15:15:15")
  
  d2
  Sat May 26 1990 15:30:24 GMT+0900 (中国夏令时间)
  d2.getFullYear()
  1990
  /*获取时间戳*/
  d2.getTime()
  643703424000
  /*获取当前时间戳*/
  Date.now()
  1568020064832
  /*获取时间差*/
  (d2-d3)/1000/60/60/24
  44.96885416666667
  ```

- ## Math

  - Math和其他对象不同，不是一个构造函数。

  - **工具类**，不用创建，封装了数学运算相关的属性和方法。

  - [Math对象属性和对象方法](https://www.w3school.com.cn/jsref/jsref_obj_math.asp)

    - Math.PI 表示圆周率

  - ### **`Math`方法**

    - `Math.abs()`返回绝对值
    - `Math.ceil()`对一个数进行**向上**取整，小数位只要有值就自动进1。
    - `Math.floor()`对一个数进行**向下**取整，小数部分被舍去。
    - `Math.round()`对一个数四舍五入取整。
    - `Math.random()`生成一个0-1的随机数，不包括0和1。
      - 生成一个0-x之间的随机数：`Math.round(Math.random()*x)`
      - 生成一个x-y之间的随机数：`Math.round(Math.random()*(y-x)+x)`
    - `Math.max()`获取最大值
    - `Math.min()`获取最小值
    - `Math.pow(x,y)`返回x的y次幂
    - `Math.sqrt()`开方运算

    ```javascript
    Math.PI
    3.141592653589793
    Math.abs(-10)
    10
    
    Math.ceil(3.1415)
    4
    Math.floor(3.1415)
    3
    Math.round(3.1415)
    3
    Math.round(3.55)
    4
    
    Math.random()
    0.25286698225101856
    Math.round(Math.random()*5+1)
    2
    Math.round(Math.random()*5+1)
    5
    Math.round(Math.random()*5+1)
    6
    
    Math.pow3,3)
    27
    Math.sqrt(9)
    3
    ```

  ## 

