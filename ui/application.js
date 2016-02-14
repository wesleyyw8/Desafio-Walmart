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
app.controller('EnderecosEntregaController', ['$scope','$http', 'Config','$routeParams', function($scope,$http, Config, routeParams){
	populateTable();
	function populateTable(){
		$http.get(Config.base_url + Config.endpoints.getEnderecos+'?userid='+routeParams.id+'').then(function(resp) {
			$scope.enderecos = resp.data.enderecos;
		});
	}
}]); 

app.controller('PedidosController', ['$scope', function($scope){
}]); 

app.controller('PerfilUsuarioController', ['$scope', function($scope){
}]); 
