---
title: Web Design for everybody-HTML 5(02).md

key: C20200405

tags: HTML 5; DOM; tags; nav; img; div; figure;detals; summary; blockquote; address; span; cite; abbr; time; code; sup&sub; button; meter; progress; iframe; bdo; map; area；

layout: article
---

# Web Design for everybody-HTML 5(01).md

<!--more-->

## 1. DOM

- DOM

  ![DOM](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/01%20DOM.jpg)

  - Doctype

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/02%20Doctype.jpg)

  - Head

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/03%20Head.jpg)

  - Body

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/04%20body.jpg)

- example

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/05%20example.jpg)

## 2. HTML 5 Tags and Syntax

- **Tags**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/06%20tags.jpg)

  1. start tag `<...>`; closing tag `</...>`
  2. self-closing tag <... />

- **Display**

  1. **block**: can take the whole width and height
  2. **inline**: can not take width and height. Only uses as much space as needed to contain the element.

- **Common tags**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/07%20common%20tags.jpg)

- **More tags**

![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/08%20more%20tags.jpg)

- **Attributes**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/09%20attributes.jpg)

  - image

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/10%20images.jpg)

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/11%20image%20example.jpg)

- **More Attributes**

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/12%20more%20attributes.jpg)

## 3. Semantic Tags

- ### `favicons`

  - you can put image/logo/icon next to your title of your page in the tab
  - **must go in `<head>` section**

  ```html
  <link rel="icon" type="imge/png" href="sunset.png"/>
  ```

- ### `div`

  - group related content together

  - Divs always had special classes/ids associated with them.

    ```html
    <div class = "header">...</div>
    <div class = "section">...</div>
    <div class = "footer">...</div>
    ```

- ### `<header>`

  - a group of introductory or navigational aids: title, navigation links, ect.

  - a block tag

  - the screen doesn't display it.

  - **Not to be confused with `<head>` or the different headings**

    ```html
    <header>
        <h1> 
            This is the Title 
        </h1>
        <h2>
            The author is Collen
        </h2>
    </header>
    ```

- ### `<nav>`

  - A section of the page that links to to other pages or parts within the page.

  - Often found in the `<header>` tag.

    ```html
    <nav>
        <ul>
            <li><a href="#overview">Overview</a></li>
        </ul>
    </nav>
    ```

- ### `<footer>`

  - A section that contains info such as copyright data, related documents, and links to social media.

  - Typically at the bottom of the page, but not required.

    ```html
    <footer>
        &copy: 2015 by Collen van lent<br>
        <a href="https://suntarliarzn.github.io/2020/03/31/Web-Design-for-everybody-HTML-5(01).html"> Introduction to HTML5</a>
    </footer>
    ```

- ### `<figure>`

  - more semantics than `<img>`.

    - caption
    - multiple multi-media resources

    ```html
    <figure>
        <img src="sunset.gif" alt="Ashtabula sunset">
        <figcaption>a sunset over Ashtabula</figcaption>
    </figure>
    ```

  - `<figcaption>`为图片添加标题。

- ### `<img>`

  - **Image Sizes**

    - When you link to an image the browser display the image as big( or small) as the file
    - Quick solutions: **change file , use width/height attributes**.

    ```html
    <figure>
        <img src="sunset.gif" alt="Ashtabula sunset" width= "500px">
        <figcaption>a sunset over Ashtabula</figcaption>
    </figure>
    ```

  - **Font Awesome**

    - [Font Awesome](https://www.runoob.com/font-awesome/fontawesome-tutorial.html) 是一套绝佳的图标字体库和CSS框架。

      Font Awesome 字体为您提供可缩放矢量图标,它可以被定制大小、颜色、阴影以及任何可以用CSS的样式。

      要使用Font Awesome图标，请在HTML`<head>`页面的 部分中添加以下行：

      1、国内推荐 CDN:

      ```html
      <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
      ```

      2、海外推荐 CDN

      ```html
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      ```

    - 示例

      ```html
        <i class = "fa fa-qq fa-2x"></i>
              QQ<br>
              <a href="http://www.baidu.com" aria-lebel="Twitter">
              <i class = "fa fa-skype fa-pull-left fa-spin" style="font-size: 60px;color: blue;"></i>
              skype<br>
              </a>
      ```

      

- Other New Tags

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/13%20Other%20New%20Tags.jpg)

