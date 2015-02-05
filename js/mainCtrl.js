var app = angular.module("quoteBook");

app.controller('mainCtrl', function($scope, dataService){
	// $scope.test = 'THIS is a test.';

	$scope.getQuotes = function() {
		$scope.quotes = dataService.getData();
	};
	
	$scope.getQuotes();
});