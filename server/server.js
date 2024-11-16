
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
console.log("Testing dotenv, MONGODB_URL:", process.env.MONGODB_URL); // Check if the variable loads
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON data
app.use(express.json());
app.use(cookieParser());

const URI = process.env.MONGODB_URL;
if (!URI) {
    console.error("MONGODB_URL is undefined. Check your .env file.");
    process.exit(1);
}

app.get('/', (req, res) => {
    res.json({
        message: 'HELLO WORLD'
    });
});

app.use('/user', require('./routes/useRouter'));

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('DB CONNECTED'))
.catch((err) => {
    console.error('DB CONNECTION ERROR:', err);
    process.exit(1);
});

app.listen(PORT, () => console.log(`SERVER IS RUNNING ... ${PORT}`));
