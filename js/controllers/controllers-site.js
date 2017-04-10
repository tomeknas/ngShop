'use strict';

var controllersSite = angular.module( 'controllersSite' , [] );




controllersSite.controller( 'siteProducts' , [ '$scope' , '$http' , 'cartSrv', function( $scope, $http, cartSrv ){
	
		$http.get( 'Model/produkty.json').
	success(function(data){
		$scope.products = data;
	} ).error(function(){ 
		console.log('Niestety bład');
	});

		
		$scope.addToCart = function(product){
		cartSrv.add(product);
		
	};

}]);

controllersSite.controller( 'siteProduct' , [ '$scope' , '$http' , '$routeParams', 'cartSrv', function( $scope,  $http, $routeParams, cartSrv ){
	

		$http.get( 'Model/produkty.json').
	success(function(data){
		var produkty = data;
		$scope.product = produkty[$routeParams.id];
	} ).error(function(){ 
		console.log('Niestety bład');
	});

	$scope.addToCart = function(product){
		cartSrv.add(product);
		console.log(product);
	}

		

}]);


controllersSite.controller( 'siteOrders' , [ '$scope' , '$http' , function( $scope, $http ){
	
	$http.get( 'Model/orders.json').
	success(function(data){
		$scope.orders = data;
	} ).error(function(){ 
		console.log('Niestety bład');
	});
	
		


}]);

controllersSite.controller( 'cartCtrl' , [ '$scope' , '$http' ,'$filter', 'cartSrv',  function( $scope, $http, $filter , cartSrv ){
	
	$scope.cart = cartSrv.show();
	$scope.emptyCard = function(){
		cartSrv.empty();
		
	};

	$scope.total = function(){
		var total=0;
		angular.forEach($scope.cart, function(item){
				total += item.qty*item.price;
		});
		total = $filter('number')(total, 2);
		return total;
	};
	$scope.removeItem = function( $index){
		$scope.cart.splice($index, 1)
			cartSrv.update($scope.cart);
	};
	$scope.setOrder = function( $event ){
	
		//TODO: zapisz zamówienie w bazie
		
		var loggedIn = true;
			if (!loggedIn){
				$scope.alert = {type:'warning' , msg:'Musisz być zalogowany, żeby złożyć zamówienie'};
				$event.preventDefault();
				return false;
			}
			//TODO: sprawdz czy użytkownik jest zalogowany
			console.log($scope.total());
			console.log($scope.cart);
				$scope.alert = {type:'success' , msg:'Zamówienie złożone, trwa przekierowywanie do płatności...'};
			cartSrv.empty();

			$event.preventDefault();
			$('#paypalForm').submit();   //jQUERY
	};
		$scope.$watch(function(){
		cartSrv.update($scope.cart);
	});

}]);

controllersAdmin.controller( 'orders' , [ '$scope' , '$http' , function( $scope, $http ){
	
	$http.get( 'Model/orders.json').
	success(function(data){
		$scope.orders = data;
	} ).error(function(){ 
		console.log('Niestety bład');
	});
	

}]);

controllersAdmin.controller( 'login' , [ '$scope' , '$http' , function( $scope, $http ){
	$scope.input = {};
	$scope.formSubmit = function(){
		$scope.errors={};
		$scope.errors.login = 'Błędny email lub hasło';
		console.log($scope.input);
	};

	// TODO: pobrać dane z formularza  i przesłac bazy

}]);
controllersAdmin.controller( 'register' , [ '$scope' , '$http' , function( $scope, $http ){
	
	// TODO: pobrać dane z formularza  i przesłac bazy
	$scope.input = {};
	$scope.formSubmit = function(){
		$scope.errors={};
		$scope.errors.name ='Złe imię';
		$scope.submit=true;
	console.log($scope.input);
};
}]);