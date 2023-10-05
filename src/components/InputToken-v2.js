import React, {useState} from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import {useGetDMARCReportMutation} from '../app/api/report-v2'

function InputTokenV2() {
    const [getDMARCReport, result] = useGetDMARCReportMutation();

    const [input, setInput] = useState("")

    const handleSubmit = ()=>{
        getDMARCReport({
            token: input
        })

        console.log("Result ",result)

        // refetch();
        // console.log(data)
        // setReportData(data)
        // console.log(input)
    }

    return (
        <div>
        <Form>
            <Row>
                <Col>
                    <Form.Control type="text" placeholder="API Token" onChange={e => setInput(e.target.value)}/>
                </Col>
                <Col>
                    <Button variant="primary" type="button" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
        <div>
            {/* {isLoading && <h2>Loading...</h2>}
            {isFetching && <h2>Fetching...</h2>}
            {error && <h2>Something went wrong</h2>} */}
            {/* {isSuccess && (
                <div>
                    {data.map(contact) => {
                        return <div>
                    }}
                </div>
            )} */}
        </div>
        </div>
        
    );
}

export default InputTokenV2;