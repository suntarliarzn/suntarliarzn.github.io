---

title: Web Frontend Development - HTML

key: C20190310

tags: Web; Frontend; Html; CSS

layout: article
---

# Week Two: Web Frontend Development(1)

<!--more-->

# 1. Web前端概述、HTML详解、CSS选择器

## 1.1 Web基本架构和原理

![web system](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/web%20system.jpg)

## 1.2 HTML基本要素

1. ### HTML单标记元素

   - `<meta charset = "UTF-8"/>`
   - `<img src='a.jpg' width="100" height="200"/>`
   - 引用外部文件`<link rel="stylesheet" type="text/css" href="some.css"/>`

2. ### HTML全局属性

   - id
   - class
   - style
   - title

3. ### HTML文档类型、注释

   - HTML5文档类型`<!DOCTYPE html>`
   - HTML注释`<!-comments->`

4. ### HTML head及相关Tags

   - 定义document编码

     - ` <meta charset="UTF-8"/>`

   - 定义document的title和小icon

     - `<title>hello world!</title>`

   - 为SEO定义keywords和description

     - ` <link rel="shortcut icon" type="image/icon" href="/favicon.ico/">`
     - `        <meta name="keywords" content="keyword1,keyword2,keyword3"/>`

   - 定义document的样式规则

     - ` <link rel="stylesheet" type="text/css" href="some.css"/>`
     - `        <style type="text/css"> put your css rules here </style>`

   - 定义document的javascript代码

     - `<script type="text/javascript" src="some.js"></script>`

     

5. ### HTML标题、段落和文本格式化

   - 标题：`<h1><h2>...<h6>`
   - 段落：`<p>`
   - 换行：`<br>`
   - 水平分割线:`<hr>`
   - 文本格式化
     - 加粗`<b>`
     - 斜体`<i>`
     - 突出`<strong>`
     - 强调`<em>`
     - 减小`<small>`
     - 删除线`<del>`
     - 下划线`<ins>`
     - 引用话`<q>`or`<blockquote>`
     - 引用code源代码格式 `<pre>`

6. ### HTML图片Image和超链接

   - 图片 `<img src="图片目标地址http://" or ="img/a.jpg #相对路径" width="100" height="200"/ or ="/img/a.jpd #绝对路径" alt #加载失败时的替换文字="图片说明性文字">`

     ![不同路径描述](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/html%20pic%20src%20alt.jpg)

   - 超链接 `<a href="http://www.g.com">google</a>`

     ![文档内外不同路径描述](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/html%20a%20href.jpg)

     - 页面点击效果`target`
     - 文档内导航`<a href="#botton-section">去底部</a>`

7. ### HTML List and Table

   - 无序列表··`<ul>`
   - 有序列表1.2....`<ol>`
   - 列表`<li>`
   - 表格`<table border="1">`
     - 标题`caption`
     - 一行`<tr>`
     - 表头`<th>`
     - 具体数据内容`<td>`
     - 行分组
       - 表头`<thead>`
       - 表体`<tbody>`
       - `<tfoot>`
     - 列分组`<colgroup><col>`

8. ### HTML的DIV和SPAN

   - 容器元素：允许在body内部添加另外的统一样式和操作
     - 块级容器：`<div>`
     - 行内容器：`<span>`

9. ### HTML表单FORM

   - `<form>元素为用户输入创建HTML表单，用于向服务器提交数据`
   - 详情参考：[W3school Form](http://www.w3school.com.cn/html/html_forms.asp)

10. ### HTML文档对象模型DOM

    - 结点树

      ![结点树](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/DOM.jpg)

11. ### HTML各种语义化分段元素

    - 常见语义化分段元素：[](http://www.w3school.com.cn/html/html5_semantic_elements.asp)
      - `<body>`：
      - `<section>`:
      - `<article>`：
      - `<aside>`
      - `<nav>`:导航菜单元素
    - 每个分段元素可以包含各自的`<header>`和`<footer>`

12. ### HTML5最佳实践与全部标记总览

    - ![TAGS](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/HTML%205%20TAGS.jpg)

13. ### HTML Demo 开发和上线一个简单在线个人简历

    

## 1.3 HTML应用CSS的三种常见方式

1. 文档内样式代码：`<style>`

2. 元素行内样式，属性的`style`, 代码可复用性低

3. 外部样式文件:`link`,代码可复用性最高

   

## 1.4  CSS规则基本语法

- **selector (group) declaration-block**

  ```html
  <!doctype html>
  <html>
      <head>
          <meta charset="UTF-8">
          <title>李亚星个人简历</title>
          <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
      </head>
  ```

  

  ```css
          <style type="text/css">
          body {
              widows: 1000px;
              margin-block-end: 0;
              text-align: center;
          }
          ul {
              list-style-type:none;
              color: cornflowerblue
          }
  
          </style>
  ```

  - selector选择器错误，则全部声明无效。
  - declaration声明错误一条，其他声明依然正确



## 1.5  CSS选择器

- (W3C seletors)[https://www.w3.org/TR/selectors/#syntax]

- **Type选择器**：使用元素属性选择，`body` `h3`

- **Id选择器**：将元素添加`id="独一无二id"`, 在head部分添加`#独一无二id`

- **class选择器**：先创建class样式，然后元素可以进行调用。

  ```html
          <style>
          /* h3 {
              border: 1px solid red;
          }
          */
          #work {
              box-decoration-break: slice;
              border: 1px;
              color: aqua;
          }
          .outline {
              color:brown;
              font-weight: 400;
              font-style: oblique;
              font-size: 1px
          }
          </style>
   <p class="outline">2016.7-至今</p>
  ```

- 属性选择器：

  ![attribute selector](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/attribute%20selector.jpg)

- 上下午选择器：

  ![context selector](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/Frontend%20Web%20Development/001/context%20selector.jpg)

  ```html
          <style>
         ul#table>* li{
              background-color: bisque;
          }
          /*选择元素的孙子元素，*起到站位作用，
          */
          </style>
  ```

  

- 伪类选择器：

  - `E::first-letter`元素首字符添加效果
  - `E::first-line`元素首行添加效果
  - `E::before`给元素**开头**插入属性
  - `E::after`给元素**结尾**插入属性

## 1.6 CSS的级联Cascading和继承

- ？？同一个属性有多个CSS样式属性？？---**级联算法**

  - **特指度specificity**：**`ID>Class>Type`(i,c,t)**
  - **特指度相同，后出现的样式胜出**
  - **重要度`!important`**权限最高（*建议少用*）
  - 规则来源Origin:浏览器设置>用户设置>开发者设置

- 继承性要求属性可继承，比如`font-size`;不可继承，比如`width`

  

