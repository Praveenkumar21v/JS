//Phone Number
console.log("Phone number using Match method");
var str=`9440667351`;
var pattern = /\d{10}/g; 
var result=str.match(pattern);
console.log(result);

//Password
let password='Jacksparrow@13k'
let length=/.{8,16}/
let special=/[^A-Z a-z 0-9]/
let lowerCase=/[a-z]/
let upperCase=/[A-Z]/
let number=/\d/
 
 if(length.test(password)
 && special.test(password)
 && lowerCase.test(password)
 && upperCase.test(password)
 && number.test(password) ){
      console.log(password)
 }else {
           console.log('password is Invalid')

 } 

//Password using quantifiers
 var key='Chandu@13k';
var pattern= /^(?=.*[a-z])(?=.*[A-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d@#$%%^&*!]{8,16}/;
var result=key.match(pattern);
console.log(result);


//Ip Address
var ipAddress="256.123.43.255"
var pattern=/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
var result=pattern.test(ipAddress);
console.log(result);
