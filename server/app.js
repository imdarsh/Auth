const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./db/connect');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use('/api/users', require('./routes/authRoutes'));

const port = process.env.PORT || 7000;

const start = async () => {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
}

start();