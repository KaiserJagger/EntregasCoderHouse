
                                                    //Dinero sin fronteras
         //Valores de conversion
         const pChi = 6.72;
         const real = 0.03;
         const pUru = 0.28;
         const boli = 228.90;
         const pCol = 30.85;
         
         const desc = 0.05


    function countryList(){
    let country = (prompt("Ingrese a que pais desea mandar dinero:" +  "\nChile, Brasil, Uruguay, Venezuela o Colombia."));
    switch(country){
        case "Chile":   
        alert("Se van a mandar " + enterAmount() * pChi + " pesos chilenos");
        break;
        case "Brasil":
            alert("Se van a mandar " + enterAmount() * real + " reales");
        break;
        case "Uruguay":
            alert("Se van a mandar " + enterAmount() * pUru + " pesos uruguayo");
        break;
        case "Venezuela":
            alert("Se van a mandar " + enterAmount() * boli + " bolivar venezolano");
        break;
        case "Colombia":
            alert("Se van a mandar " + enterAmount() * pCol + " pesos colombiano");
        break;
        default:
             alert("Pais Invalido, vuelva a ingresar");
             countryList();
        break;
    }
}


function enterAmount(){
    let amount = parseFloat(prompt("Ingrese un monto entre 100 y 100.000 pesos argentinos"));
    while(amount !== 0){
        if(amount > 100 && amount <= 100000){
            let descTotal = amount * desc;  //Aqui sacamos el porcentaje de la comision que se queda la pagina
           console.log("La ganancia es de: " + descTotal + " pesosARG"); //aqui se la mostramos solo al desarrollador
            let res = amount - descTotal;
           return res;
        }else{
            alert("El monto ingresado es incorrecto");
        }
        amount = parseFloat(prompt("Ingrese un monto entre 1 y 100mil pesosARG"));
       
    }
    
}

countryList();