//first 100 prime numbers
console.log('first 100 primenumbers');
debugger;

for(i=1;i<=100;i++){
    for(j=2;j<i;j++){
        if (i%j==0) {
            break;
        }
    }
     if(i==j){
        console.log(i);
     }
}

//fibonacci series
console.log('fibonacci Series');
var num=20;
var a=0;
var b=1;
var next=0;
debugger;
for(i=1;i<num;i++){
    next=a+b;
    console.log(next);
    a=b;
    b=next;
}

//reverse pattern
console.log("Reverse Pattern");
debugger;

for(i=4;i>=1;i--)
{
    var line="";
 for(j=1;j<=i;j++){
      line+=j;
    }
    console.log(line);
}

//pattern 
console.log("Pattern");
debugger;

for(i=1;i<=4;i++){
    var line="";
    for(j=1;j<=i;j++){
        line+=j;
    }
    console.log(line)
}

//object key change


let obj={id:123,name:'Jack'};
obj.name_value=obj.name;
delete obj.name;
console.log(obj)