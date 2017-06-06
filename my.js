function add()
{
	document.form.button1.value = button.value + 1
}

function changeImage()
{
var img = document.getElementById("image");
img.src="images/up.jpg";
add()
return false;
}

function changeImage2()
{
var img = document.getElementById("image");
img.src="images/down.jpg";
//add()
return false;
}
