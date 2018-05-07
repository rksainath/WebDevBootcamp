window.setTimeout(function() {
var todo = [];
var input = prompt("What do you want to do?");

while(input!=="Quit")
{
if(input == "List"){
	console.log(todo);
} else if(input == "New"){
	var insert = prompt("Insert the item")
	todo.push(insert);
}
var input = prompt("What do you want to do?");
}
console.log("You have been disconnected");
}, 500);

