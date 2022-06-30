import { CSSProperties } from "react";

import valley from "../assets/valley.jpeg";

const FeedBackground = () => {
  const backgroundStyle = {
    width: "50vw",
    height: "100vh",
    backgroundImage: `url(${valley})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  } as CSSProperties;

  const coverStyle = {
    width: "50vw",
    height: "100vh",
    background:
      "radial-gradient(circle, rgba(62,64,75,0.8029805672268908) 0%, rgba(62,64,75,0.9094231442577031) 50%, rgba(62,64,75,1) 100%)",
  };

  return (
    <div style={backgroundStyle}>
      <div style={coverStyle} />
    </div>
  );
};

export default FeedBackground;
