/*
Juan Valdez
*/

const express = require('express');
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.port || 4001;
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
        db.collection('Doggos')
            .find({})
            .toArray()
            .then((dog) => {
                console.log(dog);
                res.send(dog);
            })
            .catch((e) => {
                res.send('Error');
            });
    });

    app.get('/get/:name', (req, res) => {
        const inputName = req.params.name;

        db.collection('Doggos')
            .find({ Name: inputName })
            .toArray()
            .then((dog) => {
                console.log(dog);
                res.send(dog);
            })
            .catch((e) => {
                res.send('Error');
            })
    })

    //post for new
    app.post('/posts', (req, res) => {
        let newDog
        db.collection('Doggos')
            .insert({
                Name: req.body.name,
                Breed: req.body.breed,
                Color: req.body.color,
                Age: req.body.age
            })
            
           
    });
    //put for update

    //delete
    app.delete('/remove', (res, req) => {
        db.collection('Doggos')
            .delete
    })
    app.listen(port, () => console.log('Listening on port ' + port));
});