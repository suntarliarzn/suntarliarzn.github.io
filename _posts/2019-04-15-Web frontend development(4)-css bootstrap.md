---

title: Web Frontend Development (4) - CSS RWD

key: C20190415

tags: CSS; float; flexbox; bootsrap; transform; transition; animation;

layout: article
---

# Week Two: Web Frontend Development(4)---CSS RWD

<!--more-->

# 4. CSS高级

## 4.1 响应式设计(RWD)

- ### CSS3新单位`vw`、`vh`、`vmin`、`vmax`

  - `px`:固定像素

  - `em`/`rem`:　相对长度单位，意思是长度不是定死了的，更适用于响应式布局。对于em和rem的区别一句话概括：**em相对于父元素,一般为`font-size:...`，而rem相对于根元素`<html>`。**

  - **vw**、**vh**、**vmin**、**vmax** 是一种视窗单位，也是相对单位。它相对的不是父节点或者页面的根节点。而是由视窗（**Viewport**）大小来决定的，单位 **1**，代表类似于 **1%**。

  - 视窗(**Viewport**)是你的浏览器实际显示内容的区域—，换句话说是你的不包括工具栏和按钮的网页浏览器。

  - > **vw**：视窗宽度的百分比（**1vw** 代表视窗的宽度为 **1%**）**vh**：视窗高度的百分比**vmin**：当前 **vw** 和 **vh** 中较小的一个值
    >
    > **vmax**：当前 **vw** 和 **vh** 中较大的一个值

  - vw、vh 与 % 百分比的区别

    - **%** 是相对于父元素的大小设定的比率，**vw**、**vh** 是视窗大小决定的。
    - **vw**、**vh** 优势在于能够直接获取高度，而用 **%** 在没有设置 **body** 高度的情况下，是无法正确获得可视区域的高度的，所以这是挺不错的优势。

  - vmin、vmax 用处

    - 做移动页面开发时，如果使用 **vw**、**wh** 设置字体大小（比如 **5vw**），在竖屏和横屏状态下显示的字体大小是不一样的。
    - 由于 **vmin** 和 **vmax** 是当前较小的 **vw** 和 **vh** 和当前较大的 **vw** 和 **vh**。这里就可以用到 **vmin** 和 **vmax**。使得文字大小在横竖屏下保持一致。

- ### 流式网格（fluid grid）

  - 元素宽高度用**相对长度**，比如：100%,vm,vh...
  - 图片自适应(flexible images):`max-width:100%`

- ### 媒体查询（media query）

  - a method of testing certain aspects of the user agent or device that the document is being displayed in. 

  - **Media Types**

    - `all`:matches all devices
    - `screen`: matches all devices that aren't `print` or `speech`.

  - **Media Features**

    - `width`

      ```css
      @media all/screen and (min-width: 20em) { … }
      ```

    - `height`

      ```css
      @media (min-height: 20em) { … }
      ```

    - `aspect-ratio`

      ```css
      @media (min-aspect-ratio:16/9) { … }
      ```

    - `orientation`

      ```css
      @media (orientation:portrait) { … } /*竖屏，高>宽*/
      @media (orientation:landscape) { … } /*竖屏，高<宽*/
      ```

  

