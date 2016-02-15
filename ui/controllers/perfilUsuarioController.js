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
