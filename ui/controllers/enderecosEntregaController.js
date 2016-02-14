app.controller('EnderecosEntregaController', ['$scope','$http', 'Config','$routeParams', function($scope,$http, Config, routeParams){
	populateTable();
	function populateTable(){
		$http.get(Config.base_url + Config.endpoints.getEnderecos+'?userid='+routeParams.id+'').then(function(resp) {
			$scope.enderecos = resp.data.data;
		});
	}
}]); 
