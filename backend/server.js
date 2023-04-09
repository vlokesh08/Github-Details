const express = require('express')
const bodyParser = require('body-parser');
const cors = require("cors");
const axios = require('axios');

const app = express();

app.use(express.json());


app.post('/fetch', (req, res) => {
    const { inputValue } = req.body;
    console.log(`Input Value: ${inputValue}`);
    axios.get(`https://api.github.com/users/${inputValue}`)
    .then(response => {
        console.log(response.data);
        res.json( response.data );

    })
    .catch(error => {
        console.log(error);
    });
    // res.json({ data });
});

app.get('/fetch', (req,res) => {
    res.send(data);
})

app.listen(5000, ()=>{
    console.log("Server is running on port 3000");
})