"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import "../app/style.css";

type VideoProps = {
	short_title: string;
	cdn_subtitle_url: string;
	cdn_shorts_url: string;
};

const ShortVideo = ({ video }: { video: VideoProps }) => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [subtitleUrl, setSubtitleUrl] = useState("");
    const [subtitleColor, setSubtitleColor] = useState('black');
    const [subtitleFont, setSubtitleFont] = useState('Arial');


	const handleColorChange = (event) => {
		setSubtitleColor(event.target.value);
	  };
	
	const handleFontChange = (event) => {
	setSubtitleFont(event.target.value);
	};

	useEffect(() => {
		const styleSheet = document.createElement('style');
		styleSheet.type = 'text/css';
		styleSheet.innerText = `URL.createObjectURL(object)
		  video::cue {
			color: ${subtitleColor} !important;
			font-family: ${subtitleFont} !important;
		  }
		`;
		document.head.appendChild(styleSheet);
	
		return () => {
		  document.head.removeChild(styleSheet);
		};
	  }, [subtitleColor, subtitleFont]);

	console.log(video.cdn_subtitle_url);
	return (
		<div className="flex gap-8" style={{paddingTop: '2em', paddingBottom: '2em'}}>
			<div className="flex flex-col gap-2">
				<div
					className={`relative w-96 aspect-vertical bg-gray-200 ${
						!videoLoaded && "animate-pulse"
					}`}>
					<video
						controls
						onLoadedData={() => setVideoLoaded(true)}
						>
						<source src={video.cdn_shorts_url} type="video/mp4"/>
						{showSubtitle && (
							<track
							label="English"
							kind="subtitles"
							srcLang="en"
							// src="https://cdn.spaceclips.app/sc_KweabTRBA3H6JNTyNqyoi8/subtitle/KTGUhgGPsrUc4UF82EVrC9.vtt"
							default
							/>
						)}
						
	
						Your browser does not support the video tag.
					</video> 
					<div style={{color: "red"}}>
			
					</div>

				</div>
			<div>
				<button className="showSubtitle manrope-font" onClick={() => setShowSubtitle((prev) => !prev)}>
					Turn On And Customize Subtitles
				</button>
				{showSubtitle && (
					<div className="customSub manrope">
					
					<label htmlFor="subtitle-color">Subtitle Color:</label>
					<select id="subtitle-color" value={subtitleColor} onChange={handleColorChange}>
						<option value="white">White</option>
						<option value="black">Black</option>
						<option value="red">Red</option>
						<option value="blue">Blue</option>
					</select>
					<br></br>
					<label htmlFor="subtitle-font">Subtitle Font:</label>
					<select id="subtitle-font" value={subtitleFont} onChange={handleFontChange}>
						<option value="Arial">Arial</option>
						<option value="Verdana">Verdana</option>
						<option value="Helvetica">Helvetica</option>
					</select>
					</div>
				)}
			</div>

			
			</div>
			<div className="video-container">
			<div className="video-header" style={{backgroundColor: "#faf4f4", padding: '1em', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', border: '3px solid #F4E7D0'}}>
				<div className="video-title manrope-font" style={{fontSize: '20px', color: '#000029', flex: '1', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left'}}>{video.short_title}</div>
				<Button className="export-button">Export</Button>
			</div>
			{/* <p className="video-content manrope-font" style={{paddingTop: '2em', textAlign: 'left', fontSize: '18px'}}>{subtitleText}</p> */}

			<p>

				debug:
				<br></br>
				{video.cdn_shorts_url}
				<br></br>
				{video.cdn_subtitle_url}			
			</p>
		

			

			
			</div>

		</div>
	);
};

export default ShortVideo;
