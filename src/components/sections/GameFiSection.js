const GameFiSection = ({data}) => {
  return (
    <section id="etfgamefi">
      <div>
        <h2 className="text-2xl text-200 text-center pt-5 pb-5">
          {data.heading}
        </h2>

        <div className="container flex">
          <p>
            {data.text1}
            {data.text2}
          </p>
          <img src={data.image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default GameFiSection;
