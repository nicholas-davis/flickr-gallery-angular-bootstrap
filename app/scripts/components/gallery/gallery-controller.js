//GalleryController
galleryModule.controller('GalleryController', ['$scope', '$state', '$stateParams', 'GalleryService', 'AlertService',
    function ($scope, $state, $stateParams, GalleryService, AlertService) {

        $scope.search = function (value) {

            //Set value 
            $scope.searchValue = value;
            if ($scope.searchValue) {
                $scope.searchResultsText = $scope.searchValue
                $scope.searchMethod = 'search';
            } else {
                $scope.searchResultsText = 'Most recent Flickr photos'
                $scope.searchMethod = 'getRecent';
            }

            //Loading gallery
            $scope.isLoading = true;
            GalleryService.getGalleryConfig($scope.searchMethod, $scope.searchValue).then(function (response) {
                //gallery infomation
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
    }
]);