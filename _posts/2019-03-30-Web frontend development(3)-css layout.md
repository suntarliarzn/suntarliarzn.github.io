---

title: Web Frontend Development (3) - css layout

key: C20190330

tags: CSS；float; flexbox; bootsrap;

layout: article
---

# Week Two: Web Frontend Development(3)---css layout

<!--more-->

# 3. CSS布局

## 3.1 CSS布局概述和示例

## 3.2 浮动与清除

- ### `float: left;right`

  - 定义元素在哪个方向浮动

  - 浮动元素会生成一个块级框，而不论它本身是何种元素。

    ```html
    <html>
    <head>
    <style type="text/css">
    ul
    {
    float:right;
    width:100%;
    padding:0;
    margin:0;
    list-style-type:none;
    }
    a
    {
    float:left;
    width:7em;
    text-decoration:none;
    color:white;
    background-color:purple;
    padding:0.2em 0.6em;
    border-right:1px solid white;
    }
    a:hover {background-color:#ff3300}
    li {display:inline}
    </style>
    </head>
    
    <body>
    <ul>
    <li><a href="#">Link one</a></li>
    <li><a href="#">Link two</a></li>
    <li><a href="#">Link three</a></li>
    <li><a href="#">Link four</a></li>
    </ul>
    
    <p>
    在上面的例子中，我们把 ul 元素和 a 元素浮向左浮动。li 元素显示为行内元素（元素前后没有换行）。这样就可以使列表排列成一行。ul 元素的宽度是 100%，列表中的每个超链接的宽度是 7em（当前字体尺寸的 7 倍）。我们添加了颜色和边框，以使其更漂亮。
    </p>
    
    </body>
    </html>
    
    ```

    

- ### `clear:left;right;both;none`

  - 定义忽略元素在哪个方向的浮动

  

## 3.3 让父元素围住浮动的子元素

- ### `Overflow`

  - 定义溢出元素内容区的内容会如何处理

    | 值      | 描述                                                     |
    | :------ | :------------------------------------------------------- |
    | visible | 默认值。内容不会被修剪，会呈现在元素框之外。             |
    | hidden  | 内容会被修剪，并且其余内容是不可见的。                   |
    | scroll  | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 |
    | auto    | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 |
    | inherit | 规定应该从父元素继承 overflow 属性的值。                 |

  - `overflow: hidden`

  - 父元素有`float`属性(改变父元素属性布局，不建议使用。)

- `<div style = "float:left;">`

  - (改变父元素属性布局，不建议使用。)

- 添加空的元素

  - ```html
    <p style="clear:both; display:block"></p>
    ```

  - **如果想让子元素清除父元素浮动，子元素不能为行内元素**

- ### **围住浮动样式集**

  ```html
          <style>
          #p1{
              width: 100px;
              height: 200px;
              margin: 0%;
              background-color: red;
              float: left;
          }
          #p2{
              width:200px;
              height: 100px;
              margin:0%;
              background-color: aqua;
              float:right;
          }
          }
          #div2{
             background-color: blue; 
          }
          .clearfix::after{
              content: '.';
              clear:both;
              display:block;
              visibility: hidden;
              height: 0px;
          } /*样式集*/
          </style>
      </head>
      <body>
          <div class="clearfix" id="div1">
              <p id="p1"> p1 </p>
              <p id="p2"> p2 </p>
          </div>
          <div id="div2">
              abcd
          </div>
  ```

  - `.clearfix::after{}`样式集

## 3.4 基于浮动的布局demo

- 微博三栏布局

  ```html
  <!doctype html>
  <html>
      <head>
          <style>
          *{margin: 0;padding: 0;}
          #div1{
              width: 1000px;
              background-color: aliceblue;
              margin:0 auto;
          }
          .clearfix::after{
              content: '.';
              clear:both;
              display:block;
              visibility: hidden;
              height: 0px;
          }
          #p1{
              width: 150px;
              height: 800px;
              margin: 0%;
              background-color: red;
              float: left;
          }
          #p2{
              width:600px;
              height: 800px;
              margin-right:10px;
              background-color: aqua;
              float:left;
          }
          #p3{
              width:230px;
              height: 800px;
              margin:0%;
              background-color: rgb(252, 10, 159);
              float:left;
              margin-right:10px;
          }        
  
          </style>
      </head>
      <body>
          <div class="clearfix" id="div1">
              <p id="p1"> p1 </p>
              <p id="p2"> p2 </p>
              <p id="p3"> p3 </p>
          </div>
  
  
      </body>
  </html>
  ```

