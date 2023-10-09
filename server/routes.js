const express = require("express")
const router = express.Router();
const axios = require('axios');



router.get("/", (req, res) => {
    res.send("Hello, World")
})

router.get("/get-report/:token", async(req,res)=> {
    try {
        const response = await axios.get("https://dmarc.postmarkapp.com/records/my", {
            headers: {
                "Accept": "application/json",
                "X-Api-Token": req.params['token']
            }
        })
        // console.log(response.data)
        res.json(response.data)
    } catch (err) {
        console.log(err)
    }
})

router.get("/send-record", async(req, res) => {
    console.log(req)
    // try {
    //     const data = await axios.post("https://dmarc.postmarkapp.com/records", {
    //         "email": "email@domain.com",
    //         "domain": "activecampaign.com"
    //     }, {
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //         }
    //     })
    // }
})

module.exports = router;