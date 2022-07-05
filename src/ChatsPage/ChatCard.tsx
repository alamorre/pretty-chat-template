import { ChatCard, ChatCardProps } from "react-chat-engine-advanced";

const CustomChatCard = (props: ChatCardProps) => {
  const chat = props.chat;
  console.log("props.chat", props.chat);
  return <ChatCard />;
};
