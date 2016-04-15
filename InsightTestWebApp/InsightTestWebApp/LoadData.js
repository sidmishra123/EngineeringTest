
app.service('GetEditData', function () 
{
   

    partsData = [];
    app.controller('myCtrl', function ($scope, $http) {
        var url = "http://localhost:51753/GetPartsData.txt";
        $http.get(url).success(function (response) {
            $scope.partsData = response;
        });
    });


 

});

