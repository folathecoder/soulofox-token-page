import React from "react";

const VideoSection = () => {
  return (
    <section className="max-w-full">
      <div className="container">
        <div>
          <h2 className="text-2xl text-200 text-center pt-5 pb-5">
            Trailer Video
          </h2>
        </div>
        <div className="flex items-center justify-center pt-9 pb-9">
          <div className="border-4 border-200">
            <iframe
              width="760"
              height="515"
              src="https://www.youtube.com/embed/nPy6Qb5exko"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
