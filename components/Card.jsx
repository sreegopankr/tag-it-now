import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";

const Card = ({ link }) => {
  // console.log(link.image)

  return (
    <div className='relative group'>

        <a href={link.url} className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 pl-2">
          <img src={link.image} alt="preview" className="object-cover rounded-s-lg w-[56px] h-[48px] "/>
          <div className="flex flex-col justify-between p-3 leading-normal">
            <h5 className="mb-1 text-md font-semibold tracking-tight text-gray-900 ">{link.title}</h5>
            <p className="md:mb-1 font-normal text-sm text-gray-700 ">{link.description}</p>
            <div className="font-normal">
              {link.tags.map((tag,index)=>{
                return <span className='mr-1 md:mr-2 text-[13px] md:text-sm text-blue-500' key={index}>#{tag}</span>
              })}
            </div>
            <div className=" font-semibold text-gray-500 text-[13px] md:text-sm flex gap-1 items-center"> 
              <FaFolder className='inline-block'/> 
              <span>{link.group}</span>
            </div>
          </div>
        </a>

        <div className='absolute top-5 right-5 hidden gap-3 group-hover:flex'>
              <button className='bg-gray-300 p-2 text-sm rounded-md' onClick={()=> console.log("Hi Edit")}><FaRegEdit size={19}/></button>
              <button className='bg-gray-300 p-2 text-sm rounded-md' onClick={()=> console.log("Hi Delete")}><MdDelete size={20}/></button>
        </div>

    </div>
  )
}

export default Card