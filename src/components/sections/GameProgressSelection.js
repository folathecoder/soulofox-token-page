const GameProgressSelection = ({data}) => {
  return (
    <section>
      <div>
        <h2 className="text-2xl text-200 text-center pt-5 pb-5">
          {data.heading}
        </h2>

        <div className="container">
          <p>{data.subHeading}</p>
        </div>

        <div className="container flex">
          <div className="flex">
            <img src={data.image1} alt="" />
            <img src={data.image2} alt="" />
          </div>
          <div className="flex">
            <p>{data.text1}</p>
            <p>{data.text2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameProgressSelection;
