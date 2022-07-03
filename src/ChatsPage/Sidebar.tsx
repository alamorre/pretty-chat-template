import { useContext } from "react";

import {
  LogoutOutlined,
  HomeFilled,
  MessageFilled,
  SettingFilled,
} from "@ant-design/icons";

import { Avatar } from "react-chat-engine-advanced";

import { Context } from "../hooks/context";

const Sidebar = () => {
  const { user, setUser } = useContext(Context);

  return (
    <div style={{ textAlign: "center" }}>
      <div className="ce-sidebar-menu">
        <HomeFilled
          className="ce-sidebar-icon"
          style={{ color: "rgb(153, 153, 153)" }}
        />
        <MessageFilled
          className="ce-sidebar-icon"
          style={{
            color: "rgb(24, 144, 255)",
            borderLeft: "2px solid rgb(24, 144, 255)",
          }}
        />
        <SettingFilled
          className="ce-sidebar-icon"
          style={{ color: "rgb(153, 153, 153)" }}
        />
      </div>
      <style>{`
      .ce-sidebar-menu { position: absolute; top: 40vh; }
      .ce-sidebar-icon { width: 6vw; padding-top: 12px; padding-bottom: 12px; font-size: 16px; }
      `}</style>

      <Avatar
        style={{
          position: "absolute",
          bottom: "66px",
          left: "calc(50% - 22px)",
          border: "1px solid rgb(24, 144, 255)",
          boxShadow: "rgb(24 144 255 / 35%) 0px 2px 7px",
        }}
        avatarUrl={typeof user?.avatar === "string" ? user.avatar : undefined}
        username={user?.username}
        isOnline={true}
      />

      <LogoutOutlined
        onClick={() => setUser(undefined)}
        className="signout-icon"
      />

      <style>{`
      .signout-icon { cursor: pointer; color: rgb(153, 153, 153); transition: all 0.66s ease; font-size: 18px; position: absolute; bottom: 24px; left: calc(50% - 9px); }
      .signout-icon:hover { color: #1890ff; }
      `}</style>
    </div>
  );
};

export default Sidebar;
