import AWS from "aws-sdk";

AWS.config.update({
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.ACCESS_KEY_SECRET,
});
const s3 = new AWS.S3();
const videosBucketName = "shorts.videos";
const subtitlesBucketName = "shorts.subtitles";

export async function fetchData() {
  console.log('test test test')
  const videoData = await s3.listObjectsV2({ Bucket: videosBucketName }).promise();
  const subtitleData = await s3.listObjectsV2({ Bucket: subtitlesBucketName }).promise();
  // const videovideoData = await s3.listObjectsV2({ Bucket: "shorts" }).promise();
  console.log('look inside here');
  console.log("video data promise here");
  console.log(videoData.Contents[0].Key);
  console.log("subtitle data promise here");
  const subtitleFileName = subtitleData.Contents[0].Key
  // console.log(subtitleFileName);
  // const videoSubtitle = s3.getSignedUrlPromise("getObject", {
  //   Bucket: subtitlesBucketName,
  //   Key: subtitleFileName,
  //   Expires: 60 * 30,
  // });
  // console.log(videoSubtitle)
  
  // console.log('data abv');
  // console.log(videovideoData);
  // console.log('video video video abv');
  // const resultPromises = data?.Contents?.map(async (content) => {
  //   const video = s3.getSignedUrlPromise("getObject", {
  //     Bucket: videosBucketName,
  //     Key: content.Key,
  //     Expires: 60 * 30,
  //   });
  //   const subtitleFilename = content.Key?.split(".")[0] + ".vtt";
    // const videoSubtitle = s3.getSignedUrlPromise("getObject", {
    //   Bucket: subtitlesBucketName,
    //   Key: subtitleFilename,
    //   Expires: 60 * 30,
    // });

  // console.log("video data promise here");
  // console.log(videoData);
  // console.log("subtitle data promise here");
  // console.log(subtitleData);
  // console.log('data abv');
//   if (resultPromises) {
//     const result = await Promise.all(resultPromises);
//     return result;
//   }
//   return [];
// }

function parseVTT(vttContent: string) {
  const subtitleEntries = vttContent.split("\n\n");

  const subtitlesData = subtitleEntries.map((entry) => {
    const lines = entry.split("\n");
    const textContent = lines.slice(1).join(" ");
    return textContent;
  });

//   return subtitlesData.join(" ");
}
}
