---

title: Web Frontend Development (7) - JavaScript 03

key: C20190520

tags: JavaScript; if条件语句; switch条件语句；while循环语句; for循环语句;

layout: article
---

# Week Six: Web Frontend Development(7)---JavaScript 03

<!--more-->

# 7. 语句(statement)

程序由一条一条语句构成，由自上向下顺序一条一条执行。

- JS中可以使用`{}`为语句分组。
- 同一个`{}`中的语句为一组，叫做**代码块**。
- 代码块中内容，要么都执行，要么都不执行。
- 代码块后边就不用写`;`
- JS中代码块，只具有分组作用，没有其他用途。代码块内容在外部也可见。

```javascript
{alert("Hello");
console.log("你好");
document.write("语句")}
```

- 语句分类：
  1. 条件判断语句
  2. 条件分支语句
  3. 循环语句

## 7.1 if条件语句

1. ```javascript
   if (条件表达式)：
   	语句...;
   ```

   - `if`语句在执行时，会对条件表达式进行求值判断：

     - 如果条件表达式的值为`true`，则执行`if`后语句
     - 如果条件表达式的值为`false`，则不执行`if`后语句
     - `if`只能控制紧随其后的那个语句，或者用代码块进行语句控制

     ```javascript
     a = 20
     20
     if (a > 10 && a < 30){
     	alert("aaaa!!!");
         altert("代码块才能管到我");
     }
     ```

2. ```javascript
   if(条件表达式){
       语句...;
   }
       else{
           语句...;
       }
   ```

   - `if`语句在执行时，会对条件表达式进行求值判断：
     - 如果该值为`true`，则执行`if`后的语句
     - 如果该值为`false`，则执行`else`后的语句

3. ```javascript
   if(条件表达式){
       语句...;
   }
       else if(条件表达式){
           语句...;
       }
       	else if(条件表达式){
           	语句...;
       	}
           	else{
               	语句...;
           	}
   ```

4. **`prompt()`**可以弹出一个提示框，提示框带有一个文本框，用户可以在文本框输入一段内容，该函数需要一个字符串作为参数。

   ```javascript
   a = prompt("请输入小明的成绩：");
   if (a == 100){
       alert("奖你一个BMW");
   }
   else if (a < 99 && a >= 80){
       alert("奖你一台Iphone");
   }
   else if (a > 60 && a < 80){
       alert("奖你一个笔记本");
   }
   else{
       alert("奖你青椒炒肉")
   }
   
   ```

   

## 7.2 `switch`条件分支语句

- `switch`表达式
  - 语法：

    ```javascript
        switch(条件表达式){
            case 表达式:
                语句...
                break;
            case 表达式:
                语句...
                break;
            case 表达式:
                语句...
                break;
            case 表达式:
                语句...
                break;
            case 表达式:
                语句...
                break;
        }
    ```
    
  - 流程：`swith...case...`语句：
    - 在执行时会将case后的表达式的值和`switch`后的条件表达式的值进行全等比较。
    - 如果**比较**结果为`True`，则从当前`case`处开始执行代码。
      - 当前`case`后的代码都会被执行，除非遇见`break`。
    - 如果**比较**结果为`False`，则继续执行代码。
    - 如果所有比较都为`False`，则执行`default`h后语句。
  
  - 示例:
  
    ```javascript
    switch(num){
        case 1:
            console.log("一");
            break;
        case 2:
            console.log("二");
            break;
        default:
            console.log("非法语句")
    }
    ```
  
  - 练习4：
  
    ```javascript
    /*输入分数，超过60，输入”合格“，不超过60， 输入”不合格“*/
    /*方法1*/
                b = prompt('请输入小明的成绩：')
                a = Number(b)
                switch(parseInt(a/10)) { /*转换为10以内的问题解决*/
                    case 10: /*case只能进行等值比较，不能进行大小比较*/
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                        alert('合格');
                        break;
                    default:
                        alert('不合格');
                        break;
                }
    /*方法2*/
                switch(True){
                    case a >= 60:
                        console.log("合格");
                    default:
                        console.log("不合格");
                        break;
                }
    
    ```



## 7.3 `while`循环语句

通过循环语句反复执行一段代码

- `while`语法：

  ```javascript
  while(条件表达式){
      语句...
  }
  ```

- 先对条件表达式进行求值判断，如果值为`true`，则执行循环体。

  - 如果值为`true`，则执行循环体。循环体执行完毕后，继续对表达式进行判断。如果为`true`则继续循环，以此类推。
  - 如果值为`false` 或 `break`则终止循环。

- 创建一个循环三个步骤：

  1. 创建初始化变量
  2. 在循环中设置一个表达式
  3. 定义一个更新表达式，每次更新变量

- ### `do ...while`循环

  - 语法：

    ```javascript
    do{
        语句...
    } while(条件表达式)
    ```

  - **`do...while`在语句执行时，先执行循环体**

    - 在循环体执行完毕后，再对`while`后的条件表达式进行判断。
      - 如果结果为`True`，则继续执行循环体，执行完毕后，继续判断，以此类推。
      - 如果结果为`Flase`，则终止循环。

- **区别：两者功能类似，只是执行先后顺序不同。`do...while`可以保证循环体至少执行一次。**

  ```javascript
  /*假如投资的年利率为5%，试求从1000块到5000块，需要花费多少时间？*/
              i = 0;
              m = 1000;
              while (m < 5000){
                  m = m * (1+0.05);
                  i ++;
              document.write(i + '<br />'); 
              }
  ```

  

## 7.4 `for`循环语句


