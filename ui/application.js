var app = angular.module('desafioWalmartApp',['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
	
	$routeProvider.
		when('/pedidos', {
			templateUrl: '../views/pedidos.html',
			controller: 'PedidosController'
		}).
		when('/enderecosEntrega/:id', {
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

angular.module('desafioWalmartApp').factory('Config', [function() {
	var baseUrl = "api/";
	return {
		userId: 3,
		base_url: baseUrl,
		endpoints: {
	    	getEnderecos: "getEnderecos"
		}
	};
}]);
app.controller('EnderecosEntregaController', ['$scope','$http', 'Config', function($scope,$http, Config){
	//$http.get(Config.base_url + Config.endpoints.getEnderecos + "'" + Config.userId + "'").then(function(data) {
	$http.get(Config.base_url + Config.endpoints.getEnderecos).then(function(resp) {
		console.log(resp.data.data);
		$scope.enderecos = resp.data.data;
	});
}]); 

app.controller('PedidosController', ['$scope', function($scope){
}]); 

app.controller('PerfilUsuarioController', ['$scope', function($scope){
}]); 
