var sand = angular.module('sand', []);

var sandsocket = io();

sand.controller('storm', ['$scope', function($scope){

$scope.allsand = [];

$scope.rave1=false;

$scope.sendsand = function(){
  //if($scope.sandchat.$valid){
    console.log($scope.sandscript);
    sandsocket.emit('chat message', $scope.sandscript);
    $scope.sandscript = '';
    $scope.rave1=!$scope.rave1;
 // };
};
  sandsocket.on('chat message', function(message){
    console.log('received on client');
    $scope.allsand.push(message);
    $scope.$apply();

  });

}]);
