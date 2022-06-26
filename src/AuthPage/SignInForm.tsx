import { useIsMobile } from "../hooks/isMobile";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

interface SignInFormProps {}

const SignInForm = (props: SignInFormProps) => {
  const isMobile: boolean = useIsMobile();

  return (
    <div>
      <div
        style={{
          fontSize: "42px",
          fontFamily: "VisbyRoundCF-Heavy",
          letterSpacing: "0.5px",
          color: "#e8e8e8",
          paddingBottom: "12px",
        }}
      >
        Create an account
      </div>

      <div
        style={{
          fontSize: "18px",
          fontFamily: "VisbyRoundCF-Regular",
          letterSpacing: "0.5px",
          color: "#afafaf",
          paddingBottom: "24px",
        }}
      >
        Already a member?{" "}
        <span
          style={{
            color: "#fa541c",
            cursor: "pointer",
          }}
        >
          Log in
        </span>
      </div>

      <form>
        <TextInput
          label="First name"
          name="first_name"
          placeholder="Adam"
          style={{ width: isMobile ? "100%" : "calc(50% - 6px)" }}
        />

        <TextInput
          label="Last name"
          name="last_name"
          placeholder="La Morre"
          style={{
            width: isMobile ? "100%" : "calc(50% - 6px)",
            float: "right",
          }}
        />

        <TextInput label="Email" name="email" placeholder="adam@lamorre.co" />

        <TextInput
          label="Password"
          name="password"
          placeholder="********"
          type="password"
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignInForm;
