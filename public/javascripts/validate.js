function validate()
{
	alert("Checkbox checked");
	If(document.getElementById("wholeSaleFlag").checked && document.getElementById("retailFlag").checked)
	{
		alert("Both checkbox cannot be selected");
	}
}