import { useState } from "react";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import axios from 'axios';
import Result from "../components/Result";

function GetDMARCRecord(){
    const [record, setRecord] = useState(null)
    const [token, setToken] = useState(null)
    const [isFetched, setIsFetched] = useState(false)

    const handleSubmit = (e) => {
        // console.log(token)
        e.preventDefault();
        setRecord(null)
        setIsFetched(false)

        try {
            axios.get(`https://dmarc-report-backend.vercel.app/get-record`,{
                params: {
                    token: token
                }
            })
            .then(res => {
                console.log(res)
                console.log("Get: ",res.data)
                setRecord(res.data)
                setIsFetched(true)
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
                (record !== null && record !== undefined && Object.keys(record).length > 0 && isFetched) ?
                <Result record={record}/>
                :
                <>
                {
                    isFetched && <Alert key={'danger'} variant={'danger'}>Record not found.</Alert>
                }
                </>
            }
        </div>
    )
    
}

export default GetDMARCRecord;