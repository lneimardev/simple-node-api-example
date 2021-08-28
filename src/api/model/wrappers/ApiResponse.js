
class ApiResponse {

    constructor({statusCode = 200, mensagem = "Operacao relizda com sucesso", mensagens = [], data = {}}) {
        this.statusCode = statusCode;
        this.mensagem = mensagem;
        this.mensagens = mensagens;
        this.data = data;
    }
        
}

module.exports = ApiResponse;