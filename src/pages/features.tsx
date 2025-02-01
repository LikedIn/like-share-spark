import { type FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Shield,
  Users,
  TrendingUp,
  CheckCircle2,
  Clock,
  BarChart,
  Settings,
  Heart,
} from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description:
      "See results within minutes. We start delivering your likes immediately after purchase.",
  },
  {
    icon: Shield,
    title: "100% Safe Growth",
    description:
      "Our proven methods ensure your profile stays secure while gaining real engagement.",
  },
  {
    icon: Users,
    title: "Premium Quality Profiles",
    description:
      "Choose from high-quality accounts with complete profiles and real activity.",
  },
  {
    icon: TrendingUp,
    title: "Customizable Growth",
    description:
      "Choose your preferred quality tier and delivery speed to match your growth goals.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our dedicated team is always here to help you succeed with instant assistance.",
  },
  {
    icon: BarChart,
    title: "Detailed Analytics",
    description:
      "Track your growth with comprehensive analytics and performance metrics.",
  },
  {
    icon: Settings,
    title: "Advanced Controls",
    description: "Fine-tune your growth settings and preferences at any time.",
  },
  {
    icon: Heart,
    title: "Always Free Tier",
    description: "Start with 100 free likes monthly, no credit card required.",
  },
] as const;

const Features: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Powerful Features for LinkedIn Growth
            </h1>
            <p className="text-xl opacity-90">
              Everything you need to boost your LinkedIn presence and grow your
              professional network.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0077B5]/10 to-[#0077B5]/20 rounded-2xl flex items-center justify-center mb-6 rotate-3 transform hover:rotate-6 transition-transform">
                  <feature.icon className="h-7 w-7 text-[#0077B5]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 bg-[#0077B5]/10 text-sm font-medium px-6 py-2 rounded-full mb-6">
              <CheckCircle2 className="h-4 w-4 text-[#0077B5]" />
              <span className="text-[#0077B5]">Start Growing Today</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Ready to Boost Your LinkedIn Presence?
            </h2>
            <Button
              size="lg"
              className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white text-lg px-8 py-6 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
              onClick={() => window.location.href = "https://app.likedin.shop/login"}
            >
              Get Started Free →
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                100 Free Likes
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
