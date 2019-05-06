---

title: Web Frontend Development (4) - JavaScript level1

key: C20190422

tags: JavaScript;alert; console.log(); var; string; boolean; number; null; undefined;

layout: article
---

# Week Four: Web Frontend Development(5)---JavaScript

<!--more-->

# 5. JavaScript基础

## 5.1 什么是JavaScript?

- JavaScript web 开发人员必须学习的 3 门语言中的一门：

  1. **HTML** 定义了网页的内容
  2. **CSS** 描述了网页的布局
  3. **JavaScript** 网页的行为

- JS组成部分：

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/004/javaScript%20structure.jpg)

- ### `Hello World`输出语句

  - `alert();`

  - `document.write();`

  - `console.log();`

  - 我的第一个JS

    ```javascript
    <!doctype html>
    <html>
        <HEAD>
            <meta charset="utf-8">
            <title></title>
            <script>
                /*控制浏览器弹出警告框*/
                alert("哥，你真帅！");
                /*让计算机在页面中输出内容,向body输出内容*/
                document.write("你看我出不出来");
                /*向控制台输出内容*/
                console.log("你看我在哪里出来呢？");
            </script>
        </HEAD>
        <body>
    
        </body>
    </html>
    
    ```

    

## 5.2 JS书写位置

1. 写在标签属性中（不推荐）

2. 写在`<head>`中`<script></script>`标签代码块中

   ```javascript
   <!doctype html>
   <html>
       <HEAD>
           <meta charset="utf-8">
           <title></title>
           <script>
               /*控制浏览器弹出警告框*/
               alert("哥，你真帅！");
               /*让计算机在页面中输出内容,向body输出内容*/
               document.write("你看我出不出来");
               /*向控制台输出内容*/
               console.log("你看我在哪里出来呢？");
           </script>
       </HEAD>
       <body>
           <!--将JS代码编写到标签的onclick属性中
               当我们点击按钮时，js代码才会执行
           -->
           <button onclick="alert('讨厌，你点我干嘛？');"> 你点我呀</button>
           <!--将JS代码写到超链接的href属性中，
               这样当点击超链接时，会执行js代码
           -->
           
           <a href="javascript:alert('让你点你就点');"> 你也点一下</a>
           
           <!--超链接点击后无效果-->
           <a href="javascript:;"> 你也点一下</a>
           
       </body>
   </html>
   
   ```

   

3. ### 写在外部js文件中（同CSS）

   ```html
   <!doctype html>
   <html>
       <HEAD>
           <meta charset="utf-8">
           <title></title>
           <!--将js代码编写到外部js文件中，
               然后通过script标签引入
           -->
           <script type="text/javascript" src="03 script alert.js">
           </script>
           <script>
               alert("我是内部的标签");
           </script>
       </HEAD>
       <body>
           
       </body>
   </html>
   ```

   - #### 注意：

     - `script`一旦用于外部标签，标签内部不能再使用。
     - 如要需要，可以创建新的`script`标签用于内部编写。

### 5.3 JS基本语法

