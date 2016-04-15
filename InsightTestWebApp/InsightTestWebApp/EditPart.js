
app.factory('GetDetails', function ($http, $routeParams,$localStorage) {
    partid = $routeParams.partnumber;
    detailsData = [];
    partData = [];

    partData.myFunc = function (GetFilterData) {
        // var url = "http://localhost:51753/GetPartsData.txt";
        //$http.get(url).success(function (response) {
       //    console.log(response);
        partData = $localStorage.partsArray;
                GetFilterData(partData);
            //});
            // return partData;
     }

        return partData;
        ///var x = partydata.length;
    });
     

