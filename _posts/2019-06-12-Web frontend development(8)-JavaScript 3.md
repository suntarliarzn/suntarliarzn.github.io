---

title: Web Frontend Development (8) - JavaScript 04

key: C20190612

tags: JavaScript; 对象；字面量；函数; 

layout: article
---

# Week Six: Web Frontend Development(8)---JavaScript 04

<!--more-->

# 8.1 对象(object)

- JS中的数据类型

  - `String` 字符串
  - `Number` 数值
  - `Boolean` 布尔值
  - `Null` 空值
  - `Undefined` 未定义
    - 以上5种类型属于基本数据类型，以后我们看到的值只要不是上边5种，全部都是对象。
    - 基本数据类型都是单一的值：`‘Hello’, 123, true`

- ###  `Object` 对象

  - 属于复合数据类型，在对象中可以保存多个不同数据类型。

  - 分类：

    1. 内建对象

       由ES中定义的对象，在任何ES的实现中都可以使用

       比如：`Math` 、`String`、 `Number`、 `Boolean` 、`Function`

    2. 宿主对象

       由JS运行环境提供的对象，目前主要是由浏览器提供的对象

       比如：`BOM`, `DOM`, `console`

    3. 自定义对象

       由开发人员自己创建的对象。

  - 创建对象

    使用`new`关键字构造对象

    ```javascript
    obj = new Object()
    ```

  - 添加属性

    语法：`对象.属性名=属性值`

    ```javascript
    obj.name = "孙悟空"
    obj.gender = "男"
    ```

  - 读取对象中的属性

    语法：`对象.属性名`

  - 更改属性名

    语法： `对象.属性名 = 新值`

  - 删除对象

    语法：`delete 对象.属性名`

  - ### 属性名

    - 对象的属性名不强制要求遵循标识符规范。
    - **如果要使用特殊属性名，不要用.方式操作，需要使用：`对象[“属性名”] = 属性值`**
    - **[]可以直接传递一个变量。**
    - **JS对象的属性值可以使任意数据类型，甚至是一个对象**

    ```javascript
    obj["123"] = 789
    \**\
    obj
    {name: "男"}
    obj2 = new Object()
    {}
    obj.test = obj2
    {}
    \**\
    obj = new Object()
    {}
    obj2 = new Object()
    {}
    obj.name = "猪八戒"
    "猪八戒"
    obj2.test = "孙悟空"
    "孙悟空"
    obj.gg = obj2
    {test: "孙悟空"}
    obj
    {name: "猪八戒", gg: {…}}
    obj.gg.test
    "孙悟空"
    ```

  - `in`运算符

    - 通过运算符可以检查一个对象是否含有特定属性。

      如果有则返回`true`，没有则返回`false`

    - 语法：`“属性名” in 对象`

      ```javascript
      'test' in obj
      false
      'test' in obj2
      true
      ```

  - JS变量存储位置

    <video id="video" controls="" preload="none" width="560" height="315"  poster="https://www.bilibili.com/video/av51651471/?p=49">
       <source id="mp4" src="https://player.bilibili.com/player.html?aid=51651471&cid=90276379&page=49">
    <iframe width="560" height="315" src="https://player.bilibili.com/player.html?aid=51651471&cid=90276379&page=49" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
  </video>
    
  - 基本数据类型的值直接在**栈内存**中存储，值与值之间是独立存在的，修改一个变量不会影响其他的变量。
    
  - 对象则保存在**堆内存**中，每创建一个新的对象，就会在堆内存中开辟出一个新的空间。而**变量保持的是对象的内存地址（对象引用）**。
    
  - 如果两个变量保存同一个对象引用，当一个变量修改属性时，另外一个也会受到影响。
    
    - 当一个指针断开（赋值数据基本类型），不影响另外一个。
    
      ```javascript
      obj = new Object() 
      {}
      obj1 = new Object()
      {}
      obj = null
      null
      console.log(obj)
      null
    console.log(obj1)
      {}
    ```
    
  - 当比较两个数据基本类型时，就是比较值。
    
      当比较两个引用数据类型时，比较的对象的内存地址。
    
      ```javascript
      obj3 = new Object()
      {}
      obj4 = new Object()
      {}
      obj3.name = "沙和尚"
      "沙和尚"
      obj4.name = "沙和尚"
      "沙和尚"
      obj3 == obj4
      false
      obj3.name == obj4.name 
      true
      ```

