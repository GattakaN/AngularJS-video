angular.module("app", ["ui.router"])
    .config(function config($stateProvider){
        $stateProvider.state("index", {
            url:"",
            controller: "FirstCtrl as first",
            templateUrl: "first.html"
        })
    })
    .config(function config($stateProvider){
        $stateProvider.state("second", {
            url:"",
            controller: "SecondCtrl as second",
            templateUrl: "second.html"
        })
    })
    .service("greeting", function Greeting(){
        var greeting = this;
        greeting.message = "Default";
    })
    .controller("FirstCtrl", function FirstCtrl(greeting){
        var first = this;
        first.greeting = greeting;
    })
    .controller("SecondCtrl", function SecondCtrl(greeting){
        var second = this;
        second.greeting = greeting;
    })
