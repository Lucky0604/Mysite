angular.module('BlogCtrl', [])
    .controller('BlogCtrl', function ($scope, $http, $rootScope) {
        var p = $http({
            method: 'GET',
            url: 'http://localhost:5000/api/blog',
            contentType: 'application/x-www-form-urlencoded; charset=gbk'
        });
        p.success(function (response) {
            $scope.blogs = response.message;
        });
        //add $rootScope.$on to reload the blog page on time
        $rootScope.$on('$stateChangeSuccess',function(evt, to, toP, from,fromP){
            console.log('Success'+to);
            console.log(toP);
            console.log(from);
            console.log(fromP);
            var p = $http({
                method: 'GET',
                url: 'http://localhost:5000/api/blog',
                contentType: 'application/x-www-form-urlencoded; charset=gbk'
            });
            p.success(function (response) {
                $scope.blogs = response.message;
            });
        });
    });
