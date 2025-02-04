import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatsCard = ({ title, value, subtitle, trend }: StatsCardProps) => {
  return (
    <Card className="p-6 glass hover:scale-[1.02] transition-transform duration-200">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="flex items-baseline justify-between">
          <h3 className="text-2xl font-semibold">{value}</h3>
          {trend && (
            <span className={`text-sm ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {trend.isPositive ? '↑' : '↓'} {trend.value}%
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </Card>
  );
};

export default StatsCard;