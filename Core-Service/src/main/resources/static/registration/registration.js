angular.module('storefront').controller('registrationUserController', function ($scope, $http, $location) {
    const contextPath = 'http://localhost:8080/shop/';

    $scope.registrationUser = function () {
        if ($scope.new_user == null) {
            alert('Вы не заполнили поля');
            return;
        }
        if ($scope.new_user.password != $scope.new_user.matchingPassword) {
            alert('Пароли не совпадают');
            return;
        }
        $http.post(contextPath + 'registration', $scope.new_user)
            .then(function successCallback (response) {
                $scope.new_user = null;
                alert("Регистрация прошла успешно");
                $location.path('/store');
            }, function failureCallback (response) {
                console.log(response);
                alert(response.data.messages);
            });
    };

});

