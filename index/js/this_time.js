// 获取span标签的引用
var span = document.getElementById("time");
// 定义一个函数，用于格式化时间
function formatTime(date) {
	// 获取小时、分钟和秒数 
	var hours = date.getHours();
	var minutes = date.getMinutes();
	// 补零 
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	// 返回格式化后的字符串
	return hours + ":"+minutes;
}
// 定义一个函数，用于更新span标签的内容
function updateTime() {
	// 获取当前的时间 
	var date = new Date();
	// 格式化时间
	var time = formatTime(date);
	// 更新span标签的内容
	span.innerHTML = time;
}
// 调用一次函数，显示初始的时间
setInterval(updateTime, 150);
// 