- 注释
  - 单行注释`\\`
  - 多行注释`\**\`
- 注意
  1. JS中严格区分**大小写**
  2. JS中每一条语句**以分号`;`结尾，必须写**
  3. JS中忽略多个空格和换行，可以对代码进行格式化

## 5.4 JS字面量和变量

- **字面量**：都是不可变的值，可以直接使用，但一般不直接使用。

  - 1,2,3,4,5...
  - "Hello World!"

- **变量**：可以用来保存字面量，变量的值是可变的。变量使用更加方便。开发中都是通过变量去保存字面量，很少直接使用字面量。

  - a = 1234556
  - b = "Hello world"

- ### **声明变量**

  - 在JS中使用`var`声明变量

  - **声明变量对变量进行描述**

    ```javascript
    var a;
    a = 123;
    console.log(a);
    var b = "Hellow World"
    console.log(b)
    ```

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/004/var.jpg)

## 5.5 标识符

- JS中所有的可以由自主命名的都可以成为标识符

  - 变量名，函数名，属性

- 命名标识符需要遵守以下规则：

  1. 标识符可以含有：字母、数字、`_`、`$`

  2. 不能以数字开头

  3. 不能是ES中的关键字和保留字

     - 关键字是在JavaScript已经被规定为具有特殊功能的字。这些关键字可用于表示控制语句的开始或结束，或者用于执行特定操作等。按照规则，关键字也是语言保留的，不能用作标识符。ES2015新增let和const等为关键字:

       ![关键字](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/004/saved%20token.jpg)

     - ECMA-262 还描述了另外一组不能用作标识符的保留字。尽管保留字在这门语言中还没有任何特定的用途。但它们有可能在将来被用作关键字。以下是ECMA-262 第3 版定义的全部保留字：

       ![保留字](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/004/saved%20token.jpg)

  4. 标识符一般采用驼峰命名法

     - 首字母小写
     - 每个字母开头大写，其余字母小写
     - helloWorld

## 5.6 字符串

- ### 数据类型指的字面量类型：

  - `string` 字符串
  - `Number` 数值
  - `Boolean` 布尔值
  - `Null` 空值
  - `Undefined` 未定义
  - `Object` 对象

- 前五种为基本数据类型；`Object`属于引用数据类型

- ### 字符串

  - JS中字符串使用**引号**：`""` ，`''`
  - 双引号、单引号均可，但不要混用。
  - 在字符串中使用`\`作为转义字符，当表示一些特殊符号时可以使用`\`转移为字符串。
    - `\"` 表示 `"`
    - `\'` 表示` '`
    - `\n`表示换行
    - `\t`表示制表符
    - `\\`表示`\`

### 5.7 Number

- JS中所有数值都是Number类型，包括整数和浮点数。
- 可以使用一个运算符`typeof`检查一个变量类型
  - 语法： `typeof 变量`
- **数值最大值**`Number.MAX_VALUE`=1.7976931348623157e+308
  - 如果超过最大值，则用`Infinity`表示。
  - `Infinity`表示正无穷
  - `-Infinity`表示负无穷
    - 使用`typeof`检查`Infinity`返回`number`
- **`NaN`**表示Not a Number
  - 使用`typeof`检查`NaN`返回`number`
- `Number.MIN_VALUE` 表示**最小正值**
- **运算问题**
  - JS中**整数**的运算基本可以保证精确
  - JS进行**浮点**运算，可能得到不精确的结果

### 5.8 Boolen布尔值

- `true`/`false`

  ```javascript
  var bool = false
  ```



### 5.9 Null / Undefined

- `null`表示一个为空的对象
- `Undefined` ：未定义。当声明一个变量，但未给变量赋值，它的值就是`Undefined`



### 5.10 强制类型转换--`String`

- 调用被转换类型的`toString（）`方法

  - 调用zzz = xxx.yyy()，生成新变量，不影响原变量
  - `null`和`Undefined`这两个值没有`toString()`方法，如果调用会报错。

  ```javascript
  a = 123
  123
  a.toString()
  "123"
  B = a.toString
  ƒ toString() { [native code] }
  B
  ƒ toString() { [native code] }
  b = a.toString()
  "123"
  b
  "123"
  <!--//-->>
  a = null
  null
  a.toString()
  VM782:1 Uncaught TypeError: Cannot read property 'toString' of null
      at <anonymous>:1:3
  ```

- 调用`String()`函数

  ```javascript
  a = 123
  123
  String(a)
  "123"
  a = String(a)
  "123"
  typeof a
  "string"
  <!--//-->>
  b = null
  null
  b = String(b)
  "null"
  typeof b
  "string"
  ```

  

### 5.11  强制类型转换--`Number`

- 使用`Number()`函数

  1. 如果是纯数字，直接转换
  2. 有非数字，转换为`NaN`
  3. 空串、空格，转换为`0`
  4. `true`转换为`1`，`false`转换为`0`
  5. `Null`转换为`0`
  6. `undefined`转换为`NaN`

  ```javascript
  var a = "123"
  undefined
  Number(a)
  123
  <!--//-->>
  var b = "abc"
  Number(b)
  NaN
  ```

- **带单位的字符串进行运算**

  - `parseInt()`把字符串中有效整数转换为整数
  - `parseFloat()`把字符有效小数串转换为浮点数

  ```javascript
  a = "123a567px"
  "123a567px"
  a = parseInt(a)
  123
  b = 123.456
  123.456
  b = parseFloat(b)
  123.456
  ```



### 5.12  其他进制的数字

- 16进制数字，以`0x`开头

- 8进制数字，以`0`开头

- 2进制数字，以`ob`开头

  ```javascript
  a = 0x10
  16
  b = 0xff
  255
  c = 070
  56
  d = 2b10
  VM1198:1 Uncaught SyntaxError: Invalid or unexpected token
  ```

- `parseInt(,8)`传递一个第二个参数，可以指定进制

  ```javascript
  c = "070"
  "070"
  d = parseInt(c)
  70
  d = parseInt(c,16)
  112
  d = parseInt(c,8)
  56
  ```

  

### 5.13 转换为Boolean

- 使用Boolean()函数
  - 数字
    - 除了`0`和`NaN`为`false`，其余都是`True`
  - 字符串
    - 除了空串，其余都是`True`
  - `null`和`undefined`都会转换为`false`