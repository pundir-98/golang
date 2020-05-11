const express = require('express')
const app = express()
const url = require('url')
user = []
app.post('/create', async (req, res) => {
    console.log(req.query)
    const employee = req.query.name;
    try{
        const newemployee = await employee.save()
        res.status(201).json(newemployee)
    }catch (err){
        res.status(400).json({'message': err.message})
    }
})

app.listen(6000, () => console.log("Server started"))