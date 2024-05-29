"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../../../public/assets/Images/woohwa_Log.svg";
import Link from "next/link";
import styled from "styled-components";

const SubGnbStyle = styled.div`
  .nav-top-menu {
    height: 80px;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .submenu {
    position: absolute;
    top: 80px;
    left: 0;
    opacity: 0;
    transition: 0.5s;
    height: 0px;
    z-index: 9;
    background-color: white;
    width: 100vw;
    pointer-events: none;
    border-bottom: 1px solid lightgray;
    &.active {
      opacity: 1;
      height: 80px;
      pointer-events: auto;
    }
    .list-wrap {
      position: absolute;
      left: calc(50% - 200px);
      top: calc(50% - 12.75px);
    }
  }
`;

export default function Navigation() {
  const [overPoint, setOverPoint] = useState<number>(0);
  console.log(overPoint);

  return (
    <div className="contain w-screen h-20 flex items-center justify-between px-20 bg-white">
      <div className="nav-logo">
        <Image src={Logo} alt="회사 로고" />
      </div>
      <ul className="nav-list flex" onMouseLeave={() => setOverPoint(0)}>
        {nList.map((v: inList) => {
          return (
            <SubGnbStyle key={v.id}>
              <li onMouseOver={() => setOverPoint(v.id)} className="nav-top-menu cursor-pointer hover:font-bold">
                {v.name}
              </li>
              {overPoint !== 5 && overPoint !== 6 ? (
                <div className={`submenu ${overPoint === v.id ? "active" : " "} `}>
                  <div className="list-wrap">
                    {v.submenu?.map((value: isubList) => {
                      return (
                        <Link key={value.id} href={value.link} className="mr-10">
                          {value.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </SubGnbStyle>
          );
        })}
      </ul>
      <ul className="nav-btn">
        <Link className="mx-2.5" href="/">
          배민다움
        </Link>
        <Link className="mx-2.5" href="/">
          인재영입
        </Link>
        <button className="px-2.5 border-r border-gray-300">한</button>
        <button className="px-2.5">A</button>
      </ul>
    </div>
  );
}

interface inList {
  id: number;
  name: string;
  submenu?: Array<isubList> | undefined;
}

interface isubList {
  id: number;
  name: string;
  link: string;
}

const nList: Array<inList> = [
  {
    id: 1,
    name: "회사소개",
    submenu: [
      { id: 1, name: "우아한 문화", link: "/" },
      { id: 2, name: "히스토리", link: "/" },
      { id: 3, name: "지속가능경영", link: "/" },
    ],
  },
  {
    id: 2,
    name: "서비스",
    submenu: [
      { id: 1, name: "배달/포장", link: "/" },
      { id: 2, name: "커머스", link: "/" },
      { id: 3, name: "사장님/라이더", link: "/" },
      { id: 4, name: "컬쳐", link: "/" },
    ],
  },
  {
    id: 3,
    name: "함께가치",
    submenu: [
      { id: 1, name: "배민 그린", link: "/" },
      { id: 2, name: "배민아카데미", link: "/" },
      { id: 3, name: "파트너성장", link: "/" },
      { id: 4, name: "이웃과함께", link: "/" },
    ],
  },
  {
    id: 4,
    name: "뉴스룸",
    submenu: [
      { id: 1, name: "보도자료", link: "/" },
      { id: 2, name: "언론보도", link: "/" },
      { id: 3, name: "팩트 바로 알기", link: "/" },
    ],
  },
  {
    id: 5,
    name: "글꼴",
  },
  {
    id: 6,
    name: "음악",
  },
];
