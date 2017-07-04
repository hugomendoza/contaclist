var app = angular.module('app', ['ngRoute', 'firebase'] );

app.config(function($routeProvider, $locationProvider){
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/prueba.html',
        controller: 'contactCtrl'
    })
    
    .when('/crearctc', {
        templateUrl: 'views/nuevoContacto.html',
        controller: 'contactCtrl'
    })
    
        .when('/detallesctc/:contact_index', {
        templateUrl: 'views/detallesContacto.html',
        controller: 'infoContact'
    })
    
        .when('/editarctc/:contact_index', {
        templateUrl: 'views/editarContacto.html',
        controller: 'editContact'
    })
    
})


















