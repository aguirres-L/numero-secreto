


const generarNumeroAleatorio = () => {
        
    return Math.floor(Math.random() * 100) + 1;
    };
    
    
    const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    
    
    if (parseInt(numeroAdivinado) === numeroSecreto) { // hago uso de parseInt() para poder trasformar numeroAdivinado a formato "number"
    console.log(`¡Felicitaciones! ¡Adivinaste el número secreto! tu respuesta ${numeroSecreto} `);
    } else if (numeroAdivinado > numeroSecreto) {
    console.log(`   El número secreto es menor a ${numeroAdivinado} . ¡Sigue intentando! :D  `);
    numeroAdivinado = null;
    } else {
    console.log(`   El número secreto es mayor a ${numeroAdivinado}. ¡Sigue intentando! :D  `);
    numeroAdivinado = null;
    }
  
    };
    module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
    };
    