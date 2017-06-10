//GalleryController
galleryModule.controller('GalleryController', ['$scope', '$state', '$stateParams', 'GalleryService', 'AlertService',
    function ($scope, $state, $stateParams, GalleryService, AlertService) {

        //Loading gallery
        $scope.isLoading = true;
        GalleryService.getGalleryConfig().then(function (response) {
            console.log(response)
            $scope.gallery = response.photos;
        }).catch(function () {
            //Display alert for user 
            AlertService.alerts.add('danger', 'Something went wrong', 20000);
        }).finally(function () {
            //Hide loader
            $scope.isLoading = false;
        });

    }
]);