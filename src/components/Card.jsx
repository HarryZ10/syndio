import React from 'react';
import Card from 'react-bootstrap/Card';


function CardComponent(props) {

    return (
        <Card style={{ width: '100%', height: '100%', border: 'none', borderBlockColor: 'white' }}>
            <Card.Body>
                <Card.Title id="card-title">{props.title}</Card.Title>
                <Card.Text id="card-text">{props.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}


export default CardComponent;