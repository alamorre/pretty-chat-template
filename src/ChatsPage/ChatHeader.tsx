import {
  ChatHeaderProps,
  ChatObject,
  PersonObject,
  Avatar,
} from "react-chat-engine-advanced";

import {
  PhoneFilled,
  DeleteFilled,
  PaperClipOutlined,
} from "@ant-design/icons";

import { getOtherUser } from "../hooks/getOtherUser";

interface CustomChatHeaderProps extends ChatHeaderProps {
  chat?: ChatObject;
  username: string;
}

const ChatHeader = (props: CustomChatHeaderProps) => {
  // TODO: Show how TS recommends props.chat &&
  const otherMember: PersonObject | undefined =
    props.chat && getOtherUser(props.chat, props.username);

  return (
    <div className="ce-custom-chat-header">
      {otherMember && (
        <div>
          <Avatar
            className="ce-custom-header-avatar"
            avatarUrl={otherMember?.avatar}
            username={otherMember?.username}
            isOnline={otherMember?.is_online}
          />

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

          <div className="ce-custom-header-icon-wrapper">
            <PaperClipOutlined className="ce-custom-header-icon" />
            <PhoneFilled className="ce-custom-header-icon" />
            <DeleteFilled className="ce-custom-header-icon" />
          </div>
        </div>
      )}

      <style>{`
      .ce-custom-chat-header { display: inline-block; position: relative; width: 100%; height: 86px; z-index: 10; box-shadow: 0px 65px 100px rgb(40,43,54); }
      .ce-custom-header-avatar { display: inline-block; position: relative; top: 28px; margin-left: 12px; border: 1px solid ${
        otherMember?.is_online ? "rgb(24, 144, 255)" : "#fa541c"
      }; box-shadow: ${
        otherMember?.is_online
          ? "rgb(24 144 255 / 35%)"
          : "rgb(245 34 45 / 35%)"
      } 0px 2px 7px; width: 38px !important; height: 38px !important; font-size: 14px !important; transition: all 0.66s ease; }
      .ce-custom-header-icon-wrapper { display: inline-block; maxWidth: 50%; position: relative; top: 36px; float: right;  }
      .ce-custom-header-icon { padding-right: 12px; cursor: pointer; color: rgb(153, 153, 153); transition: all 0.66s ease; }
      .ce-custom-header-icon:hover { color: rgb(24, 144, 255) !important; }
      `}</style>
    </div>
  );
};

export default ChatHeader;
