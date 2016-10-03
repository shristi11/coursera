
(function() {
   angular.module("assignment1", [])
   .controller("lunchCheck", ['$scope', function($scope) {
   	  $scope.mylunch = ""; 
       $scope.checking = function() {
       	var lunches = $scope.mylunch.split(",");
       	console.log(lunches.length);
       	if(lunches.length == 1) {
       		$scope.message = "Please enter data first";
       
       	} else if(lunches.length > 1 && lunches.length < 4) {
       		$scope.message = "Enjoy!";
       	} else if(lunches.length > 3) {
       		$scope.message =  "Too much!";
       	}
       }
   }]);

  
})();