- ### 对象字面量

  ```javascript
  obj = {}
  {}
  obj.name = "猪八戒"
  "猪八戒"
  obj
  {name: "猪八戒"}
  ```
  -  使用对象字面量，可以创建对象时，直接指定对象中的属性。

    - 语法：`{属性名：属性值，`
      `属性值：属性名`,
      ...`}`

      ```javascript
      obj2 = {name:"孙悟空", 
      gender:28,
      age:123}
      
      {name: "孙悟空", gender: 28, age: 123}
      ```

## 8.2 函数（Function）

- 定义：函数也是一个对象，它可以封装一些功能（代码），在需要时可以调用执行。

- 语法1

  ```javascript
  function 函数名（[形参1，形参2，形参3，...]）{
      语句...
  }
  ```

  比如：

  ```javascript
  function fun2(){
  	console.log("这是我的第二个函数");
      alert("哈哈");
      document.write("呜呜")
  }
  ```

- 语法2

  ```javascript
  函数名 = function(){
      语句...
  };
  ```

  比如：

  ```javascript
  func3 = function(){
  	console.log("你好");
  	};
  
  func3()
  你好
  ```

  

- 函数参数

  - 在函数`()`中可以指定一个或多个形参
  - 多个形参直接使用`,`隔开，声明形参相当于函数内部声明了对应的变量。
  - 在调用函数时，可以在`()`中指定实参，实参可以赋值给函数中的形参。
  - **调用函数时解析器不会检查实参类型，注意是否可能会接收到非法参数，如果有可能要检查实参类型。**
  - **调用函数时解析器不会检查实参数量。多余的实参不会被调用。如果实参数量少于形参，则没有对应实参的形参将是`undefined`。**
  - **函数的实参可以是任意数据类型。**

  ```javascript
  function sum(a,b){
  console.log(a+b);
  }
  
  sum(2,1)
  3
  ```

- ### 函数形参封装
  - 形参可以是任意类型的数据，也可以是一个对象。
  - 当我们的参数过多时，可以将参数装到一个对象中，然后通过对象传递。

  ```javascript
  o = {
  name:"孙悟空",
  age:"18",
  gender:"男"
  }
  
  o
  {name: "孙悟空", age: "18", gender: "男"}
  
  function sayhello(o){
  console.log('我是'+o.name + ",今年" + o.age + "，性别" + o.gender + '。')
  }
  
  sayhello(o)
  我是孙悟空,今年18，性别男。
  ```

  

  - **函数也是一个对象，也可以作为形参。**

- 函数的返回值

  - `return`后的值将会作为函数的执行结果返回，可以定义一个变量来接收这个结果。

  - 语法：

    `return 值`

  - **变量`return`的值就是函数的执行结果，函数执行到此结束。**

  - 如果`return`后不跟任何值就相当于返回`undefined`。

  - `return`可以跟任意类型的值。
  
    ```javascript
    function fun2(){
    obj = {name:"沙和尚"};
    return obj;
    }
    
    fun2
    fun2(){
    obj = {name:"沙和尚"};
    return obj;
    }
    
    fun2()
    {name: "沙和尚"}
    
    fun2().name
    "沙和尚"
    ```
  
    ```javascript
    function fun3(){
    	function fun4(){
    	console.log("我是fun4");
    }
    return fun4();
    }
    
    fun3()
    我是fun4
    
    
    a = fun3
    ƒ fun3(){
    	function fun4(){
    	console.log("我是fun4");
    }
    return fun4();
    }
    
    a()
    我是fun4
    ```
  
    
  
- ### `break`/`continue`/`return`区别

  - `break`：退出当前循环。
  - `continue`：跳过当次循环。
  - `return`：结束整个函数。

- ### 立即执行函数

  - 函数定义完后，立即被调用。

  - 立即执行函数只会执行一次。

    ```javascript
    (function(a,b){
    console.log(a+b)
    })(123,456)
    
    579
    ```

- ## 8.3 对象（method）

  - 对象的属性值可以是任何的数据类型，也可以是函数。

  - **函数作为一个对象的属性保存，那么我们称这个函数为方法（method）。**

  - 调用这个函数叫做调用方法，两者只是名称上的区别。

    ```javascript
    obj 
    {name: "沙和尚"}
    obj.sayName = function(){
    console.log(obj.name);
    }
    
    obj
    {name: "沙和尚", sayName: ƒ}
    obj.sayName()
    沙和尚
    
    
    obj.sayName
    ƒ (){
    console.log(obj.name);
    }
    
    obj.name = "孙悟空"
    "孙悟空"
    
    obj
    {name: "孙悟空", sayName: ƒ}
    
    obj.sayName()
    孙悟空
    ```

