---

title: Web Frontend Development (13) - JavaScript 09

key: C20191111

tags: JavaScript; BOM; window; navigator; history; location; 计时器;

layout: article
---

# Week Ten: Web Frontend Development(13)---JavaScript 09

<!--more-->

## 13.1 BOM

- 浏览器对象模型

- BOM可以使我们通过JS来操作浏览器

- BOM对象

  - ### Window

    - 代表整个浏览器窗口，同时`window`也是网页中的全局对象。

  - ### Navigator

    - 代表当前浏览器的信息。
    - 通过对象可以识别不同浏览器。

  - ### Location

    - 代表当前浏览器的地址栏。
    - 通过`location`可以获取地址栏信息。

  - ### History

    - 代表浏览器的历史记录。
    - 通过`history`可以操作浏览器的历史记录
      - 由于隐私原因，该对象不能获取具体的历史记录，**只能操作浏览器向前或向后翻页**。
      - 该操作只在当次访问时有效。

  - ### Screen

    - 代表用户的屏幕信息
    - 通过对象可以获取用户显示器的相关信息。

- 这些BOM对象都是作为`window`对象的属性来保存的。

  - 可以通过`window`对象来使用，也可以直接使用。

    ```html
    console.log(window.navigator);
    console.log(location);
    console.log(history);
    ```

## 13.2 Navigator

- 代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器

- 由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了

- 一般我们只会使用`userAgent`来判断浏览器的信息

  - `userAgent`是一个字符串，这个字符串中包含有用来描述浏览器信息的内容
  - 不同的浏览器会有不同的`userAgent`

- 判断除Edge之外的不同浏览器：

  ```html
  <!DOCTYPE html>
  <html>
  <head>
  	<meta charset="utf-8" />
  	<title></title>
  	<script type="text/javascript">
          
      var ua = navigator.userAgent;
  					
      console.log(ua);
  
      if(/firefox/i.test(ua)){
          alert("你是火狐！！！");
      }else if(/chrome/i.test(ua)){
          alert("你是Chrome");
      }else if(/msie/i.test(ua)){
          alert("你是IE浏览器~~~");
      }else if("ActiveXObject" in window){
          alert("你是IE10，枪毙了你~~~");
      }  
   		/*
  		 * 如果通过UserAgent不能判断，还可以通过一些浏览器中特有的对象，来判断浏览器的信息
  		 * 比如：ActiveXObject
  		 */
  	</script>
  </head>
  <body>
  </body>
  </html>
  ```

- ### `Edge`判断

  ```html
  <script>
  			/* 		
  			if (!!window.ActiveXObject || "ActiveXObject" in window)
  			alert('IE');
  		else
  			alert("not IE"); 
  			2019年12月已经失效，“ActiveXObject”*/
  
  		if (navigator.userAgent.indexOf("Edge") > -1) {
  
  			alert('Is Edge');
  	</script>
  ```

- 综上综合判断(排除法)

  ```html
  <script>
  var ua = navigator.userAgent;
  
  console.log(ua);
  
  if(/firefox/i.test(ua)){
      alert("你是火狐！！！");
  }else if(/chrome/i.test(ua) && navigator.userAgent.indexOf("Edge") < 0){
      alert("你是Chrome");
  }else if(/msie/i.test(ua)){
      alert("你是IE浏览器~~~");
  }else if("ActiveXObject" in window){
      alert("你是IE，枪毙了你~~~");
  }else if(navigator.userAgent.indexOf("Edge") > -1){
      alert("你是Edge!");
  } 
  </script>
  ```



## 13.3  History

- ​    `history`对象可以用来操作浏览器向前或向后翻页

  - ### `history.length`属性

    - 可以获取当前访问的链接数量。

  - ### `history.back()`方法

    - 回退到上一个页面，作用和浏览器的后退按钮一样。

    ```html
    <!DOCTYPE html>
    <html>
    
    <head>
    	<meta charset="utf-8" />
    	<title></title>
    	<script type="text/javascript">
    		window.onload = function(){
    			var btn = document.getElementById("button");
    			btn.onclick = function(){
    				history.back();   /*历史后退按钮*/
    			};
    		};
    		
    	</script>
    </head>
    
    <body>
    <h1>history</h1>
    <button id="button">back</button>
    </body>
    
    </html>
    ```

    

  - ### `history.forward()`方法

    - 跳转至下一个页面，作用和浏览器前进按钮一样。

    ```html
    <!DOCTYPE html>
    <html>
    
    <head>
    	<meta charset="utf-8" />
    	<title></title>
    	<script type="text/javascript">
    		window.onload = function(){
    			var forward = document.getElementById("forward");
    			forward.onclick = function(){
    				history.forward() /*历史前进按钮*/
    			}
    		}
    	</script>
    </head>
    
    <body>
    	<body>
    		<h1>test 02</h1>
    		<a href="02.History.html">history</a>
    		<button id="forward">forward</button>
    	</body>
    </body>
    
    </html>
    ```

  - ### `go()`方法

    - 可以用来跳转到指定页面
    - 它需要一个整数作为参数
      - `1`向前跳转一个页面， 相当于`forward()`
      - `2`向前跳转两个页面
      - `-1`向后跳转一个页面，相当于`back()`
      - `-2`向后跳转两个页面

