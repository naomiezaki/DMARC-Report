import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

function GetDMARCReport(){
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

    return(
        <Container className="p-3">
            <h1 className="header">Get DMARC Report</h1>

            <Form>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="API Token" onChange={e => setToken(e.target.value)}/>
                    </Col>
                    <Col>
                        <Button variant="primary" type="button" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>

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

export default GetDMARCReport;