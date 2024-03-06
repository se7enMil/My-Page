<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>se7enMiles</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="css/main.css">
		<link rel="stylesheet" href="css/login.css">
	</head>
	<body id="bdy">
		<!-- 创建一个div元素，用于显示时间 -->
		<div class="show_time" id="show_time">
			<!-- 创建一个span元素，用于显示时间，并给它一个id属性和一个class属性 -->
			<span id="time" class="time">
				<!-- 引入外部的JavaScript文件，用于获取和更新时间 -->
				<script src="./js/this_time.js"></script>
			</span>
		</div>
		<!-- 创建一个div元素，用于显示登录按钮 -->
		<div class="login_button">
			<!-- 创建一个button元素，用于显示登录按钮，并给它一个class属性 -->
			<button class="show_login_button" id="login_button">
				<!-- 在button元素内创建一个img元素，用于显示登录按钮的图片，并给它一个src属性和一个alt属性 -->
				<img src="img/进入_login.png" alt="">
			</button>
		</div>
		<div class="main_login">
			<div class="show_login" id="show_login">
				<span>Login</span>
				<form action="">
					<input type="email" name="" id="" placeholder="E-mail">
					<input type="password" name="" id="" placeholder="Passworld">
					<button type="submit">登录</button>
					<button id="rbacka">返回</button>
					<p class="go_enrool" id="go_enrool">去注册账号</p>
				</form>
			</div>
			<div class="show_enroll" id="show_enroll">
				<span>Enrool</span>
				<form action="">
					<input type="email" name="" id="" placeholder="E-mail">
					<input type="password" name="" id="" placeholder="Passworld">
					<input type="password" name="" id="" placeholder="Passworld again">
					<button type="submit">注册</button>
					<button id="rbackb">返回</button>
				</form>
			</div>
		</div>
		<script src="js/Logn.js"></script>
	</body>

</html>