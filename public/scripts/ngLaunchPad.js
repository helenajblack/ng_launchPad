console.log('js');

//create a new angular module named "myApp"
var myApp = angular.module('myApp', []);

//add a controller to myApp
myApp.controller('AngularIntro', function() {
  var vm = this;

  vm.showFront = true;

  vm.testClick = function() {
    vm.output = "You typed: " + vm.userInput;
    console.log('you typed:', vm.userInput);
  };

  vm.toggleShow = function() {
    vm.showFront = !vm.showFront; //invert boolean value
  }; //end toggle

}); //end AngularIntro controller

/**************
after creating the module and controller, these must be connected ot html
do this with ng-app and ng-controller
see index.html for reference
*************/
