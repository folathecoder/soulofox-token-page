import React from "react";

const NftSection = ({ data }) => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <section>
      <div>
        <h2 className="text-2xl text-200 text-center pt-5 pb-5">
          {data.heading}
        </h2>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full container">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 pl-10 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1 ? "text-white bg-200" : "text-black bg-300")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {data.souloButton.text}
              </a>
            </li>
            <li className="-mb-px pr-10 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2 ? "text-white bg-200" : "text-black bg-300")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                {data.communityButton.text}
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space pl-6">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className=" max-w-2xl  md:text-left  whitespace-normal pt-5 flex">
                    <ul>
                      {data.souloText.map((text) => {
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
                    <img
                      src={data.image.imageSrc}
                      alt=""
                      srcset=""
                      className=""
                    />
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className=" max-w-2xl  md:text-left  whitespace-normal pt-5 flex">
                    <ul>
                      {data.communityText.map((text) => {
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
                    <img src={data.image2.imageSrc} alt="" srcset="" className=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NftSection;
