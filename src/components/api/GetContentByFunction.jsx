import React from "react";
import useFetch from 'react-fetch-hook';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../Card';


const GetContentByFunction = (props) => {

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
        <>
            {data && data.map((item, index) => {
                return (
                    <Row key={index}>
                        <Col>
                            <Card title={item.title} text={item.text} />
                        </Col>
                    </Row>
                )
            })}
        </>
    )
    
}


export default GetContentByFunction;