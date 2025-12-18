console.log("inizio esecuzione");
let d = new Date();
console.log(d);
document.getElementById("saluto").innerHTML = d.getDay();
let [];

function elabora(){
    let numero = document.getElementById("inNumber").value;
    alert(numero);
    
    if (numero>0 && numero <= 255){
        colori.push(numero);
        
      document.getElementById("out").innerHTML ="hai inserito il" + numero  
    }       
    else{
      document.getElementById("error").innerHTML = "il numero non e corretto"
      
    }
}
function reset() {
    document.getElementById("inNumber").value = "";
}

