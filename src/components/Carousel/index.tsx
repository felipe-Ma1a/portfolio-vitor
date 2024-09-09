"use client";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./CustomArrows";

import sliderImg1 from "public/images/slider-1.jpg";
import sliderImg2 from "public/images/slider-2.jpg";
import sliderImg3 from "public/images/slider-3.jpg";
import sliderImg4 from "public/images/slider-4.jpg";

import styles from "./styles.module.css";

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.sliderGroup}>
      <h2>Evolução que fala por si:</h2>

      <Slider {...settings}>
        <Image
          src={sliderImg1}
          alt="Imagem do Slider"
          className={styles.sliderImg}
          quality={100}
        />
        <Image
          src={sliderImg2}
          alt="Imagem do Slider"
          className={styles.sliderImg}
          quality={100}
        />
        <Image
          src={sliderImg3}
          alt="Imagem do Slider"
          className={styles.sliderImg}
          quality={100}
        />
        <Image
          src={sliderImg4}
          alt="Imagem do Slider"
          className={styles.sliderImg}
          quality={100}
        />
      </Slider>
    </section>
  );
};

export default Carousel;
