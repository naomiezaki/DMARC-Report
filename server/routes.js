const express = require("express")
const router = express.Router();
const axios = require('axios');


router.get("/", (req, res) => {
    res.send("Hello, World")
})

router.get("/get-report", async(req,res)=> {
    try {
        const response = await axios.get("https://dmarc.postmarkapp.com/records/my", {
            headers: {
                "Accept": "application/json",
                "X-Api-Token": req.query.token
            }
        })
        // console.log(response.data)
        res.status(200).send(response.data)
        // res.json(response.data)
    } catch (err) {
        console.log(err)
    }
})

router.post("/send-record", async(req, res) => {
    try {
        const response = await axios.post("https://dmarc.postmarkapp.com/records", JSON.stringify({
            "email": req.body.email,
            "domain": req.body.domain
        }), {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        res.status(200).send(response.data)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;