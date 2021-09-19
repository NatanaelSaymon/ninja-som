import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Banners = [
  {
    name: 'Banner 1',
    url: 'https://via.placeholder.com/3400x805/000000?text=Slider+1'
  },
  {
    name: 'Banner 2',
    url: 'https://via.placeholder.com/3400x805/CCCCCC?text=Slider+2'
  },
  {
    name: 'Banner 3',
    url: 'https://via.placeholder.com/3400x805/a60744?text=Slider+3'
  }
]

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        arrows: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "hero-banners"
      };
      return (
        <div>
          <section className="hero">
            <Slider {...settings}>
              {
                Banners.map((banner) => {
                  return(
                    <div>
                      <img width="100%" src={banner.url}/>
                    </div>
                  )
                })
              }
            </Slider>
          </section>
        </div>
      );
    }
  }

