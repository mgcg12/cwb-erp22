var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection =  mongoose.connect("mongodb://matheus:matheus123@cluster0-shard-00-00.neke7.mongodb.net:27017,cluster0-shard-00-01.neke7.mongodb.net:27017,cluster0-shard-00-02.neke7.mongodb.net:27017/cwb-erp?ssl=true&replicaSet=atlas-4mc9ar-shard-0&authSource=admin&retryWrites=true&w=majority", {useMongoClient: true}, function(){});
autoIncrement.initialize(connection);

var produtoSchema = new mongoose.Schema({
	produtoId: Number,
	nomeProduto: String,
	sku: {type: String, unique: true},
	peso: String,
	quantidade: Number,
	quantidadeVendida: {type:Number, default: 0},
	precoVenda: String,
	precoCusto: String,
	img: Object,
	categoria: String,
	categorias: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Categoria"
		}
	]
});

produtoSchema.plugin(autoIncrement.plugin, { model: 'Produto', field: 'produtoId' });
module.exports = mongoose.model('Produto', produtoSchema);