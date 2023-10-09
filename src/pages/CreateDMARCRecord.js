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

    const handleSubmit = (e) => {
        // console.log(token)
        e.preventDefault();

        let payload = {
            email: "naomi@jbbgi.com",
            domain: "jbbgi.com"
        }

        try {
            axios.get(`http://localhost:4000/send-record/`,payload)
            .then(res => {
                console.log(res.data)
                setReport(res.data)
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
        </Container>
    )
}

export default CreateDMARCRecord;