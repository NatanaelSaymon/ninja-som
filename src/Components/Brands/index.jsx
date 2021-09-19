import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Brands = [
  {
    name: 'Brand 1',
    url: 'https://via.placeholder.com/220x40/000000?text=AKG+HARMAN'
  },
  {
    name: 'Brand 2',
    url: 'https://via.placeholder.com/220x40/CCCCCC?text=ROLAND'
  },
  {
    name: 'Brand 3',
    url: 'https://via.placeholder.com/220x40/a60744?text=BOSS'
  },
  {
    name: 'Brand 4',
    url: 'https://via.placeholder.com/220x40/49cfde?text=SHURE'
  },
  {
    name: 'Brand 5',
    url: 'https://via.placeholder.com/220x40/9250a1?text=AKG+HARMAN'
  },
  {
    name: 'Brand 6',
    url: 'https://via.placeholder.com/220x40/78c46c?text=ROLAND'
  },
  {
    name: 'Brand 7',
    url: 'https://via.placeholder.com/220x40/78c46c?text=BOSS'
  },
  {
    name: 'Brand 8',
    url: 'https://via.placeholder.com/220x40/fcba03?text=SHURE'
  }
]

export default class MultipleItems  extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        className: "brands-banners"
      };
      return (
        <div>
          <section className="brands">
            <div className="brands__container container">
              <h1 className="brands__title">As <span>melhores</span> marcas</h1>
              <p className="brands__desc">it is a long established fact that a reader will be destracted by the readable</p>
                <Slider {...settings}>
                {
                    Brands.map((brand) => {
                    return(
                        <div>
                        <img width="220" src={brand.url}/>
                        </div>
                    )
                    })
                }
                </Slider>
            </div>
          </section>
        </div>
      );
    }
}
