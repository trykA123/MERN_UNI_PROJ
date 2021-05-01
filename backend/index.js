import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();


app.use(cors());
app.use(express.json());


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server is running on port: ${port}');
});