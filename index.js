const express = require('express')
const mongoose = require('mongoose');
const Customer = require('./models/customer.model.js');
const customerRoute = require('./routes/customer.route.js');
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/customer", customerRoute);



app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
});


mongoose.connect("mongodb+srv://admin:rMN1DoGTAbBJeNrt@backenddb.pxpbwhm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log('Connected to database!');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log('Connection failed!');
    });