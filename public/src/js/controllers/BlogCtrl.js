angular.module('BlogCtrl', [])
    .controller('BlogCtrl', function($scope, $http) {
        var p = $http({
            method: 'GET',
            url: 'http://localhost:5000/api/blog',
            contentType: 'application/x-www-form-urlencoded; charset=gbk'
        });
        p.success(function(response) {
            $scope.blogs = response.message;
        });
    });
