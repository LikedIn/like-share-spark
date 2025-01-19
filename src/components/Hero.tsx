import { type FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Star,
  Sparkles,
  TrendingUp,
  Users,
  ChevronRight,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const Hero: FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))] -z-10" />
      <div
        className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 w-96 h-96 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] rounded-full animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20 w-96 h-96 bg-gradient-to-tr from-[#0077B5] to-[#00A0DC] rounded-full animate-pulse"
        style={{ animationDuration: "6s" }}
      />

      <div className="container mx-auto px-4 pt-16 pb-24 relative">
        {/* Special Offer Banner */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-[#0077B5] to-[#00A0DC] rounded-full px-6 py-2 text-sm font-medium text-white flex items-center gap-3 group shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <Sparkles className="h-4 w-4" />
            <span className="border-r border-white/20 pr-3">
              Limited Time Offer
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 animate-pulse" />
              Get 100 Free LinkedIn Likes Every Month
            </span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="text-white/90 text-sm">
              Rated #1 LinkedIn Growth Service
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6">
            Boost Your LinkedIn Presence with{" "}
            <span className="bg-gradient-to-r from-[#0077B5] to-[#00A0DC] bg-clip-text text-transparent">
              Real Engagement
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join over{" "}
            <span className="text-white font-semibold">
              50,000+ professionals
            </span>{" "}
            who trust us to grow their LinkedIn presence. Get started with{" "}
            <span className="text-white font-semibold">
              100 free likes monthly
            </span>
            , no credit card required.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="relative flex flex-col items-center">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-[#0077B5] to-[#00A0DC] text-white font-medium shadow-xl hover:shadow-2xl transition-all duration-200 hover:opacity-90 w-full sm:w-auto text-lg px-8 py-6 rounded-xl group"
              >
                <span className="absolute -top-3 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                  Free Forever
                </span>
                Start Growing Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="mt-4 text-center">
                <span className="text-[#00A0DC] text-sm font-medium bg-white/5 px-4 py-1.5 rounded-full">
                  ⚡️ Activation takes less than 30 seconds
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="h-5 w-5 text-green-500" />
                <span>Secure payment via Stripe</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-1 text-[#0077B5] font-semibold">
                <Users className="h-5 w-5" />
                <span className="text-2xl text-white">50K+</span>
              </div>
              <span className="text-sm text-gray-400">Active Users</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-1 text-[#0077B5] font-semibold">
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                <span className="text-2xl text-white">4.9/5</span>
              </div>
              <span className="text-sm text-gray-400">User Rating</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-1 text-[#0077B5] font-semibold">
                <TrendingUp className="h-5 w-5" />
                <span className="text-2xl text-white">5M+</span>
              </div>
              <span className="text-sm text-gray-400">Likes Delivered</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-1 text-[#0077B5] font-semibold">
                <Shield className="h-5 w-5" />
                <span className="text-2xl text-white">100%</span>
              </div>
              <span className="text-sm text-gray-400">Safe Growth</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