- ### 枚举对象中的属性

  - 使用 `for...in`语句

  - 语法：

    ```javascript
    for (var 变量 in 对象){
        
    }
    
    for (var n in obj){
        console.log(n);
        console.log(obj[n])
    }
    ```

  - 每次执行时，会将对象中的属性名字赋值给变量。

- ### 作用域

  - 一个变量的作用范围

  - 两种作用域

    1. 全局作用域`window`

       - 直接编写在`script`标签中的JS代码都在全局作用域中。

       - 全局作用域在页面打开时创建，在页面关闭时销毁。

       - 在全局作用域中有一个全局对象`window`,代表一个浏览器的窗口，我们可以直接使用。

       - 在全局作用域中，创建的**变量**都会作为`window`对象的`属性`保存。

       - 创建的**函数**可以作为`window`对象的`方法`保存。

       - **变量声明提前**

         - 使用`var`关键字声明的变量，会在代码执行之前被声明。
         - 但是如果声明变量时不使用`var`关键字，则变量不会声明提前。

       - **函数声明提前**

         - 使用函数声明形式创建的函数`function 函数（）{}`，它会在所有代码执行之前就被创建，所以我们可以在函数声明前来调用函数。

         - 使用函数表达式创建的函数，不会被声明提前，所以不能在声明前调用。

           ```javascript
           fun();
           function fun(){
           console.log("hello");
           }
           
           fun()
           hello
           
           fun2()
           var fun2 = function(){
           console.log("hello");
           };
           Uncaught TypeError: fun2 is not a function
               at <anonymous>:1:1
           
           fun2
           undefined
           ```

           

    2. 函数作用域

       - 调用函数时创建函数作用域，函数执行完毕后，函数作用域被销毁。
       - 每调用一次函数就会创建一个新的函数作用域，他们之间是相互独立的。
       - **在函数作用域中可以访问全局作用域的变量。在全局作用域中无法访问函数作用域中的变量。**
       - 当在函数作用域中操作一个变量时，它会现在自身作用域中寻找，如果没有找到，则向上一级作用域中寻找，直到找到全局作用域。如果依然没找到，报错`ReferenceError`。
       - 在函数中要访问全部变量，使用`window`函数。
       - 在函数作用域中也有声明提前特性。
         - 使用`var`关键字声明的变量，会在函数中所有代码执行之前被声明。
         - 函数声明也会在函数中所有代码执行之前被声明。（同全局作用域。）

  - **在函数中，不使用`var`声明的变量都会成为全局变量。**

    ```javascript
    /*情况1 使用var声明*/
    var c = 33;
    function fun5(){
    console.log("c1 = " + c);
    var c = 10
    };
    fun5();
    console.log("c2 = " + c);
    
    c1 = undefined /*就近寻找c,c被提前声明，但没有被赋值。*/
    c2 = 33/*局部函数定义的var，不修改全局变量。*/
    
    /*情况2 不使用var声明*/
    var c = 33;
    function fun5(){
    console.log("c1 = " + c);
    c = 10 /*没有设置var，就为全局变量。！！！*/
    };
    fun5();
    console.log("c2 = " + c);
    c1 = 33/*就近寻找c,找到c为全局变量。*/
    c2 = 10/*局部函数修改了变量c的值，但没有声明，就相当于进行了变量值修改。*/
    
    ```

    

- 练习

  - 练习1

    ```javascript
    var a = 123;
    function fun(a){
    alert(a);
    a = 456;
    }
    
    fun()
    undefined
    
    a
    123
    ```

  - 练习2

    ```javascript
    var a = 123;
    function fun(a){
    alert(a);
    a = 456;
    }
    
    
    fun(123)
    123
    
    a
    123
    ```

