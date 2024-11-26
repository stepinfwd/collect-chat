import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({  extended: true }))
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://user:userpassword@cluster0.hbc0x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority+srv://mongodb+srv://user:userpassword@cluster0.hbc0x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority:123123123@practice.jto9p.mongodb.net/test';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
