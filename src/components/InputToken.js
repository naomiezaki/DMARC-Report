import {useState} from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function InputToken() {
    const [input, setInput] = useState("")
    const [report, setReport] = useState(null)

    // function handleSubmit(){
    //     console.log(input)
    // }

    const handleSubmit = async () => {
        try {
            const data = await (await fetch(`https://dmarc.postmarkapp.com/records/my`,
            {
                method: "GET",
                mode: 'cors',
                headers: {
                    "Accept": "applicaton/json",
                    "X-Api-Token": input
                },
            })).json()
            console.log(data)
            setReport(data)
        } catch (err) {
            console.log(err.message)
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

export default InputToken;