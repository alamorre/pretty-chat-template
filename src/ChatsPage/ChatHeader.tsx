import {
  ChatHeaderProps,
  ChatObject,
  PersonObject,
  Avatar,
} from "react-chat-engine-advanced";

import { FileImageFilled, PhoneFilled, FileAddFilled } from "@ant-design/icons";

interface CustomChatHeaderProps extends ChatHeaderProps {
  chat?: ChatObject;
  username: string;
}

const getOtherUser = (
  chat: ChatObject,
  username: string
): PersonObject | undefined => {
  let otherMember: PersonObject | undefined = undefined;
  chat.people.map((member) => {
    if (member.person.username !== username) {
      // TODO: chat.is_direct_chat
      otherMember = member.person;
    }
    return;
  });
  return otherMember;
};

const ChatHeader = (props: CustomChatHeaderProps) => {
  // TODO: Show how TS recommends props.chat &&
  const otherMember: PersonObject | undefined =
    props.chat && getOtherUser(props.chat, props.username);

  console.log("otherMember", otherMember);

  return (
    <div className="ce-custom-chat-header">
      {otherMember && (
        <div>
          <div className="ce-custom-header-avatar-wrapper vertical-center">
            <Avatar
              style={{ width: "38px", height: "38px", fontSize: "14px" }}
              avatarUrl={otherMember?.avatar}
              username={otherMember?.username}
              isOnline={otherMember?.is_online}
            />
          </div>

          <div
            style={{
              display: "inline-block",
              maxWidth: "50%",
              paddingLeft: "14px",
              position: "relative",
              top: "21px",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "13px",
                fontFamily: "VisbyRoundCF-DemiBold",
              }}
            >
              {otherMember.first_name} {otherMember.last_name}
            </div>
            <div
              style={{
                color: "rgb(153, 153, 153)",
                fontSize: "11px",
              }}
            >
              {otherMember.is_online ? "Online" : "Offline"}
            </div>
          </div>

          <div
            style={{
              display: "inline-block",
              maxWidth: "50%",
              position: "relative",
              top: "36px",
              float: "right",
            }}
          >
            <FileImageFilled
              style={{
                paddingRight: "12px",
                cursor: "pointer",
                color: "rgb(153, 153, 153)",
              }}
            />
            <FileAddFilled
              style={{
                paddingRight: "12px",
                cursor: "pointer",
                color: "rgb(153, 153, 153)",
              }}
            />
            <PhoneFilled
              style={{
                paddingRight: "12px",
                cursor: "pointer",
                color: "rgb(153, 153, 153)",
              }}
            />
          </div>
        </div>
      )}

      <style>{`
      .ce-custom-chat-header { display: inline-block; position: relative; width: 100%; height: 86px; z-index: 10; box-shadow: 0px 65px 100px rgb(40,43,54); }
      .ce-custom-header-avatar-wrapper { display: inline-block; border-radius: 50%; border: 1px solid rgb(24, 144, 255); box-shadow: rgb(24 144 255 / 35%) 0px 2px 7px; position: relative; top: 28px; margin-left: 12px; }
      `}</style>
    </div>
  );
};

export default ChatHeader;
