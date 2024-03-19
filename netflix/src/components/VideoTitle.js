import { CiCircleInfo, CiPlay1 } from "react-icons/ci";

function VideoTitle() {
  return (
    <div className="w-screen aspect-video absolute text-white pt-[18%] p-12">
      <h1 className="text-3xl font-bold">Netflix</h1>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,
      </p>
      <div className="flex mt-8">
        <button className="flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80">
          <CiPlay1 size="24px" />
          <span className="ml-1">Play</span>
        </button>
        <button className="flex mx-3 opacity-70 items-center px-6 py-2 bg-white text-black rounded-md ">
          <CiCircleInfo size="24px" />
          <span className="ml-1">Watch more</span>
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
