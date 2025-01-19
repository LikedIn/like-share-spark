import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  number: string;
  label: string;
}

export const StatsCard = ({ number, label }: StatsCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-2">
          {number}
        </div>
        <div className="text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
};