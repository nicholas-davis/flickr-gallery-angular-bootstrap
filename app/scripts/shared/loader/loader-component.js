//LoaderDirective
galleryModule.component('loader', {
    templateUrl: 'scripts/shared/loader/loader-view.html', 
    controller: 'loaderController', 
    bindings: {
        text: '='
    }
});