import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/PricingCard";
import { StatsCard } from "@/components/StatsCard";
import { ArrowRight, Heart, Zap, Shield, CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block animate-bounce bg-white/10 text-sm font-medium px-4 py-1 rounded-full mb-6">
              🚀 Limited Time Offer: Get 50% More Likes Today!
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">Boost Your Professional Presence with <span className="text-accent">LikedIn</span></h1>
            <p className="text-xl mb-8 opacity-90">Join thousands of professionals who are already increasing their LinkedIn engagement by up to 10x through our authentic like-exchange network.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg">
                Start Growing Free <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white text-lg">
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/90 border-2 border-accent" />
                ))}
              </div>
              <p className="opacity-90">Joined by 10,000+ professionals this month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600 flex flex-wrap justify-center items-center gap-8">
            <p className="font-medium">Trusted by professionals from:</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <span className="text-xl font-bold opacity-50">Microsoft</span>
              <span className="text-xl font-bold opacity-50">Google</span>
              <span className="text-xl font-bold opacity-50">Amazon</span>
              <span className="text-xl font-bold opacity-50">Meta</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Professionals Choose LikedIn</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#0077B5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-[#0077B5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Authentic Engagement</h3>
              <p className="text-gray-600">Real interactions from real professionals in your industry</p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#0077B5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-[#0077B5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">10x Faster Growth</h3>
              <p className="text-gray-600">See your engagement skyrocket within 24 hours</p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#0077B5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#0077B5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn Safe</h3>
              <p className="text-gray-600">Fully compliant with LinkedIn's guidelines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <StatsCard number="50K+" label="Active Professionals" />
            <StatsCard number="5M+" label="Likes Exchanged" />
            <StatsCard number="200K+" label="Posts Boosted" />
            <StatsCard number="99%" label="Success Rate" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Growing Your LinkedIn Presence</h2>
            <p className="text-xl text-gray-600">Choose the perfect plan for your professional growth</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price="Free"
              features={[
                "100 likes per month",
                "Basic analytics",
                "Manual exchange",
                "Community support"
              ]}
            />
            <PricingCard
              title="Professional"
              price="$19.99"
              features={[
                "1,000 likes per month",
                "Advanced analytics",
                "Automatic exchange",
                "Priority support",
                "Profile optimization tips"
              ]}
              isPopular
            />
            <PricingCard
              title="Enterprise"
              price="$49.99"
              features={[
                "Unlimited likes",
                "Premium analytics",
                "API access",
                "Dedicated account manager",
                "Custom integration",
                "ROI reporting"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">What Our Users Are Saying</h2>
            <div className="grid gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg mb-4">"My LinkedIn engagement increased by 400% in just two weeks using LikedIn. The ROI has been incredible!"</p>
                <p className="font-semibold">Sarah Chen</p>
                <p className="text-sm text-gray-600">Product Manager at Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to 10x Your LinkedIn Engagement?</h2>
            <p className="text-xl mb-8">Join 50,000+ professionals already growing their presence</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#0077B5] hover:bg-gray-100">
                Start Free Trial <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <p className="text-sm">No credit card required • Cancel anytime • 14-day free trial</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;