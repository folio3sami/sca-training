
define('CustomTestModule',
[
    'CustomTestModule.Router'
],
function(Router) {


    return {
        mountToApp: function(application) {

            return new Router(application);
        }
    }
}
);