---
title: HTML&CSS(10)---Project(1) mi
key: C20200815
tags: Project; mi; clearfix; reset.css; fonticon; base.css; index.css; minifycss;
layout: article
---

# Unit Three: HTML&CSS(10)---Project(1) mi

<!--more-->

## 1. 注意事项

- 插入解决高度塌陷代码：

  ```css
  .clearfix::before,
  .clearfix::after{
      content:'';
      display: table;
      clear:both;
  }
  ```

- 插入格式化代码：

  ```css
  <link rel="stylesheet" href="./css/normalize.css">
  <link rel="stylesheet" href="/css/reset.css">
  ```

- 引入图标字体：

  ```css
  <link rel="stylesheet" href="./fa/css/all.css">
  ```

- 引入总体宽高、字体设置CSS文件：

  ```css
  body {
      font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
      color: #333;
      background-color: #fff;
      /* 不让body溢出 */
      min-width: 1226px;
      text-decoration: none;
      height: 1000px;
  }
  
  .w {
      /* 固定容器宽度 */
      width: 1226px;
      /* 让容器居中 */
      margin: 0 auto;
  }
  
  .text {
      font-size: 16px;
      text-decoration: none;
      color: black;
      text-align: center;
  }
  ```

- 引入CSS样式

  ```css
  <link rel="stylesheet" href="./css/index.css">
  ```

- 引入导航栏图标

  ```css
  <!-- 网站收藏图标 ,需放在根目录下-->
      <link rel="icon" href="./favicon.ico" type="image/x-icon">
  ```

