const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();

//permitir envio de dados para a aplicação no formato de JSON
app.use(express.json());
//permitir o acesso da API a partir de qualquer domínio (publicamente)
app.use(cors());

//iniciando o DB
mongoose.connect(
	"mongodb://localhost:27017/nodeapi",
	{ 
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);

requireDir("./src/models");

// Product.create({
//	title: "React Native",
//	description: "Build native apps with React",
//	url: "https://github.com/facebook/react-native"
// });

//rotas
app.use('/api', require('./src/routes'));

app.listen(3001);