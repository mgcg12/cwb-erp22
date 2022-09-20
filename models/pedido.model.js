var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection =  mongoose.connect("mongodb://matheus:matheus123@cluster0-shard-00-00.neke7.mongodb.net:27017,cluster0-shard-00-01.neke7.mongodb.net:27017,cluster0-shard-00-02.neke7.mongodb.net:27017/cwb-erp?ssl=true&replicaSet=atlas-4mc9ar-shard-0&authSource=admin&retryWrites=true&w=majority", {useMongoClient: true}, function(){});
autoIncrement.initialize(connection);


var pedidoSchema = new mongoose.Schema({
	totalVenda: String,
	totalCusto: String,
	pedidoId2: Number,
	dataPedido: String,
	data: {
		dia: Number,
		mes: {
			numero: Number,
			nome: String
			},
		ano: Number
	},
	status: {
		_id: String,
		nome: {type:String, default: "Iniciado"}
	},
	pagamento: {
		forma: String,
		nome: String,
		status: {type: String, default: "Não finalizada"},
		dataPgto: String
	},
	cliente: {
		_id: String,
		nome: String,
		sobrenome: String,
		telefone: String,
		celular: String,
		cpfcnpj: String,
		email: String,
		grupoCliente: String,
		cep:String,
		rua:String,
		numero:String,
		complemento:String,
		bairro:String,
		cidade:String,
		estado:String
	},
	produtos: Array
});
pedidoSchema.plugin(autoIncrement.plugin, { model: 'Pedido', field: 'pedidoId2' });
module.exports = connection.model('Pedido', pedidoSchema);