const Topbar = () => {
  return (
    <div className="bg-white shadow-md h-16 flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">Welcome back!</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-1 rounded-md text-sm"
        />
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Topbar;
