var app = angular.module('myApp', ['ui.router', 'BlogCtrl', 'PostCtrl']);
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            name: 'main',
            url: '/main',
            templateUrl: 'views/main.html'
        })
        .state('blog', {
            name: 'blog',
            url: '/blog',
            templateUrl: 'views/blog.html',
            controller: 'BlogCtrl'
        })
        .state('blog.page1', {
            url: '/page1',
            name: 'page1',
            templateUrl: 'views/page1.html',
            controller: 'PostCtrl'
        });
    $urlRouterProvider.otherwise('/main');

});

app.controller('MainCtrl', function($scope) {

});
