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
app.controller('EnderecosEntregaController', ['$scope','$http', 'Config','$routeParams', function($scope,$http, Config, routeParams){
	populateTable();
	function populateTable(){
		$http.get(Config.base_url + Config.endpoints.getEnderecos+'?userid='+routeParams.id+'').then(function(resp) {
			$scope.enderecos = resp.data.enderecos;
		});
	}
}]); 

app.controller('PedidosController', ['$scope','$http', 'Config','$routeParams', function($scope,$http, Config, routeParams){
	populateTable();
	function populateTable(){
		$http.get(Config.base_url + Config.endpoints.getPedidos+'?userid='+routeParams.id+'').then(function(resp) {
			$scope.pedidos = resp.data.pedidos;
		});
	}
}]); 

app.controller('PerfilUsuarioController', ['$scope','$http', 'Config','$routeParams', function($scope ,$http, Config, routeParams){
	$scope.isEditForm = false;
	populateForm();
	function populateForm(){
		$http.get(Config.base_url + Config.endpoints.getClientes+'?userid='+routeParams.id+'').then(function(resp) {
			$scope.cliente = resp.data.cliente[0];
		});
	}
	$scope.editClient = function(){
		$scope.isEditForm = true;
	}
	$scope.updateClient = function(){
		var data = {
			userid: routeParams.id,
			nome: $scope.cliente.nome,
			sexo: $scope.cliente.sexo,
			idade: $scope.cliente.idade,
		}
		$http.post(Config.base_url + Config.endpoints.updateClientes, data).then(function(resp) {
			$scope.isEditForm = false;
		});
	}
}]); 
