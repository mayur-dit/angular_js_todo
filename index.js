var app = angular.module('todo_app', []);
app.controller('ctrl_todo', function ($scope) {

    // init data with localstorage data or empty array.
    $scope.todo_list = JSON.parse(localStorage.getItem("list") || "[]");

    // add todo in list.
    $scope.add_todo = function () {
        if ($scope.todo_value && $scope.todo_value !== "") {
            $scope.todo_list.push({
                todoText: $scope.todo_value,
                done: false
            });
            $scope.todo_value = "";
            // store in local storage of browser
            localStorage.setItem("list", JSON.stringify($scope.todo_list));
        }
    };

    // remove todo from list.
    $scope.remove_todo = function () {
        var temp_list = $scope.todo_list;
        $scope.todo_list = [];
        angular.forEach(temp_list, function (x) {
            if (!x.done) $scope.todo_list.push(x);
        });
        // store latest changes to local storage.
        localStorage.setItem("list", JSON.stringify($scope.todo_list));
    };

    $scope.select_all = function () {
        angular.forEach($scope.todo_list, function (x) {
            x.done = true;
        });
    };

    $scope.select_none = function () {
        angular.forEach($scope.todo_list, function (x) {
            x.done = false;
        });
    };

});