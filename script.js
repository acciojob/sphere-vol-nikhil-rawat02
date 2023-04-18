let submit = document.getElementById("submit");
function volume_sphere() {
    //Write your code here
	let volume = document.getElementById("volume");
	let radius = parseInt(document.getElementById("radius").value);
	
	volume.value = radius * radius * radius  * 3.14 * 4 / 3;
	console.log(volume.value);
}

submit.addEventListener("click", volume_sphere());
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
