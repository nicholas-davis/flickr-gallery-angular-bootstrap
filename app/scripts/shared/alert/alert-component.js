//AlertDirective
galleryModule.component('alert', {
    templateUrl: 'scripts/shared/alert/alert-view.html',
    controller: 'alertController',
    bindings: {
        alerts: '@',
    }
});