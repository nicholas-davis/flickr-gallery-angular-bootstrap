//Flickr Image Gallery App
angular.module('flickrImageGalleryApp', [
    'ui.bootstrap',
    'ui.router',
    'flickrImageGalleryApp.gallery'
]).config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/gallery");

        $stateProvider.state('Gallery', {
            url: '^/gallery',
            templateUrl: 'scripts/components/gallery/gallery-view.html',
            controller: "GalleryController",
            controllerAs: "gallery",
        })
    }
]).constant('config', {
    apiUrl: 'https://api.flickr.com/services/rest/',
    baseUrl: '/',
});

//global var
var galleryModule = angular.module('flickrImageGalleryApp.gallery', []);