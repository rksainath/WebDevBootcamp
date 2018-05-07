var btn = document.querySelector("button");
btn.addEventListener('click',changeCol);
var clr = false ;
function changeCol(){
	if(clr){
	document.querySelector("h1").style.background = "green";
	clr = false;
}else {
	document.querySelector("h1").style.background = "red";
	clr = true;
}
}