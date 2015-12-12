
var App;
(function (App) {
	var Module;
	(function (Module) {
		var app = angular.module("myApp", []);
		app.config(["$httpProvider", function ($httpProvider) {
			$httpProvider.defaults.useXDomain = true;
			delete $httpProvider.defaults.headers.common['X-Requested-With'];





		}]);
		Module.getModule = function () {
			return angular.module("myApp");
		};
		function f1() {
			alert("hello");
		}
		Module.f1 = f1;
	})(Module = App.Module || (App.Module = {}));
})(App || (App = {}));


var App;
(function (App) {
	var Controllers;
	(function (Controllers) {
		var CustomerController = (function () {
			function CustomerController(scope, http) {
				var _this = this;
				this.http = http;
				this.customername = "nk";
				this.clickMe = function () {
					var url2 = 'https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero';
					var url = 'http://localhost:8012/naved/?callback=angular.callbacks._0';

					var httpSetting = {
						method: "jsonp",
						url: url
					};

					_this._httpService.jsonp(url).success(function (data) {
						console.log(data);
						//	scope.$digest(function () {
					
						_this.customername = data.text;
					
						//});

					}).error(function (err) {
						//debugger;
						console.log(err);

					});

					// _this._httpService.jsonp('http://api.dribble.com/shots/popular?callback=JSON_CALLBACK').then(function (data) {
					// 	console.log(data);
					// })

				};
				scope.userId = 101;
				scope.name = "Khan";
				this._httpService = http;

			}
			CustomerController.$inject = ['$scope', '$http'];
			return CustomerController;
		})();
		App.Module.getModule().controller('CustomerController', CustomerController);
	})(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
