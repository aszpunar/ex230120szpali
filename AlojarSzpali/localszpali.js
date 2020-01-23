function verContador(){

    if(localStorage.contador){
        localStorage.contador=Number(localStorage.contador)+30;
    }
    else{
        localStorage.contador=0;
    }
    document.getElementById("contenedorId").innerHTML=localStorage.contador;
 }
function multiplico(){

    if(sessionStorage.contador7){
        sessionStorage.contador7=Number(sessionStorage.contador7)*7;
        console.log(sessionStorage.contador7);
    }
    else{
        sessionStorage.contador7=1;
        console.log(sessionStorage.contador7);
    }
    document.getElementById("sessionId").innerHTML=sessionStorage.contador7;
 }