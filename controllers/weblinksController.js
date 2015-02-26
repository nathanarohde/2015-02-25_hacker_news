hackerNewsList.controller('webLinksCtrl', function webLinksCtrl($scope, webLinksFactory) {
  $scope.webLinks = webLinksFactory.webLinks;
  $scope.webLinksFactory = webLinksFactory;


});
