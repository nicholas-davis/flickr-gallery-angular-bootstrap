//AlertDirective
galleryModule.component('alert', {
    templateUrl: 'app/scripts/shared/alert/alert-view.html',
    controller: 'alertController',
    bindings: {
        alerts: '@',
    }
});