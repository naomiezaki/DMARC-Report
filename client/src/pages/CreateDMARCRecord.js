import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

import Result from "../components/Result";

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
        <Container className="p-3">
            <h1 className="header">Create DMARC Record</h1>

            <Form className="form">
                <Row>
                    <Col className="col-xs-12 col-sm-12 col-lg-5">
                        <Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                        
                    </Col>
                    <Col className="col-xs-12 col-sm-12 col-lg-5">
                        <Form.Control type="text" placeholder='Domain' onChange={e => setDomain(e.target.value)}/>
                    </Col>
                    <Col className="col-xs-12 col-sm-12 col-lg-2">
                        <Button variant="primary" type="button" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Col>
                </Row>
                {/* <Row>
                     
                </Row> */}
            </Form>

            {
                record !== null &&
                <Result record={record}/>
            }
        </Container>
    )
}

export default CreateDMARCRecord;