- 将代码最小化 minify css

  - visual code:arrow_right:F1:arrow_right:minify css

    ```css
    .banner{background-color:#333;height:40px;line-height:40px}.banner_content{position:relative}.banner_bar{font-size:12px;color:#424242;float:left;margin:-1px 8px}.banner_content a{font-size:12px;color:#b0b0b0;text-decoration:none;padding-right:1px;display:block}.banner_content a:hover{color:#fff}.menu_left{float:left}.menu_left li{float:left}.cart{float:right}.menu_right{float:right}.menu_right li{float:left}.cart{margin-left:25px;width:120px;background-color:#424242;text-align:center}.cart a{margin:0 auto;color:#b0b0b0}.hidden_cart{line-height:1;width:310px;padding:30px 0;text-align:center;display:none;font-size:12px;border:solid 1px rgba(112,112,112,.2);border-top:none;position:absolute;right:0;top:40px;z-index:9999;background-color:#fff}.cart:hover a{background-color:#fff;color:#dd720d}.cart:hover~.cart_menu>.hidden_cart{display:block}.app_list{position:relative}.app_list::before{display:none;position:absolute;content:"";border:10px solid #424242;border-color:transparent transparent #f0f8ff transparent;bottom:-1px;left:13px}.app_list:hover .app,.app_list:hover::before{display:block}.app{display:none;width:124px;height:148px;line-height:1;text-align:center;background-color:#f0f8ff;box-shadow:0 5px 5px rgba(0,0,0,.5);position:absolute;left:-40px}.app img{width:90px;margin:17px;margin-bottom:10px}.app span{font-size:14px;color:#000}.header_banner{position:relative}h1{font-size:0}.icon{width:55px;height:55px;float:left;background-color:#ff6700;background-image:url(../img/mi-logo.png);background-position:center;position:relative;margin-top:22px;margin-right:7px;overflow:hidden}.home{width:55px;height:55px;color:#f0f8ff;background-color:#ff6700;font-size:30px;position:absolute;float:left;left:-55px;transition:left .1s}.home{display:block;line-height:55px;text-align:center}.icon:hover .home{left:0}.product_display{height:100px;float:left;padding-left:30px}.nav li:first-child{visibility:hidden}.product_display li{float:left;padding-right:20px}.product_display a{display:block;line-height:100px}.product_display a:hover{color:#ff6700}.app{z-index:99999}.category{height:0;background-color:#fff;display:block;position:absolute;width:100%;left:0;top:100px;transition:height 1s;z-index:9999}.category:hover,.nav .show:hover~.category{height:228px;border-top:1px solid #b0b0b0;box-shadow:0 5px 5px rgba(0,0,0,.2)}.category:not(:active){height:0;transition:height 1s}.search{float:right;width:296px;margin-top:25px}.search .search_box{float:left;height:48px;width:224px;padding:0;border:#b0b0b0 solid 1px;padding:0 10px;outline:0}.search .search_button{float:left;height:50px;width:50px;color:#616161;font-size:20px;border:#b0b0b0 solid 1px;border-left:none;outline:0}.search_box:focus,.search_box:focus+.search_button{border-color:#ff6700}.search_button:hover{background-color:#ff6700;color:#fff}.body_content{height:460px;margin-top:100px;background-image:url(../img/frontpage\ 1.webp);background-clip:content-box;background-size:100% 100%;position:relative;z-index:999}.body_right{width:234px;height:100%;background-color:rgba(0,0,0,.4)}.body_right .product_list{margin:20px auto}.product_list li{height:42px;padding:0 30px}.body_right a{font:16px;color:#fff;text-decoration:none;line-height:42px;display:block}.body_right i{float:right;line-height:42px}.body_right li:hover{background-color:#ff6700}.arrow_left{width:41px;height:69px;line-height:69px;float:left;font-size:30px;font-style:oblique;color:rgba(213,196,195);position:absolute;top:0;bottom:0;margin:auto 0;left:234px;text-align:center}.arrow_left:hover{background-color:rgba(67,66,69,.8);color:#fff}.arrow_right{width:41px;height:69px;line-height:69px;float:right;font-size:30px;font-style:oblique;color:rgba(213,196,195);position:absolute;top:0;bottom:0;margin:auto 0;right:0;text-align:center}.arrow_right:hover{background-color:rgba(67,66,69,.8);color:#fff}.dot_list{position:absolute;height:21px;width:100px;right:20px;bottom:20px}.dot{float:right;width:6px;height:6px;border:2px solid rgba(165,151,133,.4);background-color:rgba(0,0,0,.4);border-radius:50%;margin:0 4px;display:block}.dot:hover,.dot_list .active{border:2px solid rgba(112,111,113,.4);background-color:rgba(212,214,250,.8)}.back_top{width:26px;height:206px;background-color:#cbfaea;position:fixed;right:50%;margin-right:-639px;bottom:100px;z-index:9999}.footer{margin-top:14px}.function_block,.redmi_pic,.redmi_pic li{float:left}.function_block{width:228px;height:168px;background-color:#5f5750;padding-top:2px;padding-left:6px}.function_block li{float:left}.function_block a{width:76px;height:84px;color:#cfccca;display:block;text-align:center;font-size:12px;overflow:hidden}.function_block i{margin-top:20px;font-size:24px;display:block;margin-bottom:5px}.function_block a:hover{color:#fff}.redmi_pic{margin-left:14px}.redmi_pic li{margin-right:15px}.redmi_pic li:last-child{margin-right:0}.redmi_product img{width:316px;height:170px;vertical-align:top}.function_block li{position:relative}.function_block li::before{content:" ";width:64px;height:1px;background-color:#665e57;position:absolute;margin:0 auto;top:0;left:0;right:0}.function_block li::after{content:" ";width:1px;height:70px;background-color:#665e57;position:absolute;margin:auto 0;top:0;left:0;right:0}
    ```

    

## 2. 小米官网代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>小米商城</title>
    <link rel="stylesheet" href="./css/normalize.css">
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="./fa/css/all.css">
    <!-- 引入公共样式 -->
    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="./css/index.css">
    <!-- 网站收藏图标 ,需放在根目录下-->
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
</head>

