import { useState } from "react";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Result(props) {
    const {record} = props;
    return ( 
        <Card className="result">
            <ListGroup variant="flush">
                {record.domain !== null && <ListGroup.Item><span><b>Domain:</b> {record.domain}</span></ListGroup.Item>}
                {record.email !== null && <ListGroup.Item><span><b>Email:</b> {record.email}</span></ListGroup.Item>}
                {record.created_at !== null && <ListGroup.Item><span><b>Created At:</b> {record.created_at}</span></ListGroup.Item>}
                {record.reporting_uri !== null && <ListGroup.Item><span><b>Reporting URI:</b> {record.reporting_uri}</span></ListGroup.Item>}
                {record.public_token !== null && <ListGroup.Item><span><b>Public Token:</b> {record.public_token}</span></ListGroup.Item>}
                {record.private_token !== null && <ListGroup.Item><span><b>Private Token:</b> {record.private_token}</span></ListGroup.Item>}
            </ListGroup>
        </Card>
    )
}

export default Result;