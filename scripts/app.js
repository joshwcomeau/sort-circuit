var app = angular.module("sortCircuit", []);

app.controller('SelectionController', ['$scope', function($scope) {
  $scope.sort_list = function() {
    arr = $scope.list.replace(/ /g, '').split(",");

    $scope.sorted_list = selection_sort(arr);
  };
}]);