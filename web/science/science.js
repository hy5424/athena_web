//new Vue({
//	el: '#app',
//	data: {
//		items1: [],
//		items2: [],
//		items3: []
//	},
//	mounted: function() {
//		this.$nextTick(function() {
//			this._request();
//		});
//	},
//	methods: {
//		_request: function() {
//			var self = this;
//			$.getJSON('http://127.0.0.1:8080/pet/getPetSci', function(response) {
//				self.items1 = response["class1"];
//				self.items2 = response["class2"];
//				self.items3 = response["class3"];
//				console.log(self.items1);
//			});
//
//		}
//	}
//});

$(function() {
	$.getJSON('http://127.0.0.1:8080/pet/getPetSci', function(response) {
		pushDom(response);
	});
});

function pushDom(data) {
	console.log(data["class1"]);
	console.log(data["class2"]);
	new Vue({
		el: '#app',
		data: {
			items1: data["class1"],
			items2: data["class2"],
			items3: data["class3"]
		}
	})
}