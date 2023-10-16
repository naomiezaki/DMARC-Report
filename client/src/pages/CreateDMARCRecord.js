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
                setRecord(res.data)
            })
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1 className="header pt-5">Create DMARC Record</h1>

            <Form className="form">
                <Row>
                    <Col className="col-12 col-lg-5 pt-3">
                        <Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                        
                    </Col>
                    <Col className="col-12 col-lg-5 pt-3">
                        <Form.Control type="text" placeholder='Domain' onChange={e => setDomain(e.target.value)}/>
                    </Col>
                    <Col className="col-12 col-lg-2 pt-3">
                        <Button variant="primary" type="button" style={{width: '100%'}} onClick={handleSubmit}>
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
        </div>
    )
}

export default CreateDMARCRecord;