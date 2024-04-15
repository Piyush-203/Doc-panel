import React, { useEffect, useRef } from 'react'
import Card from './Card'
import { useState } from 'react'


const Foreground = () => {
  const [randomNumb, setRandomNumb] = useState(0);
  const genRandomNumber = () =>{
    const val = Math.floor(Math.random()*10)+1;
    setRandomNumb(val);
  };
  useEffect(() => {
    genRandomNumber();
  },[]);

  
  const ref = useRef(null);
  const data =[
    {
    desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    filesize: `${randomNumb}mb`,
    // filesize: "0.7mb",
    close: true,
    tag: {
      isOpen: true,
      tagTitle: "Download Now",
      tagColor: "blue",
    },
  },
  {
    desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    filesize: `${randomNumb}mb`,
    // filesize: "0.7mb",
    close: true,
    tag: {
      isOpen: false,
      tagTitle: "Download Now",
      tagColor: "green",
    },
  },
  {
    desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    filesize: `${randomNumb}mb`,
    // filesize: "0.7mb",
    close: true,
    tag: {
      isOpen: true,
      tagTitle: "Download Now",
      tagColor: "green",
    },
  }
  ]
  return (
        <div ref ={ref} className="fixed top-0 left-0 z-[3] w-full h-screen flex gap-10 flex-wrap p-5 ">
          {data.map((item, index) =>(
            <Card data={item} reference ={ref} />
          ) )}
        </div>
  )
}

export default Foreground