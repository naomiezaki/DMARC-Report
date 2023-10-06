import {useState} from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



function InputToken({handleSubmit, getInput}) {
    const [input, setInput] = useState("")

    
    
    return (
        <Form>
        <Row>
            <Col>
                <Form.Control type="text" placeholder="API Token" onChange={e => getInput(e.target.value)}/>
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