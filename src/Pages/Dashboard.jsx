import Sidebar from '../Components/Sidebar';
import Topbar from '../Components/Topbar';
import StatCard from '../Components/StatCard';
import ChartBox from '../Components/ChartBox';
import AnalyticsTable from '../Components/AnalyticsTable';
import AiInsights from '../Components/AiInsights'; // ✅ Added import
import { FaDollarSign, FaUsers, FaChartLine, FaExclamationCircle } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard title="Revenue" value="$12,540" change="+12%" icon={<FaDollarSign />} />
            <StatCard title="Users" value="1,205" change="+5%" icon={<FaUsers />} />
            <StatCard title="Sessions" value="3,430" change="-3%" icon={<FaChartLine />} />
            <StatCard title="Errors" value="8" change="+1%" icon={<FaExclamationCircle />} />
          </div>

          {/* Chart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartBox />
          </div>

          {/* Analytics Table */}
          <AnalyticsTable />

          {/* AI-Generated Insights */}
          <AiInsights />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
