function validate()
{
	alert("Checkbox checked");
	If(document.getElementById("wholeSaleFlag").checked && document.getElementById("retailFlag").checked)
	{
		alert("Both checkbox cannot be selected");
	}

/*
	var appElement = document.querySelector('[ng-app=myShoppingCartProject]');
    var $scope = angular.element(appElement).scope();
    $scope.$apply(function() {
        $scope.discountPercent = 20;
    });
    */
}