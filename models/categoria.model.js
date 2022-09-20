var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection =  mongoose.connect("mongodb://matheus:matheus123@cluster0-shard-00-00.neke7.mongodb.net:27017,cluster0-shard-00-01.neke7.mongodb.net:27017,cluster0-shard-00-02.neke7.mongodb.net:27017/cwb-erp?ssl=true&replicaSet=atlas-4mc9ar-shard-0&authSource=admin&retryWrites=true&w=majority", {useMongoClient: true}, function(){});
autoIncrement.initialize(connection);

var categoriaSchema = new mongoose.Schema({
	url: String,
	categoriaId: Number,
	nome: String,
	descricao: String,
	img: Object,
	produtos: Array,
	produtosQtde: Number
});

categoriaSchema.plugin(autoIncrement.plugin, { model: 'Categoria', field: 'categoriaId' });
module.exports = mongoose.model('Categoria', categoriaSchema);