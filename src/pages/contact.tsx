import { type FC, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Clock,
  Send,
  CheckCircle2,
  X,
  Headphones,
  Globe2,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("jhJk7b-5uZVgjrn-v");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        "service_zmc5hpy",
        "template_lt65kls",
        {
          from_name: formData.get("name"),
          from_email: formData.get("email"),
          message: formData.get("message"),
          to_email: "jaumepuigturon4@gmail.com",
        },
        "jhJk7b-5uZVgjrn-v"
      );

      setIsSubmitted(true);
      form.reset();
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl opacity-90">
              Our support team is here to help. We typically respond within 2 hours
              during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">We're Here to Help</h2>
              <p className="text-gray-600 mb-12">
                Choose your preferred way to connect with us. Our team is ready to assist
                you with any questions or concerns.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Support</h3>
                    <p className="text-gray-600 mb-1">
                      Send us a message anytime
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[#0077B5]">
                      <Clock className="h-4 w-4" />
                      <span>Response within 2 hours</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Headphones className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Premium Support</h3>
                    <p className="text-gray-600 mb-1">
                      Dedicated support for Pro users
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[#0077B5]">
                      <Clock className="h-4 w-4" />
                      <span>Priority response: &lt; 30 minutes</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe2 className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Global Support</h3>
                    <p className="text-gray-600 mb-1">
                      24/7 support across all time zones
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[#0077B5]">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Available in multiple languages</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5]/5"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:border-transparent resize-none"
                      placeholder="How can we help you today?"
                    />
                  </div>

                  {error && <div className="text-red-500 text-sm">{error}</div>}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0077B5] hover:bg-[#0077B5]/90 text-white font-medium py-3"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-[#0077B5] hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#0077B5] hover:underline">
                      Terms of Service
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
