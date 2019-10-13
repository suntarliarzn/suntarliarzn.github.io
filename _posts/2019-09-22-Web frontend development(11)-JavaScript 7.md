---

title: Web Frontend Development (11) - JavaScript 07

key: C20190922

tags: JavaScript; DOM对象模型; DOM查询; DOM增删改 

layout: article
---

# Week Ten: Web Frontend Development(11)---JavaScript 07

<!--more-->

## 11.1 DOM文档对象模型

- 文档

- 文档表示整个HTML网页文档。

- 对象

  - 对象表示将网页中的每一个部分都转换为一个对象。

- 模型

  - 使用模型来表示对象之间的关系，这样方便我们获取对象。

- ### 节点

  - 构成网页的最基本的组成部分，网页中每个部分都可以称为一个节点。

  - 节点类型不同

    - **文档节点**：整个HTML文档。
    - **元素节点**：HTML文档中的HTML标签
    - **属性节点：**元素的属性
    - **文本节点:**HTML标签中的文本内容。

    ![Node](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/005/Node.jpg)

  - 节点属性

    ![Node Property](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/005/Node%20Property.jpg)

- DOM演示

  - 浏览器已经为我们提供了文档节点对象。这个对象是window属性，可以在网页中直接使用，文档节点代表的是整个网页。

  ```javascript
  console.log(document)
  #document
  
  btn = document.getElementById('btn')
  <button id=​"btn">​我是一个按钮​</button>​
  btn.innerHTML ="i'M BUTTION"
  "i'M BUTTION"
  ```

- 事件

  - 事件是文档或浏览器窗口中发生的一些特定的交互瞬间。

  - JavaScript与HTML之间交互是通过事件实现的。

  - 代表性的事件：

    - 点击某个元素
    - 将鼠标移动至某个元素上方
    - 按下键盘上某个键

  - 我们可以在事件对应的属性中设置一些JS代码，这样当事件被触发时，这些代码将会执行。

    - 这种写法结构和行为耦合，不方便维护，不推荐使用。

    ```javascript
    <button id="btn" onclick="alert('你点我干嘛？');" >我是一个按钮</button>
    ```

  - 可以为按钮对应事件绑定处理函数形式响应事件，事件被触发时，其对应的函数将会被调用，称为**响应函数**。

    ```html
      <button id="btn" onclick="alert('你点我干嘛？');" >我是一个按钮</button>
         <script>
                
            var btn = document.getElementById('btn');
                btn.onclick = function(){
                    alert('你还点~~');
                }  
             </script> 
    ```

- ### `onload`事件

  - `onload`事件会在整个页面加载完成之后才触发。所以,可以为window绑定一个`onload`事件。

  - 该对象对应的响应函数会在页面加载完成之后执行，这样可以确保我们的代码执行时，所有的DOM对象已经加载完毕。

  - 这样可以将JavaScript代码集中管理。

    ```javascript
        <HEAD>
            <meta charset="UTF-8">
            <title></title>
            <script>
                window.onload = function(){
                var btn = document.getElementById('btn');
                    btn.onclick = function(){
                        alert('你还点~~');
                    }  
                }
                 </script> 
        </HEAD>
        <body>
         <button id="btn" onclick="alert('你点我干嘛？');" >我是一个按钮</button>
        </body>
    ```

