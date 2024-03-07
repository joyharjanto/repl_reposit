"use server";
import { fetchWrapper } from '../../src/lib/fetchHostname';

export default async function handler(req, res) {
    // This API route must be called with a POST request
    console.log("get shorts using getShort.js")
    if (req.method !== 'GET') {
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
    console.log('the access token here in getShorts.js', accessToken); 
    if (!accessToken) {
      return res.status(401).json({ error: "No access token provided." });
    }
    const video_id = "sc_KweabTRBA3H6JNTyNqyoi8/video/JT6JSFTf2Vy4zcbJdCdVWn.webm"
    // console.log("url in loading", url);
    console.log('video id in getShorts.js', video_id);
    
    try {
      const response = await fetchWrapper(`/api/videos/children?video_id=${video_id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
            // Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjM3OjVlOmEyOmExOjM2OmRlOmY0OmYyOmJlOjFhOjgxOmIwOjY0OjBhOjYwOmRlIiwidHlwIjoiSldUIn0.eyJhdWQiOltdLCJhenAiOiI3OTJhMmUzN2U4OWM0NmQxYWVkY2Q4ODZjNjJlZDAzMyIsImJpbGxpbmciOnsiaGFzX3BheW1lbnRfZGV0YWlscyI6ZmFsc2UsIm9yZ19lbnRpdGxlbWVudHMiOm51bGwsInBsYW4iOnsiYWdyZWVtZW50X2lkIjpudWxsLCJjb2RlIjpudWxsLCJjcmVhdGVkX29uIjpudWxsLCJoYXNfdHJpYWxfcGVyaW9kIjpudWxsLCJpbnZvaWNlX2R1ZV9vbiI6bnVsbCwibmFtZSI6bnVsbCwicGxhbl9jaGFyZ2VfdHlwZSI6bnVsbCwidHJpYWxfZXhwaXJlc19vbiI6bnVsbH19LCJleHAiOjE3MDk2NzkyNTMsImlhdCI6MTcwOTU5Mjg1MywiaXNzIjoiaHR0cHM6Ly9zcGFjZWNsaXBzLmtpbmRlLmNvbSIsImp0aSI6IjkzZGZhNzgyLWI5NGQtNGM1Ni1iMjlhLTk3NWM2NGUxMzUyNyIsIm9yZ19jb2RlIjoib3JnXzAxNzVlZDEyNmE0IiwicGVybWlzc2lvbnMiOltdLCJzY3AiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwib2ZmbGluZSJdLCJzdWIiOiJrcF8yNTc1OTQ2YTJhYTA0YjVmYTU4NzFkNjE1NTc4OWZjMSJ9.nLRa3QeQq4hMmo77McGxo_6nyOJ_RnEgs-ipEdNSD51ecu_YszYXPzf0zMJQtS_z9AjN97T5FaApQy_eexsTAJ8AQFKIFu3W0mVoDX3zphO3Y__KgPA5y1Jpx74ZJfmHRv4jFI8Z-hXU99JxVAFjkH6OfB_Y9IbqGQAwOyXzGcyRB3DzbB4B5VINk-Gji_w5kiFdzUXdJ3xK1P5wUFu-CYgtBToz4q2jBfG1m4AJKOXoG3Jjoi9k6-gmsL6-prHlPAu9Y7-vPwHDhLFMWl-Ygh6RiDgz3PpcVojX9DYp4hsyA_FU7v1HX_XfOkhQYszxvJ0vtQR-T-jUDHhvkJsDcw'

          },
      });

      // const response = await fetchWrapper("/api/videos/create", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     // Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjM3OjVlOmEyOmExOjM2OmRlOmY0OmYyOmJlOjFhOjgxOmIwOjY0OjBhOjYwOmRlIiwidHlwIjoiSldUIn0.eyJhdWQiOltdLCJhenAiOiI3OTJhMmUzN2U4OWM0NmQxYWVkY2Q4ODZjNjJlZDAzMyIsImJpbGxpbmciOnsiaGFzX3BheW1lbnRfZGV0YWlscyI6ZmFsc2UsIm9yZ19lbnRpdGxlbWVudHMiOm51bGwsInBsYW4iOnsiYWdyZWVtZW50X2lkIjpudWxsLCJjb2RlIjpudWxsLCJjcmVhdGVkX29uIjpudWxsLCJoYXNfdHJpYWxfcGVyaW9kIjpudWxsLCJpbnZvaWNlX2R1ZV9vbiI6bnVsbCwibmFtZSI6bnVsbCwicGxhbl9jaGFyZ2VfdHlwZSI6bnVsbCwidHJpYWxfZXhwaXJlc19vbiI6bnVsbH19LCJleHAiOjE3MDk2NzkyNTMsImlhdCI6MTcwOTU5Mjg1MywiaXNzIjoiaHR0cHM6Ly9zcGFjZWNsaXBzLmtpbmRlLmNvbSIsImp0aSI6IjkzZGZhNzgyLWI5NGQtNGM1Ni1iMjlhLTk3NWM2NGUxMzUyNyIsIm9yZ19jb2RlIjoib3JnXzAxNzVlZDEyNmE0IiwicGVybWlzc2lvbnMiOltdLCJzY3AiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwib2ZmbGluZSJdLCJzdWIiOiJrcF8yNTc1OTQ2YTJhYTA0YjVmYTU4NzFkNjE1NTc4OWZjMSJ9.nLRa3QeQq4hMmo77McGxo_6nyOJ_RnEgs-ipEdNSD51ecu_YszYXPzf0zMJQtS_z9AjN97T5FaApQy_eexsTAJ8AQFKIFu3W0mVoDX3zphO3Y__KgPA5y1Jpx74ZJfmHRv4jFI8Z-hXU99JxVAFjkH6OfB_Y9IbqGQAwOyXzGcyRB3DzbB4B5VINk-Gji_w5kiFdzUXdJ3xK1P5wUFu-CYgtBToz4q2jBfG1m4AJKOXoG3Jjoi9k6-gmsL6-prHlPAu9Y7-vPwHDhLFMWl-Ygh6RiDgz3PpcVojX9DYp4hsyA_FU7v1HX_XfOkhQYszxvJ0vtQR-T-jUDHhvkJsDcw'
  
      //     Authorization: `Bearer ${accessToken}`,
      //   },
      //   body: JSON.stringify({ video_url: url }),
      // });
      if (!response.ok) {
        throw new Error('Shorts retrieval failed');
      } 
    
      const data = await response.json();
      return res.status(200).json(data);
     }catch(error){
      return res.status(500).json({error:"failure in postVideo.js file"})
    }
  }
            // Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjM3OjVlOmEyOmExOjM2OmRlOmY0OmYyOmJlOjFhOjgxOmIwOjY0OjBhOjYwOmRlIiwidHlwIjoiSldUIn0.eyJhdWQiOltdLCJhenAiOiI3OTJhMmUzN2U4OWM0NmQxYWVkY2Q4ODZjNjJlZDAzMyIsImJpbGxpbmciOnsiaGFzX3BheW1lbnRfZGV0YWlscyI6ZmFsc2UsIm9yZ19lbnRpdGxlbWVudHMiOm51bGwsInBsYW4iOnsiYWdyZWVtZW50X2lkIjpudWxsLCJjb2RlIjpudWxsLCJjcmVhdGVkX29uIjpudWxsLCJoYXNfdHJpYWxfcGVyaW9kIjpudWxsLCJpbnZvaWNlX2R1ZV9vbiI6bnVsbCwibmFtZSI6bnVsbCwicGxhbl9jaGFyZ2VfdHlwZSI6bnVsbCwidHJpYWxfZXhwaXJlc19vbiI6bnVsbH19LCJleHAiOjE3MDk2NzkyNTMsImlhdCI6MTcwOTU5Mjg1MywiaXNzIjoiaHR0cHM6Ly9zcGFjZWNsaXBzLmtpbmRlLmNvbSIsImp0aSI6IjkzZGZhNzgyLWI5NGQtNGM1Ni1iMjlhLTk3NWM2NGUxMzUyNyIsIm9yZ19jb2RlIjoib3JnXzAxNzVlZDEyNmE0IiwicGVybWlzc2lvbnMiOltdLCJzY3AiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwib2ZmbGluZSJdLCJzdWIiOiJrcF8yNTc1OTQ2YTJhYTA0YjVmYTU4NzFkNjE1NTc4OWZjMSJ9.nLRa3QeQq4hMmo77McGxo_6nyOJ_RnEgs-ipEdNSD51ecu_YszYXPzf0zMJQtS_z9AjN97T5FaApQy_eexsTAJ8AQFKIFu3W0mVoDX3zphO3Y__KgPA5y1Jpx74ZJfmHRv4jFI8Z-hXU99JxVAFjkH6OfB_Y9IbqGQAwOyXzGcyRB3DzbB4B5VINk-Gji_w5kiFdzUXdJ3xK1P5wUFu-CYgtBToz4q2jBfG1m4AJKOXoG3Jjoi9k6-gmsL6-prHlPAu9Y7-vPwHDhLFMWl-Ygh6RiDgz3PpcVojX9DYp4hsyA_FU7v1HX_XfOkhQYszxvJ0vtQR-T-jUDHhvkJsDcw'

  
  