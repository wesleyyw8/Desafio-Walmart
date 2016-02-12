var app = angular.module('desafioWalmartApp',['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
	
	$routeProvider.
		when('/welcome', {
			templateUrl: '../views/welcome.html',
			controller: 'MainController'
		}).
		when('/list', {
			templateUrl: '../views/list.html',
			controller: 'MainController'
		}).
		otherwise({
			redirectTo: 'welcome'
		});
}]);

app.directive('cityTimezone', function(){
	return{
		scope: {
			city: '=city'
		},
		template: 'The timezone in {{city.name}} is {{city.timezone}}.'
	};
});

app.controller('MainController', ['$scope', function($scope){
	$scope.cities = [
		{name: 'London', timezone: 'GMT'},
		{name: 'Tokyo', timezone: 'JST'},
		{name: 'Melbourne', timezone: 'EDT'},
		{name: 'Los Angeles', timezone: 'PST'},
		{name: 'New York', timezone: 'EST'}
	];
	$scope.selectedCity = $scope.cities[0];
}]); 
