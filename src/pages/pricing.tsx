import { type FC } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Users } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "How does the free plan work?",
    answer: "Our free plan gives you 100 likes every month, completely free, forever. No credit card required. Just sign up and start growing your LinkedIn presence."
  },
  {
    question: "Can I upgrade or downgrade at any time?",
    answer: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle."
  },
  {
    question: "Is there a long-term contract?",
    answer: "No, all our plans are month-to-month. You can cancel anytime without any cancellation fees."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. All payments are processed securely through Stripe."
  }
] as const;

const Pricing: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl opacity-90">
              Start free and scale as you grow. Our premium plans offer the lowest price per like in the market!
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
                </div>
                <p className="text-gray-600">Perfect to get started</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span><strong>100 Likes</strong> every month</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>No credit card needed</span>
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
                </div>
                <p className="opacity-80">€0.02 per like</p>
              </div>
              <ul className="space-y-4 mb-8 text-white">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span><strong>1,000 Likes</strong> per month</span>
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
                </div>
                <p className="text-gray-600">Only €0.01 per like!</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span><strong>5,000 Likes</strong> per month</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span>Premium analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span>Dedicated manager</span>
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
              <Users className="h-5 w-5" />
              <span>50K+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#0077B5]/10 text-sm font-medium px-6 py-2 rounded-full mb-4">
                <CheckCircle2 className="h-4 w-4 text-[#0077B5]" />
                <span className="text-[#0077B5]">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl font-bold">Got Questions? We've Got Answers</h2>
            </div>

            <div className="space-y-6">
              {FAQ_ITEMS.map((item) => (
                <div 
                  key={item.question}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Button variant="outline" className="group">
                Contact Support
                <CheckCircle2 className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Grow Your LinkedIn Presence?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join 50,000+ professionals already using LikedIn to increase their reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white"
                      onClick={() => window.location.href = "https://app.likedin.shop/login"}>
                Start Free Trial →
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing; 