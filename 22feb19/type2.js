function check_datatype(type) {

    if (type === null) {

        console.log('Type : NULL')

        console.log('value: ' + type)

    } 

    else if(typeof type === 'undefined') {

        console.log('Type : Undefined')

    }

    else if(typeof type === 'string' || type instanceof String) {

        console.log('Type : String')

        console.log('value: ' + type)

    }

    else if(typeof type === 'NaN') {

        console.log('Type : String')

        console.log('value: ' + type)

    }

    else if(typeof type === 'number' && isFinite(type)) {

        console.log('Type : Number')

        console.log('value: ' + type)

    }

    else if(type && typeof type === 'object' && type.constructor === Object){

        console.log('Type : Object')

        console.log('value: ')

        console.log(type)

    }

    else  if(typeof(type)==='object'&& typeof(type[0])!=='object' )

    {

        console.log("array");

        type.map((x,i)=>{

            console.log(x)

        })

    }

    else if(typeof(type)==='object'&& typeof(type[0])==='object')

    {

       

           

      console.log('Type : Array of Object')

      type.map((x,i)=>{

        console.log(x);

});

    }



    else if(Number.isNaN(type)){

        console.log('type:NaN');

    }

    else if(typeof type==='boolean')



    {

         console.log('Type : boolean')

        console.log('value: '+type)

    }

}

    check_datatype(200)

    check_datatype("hello")

    check_datatype(null)

    var a=[1,2,3]

    check_datatype(Math.max(a))

    check_datatype(a)

    var b=[{'a':1},{'c':4},{'b':6},{'b':8}]

    check_datatype(b)

    check_datatype({'a':1})

    check_datatype(1-a)

    check_datatype(true)