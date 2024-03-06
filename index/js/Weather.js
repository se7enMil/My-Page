var WeatherImg=document.getElementsByClassName("Weather");
function getIPAddress() {
    return fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ipAddress = data.ip;
      console.log('您的IP地址：', ipAddress);
      return ipAddress; // 返回IP地址
    })
    .catch(error => {
      console.error('获取IP地址时出错：', error);
    });
}

// 调用函数以获取IP地址
// getIPAddress().then(ipAddress => {
//     var ipas = document.getElementById("ipas");
//     ipas.innerText = ipAddress;
// });

const apiKey = 'bdad07bd0cc2729af18626fe53fa1d6e';
const city = '430100';
//https://restapi.amap.com/v3/weather/weatherInfo?parameters&city=430100&key=bdad07bd0cc2729af18626fe53fa1d6e
const url='https://restapi.amap.com/v3/weather/weatherInfo?parameters&city='+city+'&key='+apiKey
function fetchData(dataType) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            // 处理获取到的数据
            console.log(data);
            // 使用方括号语法
            const value = data.lives[0][dataType];
            return value;
        })
        .catch(error => {
            console.error(`获取${dataType}信息时出错：`, error);
        });
}

fetchData('weather').then(weather => {
    console.log('获取到的天气：', weather);
    // 在此处处理天气数据
});

fetchData('temperature_float').then(temperature => {
    console.log('获取到的温度：', temperature);
    // 在此处处理温度数据
    var TEMPER = document.getElementById('temper');
    TEMPER.innerText=temperature;
});