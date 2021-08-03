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

function Airlines() {
    return (
        <Container>
        <Row>
            {projects.map(elem => (
                <Col key={elem.title} xs={12} sm={6} md={3}>
                    <Card style={{ width: '300px' }} className='card-effects'>
                        <Card.Body>
                            <Card.Title>{elem.title}</Card.Title>
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