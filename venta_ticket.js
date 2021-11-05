function resumenFuncion() {
    let cantida =  document.getElementById("cantidaticket").value;
    let cate = document.getElementById("categoria");
    let categorias = cate.options[cate.selectedIndex].text;
    let valor=0;
    let numero= parseInt(cantida);

    function SoloLetras(e)
{
key = e.keyCode || e.which;
tecla = String.fromCharCode(key).toString();
letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú";

especiales = [8,13];
tecla_especial = false
for(var i in especiales) {
if(key == especiales[i]){
 tecla_especial = true;
 break;
}
}

if(letras.indexOf(tecla) == -1 && !tecla_especial)
{
 alert("Ingresar solo letras");
 return false;
}
}
 
    
    if (numero <= 0){
        alert("Ingrese valores mayores a 0");
    }else
    {
        switch (categorias) {
               case "Estudiante":
                    valor= parseInt(cantida)*200*0.2;
                    document.getElementById("ptotal").innerHTML="Total a Pagar: $"+valor;
                    break;
              case "Trainee":
                   valor = parseInt(cantida)*200*0.5; 
                   document.getElementById("ptotal").innerHTML="Total a Pagar: $"+valor;
                   break;
             case "Junior":
                   valor = parseInt(cantida)*200*0.85; 
                   document.getElementById("ptotal").innerHTML="Total a Pagar: $"+valor;
                   break;
             default:
                   break;
        }
   }

}

function borraResumen() {
      document.getElementById("ptotal").innerHTML="Total a Pagar: $";      
      
}