///<reference path="../../../typings/angularjs/angular.d.ts"/>
var App;
(function (App) {
    var Module;
    (function (Module) {
        var app = angular.module("myApp", []);
        Module.getModule = function () {
            return app;
        };
    })(Module = App.Module || (App.Module = {}));
})(App || (App = {}));
