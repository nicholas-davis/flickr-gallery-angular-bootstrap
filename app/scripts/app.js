//Flickr Image Gallery App
angular.module('flickrImageGalleryApp', [
    'ui.router'
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
    apiUrl: window.location.origin + '/app/api/',
    baseUrl: '/',
});
