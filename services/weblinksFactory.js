hackerNewsList.factory('webLinksFactory', function webLinksFactory(){
  var factory = {};
  factory.webLinks = [];
  factory.addWebLink = function() {

    factory.webLinks.push({name: factory.webLinkName, url: factory.webLinkUrl, vote: 1, id: factory.webLinks.length + 1, numberOfComments: 0, comments:[]});
    factory.webLinkName = null;
    factory.webLinkURL = null;
  };

  factory.upVote = function(webLink){
    webLink.vote += 1;
  };

  factory.downVote = function(webLink){
    webLink.vote -=1;
  };

  factory.decrementVote = function(){
    factory.webLinks.forEach(function(webLink) {
    webLink.vote  -= 1;
    });
  };

  return factory;
});
