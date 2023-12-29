console.log("star pattern");
    var line="";
for(i=1;i<=4;i++){
for(j=1;j<=i;j++){
    line+='*';
}
line+='\n';
}
console.log(line);


console.log("star reverse pattern");

var line1="";
for(n=4;n>=1;n--){
    var line2="";

  for(o=1;o<=n;o++){
      line1+="*";
  }  
  line1+="\n";
}
console.log(line1);