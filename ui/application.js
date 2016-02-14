var app = angular.module('desafioWalmartApp',['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
	
	$routeProvider.
		when('/pedidos', {
			templateUrl: '../views/pedidos.html',
			controller: 'PedidosController'
		}).
		when('/enderecosEntrega', {
			templateUrl: '../views/enderecosEntrega.html',
			controller: 'EnderecosEntregaController'
		}).
		when('/perfilUsuario', {
			templateUrl: '../views/perfilUsuario.html',
			controller: 'PerfilUsuarioController'
		}).
		otherwise({
			redirectTo: 'perfilUsuario'
		});
}]);
app.controller('EnderecosEntregaController', ['$scope', function($scope){
	console.log('wesss bbbbbbbb');
}]); 

app.controller('EnderecosEntregaController', ['$scope', function($scope){
}]); 

app.controller('EnderecosEntregaController', ['$scope', function($scope){
	
}]); 
