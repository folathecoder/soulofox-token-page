import React from "react";

const TeamSection = ({ data }) => {
  return (
    <section className="max-w-full pt-9 pb-9 flex items-center">
      <div className="container">
        <div>
          <h2 className="text-2xl text-200 text-center pt-5 pb-9">
            {data.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-auto gap-4  md:grid-cols-3">
          {data.team.map((team) => {
            return (
              <div
                key={team.id}
                className="h-72 flex flex-col justify-center items-center pt-9 pb-9"
              >
                <div>
                  <img src={team.image.imageSrc} alt={team.image.imageAlt} />
                </div>
                <h4 className="text-500 pt-2">{team.name}</h4>
                <h5 className="text-300">{team.role}</h5>
                <p className="text-300">{team.location}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
