import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import useFetch from 'react-fetch-hook';
import Card from './Card';
import Tabs from './Tabs';

import 'bootstrap/dist/css/bootstrap.min.css';

function ToggleContent() {

    const { data, loading, error } = useFetch(
        'https://run.mocky.io/v3/a9f6a4b7-d03c-4a45-b64b-791e054f36b8',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'GET'
        }
    );

    
    return (
        <div>
            <Tabs>
                <div label="Gender">
                    <div className='card-container'>
                        <Container fluid>
                        <Row>
                            <Col lg>
                                <Card title="Hello 1" text="11"/>
                            </Col>
                            <Col lg>
                                <Card title="Hello World" text="22"/>
                            </Col>
                            <Col lg>
                                <Card title="Hello 3" text="33"/>
                            </Col>
                        </Row>
                        </Container>
                    </div>
                </div>
                <div label="Race">
                    <div className='card-container'>
                    <Container fluid>

                        <Row>
                            <Col lg>
                                <Card title="Hello 1" text="11"/>
                            </Col>
                            <Col lg>
                                <Card title="Hello 2" text="99"/>
                            </Col>
                            <Col lg>
                                <Card title="Hello 3" text="33"/>
                            </Col>
                        </Row>
                        </Container>

                    </div>
                </div>
            </Tabs>
        </div>
    )
    
}


export default ToggleContent;