   var x;
   var y;
                var index=0;
                x = docGG.doctorListing[index].docName;
                document.getElementById("demo1").innerHTML = x;
                x = docGG.doctorListing[index].address[index].addressLineTwo+','+docGG.doctorListing[index].address[index].city+','+ docGG.doctorListing[index].address[index].state;
                document.getElementById("demo2").innerHTML = x;
                x = docGG.doctorListing[index].address[index].addressLineOne;
                document.getElementById("demo3").innerHTML = x;


var flag=0;
    function weatherfun1()
    {
          document.getElementById("dayt1").style.color="black";
          document.getElementById("imageFade1").style.opacity="1";
          document.getElementById("weatherspan1").style.color="grey";
          forceG1()
          if (flag<1)
          {
          var div1 = document.createElement('div');
          div1.setAttribute('id','index');
    div1.style.height = "0";
    div1.style.width="0";
    div1.style.backgroundColor = "grey";
    appointDiv.appendChild(div1);
    flag++;
          }

          function timeHd()
          {
              alert("Hello")
 document.getElementById("hideTime").style.display='none';
 document.getElementById("hideapp").style.display='block';

          }

    }
    function weatherfun2()
    {
          document.getElementById("dayt2").style.color="black";
          document.getElementById("imageFade2").style.opacity="1";
          document.getElementById("weatherspan2").style.color="grey";
           forceG2()
           
    appointDiv.appendChild(div1);
    document.getElementById(index).style.height='0px';



    }
    function weatherfun3()
    {
          document.getElementById("dayt3").style.color="black";
          document.getElementById("imageFade3").style.opacity="1";
          document.getElementById("weatherspan3").style.color="grey";
          forceG3()
          
    appointDiv.appendChild(div1);


    }
    function weatherfun4()
    {
          document.getElementById("dayt4").style.color="black";
          document.getElementById("imageFade4").style.opacity="1";
          document.getElementById("weatherspan4").style.color="grey";
          forceG4()
    appointDiv.appendChild(div1);


    }

    function forceG1()
    {
        document.getElementById("dayt2").style.color="grey";
          document.getElementById("imageFade2").style.opacity="0.6";
          document.getElementById("weatherspan2").style.color="grey";
          document.getElementById("dayt3").style.color="grey";
          document.getElementById("imageFade3").style.opacity="0.6";
          document.getElementById("weatherspan3").style.color="grey";
          document.getElementById("dayt4").style.color="grey";
          document.getElementById("imageFade4").style.opacity="0.6";
          document.getElementById("weatherspan4").style.color="grey";

    }
    function forceG2()
    {
        document.getElementById("dayt1").style.color="grey";
          document.getElementById("imageFade1").style.opacity="0.6";
          document.getElementById("weatherspan1").style.color="grey";
          document.getElementById("dayt3").style.color="grey";
          document.getElementById("imageFade3").style.opacity="0.6";
          document.getElementById("weatherspan3").style.color="grey";
          document.getElementById("dayt4").style.color="grey";
          document.getElementById("imageFade4").style.opacity="0.6";
          document.getElementById("weatherspan4").style.color="grey";
    }
    function forceG3()
    {
        document.getElementById("dayt2").style.color="grey";
          document.getElementById("imageFade2").style.opacity="0.6";
          document.getElementById("weatherspan2").style.color="grey";
          document.getElementById("dayt1").style.color="grey";
          document.getElementById("imageFade1").style.opacity="0.6";
          document.getElementById("weatherspan1").style.color="grey";
          document.getElementById("dayt4").style.color="grey";
          document.getElementById("imageFade4").style.opacity="0.6";
          document.getElementById("weatherspan4").style.color="grey";
          
    }
    function forceG4()
    {
        document.getElementById("dayt2").style.color="grey";
          document.getElementById("imageFade2").style.opacity="0.6";
          document.getElementById("weatherspan2").style.color="grey";
          document.getElementById("dayt1").style.color="grey";
          document.getElementById("imageFade1").style.opacity="0.6";
          document.getElementById("weatherspan1").style.color="grey";
          document.getElementById("dayt3").style.color="grey";
          document.getElementById("imageFade3").style.opacity="0.6";
          document.getElementById("weatherspan3").style.color="grey";
    }

     function load() {
                     var mydata = JSON.parse(doc);
                     var x;
                     x= doc.docName[0];
                     document.getElementById("docL").innerHTML = x;
                     
                 }

function rangeToMinutes(range) {
var slotes;
var minutes = 0;
var start = range[0];
var end = range[1];
var startParts = start.split(':');
var endParts = end.split(':');
var startHour = +startParts[0];
var endHour = +endParts[0];
var startMins = +startParts[1];
var endMins = +endParts[1];
if (startHour !== endHour) {

  var hrMins = (endHour - startHour) * 60;

  minutes += hrMins;

}
if (startMins !== endMins) {
  minutes += (endMins - startMins)
}
slotes=minutes/15;
return slotes;

}