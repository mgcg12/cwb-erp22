var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection =  mongoose.connect("mongodb://matheus:matheus123@cluster0-shard-00-00.neke7.mongodb.net:27017,cluster0-shard-00-01.neke7.mongodb.net:27017,cluster0-shard-00-02.neke7.mongodb.net:27017/cwb-erp?ssl=true&replicaSet=atlas-4mc9ar-shard-0&authSource=admin&retryWrites=true&w=majority", {useMongoClient: true}, function(){});
autoIncrement.initialize(connection);

var clienteSchema = new mongoose.Schema({
	clienteId: Number,
	nome: {type: String},
	sobrenome: {type: String},
	telefone: {type: String},
	celular: {type: String},
	cpfcnpj: {type: String},
	email: {type: String, unique: true},
	grupoCliente: {type: String},
	cep:{type: String},
	rua:{type: String},
	numero:{type: String},
	complemento:{type: String},
	bairro:{type: String},
	cidade:{type: String},
	estado:{type: String},
	segmento: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Segmento"	
		}
	],
	pedidos: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Pedido"
		}
	]
	},{
  usePushEach: true
});

clienteSchema.plugin(autoIncrement.plugin, { model: 'Cliente', field: 'clienteId' });
module.exports = connection.model('Cliente', clienteSchema);