
///<reference path=".././all.d.ts"/>


module App.Controllers {

	interface ICustomerScope extends ng.IScope {
		userId: number;
		name: string;

	}

	class CustomerController {
		constructor(scope: ICustomerScope) {
			debugger;
			scope.userId = 101;
			scope.name = "Khan"

		}
	}
	debugger;
//console.log(	App.Module);


//	App.Module.getModule().controller('CustomerController', CustomerController);


}