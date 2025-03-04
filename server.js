const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error('MongoDB connection error:', err));

app.get('/api/health', (req, res) => {
    res.status(200).send('Server is running');
});

app.get('/api/data', (req, res) => {
    res.status(200).json({ message: 'Sample data from MongoDB' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