- google drive三栏布局,中间栏自适应

  ```html
  <!doctype html>
  <html>
      <head>
          <style>
          *{margin: 0;padding: 0;}
          #div1{
              width:100%;
              background-color: aliceblue;
              margin:0 auto;
          }
          .clearfix::after{
              content: '.';
              clear:both;
              display:block;
              visibility: hidden;
              height: 0px;
          }
          #p1{
              width: 150px;
              height: 800px;
              margin: 0%;
              background-color: red;
              float: left;
          }
          #p2{
              height: 800px;
              margin-left: 160px;
              margin-right:240px;
              background-color: aqua;
  
          }
          #p3{
              width: 230px;
              height: 800px;
              margin:0%;
              background-color: rgb(252, 10, 159);
              float:right;
          }        
  
          </style>
      </head>
      <body>
          <div class="clearfix" id="div1">
              <p id="p1"> p1 </p>
              <p id="p3"> p3 </p>
              <p id="p2"> p2 </p>
  
          </div>
      </body>
  </html>
  ```

  

## 3.5 定位详解 `position`

1. 建立元素布局所用的定位机制。任何元素都可以定位，不过绝对或固定元素会生成一个**块级框**，而不论该元素本身是什么类型

2. ### `relative`相对定位

   - 作用：

     - 自身作为绝对定位参照物
     - 提升自己的层级
     - 设置z-index坐标值

   - 相对于其正常位置进行定位。

     ```css
             #p2{
                 width:200px;
                 height: 100px;
                 margin:0%;
                 background-color: aqua;
                 position: relative;
                 left:20px;
                 bottom:30px;
             }
     ```

     

3. ### `absolute`绝对定位

   - 作用：

     - 从元素中脱离出来
     - 以祖先元素为定位元素作为参照物
       - **如果祖先元素没有定位元素，以浏览器视口作为参照物**

   - 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。

     ```css
     h2.pos_abs
     {
     position:absolute;
     left:100px;
     top:150px
     }
     ```

     

4. ### `fixed`固定定位

   - 作用：

     - **固定在浏览器窗口固定位置**
     - 同`background-attachment:fixed`

   - 相对于浏览器窗口进行定位。

     ```css
             #p2{
                 width:200px;
                 height: 100px;
                 margin:0%;
                 background-color: aqua;
                 position: fixed;
                 left:20px;
                 bottom:30px;
             }
     ```

5. ### `z-index`层叠

   - 屏幕到用户坐标系

   - z-index只对**定位元素有作用**。要设置非static的定位属性，z-index才会生效。

   - 层叠规则 stacking order：

     1. 后来者居上的准则
     2.  `z-index`哪个大哪个上

     ![z-index](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/z-index.jpg)

   - **层叠**

     - [规范元素呈现规则]()

       


## 3.6 绝对定位的应用demo

![checkbox效果](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/check-box.jpg)

```css
<!doctype html>
<html>
    <head>
        <style>
            li {
                background:blueviolet;
                color: aliceblue;
                height:60px;
                margin-bottom: 10px;
                line-height: 60px;
                position:relative;
            }
            input{
                position:absolute;
                margin-right:80px;
                height:20px;
                width:20px;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <h2>check you have read:</h2>
        <ul>
            <li>Hello Code <input type = "checkbox"/></li>
            <li>master javascript <input type = "checkbox"/></li>
            <li>js fullstack path <input type = "checkbox"/></li>
        </ul>
    </body>
</html>
```



## 3.7 固定定位的应用demo

![navigation button](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/z-index.jpg)

```css
<!doctype html>
<html>
    <head>
        <style>
            body{
                height:900px;
            }
            li {
                background:blueviolet;
                color: aliceblue;
                height:60px;
                margin-bottom: 10px;
                line-height: 60px;
                position:relative;
            }
            input{
                position:absolute;
                right:80px;
                height:20px;
                width:20px;
                top: 20px;
            }
            button{
                width:60px;
                height:60px;
                position:fixed;
                right:50%;
                top:50%;

            }
        </style>
    </head>
    <body>
        <h2>check you have read:</h2>
        <ul>
            <li>Hello Code <input type = "checkbox"/></li>
            <li>master javascript <input type = "checkbox"/></li>
            <li>js fullstack path <input type = "checkbox"/></li>
            <button> 我要反馈</button> /*随窗口移动导航栏*/

        </ul>
    </body>
</html>
```



## 3.8 [Flexbox布局介绍](<http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html>)

- 用于改善在容器中列表排列，方向和顺序

- 应用于小的应用程序组件

- ### flex-container and flex-item

  - 采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

  - 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

    项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

    ![flex-container](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/flex%20container%20items.png)

- ### `display:flex`

  - 想要使用弹性盒布局只需要在父HTML元素设置`display`属性

    ```css
    .flex-container {
      display: -webkit-flex; /* Safari */
      display: flex;
    }
    ```

