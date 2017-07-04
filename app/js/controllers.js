app.controller('contactCtrl', function($scope, contactList, $location) {   


    $scope.contacts = contactList.list();

    $scope.addContact = function () {
        contactList.save($scope.newcontact);
        $scope.newcontact = {};
        $location.path('/');
    };

    $scope.removeContact = function (item) {
        if (confirm("¿Estas seguro eliminar este contacto?")) {
            var index = $scope.contacts.indexOf(item);
            $scope.contacts.$remove(index, 1);
        }
    };

});

app.controller('infoContact', function ($scope, $routeParams) {
    var index = $routeParams.contact_index;
    $scope.currentContact = $scope.contacts[index];
});

app.controller('editContact', function ($scope, $routeParams) {
    $scope.index = $routeParams.contact_index;
    $scope.currentContact = $scope.contacts[$scope.index];
});


