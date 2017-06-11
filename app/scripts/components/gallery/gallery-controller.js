//GalleryController
galleryModule.controller('GalleryController', ['$scope', '$state', '$stateParams', 'GalleryService', 'AlertService',
    function ($scope, $state, $stateParams, GalleryService, AlertService) {

        //User search for photos
        $scope.search = function (value) {

            //searchConfig 
            $scope.searchConfig = {
                method: null,
                value: null,
                quantity: 75,
                text: null
            };

            //Set search value
            $scope.searchConfig.value = value;
            $scope.searchResultsText = null;
            $scope.mostRecentText = null;

            //If
            if ($scope.searchConfig.value) {
                $scope.searchResultsText = $scope.searchConfig.value
                $scope.searchConfig.method = 'search';
            } else {
                $scope.mostRecentText = 'Most recent Flickr photos'
                $scope.searchConfig.method = 'getRecent';
            }

            //Loading gallery
            $scope.isLoading = true;
            GalleryService.getGalleryConfig($scope.searchConfig.method, $scope.searchConfig.value, $scope.searchConfig.quantity).then(function (response) {
                //gallery data
                $scope.gallery = response.photos;

                if ($scope.gallery.total === '0') {
                    AlertService.alerts.add('info', 'Try more general keywords', 2000);
                }

            }).catch(function () {
                //Display alert for user 
                AlertService.alerts.add('danger', 'Something went wrong', 5000);

            }).finally(function () {
                //Hide loader
                $scope.isLoading = false;
            });
        };

        //mostPopularConfig 
        $scope.mostPopularConfig = {
            method: 'search',
            value: 'cat',
            quantity: 1,
        };

        $scope.isLoading = true;
        GalleryService.getGalleryConfig($scope.mostPopularConfig.method, $scope.mostPopularConfig.value, $scope.mostPopularConfig.quantity).then(function (response) {
            //recent data
            $scope.recent = response.photos;

        }).catch(function () {
            //Display alert for user 
            AlertService.alerts.add('danger', 'Something went wrong', 5000);

        }).finally(function () {
            //Hide loader
            $scope.isLoading = false;
        });
    }
]);