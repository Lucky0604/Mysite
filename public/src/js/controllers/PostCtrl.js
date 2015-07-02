angular.module('PostCtrl',[])
	.controller('PostCtrl',function($scope,$http){
		$scope.submit = function(){
			var q = $http({
				method:'POST',
				url:'http://localhost:5000/api/blog',
				contentType:'application/x-www-form-urlencoded; charset=gbk',
				data:{'title':$scope.blogs.title,'content':$scope.blogs.content}
			});
			q.success(function(response){
				alert(response.message);
			});
		};
	});