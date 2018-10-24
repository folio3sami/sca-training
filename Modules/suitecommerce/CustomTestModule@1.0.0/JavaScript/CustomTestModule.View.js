


define('CustomTestModule.View',
[
    'custom_test_module.tpl',
    'Backbone',
    'jQuery'
],
function (CustomTestModuleView, Backbone, jQuery) {

    return Backbone.View.extend({

        template: CustomTestModuleView,

        events: {
            'click[data-action="test"]': 'testAction'
        },

        testAction: function() {
            alert("This is a test action");
        },

        getContext: function() {
            return {
                contextVar: 'this is context var'
            }
        }

    });
}
);