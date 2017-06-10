//GalleryController
galleryModule.controller('GalleryController', ['$scope', '$state', '$stateParams', 'GalleryService',
    function ($scope, $state, $stateParams, GalleryService) {
        
        //
        GalleryService.getGalleryConfig().then(function (response) {
            console.log(response)
            $scope.gallery = response;
        });

    }
]);