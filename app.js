var express = require('express');
var expressSanitized = require("express-sanitized");
var bodyParser = require("body-parser");
var fs = require("fs-extra");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
var path = require("path");
var ejs = require('ejs-html');
var Cliente = require('./models/cliente.model');
var Produto = require('./models/produto.model');
var Categoria = require('./models/categoria.model');
var Segmento = require('./models/segmento.model');
var Pedido = require('./models/pedido.model');
var multer = require('multer');
var upload = multer({ dest: './public/uploads/'});
var autoIncrement = require('mongoose-auto-increment');
var clientesRoutes = require('./routes/clientes.routes');
var indexRoutes = require('./routes/index.routes');
var pedidosRoutes = require('./routes/pedidos.routes');
var categoriasRoutes = require('./routes/categorias.routes');
var produtosRoutes = require('./routes/produtos.routes');
var segmentosRoutes = require('./routes/segmentos.routes');
var app = express();

app.use(clientesRoutes);
app.use(indexRoutes);
app.use(pedidosRoutes);
app.use(categoriasRoutes);
app.use(produtosRoutes);
app.use(segmentosRoutes);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressSanitized());
/*var connection =  mongoose.connect("mongodb://localhost:27017/cwb-erp", {useMongoClient: true}, function(){
	console.log("and MongoDB is ok!")
});
var connection =  mongoose.connect("mongodb://matheus:matheus123@cluster0-shard-00-00.neke7.mongodb.net:27017,cluster0-shard-00-01.neke7.mongodb.net:27017,cluster0-shard-00-02.neke7.mongodb.net:27017/cwb-erp?ssl=true&replicaSet=atlas-4mc9ar-shard-0&authSource=admin&retryWrites=true&w=majority", {useMongoClient: true}, function(){
	console.log("and MongoDB is ok!")
});*/
var connection =  mongoose.connect("mongodb://mongodb:mongodb22@cluster0.6ekwwfr.mongodb.net/?retryWrites=true&w=majority", {useMongoClient: true}, function(){
	console.log("and MongoDB is ok!")
autoIncrement.initialize(connection);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('DEO online em localhost:', port)
});