## 4. Hyperlinks

- `<a>` tag

  - anchor link

  ```html
  <a href="http://wwww.baidu.com"> Baidu</a>
  ```

- Types of links

  - Absolute

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/14%20absolute%20reference.jpg)

  - Relative

  - Internal

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/15%20relative%20reference.jpg)

  - Graphical

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/16%20graphic%20links.jpg)

- **Links should NEVER have folders that are specific to your computer**

- **利用`<a href=#id>`可以定位页面内部`id`位置。**

  ```html
  <body>
      <h1>hello world</h1>
      <figure id="DOM">
          <img src="pics/01 DOM.jpg" alt="DOM" width=25%>
          <figcaption>DOM</figcaption>
      </figure>
      <br>
      <i class="fa fa-qq fa-2x" id="QQ"></i>
      QQ<br>
      <a href="http://www.baidu.com" aria-lebel="Twitter">
          <i class="fa fa-skype fa-pull-left fa-spin" style="font-size: 60px;color: blue;"></i>
          skype<br>
      </a>
      <a href="#QQ">
          DOM
      </a>
      <br>
      <a href="#DOM">
          <img src="pics/01 DOM.jpg" alt="DOM" width=50%>
      </a>
      <footer>
          &copy: 2015 by Collen van lent<br>
          <a href="https://suntarliarzn.github.io/2020/03/31/Web-Design-for-everybody-HTML-5(01).html"> Introduction to
              HTML5</a>
      </footer>
  </body>
  ```

## 5.Multimedia

- ### `<video src="">`

  you can set both the video and audio elements to play clips by adding to the `src` attribute

  ```html
  <div>
      <video id="xichang" src="pics/xichang.mp4#t=5" height=500px loop=true controls=true autoplay="autoplay">my lovely hometown</video>
  </div>
  <div>
  <audio id="goose house" src="pics/Goose house.mp3#t=60" controls autoplay="autoplay" loop volumn="0.5"> My dear friend</audio>
  </div>
  ```

  

  - attributes
  - height,width
    - autoplay
    - loop
    - controls
  
- ### `<audio>`

  - autoplay,controls, loop
  - buffered
  - muted
  - volume
  
- **Multimedia should enhance your content, not be a distraction.**

## 6. Tables

- ### Tags

  - container:**`<table>`**
  - row: **\<tr>**
  - column:**`<td>`**
  - heading:**`<th>`**

- 属性

  - **`<border="1,2,3...">`**:表格边框
  - **`<caption>`**:表格标题
  - **`<colspan="1,2,3...">` ** 单元格占多少列（跨列）
  - **`<rowspan="1,2,3...">`** 单元格占多少行（跨行）

- Example

  ```html
     <table border="1" width="50%" height="90%" align="center" bordercolor="black">
          <caption>专业分布</caption>
          <tr bgcolor="yellow">
              <th rowspan="2">系部</th>
              <th colspan="2">系部人数</th>
          </tr>
          <tr bgcolor="silver">
              <th>专业</th>
              <th>大外</th>
          </tr>
          <tr>
              <td>翻译</td>
              <td>10</td>
              <td>1</td>
          </tr>
          <tr>
              <td>师范</td>
              <td>11</td>
              <td>2</td>
          </tr>
          <tr>
              <td>商务</td>
              <td>12</td>
              <td>3</td>
          </tr>
          <tr>
              <td colspan="3" bgcolor="red">注：大外包括在内</td>
          </tr>
      </table>
  ```

     <table border="1" width="50%" height="90%" align="center" bordercolor="black">
          <caption>专业分布</caption>
          <tr bgcolor="yellow">
              <th rowspan="2">系部</th>
              <th colspan="2">系部人数</th>
          </tr>
          <tr bgcolor="silver">
              <th>专业</th>
              <th>大外</th>
          </tr>
          <tr>
              <td>翻译</td>
              <td>10</td>
              <td>1</td>
          </tr>
          <tr>
              <td>师范</td>
              <td>11</td>
              <td>2</td>
          </tr>
          <tr>
              <td>商务</td>
              <td>12</td>
              <td>3</td>
          </tr>
          <tr>
              <td colspan="3" bgcolor="red">注：大外包括在内</td>
          </tr>
      </table>

  ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Web%20development%20for%20everybody/HTML%205/Week%202/17%20table%20example.jpg)

