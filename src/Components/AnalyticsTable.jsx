const AnalyticsTable = () => {
  const data = [
    { id: 1, name: 'Alice', activity: 'Signed Up', date: '2025-07-24', status: 'Success' },
    { id: 2, name: 'Bob', activity: 'Purchased Plan', date: '2025-07-25', status: 'Success' },
    { id: 3, name: 'Charlie', activity: 'Payment Failed', date: '2025-07-25', status: 'Failed' },
    { id: 4, name: 'David', activity: 'Visited Dashboard', date: '2025-07-26', status: 'Viewed' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4">User</th>
              <th className="py-2 px-4">Activity</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="py-2 px-4">{row.name}</td>
                <td className="py-2 px-4">{row.activity}</td>
                <td className="py-2 px-4">{row.date}</td>
                <td className={`py-2 px-4 font-medium ${row.status === 'Failed' ? 'text-red-500' : 'text-green-600'}`}>
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsTable;
