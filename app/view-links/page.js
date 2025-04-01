"use client";

import Card from '@components/Card';
import EditModal from '@components/EditModal';
import React, { useEffect, useState } from 'react'

const AllBookmarks = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [showEdit, setShowEdit] = useState(false);

    //fetch cardData.json
    useEffect(()=>{
        fetch('data/cardData.json')
        .then((res)=> res.json())
        .then((data)=> setBookmarks(data))
        .catch((err)=> console.log("Error feteching data" , err));
    },[])

    console.log(bookmarks);
  return (
    <div>
        <h2 className='text-4xl blue_gradient font-semibold text-center mt-4'>All Bookmarks</h2>
        <div className='mt-5 mx-6 flex flex-col gap-1'>
            {
              bookmarks.map((link, index)=> {
                // console.log(link.id)
                return <Card link={link} key={index} setShowEdit={setShowEdit}/>
              })
            }
        </div>
        {showEdit && <EditModal onClose = {()=> setShowEdit(false)}/>}
    </div>
  )
}

export default AllBookmarks