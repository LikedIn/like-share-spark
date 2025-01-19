import {
  Activity,
  BookOpen,
  Briefcase,
  Building2,
  CreditCard,
  Facebook,
  FileText,
  HelpCircle,
  Linkedin,
  Lock,
  MessageCircle,
  Shield,
  Sparkles,
  Star,
  Twitter,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold mb-4">LikedIn</h3>
            <p className="text-sm text-gray-400">
              The most trusted LinkedIn growth service. Get 100 free likes
              monthly and watch your professional network expand.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/LikedIn"
                className="hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/LikedIn"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/LikedIn"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <CreditCard className="h-4 w-4" />
                  <span>Pricing</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Features</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/security"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Shield className="h-4 w-4" />
                  <span>Security</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Star className="h-4 w-4" />
                  <span>Testimonials</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Building2 className="h-4 w-4" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Careers</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/help"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <HelpCircle className="h-4 w-4" />
                  <span>Help Center</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  <span>Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Lock className="h-4 w-4" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/status"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Activity className="h-4 w-4" />
                  <span>System Status</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} LikedIn. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="h-4 w-4" />
                <span>Secure Payments by</span>
              </div>
              <div className="flex items-center gap-4">
                <CreditCard
                  className="h-6 w-6 text-gray-400 hover:text-white transition-colors"
                  aria-label="Credit Cards Accepted"
                />
                <Wallet
                  className="h-6 w-6 text-gray-400 hover:text-white transition-colors"
                  aria-label="Digital Wallets Accepted"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
