import { CSSProperties, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  style?: CSSProperties;
  type?: string;
}

const TextInput = (props: ButtonProps) => {
  return (
    <button
      style={{
        ...styles.style,
        ...props.style,
      }}
    >
      {props.children}
    </button>
  );
};

const styles = {
  style: {
    width: "100%",
    height: "53px",
    color: "white",
    backgroundColor: "#fa541c",
    border: "none",
    outline: "none",
    borderRadius: "8px",
    fontFamily: "VisbyRoundCF-DemiBold",
    cursor: "pointer",
  } as CSSProperties,
};

export default TextInput;
