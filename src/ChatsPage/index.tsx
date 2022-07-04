import { useContext } from "react";

import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
  MessageFormProps,
  ChatHeaderProps,
} from "react-chat-engine-advanced";

import { Context } from "../hooks/context";
import { useIsMobile } from "../hooks/isMobile";

import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import MessageForm from "./MessageForm";
import ChatList from "./ChatList";

const ChatsPage = () => {
  const { user } = useContext(Context);
  const isMobile: boolean = useIsMobile();

  const projectId = process.env.REACT_APP_PROJECT_ID
    ? process.env.REACT_APP_PROJECT_ID
    : "";
  const username = user ? user.username : "";
  const secret = user ? user.secret : "";

  const chatProps = useMultiChatLogic(projectId, username, secret);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: isMobile ? "0px" : "6vw",
          height: "100vh",
          position: "absolute",
          top: "0px",
          left: "0px",
          backgroundColor: "rgb(40,43,54)",
        }}
      >
        <Sidebar />
      </div>

      <div
        style={{
          width: isMobile ? "100vw" : "calc(100vw - 6vw)",
          position: "absolute",
          top: "0px",
          left: isMobile ? "0px" : "6vw",
        }}
      >
        <MultiChatSocket {...chatProps} />

        <MultiChatWindow
          {...chatProps}
          renderChatList={(props) => (
            <ChatList
              username={chatProps.username}
              secret={chatProps.secret}
              chats={chatProps.chats}
              activeChatId={chatProps.activeChatId}
              setActiveChat={chatProps.setActiveChatId}
            />
          )}
          renderChatHeader={(props: ChatHeaderProps) => (
            <ChatHeader
              {...props}
              chat={chatProps.chat}
              username={chatProps.username}
            />
          )}
          renderMessageForm={(props: MessageFormProps) => (
            <MessageForm {...props} />
          )}
          renderChatSettings={() => <></>}
          style={{ height: "100vh" }}
        />

        <style>{`
        .ce-chat-list { background-color: rgb(40,43,54) !important; }
        .ce-chat-form { background-color: rgb(40,43,54) !important; padding-bottom: 14px !important;  }
        .ce-chat-form-title { color: white !important; font-family: 'VisbyRoundCF-DemiBold' !important; }
        .ce-default-button { border: none !important; background-color: rgb(40,43,54) !important; color: white !important; }
        .ce-text-input { background-color: rgb(40,43,54) !important; color: white !important; font-family: 'VisbyRoundCF-DemiBold' !important; border: 2px solid #fa541c !important; border-radius: 8px !important; }
        .ce-text-input::placeholder { color: white !important; }
        .ce-chat-card { border: 1px solid #3e404b !important; background-color: #3e404b !important; margin: 10px 12px !important; height: 68px !important; }
        .ce-chat-card:hover { border: 1px solid #1890ff !important; box-shadow: rgb(24 144 255 / 35%) 0px 2px 7px !important; }
        .ce-active-chat-card { border: 1px solid #1890ff !important; background-color: #1890ff !important; box-shadow: rgb(24 144 255 / 35%) 0px 2px 7px !important; color: white !important; }
        .ce-chat-card-title { color: white !important; font-family: 'VisbyRoundCF-DemiBold' !important; }
        .ce-chat-card-subtitle { font-family: 'VisbyRoundCF-DemiBold' !important; font-size: 12px !important; bottom: 16px !important; width: calc(70% - 44px) !important; color: #c5c5c5 !important; }
        .ce-chat-card-time-stamp { font-family: 'VisbyRoundCF-DemiBold' !important; font-size: 12px !important; bottom: 16px !important; }
        .ce-avatar-status { border: 2px solid rgb(40,43,54) !important; }
        .ce-chat-card-avatar { top: 12px !important; }

        .ce-chat-feed-column { border: none !important; }
        .ce-chat-feed { background-color: rgb(40,43,54) !important; }

        .ce-message-list {
          margin-top: 24px !important;
          margin-left: 12px !important;
          margin-right: 12px !important;
          padding: 0px 3.3vw !important;
          background-color: #3e404b !important;
          border-radius: 8px 8px 0px 0px !important;
          height: calc((100% - 85px) - 72px - 24px - 12px) !important;
        }
        .ce-message-date-text { font-family: 'VisbyRoundCF-DemiBold' !important; color: rgb(153, 153, 153) !important; font-size: 14px !important; }
        .ce-my-message-body { font-family: 'VisbyRoundCF-Regular' !important; font-size: 12px !important; padding: 15px !important; }
        .ce-my-message-timestamp { font-family: 'VisbyRoundCF-DemiBold' !important; font-size: 12px !important; padding: 15px !important; margin-right: 0px !important; }
        .ce-their-message-timestamp { color: rgb(241, 240, 240) !important; }
        
        // TODO: chat-card-title-LOADING identifier
        // TODO: chat-feed-messages-head and chat-feed-messages-tail for buffering
        `}</style>
      </div>
    </div>
  );
};

export default ChatsPage;
