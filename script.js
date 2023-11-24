function volume_sphere() {
    //Write your code here
	let r = document.getElementById('MyForm').radius.value;
	document.getElementById('MyForm').volume.value=(4/3)*Math.PI*r*r*r).toFixed(4);
	event.preventDefault();
  	//let v = document.getElementById('volume');
    //let num1 = (4/3) * Math.PI*Math.pow(r,3);
	//let num2 - num1.toFixed(4);
    //v.value = num2;
	//return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
