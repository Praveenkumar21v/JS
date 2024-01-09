//largest Number of an Array
console.log("Largest Number of an array");
let array=[1,2,3,4,5];
let largestNum=[];
for(i=0;i<array.length;i++){
    if(array[i]>largestNum){
        largestNum=array[i]
    }
}
console.log(largestNum)

//Third Largest Number of an array
console.log("Third Largest Number of an array");
let array1=[1,2,3,4,5];
let first=[];
let second=[];
let third=[];
for(i=1;i<array1.length;i++){
    if(array1[i]>first){
       third=second;
       second=first;
        first=array1[i];
    }else if (array1[i]>second){
        third=second;
        second=array1[i];
    }else if(array1[i]>third){
        third=array1[i];
}
}
console.log('third largest number is', third )
console.log('second largest number is', second)
console.log('first largest number is', first)

//Remove The Duplicate elements And Print Array
console.log("Remove The Duplicate elements And Print Array")
let array2=[9,4,4,0,6,6,7,3,5,1];
let newArray=[];
for(i=0;i<array2.length;i++){
    if(newArray.indexOf(array2[i])===-1){
        newArray.push(array2[i])
    }
}
console.log(newArray)

//Leap years from 2000-2040

function isLeapYear(stryr,endyr){
    for(i=stryr;i<=endyr;i++){
            if(i % 4 == 0 && i % 4 != 100 || i % 400 == 0){
                console.log(i,' is leap year')
            }
    }
}
isLeapYear(2000,2040)
