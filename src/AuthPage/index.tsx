import { CSSProperties, useState } from "react";

import valley from "../assets/valley.jpeg";
import SignInForm from "./SignUpForm";
import LogInForm from "./LogInForm";

const AuthPage = () => {
  const [hasAccount, setHasAccount] = useState(false);

  const backgroundStyle = {
    width: "100vw",
    height: "100vh",
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

            {hasAccount ? (
              <LogInForm onSignUp={() => setHasAccount(false)} />
            ) : (
              <SignInForm onLogIn={() => setHasAccount(true)} />
            )}
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
      "linear-gradient(66deg, rgb(40,43,54) 0%, rgb(40,43,54) 50%, rgba(40,43,54,0.8) 100%)",
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
