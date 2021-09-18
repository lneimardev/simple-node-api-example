const HistoricoService = require("../services/HistoryService");
const ApiResponse = require("../model/wrappers/ApiResponse");

module.exports = {
    async index(req, res) {
        const histories = await HistoricoService.index();
        const total = histories.length;

        return res.json(new ApiResponse({ data: { total, histories } }));
    }
};
