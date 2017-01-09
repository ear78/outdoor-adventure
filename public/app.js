var myApp = angular.module('myApp', ['ui.router']);

    myApp.config(function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '../views/home.html',
            })
            .state('about', {
                url: '/about',
                templateUrl: '../views/about.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '../views/contact.html'
            })
            .state('book', {
                url: '/book',
                templateUrl: '../views/book.html'
            })

            $urlRouterProvider.otherwise('/home');
    });
