app.controller('myCtrl', function($scope, TaskFactory) {
    $scope.list = TaskFactory;
});