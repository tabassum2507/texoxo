
const express = require('express')
const mongoose = require('mongoose');
const app = express();
const Messages = require('./dbMessages');
const port = process.env.PORT || 3001;

app.use(express.json());


const connection_url = 'mongodb+srv://admin:<teWbryLuO2Z6BBxG>@cluster0.dsxrn.mongodb.net/texoxodb?retryWrites=true&w=majority';

mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.post|("/messages/new", (req, res) =>{
    const dbMessage = req.body

    Messages.create( dbMessage, (err, data) => {
        if (err) {
            // internal server error
            res.status(500).send(err) 
        } else {
            res.status(201).send(data)
        }
    })
}
)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})