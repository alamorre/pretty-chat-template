import { CSSProperties, useState } from "react";

// TODO: import { MessageFormProps } from 'react-chat-engine-advanced'

const MessageForm = (props: any) => {
  const [text, setText] = useState<string>("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("event", text);
  };

  return (
    <form onSubmit={onSubmit} style={styles.containerStyle}>
      <div style={styles.fileButtonStyle}></div>

      <input
        onChange={(e) => setText(e.target.value)}
        style={styles.textInputStyle}
      />

      <div style={styles.sendButtonStyle}></div>
    </form>
  );
};

const styles = {
  containerStyle: {
    display: "inline-block",
    height: "56px",
    margin: "0px 12px",
    padding: "0px 3.3vw",
    width: "calc(100% - 12px - 12px - 3.3vw - 3.3vw)",
    backgroundColor: "#3e404b",
    borderRadius: "0px 0px 8px 8px",
  } as CSSProperties,
  fileButtonStyle: {
    display: "inline-block",
    backgroundColor: "blue",
    color: "white",
    height: "36px",
    borderRadius: "8px",
    width: "36px",
    marginRight: "12px",
  } as CSSProperties,
  textInputStyle: {
    display: "inline-block",
    border: "1px solid rgb(24, 144, 255)",
    outline: "none",
    backgroundColor: "black",
    color: "white",
    fontFamily: "VisbyRoundCF-DemiBold",
    fontSize: "12px",
    padding: "0px 15px",
    height: "36px",
    borderRadius: "8px",
    width: "calc(100% - 36px - 12px - 12px - 36px - 12px - 15px - 15px)",
    marginRight: "12px",
    position: "relative",
    top: "-13px",
  } as CSSProperties,
  sendButtonStyle: {
    display: "inline-block",
    backgroundColor: "rgb(24, 144, 255)",
    height: "36px",
    borderRadius: "8px",
    width: "36px",
  } as CSSProperties,
};

export default MessageForm;
