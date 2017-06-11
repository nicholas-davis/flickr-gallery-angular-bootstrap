//GalleryService
galleryModule.service('GalleryService', ['config', '$http',
    function (config, $http) {
        return {
            getGalleryConfig: function (method, tags, quantity) {
                return $http.get(config.apiUrl + '?method=flickr.photos.' + method + '&api_key=af8466c0c25daee7b10fa2cf58e40099&tags=' + tags + '&per_page=' + quantity + '&format=json&nojsoncallback=1').then(function (response) {
                    return response.data;
                });
            }
        };
    }
]);

