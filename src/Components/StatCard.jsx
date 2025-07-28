const StatCard = ({ title, value, icon, change }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between">
      <div>
        <h4 className="text-sm text-gray-500">{title}</h4>
        <p className="text-2xl font-bold">{value}</p>
        <p className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </p>
      </div>
      <div className="text-3xl">{icon}</div>
    </div>
  );
};

export default StatCard;
