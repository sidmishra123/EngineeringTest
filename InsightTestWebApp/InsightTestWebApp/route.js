///
app.config(['$routeProvider',
   function ($routeProvider) {
       $routeProvider.
         when('/EditPartDetail/:partnumber', {
             templateUrl: 'EditPartDetails.html',
             controller: 'EditDetailsController'
         }).
         when('/PartsDetail', {
             templateUrl: 'About.html',
             controller: 'myCtrl'
         })
   }]);

 app.controller('EditDetailsController', function ($scope, $routeParams, GetDetails, $localStorage) {
 editData = [];
 var partid = $routeParams.partnumber;
    $scope.GetFilterData =function(partData) {
          for (var i = 0; i < partData.length; i++) {
               if (partData[i].partnumber == partid) {
                $scope.editData  = partData[i];
            }
        }
    }

    GetDetails.myFunc($scope.GetFilterData);
    $scope.SaveEditData = function ($localStorage) {
        getData = [];
        getData = $scope.editData;
        alert('You have successfully edited the part details!');
        $localStorage.partsArray.description = getData.description;
    };
});

