
///<reference path=".././all.d.ts"/>


module App.Controllers {

	interface ICustomerScope extends ng.IScope {
		userId: number;
		name: string;

	}

	class CustomerController {

		static $inject = ['$scope', '$http'];

		_httpService: ng.IHttpService;
		constructor(scope: ICustomerScope, public http: ng.IHttpService) {

			scope.userId = 101;
			scope.name = "Khan"

			this._httpService = http;
			delete this._httpService.defaults.headers.common['X-Requested-With'];

		}

		customername: string = "nk"

		clickMe = () => {



			var url2 = 'https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero';


			var url = 'http://localhost:8012/naved/?callback=JSON_CALLBACK';

			var httpSetting = {
				method: "jsonp",
				url: url
			};
			debugger;
			this._httpService.jsonp(url).success(function(data) {

				debugger;
				console.log(data);

			});



		}

		





	}
	App.Module.getModule().controller('CustomerController', CustomerController);
}