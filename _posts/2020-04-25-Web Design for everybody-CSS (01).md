---

title: Web Design for everybody-CSS(01).md

key: C20200425

tags: CSS; color; font; display

layout: article
---

# Web Design for everybody-CSS(01).md

<!--more-->

## 1. Cascading Style Sheets(CSS)

- ### Adding Style

  - Inline styling

    ```html
    <h1 style="color:blue">Styled Heading</h1>
    ```

  - Internal style sheets

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/CSS/Week%20one/01%20css.jpg){:height: "50%" width:"50%"}

    - **Brackets and semicolons are very important.**

  - Rules of Internal style sheets 

    - **Styling is defined within `<head>`**

    - **Rules are defined within `<style>`**

      ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/CSS/Week%20one/02%20internal%20style%20sheets.jpg){:height: "50%" width:"50%"}

  - External Style sheets

    - You can put rules in an external file.

    - **A line to the style sheet is put in the head section.**

      ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/CSS/Week%20one/03%20external%20style%20sheets.jpg){:height: "50%" width:"50%"}

  - The hierarchy of styles

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/CSS/Week%20one/04%20hierachy%20of%20styling.jpg){:height: "50%" width:"50%"}

  - #### Rule Precedence(就近/新原则)

    哪个规则最新就采用哪个。

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/CSS/Week%20one/05%20rule.jpg){:height: "50%" width:"50%"}

    - **`!important`**强制原则

      ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/CSS/Week%20one/06%20important.jpg){:height: "50%" width:"50%"}

    

## 2.  Color

- [Hexadecimal(十六进制)](https://blog.csdn.net/diyu122222/article/details/80692904)
- [rgb/rgba](https://www.cnblogs.com/liyuspace/p/8978139.html)

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/CSS/Week%20one/07%20rgb.jpg)

- `progress`颜色设置

  ```css
  progress {
      background-color:#e6e6e6; /*需先设置背景颜色，才能修改浏览器默认样式。*/
    }
  
  progress::-webkit-progress-bar { background: #e4a896; }
  progress::-webkit-progress-value  { background: rgb(218, 162, 8); }
  ```

  



## 3. [font](https://mp.weixin.qq.com/s?src=11&timestamp=1588318919&ver=2311&signature=e-W1Whmmp-UpyJHB3mBpnLQR38H8lk4eMb3I4vw0xxm-YYkKQ5Mtqro5RuH3adzN092RnchHIvSkaYW9tbg*X3ymHvB41Ji4QZcy-wDnhZKUvJ8Mw6OtibVlqTWzroUx&new=1)

- Not all font-families supported by all of the operating systems, so you can provide alternatives.

```css
h1{
	font-family：Arial, Courier, Impact /*如果支持Arial,首先选择Arial，如果不支持，寻找下个支持字体。*/
}
```

- **Use sans-serif when possible**

- ### Custom fonts

  ```css
  @font-face{
      font-family: mySpecialFont;
      src: url('specialFont.ttf')
  }
  h1{
      font-family:mySpecialFont
  }
  ```

- ### `font-style`

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/CSS/Week%20one/08%20font%20style.jpg)

  - normal
  - italic
  - oblique

- ### `font-variant`

  设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。

  - normal

  - small-caps

    浏览器会显示小型大写字母的字体。

- ### `font-size`

  - pixel
  - percentage

- ### `color`&`backgrund-color`

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/CSS/Week%20one/09%20inline%20color.jpg)

- ### `text-align`

  - left
  - right
  - center
  - justify 两端对齐

- ### [`line-height`](https://segmentfault.com/a/1190000014936270)

  使用百分比设置行高

  ```css
  <style>
  p.small {line-height:70%;}
  p.big {line-height:200%;}
  </style>
  </head>
  
  <body>
  <p>
  这是一个标准行高的段落。<br>
  这是一个标准行高的段落。<br>
  大多数浏览器的默认行高约为110%至120%。<br>
  </p>
  
  <p class="small">
  这是一个更小行高的段落。<br>
  这是一个更小行高的段落。<br>
  这是一个更小行高的段落。<br>
  这是一个更小行高的段落。<br>
  </p>
  ```

  

## 4. display

- ### `display`

  - `inline`

    默认。此元素会被显示为内联元素，元素前后没有换行符。

    不能更改元素的height，width的值，大小由内容撑开。

  - `block`

    此元素将显示为块级元素，此元素前后会带有换行符。

    能够改变元素的height，width的值。 

  - [`inline-block](https://www.cnblogs.com/Ry-yuan/p/6848197.html)`

    行内块元素。

    inline-block 的元素既具有 block 元素可以设置宽高的特性，同时又具有 inline 元素默认不换行的特性。

  - `table`

    此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。

  - `none`

    此元素不会被显示。

  - `table`

    会作为块级表格来显示（类似 <table>）

- ### `float`

  float属性指定一个盒子（元素）是否应该浮动。

  - `left`
  - `right`
  - `none`

- ### `overflow`

  规定当内容溢出元素框时发生的事情。

  - `visible`:内容不会被修剪，会呈现在元素框之外。
  - `hidden`:内容会被修剪，并且其余内容是不可见的。
  - `scroll`:内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
  - `auto`:如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。

  