/*Write a code with these methods:
   insert() - records a new temperature
   get_max() - returns the highest temp we've seen so far
   get_min() - returns the lowest temp we've seen so far
   get_mean() - returns the mean of all temps we've seen so far
   get_mode() - returns a mode of all temps we've seen so far

Favour speeding up the getter methods get_max(), get_min(), get_mean(), and get_mode() over speeding up the insert() method.
get_mean() should return a float, but the rest of the getter methods can return integers. Temperatures will all be inserted as integers and we can assume they will be in the range 0 ℃ to 150 ℃.
If there is more than one mode, return any of the modes. */
var temp=[3,5,8,7,5];
var max=0;
var min=100;
var total=0;
var avg=0;

function insert(newt){
    temp.push(newt);
}
insert(8);
{

}
get_max();
get_min();
get_mean();
get_mode();
function get_max(){
    for(i=0;i<temp.length;i++)
    {
      if(temp[i]>max)
        {
            max=temp[i];
        }
    }
    console.log(max);
}
function get_min(){
    for(i=0;i<temp.length;i++)
    {
       
        if(temp[i]<min)
        {
            min=temp[i];
        }
    }
    console.log(min)
}
function get_mean(){
    for(i=0;i<temp.length;i++)
    {
    
    total+=temp[i];
    avg=(total/temp.length);
    }
    console.log(avg);
}
function get_mode(){
    var results = {};

        for(var i=0;i<temp.length;i++){

            if(results[temp[i]] == undefined){
                results[temp[i]] = 1;
            }else{
                results[temp[i]] += 1;
            }
        }

        console.log(results);

}
console.log(temp);