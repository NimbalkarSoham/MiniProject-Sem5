import React from "react";

const LandingPage = () => {
  return (
    <section className="w-full  flex-col">
      <div className="flex items-start">
        {" "}
        {/* Changed from items-center */}
        <h1 className="head_text text-center">
          AGRI<span className="custom_farm_style">FARM</span>
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
      <div className="flex justify-end">
  <div className="w-226 h-316 flex-shrink-0 rounded-r-40 bg-gradient-to-r from-transparent via-green-400 to-green-400 border border-gray-300">
    <div className="w-full h-full bg-cover bg-no-repeat bg-center bg-lightgray" style={{backgroundImage: 'linear-gradient(180deg, rgba(115, 205, 0, 0.00) 0%, rgba(10, 141, 15, 0.51) 100%), url(/farmer_hand.jpeg)'}}></div>
  </div>
  <div className="w-226 h-496 flex-shrink-0 rounded-r-0 bg-gradient-to-r from-transparent via-green-300 to-green-300 border border-gray-300 ml-2">
    <div className="w-full h-full bg-cover bg-no-repeat bg-center bg-lightgray" style={{backgroundImage: 'linear-gradient(180deg, rgba(115, 205, 0, 0.00) 0%, rgba(10, 141, 15, 0.26) 100%), url(/tractor.jpeg)', backgroundPosition: '-351.461px 0px', backgroundSize: '328.802% 100%'}}></div>
  </div>
  <div className="w-226 h-676 flex-shrink-0 rounded-l-40 bg-gradient-to-r from-transparent via-green-400 to-green-400 border border-gray-300 ml-2">
    <div className="w-full h-full bg-cover bg-no-repeat bg-center bg-lightgray" style={{backgroundImage: 'linear-gradient(180deg, rgba(115, 205, 0, 0.00) 0%, rgba(10, 141, 15, 0.46) 100%), url(/wheat.jpeg)'}}></div>
  </div>
</div>


      {/* <Feed /> */}
    </section>
  );
};

export default LandingPage;
