const express = require("express");
const router = express.Router();
const operationController = require('../controller/operation')

router.get("/operations/", async (req, res) => {
    const response = await operationController.getAllOperations()
    res.json(response)
})

router.post("/operations/", async (req, res) => {
    const {
        concept,
        amount,
        date,
        type
    } = req.body
    const response = await operationController.insertOperation({
        concept,
        amount,
        date,
        type
    })
    res.json(response)
})


router.get("/operations/:id", async (req, res) => {
    const {
        id
    } = req.params
    const response = await operationController.getOperationById(id)
    res.json(response)
})


router.put("/operations/:id", async (req, res) => {
    const {
        id
    } = req.params
    const {
        concept,
        amount,
        date,
        type
    } = req.body
    const response = await operationController.modifyOperationById(id, {
        concept,
        amount,
        date,
        type
    })
    res.json(response)
})


router.delete("/operations/:id", async (req, res) => {
    const {
        id
    } = req.params
    const response = await operationController.getOperationById(id)
    res.json(response)
})


module.exports = router