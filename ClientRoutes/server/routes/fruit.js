/*Lily*/

const express = require('express');
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.port || 3001;
const dburl = 'mongodb://localhost:27017';
const dbName = 'hw3';
const client = new MongoClient(dburl);


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

client.connect((err) => {
    console.log("Connected successfully to server");
    const db = client.db(dbName, { useNewUrlParser: true });
   
    app.get('/', (req, res) => {
        db.collection('Fruit')
            .find({})
            .toArray()
            .then((fruittype) => {
                console.log(fruittype);
                res.send(fruittype);
            })
            .catch((e) => {
                res.send('Error');
            });
    });

    app.get('/get/:type', (req, res) => {
        const inputType = req.params.type;

        db.collection('Fruit')
            .find({ Type: inputType })
            .toArray()
            .then((fruittype) => {
                console.log(fruittype);
                res.send(fruittype);
            })
            .catch((e) => {
                res.send('Error');
            })
    })

    app.post('/posts', (req, res) => {
        let newFruit
        db.collection('Fruit')
            .insert({
                type: req.body.type,
                color: req.body.color,
                quantity: req.body.quantity
                
            })
            
           
    });
    //put for update

    //delete
    app.delete('/remove', (res, req) => {
        db.collection('Fruit')
            .delete
    })
    app.listen(port, () => console.log('Listening on port ' + port));
});