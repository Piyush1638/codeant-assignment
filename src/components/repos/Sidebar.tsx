import React from "react";

import MenuItems from "./MenuItems";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-[#E9EAEB] h-screen p-6 lg:flex items-center justify-between flex-col hidden">
      <MenuItems />
    </aside>
  );
};

export default Sidebar;
