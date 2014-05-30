var app = angular.module("sortCircuit", []);

app.controller('SelectionController', ['$scope', function($scope) {
  $scope.sort_list = function() {
    arr = $scope.list.replace(/ /g, '').split(",");
    $scope.sorted_list = selection_sort(arr);
    $scope.sorted_object = {};
    _.each($scope.sorted_list, function(element, index) {
      if ( parseInt(element) ) {
        $scope.sorted_object[index] = element;
        console.log($scope.sorted_object);
      }
    });

  };
}]);