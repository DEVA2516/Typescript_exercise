let code : (string | number);
code = 111;
code = "hello"


function displayType(value : (string | number)) {
    
    if (typeof(value) === "string" )
        console.log("value is string")
    else if (typeof(value) === "number")
        console.log("value is number"); 
}

displayType(1223)
displayType("12")
//displayType(true)