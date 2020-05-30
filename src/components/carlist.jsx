import React, { Component } from 'react';
import CarItem from './carItem.jsx'
import './flex.css'

class CarList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carDetails: {
                car1: {
                    carName: "Mustang GT",
                    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    brand: "Ford",
                    location: "📍Delhi, India",
                },
                car2: {
                    carName: "812",
                    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    brand: "Ferrari",
                    location: "📍Los Angeles, USA",
                },
                car3: {
                    carName: "Mustang GT",
                    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    brand: "Ford",
                    location: "📍Delhi, India",
                },
                car4: {
                    carName: "812",
                    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    brand: "Ferrari",
                    location: "📍Los Angeles, USA",
                },
                car5: {
                    carName: "Mustang GT",
                    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    brand: "Ford",
                    location: "📍Delhi, India",
                },
                car6: {
                    carName: "812",
                    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    brand: "Ferrari",
                    location: "📍Los Angeles, USA",
                }
            }
        };
    }
    render() {
        return (
            <div className="flex-container space-evenly">
            {
                Object.entries(this.state.carDetails).map((car, index) =>
                    <CarItem className = "flex-item" imgsrc={car[1].img}
                    carname = {car[1].name}
                    carbrand = {car[1].brand}
                    carlocation = {car[1].location}
                    key = {index}
                    />
                )
            }
            </div>
        );
    }
}

export default CarList;
