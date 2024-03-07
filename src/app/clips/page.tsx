"use client"

import React, { useState, useEffect } from 'react';
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import ShortVideo from "../../components/ShortVideo";
import { buttonVariants } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { fetchData } from "./fetchData";
import { useSearchParams } from "next/navigation";
import "../../app/style.css";

const getShortsInfo = async (video_id) => {
	console.log("get video inside clips page");
	const response = await fetch(`/api/getShorts`, {
	  method: 'GET',
	  headers: {
		'Content-Type': 'application/json',
	  },
	});
  
	if (!response.ok) {
	  throw new Error('Failed to post video');
	}
	const responseData = await response.json(); // Wait for the JSON response to be parsed
	console.log("response from get video inside post function", responseData);
	return responseData;
  };
  
export default function Page() {
	// const data = await fetchData();
	console.log('hello world')
	const searchParams = useSearchParams();
	const video_id = searchParams.get('video_id');
    const [shortsInfo, setShortsInfo] = useState(null);
    const [error, setError] = useState(null);
	console.log('video id is here ', video_id);
    useEffect(() => {
        // This checks if video_id is available right when the component mounts.
        // If video_id is expected to change during the component's lifecycle and you need to refetch based on that,
        // you'll need to include it in the dependency array, making the effect not run only once anymore.
        if (video_id) {
            getShortsInfo(video_id)
                .then(info => {
                    console.log('Shorts Info:', info);
                    setShortsInfo(info);
                })
                .catch(err => {
                    console.error('Error fetching shorts info:', err);
                    setError(err.toString());
                });
        }
    }, []); 
	return (
	
		<div className="backgColorStyle">
		<MaxWidthWrapper>
			<div className="padding-top"></div>
			<div className="lexend-font greyFont" style={{fontSize: "38px", textAlign: "left"}}>
				Your shots are ready!
			</div>
			<div className="flex flex-col gap-6 whiteFont">
			{shortsInfo ? (
        		<div>
          		<p>
					{shortsInfo.shorts.map((shorts) => (
					<ShortVideo video={shorts} key={shorts.cdn_shorts_url} />
				))}
				</p>
								
								
				</div>
			) : (
				<div></div>
			)}

			</div>
		</MaxWidthWrapper>
		</div>
	);
};

// {/* <div className="flex flex-col gap-6">
// {shortsInfo.shorts.map((shorts) => (
// 	<ShortVideo video={shorts} key={shorts.cdn_shorts_url} />
// ))}
// short_title, cdn_shorts_url, cdn_subtitle_url
// </div> */}