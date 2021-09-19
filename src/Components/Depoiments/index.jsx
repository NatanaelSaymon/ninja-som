import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Depoiments = [
  {
    photo: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'George Williams',
    job: 'Design',
    depoiment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.'
  },
  {
    photo: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Alan Moore',
    job: 'Empresaria',
    depoiment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.'
  },
  {
    photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Jhon Jones',
    job: 'Produtor',
    depoiment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
  },
]

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        arrows: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "depoiments-banners"
      };
      return (
        <div>
          <section className="depoiments">
            <div className="depoiments__container container">
              <Slider {...settings}>
                {
                  Depoiments.map((depoiment, index) => {
                    return(
                      <div key={index} className="depoiments-avatar">
                        <img src={depoiment.photo} alt={depoiment.name} className="depoiments-avatar__img"/>
                        <div className="depoiments-avatar__desc">
                          <p className="depoiments-avatar__name">{depoiment.name}</p>
                          <p className="depoiments-avatar__job">{depoiment.job}</p>
                        </div>
                        <p className="depoiments-avatar__depoiment">{depoiment.depoiment}</p>
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

