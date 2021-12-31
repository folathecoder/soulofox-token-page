const RoadMapSection = () => {
  return (
    <section>
      <div>
        <h2 className="text-2xl text-200 text-center pt-5 pb-5">RoadMap</h2>
      </div>

      <div className="container grid grid-cols-3 gap-4 ">
        <div className="">
          <div className="flex flex-col justify-center items-center ">
            <div className="text-center ">
              2022 Q1
              <p className="  ">
                Merchandise shop will be opened. Land ownership feature will be
                released. Game beta version will be released.
              </p>
              2021 OCT
              <p className=" ">
                2,222 Foxian NFT will be released. Community wallet will be
                setup for our foxians members.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          image goes here <img className="" src="" alt="" />
        </div>
        <div className="">
          
          <div className="flex flex-col justify-center items-center ">
            <div className="text-center ">
              2022 Q2
              <p className="  ">
                Full game released with play to earn feature.
              </p>
              2021 Q4
              <p className=" ">
                FoxyCoin token will be released and NFT owners will start
                receiving token by holding the NFTs. Staking Pool will be
                launched.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;
