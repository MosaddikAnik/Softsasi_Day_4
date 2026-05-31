const Sidebar = () => {
  const items = [
    "Command",
    "Grid Control",
    "Response",
    "Logs",
    "Audit",
    "Encryption",
  ];

  return (
    <aside className="w-64 bg-neutral-950 border-r border-yellow-500/20 p-4 flex flex-col h-screen">
      <h1 className="text-2xl font-bold mb-6">CUBICSEC</h1>

      <ul className="space-y-3 text-sm flex-1">
        {items.map((item) => (
          <li
            key={item}
            className="p-2 hover:bg-yellow-500/10 rounded cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <button className="btn btn-error btn-sm w-full mt-auto">
        EMERGENCY KILL
      </button>
    </aside>
  );
};

export default Sidebar;