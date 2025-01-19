interface StatsCardProps {
  number: string;
  label: string;
}

export const StatsCard = ({ number, label }: StatsCardProps) => {
  return (
    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
      <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-2">
        {number}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};