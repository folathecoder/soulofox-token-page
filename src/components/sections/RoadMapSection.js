

const RoadMapSection = ({ data }) => {
  
  const rdmap = "https://i.imgur.com/wHExAln.png";

  return (
    <section>
      <div>
        <h2 className="text-2xl text-200 text-center pt-5 pb-5">RoadMap</h2>
      </div>

      <div
        className="container grid grid-cols-3 gap-4"
        style={{
          backgroundImage: `url(${rdmap})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "70%",
        }}
      >
        <div className="">
          <div className="flex flex-col justify-center items-center ">
            <div className="text-center ">
              2022 Q1
              <p className="m-2 mb-10">{data.text[0].text1}</p>
              2021 OCT
              <p className="m-2">{data.text[1].text2}</p>
            </div>
          </div>
        </div>
        <div className="">
          {/* <img className="" src={data.imageSrc} alt="" /> */}
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center ">
            <div className="text-center ">
              2022 Q2
              <p className="m-2 mb-10">{data.text[2].text3}</p>
              2021 Q4
              <p className="m-2">{data.text[3].text4}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;
