import { useState } from "react";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

import Result from "../components/Result";

function DeleteDMARCRecord () {
    const [token, setToken] = useState("");
    const [record, setRecord] = useState(null);

    const handleSubmit = (e) => {
        // console.log(token)
        e.preventDefault();
        setRecord(null);

        try {
            axios.delete(`http://localhost:4000/delete-record`,{
                data: {
                    token: token
                }
            })
            .then(res => {
                console.log(res);
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
                {/* <Row>
                     
                </Row> */}
            </Form>

            {
                (record !== null && record !== undefined && Object.keys(record).length > 0) &&
                <Result record={record}/>
            }
        </div>
    )
}

export default DeleteDMARCRecord;