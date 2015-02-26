hackerNewsList.controller('LinksCtrl', function LinksCtrl($scope, $stateParams) {
  $scope.webLinks = [];
  $scope.addWebLink = function() {
    $scope.webLinks.push({name: $scope.webLinkName, url: $scope.webLinkUrl, id: $scope.webLinks.length + 1});
  };
  $scope.webLinkName = null;
  $scope.webLinkURL = null;

});
