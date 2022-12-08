const express = require('express');
const engine = require('express-handlebars').engine;
const app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tweets'
});
connection.connect();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {

    
    res.render('home',
        {
            title: "Page home",
            nom: "Mouiin Rouag"
        });

});

app.get('/tweets/auteur:', (req, res) => {
    connection.query("SELECT * from tweets where auteur=auteur" +req.params.auteur, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].auteur);
        res.render('tweets',
            {
            auteur:results[0].auteur,
             
            
              
            }

            
            
        );
    });

});


app.listen(3000);