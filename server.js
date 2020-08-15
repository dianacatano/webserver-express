const express = require('express');
const app = express(); //Declara una variable que es producto de la función de express

const hbs = require('hbs'); //Importación de la librería HBS
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

//Express HBS
//Definir hbs como engine para renderizar mi sitio web
app.set('view engine', 'hbs');



//Configuro una solictud get cuando el path sea un /
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'diana',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {});
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});