## 13.3 Location

- 该对象中封装了浏览器地址栏的信息。

- 如果直接打印`location`，可愿意获取地址栏的信息。

- 如果直接将location属性修改为一个完整路径，或相对路径，则**页面会自动跳转至该路径，并会生成相应的历史记录。**

  ```html
  <!DOCTYPE html>
  <html>
  
  <head>
  	<meta charset="utf-8" />
  	<title></title>
  	<script type="text/javascript">
  
  		window.onload = function(){
  			var btn = document.getElementById("button");
  			btn.onclick = function(){
  				alert(location)
  			};
  			var re = document.getElementById("relocation");
  			re.onclick = function(){
  				location = "02.History test 01.html";
  			};
  			var ab = document.getElementById("ablocation");
  			ab.onclick = function(){
  				location = "http://www.baidu.com"
  			};
  		};
  		
  	</script>
  </head>
  
  <body>
  <h1>history</h1>
  <button id="button">location</button>
  <button id="relocation">relative location</button>
  <button id="ablocation">absolute location</button>
  </body>
  
  </html>
  ```

- `location`属性

  ![location](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/005/location.jpg)

  - `location`属性用于查询地址相关信息

- `location`方法

  - ### `location.assign()`
    
    - 用来跳转到其他页面，作用和直接修改`location`一样
    - 可以生成历史记录，可以回退。
  - ### `location.reload()`
    
    - 用于重新刷新当前页面，作用和刷新按钮一样。
    - 如果在方法中传递`true`，强制清空缓存。
  - ### `location.replace()`
  
    - 用于用新的页面替换当前页面。
    - **不能生成历史记录，不能回退。**
  
  ```html
  <!DOCTYPE html>
  <html>
  
  <head>
  	<meta charset="utf-8" />
  	<title></title>
  	<script type="text/javascript">
  
  		window.onload = function(){
  			var btn = document.getElementById("button");
  			btn.onclick = function(){
  				location.reload()
  			};
  			var re = document.getElementById("replace");
  			re.onclick = function(){
  				location.replace( "02.History test 01.html");
  			};
  			var as = document.getElementById("assign");
  			as.onclick = function(){
  				location.assign("http://www.baidu.com")
  			};
  		};
  		
  	</script>
  </head>
  
  <body>
  <h1>history</h1>
  <button id="button">reload</button>
  <button id="replace">replace</button>
  <button id = "assign">assign</button>
  </body>

  </html>
  ```

## 13.4 Window方法

- ### `setInterval()`定时调用

  - JS程序执行速度非常非常快，如果希望一段程序可以每隔一段时间执行一次，可以使用定时调用。
  - `setInterval(function(){},1000ms)`
    - 可以定时调用，可以将函数每隔一段时间执行一次。
    - 每次调用时间为**毫秒**。
  - 返回值：
    - 返回一个Number类型的数值，作为运行次数
    - **这个数值用来作为定时器的唯一标识**

- ### `clearInterval()`关闭定时器

  - `clearInterval()`可以接受任意参数，如果参数是一个有效的标识，则停止对应的定时器；如果参数不是一个有效的标识，则什么也不做。
  
  ```html
  <!DOCTYPE html>
  <html>
  <head>
  	<meta charset="utf-8" />
  	<title></title>
  	<script type="text/javascript">
      window.onload = function(){
          var count = document.getElementById("count");
          var num = 1;
          timer = setInterval(function()
          {count.innerHTML = num++;
              if (num == 10){
          clearInterval(timer);
          }   
          }, 500);
          // console.log(timer);
      }
  	</script>
  </head>
  <body>
      <h1 id="count"></h1>
  </body>
  </html>
  ```
  
  


