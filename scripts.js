var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

button1.addEventListener("click",menorPositivos);
button2.addEventListener("click",numIguales);
button3.addEventListener("click",cambioNumeros);
button4.addEventListener("click",sumarNumeros)

number1.addEventListener("input",verifyInteger);
number2.addEventListener("input",verifyInteger);

function verifyInteger ()
{
    str1=number1.value;
    str2=number2.value;
    if (isNaN(str1) || isNaN(str2))
    {
        number1.value="";
        number2.value="";
        alert("Ingrese numero entero positivo");
    }
}

function menorPositivos()
{
    value1=number1.value;
    value2=number2.value;
    if (value1=="" || value2=="")
    {
    }
    else
    {
        const options= ["segundo","primer"];
        const options1=["primero","segundo"];
        var int1=parseInt(value1);
        var int2=parseInt(value2);
        answer=Boolean(int1<int2);
        respuesta="El "+options[+answer]+" numero es menor que el "+options1[+answer];
        alert(respuesta);
    }
}
function numIguales ()
{
    value1=number1.value;
    value2=number2.value;
    if (value1=="" || value2=="")
    {
    }
    else
    {
        const options=["son","no son"]
        answer=value1^value2;
        if (answer>0)
        {
            answer=1;
        }
        respuesta="Los numeros "+options[+answer]+" iguales";
        alert(respuesta);
    }
}
function cambioNumeros()
{
    value1=number1.value;
    value2=number2.value;
    if (value1=="" || value2=="")
    {
    }
    else
    {
        var int1=parseInt(value1);
        var int2=parseInt(value2);
        int1=int1+int2;
        int2=int1-int2;
        int1=int1-int2;
        number1.value=int1.toString();
        number2.value=int2.toString();
        alert("los numeros han sido cambiados")
    }    
}
function sumarNumeros()
{
    value1=number1.value;
    value2=number2.value;
    if (value1=="" || value2=="")
    {
    }
    else
    {
        var int1=parseInt(value1);
        var int2=parseInt(value2);
        answer=Math.log2(2**int1*2**int2);
        alert("los suma de los numeros es: "+answer)
    }
}