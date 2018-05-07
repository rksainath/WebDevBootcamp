var newArr = [];
function printReverse(array){
array.forEach(function(ele){
newArr.unshift(ele);
});
console.log(newArr);
}