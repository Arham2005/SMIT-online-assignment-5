var sub1 = +prompt("Enter Marks Of English in the range of 100");
var sub2 = +prompt("Enter Marks Of Maths in the range of 100");
var sub3 = +prompt("Enter Marks Of Physics in the range of 100");
var sub4 = +prompt("Enter Marks Of Chemistry in the range of 100");
var sub5 = +prompt("Enter Marks Of Computer in the range of 100");

var total = sub1 + sub2 + sub3 + sub4 + sub5;
var average = total/5;
alert("Your Percentage is :"  +  average);

if (average >= 90) {
    alert("Your Grade Is A");
}else if (average >= 80) {
    alert("Your Grade Is B");
}else if (average >= 70) {
    alert("Your Grade Is C");
}else if (average >= 60) {
    alert("Your Grade Is D");
}else {
    alert("Your Grade Is F");
}
