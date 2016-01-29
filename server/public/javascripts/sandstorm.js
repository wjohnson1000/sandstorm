var sand = angular.module('sand', []);

var sandsocket = io();

sand.controller('storm', ['$scope', function($scope){

$scope.allsand = [];

$scope.sendsand = function(){
  //if($scope.sandchat.$valid){
    console.log($scope.sandscript);
    sandsocket.emit('chat message', $scope.sandscript);
    $scope.sandscript = '';
 // }; 
};
  sandsocket.on('chat message', function(message){
    console.log('received on client');
    $scope.allsand.push(message);
    $scope.$apply();
    
  });
  
}]);
