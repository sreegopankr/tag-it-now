'use client';
import { useParams } from '@node_modules/next/navigation';
import React, { useEffect, useState } from 'react'

const DetailPage = () => {

    const params = useParams();
    // console.log(params);
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        fetch('data/cardData.json')
            .then((res) => res.json())
            .then((data) => setBookmarks(data))
            .catch((err) => console.log("Error feteching data", err));
    }, [])

    const currentURL = bookmarks.filter(url => url.id === params.id);

    // console.log(currentURL[0]);
    // console.log(typeof (currentURL[0]));
    // if (currentURL[0]) {
    //     console.log(currentURL[0].title)
    // }

    return (
        <div>
            {currentURL[0] &&

                (
                    <div>
                        <h1>{currentURL[0].title}</h1>
                        <p>{currentURL[0].description}</p>

                        <div>
                            <h4>Tags</h4>
                            <ul>
                                <li># dmskfs</li>
                                <li># dmskfs</li>
                                <li># dmskfs</li>
                            </ul>
                        </div>


                        <iframe></iframe>
                    </div>
                )

            }
        </div>
    )
}

export default DetailPage