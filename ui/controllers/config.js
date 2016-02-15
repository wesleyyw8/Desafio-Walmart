var app = angular.module('desafioWalmartApp',['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
	
	$routeProvider.
		when('/pedidos/:id', {
			templateUrl: '../views/pedidos.html',
			controller: 'PedidosController'
		}).
		when('/enderecosEntrega/:id', {
			templateUrl: '../views/enderecosEntrega.html',
			controller: 'EnderecosEntregaController'
		}).
		when('/perfilUsuario/:id', {
			templateUrl: '../views/perfilUsuario.html',
			controller: 'PerfilUsuarioController'
		}).
		otherwise({
			redirectTo: '/perfilUsuario/1'
		});
}]);

angular.module('desafioWalmartApp').factory('Config', [function() {
	var baseUrl = "api/";
	return {
		userId: 3,
		base_url: baseUrl,
		endpoints: {
	    	getEnderecos: "getEnderecos",
	    	getClientes: "getClientes",
	    	updateClientes: "updateClientes",
	    	getPedidos: "getPedidos"
		}
	};
}]);