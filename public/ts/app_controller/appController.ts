///<reference path="../../../typings/angularjs/angular.d.ts"/>

///<reference path=".././app_module/appModule.ts"/>



module App.Controllers {

	interface ICustomerScope extends ng.IScope {
		userId: number;
		name: string;

	}

	class CustomerController {
		constructor(scope: ICustomerScope) {
			scope.userId = 101;
			scope.name = "Khan"

		}
	}

	App.Module.getModule().controller('CustomerController', CustomerController);


}