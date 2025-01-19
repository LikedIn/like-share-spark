import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Building2, 
  TrendingUp, 
  CheckCircle2, 
  Shield,
  Zap,
  Star,
  Gift,
  Activity,
  ArrowRight,
  Linkedin
} from "lucide-react";
import { Link } from "react-router-dom";

const About: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-sm font-medium px-6 py-2 rounded-full mb-6">
              <TrendingUp className="h-4 w-4" />
              <span>Market Leader Since 2024</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              The Most Trusted LinkedIn Growth Service
            </h1>
            <p className="text-xl opacity-90">
              Join over <span className="font-semibold">1 million professionals</span> who trust us with their LinkedIn growth
            </p>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-gradient-to-r from-[#0077B5] to-[#00A0DC] relative">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-white">1M+</p>
              <p className="text-sm text-white/80">Happy Customers</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-white">50M+</p>
              <p className="text-sm text-white/80">Likes Delivered</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-white">4.9/5</p>
              <p className="text-sm text-white/80">Customer Rating</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-white">24/7</p>
              <p className="text-sm text-white/80">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
        <div className="absolute -left-20 top-40 w-96 h-96 bg-[#0077B5]/5 rounded-full blur-3xl" />
        <div className="absolute -right-20 bottom-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Fast Delivery Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0077B5]/10 to-[#0077B5]/20 rounded-2xl flex items-center justify-center mb-6 rotate-3 transform hover:rotate-6 transition-transform">
                <Zap className="h-8 w-8 text-[#0077B5]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lightning Fast Results</h3>
              <p className="text-gray-600 mb-6">
                Watch your engagement soar instantly. We start delivering within{" "}
                <span className="font-semibold text-[#0077B5]">5 minutes</span> of your order.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <span>Instant delivery start</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <span>Customizable speed</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <span>Real-time tracking</span>
                </li>
              </ul>
            </div>

            {/* Premium Quality Card */}
            <div className="bg-[#0077B5] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 rotate-3 transform hover:rotate-6 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Premium Quality Profiles</h3>
              <p className="text-white/90 mb-6">
                Choose your preferred quality tier. All likes come from authentic-looking accounts with complete profiles.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <span>Multiple quality tiers</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <span>Complete profiles</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <span>Active accounts</span>
                </li>
              </ul>
            </div>

            {/* Support Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0077B5]/10 to-[#0077B5]/20 rounded-2xl flex items-center justify-center mb-6 rotate-3 transform hover:rotate-6 transition-transform">
                <Shield className="h-8 w-8 text-[#0077B5]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">24/7 Expert Support</h3>
              <p className="text-gray-600 mb-6">
                Our dedicated team is always here to help you succeed. Get instant assistance anytime.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <span>Always online</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <span>Expert guidance</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#0077B5]/10 text-sm font-medium px-6 py-2 rounded-full mb-6">
              <Building2 className="h-4 w-4 text-[#0077B5]" />
              <span className="text-[#0077B5]">Our Mission</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Empowering Professional Growth
            </h2>
            <p className="text-gray-600 mb-12">
              We believe every professional deserves a strong online presence. Our mission is to make LinkedIn growth accessible, affordable, and effective for everyone.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center">
                    <Gift className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <h3 className="text-xl font-bold">Lowest Price Guarantee</h3>
                </div>
                <p className="text-gray-600">
                  We've revolutionized the industry with our competitive pricing. Get premium service at unbeatable rates.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center">
                    <Activity className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <h3 className="text-xl font-bold">Risk-Free Trial</h3>
                </div>
                <p className="text-gray-600">
                  Start with 100 free likes monthly. No commitment, no credit card required. Upgrade only if you love it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 text-sm font-medium px-6 py-2 rounded-full mb-6">
              <Gift className="h-4 w-4" />
              <span>Get Started: 100 Free Likes Every Month</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Start Growing Your LinkedIn Presence{" "}
              <span className="underline decoration-wavy decoration-accent/30">
                For Free
              </span>
            </h2>
            <p className="text-xl mb-8">
              Join 50,000+ professionals already growing their presence.
              <br />
              <span className="text-accent font-bold">
                Start with 100 free likes monthly, upgrade only if you need more!
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0077B5] hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                Try Free with LinkedIn
                <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <p className="text-sm">Always Free</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <p className="text-sm">100 Likes Monthly</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <p className="text-sm">No Credit Card</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 