import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Gift } from "lucide-react";

const PricingSection: FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0077B5]/10 text-sm font-medium px-6 py-2 rounded-full mb-4">
            <Gift className="h-4 w-4 text-[#0077B5]" />
            <span className="text-[#0077B5]">
              Most Affordable LinkedIn Growth Service
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free and scale as you grow. Our premium plans offer the{" "}
            <span className="text-[#0077B5] font-semibold">
              lowest price per like
            </span>{" "}
            in the market!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border-2 border-gray-100">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Free Forever</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">€0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Perfect to get started</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>
                  <strong>100 Likes</strong> every month
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Basic analytics</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Community support</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>No credit card required</span>
              </li>
            </ul>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
              Start Free Now →
            </Button>
          </div>

          {/* Growth Plan */}
          <div className="relative bg-[#0077B5] rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 transform hover:scale-105 duration-300">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                Best Value
              </span>
            </div>
            <div className="text-center mb-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Growth</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">€19.99</span>
                <span className="opacity-80">/month</span>
              </div>
              <p className="opacity-80">€0.02 per like</p>
            </div>
            <ul className="space-y-4 mb-8 text-white">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span>
                  <strong>1,000 Likes</strong> per month
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Profile optimization tips</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Choose high quality accounts</span>
              </li>
            </ul>
            <Button className="w-full bg-white text-[#0077B5] hover:bg-gray-100">
              Get Started →
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border-2 border-gray-100">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Likes
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">€49.99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Only €0.01 per like!</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span>
                  <strong>5,000 Likes</strong> per month
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span>Premium analytics</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span>ROI reporting</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span>Custom integration</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span>Choose high quality accounts (1000+ connections)</span>
              </li>
            </ul>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Upgrade to Pro →
            </Button>
          </div>
        </div>

        {/* Price Comparison */}
        <div className="mt-16 max-w-3xl mx-auto bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Why We're the Most Affordable
          </h3>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-gray-600">Others</p>
              <p className="text-xl font-bold line-through text-red-500">
                €0.20
              </p>
              <p className="text-sm text-gray-500">per like</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">Our Growth Plan</p>
              <p className="text-xl font-bold text-[#0077B5]">€0.02</p>
              <p className="text-sm text-gray-500">per like</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">Our Pro Plan</p>
              <p className="text-xl font-bold text-purple-600">€0.01</p>
              <p className="text-sm text-gray-500">per like</p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex justify-center items-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span>Secure Payments via Stripe</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            <span>Money Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span>50K+ Happy Customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
