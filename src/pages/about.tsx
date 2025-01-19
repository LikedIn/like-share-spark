import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Users, Building2, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const About: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl opacity-90">
              Helping professionals grow their LinkedIn presence since 2017
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#0077B5]">1M+</p>
              <p className="text-gray-600">Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#0077B5]">50M+</p>
              <p className="text-gray-600">Likes Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#0077B5]">6+</p>
              <p className="text-gray-600">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
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
            <Link to="/pricing">
              <Button 
                size="lg"
                className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white text-lg px-8 py-6 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Start Growing Free →
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  100 Free Likes
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 