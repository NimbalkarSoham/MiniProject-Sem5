// pages/schemes.js
import React from "react";

const schemesData = [
  {
    name: "Chief Minister Solar Agriculture Pump Scheme",
    description: "Provides financial assistance to farmers for installing solar pumps for irrigation, reducing dependence on diesel and electricity.",
    portalLink: "https://krishijagran.com/agriculture-world/solar-pump-yojana-online-registration-process-eligibility-and-subsidy-structure-explained/",
  },
  {
    name: "Agriculture Mechanization Scheme",
    description: "Promotes adoption of modern agricultural machinery to improve efficiency and productivity.",
    portalLink: "https://shasanyojana.com/maharashtra-krushi-yantrikikaran-yojana/",
  },
  {
    name: "Polyhouse Subsidy Scheme",
    description: "Offers financial assistance to farmers for setting up polyhouses, enabling controlled cultivation and higher yields.",
    portalLink: "https://krishi.maharashtra.gov.in/",
  },
  {
    name: "PM Pranam Scheme",
    description: "Provides financial support to physically challenged farmers for agricultural activities and livelihood improvement.",
    portalLink: "https://sjsa.maharashtra.gov.in/en",
  },
  {
    name: "Namo Shetkari Maha Samman Nidhi Yojana",
    description: "Provides pension to farmers above 60 years of age, ensuring financial security and dignity.",
    portalLink: "https://dol.maharashtra.gov.in/government_scheme",
  },
  {
    name: "National Agricultural Development Scheme",
    description: "Aims to improve agricultural infrastructure, technology adoption, and market access for sustainable development.",
    portalLink: "http://www.agricoop.nic.in/",
  },
  {
    name: "Magel Tyala Shet tale Shetkari Yojana",
    description: "Provides land ownership rights to landless farmers living on agricultural land for generations.",
    portalLink: "http://egs.mahaonline.gov.in/",
  },
  {
    name: "Magel Tyala Vihir Yojana",
    description: "Provides financial assistance to landless farmers for digging wells on allotted land, ensuring access to irrigation water.",
    portalLink: "http://egs.mahaonline.gov.in/",
  },
  {
    name: "Shetkari Mal Tarun Yojana",
    description: "Provides loan waiver or restructuring to farmers facing financial hardship due to crop failure or natural calamities.",
    portalLink: "https://mjpsky.maharashtra.gov.in/",
  },
  {
    name: "Pradhan Mantri Fasal Bima Yojana",
    description: "Provides financial protection to farmers from crop losses due to unforeseen events like natural calamities, pests, and diseases.",
    portalLink: "https://pmfby.gov.in/",
  },
  {
    name: "Pradhan Mantri Krishi Sinchai Yojana",
    description: "Aims to improve irrigation infrastructure and access to water for sustainable agriculture.",
    portalLink: "https://pmksy.gov.in/",
  },
  {
    name: "Solar Krishi Vahini Yojana",
    description: "Promotes adoption of solar power for agricultural applications, reducing dependence on fossil fuels and greenhouse gas emissions.",
    portalLink: "https://mahadiscom.in/solar-mskvy/",
  },
  {
    name: "Pradhan Mantri Kisan Sampada Yojana",
    description: "Promotes agri-business development through creation of infrastructure and value addition for agricultural produce.",
    portalLink: "https://www.mofpi.gov.in/Schemes/pradhan-mantri-kisan-sampada-yojana",
  },
  {
    name: "Kisan Credit Card Scheme",
    description: "Provides easy access to credit for farmers to meet agricultural expenses, promoting self-reliance and investments.",
    portalLink: "https://www.myscheme.gov.in/schemes/kcc",
  },
];


const Schemes = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Government Schemes for Farmers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {schemesData.map((scheme, index) => (
            <div key={index} className="bg-white rounded-md p-6 shadow-md transition duration-300 hover:border-green-500 hover:shadow-lg">
              <a href={scheme.portalLink} target="_blank" rel="noopener noreferrer">
                <h3 style={{ color: "#04470d" }} className="text-xl font-bold mb-2">{scheme.name}</h3>
              </a>
              <p className="text-sm">{scheme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  
      
};

export default Schemes;
