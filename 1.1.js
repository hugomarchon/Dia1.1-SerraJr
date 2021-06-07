var contador = 0

function AddContador(){
    
    if (contador >= 4){
        alert("O grupo esta cheio")
        contador = 0
    }
    
    else{
        contador +=1
    }
    
    document.getElementById("contador").innerHTML = contador
}