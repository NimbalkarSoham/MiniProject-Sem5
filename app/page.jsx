import Feed from "@components/Feed";
import React from "react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <section className="w-full  flex-col">
      <div className="flex flex-row block justify-between ">
        <div className="col1">
          <div className="flex items-start">
            {" "}
            {/* Changed from items-center */}
            <h1 className="head_text text-center">
              <span className="text-green1">AGRI</span><span className="custom_farm_style">FARM</span>
            </h1>
          </div>
          <p className="message1">
            Empowering farmers with Morden Ecommerce Solution
          </p>
          <p className="message2">
            Explore, Transact and Thrive in Agriculture:Discover Quality
            <br />
            tools, Accurate Prediction and Growing Community.
          </p>
          <button type="button" className="explore_btn">
            Explore Now!
          </button>
        </div>
        <div className="col2 mx-10">
          <Image src={"/Hero.png"}
            width={500}
            height={500} />
        </div>
      </div>


      <div id="feed">
        <Feed />
      </div>

    </section>
  );
};

export default LandingPage;
