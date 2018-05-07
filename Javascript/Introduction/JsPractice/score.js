var playerone = document.querySelector("#pone");
var playertwo = document.querySelector("#ptwo");
var res = document.querySelector("#reset");
var p1count = 0;
var p2count = 0;
var gameover = false;
var para = document.querySelector("p span");
var numInput = document.querySelector("input");
var max;

numInput.addEventListener("change",function(){
	para.textContent = numInput.value;
	max = Number(numInput.value);
	reset();
	
})

playerone.addEventListener("click",function(){
	if(!gameover){
		p1count++;
		if(p1count === max){
			document.querySelector("#p1").classList.add("winner");
			gameover = true;
		}
	document.querySelector("#p1").textContent = p1count;
}
});
playertwo.addEventListener("click",function(){
	if(!gameover){
	p2count++;
		if(p2count===max){
			document.querySelector("#p2").classList.add("winner");
			gameover = true;
		}
	document.querySelector("#p2").textContent = p2count;
}

});

res.addEventListener("click",reset);

function reset()  {
p1count=0;
p2count=0;
document.querySelector("#p1").textContent = "0";
document.querySelector("#p2").textContent = "0";
document.querySelector("#p1").classList.remove("winner");
document.querySelector("#p2").classList.remove("winner");
gameover = false;
}
