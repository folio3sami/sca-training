

define('CustomTestModule.Router',
[
    'CustomTestModule.View',
    'Backbone'
],
function(CustomTestModuleView, Backbone) {

    return Backbone.Router.extend({
        routes: {
            'abc': 'CustomTestModuleRouter'
        },
        initialize: function(application) {
            this.application = application;
        },
        CustomTestModuleRouter: function() {

            var view = new CustomTestModuleView({
                application: this.application
            });

            view.showContent();

        }
    });
}
);