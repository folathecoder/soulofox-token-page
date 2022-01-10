const GameProgressSelection = ({ data }) => {
  return (
    <section>
      <div>
        <h2 className="text-2xl text-200 text-center pt-5 pb-5">
          {data.heading}
        </h2>

        <div className="container p-2">
          <p>{data.subHeading}</p>
        </div>

        <div className="container flex">
          <div className="flex justify-around">
            <img src={data.image1} alt="" />
            <img src={data.image2} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="flex justify-around p-2">
            <p className="">{data.text1}</p>
            <p className="">{data.text2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameProgressSelection;
