hackerNewsList.controller('LinksCtrl', function LinksCtrl($scope, $stateParams) {
  $scope.webLinks = [];
  $scope.addWebLink = function() {
    $scope.webLinks.push({name: $scope.webLinkName, url: $scope.webLinkUrl, vote: 1, id: $scope.webLinks.length + 1});
  };
  $scope.webLinkName = null;
  $scope.webLinkURL = null;
  $scope.upVote = function(webLink){
    webLink.vote += 1;
  };
  $scope.downVote = function(webLink){
    webLink.vote -=1;
  };


});
