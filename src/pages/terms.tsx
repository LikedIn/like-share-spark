import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing and using our service, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using the service.",
  },
  {
    title: "2. Description of Service",
    content: "We provide a social media engagement service that helps users increase their LinkedIn presence through likes and engagement. The service includes both free and paid tiers with varying levels of features and support.",
  },
  {
    title: "3. User Obligations",
    content: "Users must provide accurate information when using our service. You agree not to use the service for any illegal purposes or in violation of LinkedIn's terms of service.",
  },
  {
    title: "4. Payment Terms",
    content: "Paid plans are billed on a recurring basis. You can cancel your subscription at any time. Refunds are provided within 30 days if you're not satisfied with the service.",
  },
  {
    title: "5. Privacy & Security",
    content: "We take your privacy seriously. We never ask for sensitive information like passwords. All data is encrypted and protected according to industry standards.",
  },
  {
    title: "6. Service Limitations",
    content: "While we strive to provide consistent service, we cannot guarantee specific results. The effectiveness of our service may vary based on various factors outside our control.",
  },
  {
    title: "7. Modifications to Service",
    content: "We reserve the right to modify or discontinue the service at any time. We will provide notice of significant changes to these terms.",
  },
  {
    title: "8. Contact Information",
    content: "If you have any questions about these Terms of Service, please contact our support team through our help center or email.",
  },
] as const;

const Terms: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl opacity-90">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-12">
                Please read these Terms of Service carefully before using our service. These terms govern your use of our platform and services.
              </p>

              {SECTIONS.map((section) => (
                <div key={section.title} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <p className="text-gray-600">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-20 bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-[#0077B5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Have Questions?</h3>
                  <p className="text-gray-600">Our support team is here to help</p>
                </div>
              </div>
              <Link to="/contact">
                <Button 
                  className="w-full bg-[#0077B5] hover:bg-[#0077B5]/90 text-white group"
                >
                  Contact Support
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms; 