<body>
    <!-- 顶部导航条 -->
    <div class="banner clearfix">
        <div class="banner_content w">
            <ul class="menu_left">
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">小米商城</a></li>
                <span class="banner_bar">|</span>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">MIUI</a></li>
                <span class="banner_bar">|</span>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">IoT</a></li>
                <span class="banner_bar">|</span>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">云服务</a></li>
                <span class="banner_bar">|</span>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">金融</a></li>
                <span class="banner_bar">|</span>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">有品</a></li>
                <span class="banner_bar">|</span>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">小爱开放平台</a></li>
                <span class="banner_bar">|</span>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">企业团购</a></li>
                <span class="banner_bar">|</span>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">资质证照</a></li>
                <span class="banner_bar">|</span>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">协议规则</a></li>
                <span class="banner_bar">|</span>
                <li class="app_list"><a href="javascript:;" target="_blank" rel="noopener noreferrer">下载app
                        <div class="app">
                            <img src="https://i1.mifile.cn/f/i/17/appdownload/download.png?1" alt="">
                            <span>小米商城App</span>
                        </div>
                    </a></li>
                <span class="banner_bar">|</span>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">智能生活</a></li>
                <span class="banner_bar">|</span>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">select location</a></li>
            </ul>

            <ul class="cart">
                <a href="javascript" target="_blank" rel="noopener noreferrer"> <i class="fas fa-shopping-cart"></i> &nbsp购物车
                </a>
            </ul>

            <ul class="menu_right">
                <li><a href="javascript" target="_blank" rel="noopener noreferrer">登陆</a></li>
                <span class="banner_bar">|</span>
                <li><a href="javascript" target="_blank" rel="noopener noreferrer">注册</a></li>
                <span class="banner_bar">|</span>
                <li><a href="javascript" target="_blank" rel="noopener noreferrer">消息通知</a></li>
            </ul>
            <div class="cart_menu">
                <div class="hidden_cart">
                    购物车中还没选购商品，赶紧买起来吧！
                </div>
            </div>
        </div>
    </div>
    <div class="header_banner">
        <div class="w header">
            <h1>小米官网
                <div class="icon">
                    <i class="home fas fa-home "></i>
                </div>
            </h1>
            <div class="product_display clearfix">
                <ul class="nav clearfix ">
                    <li><a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">全部商品分类</a></li>
                    <li class="show"><a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">小米手机</a></li>
                    <li class="show"><a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">电视</a></li>
                    <li class="show"><a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">Redmi红米</a></li>
                    <li class="show"><a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">笔记本</a></li>
                    <li class="show"><a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">家电</a></li>
                    <li class="show"><a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">路由器</a></li>
                    <li class="show"><a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">智能硬件</a></li>
                    <li><a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">服务</a></li>
                    <li><a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">社区</a></li>
                    <div class="category"></div>
                </ul>
            </div>

            <div class="search">
                <form class="search_form" action="#">
                    <input class="search_box " type="text" name="" value="">
                    <button class="search_button">
                        <i class="fas fa-search"></i>
                    </button>

                </form>
            </div>

        </div>

    </div>
    <!-- 总部侧边和轮播图 -->
    <div class="body_content w">
        <div class="body_right clearfix">
            <ul class="product_list">
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">手机 电话卡
                        <i class="fas fa-angle-right"> </i>
                    </a></li>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">电视 盒子
                        <i class="fas fa-angle-right"> </i>
                    </a></li>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">笔记本 显示器
                        <i class="fas fa-angle-right"> </i>
                    </a></li>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">家电 插线板
                        <i class="fas fa-angle-right"> </i>
                    </a></li>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">出行 穿戴
                        <i class="fas fa-angle-right"> </i>
                    </a></li>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">智能 路由器
                        <i class="fas fa-angle-right"> </i>
                    </a></li>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">电源 配件
                        <i class="fas fa-angle-right"> </i>
                    </a></li>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">健康 儿童
                        <i class="fas fa-angle-right"> </i>
                    </a></li>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">耳机 音箱
                        <i class="fas fa-angle-right"> </i>
                    </a></li>
                <li><a href="javascript:;" target="_blank" rel="noopener noreferrer">生活 箱包
                        <i class="fas fa-angle-right"> </i>
                    </a></li>
            </ul>
        </div>
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
            <div class="arrow_left">
                <i class="fas fa-chevron-left"></i>
            </div>
        </a>
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
            <div class="arrow_right">
                <i class="fas fa-chevron-right"></i>
            </div>
        </a>
        <div class="dot_list">
            <a class="dot" href="javascript:;" target="_blank" rel="noopener noreferrer"></a>
            </a>
            <a class="dot" href="javascript:;" target="_blank" rel="noopener noreferrer">
            </a>
            <a class="dot" href="javascript:;" target="_blank" rel="noopener noreferrer">
            </a>
            <a class="dot" href="javascript:;" target="_blank" rel="noopener noreferrer">
            </a>
            <a class="dot active" href="javascript:;" target="_blank" rel="noopener noreferrer">
            </a>
        </div>
    </div>
    <div class="footer w">
        <div class="function_block">
            <ul class="clearfix">
                <li class="clock">
                    <a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-clock"></i> 小米秒杀
                    </a>
                </li>
                <li class="company">
                    <a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-city"></i> 企业团购
                    </a>
                </li>
                <li class="f">
                    <a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-fax"></i> F码通道
                    </a>
                </li>
                <li class="card">
                    <a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-sim-card"></i> 米粉卡
                    </a>
                </li>
                <li class="exchange">
                    <a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-yen-sign"></i> 以旧换新
                    </a>
                </li>
                <li class="bank">
                    <a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-piggy-bank"></i> 话费充值
                    </a>
                </li>
            </ul>
        </div>
        <div class="redmi_pic">
            <ul class="redmi_product">
                <li class="pro">
                    <a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer"><img src="./img/1.jpg" alt=""></a>
                </li>
                <li class="i">
                    <a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer"><img src="./img/2.jpg" alt=""></a>
                </li>
                <li class="band">
                    <a class="text" href="javascript:;" target="_blank" rel="noopener noreferrer"><img src="./img/3.jpg" alt=""></a>
                </li>
            </ul>
        </div>
    </div>
    <div class="back_top"></div>
