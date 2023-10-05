import {useState} from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

function InputTokenV3() {
    const [input, setInput] = useState("")
    const [report, setReport] = useState(null)

    // function handleSubmit(){
    //     console.log(input)
    // }

    const handleSubmit = async () => {
        try {
            const response = await axios.get(`https://dmarc.postmarkapp.com/records/my`, {
                method: "GET",
                headers: {
                    "Accept": "applicaton/json",
                    "X-Api-Token": input
                },
            }).then((response) => {
                console.log(response)
            })

        } catch (err) {
            console.log("ERROR: ",err.message)
        }
    }

    return (
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
    );
}

export default InputTokenV3;