var arr=
[
        {
        "title": "A",
        "percent": "5"
        },
        {
            "title": "B",
            "percent": "6"
        },
        {
            "title": "C",
            "percent": "7"
        },
        {
            "title": "D",
            "percent": "8"
        },
        {
            "title": "E",
            "percent": "10"
        }
]
var type,amout;
function gst(type,amount){
    for(let i=0;i<5;i++)
    {
        if(type==arr[i].title)
        {            
        console.log(type)
        console.log(amount)
        console.log(arr[i].percent)
        console.log((amount/100)*arr[i].percent)
        console.log(amount-(amount/100)*arr[i].percent)

        }
        
    }
}
gst('D',500)