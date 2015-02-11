app.config(['$routeProvider', function ($routeProvider){
	$routeProvider.when('/', {		
		//templateUrl: 'templates/listGroups.html',
		templateUrl: 'example/views/example.client.view.html',
		controller: 'ResultsController'
	}).when('/groupAdd', {		
		controller: 'groupAddController'
	}).when('/addSubgroup/:groupId', {
		templateUrl: 'example/views/example.client.addSubgroup.html',
		controller: 'subGroupAddController'
	}).otherwise({
		redirectTo: '/errorPage'
	});	
}]);