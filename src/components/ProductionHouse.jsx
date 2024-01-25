import React from 'react'

import disney from '../assets/images/disney.png'
import marvel from '../assets/images/marvel.png'
import nationalG from '../assets/images/nationalG.png'
import pixar from '../assets/images/pixar.png'
import starwar from '../assets/images/starwar.png'
import disneyV from '../assets/videos/disney.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import nationalGV from '../assets/videos/national-geographic.mp4'
import pixarV from '../assets/videos/pixar.mp4'
import starwarV from '../assets/videos/star-wars.mp4'

export default function ProductionHouse() {
    const ProductionHouseList = [
        {
            id:1,
            image:disney,
            video:disneyV,
            title:"Disney",
        },
        {
            id:2,
            image:marvel,
            video:marvelV,
            title:"Marvel",
        },
        {
            id:3,
            image:nationalG,
            video:nationalGV,
            title:"National Geographic",
        },
        {
            id:4,
            image:pixar,
            video:pixarV,
            title:"Pixar",
        },
        {
            id:5,
            image:starwar,
            video:starwarV,
            title:"Star Wars",
        }
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
      {ProductionHouseList.map((item)=>(
            <div key={item.id} className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800' >
                <video src={item.video} autoPlay loop playsInline className='absolute z-0 rounded-md opacity-0 hover:opacity-50'></video>
                <img src={item.image} alt={item.title} className='w-full z-[1] opacity-100' />
            </div>
      ))}
    </div>
  )
}
