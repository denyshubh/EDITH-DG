import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class TopSlideShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sliderDetails: {
        "car1": {
          img: "https://images.unsplash.com/photo-1567516628542-735b05351aeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1060&q=80",
          name: "Porche Cayman",
          desc: "Now we are selling a new beast!"
        },
        "car2": {
          img: "https://images.unsplash.com/photo-1471174617910-3e9c04f58ff5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          name: "Mercedez Benz",
          desc: "Maybach 2020 has some new luxury features"
        },
        "car3": {
          img: "https://images.unsplash.com/photo-1514316703755-dca7d7d9d882?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          name: "Lamborghini Aventador",
          desc: "Aventador with convertible roof is available now"
        },
      }
    };
  }

  render() {
    return (
      <div>
  <Carousel>
  {Object.entries(this.state.sliderDetails).map((car, index) =>
       <Carousel.Item key={index}>
          <img
            style = { { objectFit: "cover", objectPosition: "center", maxHeight: "450px", overflow: "hidden", width: "100%" } }
            className="d-block w-100"
            src= {car[1].img}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3><b>{car[1].name}</b></h3>
            <p>{car[1].desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
   )}
</Carousel>
</div>
    );
  }
}

// <div data-src="https://images.unsplash.com/photo-1567516628542-735b05351aeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1060&q=80" />
// <divdata - src = "https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-1.2.1&auto=format&fit=crop&w=1148&q=80" / >


export default TopSlideShow;
