import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Clock, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const CONTACT_METHODS = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    action: "Start Chat",
    link: "/chat",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "We'll respond within 24 hours",
    action: "Send Email",
    link: "/email-support",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Talk to a human directly",
    action: "Call Now",
    link: "/phone-support",
  },
] as const;

const Contact: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl opacity-90">
              Our team is here to help you succeed
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {CONTACT_METHODS.map((method) => (
                <div 
                  key={method.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0077B5]/10 to-[#0077B5]/20 rounded-2xl flex items-center justify-center mb-6">
                    <method.icon className="h-7 w-7 text-[#0077B5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{method.title}</h3>
                  <p className="text-gray-600 mb-6">{method.description}</p>
                  <Link to={method.link}>
                    <Button className="w-full bg-[#0077B5] hover:bg-[#0077B5]/90 text-white">
                      {method.action}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="mt-20 max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-[#0077B5]/10 text-sm font-medium px-6 py-2 rounded-full mb-4">
                    <Mail className="h-4 w-4 text-[#0077B5]" />
                    <span className="text-[#0077B5]">Send us a message</span>
                  </div>
                  <h2 className="text-2xl font-bold">Get in Touch</h2>
                </div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B5] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B5] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B5] focus:border-transparent"
                      rows={4}
                      placeholder="How can we help?"
                    />
                  </div>
                  <Button className="w-full bg-[#0077B5] hover:bg-[#0077B5]/90 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Support Hours */}
            <div className="mt-20 text-center">
              <div className="flex items-center justify-center gap-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Fast Response Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>Multiple Channels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 