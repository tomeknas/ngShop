'use strict';

var controllersAdmin = angular.module( 'controllersAdmin' , ['angularFileUpload', 'myDirectives'] );




controllersAdmin.controller( 'products' , [ '$scope' , '$http' , 'cartSrv', function( $scope, $http, cartSrv ){
	
		$http.get( 'Model/produkty.json').
	success(function(data){
		$scope.products = data;
	} ).error(function(){ 
		console.log('Niestety bład');
	});

	$scope.delete = function(product, $index){
			if (!confirm('Czy na pewno chcesz usunąć produkt: ' + product.name + '?'))
				return false;
			//TODO: zapisac dane przez api
			$scope.products.splice($index, 1 );

			console.log(product);
			
		}
		
}]);

controllersAdmin.controller( 'productEdit' , [ '$scope' , '$http' , '$routeParams' ,'FileUploader',  function( $scope,  $http, $routeParams, FileUploader ){
	

		$http.get( 'Model/produkty.json').
	success(function(data){
		var produkty = data;
		$scope.product = produkty[$routeParams.id];
	} ).error(function(){ 
		console.log('Niestety bład');
	});

		$scope.saveChanges = function(product){

			//TODO: zapisac dane przez api

			console.log(product);
			console.log($routeParams.id);
		};

		var uploader = $scope.uploader = new FileUploader({
			url:'api/admin/images/upload/' + $routeParams.id
		});
			 uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });
			 uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
}]);

controllersAdmin.controller( 'productCreate' , [ '$scope' , '$http', function( $scope,  $http ){
	

		$scope.createProduct = function(){

			//TODO: zapisac dane przez api

			console.log($scope.product);
			
		}

}]);

controllersAdmin.controller( 'users' , [ '$scope' , '$http' , function( $scope, $http ){
	
	$http.get( 'Model/users.json').
	success(function(data){
		$scope.users = data;
	} ).error(function(){ 
		console.log('Niestety bład');
	});
	$scope.delete = function(user, $index){
			if (!confirm('Czy na pewno chcesz usunąć użytkownika?'))
				return false;
			//TODO: zapisac dane przez api
			$scope.users.splice($index, 1 );

			console.log(product);
			
		};


}]);

controllersAdmin.controller( 'userEdit' , [ '$scope' , '$http' , '$routeParams', function( $scope,  $http, $routeParams ){
	

		$http.get( 'Model/users.json').
	success(function(data){
		var produkty = data;
		$scope.user = produkty[$routeParams.id];
	} ).error(function(){ 
		console.log('Niestety bład');
	});

		$scope.saveChanges = function(user){

			//TODO: zapisac dane przez api

			console.log(user);
			console.log($routeParams.id);
		}

}]);

controllersAdmin.controller( 'userCreate' , [ '$scope' , '$http', function( $scope,  $http ){
	

		$scope.createUser = function(){

			//TODO: zapisac dane przez api

			console.log($scope.user);
			
		}

}]);

controllersAdmin.controller( 'orders' , [ '$scope' , '$http' , function( $scope, $http ){
	
	$http.get( 'Model/orders.json').
	success(function(data){
		$scope.orders = data;
	} ).error(function(){ 
		console.log('Niestety bład');
	});
	$scope.delete = function(user, $index){
			if (!confirm('Czy na pewno chcesz usunąć użytkownika ?'))
				return false;
			//TODO: zapisac dane przez api
			$scope.orders.splice($index, 1 );

			console.log(product);
			
		};
		$scope.changeStatus = function(order){

		if ( order.status == 0){
			order.status =1;
		}
		else{
			order.status =0;
		}

			console.log(order.status);
			
		};

		//TODO: zapisac dane przez api


}]);