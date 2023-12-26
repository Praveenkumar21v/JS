//Even or Add

var num= "hi";
if(num % 2 ===0){
    console.log("Number is EVen");
}else if(num % 2 ===1 ){
    console.log("Number is Odd");
}
else{
    console.log("Its not an Number");
}

//marriage for both girl and boy

var gender= "O";
var age=21;
gender==="M" && age>=21
?console.log("Eligible for Marriage for boy")
:gender==="F" && age>=18
?console.log("Eligible for Marriage for girl")
:gender !=="M" && gender !=="F"
?console.log("Check The Gender")
:console.log("Not eligible");

//logic for month (correct month or not)
var month = "March";
switch (month) {
  case "January":
    console.log(month);
    break;
  case "February":
    console.log(month);
    break;
  case "March":
    console.log(month);
    break;
  case "April":
    console.log(month);
    break;
  case "May":
    console.log(month);
    break;
  case "June":
    console.log(month);
    break;
  case "July":
    console.log(month);
    break;
  case "August":
    console.log(month);
    break;
  case "September":
    console.log(month);
    break;
  case "October":
    console.log(month);
    break;
  case "November":
    console.log(month);
    break;
  case "December":
    console.log(month);
    break;

  default:
    "Not a Month";
    break;
}

//logic for prime number
function prime(num) {
    if(num<=1)
    return false;
for (var i= 2; i<num; i++) 
if (num % i==0) 
    return false;  
return true;  

}
prime(6)
?console.log("It is an Prime Number")
:console.log("It is not an Prime Number");

