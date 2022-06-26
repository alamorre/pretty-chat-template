import { CSSProperties } from "react";

import valley from "../assets/valley.jpeg";
import SignInForm from "./SignInForm";

const AuthPage = () => {
  const backgroundStyle = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "red",
    backgroundImage: `url(${valley})`, // Here due to variable
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  } as CSSProperties;

  return (
    <div style={backgroundStyle}>
      <div style={styles.backgroundCoverStyle}>
        <div style={styles.containerStyle}>
          <div style={styles.containerPaddingStyle}>
            <div style={styles.titleStyle}>Pretty</div>

            <div style={{ height: "11vw" }} />

            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  backgroundCoverStyle: {
    width: "100vw",
    height: "100vh",
    // Built with https://cssgradient.io/
    background:
      "linear-gradient(66deg, rgba(40,43,54,1) 0%, rgba(40,43,54,1) 50%, rgba(40,43,54,0.8) 100%)",
  } as CSSProperties,
  containerStyle: {
    width: "100%",
    maxWidth: "650px",
  } as CSSProperties,
  containerPaddingStyle: { padding: "36px 72px" } as CSSProperties,
  titleStyle: {
    fontSize: "24px",
    fontFamily: "VisbyRoundCF-Heavy",
    letterSpacing: "0.5px",
    color: "white",
  } as CSSProperties,
};

export default AuthPage;
