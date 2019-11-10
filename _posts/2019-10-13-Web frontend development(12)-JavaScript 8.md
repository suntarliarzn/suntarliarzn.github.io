---

title: Web Frontend Development (12) - JavaScript 08

key: C20191013

tags: JavaScript; 样式; 样式属性; 事件; 事件绑定; 事件冒泡; 事件委派; 事件传播； 拖拽事件； 滚轮事件； 键盘事件

layout: article
---

# Week Ten: Web Frontend Development(12)---JavaScript 08

<!--more-->

## 12.1 DOM操作CSS对象

- ### JS修改样式

  - 语法
    - `元素.style.样式名 = 样式值`
  - 注意
    - **如果CSS的样式名字有-,比如`background-color`，需要将这种样式名改为驼峰命名方法：去掉`-`，然后将`-`后的字母大写，比如`backgroundColor`。**
    - 我们通过style属性设置的样式都是内联样式，内联样式有较高的**优先级**，所以通过JS修改的样式会立即显示。
      - 在样式中写了`!important`，则对样式会有最高优先级，即使通过JS也不能覆盖该样式，此时JS修改样式将失效。

- #### JS读取内联样式

  - 语法
    - `元素.style.样式名`
  - 注意
    - 通过style属性设置读取的都是**内联样式**，无法读取样式表中的样式。

- #### 读取当前样式

  - 语法
    - `元素.currentStyle.样式名`
  - 注意
    - 如果当前元素没有设置该样式，则获取它的默认值。
    - **只支持IE，Chorem和火狐不支持。**
  - 其他浏览器解决方法
    - **`getComputedStyle()`对象方法**
    - 这个方法是window的方法，可以直接使用
    - 语法
      - `getComputedStyle(要获取样式元素，null).样式名`
    - 该方法会返回一个对象，对象中封装了当前元素对应的样式。
    - **如果获取的样式没有设置，则会获取到真实的值。**

  ```javascript
  /*正常浏览器*/
  var obj = getComputedStyle(box1, null);
  	alert(obj.backgroundColor);
  
  /*IE8*/
  
  alert(box1.currentStyle.backgroundColor);
  ```

  - #### 解决兼容性问题

    ```javascript
    function getStyle(obj, name){
        /*正常浏览器*/
         var obj1 = getComputedStyle(obj, null)[name];
        /*IE8*/
         var obj2 = obj.currentStyle[name];
        
        if(window.getComputedStyle){return obj1}
        else{return obj2};
           }
    ```

