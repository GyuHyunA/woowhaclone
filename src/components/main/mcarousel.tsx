"use client";

import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { CAIMG1, CAIMG2, CAIMG3 } from "../../../public/assets/assets";

const SwiperStyle = styled.section`
  .swiper-slide {
    width: 100vw;
    height: 800px;
  }
`;

export default function Mcarousel() {
  return (
    <SwiperStyle>
      <Swiper slidesPerView={1} modules={[Pagination]} pagination={{ clickable: true, dynamicBullets: true }}>
        {carWrapL.map((v: iCarWrapL) => {
          return (
            <SwiperSlide key={v.id}>
              <McarWrap id={v.id} t1={v.t1} t2={v.t2} image={v.image}/>
              <Image src={v.image} alt=""/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperStyle>
  );
}

const McarWrapS = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`;

const McarWrap = ({ id, t1, t2, image }: iCarWrapL) => {
  return (
    <>
      <McarWrapS className="text-center">
        <p>우아한형제들이 알고 싶다</p>
        <p>{t1}</p>
        <p>{t2}</p>
      </McarWrapS>
    </>
  );
};

interface iCarWrapL {
  id: number;
  t1: string;
  t2: string;
  image: StaticImageData;
}

const carWrapL: Array<iCarWrapL> = [
  {
    id: 1,
    t1: "우리",
    t2: "재미지게 일해요",
    image: CAIMG1,
  },
  {
    id: 2,
    t1: "최고가 되어",
    t2: "떠나라",
    image: CAIMG2,
  },
  {
    id: 3,
    t1: "배민다움이",
    t2: "뭐에요?",
    image: CAIMG3,
  },
];
