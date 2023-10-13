import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

function GetDMARCRecord(){
    const [record, setRecord] = useState(null)
    const [token, setToken] = useState(null)

    const handleSubmit = (e) => {
        // console.log(token)
        e.preventDefault();

        try {
            axios.get(`http://localhost:4000/get-record`,{
                params: {
                    token: token
                }
            })
            .then(res => {
                console.log(res.data)
                setRecord(res.data)
            })
        } catch(err) {
            console.log(err)
        }
    }

    return(
        <Container className="p-3">
            <h1 className="header">Get DMARC Record</h1>

            <Form>
                <Row>
                    <Col className="col-md-10">
                        <Form.Control type="text" placeholder="API Token" onChange={e => setToken(e.target.value)}/>
                    </Col>
                    <Col className="col-md-2">
                        <Button variant="primary" type="button" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>

            {
                record !== null &&
                <div>
                    <p>Domain: {record.domain}</p>
                    <p>Public Token: {record.public_token}</p>
                    <p>Created At: {record.created_at}</p>
                    <p>Reporting URI: {record.reporting_uri}</p>
                    <p>Email: {record.email}</p>
                </div>
                
            }
        </Container>
    )
    
}

export default GetDMARCRecord;