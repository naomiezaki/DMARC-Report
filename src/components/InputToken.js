import {useState} from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



function InputText({handleSubmit, getInput}) {
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