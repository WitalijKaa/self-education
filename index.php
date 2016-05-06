<!DOCTYPE html>
<html ng-app="educationApp">
<head>
    <meta charset="UTF-8">
    <title>THML title</title>
    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.2.3.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js"></script>
    <script src="/javaScript/wkphp.js"></script>
    <script>
        var model = {
            some: "статические данные",
            c: 1
        };
        angular.module("educationApp", []).controller("basicCtrl", function ($scope, $interval) {
            $scope.model = model;

            $scope.clickHandler = function () { $scope.model.some += ' and'; };

            $interval(function () { $scope.model.c++; }, 1000);
//            setInterval(function () { $scope.model.c++; $scope.$digest(); }, 1000);
//            setInterval(function () { $scope.$apply(function () { $scope.model.c++; }); }, 1000);
        });
    </script>
</head>
<body ng-controller="basicCtrl">

<h1>изучение AngularJS</h1>
<h2>{{model.some}}</h2>
<input ng-model="model.some" />
<button ng-click="clickHandler()">Write</button>

<br>
<br>
<br>
<pre>{{model.c}}</pre>

</body>
</html>