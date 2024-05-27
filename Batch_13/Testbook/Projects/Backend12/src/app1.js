const express = require('express');
const app = express();
const cors = require('cors');
const port = 3400;
const medicineRecord = require('./models/medicine');
require('./db/conn');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>WELCOME TO API CREATION OF MEDICINES</h1>');
});

app.get('/medicinedata', async (req, res) => {
    try {
        const medData = await medicineRecord.find({});
        res.status(201).json(medData);
    } catch (e) {
        console.log(e);
    }
});

app.post('/medicines', async (req, res) => {
    try {
        const newMedicine = await medicineRecord.create(req.body);
        res.status(201).json(newMedicine);
    } catch (e) {
        console.error(e);
        res.status(500).json({ e: 'Internal Server Error' });
    }
});

app.put('/medicine/:name', async (req, res) => {
    const name = req.params.name;
    const newData = req.body;
    console.log('Received update request for:', name);
    console.log('Data to update:', newData);

    try {
        const updateRecord = await medicineRecord.findOneAndUpdate(
            { medicine_name: name },
            newData,
            { new: true }
        );

        if (!updateRecord) {
            console.log('Medicine not found');
            return res.status(404).json({ error: "Medicine not found" });
        }

        console.log('Update successful:', updateRecord);
        res.status(200).json(updateRecord);
    } catch (e) {
        console.error('Error updating medicine:', e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.delete('/medicine/:name', async (req, res) => {
    const name = req.params.name;
    console.log('Deleting medicine:', name);

    try {
        const deleteMedicine = await medicineRecord.findOneAndDelete({ medicine_name: name });

        if (!deleteMedicine) {
            console.log('Medicine not found');
            return res.status(404).json({ error: "Medicine not found" });
        }

        res.status(202).json(deleteMedicine);
    } catch (e) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
