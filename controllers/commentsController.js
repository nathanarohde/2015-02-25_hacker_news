hackerNewsList.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, webLinksFactory, UtilitiesFactory){
  $scope.webLinks = UtilitiesFactory.findById(webLinksFactory.webLinks, $stateParams.webLinkId)

  $scope.addComments = function() {
    $scope.webLinks.comments.push({name: $scope.commentName, post: $scope.commentPost});
    $scope.webLinks.numberOfComments += 1;
    $scope.commentName = null;
    $scope.post = null;
  };
});
