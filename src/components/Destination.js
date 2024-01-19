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
        heading="Lorem ipsum dolor sit amet."
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            minima ut tempora corrupti earum autem illo vel, debitis
            consequuntur fugit dignissimos dolorem excepturi praesentium
            aspernatur. Ipsam, eum? Necessitatibus asperiores voluptatibus
            maxime ex ut in accusantium iure! Numquam veritatis omnis tempora,
            excepturi error voluptatibus aliquid recusandae quos illum fugit vel
            enim consequatur odit nobis necessitatibus ipsum consectetur ipsa
            magnam. Nam tempore qui, dolorem reprehenderit consequatur ab
            asperiores eos adipisci ut atque maiores repellat quae consectetur?
            Dolor doloribus odit perspiciatis, voluptas nemo assumenda labore
            impedit. Iste, cum velit ipsum fuga inventore ea repellendus
            consequatur, maxime pariatur sequi qui, quibusdam adipisci iusto
            animi."
        img1="https://images.unsplash.com/photo-1675784227496-9cf5b43e29d3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1685835084456-0d6fdbfabd8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Lorem ipsum dolor sit amet."
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            minima ut tempora corrupti earum autem illo vel, debitis
            consequuntur fugit dignissimos dolorem excepturi praesentium
            aspernatur. Ipsam, eum? Necessitatibus asperiores voluptatibus
            maxime ex ut in accusantium iure! Numquam veritatis omnis tempora,
            excepturi error voluptatibus aliquid recusandae quos illum fugit vel
            enim consequatur odit nobis necessitatibus ipsum consectetur ipsa
            magnam. Nam tempore qui, dolorem reprehenderit consequatur ab
            asperiores eos adipisci ut atque maiores repellat quae consectetur?
            Dolor doloribus odit perspiciatis, voluptas nemo assumenda labore
            impedit. Iste, cum velit ipsum fuga inventore ea repellendus
            consequatur, maxime pariatur sequi qui, quibusdam adipisci iusto
            animi."
        img1="https://images.unsplash.com/photo-1675784227496-9cf5b43e29d3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1685835084456-0d6fdbfabd8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default Destination;
