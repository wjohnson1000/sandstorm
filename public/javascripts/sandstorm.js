var sand = angular.module('sand', []);

var sandsocket = io();

sand.controller('storm', ['$scope', function($scope){

$scope.allsand = [];

$scope.rave1=false;

$scope.regex = 'sandstorm';
$scope.sendsand = function(e){
  e.preventDefault();
  if($scope.sandchat.$valid){
    sandsocket.emit('chat message', $scope.sandscript);
    $scope.sandscript = '';
    $scope.rave1=!$scope.rave1;
 // };
 // };
  } else {
    alert("Did you mean to say 'Sandstorm'?");
  }
};
  sandsocket.on('chat message', function(message){
    $scope.allsand.push(message);
    $scope.$apply();
  });

}]);
