import { useState } from "react";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import axios from 'axios';

import Result from "../components/Result";

function DeleteDMARCRecord () {
    const [token, setToken] = useState("");
    const [record, setRecord] = useState(null);
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        // console.log(token)
        e.preventDefault();
        setRecord(null);
        setStatus(null);

        try {
            axios.delete(`http://localhost:4000/delete-record`,{
                data: {
                    token: token
                }
            })
            .then(res => {
                console.log(res);
                setStatus(res.status);
                console.log("Deleted: ", Object.keys(res.data).length)
                setRecord(res.data)
            })
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1 className="header pt-5">Delete DMARC Record</h1>

            <Form className="form">
                <Row>
                    <Col className="col-12 col-lg-10 pt-3">
                        <Form.Control type="text" placeholder='API Token' onChange={e => setToken(e.target.value)}/>
                    </Col>
                    <Col className="col-12 col-lg-2 pt-3">
                        <Button variant="primary" type="button" style={{width: '100%'}} onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>

            {
                (record !== null && record !== undefined && Object.keys(record).length > 0) ?
                <Result record={record}/>
                :
                <>
                {
                    (status !== null && status !== undefined && status == 204) && <Alert key={'success'} variant={'success'}>Record successfully deleted</Alert>
                }
                </>
            }
        </div>
    )
}

export default DeleteDMARCRecord;