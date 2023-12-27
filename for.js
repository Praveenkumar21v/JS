//first 10 Numbers
console.log("First 10 Numbers using For loop");
for(var i=1;i<=10;i++){
    console.log(i);
}

//first 100 even Numbers
console.log("First 100 even Numbers using For loop");
for(var i=1; i<=100;i++){
    if(i%2==0){
        console.log(i);
    
    }
}

//Each Character from Text
console.log("Each character from text in separate line using for loop");

var a="JACK";
for(var i=0;i<a.length;i++){
    console.log(a[i]);
}

//Sum of first 10 numbers
console.log("Sum of first 10 numbers using For loop");
var sum = 0;

for(i = 1; i <= 10; i++){
  
  sum = sum + i;
}

console.log(sum);



//Squares of first 10 numbers
console.log("Squares of first 10 numbers using For loop");
for(let i = 1; i <= 10; i++) {
    console.log(i**2);
   
}