- ### `flex-direction`

  - 主轴方向，展示方向

  - `row`/`row-reverse`:水平方向

  - `column`/`column-reverse`:垂直方向

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/flex%20direction.png)

- ### `flex-wrap`

  - 是否换行

  - `nowrap`:flex项目在同一行显示，默认它们会伸缩以适应flex容器的宽度

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/nowrap.png)

  - `wrap`：flex项目在多行显示，从左向右，从上到下依次显示

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/wrap.jpg)

  - `wrap-reverse`:flex项目在多行显示，从左向右，从下到上 

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/wrap-reverse.jpg)

- ### `flex-flow`简写属性

  - 这个属性是`flex-direction`和`flex-wrap`属性的简写。

- ### `justify-content`

  - 沿flex容器当前行的主轴对齐flex项目

  - `flex-start`：与交叉轴的起点对齐。

  - `flex-end`：与交叉轴的终点对齐。

  - `center`：与交叉轴的中点对齐。

  - `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。

  - `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。

  - `stretch`（默认值）：轴线占满整个交叉轴。

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/justify-content.jpg)

- ### `align-items`

  - 适用于所有的flex容器，它是用来设置**每个flex元素在**  **侧轴**上的默认对齐方式。

  - `stretch`:填充整个高度（宽度）

  - `flex-start`:flex容器侧轴**开始处**

  - `flex-end`:flex容器侧轴**结束处**

  - `center`:flex容器交叉轴**中间**

  - `baseline`:基线对齐

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/align-items.png)

- ### `align-content`

  - 适用于所有的flex容器，它是用来设置**多行flex元素在**  **侧轴**上的默认对齐方式。

  - `flex-start`：与交叉轴的起点对齐。

  - `flex-end`：与交叉轴的终点对齐。

  - `center`：与交叉轴的中点对齐。

  - `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。

  - `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。

  - `stretch`（默认值）：轴线占满整个交叉轴。

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/align-content.png)

- ### `order`

  - 定义项目的排列顺序。数值越小，排列越靠前，默认为0。

    ```css
    .item {
      order: <integer>;
    }
    ```

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/order.png)

- ## `flex-grow`

  - 定义项目的放大比例，默认为`0`

  - 如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。**如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。**

    ```css
    .item {
      flex-grow: <number>; /* default 0 */
    }
    ```

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/flex-grow.png)

- ### `flex-shrink`

  - `flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小

  - 如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。**如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。**

    ```css
    .item {
      flex-shrink: <number>; /* default 1 */
    }
    ```

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/flex-shrink.jpg)

- ### `flex-basis`

  - `flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

  - 它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间。

    ```css
    .item {
      flex-basis: <length> | auto; /* default auto */
    }
    ```

- ### `flex`简写属性

  - `flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

  - 该属性有两个快捷值：`auto` (`1 1 auto`) 和 none (`0 0 auto`)。

    **建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。**

    ```css
    .item {
      flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    }
    ```

- ### `align-self`

  - `align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

    ```css
    .item {
      align-self: auto | flex-start | flex-end | center | baseline | stretch;
    }
    ```

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/alignself.png)

## 3.9 Flexbox相关属性详解

1. ### 元素居中显示

   - 利用flexbox居中，代码可维护性高。

     ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/demo%20center.jpg)

   ```html
   <!doctype html>
   <html>
       <style>
           *{margin:0; padding:0}
           .container{
               width:1200px;
               background-color: hotpink;
               height:100vh;
               display:flex;
               justify-content: center; /*水平居中*/
               align-items:center; /*垂直居中*/
           }
           .box{
               height:200px;
               font-size:50px;
               width:300px;
               background:gray;
           }
       </style>
       <body>
           <div class= "container">
               <div class="box box1">1</div>
           </div>
       </body>
   </html>
   ```

   

2. 自适应布局

## 3.10 [Flexbox应用demo](<https://css-tricks.com/snippets/css/a-guide-to-flexbox/>)

## 3.11 Flexbox兼容性

