"use client";

import { useEffect, useState } from "react";

const parseVTT = (vttContent: string) => {
  const subtitleEntries = vttContent.split("\n\n");

  const subtitlesData = subtitleEntries.map((entry) => {
    const lines = entry.split("\n");
    const textContent = lines.slice(1).join(" ");
    return textContent;
  });

  return subtitlesData;
};

const Transcript = ({ src }: { src: string }) => {
  const [subtitles, setSubtitles] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(src);
      const data = await res.text();
      const subtitleData = parseVTT(data);
      setSubtitles(subtitleData);
    };
    fetchData();
  }, []);
  return <p>{subtitles.join(" ")}</p>;
};

export default Transcript;
