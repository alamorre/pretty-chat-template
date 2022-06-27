import { CSSProperties, useContext, useState } from "react";

import axios from "axios";

import { useIsMobile } from "../hooks/isMobile";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

import { Context, User } from "../hooks/context";

const PRIVATE_KEY: string = process.env.REACT_APP_PROJECT_KEY
  ? process.env.REACT_APP_PROJECT_KEY
  : "";

interface SignUpFormProps {
  onLogIn: () => void;
}

const SignUpForm = (props: SignUpFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(Context);
  const isMobile: boolean = useIsMobile();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data: User = {
      first_name: firstName,
      last_name: lastName,
      username: email,
      email: email,
      secret: password,
    };
    const headers = {
      "Private-Key": PRIVATE_KEY,
    };

    axios
      .post("https://api.chatengine.io/users/", data, {
        headers,
      })
      .then((r) => {
        if (r.status === 201) {
          setUser(data);
        }
      })
      .catch((e) => console.log("Error", e));
  };

  return (
    <div>
      <div style={styles.titleStyle}>Create an account</div>

      <div style={styles.subtitleStyle}>
        Already a member?{" "}
        <span style={styles.linkStyle} onClick={() => props.onLogIn()}>
          Log in
        </span>
      </div>

      <form onSubmit={onSubmit}>
        <TextInput
          label="First name"
          name="first_name"
          placeholder="Adam"
          style={{ width: isMobile ? "100%" : "calc(50% - 6px)" }}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextInput
          label="Last name"
          name="last_name"
          placeholder="La Morre"
          style={{
            width: isMobile ? "100%" : "calc(50% - 6px)",
            float: "right",
          }}
          onChange={(e) => setLastName(e.target.value)}
        />

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

        <Button type="submit">Submit</Button>
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

export default SignUpForm;