## 4.2 移动优先的响应式设计(Mobile-first RWD)

  - 优先设计移动端UI和网页

  - 再通过`@media`设计不同屏幕的页面。

  - 常用屏幕尺寸：

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/003/screen%20size.jpg)

    ```css
    @media screen and (min-width:960px) and (max-width:1200px){} /*选择屏幕宽度区间*/
    ```

  - **注意顺序：**

    @media (min-width: 768px){ //>=768的设备 }

    @media (min-width: 992px){ //>=992的设备 }

    @media (min-width: 1200){ //>=1200的设备 }

    如果把768px放在后面，由于1440>768那么你的1200就会失效。

    所以我们**用min-width时，小的放上面大的在下面**，同理如果是**用max-width那么就是大的在上面，小的在下面**

    @media (max-width: 1199){ //<=1199的设备 }

    @media (max-width: 991px){ //<=991的设备 }

    @media (max-width: 767px){ //<=768的设备 }

  

## 4.3 `Transfrom`属性 

- The `transform` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property lets you **rotate, scale, skew, or translate** an element. It modifies the coordinate space of the CSS [visual formatting model](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model).

- > Only transformable element can be `transform`ed. That is, all elements whose layout is governed by the CSS box model **except for: [non-replaced inline boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model#Inline-level_elements_and_inline_boxes), [table-column boxes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col), and [table-column-group boxes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup).**

  | 值                                                           | 描述                                    |
  | :----------------------------------------------------------- | :-------------------------------------- |
  | none                                                         | 定义不进行转换。                        |
  | matrix(*n*,*n*,*n*,*n*,*n*,*n*)                              | 定义 2D 转换，使用六个值的矩阵。        |
  | matrix3d(*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*) | 定义 3D 转换，使用 16 个值的 4x4 矩阵。 |
  | translate(*x*,*y*)                                           | 定义 2D 转换。                          |
  | translate3d(*x*,*y*,*z*)                                     | 定义 3D 转换。                          |
  | translateX(*x*)                                              | 定义转换，只是用 X 轴的值。             |
  | translateY(*y*)                                              | 定义转换，只是用 Y 轴的值。             |
  | translateZ(*z*)                                              | 定义 3D 转换，只是用 Z 轴的值。         |
  | scale(*x*[,*y*]?)                                            | 定义 2D 缩放转换。                      |
  | scale3d(*x*,*y*,*z*)                                         | 定义 3D 缩放转换。                      |
  | scaleX(*x*)                                                  | 通过设置 X 轴的值来定义缩放转换。       |
  | scaleY(*y*)                                                  | 通过设置 Y 轴的值来定义缩放转换。       |
  | scaleZ(*z*)                                                  | 通过设置 Z 轴的值来定义 3D 缩放转换。   |
  | rotate(*angle*)                                              | 定义 2D 旋转，在参数中规定角度。        |
  | rotate3d(*x*,*y*,*z*,*angle*)                                | 定义 3D 旋转。                          |
  | rotateX(*angle*)                                             | 定义沿着 X 轴的 3D 旋转。               |
  | rotateY(*angle*)                                             | 定义沿着 Y 轴的 3D 旋转。               |
  | rotateZ(*angle*)                                             | 定义沿着 Z 轴的 3D 旋转。               |
  | skew(*x-angle*,*y-angle*)                                    | 定义沿着 X 和 Y 轴的 2D 倾斜转换。      |
  | skewX(*angle*)                                               | 定义沿着 X 轴的 2D 倾斜转换。           |
  | skewY(*angle*)                                               | 定义沿着 Y 轴的 2D 倾斜转换。           |
  | perspective(*n*)                                             | 为 3D 转换元素定义透视视图。            |

- [示例](<https://c.runoob.com/codedemo/3391>)

- `Transform-origin`

  - the point around which a transformation is applied

- ```css
  <!DOCTYPE html>
  <html>
  <head>
  <style>
  #div1
  {
  height: 150px;
  width: 150px;
  margin: 50px;
  padding:10px;
  border: 1px solid black;
  }
  
  #div2
  {
  padding:50px;
  border: 1px solid black;
  background-color: yellow;
  transform: translate(50px, 50px) rotate(45deg) scale(1.5) skew(30deg, 10deg) ;
  -webkit-transform:rotate(45deg) scale(1.5) translate(50px, 50px) skewX(50deg);
  transform-origin: left center;
  -webkit-transform-origin: left center; 
  }
  </style>
  </head>
  
  <body>
  
  <div id="div1">
    <div id="div2">HELLO</div>
  </div>
   
  </body>
  </html>
  ```

  

- ### **3D**

  - [3D效果讲解](<https://www.cnblogs.com/shenzikun1314/p/6390181.html>)
    - 3D位移：CSS3中的3D位移主要包括translateZ()和translate3d()两个功能函数；
    - 3D旋转：CSS3中的3D旋转主要包括rotateX()、rotateY()、rotateZ()和rotate3d()四个功能函数；
    - 3D缩放：CSS3中的3D缩放主要包括scaleZ()和scale3d()两个功能函数；
    - 3D矩阵：CSS3中3D变形中和2D变形一样也有一个3D矩阵功能函数matrix3d()。
  - `Perspective:number`
    - 定义 3D 元素距视图的距离,以像素计。
  - `Perspective-origin`
    - 定义 3D 元素所基于的 X 轴和 Y 轴。该属性允许改变 3D 元素的底部位置。
    - **目前浏览器都不支持 perspective-origin 属性。Chrome 和 Safari 支持替代的 -webkit-perspecitve-origin 属性。**

## 4.4 `Transition`属性

- 设置元素过渡效果

- 过渡效果属性：[CSS animated properties](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_animated_properties)

  

- | 值                           | 描述                                       |
  | :--------------------------- | :----------------------------------------- |
  | *transition-property*        | 指定CSS属性的name，transition效果          |
  | *transition-duration*        | transition效果需要指定多少秒或毫秒才能完成 |
  | *transition-timing-function* | 指定transition效果的转速曲线               |
  | *transition-delay*           | 定义transition效果开始的时候               |

-  ### `transition-timing-function`

  | 值                            | 描述                                                         |
  | :---------------------------- | :----------------------------------------------------------- |
  | linear                        | 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。 |
  | ease                          | 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。 |
  | ease-in                       | 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。  |
  | ease-out                      | 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。  |
  | ease-in-out                   | 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。 |
  | cubic-bezier(*n*,*n*,*n*,*n*) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。 |

  - [贝塞尔曲线生成工具](http://cubic-bezier.com/#.17,.67,.83,.67)

  - 贝塞尔曲线以取值点为顶点，形成三角形，以三角形一边转换到另一边的线段做曲线的切线。

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/003/bezel%20curve.gif)

    

- ### **`hover`**

  - 鼠标移到链接上时添加的特殊样式。

  - hover 选择器器可用于所有元素，不仅是链接。

  -  [:link](http://www.runoob.com/cssref/sel-link.html) 选择器设置了未访问过的页面链接样式, [:visited](http://www.runoob.com/cssref/sel-visited.html) 选择器设置访问过的页面链接的样式 [:active](http://www.runoob.com/cssref/sel-active.html)选择器设置当你点击链接时的样式。

  - ```css
    <style>
    a:link {color:#FF0000;} /* 未访问的链接 */
    a:visited {color:#00FF00;} /* 已访问的链接 */
    a:hover {color:#FF00FF;} /* 鼠标划过链接 */
    a:active {color:#0000FF;} /* 鼠标点击时的链接 */
    </style>
    ```

- `Transition`示例

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/003/Transition%20and%20Transform.gif)

  ```html
  <!DOCTYPE html>
  <html>
  <head>
      <style>
          #div1
          {
          height: 150px;
          width: 150px;
          margin: 50px;
          padding:10px;
          border: 1px solid black;
          }
          
          #div2
          {
          padding:50px;
          border: 1px solid black;
          background-color: yellow;
          transition: 5s 1s;
          -webkit-transition: 5s 1s;
          }
  
          #div2:hover {
              transform: translate(50px, 50px) rotate(45deg) scale(1.5) skew(30deg, 10deg) ;
              -webkit-transform:rotate(45deg) scale(1.5) translate(50px, 50px) skewX(50deg);
              transform-origin: left center;
              -webkit-transform-origin: left center; 
              background-color:aliceblue;
          }
          </style>
  </head>
  
  <body>
  
  <div id="div1">
    <div id="div2"/>HELLO</div>
  </div>
   
  </body>
  </html>
  ```

  



## 4.5 `Animation`属性

- **一系列UI元素变化**

- ### **`@keyframes`**

  - 通过 @keyframes 规则，您能够创建动画。

    创建动画的原理是，将一套 CSS 样式逐渐变化为另一套样式。

    在动画过程中，能够多次改变这套 CSS 样式。

  - > 目前浏览器都不支持 @keyframes 规则。
    >
    > Firefox 支持替代的 @-moz-keyframes 规则。
    >
    > Opera 支持替代的 @-o-keyframes 规则。
    >
    > Safari 和 Chrome 支持替代的 @-webkit-keyframes 规则。

  - ```css
    @-webkit-keyframes mymove /* Safari and Chrome */
    {
    0%   {top:0px; left:0px; background:red;}
    25%  {top:0px; left:100px; background:blue;}
    50%  {top:100px; left:100px; background:yellow;}
    75%  {top:100px; left:0px; background:green;}
    100% {top:0px; left:0px; background:red;}
    }
    ```

- ### **`animation 属性`**

  - `animation-name`
  - `animation-duration`
  - `animation-timing-function`
  - `animation-delay`
  - `animation-iteration-count: n/infinite`
    - 动画的播放次数。
  - `animation-direction`
    - `normal` 默认值，正常播放
    - `alternate` 轮流反向播放

- **球丢下再弹起**动画

  ```html
  <!doctype html>
  <html>
  <head>
      <style>
          .box{
              width: 500px;
              height:500px;
              background: beige;
              position:absolute;
          }
          .ball{
              width: 100px;
              height:100px;
              background:aqua;
              border-radius:50%;
              position:absolute;
              text-align: center;
          }
          @keyframes bounce{
              0%{
                  left: 0;
                  top: 0;
              }
              25%{
                left:250px;
                top:  250px;
                background-color: blue
              }
              50%{
                  left:400px;
                  top:400px;
                  transform: scale(1.5)
              }
              100%{
                  left:0%;
                  top:400px;
                  transform:skew(20deg)
              }
          }
          .box:hover .ball{
              animation: bounce 10s ease 0s infinite alternate;
          }
      </style>
  </head>
  <body>
      <div class = "box">
          <div class = "ball"> ball</div>
      </div>
  </body>
  </html>
  ```

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/003/ball%20movement.gif)