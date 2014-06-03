var app = angular.module("femuApp", []);


$(window).on("keydown", function(e)
{
	var currentCol = $(".game.active").data("index"),
	currentRow = $(".game.active").parents(".row:first").data("index"),
	newRow = currentRow,
	newCol = currentCol;

	switch (e.which)
	{
		case 38: //up
			switch (viewSize())
			{
				case "lg":
				newRow = currentRow - 1 < 0 ? 0 : currentRow - 1;
				break;
			}
			break;
		case 39: //right
			//TODO: Check if user is in the menu. If so, get outta there and close it
			switch (viewSize())
			{
				case "lg":
					if (currentCol < 6)
						newCol = currentCol + 1;
				break;
			}
			break;
		case 40: //down
			switch (viewSize())
			{
				case "lg":
				newRow = currentRow + 1 < 0 ? 0 : currentRow + 1;
				break;
			}
			e.preventDefault();
			break;
		case 37: //left
			switch (viewSize())
			{
				case "lg":
					if (currentCol > 0)
						newCol = currentCol - 1;
						//TODO: if they're on 0, focus and slide out the left menu
				break;
			}
			break;
	}
	console.log(newRow, newCol);
	var newActiveGame = $(".row[data-index=" + newRow + "]").find(".game[data-index=" + newCol +"]");
	if (newActiveGame.length > 0)
	{
		$(".game.active").removeClass("active");
		newActiveGame.addClass("active");
	}
});

function viewSize()
{
	if ($(".visible-xs:visible").length > 0)
		return "xs";
	if ($(".visible-sm:visible").length > 0)
		return "sm";
	if ($(".visible-md:visible").length > 0)
		return "md";
	if ($(".visible-lg:visible").length > 0)
		return "lg";
}


var chunk = function(arr, size) {
  var i, _i, _ref, _results;
  if (arr.length === 0) {
    return [];
  } else {
    _results = [];
    for (i = _i = 0, _ref = arr.length - 1; size > 0 ? _i <= _ref : _i >= _ref; i = _i += size) {
      _results.push(arr.slice(i, +(i + size - 1) + 1 || 9e9));
    }
    return _results;
  }
};

