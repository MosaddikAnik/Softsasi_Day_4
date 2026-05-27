const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-base-200 p-5 hidden lg:block">
      
      <h1 className=" text-amber-800 p-5 text-4xl font-bold mb-6">Menu</h1>

      <ul className="menu bg-base-200 gap-8  text-2xl rounded-box">
        <li>
          <button className="active">Dashboard</button>
        </li>
        <li>
          <button>Analytics</button>
        </li>
        <li>
          <button>Users</button>
        </li>
        <li>
          <button>Settings</button>
        </li>
      </ul>

    </aside>
  );
};

export default Sidebar;