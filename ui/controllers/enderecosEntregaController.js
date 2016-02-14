app.controller('EnderecosEntregaController', ['$scope','$http', 'Config', function($scope,$http, Config){
	//$http.get(Config.base_url + Config.endpoints.getEnderecos + "'" + Config.userId + "'").then(function(data) {
	$http.get(Config.base_url + Config.endpoints.getEnderecos).then(function(resp) {
		console.log(resp.data.data);
		$scope.enderecos = resp.data.data;
	});
}]); 
