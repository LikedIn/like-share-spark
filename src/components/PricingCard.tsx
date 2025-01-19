import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export const PricingCard = ({ title, price, features, isPopular }: PricingCardProps) => {
  return (
    <div className={`rounded-2xl p-6 ${isPopular ? 'bg-gradient-to-br from-primary to-secondary text-white' : 'bg-white shadow-lg'}`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Free" && <span className="text-sm">/month</span>}
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full ${isPopular ? 'bg-white text-primary hover:bg-gray-100' : 'bg-accent hover:bg-accent/90'}`}>
        Get Started
      </Button>
    </div>
  );
};