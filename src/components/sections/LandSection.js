const LandSection = ({ data }) => {
  return (
    <section className="max-w-full pt-9 pb-9 flex items-center">
      <div className="container">
        <div>
          <h2 className="text-2xl text-200 text-center pt-5 pb-5">
            {data.heading}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row-reverse">
          <div className="flex flex-1 justify-center items-center lg:justify-end mt-9 mb-9">
            <div className="max-w-lg">
              <img src={data.image.imageSrc} alt={data.image.imageAlt} />
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center max-w-md m-auto md:text-left whitespace-normal lg:justify-end">
            <ul>
              {data.text.map((text) => {
                return (
                  <li key={text.id} className="flex mb-5">
                    <div className="mr-4 text-200">
                      <i className="fas fa-dot-circle"></i>
                    </div>
                    <div>
                      <p>{text.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandSection;
