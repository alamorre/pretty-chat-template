import { ChatCard, ChatListProps } from "react-chat-engine-advanced";

import { getOtherUser } from "../../hooks/getOtherUser";

import UserSearch from "./UserSearch";

interface CustomChatListProps extends ChatListProps {
  username: string;
  secret: string;
  setActiveChat: (chatId: number) => void;
}

const CustomChatList = (props: CustomChatListProps) => {
  return (
    <div style={{ backgroundColor: "rgb(40,43,54)", height: "100%" }}>
      <UserSearch
        username={props.username}
        secret={props.secret}
        onSelect={(chatId: number) => props.setActiveChat(chatId)}
      />

      {props.chats.map((chat, index) => {
        const otherMember = getOtherUser(chat, props.username);
        const firstName = otherMember ? otherMember.first_name : "";
        const lastName = otherMember ? otherMember.last_name : "";
        const username = otherMember ? otherMember.username : "";

        return (
          <ChatCard
            key={`chat-card-${index}`}
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
            isActive={props.activeChatId === chat.id}
            onClick={() => props.setActiveChat(chat.id)}
          />
        );
      })}
    </div>
  );
};

export default CustomChatList;
