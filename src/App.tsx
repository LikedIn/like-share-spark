import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Index from "./pages/Index";
import Pricing from "./pages/pricing";
import Security from "./pages/security";
import Testimonials from "./pages/testimonials";
import About from "./pages/about";
import Blog from "./pages/blog";
import Careers from "./pages/careers";
import Contact from "./pages/contact";
import Help from "./pages/help";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Status from "./pages/status";
import Features from "./pages/features";
import HowToIncreaseEngagement from "./pages/blog/how-to-increase-your-linkedin-engagement-in-2024";
import PowerOfLinkedIn from "./pages/blog/the-power-of-linkedin-for-business-growth";
import LinkedInAlgorithm from "./pages/blog/linkedin-algorithm-what-you-need-to-know";

const queryClient = new QueryClient();

// ScrollToTop component that will be used inside Router
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use instant instead of smooth for a better UX on route changes
    });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/security" element={<Security />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/how-to-increase-engagement" element={<HowToIncreaseEngagement />} />
          <Route path="/blog/power-of-linkedin" element={<PowerOfLinkedIn />} />
          <Route path="/blog/linkedin-algorithm" element={<LinkedInAlgorithm />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/status" element={<Status />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
