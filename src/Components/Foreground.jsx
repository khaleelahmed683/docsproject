import React, {useRef,useState}from 'react'
import Carts from './Carts'

function Foreground() {
    const ref = useRef(null);
  const data = [
    {
        desc:"Lorem ipsum dolor sit amet consectetur adipsisicing.",
        filesize: ".4mb",
        close: true,
        tag: {isOpen : true, tagTitle : "Download Now", tagColor: "green"},
    },
    {
        desc:"Lorem ipsum dolor sit amet consectetur adipsisicing.",
        filesize: ".9mb",
        close: true,
        tag: {isOpen : true, tagTitle : "Update now", tagColor: "blue"},
    },
    {
        desc:"Lorem ipsum dolor sit amet consectetur adipsisicing.",
        filesize: ".9mb",
        close: true,
        tag: {isOpen : false, tagTitle : "Download Now", tagColor: "green"},
    },



  ];


  return (
            <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
                {data.map((item,index)=> (
                 <Carts data={item} reference={ref} />

                ))}
            </div>


  )
}

export default Foreground
