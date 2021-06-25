class CalculadoraService {

        constructor() {}

        async calculo(calculoData) {
            try {
                console.log('Yeah... Passando pelo service do calculo ...');
                
                var result = 0;
                switch (calculoData.operacao) {
                    case "+": result = calculoData.numero1 + calculoData.numero2; break;
                    case "-": result = calculoData.numero1 - calculoData.numero2; break;
                    case "*": result = calculoData.numero1 * calculoData.numero2; break;
                    case "/": result = calculoData.numero1 / calculoData.numero2; break;
                    default: result = -1
                }

                return result;
            } catch (error) {
                console.log(`Ops, tivemos um erro no service... abortando ... erro: ${error} `);
                return -1;
            }
        }

}

module.exports = CalculadoraService;