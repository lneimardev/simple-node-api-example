const service = require('../api/services/mod2');

// Exemplo de Job de teste efetuando a chamada de um service 
// Pontos interessantes:
// - Aqui como não esta chamando uma rota não esta passando pelo validator

class jobTeste {
    constructor() {
        setInterval( async () => {

            const n = await service.calculomod2(5);

            console.log(`Disparou a execução do job >> mod2 do número 5 é: ${n}`);

        }, 30000);
    }
}

module.exports = new jobTeste();