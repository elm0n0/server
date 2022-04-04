// creacion server
const express = require('express');
const indexRoutes = require('./routes/index.routes');
const userRoutes = require('./routes/user.routes');

// DB conection
const username = 'usuarioBD';
const password = 'usuarioBD';
const db = 'arquetipoDB';

const { default: mongoose } = require('mongoose');
const uri = `mongodb+srv://${username}:${password}@cluster0.svzd6.mongodb.net/${db}?retryWrites=true&w=majority`;
mongoose.connect(uri,{ useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", () => 
  console.log("MongoDB database connection established successfully")
);

const app = express();
app.use(indexRoutes);
app.use(userRoutes);
const puerto = 5005;




app.listen(puerto , () => console.log(`servidor levantado en el puerto: ${puerto}`));

module.exports = express;