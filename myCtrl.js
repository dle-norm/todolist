var app = angular.module("monApp",[]);
app.controller('myCtrl', function($scope) {
    $scope.list = [];
    $scope.addTask = function () {
        var tmp = {
            task : $scope.tasks,
            favourite: false,
            subTask : []
        };
        $scope.tasks = "";
        $scope.list.push(tmp);

    };
    $scope.deleteTask = function (id) {
        $scope.list.splice(id, 1);
    };
    $scope.addSubTask = function (id, subTaskName) {
        if ($scope.list[id].subTask.length < 3) {
            $scope.list[id].subTask.push(subTaskName);
        }
    };
    $scope.deleteSubTask = function (id, index) {
        $scope.list[id].subTask.splice(index, 1);  
    };
    $scope.isFavourite = function (id) {
        $scope.list[id].favourite = !$scope.list[id].favourite;
    }
    $scope.deleteAllTask = function () {
        $scope.list = [];
    }
});