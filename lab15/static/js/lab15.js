angular.module('CustomerList', ['ngCookies'])
.controller('CustomerListController', function($scope, $http, $cookies){

    $scope.customer_list_button = function(){
        var url = 'http://127.0.0.1:8000/order/customer/ajax/';

        $http({
            url: url,
            method: 'GET',
            headers: {
                'X-CSRFToken': $cookies['csrftoken']
            }
        }).success(function(data){
            console.log(data);
        }).error(function(error){
            console.log(error);
        });
    };
});
