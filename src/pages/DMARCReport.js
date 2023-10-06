import { useState } from "react";
import InputToken from "../components/InputToken";
import Container from 'react-bootstrap/Container';

import axios from 'axios';

function DMARCReport(){
    const [report, setReport] = useState(null)
    const [token, setToken] = useState(null)

    const handleSubmit = (e) => {
        // console.log(token)
        e.preventDefault();

        try {
            axios.get(`http://localhost:4000/get-report/?${token}`)
            .then(res => {
                console.log(res.data)
                setReport(res.data)
            })
        } catch(err) {
            console.log(err)
        }
    }

    const getInput = (input) => {
        setToken(input)
    }

    return(
        <Container className="p-3">
            <h1 className="header">DMARC Report</h1>
            <InputToken handleSubmit={handleSubmit} getInput={getInput}/>
            {
                report !== null &&
                <div>
                    <p>Domain: {report.domain}</p>
                    <p>Public Token: {report.public_token}</p>
                    <p>Created At: {report.created_at}</p>
                    <p>Reporting URI: {report.reporting_uri}</p>
                    <p>Email: {report.email}</p>
                </div>
                
            }
        </Container>
    )
    
}

export default DMARCReport