</body>

</html>
```



```css
.banner {
    background-color: rgb(51, 51, 51);
    height: 40px;
    line-height: 40px;
}

.banner_content {
    position: relative;
}

.banner_bar {
    font-size: 12px;
    color: #424242;
    float: left;
    margin: -1px 8px;
}

.banner_content a {
    font-size: 12px;
    color: #b0b0b0;
    text-decoration: none;
    padding-right: 1px;
    display: block;
}

.banner_content a:hover {
    color: white;
}

.menu_left {
    float: left;
}

.menu_left li {
    float: left;
}

.cart {
    float: right;
}

.menu_right {
    float: right;
}

.menu_right li {
    float: left;
}

.cart {
    margin-left: 25px;
    width: 120px;
    background-color: #424242;
    /* 字体水平居中 */
    text-align: center;
}

.cart a {
    margin: 0 auto;
    color: #b0b0b0;
}


/* .cart_menu{
    border: #424242 10px solid;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5) ;
} */

.hidden_cart {
    line-height: 1;
    width: 310px;
    /* height: 18px; */
    padding: 30px 0px;
    text-align: center;
    display: none;
    font-size: 12px;
    border: solid 1px rgba(112, 112, 112, 0.2);
    border-top: none;
    position: absolute;
    right: 0px;
    top: 40px;
    z-index: 9999;
    background-color: #ffffff;
}

.cart:hover a {
    background-color: white;
    color: #dd720d;
}

.cart:hover~.cart_menu>.hidden_cart {
    display: block;
}

.app_list {
    position: relative;
}

.app_list::before {
    display: none;
    position: absolute;
    content: "";
    border: 10px solid #424242;
    border-color: transparent transparent aliceblue transparent;
    bottom: -1px;
    left: 13px;
}


