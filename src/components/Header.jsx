import React , {useState} from "react";
import logo from "../assets/images/logo.png";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import download from "../assets/images/download.jpeg";
export default function Header() {
    const [toggle , setToggle] = useState(false);
  const menu = [
    {
      id: 0,
      name: "HOME",
      icon: HiHome,
    },
    {
      id: 1,
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      id: 2,
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      id: 3,
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      id: 4,
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      id: 5,
      name: "Series",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-8">
        <img
          src={logo}
          alt="Loading"
          className=" w-[80px] md:w-[115px] object-cover  "
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <ul key={item.id}>
              <HeaderItem name={item.name} Icon={item.icon} />
            </ul>
          ))}
        </div>
        <div className="md:hidden flex gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <ul key={item.id}>
                  <HeaderItem name={""} Icon={item.icon} />
                </ul>
              )
          )}
          <div className="md:hidden" onClick={()=>setToggle(!toggle)}> 
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle?<div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700  px-5 py-4'>
              {menu.map(
                (item, index) =>
                  index >= 3 && (
                    <ul key={item.id}>
                      <HeaderItem name={item.name} Icon={item.icon} />
                    </ul>
                  )
              )}
            </div>:null}
          </div>
        </div>
      </div>
      <img src={download} alt="Loading" className="w-[40px] rounded-full" />
    </div>
  );
}
