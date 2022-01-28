const router = require("express").Router();
const db = require('../database/db')

router.post("/register", async (req, res) => {

    const username = req.body.username
    const password = req.body.password

    try {
        db.query("INSERT INTO users (username, password) VALUES (?,?)", [username, password], (err, result)=>{
            console.log(err)
        })
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;