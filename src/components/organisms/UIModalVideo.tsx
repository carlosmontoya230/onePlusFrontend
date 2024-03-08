import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function UIModalVideo({ open, setOpen, site, videoKey }: UIModalVideoProps) {
  const [urlVideo, setUrlVideo] = useState<string>("");

  useEffect(() => {
    if (videoKey && site) {
      switch (site) {
        case "YouTube":
          console.log(`https://youtu.be/${videoKey}`);
          setUrlVideo(`https://youtu.be/${videoKey}`);
          break;
        case "Vimeo":
          console.log(`https://vimeo.com/${videoKey}`);
          setUrlVideo(`https://vimeo.com/${videoKey}`);
          break;
        default:
          break;
      }
    }
  }, [videoKey, site]);

  return (
    <div className="z-20 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button
            className="text-white hover:text-white"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                fill="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4">
          {urlVideo !== "" && (
            <ReactPlayer
              url={urlVideo}
              width={900}
              height={500}
              controls
              playing={open}
            />
          )}
        </div>
      </div>
    </div>
  );
}

interface UIModalVideoProps {
  open: boolean;
  setOpen: (e: boolean) => void;
  site: string;
  videoKey: string;
}

export default UIModalVideo;
