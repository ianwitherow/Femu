app.controller("femuCtrl", function($scope, $timeout, femuFactory)
{
	$scope.sort = "";
	$scope.reverse = false;
	
	var games = ["Muffin Adventures", "The Great Pancake", "Blueberry Surprise", "The Dough is No Mo'", "Flippin' Falafels", "Flying Figs", "Spaghetti Racing", "Hot Donut", "Medieval Sandwiches", "Cereal Slurper", "Pasta Twirler", "Pizza Carnage"];

	$scope.gameRows = chunk(games, 6);
	console.log($scope.gameRows);

	$timeout(function()
	{
		$(".game:first").addClass("active");
	}, 150);

	$scope.Load = function()
	{
		//Load some stuff
		//var promise = femuFactory.Load();
		//promise.success(function(response)
		//{
		//});
	}

	
	$scope.sortBy = function(field)
	{
		if ($scope.sort == field)
		{
			$scope.reverse = !$scope.reverse;
		} else
		{
			$scope.sort = field;
			$scope.reverse = true;
		}
	}
	

	function init()
	{
		$scope.Load();
	}

	init();
});
