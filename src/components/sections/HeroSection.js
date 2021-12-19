import LinkButton from "../sllices/LinkButton";

const HeroSection = ({ data }) => {
  return (
    <section className="max-w-full flex items-center pt-6 pb-6 md:h-screen">
      <div className="container flex flex-col-reverse justify-center md:flex-row">
        <div className="flex flex-1 justify-center md:justify-start">
          <div className="flex flex-col justify-center text-center pt-5 pb-5 md:text-left">
            <h1 className="text-2xl text-200 pb-3">{data.heading}</h1>
            <p className="pb-3 max-w-md">{data.text}</p>
            <LinkButton link={data.button.link}>{data.button.text}</LinkButton>
          </div>
        </div>
        <div className="flex justify-center flex-1 md:justify-end">
          <div>
            <img src={data.image.imageSrc} alt={data.image.imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
