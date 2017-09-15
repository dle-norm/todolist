app.factory('TaskFactory', function ($http) {
    var task = {
        list : [],
        addTask : function(TaskName) {
            var tmp = {
                task : TaskName,
                favourite: false,
                subTask : []
            };
            this.list.push(tmp);
        },
        deleteTask : function(id) {
            this.list.splice(id, 1);
        },
        addSubTask : function(id, subTaskName) {
            if (this.list[id].subTask.length < 3) {
                this.list[id].subTask.push(subTaskName);
            }
        },
        deleteSubTask : function(id, index) {
            this.list[id].subTask.splice(index, 1);
        },
        isFavourite : function(id) {
            this.list[id].favourite = !this.list[id].favourite;
        },
        deleteAllTask : function() {
            this.list = [];
        },
        setTask : function() {
            var that = this;
            $http.get('https://demo2298213.mockable.io/tasks').then(function (reponse) {
                that.list = reponse.data.tasks;
            },function (reponse) {
                console.log(reponse);
            });
        }
    }
    return task;
});