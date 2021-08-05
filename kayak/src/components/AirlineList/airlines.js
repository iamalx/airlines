import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const projects = [
    {
        title: 'My Portfolio ',
        text: 'Responsive web app build with React + Bootstrap for a great UX.',
        link: 'https://github.com/iamalx/react-portfolio',
        linkName: 'Repo'
    },
    {
        title: 'My Portfolio ',
        text: 'Responsive web app build with React + Bootstrap for a great UX.',
        link: 'https://github.com/iamalx/react-portfolio',
        linkName: 'Repo'
    },
    {
        title: 'My Portfolio ',
        text: 'Responsive web app build with React + Bootstrap for a great UX.',
        link: 'https://github.com/iamalx/react-portfolio',
        linkName: 'Repo'
    },
    {
        title: 'My Portfolio ',
        text: 'Responsive web app build with React + Bootstrap for a great UX.',
        link: 'https://github.com/iamalx/react-portfolio',
        linkName: 'Repo'
    },]

    let i = ''
function Airlines({ airlineList }) {
    console.log(airlineList)
    // domain not provided in json res;
    const imgDomain = 'https://content.r9cdn.net';

    return (
        <Container>
        <Row>
            {airlineList.map((elem, i) => (
                <Col key={elem.code} xs={12} sm={6} md={3} className='card-col'>
                    <Card style={{ width: '300px', height: '240px' }} className='card-effects'>
                        <Card.Body className='card-body'>
                            <img className='airline-img' src={imgDomain + elem.logoURL} alt={elem.name} />
                            <Card.Title className='airline-name'>{elem.name}</Card.Title>
                                {/* <Card.Text>
                                    {elem.text}
                                </Card.Text> */}
                            {/* <Card.Link target='_blank' href={elem.link}>{elem.linkName}</Card.Link> */}
                        </Card.Body>
                    </Card>
                </Col>
            ))}                  
        </Row>
    </Container>
    );
}

export default Airlines;