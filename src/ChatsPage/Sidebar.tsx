import { useContext } from "react";

import { Context } from "../hooks/context";

const Sidebar = () => {
  const { setUser } = useContext(Context);

  return (
    <div>
      <button onClick={() => setUser(undefined)}>Logout</button>
    </div>
  );
};

export default Sidebar;
