var btn = document.querySelector("button");
btn.addEventListener("click",changeCol);
function changeCol(){
	var he = document.querySelector("h1");
	he.classList.toggle("green");
}