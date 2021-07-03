const colors = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
const btn= document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener('click',()=>{
	let hexNumber ='#';
	for(let i=0;i<6;i++){
		hexNumber+=colors[getRandomNumber()];
	}
	document.body.style.backgroundColor = hexNumber;
	color.textContent = hexNumber;
});
function getRandomNumber(){
 	return Math.floor(Math.random()*colors.length);
 } 
