import StatsCard from "@/components/dashboard/StatsCard";
import Chart from "@/components/dashboard/Chart";
import ActivityFeed from "@/components/dashboard/ActivityFeed";

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Monitor your earnings and bandwidth sharing</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Total Earnings"
          value="1,234.56 DBMP"
          subtitle="Last 30 days"
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatsCard
          title="Bandwidth Shared"
          value="45.3 GB"
          subtitle="This month"
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatsCard
          title="Active Referrals"
          value="23"
          subtitle="Total referrals"
          trend={{ value: 5, isPositive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Chart />
        </div>
        <ActivityFeed />
      </div>
    </div>
  );
};

export default Dashboard;