- 语法：

  ```javascript
  for (初始表达式;条件表达式;更新表达式){
      语句...
  }
  /*例子*/
      for(var i = 0; i < 10; i++){
          alert(i);
      }  
  /*python中为 `for i in range(10): i += 1`*/
  ```

  1. 执行初始化表达式，初始化变量（**只执行了一次**）
  2. 执行条件表达式，判断是否执行循环。
  3. 如果为`true`，则执行循环。
  4. 执行更新表达式，更新表达式执行完毕继续重复循环。

- `for`循环中的三个部分都可以省略，也可以写在外部。

  ```javascript
  var i = 0;
  for (;i<10;){
      alert(i++);
  }
  ```

- 练习6:  *打印1-100之间所有奇数之和。*

  ```javascript
              /*打印1-100之间所有奇数之和。*/
              tot = 0;
              for (i = 0; i <100; i++)  {
                  if (i % 2 != 0){
                      tot += i;
                  }
              }
          alert(tot);
  ```

- 练习7：         *打印1-100之间7的倍数的个数及总和。*

  ```javascript
              /*打印1-100之间7的倍数的个数及总和。*/
              tot = 0;
              count = 0
              for (i = 0; i <100; i++)  {
                  if (i % 7 == 0){
                      count += 1
                      tot += i;
                  }
              }
          alert(count);
          alert(tot);
  ```

- 练习8：打印所有水仙花数：一个三位数，每个位置上的数字的3次幂之和等译它本身。比如： 1^3 + 5^3 + 3^3 = 153

  ```javascript
              /*打印所有水仙花数：一个三位数，每个位置上的数字的3次幂之和等译它本身。
              比如： 1^3 + 5^3 + 3^3 = 153*/
  
              for (i = 100; 1000 > i; i++)  {
                  a = parseInt(i/100);
                  b = parseInt(i/10 - a * 10);
                  c = parseInt(i - a * 100 - b * 10);
                  if (i == a * a * a + b * b * b + c * c * c){
                      document.write(i + '</br>');
                  }
              }
  ```

  

- 练习9： *在页面中接收一个用户输入的数字，并判断该数是否是质数。(质数：只能被1和它本身整除的数。质数必须大于1。)*

  ```javascript
          /*在页面中接收一个用户输入的数字，并判断该数是否是质数。
          质数：只能被1和它本身整除的数。质数必须大于1。*/
          a = prompt("请输入一个数字：");
          flag = true; /*旗帜开关，默认当前为质数！！！*/
          for (i = 2; a > i; i++) {
              if (a % i == 0) {
                  flag = false /*和python可以用缩进来判断运算范围不同，js需要用flag来改变判断值。*/
                  }
          } 
  
          if (flag){
              alert(a + "是质数。" );
              }
          else{
              alert(a + "不是质数。");
              }
  ```

  

- 嵌套的`for`循环

  ```javascript
  /*打印一个*号组成的5*5的三角形*/
  for (i = 0; i <5; i++){
      for (j = 0; j < i+1; j++){
          document.write("*")；
          }
      document.write("</br>")
  }
  ```

- 练习11：*打印99乘法表*

  ```javascript
              /*打印99乘法表
              1*1 = 1
              1*2 = 2 2*2 = 4.。。*/
              tot = 0
              for (i = 1; 10 > i; i++)  {
                  for (j = 1; 10 > j; j++){
                      tot = i * j
                      document.write(i + "*" + j +"=" + tot)
                      document.write("</br>")
                  }
              }
  ```

- 练习12：*打印0-100之间所有质数*

  ```javascript
              /*打印0-100之间所有质数*/
  
              for (i = 2; 100 > i; i++)  {
                  flag = true
                  for (j = 2; i > j; j++){
                      if (i % j == 0){
                          flag = false;
                      }
                  }
                  if (flag == true){
                      document.write(i);
                      document.write("</br>")
                  }
              }
  ```

- `break` && `continue`

  - `break`

    - `break`可以退出`switch`和`while`循环语句。
    - `break`不能用在`if`条件语句。
    - `break`只对最近的`loop`进行终止。

  - `label`

    - 可以为循环语句创建一个`label`，来标示当前的循环

    - 使用`break`语句时，可以跟着`label`，结束指定循环。

      ```javascript
      outer:
      for (i = 0; i < 5; i++){
      console.log("外层循环"+i)
      for (j = 0; j< 5; j++){
      break outer;
      console.log("内部循环："+j)
      }
      }
      
      "外层循环0"
      ```

  - `continue`

    - `continue`可以跳过当次循环。

      ```javascript
      for (i = 0; i < 5; i++){
      console.log("外层循环"+i)
      for (j = 0; j< 5; j++){
      if (j == 1){
      continue}
      console.log("内部循环："+j)
      }
      }
      VM54:2 外层循环0
      VM54:6 内部循环：0
      VM54:6 内部循环：2
      VM54:6 内部循环：3
      VM54:6 内部循环：4
      VM54:2 外层循环1
      VM54:6 内部循环：0
      VM54:6 内部循环：2
      VM54:6 内部循环：3
      VM54:6 内部循环：4
      VM54:2 外层循环2
      VM54:6 内部循环：0
      VM54:6 内部循环：2
      VM54:6 内部循环：3
      VM54:6 内部循环：4
      VM54:2 外层循环3
      VM54:6 内部循环：0
      VM54:6 内部循环：2
      VM54:6 内部循环：3
      VM54:6 内部循环：4
      VM54:2 外层循环4
      VM54:6 内部循环：0
      VM54:6 内部循环：2
      VM54:6 内部循环：3
      VM54:6 内部循环：4
      ```

