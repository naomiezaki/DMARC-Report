import {useState} from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



function InputEmail({handleSubmit, getEmail, getDomain}) {
    const [email, setEmail] = useState("");
    const [domain, setDomain] = useState("");

    return (
        <Form>
        <Row>
            <Col>
                <Form.Control type="email" placeholder="Email" onChange={e => getEmail(e.target.value)}/>
                <Form.Control  type="text" placeholder='Domain' onChange={e => getDomain(e.target.value)}/>
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

export default InputEmail;