
var App;
(function (App) {
    var Module;
    (function (Module) {
        var app = angular.module("myApp", []);
        
        
        
        function f1() {
            alert("hello");
        }
        Module.f1 = f1;
    })(Module = App.Module || (App.Module = {}));
})(App || (App = {}));
