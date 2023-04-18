let submit = document.getElementById("submit");
function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	let volume = document.getElementById("volume");
	let radius = parseInt(document.getElementById("radius").value);
	radius = Math.abs(radius);
    let vl = (4/3) * Math.PI * Math.pow(radius, 3);
    vl = vl.toFixed(4);
	volume.value = vl;
	console.log(vl);
}


document.getElementById('MyForm').onsubmit = function(event){volume_sphere(event)};
