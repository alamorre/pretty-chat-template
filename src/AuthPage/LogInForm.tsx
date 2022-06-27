import { useState, CSSProperties, useContext } from "react";

import axios from "axios";

import TextInput from "../components/TextInput";
import Button from "../components/Button";

import { Context, User } from "../hooks/context";

const PRIVATE_KEY: string = process.env.REACT_APP_PROJECT_KEY
  ? process.env.REACT_APP_PROJECT_KEY
  : "";

interface LogInFormProps {
  onSignUp: () => void;
}

const LogInForm = (props: LogInFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(Context);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const headers = {
      "Private-Key": PRIVATE_KEY,
      "User-Name": email,
      "User-Secret": password,
    };

    axios
      .get("https://api.chatengine.io/users/me/", {
        headers,
      })
      .then((r) => {
        if (r.status === 200) {
          const user: User = {
            first_name: r.data.first_name,
            last_name: r.data.last_name,
            email: email,
            username: email,
            secret: password,
          };
          setUser(user);
        }
      })
      .catch((e) => console.log("Error", e));
  };

  return (
    <div>
      <div style={styles.titleStyle}>Welcome Back</div>

      <div style={styles.subtitleStyle}>
        New here?{" "}
        <span style={styles.linkStyle} onClick={() => props.onSignUp()}>
          Sign Up
        </span>
      </div>

      <form onSubmit={onSubmit}>
        <TextInput
          label="Email"
          name="email"
          placeholder="adam@lamorre.co"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          label="Password"
          name="password"
          placeholder="********"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
};

const styles = {
  titleStyle: {
    fontSize: "42px",
    fontFamily: "VisbyRoundCF-Heavy",
    letterSpacing: "0.5px",
    color: "#e8e8e8",
    paddingBottom: "12px",
  } as CSSProperties,
  subtitleStyle: {
    fontSize: "18px",
    fontFamily: "VisbyRoundCF-Regular",
    letterSpacing: "0.5px",
    color: "#afafaf",
    paddingBottom: "24px",
  } as CSSProperties,
  linkStyle: {
    color: "#fa541c",
    cursor: "pointer",
  } as CSSProperties,
};

export default LogInForm;