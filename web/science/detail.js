$(function() {
	var petId = getUrlParam('petId');
	var Param = {
		"petId": petId
	};
	$.getJSON('http://127.0.0.1:8080/pet/getPetSciById', Param, function(response) {
		pushDom(response);
	});
});

function pushDom(data) {
	console.log(data);
	new Vue({
		el: '#app',
		data: {
			image: data["imgPath"],
			object: {
				"名称：": data["petName"],
				"别名：": data["petAlias"],
				"寿命：": data["petLifetime"],
				"毛长：": data["petWoolLength"],
				"原产地：": data["petSource"],
				"指导价：": data["petPrice"],
				"体型：": data["petBodily"],
				"描述：": data["petDesc"],
				"特征：": data["petForm"],
				"性格特点：": data["petCharacter"],
				"喂食要点：": data["petFeed"],
				"生活环境：": data["petEnv"]
			}
		}
	})
}

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); // 匹配目标参数
	if(r != null) return unescape(r[2]);
	return null; // 返回参数值
}