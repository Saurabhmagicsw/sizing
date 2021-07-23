import logo from './logo.svg';
import './App.css';
import {Card,ListGroup,ListGroupItem,Row,Col,Container} from "react-bootstrap"

function App() {
  return (
    <div className="App">
      
     
<Container>
  
  <Row>
    <Col> <Card style={{ width: '18rem' }}>
  <div className="div"></div>
  <Card.Body>
    <Card.Title><strong>Rem sizing</strong></Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  
</Card></Col>
    <Col> <Card style={{ width: '288px' }}>
  <div className="div_px"></div>
  <Card.Body>
    <Card.Title><strong>Px sizing</strong></Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  
</Card></Col>
    <Col> <Card style={{ width: '18em' }}>
  <div className="div_em"></div>
  <Card.Body>
    <Card.Title><strong>Em sizing</strong></Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  
</Card></Col>
  </Row>
</Container>

    </div>
  );
}

export default App;
