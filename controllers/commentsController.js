hackerNewsList.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams){
  $scope.comments= [];
  $scope.addComments = function() {
    $scope.comments.push({name: $scope.commentName, post: $scope.commentPost});
  };
});