- ### **this**

  - 解析器在调用函数时，每次都会向函数内部传递一个隐含的参数。这个隐含的参数就是`this`。
  - 这个对象我们称为函数执行的上下文对象。
  - 根据函数调用方式的不同，`this`会指向不同的对象。
    - 以**函数**形式调用时，`this`永远是`window`。
    - 以**方法**形式调用时，`this`永远是调用方法的那个对象。

  ```javascript
  function fun(){console.log(this);}
  obj {name: "孙悟空", sayName: ƒ}
  
  fun()
  Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
  
  obj.sayName()
  {name: "孙悟空", sayName: ƒ}
  ```

- 工厂方法创建对象

  ```javascript
  function person(name, gender, age){
  var obj = Object();
  obj.name = name;
  obj.gender = gender;
  obj.age = age;
  obj.sayName = function(){alert(this.name)};
  return obj;
  }
  
  var obj1 = person ('猪八戒', '男', 28)
  obj1.sayName()
  "猪八戒"
  ```

  - 缺点：使用工厂方法创建的对象，使用的构造函数都是Object，所以创建的对象都是Object这个类型，导致我们无法区分出不同类型的对象。

- ### **构造函数**

  - 构造函数就是一个普通函数，创建方式和普通函数没有区别。
  - 不同的是构造函数习惯上**首字母大写**
  - 构造函数和普通函数的区别是调用方式不同：
    - 普通函数直接调用
    - 构造函数使用`new`关键字调用
  - 构造函数的执行流程：
    1. 立刻创建一个新的对象
    2. 将新建的对象设置为函数中`this`,在构造函数中可以使用`this`来引用新建的对象。
    3. 逐行执行函数代码
    4. 将新建的对象返回
  - 使用一个构造函数创建的对象，我们称为为一**类**对象。
    - 通过一个构造函数创建的对象叫该类的实例。
    - 可以用`对象+instanceof+类`检查一个对象是否是一个类的实例。

  ```javascript
  function Person(name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.sayName = function(){console.log(this.name)}
  }
  
  var per = Person('孙悟空', 18, "male")
  undefined
  per
  undefined
  /*没有构造函数，函数为空*/
  
  var per = new Person('孙悟空', 18, 'male') 
  /*新建构造函数，为函数赋值对象Person*/
  per
  Person {name: "孙悟空", age: 18, gender: "male", sayName: ƒ}
  per.sayName()
  孙悟空
  ```

- **原型Prototype**

  - 函数定义在全局作用域，污染了全局作用域命名空间，也不安全。

  -  我们所创建的每一个函数，解析器都会向函数中添加一个属性prototype

  - 这个属性对应一个对象，就是原型对象

    - 如果作为普通函数调用prototype没有任何作用
    - 如果函数作为**构造函数**形式调用，它所创建的对象都会有一个隐含属性，指向该构造函数的原型对象。

  - 可以通过`__proto__`访问该属性

  - 原型对象就相当于一个公共的区域，所有同一类的实例都可以访问到这个原型对象。**可以向对象中共有的内容，统一设置到原型对象中。**

  - 使用`in`检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回`true`

    ```javascript
    function MyClass(){}
    undefined
    /*向原型中添加属性/方法*/
    MyClass.prototype.a = 123
    123
    /*创建实例*/
    mc = new MyClass
    MyClass {}
    mc.a
    123
    mc2 = new MyClass
    mc.a == mc2.a
    true
    
    MyClass.prototype
    {a: 123, constructor: ƒ}
    ```

  - 使用`hasOwnProperty（）`来检查自身中是否含有该属性，只有当对象只剩中含有属性时，才会返回`true`。

  - 当我们直接在页面上打印一个对象时，实际上是输出的`toString()`方法的返回值。

    - 如果我们希望输出对象不是`[object Object]`,可以为对象添加一个`to Sting()`方法

    ```javascript
    
    function fun(name, age, gender){
    this.name = name
    this.age = age
    this.gender = gender
    }
    
    var per = new fun("孙悟空", 18, "male")
    
    per
    fun {name: "孙悟空", age: 18, gender: "male"}
    per.toString()
    "[object Object]"
    
    per.__proto__.toString = function tostring(){
    return "Hello"
    }
    
    per.toString()
    "Hello"
    ```

- 垃圾回收（GC）

  - 当一个对象没有任何的变量或属性对它进行引用，此时我们将永远无法操作该对象。
  - 此时这种对象就是一个垃圾。这种对象过多会占用大量的内存空间，导致程序运行变慢。
  - JS拥有自动回收机制，自动将这些垃圾从内存中销毁。
  - **不再使用的对象设置为`null`即可。**

