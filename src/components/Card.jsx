import React from 'react';
import Card from 'react-bootstrap/Card';


/**
 * Building the Card component displays the title and text of the data.
 * @param {*} props - The props passed to the component.
 * @returns {JSX} - The JSX to be rendered.
 */
function CardComponent(props) {

    // destructuring props to get the title and text for readibility
    const { title, text } = props;

    // bold text that have ¢, $, %, etc.
    const boldText = text.split(' ').map((word, index) => {
        if (word.includes('$') || word.includes('¢') || word.includes('%')) {
            return <span key={index} style={{ fontWeight: 700 }}>{word} </span>
        } else {
            return <span key={index}>{word} </span>
        }
    });

    return (
        <Card style={{ width: '100%', height: '100%', border: 'none', borderBlockColor: 'white' }}>
            <Card.Body>
                <Card.Title id="card-title">{title}</Card.Title>
                <Card.Text id="card-text">
                    {boldText}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


export default CardComponent;