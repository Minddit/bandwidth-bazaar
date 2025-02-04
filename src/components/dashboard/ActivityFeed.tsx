import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const activities = [
  {
    id: 1,
    type: 'earnings',
    amount: '0.5',
    timestamp: '2 minutes ago',
  },
  {
    id: 2,
    type: 'bandwidth',
    amount: '2.3 GB',
    timestamp: '5 minutes ago',
  },
  {
    id: 3,
    type: 'referral',
    amount: '1.2',
    timestamp: '10 minutes ago',
  },
];

const ActivityFeed = () => {
  return (
    <Card className="glass">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-medium">
                      {activity.type === 'earnings' && `Earned ${activity.amount} tokens`}
                      {activity.type === 'bandwidth' && `Shared ${activity.amount}`}
                      {activity.type === 'referral' && `Referral bonus ${activity.amount} tokens`}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </Card>
  );
};

export default ActivityFeed;