const express = require('express');
const cors = require('cors');
const db = require('./db');
const AppRouter = require('./routes/AppRouter');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', AppRouter);

app.get('/', (req, res) => {
    res.send('This is root!')
});

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
});