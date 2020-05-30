import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
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

        return (
            <div className="shadow mt-5 bg-white rounded" style = {{width:"min-content", marginLeft:"2px", marginRight:"5px"}} >
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
                
            </div>
        );
    }
}


export default CarItem;
