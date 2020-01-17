const express = require('express');
const moogoose = require('mongoose');
const routes = require('./routes');

moogoose.connect('mongodb+srv://barreto:barreto@cluster-g4buo.mongodb.net/week10?retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express();
app.use(express.json());
app.use(routes);


app.listen(3333);