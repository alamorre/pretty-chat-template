import { useContext } from "react";

import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
  MessageFormProps,
  ChatHeaderProps,
  ChatCardProps,
  ChatFormProps,
} from "react-chat-engine-advanced";

import { Context } from "../hooks/context";
import { useIsMobile } from "../hooks/isMobile";

import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import MessageForm from "./MessageForm";
import ChatCard from "./ChatCard";
import UserSearch from "./UserSearch";

import { projectId } from "../hooks/constants";

const ChatsPage = () => {
  // Hooks
  const { user } = useContext(Context);
  const isMobile: boolean = useIsMobile();
  // Chat Engine Hooks
  const username: string = user ? user.username : "";
  const secret: string = user && user.secret !== null ? user.secret : "";
  const chatProps = useMultiChatLogic(projectId, username, secret);

  return (
    <div className="grey-background">
      <div
        style={{
          position: "relative",
          top: isMobile ? "0px" : "10vh",
          left: isMobile ? "0px" : "calc(50vw - 3vw - 1.5vw - 35vw)",
          height: isMobile ? "100vh" : "80vh",
          width: isMobile ? "100vw" : "calc(100vw - 10.5vw - 10.5vw)",
          backgroundColor: "grey",
        }}
      >
        <div
          style={{
            width: "6vw",
            height: "100%",
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
            height: "100%", // Fill parent height
          }}
        >
          <MultiChatSocket {...chatProps} />

          <MultiChatWindow
            {...chatProps}
            renderChatForm={() => (
              <UserSearch
                username={chatProps.username}
                secret={chatProps.secret}
                onSelect={(chatId: number) => chatProps.onChatCardClick(chatId)}
              />
            )}
            renderChatCard={(props: ChatCardProps) => (
              <ChatCard
                {...props}
                username={chatProps.username}
                onChatCardClick={chatProps.onChatCardClick}
                isActive={
                  props.chat !== undefined &&
                  chatProps.activeChatId === props.chat.id
                }
                chat={props.chat}
              />
            )}
            renderChatHeader={(props: ChatHeaderProps) => (
              <ChatHeader
                {...props}
                chat={chatProps.chat}
                username={chatProps.username}
                secret={chatProps.secret}
              />
            )}
            renderMessageForm={(props: MessageFormProps) => (
              <MessageForm {...props} />
            )}
            renderChatSettings={() => (
              <div
                style={{
                  backgroundColor: "#282b36",
                  width: "3vw",
                  height: "100vh",
                }}
              />
            )}
            style={{ height: "100%" }}
          />
        </div>
      </div>

      <style>{`
        .grey-background { background-color: #969da6; width: 100vw; height: 100vh; }
          
        .ce-chat-list { background-color: rgb(40,43,54) !important; }
        .ce-chat-form { background-color: rgb(40,43,54) !important; padding-bottom: 14px !important;  }
        .ce-chat-form-title { color: white !important; font-family: 'VisbyRoundCF-DemiBold' !important; }
        .ce-default-button { border: none !important; background-color: rgb(40,43,54) !important; color: white !important; }
        .ce-text-input { background-color: rgb(40,43,54) !important; color: white !important; font-family: 'VisbyRoundCF-DemiBold' !important; border: 2px solid #fa541c !important; border-radius: 8px !important; }
        .ce-text-input::placeholder { color: white !important; }
        .ce-chat-card { border: 1px solid #3e404b !important; background-color: #3e404b !important; margin: 10px 12px !important; height: 68px !important; }
        .ce-chat-card:hover { border: 1px solid #1890ff !important; box-shadow: rgb(24 144 255 / 35%) 0px 2px 7px !important; }
        .ce-chat-card-loading { height: 10px !important; }
        .ce-chat-card-title-loading { top: 16px !important; }
        .ce-active-chat-card { border: 1px solid #1890ff !important; background-color: #1890ff !important; box-shadow: rgb(24 144 255 / 35%) 0px 2px 7px !important; color: white !important; }
        .ce-chat-card-title { color: white !important; font-family: 'VisbyRoundCF-DemiBold' !important; }
        .ce-chat-card-subtitle { font-family: 'VisbyRoundCF-DemiBold' !important; font-size: 12px !important; bottom: 16px !important; width: calc(70% - 44px) !important; color: #c5c5c5 !important; }
        .ce-chat-card-time-stamp { font-family: 'VisbyRoundCF-DemiBold' !important; font-size: 12px !important; bottom: 16px !important; }
        .ce-chat-card-unread { top: calc((68px - 12px) / 2) !important; }
        .ce-avatar-status { border: 2px solid rgb(40,43,54) !important; width: 10px !important; height: 10px !important; }
        .ce-chat-card-avatar { top: 12px !important; }
        .ce-chat-feed-column { border: none !important; }
        .ce-chat-feed { background-color: rgb(40,43,54) !important; }
        .ce-message-list { margin-top: 24px !important; margin-left: 12px !important; margin-right: 12px !important; padding: 0px 3.3vw !important; background: linear-gradient(0deg, rgba(62,64,75,1) 0%, rgba(62,64,75,1) 75%, rgba(40,43,54,1) 100%); !important; border-radius: 8px 8px 0px 0px !important; height: calc((100% - 85px) - 72px - 24px - 12px) !important; }
        .ce-message-date-text { font-family: 'VisbyRoundCF-DemiBold' !important; color: rgb(153, 153, 153) !important; font-size: 14px !important; letter-spacing: -1px; }
        .ce-my-message-body { font-family: 'VisbyRoundCF-Regular' !important; font-size: 12px !important; padding: 15px !important; }
        .ce-my-message-timestamp { font-family: 'VisbyRoundCF-DemiBold' !important; font-size: 12px !important; padding: 15px !important; margin-right: 0px !important; letter-spacing: -1px; }
        
        .ce-their-message-body { font-family: 'VisbyRoundCF-Regular' !important; font-size: 12px !important; padding: 15px !important; background-color: #434756 !important; color: white !important; }
        .ce-their-message-timestamp { font-family: 'VisbyRoundCF-DemiBold' !important; font-size: 12px !important; padding: 15px !important; margin-left: 0px !important; letter-spacing: -1px; }
        
        .ce-their-message-timestamp { color: rgb(241, 240, 240) !important; letter-spacing: -1px; }
        .ce-their-message-sender-username { color: #999 !important; }
        .ce-message-file { background-color: #434758 !important; color: #c5c5c5 !important; border-radius: 8px !important; }
        .ce-message-image { background-color: #434758 !important; color: #c5c5c5 !important; border-radius: 8px !important; padding: 0px !important; max-width: 124px !important; max-height: 124px !important; }

        .ce-mobile-chat-list-button { top: 32px !important; left: 0px !important; }
        .ce-mobile-chat-settings-button { display: none !important; }
        `}</style>
    </div>
  );
};

export default ChatsPage;
