// pages/api/postVideo.js
"use server";
import { fetchWrapper } from '../../src/lib/fetchHostname';


export default async function handler(req, res) {
  console.log("post video handler is starting")

  // This API route must be called with a POST request
  console.log("postVideo.js is starting")
  if (req.method !== 'POST') {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const cookieHeader = req.headers.cookie;

  const cookies = cookieHeader
    ? cookieHeader.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=').map(part => part.trim());
        acc[key] = decodeURIComponent(value); // Ensure decoding of the cookie value
        return acc;
      }, {})
    : {};

  const accessToken = cookies['access_token'];
  // console.log('access token here', accessToken);
  if (!accessToken) {
    return res.status(401).json({ error: "No access token provided." });
  }
  const url = req.body.video_url;
  console.log("url inside postVideo.js", url)
  try {
    console.log("using the video/create wrapper")
    const response = await fetchWrapper("/api/videos/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ video_url: url }),
    });
    console.log("response", response)
    console.log("/api/videos/create done")
    if (!response.ok) {
      throw new Error('Video creation failed.');
    } 
    console.log("getting response from video/create")
    const data = await response.json();
    console.log("response generated from video/create")
    return res.status(200).json(data);
   }catch(error){
    console.log('the error is here')
    console.log(error)

    return res.status(500).json({error:error})
  }
}

