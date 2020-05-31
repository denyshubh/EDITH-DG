import React, { Component } from 'react';
import { Card, Accordion, Media, Figure, Container, Row, Col } from 'react-bootstrap';
import './heart.css'
import $ from 'jquery'

$(function() {
    $(".heart").on("click", function() {
        $(this).toggleClass("heart-blast");
    });
});


class CarItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const cardStyle = {

            borderWidth: 1,
            borderRadius: 2,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10,


        };
        console.log(this.props)
        return (
            <Container flex style={{ borderBottomColor: 'black', borderBottomWidth: 1}}>
                    <div className="heart" style={{float: "right"}}></div>
                    <Accordion.Toggle as={Card.Header} eventKey={this.props.eventKey} style={{background: "white"}}>
                      <Media>
                      <Row>
                      <Col sm={12} md = {4} >
                          <Figure>
                              <Figure.Image
                                width={171}
                                height={180}
                                alt= {this.props.carname}
                                src={this.props.imgsrc}
                                rounded
                              />
                            </Figure>
                        </Col>
                        <Col sm={12} md = {8} >
                          <Media.Body>
                            <h5> {this.props.carbrand}</h5>
                            <p>
                               Name: {this.props.carlocation}
                               Location: {this.props.carlocation}
                            </p>
                          </Media.Body>
                         </Col>
                          </Row>
                    </Media>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={this.props.eventKey}>
                      <Card.Body>
                       <Card style={{cardStyle, width: '19.5rem' }}>
                  <Card.Img variant="top" src={this.props.imgsrc} />
                  <Card.Body>
                    <Card.Title><b>{this.props.carname}</b><br/><br/>{this.props.carbrand}</Card.Title>
                    <Card.Text>
                      {this.props.carlocation}
                    </Card.Text>
                    
                    <div className="heart" ></div>
                    
                  </Card.Body>
                  
                </Card>
                      
                      </Card.Body>
                    </Accordion.Collapse>
            </Container>

        );
    }
}


export default CarItem;
