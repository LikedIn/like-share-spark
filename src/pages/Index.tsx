import Hero from "@/components/Hero";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Gift,
  Heart,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RECENT_SIGNUPS = [
  {
    name: "Sarah K.",
    image: "photo-1573496359142-b8d87734a5a2",
    timeAgo: "2 minutes ago",
  },
  {
    name: "Michael R.",
    image: "photo-1560250097-0b93528c311a",
    timeAgo: "4 minutes ago",
  },
  {
    name: "Emma L.",
    image: "photo-1580489944761-15a19d654956",
    timeAgo: "5 minutes ago",
  },
  {
    name: "David P.",
    image: "photo-1507003211169-0a1dd7228f2d",
    timeAgo: "7 minutes ago",
  },
] as const;

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Product Manager at Google",
    image: "photo-1573496359142-b8d87734a5a2",
    text: "Started with the free tier and saw amazing results! My LinkedIn engagement increased by 400% in just two weeks.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Sales Director at Microsoft",
    image: "photo-1560250097-0b93528c311a",
    text: "The free starter plan was perfect to test the waters. Now I get 3x more connection requests and job opportunities.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Lead at Amazon",
    image: "photo-1580489944761-15a19d654956",
    text: "Best value for money! Started free, then upgraded. Now my posts reach 5x more people at just €0.40 per 10 likes!",
    rating: 5,
  },
  {
    name: "Michael Chang",
    role: "Tech Lead at Meta",
    image: "photo-1507003211169-0a1dd7228f2d",
    text: "The most affordable LinkedIn growth service. My profile views went from 100 to 1,000+ per week.",
    rating: 5,
  },
] as const;

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center text-lg font-semibold">
      <span>{String(timeLeft.hours).padStart(2, "0")}:</span>
      <span>{String(timeLeft.minutes).padStart(2, "0")}:</span>
      <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
    </div>
  );
};

