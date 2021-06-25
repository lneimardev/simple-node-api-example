//const Joi = require('joi'); 
const ApiResponse = require('../../api/model/wrappers/ApiResponse');

const validator = (schema) => { 
    return (req, res, next) => { 
    
        console.log('Yeah... Passando pelo validator middleware ... ')

        // schema options
        const options = {
            abortEarly: false, // incluir todos os erros
            allowUnknown: true, // ignorar propriedades desconhecidas
            stripUnknown: true // remover propriedades desconhecidas
        };

        const { error } = schema.validate(req.body, options); 
        
        const valid = error == null; 

        if (valid) { 
            // app.post('/add', middleware(schemas.calculadoraRequest) , ... ); 
            // Aqui passa para a próxima função da chamada acima
            next(); 
        } else { 

            // Percorro o retorno de erros do JOI passando para um array para retornar par o usuário
            const { details } = error; 
            const messages = [];
            details.map(i => messages.push(i.message));

            return res.status(422).send(new ApiResponse({statusCode: 422, mensagem: "Ops, tivemos erros de validação dos dados", mensagens: messages, data: {}}));
        } 
    } 
} 

module.exports = validator;