"use client";

import Image from "next/image";
import React from "react";
import Logo from "../../../../public/assets/Images/woohwa_Log.svg";
import Link from "next/link";
import styled from "styled-components";

const UlStyle = styled.nav`
  a {
    margin-right: 20px;
    color: #232323;
    &:hover {
      font-weight: 700;
    }
  }
`;

interface inList {
    id: number,
    name: string,
    link: string
}

const nList: Array<inList> = [
  {
    id: 1,
    name: "회사소개",
    link: "/",
  },
  {
    id: 2,
    name: "서비스",
    link: "/",
  },
  {
    id: 3,
    name: "함께가치",
    link: "/",
  },
  {
    id: 4,
    name: "뉴스룸",
    link: "/",
  },
  {
    id: 5,
    name: "글꼴",
    link: "/",
  },
  {
    id: 6,
    name: "음악",
    link: "/",
  },
];

export default function Navigation() {
  return (
    <div className="contain w-screen h-20 flex items-center justify-around">
      <div className="nav-logo">
        <Image src={Logo} alt="회사 로고" />
      </div>
      <UlStyle className="nav-list">
        {nList.map((v) => {
          return (
            <Link key={v.id} href={v.link}>{v.name}</Link>
          );
        })}
      </UlStyle>
      <UlStyle className="nav-btn">
        <Link href="/">배민다움</Link>
        <Link href="/">인재영입</Link>
        <button className="px-2.5 border-r border-gray-300">한</button>
        <button className="px-2.5">A</button>
      </UlStyle>
    </div>
  );
}
