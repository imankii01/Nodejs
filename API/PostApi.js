// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/apiDev', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Check MongoDB connection
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define your schema
const yourSchema = new mongoose.Schema({
    // Define your schema fields and types
    // Example:
    name: String,
    age: Number,
    email: String
});

// Create a Mongoose model
const YourModel = mongoose.model('YourModel', yourSchema);

// Define your POST endpoint to save data
app.post('/api/saveData', async (req, res) => {
    try {
        // Create a new document with the request body
        const newDoc = new YourModel(req.body);

        // Save the document to the database
        await newDoc.save();

        res.status(201).json({ message: 'Data saved successfully', data: newDoc });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// ... (previous code)

// Define your GET endpoint to retrieve all data
app.get('/api/getData', async (req, res) => {
    try {
        // Use the Mongoose model to find all documents in the collection
        const data = await YourModel.find();

        res.status(200).json({ data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// ... (previous code)

// Define your PUT endpoint to update data by ID
app.put('/api/updateData/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Use the Mongoose model to find the document by ID and update it
        const updatedDoc = await YourModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedDoc) {
            return res.status(404).json({ message: 'Document not found' });
        }

        res.status(200).json({ message: 'Data updated successfully', data: updatedDoc });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// ... (previous code)

// Define your DELETE endpoint to delete data by ID
app.delete('/api/deleteData/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Use the Mongoose model to find the document by ID and remove it
        const deletedDoc = await YourModel.findByIdAndRemove(id);

        if (!deletedDoc) {
            return res.status(404).json({ message: 'Document not found' });
        }

        res.status(200).json({ message: 'Data deleted successfully', data: deletedDoc });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// Define your GET endpoint with query parameters
app.get('/api/getByCriteria', async (req, res) => {
    try {
        // Extract query parameters from the request
        const { criteriaField, criteriaValue } = req.query;

        // Use the Mongoose model to find documents based on specific criteria
        const data = await YourModel.find({ [criteriaField]: criteriaValue });

        res.status(200).json({ data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// Define your GET endpoint with pagination
app.get('/api/getPaginatedData', async (req, res) => {
    try {
        const { page, limit } = req.query;

        // Use the Mongoose model to implement pagination
        const data = await YourModel.find()
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.status(200).json({ data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// Define your GET endpoint to count documents
app.get('/api/countData', async (req, res) => {
    try {
        // Use the Mongoose model to count documents
        const count = await YourModel.countDocuments();

        res.status(200).json({ count });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// Define your GET endpoint with aggregation pipeline
app.get('/api/aggregatedData', async (req, res) => {
    try {
        // Use the Mongoose model and aggregation pipeline
        const aggregatedData = await YourModel.aggregate([
            // Your aggregation pipeline stages here
            // Example: { $group: { _id: '$category', total: { $sum: 1 } } }
        ]);

        res.status(200).json({ aggregatedData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// ... (remaining code)


// ... (remaining code)


// ... (remaining code)


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
