app.controller('PedidosController', ['$scope','$http', 'Config','$routeParams', function($scope,$http, Config, routeParams){
	populateTable();
	function populateTable(){
		$http.get(Config.base_url + Config.endpoints.getPedidos+'?userid='+routeParams.id+'').then(function(resp) {
			$scope.pedidos = resp.data.pedidos;
		});
	}
}]); 
