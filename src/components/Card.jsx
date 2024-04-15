import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({data, reference} ) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale : 1.2}} dragElastic={0.1} dragTransition={{bounceStiffness:600, bounceDamping:10}}
    className="relative w-60 h-72 rounded-[40px] bg-slate-500/20 px-7 py-10 text-white overflow-hidden" >
      <FaRegFileAlt />
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
      <div className="footer absolute left-0 bottom-0  w-full " >
        <div className='flex items-center justify-between mb-3 py-3 px-6 '>
          <h5>{data.filesize}</h5>
          <span className='bg-slate-500/60 w-6 h-6 flex items-center justify-center rounded-full'>
          {data.close ? <IoIosClose size='1.3em'/>: <IoDownloadOutline size='.8em' /> }
          </span>
        </div>
        { 
          data.tag.isOpen && ( <div className={`tag w-full py-2 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center item-center`} >
                              <h3 className='text-sm'>{data.tag.tagTitle}</h3>
                            </div>)
        }
        
      </div>
    </motion.div>
  )
}

export default Card