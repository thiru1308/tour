import TripData from "./TripData";
import "./TripStyles.css";
import React from "react";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image="https://images.unsplash.com/photo-1591410448119-1b49cbb3b83e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Trip to Jaffna"
          text="A trip to Jaffna, located in the northern part of Sri Lanka, offers a unique and enriching experience. Steeped in history and cultural heritage, Jaffna showcases a vibrant blend of Tamil traditions and colonial influences. Visitors can explore ancient temples, such as the Nallur Kovil, renowned for its intricate architecture and religious significance. The Jaffna Fort, built by the Portuguese and later expanded by the Dutch, stands as a testament to the region's colonial past. The city's bustling markets and vibrant street food scene offer a tantalizing taste of local flavors. From its pristine beaches to its welcoming locals, Jaffna presents a captivating destination that immerses travelers in its rich tapestry of sights, sounds, and flavors."
        />
        <TripData
          image="https://images.unsplash.com/photo-1608979449753-5d0d91c892e7?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Trip to Colombo"
          text="Discover the vibrant city of Colombo, the capital of Sri Lanka, on an exciting journey that combines culture, history, and urban energy. This bustling metropolis offers a fascinating blend of old-world charm and modernity. Explore iconic landmarks like the Gangaramaya Temple and the Colombo National Museum to delve into the city's rich heritage. Immerse yourself in the vibrant atmosphere of the Pettah Market, where colorful sights, aromatic spices, and bustling streets create a sensory feast. Colombo's beachfront areas, such as Galle Face Green and Mount Lavinia Beach, provide a serene escape. With its diverse dining scene, trendy nightlife, and captivating energy, a trip to Colombo is a compact yet unforgettable experience."
        />
        <TripData
          image="https://images.unsplash.com/photo-1562698013-ac13558052cd?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Trip to Kandy"
          text="A trip to Kandy, nestled in the heart of Sri Lanka, offers a captivating experience steeped in history and natural beauty. Known as the cultural capital of the country, Kandy boasts a rich heritage and is home to the sacred Temple of the Tooth Relic. Visitors can witness traditional rituals and immerse themselves in the spiritual ambiance of this revered Buddhist site. The city's picturesque landscapes, including the serene Kandy Lake and lush botanical gardens, provide a serene escape. Exploring the bustling streets, vibrant markets, and sampling delectable local cuisine add to the charm of a visit to Kandy, leaving travelers with cherished memories of this cultural gem."
        />
      </div>
    </div>
  );
};

export default Trip;
