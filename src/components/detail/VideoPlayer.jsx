import { FaRegTimesCircle } from "react-icons/fa";

const VideoPlayer = ({ url, setShowTrailer }) => {
  document.body.style.overflow = "hidden";
  console.log(url);
  return (
    <div className="fixed top-0 left-0 min-h-screen w-full flex justify-center items-center z-50 hero-overlay bg-opacity-60 px-5">
      <iframe
        className="w-full max-w-4xl h-96"
        src={`https://www.youtube.com/embed/${url}`}
      ></iframe>
      <div className="absolute top-10 right-10">
        <FaRegTimesCircle
          className="w-12 h-12 cursor-pointer"
          onClick={() => {
            setShowTrailer(false);
            document.body.style.overflow = "visible";
          }}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
