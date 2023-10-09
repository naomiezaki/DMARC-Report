import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

function CreateDMARCRecord () {
    const [email, setEmail] = useState("");
    const [domain, setDomain] = useState("");
    const [record, setRecord] = useState(null);

    const handleSubmit = (e) => {
        // console.log(token)
        e.preventDefault();

        let payload = {
            "email": email,
            "domain": domain
        }

        try {
            axios.post(`http://localhost:4000/send-record`,payload)
            .then(res => {
                console.log(res.data)
                setRecord(res.data)
            })
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <h1 className="header">Create DMARC Record</h1>

            <Form>
                <Row>
                    <Col>
                        <Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                        <Form.Control type="text" placeholder='Domain' onChange={e => setDomain(e.target.value)}/>
                    </Col>
                </Row>
                <Row>
                     <Col>
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
                    <p>Email: {record.email}</p>
                    <p>Created At: {record.created_at}</p>
                    <p>Reporting URI: {record.reporting_uri}</p>
                    <p>Public Token: {record.public_token}</p>
                    <p>Private Token: {record.private_token}</p>
                    
                    
                </div>
                
            }
        </Container>
    )
}

export default CreateDMARCRecord;