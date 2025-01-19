import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/PricingCard";
import { StatsCard } from "@/components/StatsCard";
import { ArrowRight, Heart, Zap, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Boost Your Social Presence with LikeLoop</h1>
            <p className="text-xl mb-8">Exchange likes, grow together. Join thousands of users who are already boosting their social media engagement authentically.</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get Started Free <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LikeLoop?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Genuine Engagement</h3>
              <p className="text-gray-600">Real interactions from real users in your niche</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Results</h3>
              <p className="text-gray-600">See your engagement grow within hours</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">100% compliant with platform guidelines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <StatsCard number="10K+" label="Active Users" />
            <StatsCard number="1M+" label="Likes Exchanged" />
            <StatsCard number="50K+" label="Posts Boosted" />
            <StatsCard number="98%" label="Satisfaction Rate" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Basic"
              price="Free"
              features={[
                "50 likes per month",
                "Basic analytics",
                "Manual exchange",
              ]}
            />
            <PricingCard
              title="Pro"
              price="$9.99"
              features={[
                "500 likes per month",
                "Advanced analytics",
                "Automatic exchange",
                "Priority support",
              ]}
              isPopular
            />
            <PricingCard
              title="Business"
              price="$24.99"
              features={[
                "Unlimited likes",
                "Premium analytics",
                "API access",
                "Dedicated support",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Social Presence?</h2>
          <p className="text-xl mb-8">Join thousands of creators who are already growing their audience</p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Start Growing Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;