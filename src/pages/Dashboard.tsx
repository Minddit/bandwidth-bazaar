import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/Sidebar"
import StatsCard from "@/components/dashboard/StatsCard"
import Chart from "@/components/dashboard/Chart"
import ActivityFeed from "@/components/dashboard/ActivityFeed"
import { Button } from "@/components/ui/button"
import { WifiOff } from "lucide-react"

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Monitor your earnings and bandwidth sharing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Season Earnings"
              value="13,700.62"
              subtitle="Total earnings this season"
              trend={{ value: 12.5, isPositive: true }}
            />
            <StatsCard
              title="Today's Earnings"
              value="0"
              subtitle="Earnings in the last 24 hours"
            />
            <div className="glass p-6 rounded-lg flex flex-col items-center justify-center gap-4">
              <WifiOff className="h-8 w-8 text-muted-foreground" />
              <p className="text-sm text-center text-muted-foreground">
                Connect to the network to start earning.
              </p>
              <Button variant="default" className="bg-indigo-900 hover:bg-indigo-800">
                Connect
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="glass p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Missions</h3>
                <div className="space-y-4">
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Daily Treasure Claim</h4>
                      <Button variant="secondary" size="sm">
                        Claim your daily reward
                      </Button>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Understanding CEXs / DEXs used by our community</h4>
                      <span className="text-sm text-muted-foreground">2,000</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Complete the survey to unlock reward. This quest is only available in limited time
                    </p>
                    <Button variant="outline" size="sm">
                      Answer
                    </Button>
                  </div>
                </div>
              </div>
              <Chart />
            </div>
            <ActivityFeed />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Dashboard