import { useState } from "react";

import { CaretUpFilled } from "@ant-design/icons";

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
    <form onSubmit={onSubmit} className="ce-custom-message-form">
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Type something..."
        className="ce-custom-message-input"
      />

      <button type="submit" className="ce-custom-send-button">
        <CaretUpFilled />
      </button>

      <style>{`
      .ce-custom-message-form { position: relative; height: 68px; margin-left: 12px; margin-right: 12px; width: calc(100% - 12px - 12px); border-radius: 0px 0px 8px 8px; background-color: #3e404b; }
      .ce-custom-message-input { position: absolute; top: 12px; left: 3.3vw; width: calc(100% - 3.3vw - 3.3vw - 14px - 15px - 15px); box-shadow: rgba(24, 144, 255, 0.35) 0px 2px 7px; border: 1px solid rgb(24, 144, 255); outline: none; background-color: #434756; color: white; font-size: 12px; padding: 0px 15px; font-family: VisbyRoundCF-DemiBold; height: 36px; border-radius: 8px; }
      .ce-custom-message-input:focus { color: red !important; }
      .ce-custom-message-input::placeholder { color: #e1e1e1; }
      .ce-custom-send-button { cursor: pointer; background-color: rgb(24, 144, 255); border: 1px solid rgb(24, 144, 255); width: 36px; height: 36px; border-radius: 8px; color: white; box-shadow: rgba(24, 144, 255, 0.35) 0px 5px 15px; position: absolute; top: 12px; right: 3.3vw; transition: all .44s ease; }
      .ce-custom-send-button:hover { background-color: #40a9ff; }
      `}</style>
    </form>
  );
};

export default MessageForm;
