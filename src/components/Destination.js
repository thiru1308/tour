import React from "react";
import "../components/DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Sigiriya, Matale"
        text="Sigiriya, a UNESCO World Heritage Site in Sri Lanka, is an ancient rock fortress and palace that holds tremendous historical and cultural significance. Built in the 5th century AD by King Kashyapa, it stands as a testament to the architectural brilliance of the past. With its magnificent lion-shaped entrance, Sigiriya served as a fortified stronghold and offered a strategic vantage point. The site is adorned with stunning frescoes depicting celestial maidens, showcasing the artistic achievements of the time. Climbing Sigiriya's steep stairs rewards visitors with a breathtaking view of the surrounding countryside, including water gardens and terraced landscapes. Today, Sigiriya continues to captivate visitors, preserving the island's rich cultural heritage. "
        img1="https://plus.unsplash.com/premium_photo-1666254114402-cd16bc302aea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1700599771609-8e235c52ae77?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Dutch Fort, Galle."
        text="The Galle Dutch Fort, located in Sri Lanka, is a captivating testament to the island's colonial past. Built by the Dutch in the 17th century, this UNESCO World Heritage Site stands as a well-preserved architectural marvel. The fort's sturdy ramparts, charming cobblestone streets, and elegant colonial-era buildings transport visitors back in time. Wandering through its narrow alleys, visitors can explore charming boutiques, art galleries, and quaint cafes. The fort also offers breathtaking views of the Indian Ocean, adding to its allure. With its rich history, picturesque setting, and vibrant atmosphere, the Galle Dutch Fort is a must-visit destination that immerses travelers in the unique blend of colonial and Sri Lankan heritage."
        img1="https://images.unsplash.com/flagged/photo-1567498975675-a3adf1574cb0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/flagged/photo-1567498573339-688686a4b5df?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default Destination;
