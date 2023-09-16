import ReactPlayer from "react-player";
import video from "../asset/videos/Bnp_Lomba.mp4";

export default function AboutVideo() {
  return (
    <div className="text-center w-96 mx-auto md:w-2/3">
      <h1 className="py-9 font-Poppins tracking-widest font-bold">Video</h1>
      <div className="mx-auto">
        <ReactPlayer url={video} controls width="640" height="480" autoplay />
      </div>
    </div>
  );
}