const RecentSignupNotification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % RECENT_SIGNUPS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSignup = RECENT_SIGNUPS[currentIndex];

  return (
    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-gray-800 p-3 rounded-xl shadow-lg flex items-center gap-3 transition-all duration-500 hover:scale-105">
      <Avatar className="w-10 h-10 border-2 border-[#0077B5]/20">
        <AvatarImage
          src={`https://images.unsplash.com/${currentSignup.image}`}
          alt={currentSignup.name}
          className="object-cover"
        />
        <AvatarFallback>{currentSignup.name.split(" ")[0][0]}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">
          {currentSignup.name} started growing for free
        </p>
        <p className="text-xs text-gray-500">{currentSignup.timeAgo}</p>
      </div>
    </div>
  );
};

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="max-w-2xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={testimonial.name} className="w-full flex-shrink-0">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-6">
                  <Avatar className="w-16 h-16 border-2 border-[#0077B5]/20">
                    <AvatarImage
                      src={`https://images.unsplash.com/${testimonial.image}`}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-lg mb-4 text-gray-700">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#0077B5] w-4" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <button
        onClick={() =>
          setCurrentIndex(
            (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
          )
        }
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200"
        aria-label="Previous testimonial"
      >
        <ArrowRight className="w-5 h-5 rotate-180 text-gray-600" />
      </button>
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
        }
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200"
        aria-label="Next testimonial"
      >
        <ArrowRight className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
        <div className="absolute -left-20 top-40 w-96 h-96 bg-[#0077B5]/5 rounded-full blur-3xl" />
        <div className="absolute -right-20 bottom-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#0077B5]/10 text-sm font-medium px-6 py-2 rounded-full mb-4">
              <TrendingUp className="h-4 w-4 text-[#0077B5]" />
              <span className="text-[#0077B5] font-semibold">
                Market Leader Since 2024
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              The Most Trusted LinkedIn Growth Service
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join over{" "}
              <span className="font-semibold text-[#0077B5]">
                1 million professionals
              </span>{" "}
              who trust us with their LinkedIn growth. Experience why we're
              different.
            </p>
          </div>

          {/* Main Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Fast Delivery Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0077B5]/10 to-[#0077B5]/20 rounded-2xl flex items-center justify-center mb-6 rotate-3 transform hover:rotate-6 transition-transform">
                <Zap className="h-8 w-8 text-[#0077B5]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Lightning Fast Results
              </h3>
              <p className="text-gray-600 mb-6">
                Watch your engagement soar instantly. We start delivering within{" "}
                <span className="font-semibold text-[#0077B5]">5 minutes</span>{" "}
                of your order.
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
              <h3 className="text-2xl font-bold mb-4 text-white">
                Premium Quality Profiles
              </h3>
              <p className="text-white/90 mb-6">
                Choose your preferred quality tier. All likes come from
                authentic-looking accounts with complete profiles.
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
                Our dedicated team is always here to help you succeed. Get
                instant assistance anytime.
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

          {/* Trust Stats */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-[#0077B5] to-[#00A0DC] rounded-2xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/10" />
              <div className="relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Gift className="h-6 w-6 text-[#0077B5]" />
                </div>
                <h3 className="text-xl font-bold">Lowest Price Guarantee</h3>
              </div>
              <p className="text-gray-600">
                We've revolutionized the industry with our competitive pricing.
                Get premium service at unbeatable rates.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Heart className="h-6 w-6 text-[#0077B5]" />
                </div>
                <h3 className="text-xl font-bold">Risk-Free Trial</h3>
              </div>
              <p className="text-gray-600">
                Start with 100 free likes monthly. No commitment, no credit card
                required. Upgrade only if you love it.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <TrendingUp className="h-6 w-6 text-[#0077B5]" />
                </div>
                <h3 className="text-xl font-bold">Proven Results</h3>
              </div>
              <p className="text-gray-600">
                Join thousands who've seen their engagement increase by 400% in
                just two weeks.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white text-lg px-8 py-6 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Growing Your LinkedIn Now →
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                100 Free Likes
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0077B5]/10 via-white to-[#00A0DC]/10" />
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#0077B5]/20 to-[#00A0DC]/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#00A0DC]/20 to-[#0077B5]/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "6s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#0077B5]/10 text-sm font-medium px-6 py-2 rounded-full mb-4">
              <TrendingUp className="h-4 w-4 text-[#0077B5]" />
              <span className="text-[#0077B5] font-semibold">
                Our Growth Impact
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#0077B5] to-[#00A0DC] bg-clip-text text-transparent">
              Trusted by Professionals Worldwide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of professionals who trust us with their LinkedIn
              growth journey
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Link
              to="/testimonials"
              className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B5]/5 to-[#00A0DC]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-gradient-to-br from-[#0077B5]/10 to-[#00A0DC]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 rotate-3">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">50K+</p>
                <p className="font-medium text-[#0077B5]">
                  Active Professionals
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Growing their presence daily
                </p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <div className="flex items-center gap-2 text-[#0077B5]">
                    <span className="text-sm font-medium">
                      View Success Stories
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="/features"
              className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B5]/5 to-[#00A0DC]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-gradient-to-br from-[#0077B5]/10 to-[#00A0DC]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 rotate-3">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">5M+</p>
                <p className="font-medium text-[#0077B5]">Likes Delivered</p>
                <p className="text-sm text-gray-600 mt-2">
                  Across all profiles
                </p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <div className="flex items-center gap-2 text-[#0077B5]">
                    <span className="text-sm font-medium">
                      Explore Features
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="/blog/power-of-linkedin"
              className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B5]/5 to-[#00A0DC]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-gradient-to-br from-[#0077B5]/10 to-[#00A0DC]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 rotate-3">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">200K+</p>
                <p className="font-medium text-[#0077B5]">Posts Boosted</p>
                <p className="text-sm text-gray-600 mt-2">
                  With increased reach
                </p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <div className="flex items-center gap-2 text-[#0077B5]">
                    <span className="text-sm font-medium">
                      Read Success Guide
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="/testimonials"
              className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B5]/5 to-[#00A0DC]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-gradient-to-br from-[#0077B5]/10 to-[#00A0DC]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 rotate-3">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">99%</p>
                <p className="font-medium text-[#0077B5]">Success Rate</p>
                <p className="text-sm text-gray-600 mt-2">
                  Verified by customers
                </p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <div className="flex items-center gap-2 text-[#0077B5]">
                    <span className="text-sm font-medium">Read Reviews</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
                  <span>Login with LinkedIn</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Automated likes from your account</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Community support</span>
                </li>
              </ul>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                Start Free with LinkedIn →
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
                  <span>Choose profile tier (Standard/Premium)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>500+ connections profiles available</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>Priority support</span>
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
                  <span>Elite profile tier (1000+ connections)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span>High engagement profiles only</span>
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
                  <span>Custom integration</span>
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

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              What Our Users Are Saying
            </h2>
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
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
                Start with 100 free likes monthly, upgrade only if you need
                more!
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0077B5] hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Start Growing Free <ArrowRight className="ml-2" />
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

export default Index;
