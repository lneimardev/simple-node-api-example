const CalculadoraRequest = require('../model/wrappers/CalculadoraRequest');
const CalculoService = require('../services/CalculadoraService');
const ApiResponse = require('../model/wrappers/ApiResponse');

module.exports = {

    async calculo(req, res) {

        console.log('Yeah... Passando pelo controller do calculo ...')

        // Aqui estou pegando todo o objeto data do body
        const {...data} = req.body;

        // Este trecho é desnecessário é só para mostrar como poderia usar meu wrrapper para garantir que o objeto que estou passando para o service seja um conhecido
        // OBS.: não estou fazendo tratativa aqui se estes atributos existem dentro do data, pois o validator já fez isso
        const calculadoraRequest = new CalculadoraRequest(data.numero1, data.numero2, data.operacao);

        // Instanciando o service, aqui pode ser feito direto no export do service
        // Deixei aqui para ficar mais visual o passo a passo
        const calculoService = new CalculoService();

        // chamando o calculo dentro do service
        const resultado = await calculoService.calculo(calculadoraRequest);

        // -1 aqui representa erro no service, poderia ser tratado de outra maneira 
        if (resultado == -1) {
            return res.status(500).send(new ApiResponse({statusCode: 500, mensagem: "Ops, tivemos um erro no cálculo", mensagens: [], data: {}}));
        } else {
            return res.json(new ApiResponse({ data: { resultado } }));
        }
    },

    async calculo2(req, res) {
        // Aqui vai a chamada para seu segundo calculo se for o caso
    }
};