- [浏览器兼容性检查](<https://www.caniuse.com/#search=flexbox>)
- [浏览器支持代码替换](<http://autoprefixer.github.io/>)

## 3.12 Grid布局简介--实现一个简单的Grid系统

- [`网格系统（Grid System）`](<https://en.wikipedia.org/wiki/Grid_(graphic_design)>)：

  > In [graphic design](https://en.wikipedia.org/wiki/Graphic_design), a **grid** is a structure (usually [two-dimensional](https://en.wikipedia.org/wiki/Two-dimensional_space)) made up of a series of intersecting straight (vertical, horizontal, and angular) or curved lines (**grid lines**) used to structure content. The grid serves as an [armature](https://en.wikipedia.org/wiki/Armature_(sculpture)) or [framework](https://en.wikipedia.org/wiki/CSS_framework) on which a [designer](https://en.wikipedia.org/wiki/Designer) can organize graphic elements ([images](https://en.wikipedia.org/wiki/Image), [glyphs](https://en.wikipedia.org/wiki/Glyphs), [paragraphs](https://en.wikipedia.org/wiki/Paragraph), etc.) in a rational, easy-to-absorb manner. A grid can be used to organize graphic elements in relation to a page, in relation to other graphic elements on the page, or relation to other parts of the same graphic element or [shape](https://en.wikipedia.org/wiki/Shape).

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/grid%20system.jpg)

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/002/grid%20system%202.jpg)

```html
<! doctype html>
<html>
    <style>
        .wrapper{
            width: 1100px;
            margin:0 auto;
            background-color:beige;
        }   

        .row1{
            display: flex;
            flex-flow: row wrap;
            justify-content:space-around;
        }
        .row2{
            display: flex;
            flex-flow: row wrap;
        }
        .col{
            font-size: 50px;
            width:70px;
            text-align:center;
            background-color:wheat;
        }
    </style>
    <body>
        <div class = "wrapper">
            <div class = "row1">
                <div class = "col"> 1</div>
                <div class = "col"> 2</div>
                <div class = "col"> 3</div>
                <div class = "col"> 4</div>
                <div class = "col"> 5</div>
                <div class = "col"> 6</div>
                <div class = "col"> 7</div>
                <div class = "col"> 8</div>
                <div class = "col"> 9</div>
                <div class = "col"> 10</div>
                <div class = "col"> 11</div>
                <div class = "col"> 12</div>
            </div>
            <div class = "row2">
                    <div class = "col" id="1" style = "flex-grow:1"> A</div>
                    <div class = "col" id="2" style = "flex-grow:2">B</div>
                    <div class = "col" id="3" style = "flex-grow:3">C</div>
                    <div class = "col" id="4" style = "flex-grow:4">D</div>
                </div>
        </div>

    </body>
</html>
```



## 3.13 Booostrap Grid 系统应用demo

- [Bootstrap](<https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)>)

  > **Bootstrap** is a [free and open-source](https://en.wikipedia.org/wiki/Free_and_open-source) [CSS framework](https://en.wikipedia.org/wiki/CSS_framework) directed at responsive, mobile-first [front-end web development](https://en.wikipedia.org/wiki/Front-end_web_development). It contains [CSS](https://en.wikipedia.org/wiki/CSS)- and (optionally) [JavaScript](https://en.wikipedia.org/wiki/JavaScript)-based design templates for [typography](https://en.wikipedia.org/wiki/Web_design#Typography), [forms](https://en.wikipedia.org/wiki/Form_(HTML)), [buttons](https://en.wikipedia.org/wiki/Button_(computing)#HTML), [navigation](https://en.wikipedia.org/wiki/Web_navigation#Local_website_navigation) and other interface components.

  - [`响应式网页设计(responsive web design)`](<https://en.wikipedia.org/wiki/Responsive_web_design>)：an approach to [web design](https://en.wikipedia.org/wiki/Web_design) that makes web pages render well on a variety of devices and window or screen sizes. Recent work also considers the viewer proximity as part of the viewing context as an extension for RWD.[[1\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-1) Content, design and performance are necessary across all devices to ensure usability and satisfaction.[[2\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-fluid_grid-2)[[3\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-RWD_Exs-3)[[4\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-ZMGflexEx-4)[[5\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-Schade_2014-5)
  - A site designed with RWD[[2\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-fluid_grid-2)[[6\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-6) adapts the layout to the viewing environment by using fluid, proportion-based grids,[[7\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-7)[[8\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-EM_FG-8) flexible images,[[9\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-EM_FI-9)[[10\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-10)[[11\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-EM-11) and [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3) [media queries](https://en.wikipedia.org/wiki/Media_queries),[[4\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-ZMGflexEx-4)[[12\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-ZMGmediaQ-12)[[13\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-13) an extension of the `@media` rule, in the following ways:[[14\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-14)
    - The fluid [grid](https://en.wikipedia.org/wiki/Grid_(page_layout)#Grid_use_in_web_design) concept calls for page element sizing to be in relative units like percentages, rather than absolute units like [pixels](https://en.wikipedia.org/wiki/Pixel) or [points](https://en.wikipedia.org/wiki/Point_(typography)).[[8\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-EM_FG-8)
    - Flexible images are also sized in relative units, so as to prevent them from displaying outside their containing [element](https://en.wikipedia.org/wiki/HTML_element).[[9\]](https://en.wikipedia.org/wiki/Responsive_web_design#cite_note-EM_FI-9)
    - Media queries allow the page to use different CSS style rules based on characteristics of the device the site is being displayed on, e.g. width of the rendering surface (browser window width or a physical display size).



​    