var myApp = angular.module('myApp', ['ngSanitize']);
var token = "bcb5944c2d20f435e91068e9673f477180a2b26c5c02d406284b6de4039ca164";

myApp.controller('listController', function($scope, $http){

	var rs = $http.get("https://api.dribbble.com/v1/shots?sort=viewsuser&access_token="+token);
	rs.success(function (response) {
	    $scope.shots = response;
	});

});







