"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import "../../app/style.css";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";

import { useRouter } from 'next/navigation';

const postVideo = async (videoUrl) => {
	console.log("we are calling PostVideo.js from the loading page");
	const response = await fetch('/api/postVideo', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({ video_url: videoUrl }),
	});
  
	if (!response.ok) {
	  throw new Error('Failed to post video');
	}
	const responseData = await response.json(); // Wait for the JSON response to be parsed
	console.log("response from post video inside post function", responseData);
	return responseData;
  };
  

export default function Loading() {
	const router = useRouter();
	const [postVideoResponse, setPostVideoResponse] = useState(null);  
	const searchParams = useSearchParams();
	const url = searchParams.get('url');

	console.log('main loading function is starting');
	console.log("this is the youtube video url", url);
	useEffect(() => {
		if (url) { 
		  console.log("trying to retrieve post video response");
		  postVideo(url)
			.then(responseData => { // This now contains the parsed JSON
			  if (responseData) {
				console.log('Success after promise is resolved', responseData);
				const video_id = responseData.video_id;
				console.log('video id', video_id);
				// Use responseData here, as it contains the parsed JSON
				router.push(`/clips?video_id=${video_id}`);
			  }
			})
			.catch(error => {
			  console.error("Failed to post video in getShort.js", error);
			  // Handle error, possibly set state to display an error message
			});
		}
	  }, []); 
	return (
		<div className="backgColorStyle">
			<MaxWidthWrapper>
				<div style={{paddingTop: '30px'}}></div>
				<div className="lexend-font greyFont" style={{fontSize:'40px'}}> Your Clips Are Being Processed </div>
				<div className="noto-sans-mono-font yellowFont"> Check Back Soon</div>

			</MaxWidthWrapper>
		</div>
	)
  }