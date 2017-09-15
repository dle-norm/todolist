app.controller('myCtrl', function($scope, TaskFactory) {
    TaskFactory.setTask();
    $scope.list = TaskFactory;
});