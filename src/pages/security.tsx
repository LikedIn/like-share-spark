import { type FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  CheckCircle2,
  Key,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

const SECURITY_FEATURES = [
  {
    icon: Lock,
    title: "Secure Account Access",
    description: "We use secure OAuth to automate likes while keeping your account protected.",
  },
  {
    icon: Shield,
    title: "Safe Growth Methods",
    description: "Our techniques comply with platform guidelines to keep your account secure.",
  },
  {
    icon: Eye,
    title: "Privacy Protected",
    description: "Your data is encrypted and never shared with third parties.",
  },
  {
    icon: UserCheck,
    title: "Real Profiles Only",
    description: "All engagement comes from authentic accounts with real activity.",
  },
  {
    icon: Key,
    title: "Secure Payments",
    description: "All transactions are processed through secure, encrypted channels.",
  },
  {
    icon: RefreshCw,
    title: "Money-Back Guarantee",
    description: "Not satisfied? Get a full refund within 30 days, no questions asked.",
  },
] as const;

const Security: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Your Security is Our Priority
            </h1>
            <p className="text-xl opacity-90">
              We use industry-leading security measures to keep your account safe and your data protected.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SECURITY_FEATURES.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0077B5]/10 to-[#0077B5]/20 rounded-2xl flex items-center justify-center mb-6 rotate-3 transform hover:rotate-6 transition-transform">
                  <feature.icon className="h-7 w-7 text-[#0077B5]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Banner */}
          <div className="mt-20 bg-[#0077B5] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0077B5] to-[#00A0DC] opacity-50" />
            <div className="relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-white/20 text-sm font-medium px-6 py-2 rounded-full mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <span>Your Safety Matters</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Try Risk-Free with Our Free Plan
                </h2>
                <p className="text-lg mb-8 opacity-90">
                  Start with 100 free likes monthly. No credit card required, no strings attached.
                </p>
                <Button 
                  size="lg"
                  className="bg-white text-[#0077B5] hover:bg-gray-100 text-lg px-8 py-6 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Get Started Free →
                  <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                    100% Safe
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Secure Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              <span>Data Protected</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security; 