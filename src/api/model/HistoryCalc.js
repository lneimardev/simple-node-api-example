const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
    dataCalculo: Date,
    valor1: Number,
    valor2: Number,
    resultado: Number,
    operacao: String
});

module.exports = mongoose.model("History", HistorySchema);

/*
class Historico {
  DateTime dataCalculo;
  String valor1Header;
  String valor1;
  String operacaoHeader;
  String operacao;
  String valor2Header;
  String valor2;
  String resultadoHeader;
  String resultado;

  Historico(
      {this.valor1Header = "Valor 1:",
      this.valor2Header = "Valor 2:",
      this.operacaoHeader = "Operação",
      this.resultadoHeader = "Resultado",
      this.dataCalculo,
      this.valor1,
      this.valor2,
      this.operacao,
      this.resultado});
}
* */
