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
var t,a;
function gst(t,a){
    for(let i=0;i<5;i++)
    {
        if(t==arr[i].title)
        {            
        console.log(t)
        console.log(a)
        console.log(arr[i].percent)
        console.log((a/100)*arr[i].percent)
        console.log(a-(a/100)*arr[i].percent)

        }
    }
}
gst('D',100)