import {
  ChatCard,
  ChatCardProps,
  ChatObject,
} from "react-chat-engine-advanced";

import { getOtherUser } from "../hooks/getOtherUser";

interface CustomChatCardProps extends ChatCardProps {
  username: string;
  isActive: boolean;
  setActiveChatId: (chatId: number) => void;
  chat?: ChatObject;
}

const CustomChatCard = (props: CustomChatCardProps) => {
  if (!props.chat) return <div />;

  const otherMember = getOtherUser(props.chat, props.username);
  const firstName = otherMember ? otherMember.first_name : "";
  const lastName = otherMember ? otherMember.last_name : "";
  const username = otherMember ? otherMember.username : "";

  return (
    <ChatCard
      title={`${firstName} ${lastName}`}
      description={username}
      avatarUrl={otherMember?.avatar}
      avatarUsername={username}
      avatarStyle={{
        boxShadow: otherMember?.is_online
          ? "rgb(24 144 255 / 35%) 0px 2px 7px"
          : "rgb(245 34 45 / 35%) 0px 2px 7px",
        border: otherMember?.is_online
          ? "1px solid rgb(24 144 255)"
          : "1px solid rgb(245 34 45)",
      }}
      isActive={props.isActive}
      onClick={() => props.chat && props.setActiveChatId(props.chat.id)}
    />
  );
};

export default CustomChatCard;
