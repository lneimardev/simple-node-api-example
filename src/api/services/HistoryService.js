const History = require("../model/HistoryCalc");

module.exports = {
    async store(data) {
        const { valor1 } = data;
        const { valor2 } = data;
        const { resultado } = data;
        const { operacao } = data;
        const dataCalculo = new Date();

        let history = await History.create({
            dataCalculo,
            valor1,
            valor2,
            resultado,
            operacao
        });

        return history;
    },

    async index() {
        const histories = await History.find({});

        return histories;
    }
};
