var array1=[20];
var array2=[20];
var str1='hello';
var str2="olelh";
var test1='';
var test2='';

for(var i = 0; i < str1.length; i++)
{	
    array1[i]=str1[i];
}
for(var j = 0; j < str2.length; j++){	
    array2[j]=str2[j];
}
for(var k=1;k<array1.length;k++)
    for(l=0;l<array1.length;l++)
		if(array1[l]>array1[l+1])
{
    var temp=array1[l];
    array1[l]=array1[l+1];
    array1[l+1] = temp;
}	for(var l=0;l<array1.length;l++){
    test1 += array1[l]; 
    }


for(var k=1;k<array2.length;k++)
    for(l=0;l<array2.length;l++)
if(array2[l]>array2[l+1])
{
    var temp=array2[l];
    array2[l]=array2[l+1];
    array2[l+1] = temp;
}	for(var l=0;l<array2.length;l++){
    test2 += array2[l]; 
    }
    console.log(test1);
    console.log(test2);

if(test1===test2)
console.log("Correct");
else
console.log("Incorrect");