- ## 11.2 DOM文档对象查询

  1. ### 获取元素节点
  
     通过`document`对象调用
  
  - #### `getElementById()`
  
    - 通过**id**属性获取**一个**元素节点对象
  
  - #### `getElementsByTagName()`
  
    - 通过**标签名**获取**一组**元素节点对象。
  - 这个方法会给我们返回一个类数组对象，所有查询到的元素都会封装到对象中。
    
   - 即使查询到的元素只有一个，也会封装到数组中返回。
    
  - #### `getElementsByName()`
  
    - 通过**name**属性获取**一组**元素节点对象。
    - 这个方法会给我们返回一个类数组对象，所有查询到的元素都会封装到对象中。
    - 即使查询到的元素只有一个，也会封装到数组中返回。
  - **`innerHTML`用于获取元素内部的HTML代码的对于自结束标签，这个属性没有意义。**
    
    - **如果需要读取元素节点属性，直接使用`元素.属性名`**
  - 例子：`元素.id` `元素.name` `元素.value`
    - 注意：class属性不能采用这种方式。读取class属性时需要使用 `元素.className`。
  
    - 练习--轮播图
    
      ```javascript
       <!doctype html>
      <html>
      
          <HEAD>
              <meta charset="UTF-8">
              <title></title>
              <style type= "text/css">
              *{
                  margin: 0;
                  padding:0;    
              }
              #outer{
                  width: 500px;
                  height: 500px;
                  margin: 50px auto;
                  background-color: wheat;
                  text-align: center;
              }
              #pic{
                  width: 500px;
                  height: 450px;
              }
      
      
              </style>
      
              <script>
                  window.onload = function(){
                      var prev = document.getElementById('prev');
                      var next = document.getElementById('next');
                      var img = document.getElementsByTagName("img")[0];
                      
                      var arr = [];
                      for (var i = 0; i < 17; i++){
                          arr[i] = "pics/Antelope Canyon-"+(i+1)+".jpg";
                      }
      
      
                      var index = 0;
                      var num = document.getElementById("num");
                      prev.onclick = function(){
                          index--;
                          if (index < 0){
                              index = arr.length-1;
                          }
                          img.src = arr[index];
                          num.innerHTML = "一共"+arr.length+"张图片，当前第"+(index+1)+"张";
                      }
                      next.onclick = function(){
                          index++;
                          if (index > arr.length-1){
                              index = 0;
                          }
                          img.src = arr[index];
                          num.innerHTML = "一共"+arr.length+"张图片，当前第"+(index+1)+"张";
                      }
                      
                      
                      }  
                   </script> 
          </HEAD>
          <body>
          <div id= "outer">
              <p id="num">一共17张图片，当前第1张</p>
              <img src="pics/Antelope Canyon-1.jpg" alt = "USA" id="pic">
              <button id = "prev">上一张</button>
              <button id = "next">下一张</button>
          </div>
      
               
          </body>
      </html>
      
      ```
    
      


  2. ### 获取元素节点的子节点

     **节点**获取的都包括空白,通过具体的元素节点调用

       - #### `getElementsByTagName()`
     
           - **方法**，返回当前节点的指定标签名的后代节点
     
       - #### `childNodes`
     
           - **属性**，表示当前节点的所有子节点
           - `childNodes`属性会获取包括文本节点在内的所有节点。
           - 根据DOM标签查询，空白也会当成文本节点。
           - 该属性在IE8中不会返回空白文本节点。
           - **`chlidren`只包括当前元素所有子元素，不获取空白文本节点。推荐使用。**
     
       - #### `firstChild`
     
           - **属性**，表示当前节点的第一个子节点
           - 获取当前元素的第一个子节点（包括空白节点）
           - **`firstElementChild`获取当前元素的第一个子元素。不支持IE8及以下的浏览器。**
     
       - #### `lastChild`
     
           - **属性**，表示当前节点的最后一个子节点。
           - 获取当前元素的最后一个子节点（包括空白节点）

  3. ### 获取父节点和兄弟节点

       - #### `parentNode`

           - **属性**，表示当前节点的父节点。
           - **`innerText`可获取元素内部的文本内容。**
               - 它和`innerHTML`类似，不同的是它会自动将html去除。

       - #### `previousSibling`

           - **属性**，表示当前节点的前一个兄弟节点。
           - 也有可能获取到空白的文本。
           - **`previousElementSibling`可以获取前一个兄弟节点的元素。IE8及以下不支持。**

       - #### `nextSibling`

           - **属性**，表示当前节点的后一个兄弟节点。

     - #### `属性名.value`

       - 获取元素value属性值，即文本框中填写的内容。

  4. 全选练习

     ```javascript
     <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
     <html>
     <head>
     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
     <title>全选练习</title>
     <script type="text/javascript">
     
     	window.onload = function(){
     		var items = document.getElementsByName('items');
     		var checkedAllBox = document.getElementById('checkedAllBox');
     		
             var checkedAllBtn = document.getElementById('checkedAllBtn');
             checkedAllBtn.onclick = function(){
     			for(var i=0;i<items.length; i++){
     				items[i].checked = true;
     			}
     		checkedAllBox.checked = true;
     		};
     
         var checkedNoBtn = document.getElementById('checkedNoBtn');
             checkedNoBtn.onclick = function(){
     			for(var i=0;i<items.length; i++){
     				items[i].checked = false;
     			}
     		checkedAllBox.checked = false;
     		};
     
         var checkedRevBtn = document.getElementById('checkedRevBtn');
             checkedRevBtn.onclick = function(){
                 checkedAllBox.checked = true;
     
                 for(var i=0;i<items.length; i++){
     				if (items[i].checked){
                         items[i].checked = false;
                     }else{
                         items[i].checked = true;
                     }
                     //判断多选框状态
     				/*if(items[i].checked){
     					//证明多选框已选中，则设置为没选中状态
     					items[i].checked = false;
     				}else{
     					//证明多选框没选中，则设置为选中状态
     					items[i].checked = true;
     				}*/
                     if (!items[i].checked){
                         checkedAllBox.checked = false;
     			    }
                 }
     	    }
             /* 提交按钮：
     		 * 	- 点击按钮以后，将所有选中的多选框的value属性值弹出
     		 */
     		//4.#sendBtn
     		//为sendBtn绑定单击响应函数
             var sendBtn = document.getElementById("sendBtn");
             sendBtn.onclick = function(){
                 for(var i=0;i<items.length; i++){
     				if (items[i].checked){
                         alert(items[i].value);
                     }   
             }
         }
         //5.#checkedAllBox
     		/*
     		 * 全选/全不选 多选框
     		 * 	- 当它选中时，其余的也选中，当它取消时其余的也取消
     		 * 
     		 * 在事件的响应函数中，响应函数是给谁绑定的this就是谁
     		 */
              //为checkedAllBox绑定单击响应函数
              checkedAllBox.onclick = function(){
                 for(var i=0;i<items.length; i++){
                         items[i].checked = this.checked;
                     } 
                 }  
         //6.items
     		/*
     		 * 如果四个多选框全都选中，则checkedAllBox也应该选中
     		 * 如果四个多选框没都选中，则checkedAllBox也不应该选中
     		 */
              for(var i=0 ; i<items.length ; i++){
     			items[i].onclick = function(){
     				
     				//将checkedAllBox设置为选中状态
     				checkedAllBox.checked = true;
     				
     				for(var j=0 ; j<items.length ; j++){
                         if(!items[j].checked){
                             checkedAllBox.checked = false;
                         }
                     }
                 }
              }
         }
            	
     </script>
     </head>
     <body>
     
     	<form method="post" action="">
     		你爱好的运动是？<input type="checkbox" id="checkedAllBox" />全选/全不选 
     		
     		<br />
     		<input type="checkbox" name="items" value="足球" />足球
     		<input type="checkbox" name="items" value="篮球" />篮球
     		<input type="checkbox" name="items" value="羽毛球" />羽毛球
     		<input type="checkbox" name="items" value="乒乓球" />乒乓球
     		<br />
     		<input type="button" id="checkedAllBtn" value="全　选" />
     		<input type="button" id="checkedNoBtn" value="全不选" />
     		<input type="button" id="checkedRevBtn" value="反　选" />
     		<input type="button" id="sendBtn" value="提　交" />
     	</form>
     </body>
     </html>
     ```

  5. ### 全局查询

       - #### `document.body`

         - 保存body的引用。

       - #### `document.documentElement`

         - 保存html根标签

       - #### `document.all`/` document.getElementsByTagName("*")`

         - 页面的所有元素

       - #### `document.getElementsByClassName("")`

         - 根据Class属性获取一组元素节点对象。
         - 只支持IE9以上浏览器

  6. ### ``document.querySelector()``

       - 可以根据css页面选择器进行查询
       - **使用该方法只会返回唯一一个元素，如果有多个满足条件的元素，它只会返回第一个元素。**

  7. ### `document.queryAll()`

       - **该方法和`querySelector()`类似，但不同的是它会将符合条件的元素封装到一个数组中返回。**
       - 即使符合条件的元素只有一个，也会返回数组。

## 11.3 Dom增删改

1. ### `document.createElement("标签名")`

   - 创建元素节点对象。

2. ### `document.createTextNode("")`

   - 创建文本节点对象。
   - 文本内容作为参数。

3. ### `.appendChild()`

   - **用法：`父节点.appendChild(子节点)`**

4. ### `.insertBefore(，)`

   - 可以再指定子节点前插入新的子节点。
   - **用法：`父节点.insertBefore(新节点,旧节点)`**

5. ### `.replaceChild(，)`

   - 可以使用指定的子节点替换已有的子节点。
   - **用法：`父节点.replaceChild(li,bj)`**

6. ### `.removeChild()`

   - 可以删除子节点。
   - **用法：`父节点.removeChild(子节点)`**
   - **`子节点.parentNode.removeChild(子节点)`同样可以自我删除。**

7. ### `.innerHtml +/-= ""`

   - 使用`innerHtml +/-=`可以完成DOM的增删减操作。
   - 一般两种方式结合使用。

8. ### `confirm("")`

   - `confirm("")`用于弹出一个带有确认和取消按钮的提示框。
   - 需要一个字符串作为参数，该字符串将会作为提示文字显示出来。

   
