import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postInputs from './routes/inputs.js';

const app = express(); //Initializing app



//Setting up bodyparser to send request properly
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use('/inputs', postInputs);

//Connecting application with database
const CONNECTION_URL = 'mongodb+srv://smishra0722:smishra0722@cluster0.mgzbk.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology:true}) //Object To make sure we dont get any warning in console
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false); //To make sure we dont get any warning in console


