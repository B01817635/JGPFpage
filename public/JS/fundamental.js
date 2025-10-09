/*
 FUNDAMENTAL CODE
*/

function my_function(p1, p2){
    return p1 * p2;
}


// Window Alert
function initialize(){
    window.alert("Hello World");
    document.getElementById("printhere").innerHTML = "Hello World";

    let x = "20";
    let y = "25";
    document.getElementById("datatypes").innerHTML = parseInt(x) + parseInt(y)

    // booleans and conditionals

    let xx = 5;

    let yy = 9;

    let zz = 5;

    if(xx != yy){
        document.getElementById("booleans").innerHTML = "Its true " + xx + " " + "!= " + yy;
    }

    if(xx == zz){
        document.getElementById("booleans2").innerHTML = "Its false " + xx + " " + "!= " + zz;
    }

    let my_array = ["item1", "item2", "item3"];

    // Refer to array by index
    document.getElementById("array").innerHTML = my_array[1];
    my_array[0] = "newItem1"
    document.getElementById("changedarray").innerHTML = my_array[0];
    document.getElementById("fullarray").innerHTML = my_array;
    document.getElementById("arraylength").innerHTML = my_array.length;

    let text = "";

    for (i = 0; i < 25; i= i+4){
        text += "the number is " + i + "<br>"
    }
    document.getElementById("forloop").innerHTML = text

    document.getElementById("functions").innerHTML = my_function(5, 4);

    //debugging

    let xq = 20;

    let yq = 8;

    let zq = xq + yq;

    //console.log("The value zq is " + zq)

}

// Function
function datetime(){
    document.getElementById("datetime").innerHTML = Date();
}