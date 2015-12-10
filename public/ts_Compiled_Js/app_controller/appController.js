///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path=".././app_module/appModule.ts"/>
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var CustomerController = (function () {
            function CustomerController(scope) {
                scope.userId = 101;
                scope.name = "Khan";
            }
            return CustomerController;
        })();
        App.Module.getModule().controller('CustomerController', CustomerController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
