///<reference path=".././all.d.ts"/>

module App.Module {


	var app = angular.module("myApp", []);
	// export var getModule = (): ng.IModule => {
	// 	return angular.module("myApp");
	// }

		
		export function f1(){
			
			alert("hello");
		}

// 
// 	var f1: () => string = () => {
// 		return "dsfsdf";
// 	}

}

declare module 'Module'{
	export = App.Module
}