/* 设置鼠标移入后，其他元素效果 */

.app_list:hover .app,
.app_list:hover::before {
    display: block;
}

.app {
    display: none;
    width: 124px;
    height: 148px;
    /* div继承了父元素行高，需进行还原。 */
    line-height: 1;
    text-align: center;
    background-color: aliceblue;
    /* box-shadow: h-shadow v-shadow blur spread color inset; */
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .5);
    position: absolute;
    /* margin-top: 1px; */
    left: -40px;
}

.app img {
    width: 90px;
    margin: 17px;
    margin-bottom: 10px;
}

.app span {
    font-size: 14px;
    color: black;
}


/* 导航栏设置 */

.header_banner {
    position: relative;
    /* height: 100px; */
    /* width: 100%;
}
.header{
    height: 100px;
    /* 设置文字方便搜索引擎查找，但文字不显示，进行隐藏。 */
}

h1 {
    font-size: 0px;
}

.icon {
    width: 55px;
    height: 55px;
    float: left;
    /* 设置背景图片 */
    background-color: #ff6700;
    background-image: url(../img/mi-logo.png);
    background-position: center;
    position: relative;
    margin-top: 22px;
    margin-right: 7px;
    overflow: hidden;
}

.home {
    width: 55px;
    height: 55px;
    color: aliceblue;
    background-color: #ff6700;
    font-size: 30px;
    position: absolute;
    float: left;
    left: -55px;
    transition: left 0.1s;
}

.home {
    display: block;
    line-height: 55px;
    text-align: center;
}

.icon:hover .home {
    left: 0px;
}

.product_display {
    /* width: 820px; */
    height: 100px;
    /* background-color: aqua; */
    float: left;
    padding-left: 30px;
}

.nav li:first-child {
    visibility: hidden;
}

.product_display li {
    float: left;
    padding-right: 20px;
}

.product_display a {
    display: block;
    line-height: 100px;
}

.product_display a:hover {
    color: #ff6700;
}

.app {
    z-index: 99999;
}

.category {
    height: 0px;
    background-color: white;
    display: block;
    position: absolute;
    width: 100%;
    left: 0px;
    top: 100px;
    transition: height 1s;
    z-index: 9999;
    /* display: none; */
}

.nav .show:hover~.category,
.category:hover {
    height: 228px;
    border-top: 1px solid #b0b0b0;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .2);
}


/* 菜单回收，但是移入菜单后也会回收 */

.category:not(:active) {
    height: 0px;
    transition: height 1s;
}

.search {
    float: right;
    width: 296px;
    margin-top: 25px;
}

.search .search_box {
    float: left;
    /* display: inline-block; */
    height: 48px;
    width: 224px;
    padding: 0px;
    border: #b0b0b0 solid 1px;
    padding: 0px 10px;
    /* 去除输入框自带边框！！ */
    outline: none;
}

.search .search_button {
    float: left;
    /* display:inline-block; */
    height: 50px;
    width: 50px;
    color: #616161;
    font-size: 20px;
    border: #b0b0b0 solid 1px;
    border-left: none;
    outline: none;
}


/* 选中两个状况时，必须用分组选择器，一个选择器只能选择一个元素。 */

.search_box:focus,
.search_box:focus+.search_button {
    border-color: #ff6700;
}

.search_button:hover {
    background-color: #ff6700;
    color: #ffffff;
}


/* 中部轮播图 */

.body_content {
    height: 460px;
    margin-top: 100px;
    background-image: url(../img/frontpage\ 1.webp);
    background-clip: content-box;
    background-size: 100% 100%;
    position: relative;
    z-index: 999;
}

