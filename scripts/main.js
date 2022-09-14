

// changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spinL(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
}
function spinR(){
	myOtherBox.object3D.rotation.x += -3*rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
}
setInterval(spinL, 16); //equivalent to 60 fps
setInterval(spinR, 16); //equivalent to 60 fps
