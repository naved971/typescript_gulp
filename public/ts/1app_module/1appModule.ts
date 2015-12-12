///<reference path=".././all.d.ts"/>

module App.Module {


	var app = angular.module("myApp", []);
	app.config(["$httpProvider", function($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		
		
		
		// $httpProvider.defaults.useXDomain = true;
		// $httpProvider.defaults.withCredentials = true;
		// delete $httpProvider.defaults.headers.common["X-Requested-With"];
		// $httpProvider.defaults.headers.common["Accept"] = "application/json";
		// $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

	}])

	export var getModule = (): ng.IModule => {

		return angular.module("myApp");
	}


	export function f1() {

		alert("hello");
	}

	// 
	// 	var f1: () => string = () => {
	// 		return "dsfsdf";
	// 	}

}

declare module 'Module' {
	export = App.Module
}