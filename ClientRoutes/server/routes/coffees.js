const express = require('express');
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.port || 5001;
const dburl = 'mongodb://localhost:27017';
const dbName = 'hw3';
const client = new MongoClient(dburl);


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

client.connect((err) => {
    console.log("Connected successfully to server");
    const db = client.db(dbName, { useNewUrlParser: true });
    //get stuff
    app.get('/', (req, res) => {
        db.collection('coffee')
            .find({})
            .toArray()
            .then((backcoffee) => {
                console.log(backcoffee);
                res.send(backcoffee);
            })
            .catch((e) => {
                res.send('Error');
            });
    });

    app.get('/get/:name', (req, res) => {
        const inputName = req.params.name;

        db.collection('coffee')
            .find({ Name: inputName })
            .toArray()
            .then((backcoffee) => {
                console.log(backcoffee);
                res.send(backcoffee);
            })
            .catch((e) => {
                res.send('Error');
            })
    })

    //post for new
    app.post('/posts', (req, res) => {
        let newCoffee
        db.collection('coffee')
            .insert({
                brand: req.body.brand,
                roast: req.body.roast,
                countryoforigin: req.body.countryoforigin,
                
            })
            
           
    });
    //put for update

    //delete
    app.delete('/remove', (res, req) => {
        db.collection('coffee')
            .delete
    })
    app.listen(port, () => console.log('Listening on port ' + port));
});