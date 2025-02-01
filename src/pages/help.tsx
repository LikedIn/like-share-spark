import { type FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Search,
  Book,
  ArrowRight,
  CheckCircle2,
  Shield,
  Lock,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

const FAQ_CATEGORIES = [
  {
    title: "Getting Started",
    questions: [
      {
        question: "How does the free plan work?",
        answer:
          "Our free plan gives you 100 likes every month by connecting with your LinkedIn account. You'll need to log in with LinkedIn so we can automate likes using your account. This ensures authentic engagement within your network.",
      },
      {
        question: "Is it safe to use?",
        answer:
          "Yes, we use secure methods to deliver likes to your posts. For the free plan, we use LinkedIn OAuth for secure authentication. For paid plans, we never ask for your LinkedIn password and use our network of high-quality profiles.",
      },
      {
        question: "How do profile tiers work?",
        answer:
          "In our paid plans, you can choose the quality tier of profiles that will like your posts: Standard (active profiles), Premium (500+ connections), or Elite (1000+ connections with high engagement). This helps you get more meaningful engagement.",
      },
      {
        question: "How fast do I see results?",
        answer:
          "You'll start seeing likes within minutes of posting. Our system automatically detects new posts and starts delivering engagement based on your selected profile tier and delivery speed.",
      },
    ],
  },
  {
    title: "Account & Billing",
    questions: [
      {
        question: "How do I upgrade my plan?",
        answer:
          "You can upgrade your plan anytime from your dashboard. Choose your preferred plan and profile tier (Standard, Premium, or Elite), then follow the simple checkout process.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We process all payments securely through Stripe, accepting all major credit cards (Visa, MasterCard, American Express) and PayPal. Your payment information is never stored on our servers and is handled with bank-level security by Stripe.",
      },
    ],
  },
  {
    title: "Technical Support",
    questions: [
      {
        question: "What if I need help?",
        answer:
          "Our support team is available 24/7. You can reach us through email, and we typically respond within 2 hours during business hours.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
      },
    ],
  },
] as const;

const Help: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">How Can We Help?</h1>
            <p className="text-xl opacity-90 mb-8">
              Find answers to common questions or contact our support team
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-6 py-4 rounded-xl text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Info Box */}
      <section className="py-12 bg-gradient-to-br from-[#0077B5]/5 to-[#00A0DC]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-[#0077B5]/10">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-[#0077B5]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  How Our Free Tier Works - Complete Transparency
                </h2>
                <div className="prose text-gray-600 space-y-4">
                  <p>
                    We believe in complete transparency about how our free tier
                    operates. When you sign up for our free plan, you connect
                    your LinkedIn account through LinkedIn's official OAuth
                    system - the same secure method used by thousands of
                    professional applications.
                  </p>
                  <div className="bg-[#0077B5]/5 rounded-xl p-6 my-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Lock className="h-5 w-5 text-[#0077B5]" />
                      Our Security Promise
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          All actions are performed through LinkedIn's official
                          API
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          You can revoke access anytime from your LinkedIn
                          settings
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          We only perform the specific actions you approve
                        </span>
                      </li>
                    </ul>
                  </div>
                  <p>
                    The free tier provides likes through your own LinkedIn
                    account, similar to how you would manually like posts. This
                    approach allows us to offer a completely free service while
                    maintaining authenticity in LinkedIn's ecosystem. For users
                    seeking additional engagement, our paid tiers provide likes
                    from our network of high-quality profiles.
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <Button className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white"
                            onClick={() => window.location.href = "https://app.likedin.shop/login"}>
                      <Linkedin className="h-4 w-4 mr-2" />
                      Try Free with LinkedIn
                    </Button>
                    <Link to="/security">
                      <Button
                        variant="outline"
                        className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5]/5"
                      >
                        <Shield className="h-4 w-4 mr-2" />
                        Learn More About Security
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto flex justify-center">
            <Link to="/contact" className="w-full max-w-xl">
              <Button
                variant="outline"
                className="w-full p-8 h-auto flex flex-col items-center gap-4 group hover:border-[#0077B5]"
              >
                <Shield className="h-8 w-8 text-[#0077B5] group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Contact Support</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {FAQ_CATEGORIES.map((category) => (
              <div key={category.title} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                <div className="space-y-4">
                  {category.questions.map((item) => (
                    <div
                      key={item.question}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-lg font-semibold mb-3">
                        {item.question}
                      </h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still Need Help */}
          <div className="mt-20 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#0077B5]/10 text-sm font-medium px-6 py-2 rounded-full mb-6">
              <CheckCircle2 className="h-4 w-4 text-[#0077B5]" />
              <span className="text-[#0077B5]">Still Need Help?</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Can't find what you're looking for?
            </h2>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white group"
              >
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
