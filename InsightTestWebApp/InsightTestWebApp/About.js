partsData = [];

app.controller('myCtrl', function ($scope, $localStorage) {

 
    if ($localStorage.partsArray != null) {
        $scope.partsData = $localStorage.partsArray;
    }

    else {

        $localStorage.partsArray = [
              { partnumber: "AB111", description: "Used in wheel creation", unitofmeasure: "metric", primaryacquisition: "On-hold", Active: "Yes" },
              { partnumber: "AB112", description: "Used in wiring", unitofmeasure: "kg", primaryacquisition: "Done", Active: "No" },
              { partnumber: "AB113", description: "Used in doors", unitofmeasure: "metric", primaryacquisition: "In-Progress", Active: "Yes" },
              { partnumber: "AB114", description: "Used in motor", unitofmeasure: "metric", primaryacquisition: "On-hold", Active: "No" },
              { partnumber: "AB115", description: "Used in outer body", unitofmeasure: "metric", primaryacquisition: "Done", Active: "Yes" }
        ];


        $scope.partsData = $localStorage.partsArray;
    }

    //var url = "http://localhost:51753/GetPartsData.txt";
    //$http.get(url).success(function (response) {
    //    $scope.partsData = response;
    //});
});
