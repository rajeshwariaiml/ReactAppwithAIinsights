const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-8">AI Dashboard</h2>
      <ul className="space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-400 cursor-pointer">Reports</li>
        <li className="hover:text-blue-400 cursor-pointer">Analytics</li>
        <li className="hover:text-blue-400 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
