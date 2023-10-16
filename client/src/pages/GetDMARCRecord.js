import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import axios from 'axios';
import Result from "../components/Result";

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
                setRecord(res.data)
            })
        } catch(err) {
            console.log(err)
        }
    }

    return(
        <div>
            <h1 className="header pt-5">Get DMARC Record</h1>

            <Form className="form">
                <Row>
                    <Col className="col-12 col-md-10 pt-3">
                        <Form.Control type="text" placeholder="API Token" onChange={e => setToken(e.target.value)}/>
                    </Col>
                    <Col className="col-12 col-md-2 pt-3">
                        <Button variant="primary" type="button" style={{width: '100%'}} onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>

            {
                record !== null &&
                <Result record={record}/>
            }
        </div>
    )
    
}

export default GetDMARCRecord;