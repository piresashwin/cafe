angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('OrderCtrl', function($scope, Orders) {
  $scope.Orders = Orders.all();
})

.controller('OrderDetailCtrl', function($scope, $stateParams, Orders) {
  $scope.Order = Orders.get($stateParams.orderId);
})

.controller('AccountCtrl', function($scope) {
});
