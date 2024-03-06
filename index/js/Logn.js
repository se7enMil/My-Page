var main_login = document.getElementById("login_button");
// 点击登录按钮后执行
main_login.addEventListener("click", run_login);

function run_login() {
	var login = document.getElementById("show_login");
	var enrool = document.getElementById("show_enroll");
	var time = document.getElementById("show_time");
	var gbtn = document.getElementById("login_button");
	time.style.display = "none";
	gbtn.style.display = "none";
	enrool.style.display = "none";
	login.style.display = "block";
};
var go_enrool = document.getElementById("go_enrool");
go_enrool.addEventListener("click", goenrool);
function goenrool() {
	var login = document.getElementById("show_login");
	var enrool = document.getElementById("show_enroll");
	var time = document.getElementById("show_time");
	var gbtn = document.getElementById("login_button");
	time.style.display = "none";
	gbtn.style.display = "none";
	enrool.style.display = "block";
	login.style.display = "none";
}
var rbacka = document.getElementById("rbacka");
rbacka.addEventListener("click", rbackaf)
function rbackaf() {
	var login = document.getElementById("show_login");
	var enrool = document.getElementById("show_enroll");
	var time = document.getElementById("show_time");
	var gbtn = document.getElementById("login_button");
	time.style.display = "none";
	gbtn.style.display = "none";
	enrool.style.display = "none";
	login.style.display = "block";
}
var rbackb = document.getElementById("rbackb");
rbackb.addEventListener("click", rbackbf)
function rbackbf() {
	var login = document.getElementById("show_login");
	var enrool = document.getElementById("show_enroll");
	var time = document.getElementById("show_time");
	var gbtn = document.getElementById("login_button");
	time.style.display = "none";
	gbtn.style.display = "none";
	enrool.style.display = "none";
	login.style.display = "block";
};