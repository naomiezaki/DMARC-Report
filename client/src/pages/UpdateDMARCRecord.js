import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

import Result from "../components/Result";

function UpdateDMARCRecord () {
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [record, setRecord] = useState(null);

    const handleSubmit = (e) => {
        // console.log(token)
        e.preventDefault();

        let payload = {
            "email": email,
            "token": token
        }

        try {
            axios.patch(`http://localhost:4000/update-record`,payload)
            .then(res => {
                setRecord(res.data)
            })
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1 className="header pt-5">Update DMARC Record</h1>

            <Form className="form">
                <Row>
                    <Col className="col-12 col-lg-5 pt-3">
                        <Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    </Col>
                    <Col className="col-12 col-lg-5 pt-3">
                        <Form.Control type="text" placeholder='API Token' onChange={e => setToken(e.target.value)}/>
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

export default UpdateDMARCRecord;