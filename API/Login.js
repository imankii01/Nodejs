const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateRandomSecretKey = () => {
    return crypto.randomBytes(32).toString('hex'); // Generates a 32-byte (256-bit) random key
};

console.log(generateRandomSecretKey());

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/Login', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const UserModel = mongoose.model('User', userSchema);

// Endpoint for user registration (signup)
app.post('/api/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Endpoint for user login
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await UserModel.findOne({ email });

        // If the user is not found or the password is incorrect
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create and sign a JWT token
        const token = jwt.sign({ userId: user._id }, generateRandomSecretKey(), { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Protected route example
app.get('/api/protected', (req, res) => {
    // Middleware to verify JWT before accessing the protected route
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decodedToken = jwt.verify(token, generateRandomSecretKey());
        // Access the user ID from the decoded token
        const userId = decodedToken.userId;

        // You can use the userId to fetch user data from the database if needed

        res.status(200).json({ message: 'Access granted to protected route', userId });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Unauthorized' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
