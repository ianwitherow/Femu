app.factory("femuFactory", function($http)
{
	
	var factory = {
		Load: function()
		{
			return $http.get("something.aspx");
		}
	}
	return factory;
})
