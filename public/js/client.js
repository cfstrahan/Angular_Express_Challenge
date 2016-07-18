var app = angular.module('xiApp', []);

app.controller('MainController', function($scope, $http){
  $scope.showError = false;

  var configObject = {
  method: 'GET',
  url: './students/students'
  };
  console.log(configObject);

  function handleSuccess(response) {
    $scope.students = response.data;
    console.log('Success:', response);
  }
  function handleFailure(response) {
    console.log('Failure:', response);
  }

  function getXi(response) {
    $http(configObject).then(handleFailure, handleSuccess)
  }

  $scope.displayList = function() {
    var data = configObject.data;
    $http.post('./students/students', data).then(function(response) {

      console.log(response);
      $scope.button = '';
      $scope.showError = false;
      getXi();
    })

  }
  getXi();
});