.body_right {
    width: 234px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

.body_right .product_list {
    margin: 20px auto;
}

.product_list li {
    height: 42px;
    padding: 0px 30px;
}

.body_right a {
    font: 16px;
    color: #ffffff;
    text-decoration: none;
    line-height: 42px;
    display: block;
}

.body_right i {
    float: right;
    line-height: 42px;
}

.body_right li:hover {
    background-color: #ff6700;
}

.arrow_left {
    width: 41px;
    height: 69px;
    line-height: 69px;
    float: left;
    font-size: 30px;
    font-style: oblique;
    color: rgba(213, 196, 195);
    position: absolute;
    /* 设置垂直居中 */
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 234px;
    text-align: center;
}

.arrow_left:hover {
    background-color: rgba(67, 66, 69, 0.8);
    color: #ffffff;
}

.arrow_right {
    width: 41px;
    height: 69px;
    line-height: 69px;
    float: right;
    font-size: 30px;
    font-style: oblique;
    color: rgba(213, 196, 195);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: 0;
    text-align: center;
}

.arrow_right:hover {
    background-color: rgba(67, 66, 69, 0.8);
    color: #ffffff;
}

.dot_list {
    position: absolute;
    height: 21px;
    width: 100px;
    right: 20px;
    bottom: 20px;
}

.dot {
    float: right;
    width: 6px;
    height: 6px;
    border: 2px solid rgba(165, 151, 133, 0.4);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    margin: 0px 4px;
    display: block;
}

.dot:hover,
.dot_list .active {
    border: 2px solid rgba(112, 111, 113, 0.4);
    background-color: rgba(212, 214, 250, 0.8)
}

.back_top {
    width: 26px;
    height: 206px;
    background-color: rgb(203, 250, 234);
    position: fixed;
    /* 设置位置始终保持在窗口中间位置。 */
    right: 50%;
    /* 水平布局等式：
        left+margin-left+width+margin-right+right=整个窗口水平距离。
        auto      0        26px    0        50%
    */
    /* 如果不设置其他值，则水平布局为：
        整个水平窗口大小= right:50%+left:auto(50%) */
    /* 因此需要修改元素位置，使位置固定到右边内容区处。所以只能设置margin-right值为负，将元素拉到右边。
        偏移大小为1226px/2+本身元素大小26px */
    margin-right: -639px;
    bottom: 100px;
    z-index: 9999;
}

.footer {
    margin-top: 14px;
}

.function_block,
.redmi_pic,
.redmi_pic li {
    float: left;
}

.function_block {
    width: 228px;
    height: 168px;
    background-color: #5F5750;
    padding-top: 2px;
    padding-left: 6px;
}

.function_block ul {}

.function_block li {
    /* width: 76px;
    height: 84px; */
    float: left;
}

.function_block a {
    width: 76px;
    height: 84px;
    color: #cfccca;
    display: block;
    text-align: center;
    font-size: 12px;
    overflow: hidden;
    /* a元素和iy元素因为是父子元素，给子元素设置margin会造成外边距折叠问题。解决方式有三种：
    1.给a元素添加： 
    overflow: hidden;
    2.给a元素添加:
    clearfix
    3.给li设置宽高，不好！！
     */
}

.function_block i {
    /* 注意外边距折叠问题 */
    margin-top: 20px;
    font-size: 24px;
    display: block;
    margin-bottom: 5px;
}

.function_block a:hover {
    color: #ffffff;
}

.redmi_pic {
    margin-left: 14px;
}

.redmi_pic li {
    margin-right: 15px;
}

.redmi_pic li:last-child {
    margin-right: 0px;
}

.redmi_product img {
    width: 316px;
    height: 170px;
    vertical-align: top;
}

.function_block li {
    position: relative;
}


/* 功能群划线！！ */


/* 横线 */

.function_block li::before {
    content: " ";
    width: 64px;
    height: 1px;
    background-color: #665e57;
    position: absolute;
    /* 居中设置 */
    margin: 0px auto;
    top: 0px;
    left: 0px;
    right: 0px;
}

.function_block li::after {
    content: " ";
    width: 1px;
    height: 70px;
    background-color: #665e57;
    position: absolute;
    /* 居中设置 */
    margin: auto 0px;
    top: 0px;
    left: 0px;
    right: 0px;
}
```



