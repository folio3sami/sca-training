function service(request, response)
{
	'use strict';
	try 
	{
		require('Case.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Case.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}