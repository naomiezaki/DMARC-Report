const express = require("express")
const router = express.Router();
const axios = require('axios');


router.get("/", (req, res) => {
    res.send("Express on Vercel")
})

router.get("/get-record", async(req,res)=> {
    try {
        const response = await axios.get("https://dmarc.postmarkapp.com/records/my", {
            headers: {
                "Accept": "application/json",
                "X-Api-Token": req.query.token
                // "X-Api-Token": req.body.token
            }
        })

        if(response.status === 200) {
            res.status(200).send(response.data);
        } else {
            res.status(response.status).send(response.statusText)
        }
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

router.patch("/update-record", async(req, res) => {
    try {
        const response = await axios.patch("https://dmarc.postmarkapp.com/records/my", JSON.stringify({
            "email": req.body.email,
        }), {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-Api-Token": req.body.token
            }
        })
        res.status(200).send(response.data)
    } catch (err) {
        console.log(err)
    }
})

router.delete("/delete-record", async(req, res) =>{
    try {
        const response = await axios.delete("https://dmarc.postmarkapp.com/records/my", {
            headers: {
                "Accept": "application/json",
                "X-Api-Token": req.body.token
            }
        });

        if(response.status === 200) {
            res.status(200).send(response.data);
        } else if (response.status === 204){
            res.status(204).send(response.statusText);
        } else {
            res.status(response.status).send(response.statusText)
        }

    } catch (err) {
        console.log(err)
    }
})

module.exports = router;