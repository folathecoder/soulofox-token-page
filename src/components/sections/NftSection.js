import React from "react";

const NftSection = () => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <section>
      <div>
        <h2 className="text-2xl text-200 text-center pt-5 pb-5">NFTS</h2>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full">
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
                SouloFox NFT
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
                Community NFT
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    3dum distinctio ea voluptatibus qui quod obcaecati eius
                    minima officiis assumenda dolorum minus. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Perspiciatis error
                    quia numquam dolore vitae fuga nulla dicta, dum distinctio
                    ea voluptatibus qui quod obcaecati eius minima officiis
                    assumenda dolorum minus.
                    <br />
                    <br /> Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Perspiciatis error quia numquam dolore vitae fuga
                    nulla dicta, dum ddum distinctio ea istinctio ea
                    voluptatibus qui quod obcaecati eius minima officiis
                    assumenda dolorum minus.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis error quia numquam dolore vitae fuga nulla
                    dicta, dum distinctio ea voluptatibus qui quod obcaecati
                    eius minima officiis assumenda dolorum minus.
                    <br />
                    <br />
                    dum distinctio ea voluptatibus qui quod obcaecati eius
                    minima officiis assumenda dolorum minus.re vitae fuga nulla
                    dicta, dum distinctio ea voluptatibus qui quod obcaecati
                    eius minima officiis assumenda dolorum minus.
                  </p>
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
