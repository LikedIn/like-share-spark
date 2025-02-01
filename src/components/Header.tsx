import { type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  Star, 
  Sparkles, 
  Shield,
  BookOpen,
  HelpCircle,
  Activity,
  Building2,
  Briefcase,
  MessageCircle
} from "lucide-react";

const Header: FC = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-b from-white via-white to-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-[#0077B5] to-[#00A0DC] bg-clip-text text-transparent">LikedIn</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-gray-700 hover:text-[#0077B5] transition-colors font-medium">
                Product <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-lg border p-2 w-56 backdrop-blur-xl bg-white/95">
                  <Link 
                    to="/features" 
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm ${isActive('/features') ? 'bg-gradient-to-r from-[#0077B5]/10 to-[#00A0DC]/10 text-[#0077B5] font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    <Sparkles className="h-4 w-4" />
                    Features
                  </Link>
                  <Link 
                    to="/security" 
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm ${isActive('/security') ? 'bg-gradient-to-r from-[#0077B5]/10 to-[#00A0DC]/10 text-[#0077B5] font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    <Shield className="h-4 w-4" />
                    Security
                  </Link>
                  <Link 
                    to="/testimonials" 
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm ${isActive('/testimonials') ? 'bg-gradient-to-r from-[#0077B5]/10 to-[#00A0DC]/10 text-[#0077B5] font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    <Star className="h-4 w-4" />
                    Testimonials
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              to="/pricing" 
              className={`text-gray-700 hover:text-[#0077B5] transition-colors font-medium ${isActive('/pricing') ? 'text-[#0077B5] font-semibold' : ''}`}
            >
              Pricing
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1.5 text-gray-700 hover:text-[#0077B5] transition-colors font-medium">
                Resources <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-lg border p-2 w-56 backdrop-blur-xl bg-white/95">
                  <Link 
                    to="/blog" 
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm ${isActive('/blog') ? 'bg-gradient-to-r from-[#0077B5]/10 to-[#00A0DC]/10 text-[#0077B5] font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    <BookOpen className="h-4 w-4" />
                    Blog
                  </Link>
                  <Link 
                    to="/help" 
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm ${isActive('/help') ? 'bg-gradient-to-r from-[#0077B5]/10 to-[#00A0DC]/10 text-[#0077B5] font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    <HelpCircle className="h-4 w-4" />
                    Help Center
                  </Link>
                  <Link 
                    to="/status" 
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm ${isActive('/status') ? 'bg-gradient-to-r from-[#0077B5]/10 to-[#00A0DC]/10 text-[#0077B5] font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    <Activity className="h-4 w-4" />
                    System Status
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1.5 text-gray-700 hover:text-[#0077B5] transition-colors font-medium">
                Company <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-lg border p-2 w-56 backdrop-blur-xl bg-white/95">
                  <Link 
                    to="/about" 
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm ${isActive('/about') ? 'bg-gradient-to-r from-[#0077B5]/10 to-[#00A0DC]/10 text-[#0077B5] font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    <Building2 className="h-4 w-4" />
                    About
                  </Link>
                  <Link 
                    to="/careers" 
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm ${isActive('/careers') ? 'bg-gradient-to-r from-[#0077B5]/10 to-[#00A0DC]/10 text-[#0077B5] font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    <Briefcase className="h-4 w-4" />
                    Careers
                  </Link>
                  <Link 
                    to="/contact" 
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm ${isActive('/contact') ? 'bg-gradient-to-r from-[#0077B5]/10 to-[#00A0DC]/10 text-[#0077B5] font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button 
              variant="outline"
              className="hidden md:flex font-medium hover:bg-gray-50/80"
              onClick={() => window.location.href = "https://app.likedin.shop/login"}
            >
              Log in
            </Button>
            <Button 
              className="bg-gradient-to-r from-[#0077B5] to-[#00A0DC] text-white font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:opacity-90"
            >
              Start Free • 100 Likes
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 