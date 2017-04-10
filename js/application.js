'use strict';

var app = angular.module( 'app' , ['ngRoute', 'angular-storage', 'controllersAdmin', 'controllersNavigation', 'controllersSite', 'myServices'] );

app.config([ '$routeProvider' , '$httpProvider', function( $routeProvider, $httpProvider ){

	//=================home===================//
	$routeProvider.when('/home', {
		
		templateUrl: 'Partials/home.html'
	});

	//=================admin products===================
	$routeProvider.when('/admin/products', {
		controller : 'products',
		templateUrl: 'Partials/admin/products.html'
	});
	$routeProvider.when('/admin/product/edit/:id', {
		controller : 'productEdit',
		templateUrl: 'Partials/admin/product-edit.html'
	});

	$routeProvider.when('/admin/product/create', {
		controller : 'productCreate',
		templateUrl: 'Partials/admin/product-create.html'
	});

//=================admin user===================
	$routeProvider.when('/admin/users', {
		controller : 'users',
		templateUrl: 'Partials/admin/users.html'
	});

	$routeProvider.when('/admin/user/edit/:id', {
		controller : 'userEdit',
		templateUrl: 'Partials/admin/user-edit.html'
	});

	$routeProvider.when('/admin/user/create', {
		controller : 'userCreate',
		templateUrl: 'Partials/admin/user-create.html'
	});

//=================admin order===================
	$routeProvider.when('/admin/orders', {
		controller : 'orders',
		templateUrl: 'Partials/admin/orders.html'
	});

	//=================site products===================
	$routeProvider.when('/products', {
		controller : 'siteProducts',
		templateUrl: 'Partials/site/products.html'
	});
	$routeProvider.when('/product/:id', {
		controller : 'siteProduct',
		templateUrl: 'Partials/site/product.html'
	});
	$routeProvider.when('/cart', {
		controller : 'cartCtrl',
		templateUrl: 'Partials/site/cart.html'
	});
	$routeProvider.when('/orders', {
		controller : 'siteOrders',
		templateUrl: 'Partials/site/Orders.html'
	});

//==============login & register=============
	$routeProvider.when('/login', {
		controller : 'login',
		templateUrl: 'Partials/site/login.html'
	});


$routeProvider.when('/register', {
		controller : 'register',
		templateUrl: 'Partials/site/register.html'
	});

	

	
	//==============default=============
	$routeProvider.otherwise( {
			redirectTo: '/products'
	});


}])


