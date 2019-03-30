
title: Web Frontend Development - css

key: C20190323

tags: CSS； font; text; box model; display; background

layout: article

# Week Two: Web Frontend Development(2)

<!--more-->

# 2. CSS基础

## 2.1 Font相关属性

- `font-family` 字体家族

  ```html
   <p style="font-family:Verdana, Geneva, Tahoma, sans-serif">联系方式：ABCDEFG leo411@qq.com background</p>
  ```

  - `serif`: 衬线体，笔画代勾

  - `sans-serif`:无衬线体，笔画不带勾

  - `monospace`:等宽体，每个字母占得空间一样

  - `cursive`:手写体

  - `fantasy`:奇幻体

  - 中文字体英文名：https://www.zhangxinxu.com/study/201703/font-family-chinese-english.html

    

- `font-size`:字体大小**(可继承属性）**

- `font-style`:字体样式**(可继承属性）**

- `font-weight`:字体加粗**(可继承属性）**

- `font` 简写属性：单独作为fond样式，格式为`font:font-style font-size font-family`

  ```html
     <style>
          body {
              font: italic 20px/24px /*行高*/ "STCaiyun"
          }
  	</style>
  ```

- 继承性要求：属性可继承，比如`font-size`;不可继承，比如`width`

## 2.2 Text相关属性

- `color`:文本颜色

  ```html
  <style>
  			p{
  			border: 1px solid;
  			color: #ff0000;
  			}
  </style>
  ```

  

- `text-indent`:文本首行缩进

  **#一个中文字符占据16px**

- `letter-spacing`:字符间隔

  **#浏览器本身字符间隔上增加/减少字符举例**

- `word-spacing`:单词间隔

  **#英文单词之间，或空格间隔的词组之间的距离**

- `line-height`:行高，**可以放在font简写属性中**。

  ```html
  <style>		
  	h3#work {
  			font-size:20px;
  			background: yellow;
  			line-height:2
              /*  2为font-size的2倍，line-height也可直接写px
              */
  			}
  </style>
  ```

  

- `text-decoration`:文本装饰线 `underline` `overline` `line-through`

- `text-align`:属性规定元素中的文本的水平对齐方式。

  | 值      | 描述                                       |
  | :------ | :----------------------------------------- |
  | left    | 把文本排列到左边。默认值：由浏览器决定。   |
  | right   | 把文本排列到右边。                         |
  | center  | 把文本排列到中间。                         |
  | justify | 实现两端对齐文本效果。                     |
  | inherit | 规定应该从父元素继承 text-align 属性的值。 |

- `vertical-align`:见下章

- `text-transform`:控制文本的大小写。

  | 值         | 描述                                           |
  | :--------- | :--------------------------------------------- |
  | none       | 默认。定义带有小写字母和大写字母的标准的文本。 |
  | capitalize | 文本中的每个单词以大写字母开头。               |
  | uppercase  | 定义仅有大写字母。                             |
  | lowercase  | 定义无大写字母，仅有小写字母。                 |
  | inherit    | 规定应该从父元素继承 text-transform 属性的值。 |

- `text-shadow`:text-shadow 属性向文本添加一个或多个阴影。该属性是逗号分隔的阴影列表，每个阴影有两个或三个长度值和一个可选的颜色值进行规定。省略的长度是 0。

  ![text-shadow](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/font-shadow.jpg)

- `white-space`:规定段落中的文本不进行换行

  | normal   | 默认。空白会被浏览器忽略。                                   |
  | -------- | ------------------------------------------------------------ |
  | pre      | 空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。    |
  | nowrap   | 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 |
  | pre-wrap | 保留空白符序列，但是正常地进行换行。                         |
  | pre-line | 合并空白符序列，但是保留换行符。                             |
  | inherit  | 规定应该从父元素继承 white-space 属性的值。                  |



- `text-overflow`:规定当文本溢出包含元素时修剪文本。

  | 值       | 描述                                 | 测试                                                         |
  | :------- | :----------------------------------- | :----------------------------------------------------------- |
  | clip     | 修剪文本。                           | [测试](http://www.w3school.com.cn/tiy/c.asp?f=css_text-overflow) |
  | ellipsis | 显示省略符号来代表被修剪的文本。     | [测试](http://www.w3school.com.cn/tiy/c.asp?f=css_text-overflow&p=2) |
  | *string* | 使用给定的字符串来代表被修剪的文本。 |                                                              |

  ```css
  width: 100%;  /*也可以是固定值、min-width这些*/
  white-space: nowrap;  /*强制文本不能换行*/
  overflow: hidden;  /*隐藏溢出内容*/
  text-overflow: ellipsis;
  ```

  ![text-overflow](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/text-overflow.jpg)

- `word-wrap`:**控制长度超过一行的单词是否被拆分换行**，是`word-break`的补充，它有两个值：`normal | break-word`。属性允许长单词或 URL 地址换行到下一行。

- `word-break`:**控制单词如何被拆分换行**。它有三个值：`normal | break-all | keep-all`

  | 值        | 描述                           |
  | :-------- | :----------------------------- |
  | normal    | 使用浏览器默认的换行规则。     |
  | break-all | 允许在单词内换行。             |
  | keep-all  | 只能在半角空格或连字符处换行。 |

- **word-wrap: break-word VS. word-break: break-all**

  ![word-wrap vs. word-break](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/break%20word.jpg)



## 2.3 Text-align与vertical-align

- text-align设置**块级元素文本水平对齐方式**；

- vertical-align设置**行内元素的基线相对于该元素所在行的基线的垂直对齐**

![text-align](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/text-align.jpg)

![vertical-align](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/vertical-align.jpg)

## 2.4 盒模型以及box-sizing

- `margin`:四个方向外边界

- `margin-top` `right` `bottom` `left`:顺时针方向

  ```html
  margin: 32px 20px 26px 10px; /*顺时针方向整体赋值*/
  margin: 32px 20px /*上下、左右整体赋值*/
  ```

- `border`边框：

  ![border两种写法](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/border%20style.jpg)

  ![border style](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/border-style.jpg)

- `border-sizing`：

  - `border-sizing:content-box`:宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框。

    ![content-box](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/content%20box.png)

  - `border-sizing:border-box`: 为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。

    ![border-box](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/border%20box.png)

- [`box-shadow` `text-shadow`](<https://www.cnblogs.com/wuchuanlong/p/5980766.html>): 

  - **外阴影：**box-shadow: X轴  Y轴  Rpx  color;

    **属性说明（顺序依次对应）：** 阴影的X轴(可以使用负值)    阴影的Y轴(可以使用负值)    阴影模糊值（大小）    阴影的颜色

  - **内阴影：**box-shadow: X轴  Y轴  Rpx  color  **inset**;

  ​       默认是外阴影   内阴影：inset 可以设置成内部阴影

  - **注（PS）**：此属性使用于盒模型 如(div,p,h1,h2,h3,h4,h5,h6等) 不是用来设置文字阴影   如果**设置文字阴影请参考知识点:text-shadow**（同理）

- [`box-radius`](<https://www.cnblogs.com/happymental/p/7891725.html>)：

  - border-radius的数值有三种表示方法：px、%、em;

  - border-radius属性其实是border-top-left-radius、border-top-right-radius、border-bottom-right-radius、border-bottom-left-radius四个属性的简写模式，因此，border-radius : 30px;，其实等价于border-radius : 30px 30px 30px 30px;（ps：与padding和margin一样，各个数字之间用空格隔开）。

    ![box-radius](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/radius.png)

  - 与padding和margin一样，border-radius同样采用**对角线相等**的原则

  - 假设一个长200px，高150px的div对象，设置它的border-radius的值为30px，那么实际呈现的圆角，其实就是一个以30px为半径的圆顶格放置在四个边角后所呈现的弧度。

    ![radius](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/radius%20mechanism.png)

  - `border-radius : 50px 50px 50px 50px / 50px 50px 50px 50px;`“/”前的四个数值表示圆角的水平半径，后面四个值表示圆角的垂直半径

  - 先 `top` 再 `left`先上边再左边 对边角进行切割，如下图所示：

    ![radius/](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/redius%20irregular.jpg)

  ```html
  <style> 
  div
  { 
  	height: 100px;
  	width: 100px;
  	border-radius: 2em/ 1em;
  	border: 10px solid #CCCCCC;
  	background-color: cornflowerblue;
  }
  </style>
  ```

  

- [`border-image`](<https://segmentfault.com/a/1190000010969367>):**用于给border（边框）贴上背景图像**
## 2.5 垂直外边距折叠问题

[Collapsing margin rules](<https://www.w3.org/TR/CSS21/box.html#mpb-examples>)

[CSS外边距合并](<http://www.w3school.com.cn/css/css_margin_collapsing.asp>)

## 2.6 display属性

- `inline`:行内元素（不独占一行），比如：`<strong></strong>`、`<a></a>`
  - 无法设置`width` 、`height`、 `margin-top`属性
- `block`：块级元素（独占一行），比如：`<p></p>`
  - 可以设置`width` 、`height`、 `margin-top`属性
- `inline-block`：同时兼具行内和块级元素特点。不独占，又可以设置属性。
  - **垂直列表变为水平列表，设置水平导航栏**
- `none`：将元素隐藏

## 2.7 背景相关的属性

- `background-color`: 设置背景颜色

- `background-image`: 设置背景图片

  ```html
   <body style="background-image:url('http://www.w3cplus.com/sites/default/files/styles/print_image/public/baiyaimages/margin-colla-3.jpg');">
  ```

- `background-repeat`: 设置背景水平和垂直方向平铺 `repeat-x/y`、不平铺：`no-repeat`

- `background-position`:背景图片位置

  ```html
          <body style="background-position: 50% 50%">/* “10px 10px” 从左上点开始偏移像素点； “left bottom” 左下角点 */
  ```

  - `background-repeat`和`background-position`不冲突

- `background-size`: 背景图片大小

  ```html
  <body background-size: "100px 100px;"> /*"100% 100% 平铺整个元素界面"*/
  </body>
  ```

  - `contain`:不变形，同比例拉升到**铺满一个边**。
  - `cover`:不变形,同比例拉升到**整个界面**。
  - **独立定义，不用简写属性**

- `background`(简写属性)：图片链接+背景颜色+平铺+位置

  ```html
  <body style="background:url('http://www.w3cplus.com/sites/default/files/styles/print_image/public/baiyaimages/margin-colla-3.jpg') rgb(235, 113, 113) no-repeat  top left">
  ```

  

- `background-attachment`: 设置背景图像是否固定或者随着页面的其余部分滚动。

  - `scroll`:默认值，窗口滑定，不移动，如同一张图片。
  - `fixed`: 窗口随滚轮滑动，如同探照灯。
  - `local`:外框效果如同scroll固定不动，内框效果如同fixed，可滑动。

- `background-clip`: 规定背景绘制区域

  - `border-box`、`padding-box`、`content-box`

- `background-origin`:属性规定 background-position 属性相对于什么位置来定位

  - 如果**背景图像的 background-attachment 属性为 "fixed"**，则该属性没有效果。

    ![background-origin](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/box%20model.png)

  - `border-box`就是把背景图片的坐标原点设置在盒模型**border-box**区域的左上角

  - `padding-box`就是把背景图片的坐标原点设置在盒模型**padding-box**区域的左上角

  - `content-box`就是把背景图片的坐标原点设置在盒模型**content-box**区域的左上角

- `multiple backgrounds`:多重背景图象，可以把不同背景图象只放到一个块元素里。

  - 多个图片url之间使用逗号隔开即可；如果有多个背景图片，而其他属性只有一个（例如background-repeat只有一个），表明所有背景图片应用该属性值。

    CSS3中在容器的多层背景，各子属性与逗号来分隔值，如果指定的值，如下：

    ```css
    background-image: w1, w2, w3,…, wM
    background-repeat: x1, x2, x3,…, xR
    background-size: y1, y2, y3,…, yS
    background-position: s1, s2, s3,…, sP
    ```

    