## 7. Useful tags

- ### Generic 无语义 

  - `<p>`
  - `<div>`

- ### Sematic 有语义

  - `<header>`页眉
  - `<footer>`页脚
  - `<nav>`导航
  - `<figure>`流内容（图像、图表、照片、代码等等）

- ### Block Tags

  - Containers 有语义

    - [`<header>、<main>、<nav>、<section>、<article>、<hr>、<aside>、<footer>`](https://blog.csdn.net/weixin_43386439/article/details/90208824)

    ```html
    <body>
        <header> //页面页眉
        </header>
        <main> //页面主体
            <nav> //主导航链接
            </nav>
            <section>//对与主题相关的内容进行分组。它们可以根据需要嵌套着使用。举个例子：如果一本书是一个article的话，那么每个章节就是section.
                <article>//独立的文章内容，内容本身必须是有意义的且必须是独立于文档的其余部分。
                    可以为：
                    论坛帖子
                    博客文章
                    新闻故事
                    评论
                </article>
                <article>
                </article>
            </section>
            <hr> //类似于<br>,用于分割主题。在 HTML 页面中创建一条水平线。
            水平分隔线（horizontal rule）可以在视觉上将文档分隔成各个部分。
            <section> //对与主题相关的内容进行分组。它们可以根据需要嵌套着使用。举个例子：如果一本书是一个article的话，那么每个章节就是section.
                <article>/
                </article>
                <article>
                </article>
            </section>
            <aside>
                //<article> 标签外的内容。aside 的内容应该与附近的内容相关。示一个页面的一部分， 它的内容跟这个页面的其它内容的关联性不强，或者是没有关联，单独存在。<aside>元素通常显示成侧边栏(sidebar)或一些插入补充内容。通常用来在侧边栏显示一些定义，比如目录、索引、术语表等；也可以用来显示相关的广告宣传，作者的介绍，Web应用，相关链接，当前页内容简介等。
                    </aside>
        </main>
        <footer>
            //页脚
        </footer>
    </body>
    ```
  
- [`<details>、<summary>`](https://blog.csdn.net/weixin_43386439/article/details/90208824)
  
  ```html
      <body>
      
      <details>
      <summary>Copyright 1999-2011.</summary>
      <p> - by Refsnes Data. All Rights Reserved.</p>
      <p>All content and graphics on this web site are the property of the company Refsnes Data.</p>
      </details>
      
      <p><b>注意：</b>目前只有 Chrome 和 Safari 6 支持 summary 标签。</p>
      
      </body>
  ```
  
- **`<blockquote cite="">`**
  
  - `<blockquote> `标签定义摘自另一个源的块引用。浏览器通常会对 `<blockquote> `元素进行缩进。
    
    <blockquote cite="https://suntarliarzn.github.io">
        猪婆：“你是一头猪。”
        </blockquote>
  
- **`<address>`**

  - `<address>` 标签定义文档作者/所有者的联系信息。

    - 如果 `<address> `元素位于` <body> `元素内部，则它表示该文档作者/所有者的联系信息。

    
    - 如果 `<address> `元素位于` <article>` 元素内部，则它表示该文章作者/所有者的联系信息。
    
  - \<address> 元素的文本通常呈现为*斜体*。大多数浏览器会在该元素的前后添加换行。
  
    <address>
    Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br> 
    Visit us at:<br>
    Example.com<br>
    Box 564, Disneyland<br>
    USA
    </address>
  
- ### Inline Tags

  - **`<span>`** 

    - `<span> `用于对文档中的行内元素进行组合。
    
  - `<span>` 标签没有固定的格式表现。当对它应用样式时，它才会产生视觉上的变化。如果不对 `<span>` 应用样式，那么 `<span> `元素中的文本与其他文本不会任何视觉上的差异。
    
    - `<span>` 标签提供了一种将文本的一部分或者文档的一部分独立出来的方式。
    - 被 <span> 元素包含的文本，您可以使用 CSS 对它定义样式，或者使用 JavaScript 对它进行操作。
    
    <p>我的母亲有 <span style="color:blue">蓝色</span> 的眼睛。</p>
  
  - **`<cite>`**
  
    - `<cite>` 标签定义作品（比如书籍、歌曲、电影、电视节目、绘画、雕塑等等）的标题。
    - `<cite>`一般会由*斜体*标识。
  
  <p><cite>The Scream Maaaaan</cite> by Edward Munch. Painted in 1893.</p>

  - **`<abbr>`**

    - `<abbr>` 标签用来表示一个缩写词或者首字母缩略词，如"WWW"或者"NATO"。
  - 通过对缩写词语进行标记，您就能够为浏览器、拼写检查程序、翻译系统以及搜索引擎分度器提供有用的信息。
    
    <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>

  - **`<time>`**

    - `<time>` 标签定义公历的时间（24 小时制）或日期，时间和时区偏移是可选的。
- 该元素能够以机器可读的方式对日期和时间进行编码，这样，举例说，用户代理能够把生日提醒或排定的事件添加到用户日程表中，搜索引擎也能够生成更智能的搜索结果。
      - 所有浏览器中不会渲染任何特殊的效果。
    
    <p>我们在每天早上 <time>9:00</time> 开始营业。</p>
    <p>我在 <time datetime="2016-02-14">情人节</time> 有个约会。</p>
    
    

  - **`<code>`**
- `<code> `标签是一个短语标签，用来定义计算机代码文本。
    - **提示：**我们并不反对使用这个标签，但是如果您只是为了达到某种视觉效果而使用这个标签的话，我们建议您使用 CSS ，这样可能会取得更丰富的效果。


    <em>强调文本</em><br>
    <strong>加粗文本</strong><br>
    <dfn>定义项目</dfn><br>
    <code>hello world </code><br>
    <samp>计算机样本</samp><br>
    <kbd>键盘输入</kbd><br>
    <var>变量</var>

  - **`<sub>`&`<sup>`**

    - `<sup> `标签定义上标文本。上标文本将会显示在当前文本流中字符高度的一半为基准线的上方，但是与当前文本流中文字的字体和字号都是一样的。上标文本能用来添加脚注，比如 WWW<sup>[1]</sup>。
    - `<sub>` 标签定义下标文本。下标文本将会显示在当前文本流中字符高度的一半为基准线的下方，但是与当前文本流中文字的字体和字号都是一样的。下标文本能用来表示化学公式，比如 H<sub>2</sub>O。

  <p>这个文本包含<sup>上标</sup> <sub>下标</sub>文本。</p>

- ### Tags that works with JavaScript

  - ### `<button>`

    - `<button> `标签定义一个按钮。
    - 在` <button>` 元素内部，您可以放置内容，比如文本或图像。这是该元素与使用 `<input> `元素创建的按钮之间的不同之处。
    - **提示：**请始终为 `<button> `元素规定 type 属性。不同的浏览器对` <button>` 元素的 type 属性使用不同的默认值。
    
     <button type="button" onclick="alert('你好，世界!')">点我!</button>

- ### `<meter>`

  - [`<meter>` ](https://www.runoob.com/tags/tag-meter.html)标签定义度量衡。仅用于已知最大和最小值的度量。比如：磁盘使用情况，查询结果的相关性等。

  - **注意：** `<meter>` 不能作为一个进度条来使用， [进度条 ](https://www.runoob.com/tags/tag-progress.html) 标签。

    <p>展示给定的数据范围：</p>

  <meter value="2" min="0" max="10">2 out of 10</meter><br>

  <meter value="0.6">60%</meter>

- ### `<progress>`

  - 定义运行中的任务进度（进程）。
  - **提示：**请将 `<progress>` 标签与 JavaScript 一起使用来显示任务的进度。
  
  <progress value="22" max="100">
      </progress>

- ### `<iframe>`
  
  - 一个内联框架被用来在当前 HTML 文档中嵌入另一个文档。
    - **提示：**您可以把需要的文本放置在` <iframe> `和` </iframe> `之间，这样就可以应对不支持 `<iframe>` 的浏览器。
    - **提示：**使用 CSS 为 `<iframe> `（包括滚动条）定义样式。
  
  <iframe src="https://v.youku.com/v_show/id_XMjkxMTg4NzY5Ng==.html?spm=a2hzp.8244740.0.0" width="800" height="600"></iframe>
  
  
  
- ### `<bdo dir=ltr/rtl>`
  
  - bdo 指的是 bidi 覆盖（Bi-Directional Override）。
  - `<bdo> `标签用来覆盖默认的文本方向。
  
  <p> 该段落文字从左到右显示。</p>   <p><bdo dir="rtl">该段落文字从右到左显示。</bdo></p>
  
- ### `<map> & <area>`

  - `<map> `标签用于客户端图像映射。图像映射指带有可点击区域的一幅图像。
  - `<img>`中的 usemap 属性可引用` <map>` 中的 id 或 name 属性（取决于浏览器），所以我们应同时向 `<map> `添加 id 和 name 属性。
  - area 元素永远嵌套在 map 元素内部。area 元素可定义图像映射中的区域。
  
  ```html
  <!Doctype html>
  <html lang="en">
  
  <head>
      <meta charset="utf-8">
      <title>my first page</title>
      <link rel="icon" type="imge/jpeg" href="sunset.jpg" />
      <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
  </head>
  
  <body>
      <button type="submit" onclick="alert('你好，世界!')"> 点我试试</button><br>
      <meter value="2" min="0" max="10">2 out of 10</meter><br>
      <meter value="0.6">60%</meter><br>
      <progress id='progress1' value="0" max="100">
      </progress>
      <button onclick="start_run(100)">下载</button>
      <script>
          function start_run(n) {
              if (n == 0) { alert("下载完成") }
              var progress1 = document.getElementById("progress1")
              n = n - 1
              cur_task = 100 - n
              progress1.value = cur_task
              setTimeout("start_run(" + n + ")", 100)
  
          }
      </script>
      <br>
      <iframe src="https://v.youku.com/v_show/id_XMjkxMTg4NzY5Ng==.html?spm=a2hzp.8244740.0.0" width="1000"
          height="1000"></iframe>
      <br>
      <img src="pics/17 table example.jpg" width="145" height="126" alt="Planets" usemap="#planetmap">
      <map name="planetmap">
          <area shape="rect" coords="0,0,82,126" alt="Sun"
              href="https://suntarliarzn.github.io/2020/03/31/Web-Design-for-everybody-HTML-5(01).html">
          <area shape="circle" coords="90,58,3" alt="Mercury"
              href="https://suntarliarzn.github.io/2020/03/31/Basic-Statistics.html">
          <area shape="circle" coords="124,58,8" alt="Venus"
              href="https://suntarliarzn.github.io/2020/04/11/Basic-Statistics(2)-R-1.html">
      </map>
  </body>
  
  </html>
  ```
  
  

