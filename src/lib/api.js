import { fetchWrapper } from "../lib/fetchHostname";
// Assuming cookies utility is correctly implemented or imported from a third-party library
import { cookies } from "next/headers";

export const postVideo = async (url) => {
  console.log("post video")
  const response = {
    status: 'success',
    message: 'Video successfully posted',
    videoId: '12345', // Simulate a unique identifier for the posted video
    // Add any additional data that your real response would include
  };

  // Return the simulated response data as a JSON string
  return response;
  // return JSON.stringify(response); // Placeholder, you'd typically return res.json();
};

// export const postVideo = async (url) => {
//   const accessToken = cookies().get("access_token")?.value;

//   const res = await fetchWrapper("/api/videos/create", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${accessToken}`,
//     },
//     body: JSON.stringify({ video_url: url }),
//   });  
//   return JSON.stringify(res); // Placeholder, you'd typically return res.json();
// };