- ### 其他样式相关属性

  - #### `element.clientWidth`/`element.clientHeight`

    - 这两个属性可以获取元素的可见宽度和高度。
    - 这些属性都不带`px`，返回都是一个数字，可以直接进行计算。
    - **获取元素高度和宽度，包括内容(width/height)和内边距（`padding`）**
    - **只读，不能修改。**

  - #### `element.offsetHeight`/`element.offsetWidth`

    - 这两个属性可以获取元素的**整个**宽度和高度。
    - **获取元素高度和宽度，包括内容(width/height)、内边距（`padding`）和边框（border）**

  - #### `element.offsetParent`

    - 可以获取当前元素的定位父元素。
    - **与`parentNode`区别：会获取到里当前元素最近的开启了定位的祖先元素。**
    - 如果所有祖先元素都没开启定位，则返回`body`

  - #### `element.offsetLeft`/`element.offsetTop`

    - `offsetLeft`
      - 当前元素相对于其父元素的水平偏移量。
    - `offsetTop`
      - 当前元素相对于其父元素的垂直偏移量。

  - #### `element.scrollHeight` / `element.scrollWidth` 

    - 获取滚动条整体高度

  - #### `element.scrollLeft` /`element.scrollTop`

    - 获取滚动条偏移距离。

  - **当满足`scrollHeight - scrollTop == clientHeight`,说明垂直滚动条滚动到底了。**

  - #### `disabled ="disabled"`

    - 如果为表单添加`disabled ="disabled"`,则表单项将变为不可用的状态。
    - 可以设置元素是否禁用
      - `true`:不可用。
      - `false`:可用。

  

  ## 12.2 事件对象
  
  当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数。
  
  在事件对象中封装了当前事件相关的一切信息，比如：鼠标坐标，键盘哪个按键被按下，鼠标滚轮滚动方向。
  
   查找[HTML DOM Event对象]( https://www.w3school.com.cn/jsref/dom_obj_event.asp )
  
  - 注意：在IE8中，响应函数被触发时，浏览器不会传递事件对象。
  
    - IE8以下浏览器中，是将事件对象作为**``window``全局对象保存**。
  
    - 兼容性解决方法
  
      ```html
      event = event || window.event;
      ```
  
      
  
  - #### `Onscroll`事件
  
    - 该事件会在元素的滚动条滚动时触发。
    
  - #### ``onmousemove``事件
  
    - 该事件会在鼠标在元素中移动是被出发。
  
  - #### ``clientX`` /`clientY`事件
  
    - 属性返回当事件被触发时鼠标指针向对于浏览器页面（或客户区）的水平/垂直坐标。客户区指的是当前窗口。
    - `event.clientX`/`event.clientY`
    
  - #### `screenX`/`screenY`事件
  
    - 可返回事件发生时鼠标指针相对于电脑屏幕的水平/垂直坐标。
  
  - #### `pageX`/`pageY`事件
  
    - 可返回事件发生时鼠标指针相对于整个页面的水平/垂直坐标。
  
    - IE8不支持，只能用`clientX`/`clientY`
  
      兼容IE8方法：
  
      ```html
      		<script type="text/javascript">
      			window.onload = function(){
      				var box1 = document.getElementById("box1");
      				document.onmousemove = function(event){
      					event = event || window.event;
      				/*
      				*chrome认为浏览器的滚动条是body的，可以通过document.body.scrollTop来获取。
      				*火狐等浏览器认为滚动条是html的，可以通过document..documentElement.scrollTop来获取。
      				*/
      
      				var st = document.body.scrollTop || document.documentElement.scrollTop;
      				var sl = document.body.scrollLeft || document.documentElement.scrollLeft;
      					var x = event.clientX;
      					var y = event.clientY;
      					box1.style.left = x + sl+"px";
      					box1.style.top = y + st +"px";
      				}	
      			}	
      		</script>
      ```
  
- ### 事件冒泡(Bubble)

  - 冒泡指的是事件向上的传导，当后代元素上的事件被触发时，其祖先元素的**相同事件**会被触发。

  - 在大部分时候，冒泡都非常有用。

  - 如果不希望事件冒泡，可以通过事件对象来取消冒泡。

    `event.cancelBubble = true`

- ### 事件委派

  - 指将事件统一指定给元素的共同的祖先元素，这样当后代元素上的事件被触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数处理事件。

    - 好处：利用了冒泡，通过委派可以减少委派的次数，提高程序性能。

    - 坏处：需要进行判断，减少对其他元素干扰。

      - #### `event.target`

        - 可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。

        ```html
        <!DOCTYPE html>
        <html>
        	<head>
        		<meta charset="utf-8" />
        		<title></title>
        		<script type="text/javascript">
        			
        			window.onload = function(){
        				
        				var u1 = document.getElementById("u1");
        				
        				//点击按钮以后添加超链接
        				 var btn01 = document.getElementById("btn01");
        					//创建一个li
        					btn01.onclick= function(){
                                var li = document.createElement("li")
                                li.innerHTML = "<a href='javascript:;' class='link'>超链接</a>";
                                u1.appendChild(li);
                            }
        					
        					//将li添加到ul中
        				
        				
        				/*
        				 * 为每一个超链接都绑定一个单击响应函数
        				 * 这里我们为每一个超链接都绑定了一个单击响应函数，这种操作比较麻烦，
        				 * 	而且这些操作只能为已有的超链接设置事件，而新添加的超链接必须重新绑定
        				 */
        				//获取所有的a
        
        				//遍历
        				/*for(var i=0 ; i<allA.length ; i++){
        					allA[i].onclick = function(){
        						alert("我是a的单击响应函数！！！");
        					};
        				}*/
        				
        				/*
        				 * 我们希望，只绑定一次事件，即可应用到多个的元素上，即使元素是后添加的
        				 * 我们可以尝试将其绑定给元素的共同的祖先元素
        				 * 
        				 * 事件的委派
        				 * 	- 指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素
        				 * 		从而通过祖先元素的响应函数来处理事件。
        				 *  - 事件委派是利用了冒泡，通过委派可以减少事件绑定的次数，提高程序的性能
        				 */
        				
        				//为ul绑定一个单击响应函数
                        u1.onclick = function(event){
                            event = event || window.event;
        					
        					/*
        					 * target
        					 * 	- event中的target表示的触发事件的对象
        					 */
        					//alert(event.target)
        					
        					
        					//如果触发事件的对象是我们期望的元素，则执行否则不执行
                            if(event.target.className == "link" ){
                                alert("我是ul的单击响应函数");
                            }
        					
        				};
        				
        			};
        			
        		</script>
        	</head>
        	<body>
        		<button id="btn01">添加超链接</button>
        		
        		<ul id="u1" style="background-color: #bfa;">
        			<li>
        				<p>我是p元素</p>
        			</li>
        			<li><a href="javascript:;" class="link">超链接一</a></li>
        			<li><a href="javascript:;" class="link">超链接二</a></li>
        			<li><a href="javascript:;" class="link">超链接三</a></li>
        		</ul>
        		
        	</body>
        </html>
        ```

- ### 事件绑定

  - 使用`对象.事件=函数`的形式绑定响应函数，只能**为一个元素的一个事件绑定一个响应函数**。

    - 不能绑定多个。如果绑定了多个，后面的函数会覆盖前面的函数。

  - `addEventListener`()

    - 通过这个方法也可以为元素绑定响应函数。

    - 参数：

      1. 事件字符串，不要`on`

      2. 回调函数，当事件触发时该函数会被调用。

      3. 是否在捕获阶段触发事件，不要一个布尔值，一般为`false`

         `btn01.addEventListener("click",function(){alert(1);}, false);`

  - 使用`addEventListener()`可以同时为一个元素的相同事件同时绑定多个响应函数。这样当事件被触发时，响应函数会按照函数的绑定顺序执行。

  - **该方法不支持IE8**

    - IE8可使用`attachEvent()`
    - 参数：
      1. 事件字符串，要加`on`
      2. 回调函数
    - 这个方法也可以同时为一个事件绑定多个响应函数。
    - 不同的是：**后绑定先执行，执行顺序和`addEventListener()`相反。**

  - 兼容性问题处理：

    ```javascript
    			//定义一个函数，用来为指定元素绑定响应函数
    			/*
    			 * addEventListener()中的this，是绑定事件的对象
    			 * attachEvent()中的this，是window
    			 *  需要统一两个方法this
    			 */
    			/*
    			 * 参数：
    			 * 	obj 要绑定事件的对象
    			 * 	eventStr 事件的字符串(不要on)
    			 *  callback 回调函数
    			 */
    			function bind(obj , eventStr , callback){
                    if(obj.addEventListener){obj.addEventListener(eventStr,callback, false);
                        }else{
                            obj.attachEvent("on"+eventStr,function()){
                                //在匿名函数中调用回调函数，使`this`变为obj
                                callback.call(obj);
                            };
                        }
                }
    ```

- ### 事件传播

  - 关于事件的传播网景公司和微软公司有不同的理解
    - 微软公司认为事件应该是由内向外传播，也就是当事件触发时，应该先触发当前元素上的事件，然后再向当前元素的祖先元素上传播，也就说事件应该在冒泡阶段执行。
    - 网景公司认为事件应该是由外向内传播的，也就是当前事件触发时，应该先触发当前元素的最外层的祖先元素的事件，然后在向内传播给后代元素。
  - W3C综合了两个公司的方案，将事件传播分成了三个阶段
    1. 捕获阶段
       - 在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件。
    2. 目标阶段
       - 事件捕获到目标元素，捕获结束开始在目标元素上触发事件。
    3. 冒泡阶段
       - 事件从目标元素向他的祖先元素传递，依次触发祖先元素上的事件。

  - 如果希望在捕获阶段就触发事件，可以将addEventListener()的第三个参数设置为true。
    - 一般情况下我们不会希望在捕获阶段触发事件，所以这个参数一般都是false。

  - IE8及以下的浏览器中没有捕获阶段。

- ### 拖拽事件

  - 拖拽事件

    1. 鼠标点击拖拽元素上时，开始拖拽。---`onmousedown`
    2. 当鼠标移动时被拖拽元素跟随鼠标移动。---`onmousemove`
    3. 当鼠标松开时，被拖拽元素固定在当前位置。---`onmouseup`

    ```html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="UTF-8">
    		<title></title>
    		<style type="text/css">
    			
    			#box1{
    				width: 100px;
    				height: 100px;
    				background-color: red;
    				position: absolute;
    			}
    			
    			#box2{
    				width: 100px;
    				height: 100px;
    				background-color: yellow;
    				position: absolute;
    				
    				left: 200px;
    				top: 200px;
    			}
    			
    		</style>
    		
    		<script type="text/javascript">	
    			window.onload = function(){
    				/*
    				 * 拖拽box1元素
    				 *  - 拖拽的流程
    				 * 		1.当鼠标在被拖拽元素上按下时，开始拖拽  onmousedown
    				 * 		2.当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove
    				 * 		3.当鼠标松开时，被拖拽元素固定在当前位置	onmouseup
    				 */
    				
    				//获取box1
    				var box1 = document.getElementById("box1");
    				//为box1绑定一个鼠标按下事件
    				//当鼠标在被拖拽元素上按下时，开始拖拽  onmousedown
    					box1.onmousedown = function(event){
    					event = event || wodow.event;
    					//div的偏移量 鼠标.clentX - 元素.offsetLeft
    					//div的偏移量 鼠标.clentY - 元素.offsetTop
    					var ol = event.clientX - box1.offsetLeft
    					var ot = event.clientY - box1.offsetTop
    						//为document绑定一个onmousemove事件
    						//当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove
    						//获取鼠标的坐标
    						document.onmousemove = function(event){
    						event = event || window.event;
    						var left = event.clientX;
    						var top = event.clientY;
    						//修改box1的位置
    						box1.style.left = left-ol +"px";
    						box1.style.top = top-ot +"px";	
     
    
    					};
    					
    					//为document绑定一个鼠标松开事件
    					document.onmouseup = function(){
    						//当鼠标松开时，被拖拽元素固定在当前位置onmouseup
    						//取消document的onmousemove事件
    						document.onmousemove = null;
    						//取消document的onmouseup事件
    						document.onmouseup = null;
    					};
                    //取消当前操作
                    return false
    				};
    			};
    			
    		</script>
    	</head>
    	<body>
    		<div id="box1"></div>
    		
		<div id="box2"></div>
    	</body>
    </html>
    ```
    
    - debug
    
      当我们拖拽一个网页中的内容时，浏览器会默认去搜索引擎中搜索内容。此时会导致拖拽的异常，这个是浏览器提供的默认行为。
    
      如果不希望发生这个行为，可以通过`return false`来取消默认行为。
    
      - 但是对IE8不起作用。需要用`element.setCapture`和`element.releaseCapture`
    
        - `element.setCapture()`
    
          当调用一个元素的`setCapture()`方法后，这个元素会把下一次所有的鼠标按下相关的事件捕获到自身上。
    
        - `element.releaseCapture()`
    
           一旦释放鼠标捕获，鼠标事件将不再全部被定向到启用了鼠标捕获的元素。 
    
        - **只支持1IE，在火狐中不会报错，但在Chrome中，会报错。**
    
          - 兼容性
    
            ```html
            if (element.setCapture()){
            element.setCapture();
            }
            
            element.releaseCapture && element.releaseCapture()
            ```
  
- ### 滚轮事件

  - #### `element.onmousewheel`

     当鼠标滚轮正在被滚动时运行，火狐不支持该属性。

    - 在火狐中使用`DOMMouseScroll`来绑定滚动事件。

      该事件需要通过`addEventListener()`函数来绑定。

      ```html
      bind(element, "DOMMouseScroll", function);
      ```

  - #### `event.wheelDelta`

    - 可以获取鼠标滚轮滚动的方向，向上滚120，向下滚-120

    - `wheelDelta`这个值我们不看大小，只看正负。
    - 火狐不支持。火狐中使用`event.detail`，向上滚为-3，向下滚为3。

    ```html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="UTF-8">
    		<title></title>
    		<style type="text/css">
    			
    			#box1{
    				width: 100px;
    				height: 100px;
    				background-color: red;
    			}
    			
    		</style>
    		<script type="text/javascript">
    			
    			window.onload = function(){
    				
    				
    				//获取id为box1的div
                    var box1 = document.getElementById("box1");
    				
    				//为box1绑定一个鼠标滚轮滚动的事件
    				/*
    				 * onmousewheel鼠标滚轮滚动的事件，会在滚轮滚动时触发，
    				 * 	但是火狐不支持该属性
    				 * 
    				 * 在火狐中需要使用 DOMMouseScroll 来绑定滚动事件
    				 * 	注意该事件需要通过addEventListener()函数来绑定
    				 */
    
    				box1.onmousewheel = function(event){
    					
    					event = event || window.event;
    					
    					
    					//event.wheelDelta 可以获取鼠标滚轮滚动的方向
    					//向上滚 120   向下滚 -120
    					//wheelDelta这个值我们不看大小，只看正负
    					
    					//alert(event.wheelDelta);
    					
    					//wheelDelta这个属性火狐中不支持
    					//在火狐中使用event.detail来获取滚动的方向
    					//向上滚 -3  向下滚 3
    					//alert(event.detail);
    					
    					if (event.wheelDelta > 0 || event.detail < 0){
    
    
    					/*
    					 * 当鼠标滚轮向下滚动时，box1变长
    					 * 	当滚轮向上滚动时，box1变短
    					 */
    					//判断鼠标滚轮滚动的方向
    					
    						//向上滚，box1变短
                            box1.style.height = box1.clientHeight - 100 + "px";
                        }else{
                        //向下滚，box1变长
                        box1.style.height = box1.clientHeight + 100 + "px";        
                        }	
    						
    					
    					/*
    					 * 使用addEventListener()方法绑定响应函数，取消默认行为时不能使用return false
    					 * 需要使用event来取消默认行为event.preventDefault();
    					 * 但是IE8不支持event.preventDefault();这个玩意，如果直接调用会报错
    					 */
                         event.preventDefault && event.preventDefault();
    					
    					
    					/*
    					 * 当滚轮滚动时，如果浏览器有滚动条，滚动条会随之滚动，
    					 * 这是浏览器的默认行为，如果不希望发生，则可以取消默认行为
    					 */
                        return false;
    					
    					
    					
    					
    				};
    				
    				//为火狐绑定滚轮事件
    				bind(box1,"DOMMouseScroll",box1.onmousewheel);
    				
    				
    			};
    			
    			
    			function bind(obj , eventStr , callback){
    				if(obj.addEventListener){
    					//大部分浏览器兼容的方式
    					obj.addEventListener(eventStr , callback , false);
    				}else{
    					/*
    					 * this是谁由调用方式决定
    					 * callback.call(obj)
    					 */
    					//IE8及以下
    					obj.attachEvent("on"+eventStr , function(){
    						//在匿名函数中调用回调函数
    						callback.call(obj);
    					});
    				}
    			}
    			
    		</script>
    	</head>
    	<body style="height: 2000px;">
    		
    		<div id="box1"></div>
    		
    	</body>
    </html>
    ```

    

- ### 键盘事件

  - #### `element.onkeydown`

    - 键盘被按下
    - 一直按着某个按键不松手，事件将会连续触发。
    - `onkeydown`连续触发时，第一次和第二次之间会稍微卡顿一下，其他次数将连续触发。
      - 这种设计是为了防止误操作。

  - #### `element.onkeyup`

    - 键盘被松开

  - #### `element.onkeypress`

    - 键盘被按下并松开

  - 键盘事件一般都会绑定给一些可以获取到焦点的对象或者是document

  - #### 属性

    - ##### `keyCode`

      - 获取按键编码。

    - `altKey`/`ctrlKey`/`shiftKey`

      - 判断`alt`/`ctrl`/`shift`是否被按下。
        - 如果被按下则返回`true`,否则返回`false`。

    ```html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="UTF-8">
    		<title></title>
    		<script type="text/javascript">
    			
    			window.onload = function(){
    				
                    document.onkeypress = function(event){
                        event = event || window.event;
                        if(event.keyCode = 89 && event.ctrlKey){
                            console.log ("ctrl和y都被按下了");
                        };
                    };
    			};
    			
    			
    		</script>
    	</head>
    	<body>
    		
    		<input type="text" />
    		
    	</body>
    </html>
    ```

  - 文本框

    - 在文本框中输入内容，属于`onkeydown`的默认行为，如果在`onkeydown`中取消了默认行为`return false`，则输入的内容，不会出现在文本框中。

    - 练习：禁止输入数字

      ```html
      <!DOCTYPE html>
      <html>
      	<head>
      		<meta charset="UTF-8">
      		<title></title>
      		<script type="text/javascript">
      			
      			window.onload = function(){
      				
                      document.onkeypress = function(event){
                          event = event || window.event;
                          if(event.keyCode = 89 && event.ctrlKey){
                              console.log ("ctrl和y都被按下了");
                          };
                      };
      			};
      			
      			
      		</script>
      	</head>
      	<body>
      		
      		<input type="text" />
      		
      	</body>
      </html>
      ```

      

  - 键盘div练习 

    ```html
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style type="text/css">
            #box1 {
                width: 100px;
                height: 100px;
                background-color: red;
                position: absolute;
            }
        </style>
    
        <script type="text/javascript">
            //使div可以根据不同的方向键向不同的方向移动
            /*
             * 按左键，div向左移
             * 按右键，div向右移
             * 。。。
             */
            window.onload = function () {
                document.onkeydown = function (event) {
                    event = event || window.event;
                    var speed = 10;
                    if (event.ctrlKey) {
                        speed = 50;
                    }
                    // → 39
                    // ← 37
                    // 上 38
                    // 下 40
                    switch (event.keyCode) {
                        case 37:
                            box1.style.left = box1.offsetLeft - speed + "px";
                            break;
                        case 39:
                            box1.style.left = box1.offsetLeft + speed + "px";
                            break;
                        case 38:
                            box1.style.top = box1.offsetTop - speed + "px";
                            break;
                        case 40:
                            box1.style.top = box1.offsetTop + speed + "px";
                            break;
                    };
                };
            };
        </script>
    </head>
    
    <body>
        <div id="box1"></div>
    </body>
    
    </html>
    ```

    

    

  

  
