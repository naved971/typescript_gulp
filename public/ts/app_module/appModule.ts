///<reference path="../../../typings/angularjs/angular.d.ts"/>


module App.Module {


	var app = angular.module("myApp", []);
	export var getModule = (): ng.IModule => {
		return app;
	}


// 
// 	var f1: () => string = () => {
// 		return "dsfsdf";
// 	}

}