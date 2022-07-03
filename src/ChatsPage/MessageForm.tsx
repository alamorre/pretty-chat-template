import { CSSProperties, useState } from "react";

import { MessageObject, MessageFormProps } from "react-chat-engine-advanced";

const MessageForm = (props: MessageFormProps) => {
  const [text, setText] = useState<string>("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text.trim().length === 0) {
      return;
    }

    setText("");
    const created = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);

    const message: MessageObject = {
      text: text,
      sender_username: "adam@lamorre.co",
      created: created,
      custom_json: {},
      attachments: [],
    };

    props.onSubmit && props.onSubmit(message);
  };

  return (
    <form onSubmit={onSubmit} style={styles.containerStyle}>
      <input
        onChange={(e) => setText(e.target.value)}
        style={styles.textInputStyle}
        value={text}
        placeholder="Type something..."
        className="message-text-input"
      />
      <style>{`.message-text-input::placeholder { color: #e1e1e1; }`}</style>

      <button type="submit" style={styles.sendButtonStyle}>
        ^
      </button>
    </form>
  );
};

const styles = {
  containerStyle: {
    position: "relative",
    height: "68px",
    marginLeft: "12px",
    marginRight: "12px",
    width: "calc(100% - 12px - 12px)",
    backgroundColor: "#3e404b",
    borderRadius: "0px 0px 8px 8px",
  } as CSSProperties,
  textInputStyle: {
    border: "1px solid rgb(24, 144, 255)",
    outline: "none",
    backgroundColor: "#434756",
    color: "white",
    fontFamily: "VisbyRoundCF-DemiBold",
    fontSize: "12px",
    padding: "0px 15px",
    height: "36px",
    borderRadius: "8px",
    width: "calc(100% - 3.3vw - 3.3vw - 36px - 12px - 15px - 15px)",
    boxShadow: "rgba(24, 144, 255, 0.35) 0px 2px 7px",
    // Position
    position: "absolute",
    top: "12px",
    left: "3.3vw",
  } as CSSProperties,
  sendButtonStyle: {
    backgroundColor: "rgb(24, 144, 255)",
    border: "1px solid rgb(24, 144, 255)",
    height: "36px",
    borderRadius: "8px",
    width: "36px",
    color: "white",
    boxShadow: "rgba(24, 144, 255, 0.35) 0px 5px 15px",
    // Position
    position: "absolute",
    top: "12px",
    right: "calc(3.3vw)",
  } as CSSProperties,
};

export default MessageForm;
