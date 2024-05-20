"use client";

import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const SwiperStyle = styled.section`
  .swiper-slide {
    width: 100vw;
    height: 800px;
  }
`;

export default function Mcarousel() {
  return (
    <SwiperStyle>
      <Swiper slidesPerView={1}>
        <SwiperSlide>옵션 1</SwiperSlide>
        <SwiperSlide>옵션 2</SwiperSlide>
        <SwiperSlide>옵션 3</SwiperSlide>
        <SwiperSlide>옵션 4</SwiperSlide>
      </Swiper>
    </SwiperStyle>
  );
}
