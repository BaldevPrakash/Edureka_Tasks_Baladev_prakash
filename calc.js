/*function add(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)+Number(b);
    document.getElementById("output").innerText=`Sum of number is ${out}`
}
let add = () => {
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)+Number(b);
    document.getElementById("output").innerText=`Sum of number is ${out}`

}

function sub(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)-Number(b);
    document.getElementById("output").innerText=`Sum of number is ${out}`
}*/


function calc(opt){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out;
    if(opt == "add"){
        out = `Addition is ${Number(a)+Number(b)}`;
    }
    if(opt=="sub")
    {
        out = `Subtraction is ${Number(a)-Number(b)}`;
    }
    if(opt=="multiply")
    {
        out = `Multiplication is ${Number(a)*Number(b)}`;
    }
    if(opt=="divide")
    {
        out = `Division is ${Number(a)/Number(b)}`;
    }
    document.getElementById("output").innerText=out
}