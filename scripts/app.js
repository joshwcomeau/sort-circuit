var app = angular.module("sortCircuit", []);

app.controller('SelectionController', ['$scope', function($scope) {
  $scope.sort_list = function() {
    arr = $scope.list.replace(/ /g, '').split(",");
    $scope.sorted_list = selection_sort(arr);
    $scope.sorted_objects = [];
    _.each($scope.sorted_list, function(element, index) {
      if ( isNumber(element) ) {
        $scope.sorted_objects.push({
          position: index,
          number: element
        });
        
      }
    });

  };
}]);