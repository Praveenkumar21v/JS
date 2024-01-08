//basic method of even and odd numbers of array
let array=[1,2,3,4,5,6,7,8,9];
let even=[];
let odd=[];
for(i=0;i<array.length;i++){
    if(array[i]%2==0){
        even.push(array[i])
    }else
            odd.push(array[i])
}
console.log(even,odd)

//pre-defined methods  [for-in and for-of]
let array1=[1,2,3,4,5,6,7,8,9];
let even1=[];
let odd1=[];
for(let num of array1){
    if(num%2==0){
        even1.push(num)
    }else
            odd1.push(num)
}
console.log('even numbers :', even1,'odd numbers :',odd1)

let array2=[1,2,3,4,5,6,7,8,9];
let even2=[];
let odd2=[];
for(let num in array2){
    if(num%2==0){
        even2.push(num)
    }else
            odd2.push(num)
}
console.log('odd indexes :', even2,'even indexes :',odd2)

//reverse
//basic method
let rev=[9,4,4,0,6,6];
var reverse=[];
for(i=rev.length-1;i>=0;i--){
    reverse.push(rev[i]);
}
console.log(reverse)

//pre-defined
let rev1=[9,4,4,0,6,6];
let result=rev1.reverse();
console.log(result);

//basic methods for ascending and descending
const phone =[9,4,4,0,6,6,7,3,5,1];
for(i=0;i<phone.length;i++){
    for(j=0;j<=i;j++){
        if(phone[i]<phone[j]){
            var temp=phone[i];
            phone[i]=phone[j];
            phone[j]=temp;
            
        }
    }
}
console.log('ascending',phone);

for(i=0;i<phone.length;i++){
    for(j=0;j<=i;j++){
        if(phone[i]>phone[j]){
            var temp=phone[i];
            phone[i]=phone[j];
            phone[j]=temp;
            
        }
    }
}
console.log('descending',phone)

//pre-defined for numbers ascending and descending
const number=[2,3,1,4,6,7,89,99,23,34,56,14,21];
number.sort((a,b)=>a-b);
console.log(number)

number.sort((a,b)=>b-a);
console.log(number)

//pre-defined for strings ascending and descending
const names=['Damon','Klaus','Katherine','Stefan','Elijah','Bonnie','Joe','Hope','Alaric'];
names.sort();
console.log(names)

names.sort().reverse();
console.log(names);


//palindrome
function palindrome(str){
    let numStr=str.toString()
    let revStr=numStr.split('').reverse().join('');
    if(str==revStr){
        console.log(str+' is Palindrome');
    } else{
                console.log(str+' is not a Palindrome');

    }
}
palindrome(101);