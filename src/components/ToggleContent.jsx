import React, { useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import useFetch from 'react-fetch-hook';
import Card from './Card';
import Tabs from './Tabs';

import 'bootstrap/dist/css/bootstrap.min.css';


/**
 * ToggleContent component
 * @returns {JSX} - The JSX to be rendered.
 */
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

    // Some Notes:

    // What I would do if I had more time is to use a hook to fetch the data
    // as shown in the useFetch hook above. Also parsing the data to constants
    // and then using them in the render function.

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error!</div>;
    }

    return (
        <div>
            <Tabs>
                <div label="Gender">
                    <div className='card-container'>
                        <Container fluid>
                        <Row>
                            <Col lg>
                                <Card title="Pay Equity Gap" text="Women earn 96¢ for every $1 earned by comparable men"/>
                            </Col>
                            <Col lg>
                                <Card title="Employees in Comparison" text="Women make up 41% of employees"/>
                            </Col>
                            <Col lg>
                                <Card title="Budget" text="$235,900 minimum recommended budget to reduce pay equity gap"/>
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
                                <Card title="Pay Equity Gap" text="Hispanics earn 86¢ for every $1 earned by comparable Whites"/>
                            </Col>
                            <Col lg>
                                <Card title="Employees in Comparison" text="Hispanics make up 21% of employees"/>
                            </Col>
                            <Col lg>
                                <Card title="Budget" text="$535,000 minimum recommended budget to reduce pay equity gap"/>
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