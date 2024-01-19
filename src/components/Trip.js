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
          heading="trip to jaffna"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deserunt obcaecati tempora adipisci maxime voluptates illum exercitationem ad nobis consectetur inventore, aliquid accusantium vero sunt saepe distinctio. Perferendis, repudiandae est. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deserunt obcaecati tempora adipisci maxime voluptates illum exercitationem ad nobis consectetur inventore, aliquid accusantium vero sunt saepe distinctio. Perferendis, repudiandae est."
        />
        <TripData
          image="https://images.unsplash.com/photo-1546656495-fc838de15e5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="trip to Colombo"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deserunt obcaecati tempora adipisci maxime voluptates illum exercitationem ad nobis consectetur inventore, aliquid accusantium vero sunt saepe distinctio. Perferendis, repudiandae est. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deserunt obcaecati tempora adipisci maxime voluptates illum exercitationem ad nobis consectetur inventore, aliquid accusantium vero sunt saepe distinctio. Perferendis, repudiandae est."
        />
        <TripData
          image="https://images.unsplash.com/photo-1562698013-ac13558052cd?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="trip to Kandy"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deserunt obcaecati tempora adipisci maxime voluptates illum exercitationem ad nobis consectetur inventore, aliquid accusantium vero sunt saepe distinctio. Perferendis, repudiandae est. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deserunt obcaecati tempora adipisci maxime voluptates illum exercitationem ad nobis consectetur inventore, aliquid accusantium vero sunt saepe distinctio. Perferendis, repudiandae est."
        />
      </div>
    </div>
  );
};

export default Trip;
