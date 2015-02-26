var hackerNewsList = angular.module('hackerNewsList',['ui.router']);

  hackerNewsList.config(function($stateProvider){
    $stateProvider.state('home',{
      url:"",
      templateUrl: "partials/home.html",
      controller: 'webLinksCtrl'
    });

  $stateProvider.state('comments', {
      url:"/comments",
      templateUrl: "partials/comments.html",
      controller: 'CommentsCtrl'
    });
  });
