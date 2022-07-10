import { CSSProperties, useState } from "react";

import valley from "../assets/valley.jpeg";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

const AuthPage = () => {
  const [hasAccount, setHasAccount] = useState(false);

  const backgroundImage = {
    backgroundImage: `url(${valley})`, // Here due to variable
  } as CSSProperties;

  return (
    <div style={{ ...backgroundImage, ...styles.backgroundImageStyle }}>
      <div style={styles.backgroundGradientStyle}>
        <div style={styles.formContainerStyle}>
          <div style={styles.titleStyle}>Pretty</div>

          {hasAccount ? (
            <LogInForm onHasNoAccount={() => setHasAccount(false)} />
          ) : (
            <SignUpForm onHasAccount={() => setHasAccount(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  backgroundImageStyle: {
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  } as CSSProperties,
  backgroundGradientStyle: {
    width: "100vw",
    height: "100%",
    overflowY: "scroll",
    // Built with https://cssgradient.io/
    background:
      "linear-gradient(66deg, rgb(40,43,54) 0%, rgb(40,43,54) 50%, rgba(40,43,54,0.8) 100%)",
  } as CSSProperties,
  formContainerStyle: {
    width: "100%",
    maxWidth: "650px",
    padding: "36px 72px",
  } as CSSProperties,
  titleStyle: {
    fontSize: "24px",
    fontFamily: "VisbyRoundCF-Heavy",
    letterSpacing: "0.5px",
    color: "white",
    paddingBottom: "11vw",
  } as CSSProperties,
};

export default AuthPage;
