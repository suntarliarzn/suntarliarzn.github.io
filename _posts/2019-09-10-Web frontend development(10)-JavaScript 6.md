---

title: Web Frontend Development (10) - JavaScript 06

key: C20190910

tags: JavaScript; String; String方法; 正则表达式

layout: article
---

# Week Ten: Web Frontend Development(10)---JavaScript 06

<!--more-->

# 10.1 字符串方法(String)

- ## 包装类

  - 在JS中提供了3个包装类。通过3个包装类可以将基本数据类型的数据转换为对象。

    - `String()`可以将基本数据类型**字符串**转换为String对象。
    - `Number()`可以将基本数据类型的**数字**转换为Number对象。
    - `Boolean()`可以将基本数据类型的**布尔值**转换为Boolean对象。
    - **注意**：实际开发中不会使用基本数据类型的对象。
      - 如果使用基本类型对象，比较可能出错。
    - 当我们对一些基本数据类型的值去调用属性和方法时，浏览器会临时使用包装类将其转换为对象，然后再调用对象的属性和方法，调用完后再转换为基本数据类型。

    ```javascript
    num = new Number (3)
    Number {3}
    num
    Number {3}
    num.hello = "abcdfe"
    "abcdfe"
    num
    Number {3, hello: "abcdfe"}
    
    str = new String('Hello')
    String {"Hello"}
    str.sayname = "name"
    "name"
    str
    String {"Hello", sayname: "name"}
    
    str.length
    5
    
    num2 = new Number(3)
    Number {3}
    num == num2
    false
    
    /*转换基本数据类型*/
    num2.toString()
    "3"
    num2
    Number {3}
    ```

- ## `String`方法

  - `str.length`获取字符串长度（空格也算1个）
  - `str.charAt(num)`返回指定位置的字符。
  - `str.charCodeAt(num)`返回指定位置字符的Unicode编码。
  - `String.fromCharCode(num)`根据字符编码获取字符。
  - `str.concat()`连接两个或多个字符串。
    - 作用和`+`一样
  - `str.indexof('str'，fromIndex)`检索一个字符串是否含有指定内容。
    - 如果字符串中含有该内容，则会返回其第一次出现的索引。
    - 如果没有找到指定内容，则返回-1
    - 可以指定查找开始位置`fromIndex`。
  - `str.lastIndexOf('str',num)`和`indexOf()`功能一样。
    - **只是从后往前检索**
  - `str.slice(startNumOfIndex,endNumOfIndex)`截取指定索引位置[)内容。
  - `str.substring(startNumOfIndex,endNumOfIndex)`和`str.slice()`功能一样。
    - **不同点**：
      - 如果传递一个负值，则默认使用0
      - 如果第二个参数小于第一个参数，则会自动调换位置。
  - `str.substr(startNumOfIndex,length)`和`str.slice()`功能一样。
    - **不同点**：
      - 后一个参数为截取长度。
  - `str.split('str')`可以将字符串拆分成一个数组。
    - 参数:拆分的字符串
    - 如果用**空串**,则会将每个字符都拆分为数组中的一个元素。
  - `str.toLowerCase()`&`str.toUpperCase()`转换大小写

  ```javascript
  str = 'aabbccddeeaa'
  "aabbccddeeaa"
  str.charAt(3)
  "b"
  str.charCodeAt(3)
  98
  String.fromCharCode(98)
  "b"
  str.concat('bb')
  "aabbccddeeaabb"
  str.indexOf('b')
  2
  str.indexOf('b',1)
  2
  str.indexOf('a',4)
  10
  str.lastIndexOf('a',4)
  1
  str.slice(1,10)
  "abbccddee"
  str.substring(10,1)
  "abbccddee"
  str.substr(1,5)
  "abbcc"
  str.split('a')
  (5) ["", "", "bbccddee", "", ""]
  str.split('')
  (12) ["a", "a", "b", "b", "c", "c", "d", "d", "e", "e", "a", "a"]
  str.toLocaleUpperCase()
  "AABBCCDDEEAA"
  ```

