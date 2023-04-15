let volume = document.getElementById("volume");
let radius = document.getElementById("radius");
function volume_sphere() {
    //Write your code here
	let radiusVal = parseInt(radius.value);

	let vl = radiusVal * radiusVal * radiusVal  * 3.14 * 4 / 3;
	volume.value = vl.toString();
}
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
