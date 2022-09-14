

// changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');
var x = 1

function spin(){



    


    if (myOtherBox.object3D.rotation.x == 1.0000000000000007){x = -1
	
    }
    else if (myOtherBox.object3D.rotation.x == 0.009999999999999913){x =1}

    myOtherBox.object3D.rotation.x += x*rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps

