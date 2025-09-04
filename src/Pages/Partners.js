import React from "react";
import ARM from "../assets/partners/Picture1.png";
import Incore from "../assets/partners/Picture2.png";
import Azure from "../assets/partners/Picture3.png";
import TSMC from "../assets/partners/Picture5.jpg";
import FLEX from "../assets/partners/Picture6.png";
import Sanmina from "../assets/partners/Picture7.png";
import IVP from "../assets/partners/Picture8.png";
import GlobalFoundries from "../assets/partners/Picture9.png";
import Xilinx from "../assets/partners/Picture10.png";
import Cadence from "../assets/partners/Picture11.jpg";
import Synopsys from "../assets/partners/Picture12.jpg";
import Keysight from "../assets/partners/Picture13.png";

export default function Partners() {
  const partners = [
    { name: "ARM", img: ARM },
    { name: "Incore", img: Incore },
    { name: "Azure", img: Azure },
    { name: "TSMC", img: TSMC },
    { name: "Flex", img: FLEX },
    { name: "Sanmina", img: Sanmina },
    { name: "IVP", img: IVP },
    { name: "Global Foundries", img: GlobalFoundries },
    { name: "Xilinx", img: Xilinx },
    { name: "Cadence", img: Cadence },
    { name: "Synopsys", img: Synopsys },
    { name: "Keysight", img: Keysight },
  ];

  return (
    <div className="partners-container">
      <h2>Our Partnerships</h2>
      <div className="marquee">
        <div className="marquee-content">
          {partners.map((partner) => (
            <div key={partner.name} className="partner-logo">
              <img src={partner.img} alt={partner.name} />
            </div>
          ))}
          {/* duplicate for seamless looping */}
          {partners.map((partner) => (
            <div key={partner.name + "-dup"} className="partner-logo">
              <img src={partner.img} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
