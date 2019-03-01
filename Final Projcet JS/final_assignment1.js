var docGG={
    "doctorListing": [
        {
            "docName": "daisy jain",
            "doctorID": 100,
            "specialization": "Dental",
            "qualification": "BDS",
            "rating": 5,
            "experience": 7,
            "cost": 500,
            "gender": "female",
            "address": [
                {
                    "addressLineOne": "Khetrapal Nursing Home",
                    "addressLineTwo": "Gn 5, F N g Sector Rajouri Garden",
                    "city": "New Delhi",
                    "state": "Delhi",
                    "gpsCoordinates": {
                        "gpsLatitude": 28.7,
                        "gpsLongitude": 77.8
                                     }
                
                }]
                                    }
                                ]
                            }

function myfunction() {
    // debugger;
 var body=document.getElementById("mainDiv")
    var div = document.createElement("div")
    div.setAttribute("class", "main")

    var div1 = document.createElement("div")
    div1.setAttribute("class","row")


    var div2 = document.createElement("div")
    div2.setAttribute("class", "col-sm-12 col-md-7")


    var div3 = document.createElement("div")
    div3.setAttribute("class", "scrollbar")
    div3.style = "height:1000px ;overflow-y:scroll"

    var ul1 = document.createElement("ul")
    ul1.setAttribute("class", "search-list")


     
        var li1 = document.createElement("li")
        li1.setAttribute("id", "hello")


        var div4 = document.createElement("div")
        div4.setAttribute("class", "row")


        var div5 = document. createElement("div")
        div5.setAttribute("class", "col-sm-3 col-lg-2 col-xl-2")


        var div6 = document.createElement("div")
        div6.setAttribute("class", "doc-image")
        div6.setAttribute("src", "dr1.jpg")



        var div7 = document.createElement("div")
        div7.setAttribute("class", "col-sm-9  col-lg-6 col-xl-5")


        var div8 = document.createElement("div")
        div8.setAttribute("class", "doc-details")

        var heading = document.createElement("h5")
        heading.setAttribute("class", "m-0")
        heading.innerHTML = "DR. Karuna Manhotra"

        var para = document.createElement("p")
        para.setAttribute("class", "qualification")
        para.innerHTML = "BDS"

        var ul2 = document.createElement("ul")
        ul2.setAttribute("class", "rating")

        var li_rating1 = document.createElement("li")
        li_rating1.setAttribute("src", "fa fa-star checked")


        var li_rating2 = document.createElement("li")
        li_rating2.setAttribute("src", "fa fa-star checked")


        var li_rating3 = document.createElement("li")
        li_rating3.setAttribute("src", "fa fa-star checked")


        var li_rating4 = document.createElement("li")
        li_rating4.setAttribute("src", "fa fa-star")


        var li_rating5 = document.createElement("li")
        li_rating5.setAttribute("src", "fa fa-star")


    var para2=document.createElement("p")
    para2.setAttribute("class","field")
    para2.innerHTML="dental"

    var div9=document.createElement("div")
    div9.setAttribute("class", "col-lg-4 col-xl-5")
     
    var div10=document.createElement("div")
    div10.setAttribute("class", "dr clinic details")
    div.innerHTML="Cosmetic Skin"

            var para3=document.createElement("p")
            para3.setAttribute("class", "location")

        var span1=document.createElement("span")
        span1.setAttribute("class", "icon-location-marker")
        span1.innerHTML="0.2km"
        
        var heading1 = document.createElement("h5")
        heading.setAttribute("class", "m-0")
        heading.innerHTML = "rs 500"
         
        var btn = document.createElement("button")
        btn.setAttribute("class", "btn book-appointment")
        btn.innerHTML = "BOOK"

div4.appendChild(div5)
div4.appendChild(div7)
div4.appendChild(div9)

li1.appendChild(div4)
ul1.appendChild(li1)
ul2.appendChild(li_rating1)
ul2.appendChild(li_rating2)
ul2.appendChild(li_rating3)
ul2.appendChild(li_rating4)
ul2.appendChild(li_rating5)
div3.appendChild(ul1)
div2.appendChild(div3)
div1.appendChild(div2)
body.appendChild(div1)

}



