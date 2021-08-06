import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardText from './cardtext';

// domain not provided in jsonp res;
const imgDomain = 'https://content.r9cdn.net';

function Airlines({ airlineList }) {

    const [ hoveredCard, setHoverCard ] = useState(null);

    const onMouseOver = (index) =>  setHoverCard(index);
    const onMouseOut = () => setHoverCard(null);

    return (
        <Container>
        <Row className='airlines-row'>
            {airlineList.map((airline, i) => (
                <Col key={airline.code} className='card-col'>
                    <Card  className='card-effects' 
                        onMouseEnter={() => onMouseOver(i)}
                        onMouseLeave={onMouseOut}>   
 
                        <Card.Body className='card-body'>
                            <img className='airline-img' src={imgDomain + airline.logoURL} alt={airline.name} />
                            <div className='card-text'>
                                {(hoveredCard === i) ?
                                    <CardText airline={airline}></CardText>
                                :
                                    (<div className='airline-name'> {airline.name} </div>)
                                }
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}                  
        </Row>
    </Container>
    );
}

export default Airlines;