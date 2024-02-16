import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Brand from "../Brand/Brand";
import Flight_Deal from "../Service/Flight_Deal";
import Trending_deal from "../Service/Trending_deal";
import Rent_vehichle from "../Service/Rent_vehichle";
import Collaboration_Company from "../Service/Collaboration_Company";
import Mail from "../Service/Mail";
import Services from "../Service/Services";
import Nav_bar from "../Navigation/Nav_bar";
import Our_Team from "./Our_Team";
import FAQs from "./FAQs";

const Home = ({ shownav, setShownav, navigate, darunnur }) => {
  const [flightDetails, setFlightDetails] = useState(true);
  const [hotelDetails, setHotelDetails] = useState(true);

  return (
    <div>
      <Nav_bar
        setHotelDetails={setHotelDetails}
        setFlightDetails={setFlightDetails}
        shownav={shownav}
        setShownav={setShownav}
        darunnur={darunnur}
      />

      <Brand
        flightDetails={flightDetails}
        setFlightDetails={setFlightDetails}
        hotelDetails={hotelDetails}
        setHotelDetails={setHotelDetails}
      />
      <Services navigate={navigate} />
      <Flight_Deal />
      <Trending_deal />
      <Rent_vehichle />
      <Collaboration_Company />
      <FAQs />
      <Our_Team />

      <Mail />
      <Footer navigate={navigate} />
    </div>
  );
};

export default Home;
