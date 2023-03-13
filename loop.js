//while loop

var x = 0;
while(x < 51){
	document.getElementById("yessir").innerHTML += + (x+1) +",";
	x= x+2;
}

//do while loop

var y = 0;
do{
	document.getElementById("yipee").innerHTML += + (y+2) + ",";
	y= y+2;
} while (y < 49);

//for loop

for(var z = 0; z < 13; z++){
	document.getElementById("yay").innerHTML += + (2**z) + ",";
}