- ## 正则表达式 (Regular Expression)

  - 用于定义字符串规则，计算机可以根据正则表达式来检查一个字符串是否符合规则，或获取字符串中符合规则的内容提取出来。

  - 语法

    ```javascript
    /*创建方式1--构造函数*/
    var 变量 = new RegExp('正则表达式','匹配模式')
    /*创建方式2--字面量*/
    var 变量 = /正则表达式/匹配模式
    ```

  - 在构造函数中可以传递一个匹配模式作为第二个参数：

    - `i` 忽略大小写
    - `g` 全局匹配模式

  - `test()`方法检查正则表达式

    ```javascript
    /*创建方式1*/
    var reg = new RegExp('a')
    undefined
    reg
    /a/
    reg.test('abc')
    true
    reg.test('ABC')
    false
    
    /*创建方式2*/
    reg2
    /ab/i
    reg2.test('abcd')
    true
    reg2.test('ACD')
    false
    ```
- ## [正则表达式语法](https://www.w3school.com.cn/jsref/jsref_obj_regexp.asp)

  - `|``[]`或关系

    - `[ab] == a|b`
    - `[a-z]`任意小写字母
    - `[A-Z]`任意大写字母
    - `[A-z]`任意字母
    - `[0-9]`任意数字

    ```javascript
    /*检查一个字符串中是否含有abc或adc或aec*/
    reg = /a[bde]c/
    ```

  - `^`非

    ```javascript
    /*检查除了[ab] 之外还有其他元素*/
    reg = /[^ab]/
    /[^ab]/
    
    reg.test('abc')
    true
    
    reg.test('a')
    false
    
    reg.test('AB')
    true
    ```

