var app = angular.module('app', ['ngRoute', 'firebase'] );

app.config(function($routeProvider, $locationProvider){
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'app/views/prueba.html',
        controller: 'contactCtrl'
    })
    
    .when('/crearctc', {
        templateUrl: 'app/views/nuevoContacto.html',
        controller: 'contactCtrl'
    })
    
        .when('/detallesctc/:contact_index', {
        templateUrl: 'app/views/detallesContacto.html',
        controller: 'infoContact'
    })
    
        .when('/editarctc/:contact_index', {
        templateUrl: 'app/views/editarContacto.html',
        controller: 'editContact'
    })
    
})


















