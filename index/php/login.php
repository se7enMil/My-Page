<?php
// login.php
// 连接数据库，这里需要根据你的数据库名，用户名和密码进行修改
$conn = mysqli_connect("localhost", "root", "se7enMiles", "user");
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}

// 获取表单提交的数据
$email = $_POST["email"];
$pass = $_POST["pass"];

// 查询用户表，判断是否有匹配的邮箱和密码
$sql = "SELECT * FROM user WHERE email = '$email' AND pass = '$pass'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // 如果有匹配的记录，说明登录成功
    echo "<script>alert('登录成功');</script>";
} else {
    // 如果没有匹配的记录，说明登录失败
    echo "<script>alert('登录失败');</script>";
}

// 关闭数据库连接
mysqli_close($conn);