- ## 正则式方法

  - `split()`

    - 可以将一个字符串拆分成一个数组。
    - 方法中可以传递一个正则表达式作为参数拆分字符串。
    - **即使不设置为全局匹配模式`g`，也可拆分所有内容。**

  - `search()`

    - 可以搜索字符串中是否含有指定内容。
    - **如果搜索到指定内容，则会返回第一次出现的索引。如果没有搜索到，则返回-1。同str.indexof（）方法。**
    - 它可以接受一个正则表达式作为参数，然后根据正则表达式去检索字符串。
    - **即使设置全局匹配模式`g`，也只查找第一个匹配索引。**

  - `match()`

    - 可以根据正则表达式，从一个字符串中将符合条件的内容提取出来。
    - 默认情况下，`match`只会找到第一个符合要求的内容，找到后就停止检索。
    - **可以设置正则表达式为全局匹配模式`g`，这样可以匹配到所有内容。**
    - `match()`返回一个数组。

  - `replace(“原内容”，“新内容”)`

    - 可以将字符串中指定内容替换为新的内容。
    - 默认情况下，只替换第一个匹配内容。
    - **可以设置正则表达式为全局匹配模式`g`，这样可以匹配到所有内容。**

    ```javascript
    /*str.split()*/
    str = "abc 123 aec 456 adc 789 aaa 000"
    "abc 123 aec 456 adc 789 aaa 000"
    str.split('a')
    (7) ["", "bc 123 ", "ec 456 ", "dc 789 ", "", "", " 000"]0: ""1: "bc 123 "2: "ec 456 "3: "dc 789 "4: ""5: ""6: " 000"length: 7__proto__: Array(0)
    str.split(/[a-z]/)
    (13) ["", "", "", " 123 ", "", "", " 456 ", "", "", " 789 ", "", "", " 000"]
    result = str.split(/[ab]/)
    (8) ["", "", "c 123 ", "ec 456 ", "dc 789 ", "", "", " 000"]
    result[7]
    " 000"
    
    /*str.search()*/
    str.search(/[0-9]/)
    4
    str.search(/[0-9]/ig)
    4
    
    /*str.match()*/
    str.match(/a[A-z]b/)
    null
    str.match(/a[A-z]c/)
    ["abc", index: 0, input: "abc 123 aec 456 adc 789 aaa 000", groups: undefined]
    str.match(/a[A-z]c/ig)
    (3) ["abc", "aec", "adc"]
    
    /*str.replace()*/
    str.replace(/[A-z]/, "@")
    "@bc 123 aec 456 adc 789 aaa 000"
    str.replace(/[A-z]/g, "@")
    "@@@ 123 @@@ 456 @@@ 789 @@@ 000"
    
  ```
  
  - ### 量词
  
    - 设置一个内容出现的次数
    
      - `(ab){n}`ab出现n次
    
      - `(ab){n,m}`ab出现n-m次
    
      - `(ab){n,}`ab出现n次以上
    
      - `ab+c`表示b出现至少1次，相当于`{1,}`
    
      - `ab*c`表示0个或多个，相当于`{0,}`
    
      - `ab?c`表示0个或1个，相当于`{0,1}`
    
        ```javascript
        reg = /(ab){3}/
        /(ab){3}/
        reg.test('abab')
        false
        reg.test('abaaabddabcc')
        false
        reg.test('abababaabbcc')
        true
        
        reg2 = /(ab){1,3}/
        /(ab){1,3}/
        reg2.test('abaaabddab')
        true
        reg2.test('ababababaa')
        true
        /*只要连续出现即可*/
        
        reg3 = /(ab){3}/
        /(ab){3}/
        reg3.test('abab')
        false
        reg3.test('abababcc')
        true
        
        reg4 = /ab+c/
        /ab+c/
        reg4.test('abbbc')
        true
        reg4.test('ac')
        false
        
        reg5 = /ab*c/
        /ab*c/
        reg5.test('ac')
        true
        reg5.test('abc')
        true
        reg5.test('abbc')
        true
        
        reg6 = /ab?c/
        /ab?c/
        reg6.test('ac')
        true
        reg6.test('abc')
        true
        reg6.test('abbc')
        false
        /*?和*区别之处*/
        
        ```
    
        
  
  - 开头结尾
  
    - 检查一个字符串是否以某个字符开头或结尾。
    
      - `^`表示开头
    
      - `$`表示结尾
    
        ```javascript
        reg = /^a/
        /^a/
        reg.test('abcd')
        true
        reg.test('bcde')
        false
        
        reg1 = /a$/
        /a$/
        reg1.test('abcd')
        false
        reg1.test('cdea')
        true
        
        /*注意开头和结尾符号同时使用情况！*/
        /^a$/
        reg2.test('aba')
        false
        reg2.test('a')
        true
        ```
    
        
    
    - 如果正则表达式中同时使用`^`和`$`,则要求字符串完全符合正则表达式。
  
  - 练习
  
    - 创建一个手机号码检查正则表达式：
    
    - 规则：
    
      - 以1开头
      - 第二位3-9
      - 三位以后任意数字9个
    
      ```javascript
      phone = /^1[3-9][0-9]{9}$/
      /^1[3-9][0-9]{9}$/
      phone.test('13344567890')
      true
      phone.test('110123456789')
      false
      ```
  
  - `.`
  
    - 表示任意字符
    
    - 使用`\.`转义字符强制转义
    
    - `\\`表示`\`
    
      - **使用构造函数时，由于它的参数是一个字符串，而`\`是字符串中的转义字符，如果要使用字符串`\`则需要打两个`\\`。**
    
        ```javascript
        eg = new RegExp('\\.')
        /\./
            
        reg1 = /\./
        /\./
            
        \*注意构造函数和字面量之间\的区别*\
        reg1.test('\.')
        true
        
        reg1.test('\\')
        false
        ```
  
  - ### 字母
  
    - `\w`表示任意字母或数字或`_` = `[A-z0-9_]`
    - `\W`表示除了任意字母或数字或`_`  = `[^A-z0-9_]`
    - `\d`表示任意数字`[0-9]`
    - `\D`表示除了数字`[^0-9]`
    - `\s`表示空格
    - `\S`表示除了空格
    - `\b`单词边界
      - **单词边界标示独立单词**
    - `\B`除了单词边界
      - 检查词中词根
  
  - 练习1：去除字符串开头结尾空格
  
    ```javascript
    str = prompt('输入用户名：    leo   ')
    str = str.replace(/^\s*|\s*$/g, '')
    "leo"
    ```
  
  - 练习2：邮件正则规则
  
    - 规则（如：hello.nihao@abc.com.cn）：
    
      - 任意字母数字下划线 .任意字母数字下划线@任意字母数字.任意字母（2-5）.任意字母（2-5）
    
        ```javascript
        email = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/
        /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/
        email.test('hello.nihao@abc.com.cn')
        true
        /*注意*+对于多位字母数字必不可少
        注意区分【】（）{}的含义*/
        ```
  
- ### [正则表达式大全](https://www.jianshu.com/p/a2164e370e29)

  - [常用正则表达式生成器](sojson.com/regex/generate)
  
  