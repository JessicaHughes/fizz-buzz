$(document).ready(function() {
for (var i = 1; i <= 100; i++) 
{
   if (i % 15 == 0) {
  console.log("FizzBuzz");
  $("body").append("Fizz Buzz");
  $("body").append("<br/>");
}
else if ( i % 3 == 0) {
  console.log("Fizz");
  $("body").append("Fizz");
  $("body").append("<br/>");
}
else if ( i % 5 == 0) {
  console.log("Buzz");
  $("body").append("Buzz");
  $("body").append("<br/>");
}
else 
{
console.log(i);
$("body").append(i);
$("body").append("<br/>");
}
}
});