- 练习图片切换

  ```html
  <!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="utf-8" />
      <title></title>
      <script type="text/javascript">
          window.onload = function () {
              var img1 = document.getElementById("img1");
              var imgArr = ["readme/img1.png", "readme/img2.png", "readme/img3.png", "readme/img4.png", "readme/img5.png"];
              var index = 0
              var timer
              var btn01 = document.getElementById("btn01");
              var btn02 = document.getElementById("btn02");
              btn01.onclick = function () {
                  clearInterval(timer);
                  timer = setInterval(function () {
  
                      index++;
                      if (index >= imgArr.length) {
                          index = 0;
                      }
                      img1.src = imgArr[index];
                  }, 500);
              };
  
              btn02.onclick = function () {
                  clearInterval(timer);
              };
          };
  
      </script>
  </head>
  
  <body>
      <img id="img1" src="readme/img1.png" />
      <br /><br />
      <button id="btn01">开始</button>
      <button id="btn02">停止</button>
  </body>
  
  </html>
  ```

- ### `setTimeout`延时调用


  - 延时调用一个函数不马上执行，而是隔一段时间以后再执行，而且**只会执行一次**。

  - `setTimeout(function(){},1000)`表示1000毫秒以后开始执行一次。

- ### `clearTimeout`关闭延时调用

- 定时器练习

  - 封装思想

    - 新建JS文件
    - 保存函数
    - 在HTML新建`script`标签
    - 标签中指向`src`路径

    <video id="video" controls="" preload="none" width="560" height="315"  poster="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/005/location.jpg">
          <source id="mp4" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/005/JS%20src.mp4" type="video/mp4">
        <iframe width="560" height="315" src="https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/005/JS%20src.mp4" frameborder="0" allowfullscreen></iframe>
          </video>
    
    

  - 函数提取

  - JS不仅可以封装函数，还可以保存属性

  - `callback()`回调函数放在函数构建中可以在函数执行完毕后，继续调用函数。

    - 动画效果能够无限循环可能。

  ```html
<!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="UTF-8">
      <title></title>
      <style type="text/css">
          * {
              padding: 0;
              margin: 0;
          }
  
          #box1 {
              width: 100px;
              height: 100px;
              left: 0;
              background-color: red;
              position: absolute;
          }
  
          #box2 {
              width: 100px;
              height: 100px;
              top: 200px;
              left: 0;
              background-color: yellowgreen;
              position: absolute;
          }
      </style>
  
      <script type="text/javascript">
  
          window.onload = function () {
              var box1 = document.getElementById("box1");
              var box2 = document.getElementById("box2");
              var btn01 = document.getElementById("btn01");
              var btn02 = document.getElementById("btn02");
              var btn03 = document.getElementById("btn03");
              var btn04 = document.getElementById("btn04");
  
              btn01.onclick = function () { move(box1, 10, 800, "left"); };
              btn02.onclick = function () { move(box1, 10, 0, "left"); };
              btn03.onclick = function () { move(box2, 10, 800, "left"); };
              btn04.onclick = function () {
                  move(box2, 10, 800, "top", function (
                  ) {
                      move(box2, 10, 800, "width", function (
                      ) {
                          move(box2, 10, 800, "left", function (
                          ) {
                              alert("hello");
                          });
                      });
                  });
              };
              function move(obj, speed, target, attr, callback) {
  
                  clearInterval(obj.timer)
                  var current = parseInt(getStyle(obj, attr));
                  if (current > target) {
                      speed = -speed;
                  }
                  //向执行动画对象中添加一个timer属性，用来保存它自己的定时器标识
                  obj.timer = setInterval(function () {
                      var oldValue = parseInt(getStyle(obj, attr));
                      var newValue = oldValue + speed;
                      if (speed < 0 && newValue < target || speed > 0 && newValue > target) {
                          newValue = target;
                      }
                      //attr属性需要用[]提取
                      obj.style[attr] = newValue + "px";
  
                      if (newValue == target) {
                          clearInterval(obj.timer);
                          //调用回调函数，再执行一次函数
                          callback();
                      }
  
  
                  }, 30);
              }
  
              function getStyle(obj, name) {
  
                  if (window.getComputedStyle) {
                      //正常浏览器的方式，具有getComputedStyle()方法
                      return getComputedStyle(obj, null)[name];
                  } else {
                      //IE8的方式，没有getComputedStyle()方法
                      return obj.currentStyle[name];
                  }
  
              }
  
          };
  
  
      </script>
  </head>
  
  <body>
      <button id="btn01">点击box1向右移动</button>
      <button id="btn02">点击box1向左移动</button>
      <button id="btn03">点击box2向右移动</button>
      <button id="btn04">test</button>
      <br /><br />
      <div id="box1"></div>
      <div id="box2"></div>
      <div style="width: 0; height: 1000px; border-left: 1px black solid; position: absolute; left: 800px;">
  
  </body>
  
  </html>
  ```
  
  

  