import React, { useEffect, useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";

function VideoContainer({ src }) {
  const [isLoadedVideo, setIsLoadedVideo] = useState(false);

  return (
    <div className="w-full flex justify-center items-center mt-16 ">
      {!isLoadedVideo && (
        <div className="preloader max-sm:w-full w-1/2  aspect-video bg-zinc-800 flex justify-center items-center ">
          <BiLoaderAlt size={30} className="animate-spin" />
        </div>
      )}

      <video
        autoPlay
        muted
        onLoadedMetadata={() => {
          setIsLoadedVideo(true);
        }}
        className={`${
          isLoadedVideo ? "block" : "hidden"
        } max-sm:w-full w-1/2 aspect-video border-2 border-white`}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support video tag.
      </video>
    </div>
  );
}

export default VideoContainer;
