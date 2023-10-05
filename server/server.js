const express = require('express');
const cors = require('cors');
const axios = require('axios')
const port = 4000;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/get-report", async(req,res)=> {
    try {
        const response = await axios.get("https://dmarc.postmarkapp.com/records/my", {
            headers: {
                "Accept": "application/json",
                "X-Api-Token": '834add01-afdb-4269-8460-0866448a4a00'
            }
        })
        console.log(response)
    } catch (err) {
        console.log(err)
    }
})


app.listen(port, () => {
    console.log(`Running on ${port}`)
})

// app.use(cors());
// app.use(express.json());