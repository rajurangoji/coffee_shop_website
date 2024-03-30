const express = require('express');
const router = express.Router();
const userModel = require('../Models/userModel')
router.use(express.json())
const cors = require('cors')
router.use(cors());

router.get('/data', async (req, res) => {
    const data = await userModel.find()
    res.status(200).json({ data })
})
router.post('/data', async (req, res) => {
    const newdata = req.body;
    console.log(newdata)
    const data = await userModel.create(req.body)
    res.status(200).json({ data })
})
module.exports = router;
