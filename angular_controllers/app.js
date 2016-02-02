var app = angular.module('timezoneFinderApp',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/welcome', {
			templateUrl: '/views/welcome.html',
			controller: 'MainController'
		}).
		when('/list', {
			templateUrl: 'list.html',
			controller: 'MainController'
		}).
		otherwise({
			redirectTo: 'welcome'
		});
}]);

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