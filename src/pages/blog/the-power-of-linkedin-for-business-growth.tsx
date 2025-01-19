import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, User, Star, CheckCircle2, Building2, Target, Users, BarChart3, Rocket, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    anchor: "introduction",
  },
  {
    id: "why-linkedin",
    title: "Why LinkedIn for Business",
    anchor: "why-linkedin",
  },
  {
    id: "growth-strategies",
    title: "Growth Strategies",
    anchor: "growth-strategies",
  },
  {
    id: "success-metrics",
    title: "Success Metrics",
    anchor: "success-metrics",
  },
  {
    id: "case-studies",
    title: "Success Stories",
    anchor: "case-studies",
  },
  {
    id: "action-plan",
    title: "Action Plan",
    anchor: "action-plan",
  },
] as const;

const LINKEDIN_STATS = [
  {
    metric: "875M+",
    description: "Active professionals worldwide",
  },
  {
    metric: "96%",
    description: "B2B marketers use LinkedIn",
  },
  {
    metric: "2.8x",
    description: "Better lead conversion rate",
  },
] as const;

const CASE_STUDIES = [
  {
    company: "TechCorp Solutions",
    result: "3x Lead Generation",
    strategy: "Regular thought leadership content + engagement automation",
    timeframe: "6 months",
  },
  {
    company: "Global Consulting Inc",
    result: "5x Brand Visibility",
    strategy: "Employee advocacy + consistent posting",
    timeframe: "3 months",
  },
  {
    company: "StartupX",
    result: "400% More Connections",
    strategy: "Targeted engagement + premium content",
    timeframe: "4 months",
  },
] as const;

const BlogPost: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>James Wilson</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>4 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-current" />
                <span>4.8 Rating</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              The Power of LinkedIn for Business Growth
            </h1>
            <p className="text-xl opacity-90">
              Discover how businesses are leveraging LinkedIn to reach new customers, build brand authority, and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {SECTIONS.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.anchor}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-[#0077B5] transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                    <span>{section.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
              <p className="text-gray-600 mb-6">
                In today's digital age, LinkedIn has emerged as the powerhouse for B2B marketing and business growth. It's not just a professional networking site anymore – it's a comprehensive platform for brand building, lead generation, and market authority establishment.
              </p>
              <p className="text-gray-600 mb-8">
                This guide will show you how to harness LinkedIn's full potential for your business growth, backed by real data and success stories from companies that have mastered the platform.
              </p>
              
              {/* Key Stats */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {LINKEDIN_STATS.map((stat) => (
                  <div key={stat.metric} className="bg-gray-50 rounded-xl p-6 text-center">
                    <p className="text-3xl font-bold text-[#0077B5] mb-2">{stat.metric}</p>
                    <p className="text-gray-600">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why LinkedIn */}
            <div id="why-linkedin" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Why LinkedIn for Business</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Precise Targeting</h3>
                  <p className="text-gray-600">
                    Reach decision-makers and professionals with detailed targeting options based on job titles, industries, and company size.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Brand Authority</h3>
                  <p className="text-gray-600">
                    Establish your company as an industry leader through thought leadership content and professional networking.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Lead Generation</h3>
                  <p className="text-gray-600">
                    Generate high-quality B2B leads with better conversion rates than other social platforms.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Analytics</h3>
                  <p className="text-gray-600">
                    Access detailed analytics to measure your ROI and optimize your business strategy.
                  </p>
                </div>
              </div>
            </div>

            {/* Growth Strategies */}
            <div id="growth-strategies" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Growth Strategies</h2>
              <div className="bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">The 3-Pillar Approach</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                      <Rocket className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold mb-2">Content Excellence</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Thought leadership articles</li>
                      <li>• Industry insights</li>
                      <li>• Case studies</li>
                      <li>• Company updates</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold mb-2">Engagement Strategy</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Regular interaction</li>
                      <li>• Community building</li>
                      <li>• Employee advocacy</li>
                      <li>• Group participation</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                      <Target className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold mb-2">Lead Generation</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Targeted outreach</li>
                      <li>• Content marketing</li>
                      <li>• LinkedIn ads</li>
                      <li>• Analytics tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div id="success-metrics" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Success Metrics</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="grid gap-8">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#0077B5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="h-5 w-5 text-[#0077B5]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Engagement Rate</h3>
                        <p className="text-gray-600">
                          Aim for 2-3% engagement rate on company posts. This indicates your content resonates with your audience.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#0077B5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="h-5 w-5 text-[#0077B5]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Follower Growth</h3>
                        <p className="text-gray-600">
                          Track monthly follower growth. A healthy rate is 3-5% month-over-month increase.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#0077B5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="h-5 w-5 text-[#0077B5]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Lead Quality</h3>
                        <p className="text-gray-600">
                          Monitor lead-to-opportunity conversion rate. LinkedIn leads should convert 2-3x better than other channels.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Studies */}
            <div id="case-studies" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
              <div className="space-y-6">
                {CASE_STUDIES.map((study) => (
                  <div key={study.company} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{study.company}</h3>
                      <span className="text-[#0077B5] font-bold">{study.result}</span>
                    </div>
                    <p className="text-gray-600 mb-2">
                      Strategy: {study.strategy}
                    </p>
                    <p className="text-sm text-gray-500">
                      Achieved in: {study.timeframe}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Plan */}
            <div id="action-plan" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Action Plan</h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold">Optimize Your Company Page</h3>
                      <p className="text-gray-600">Complete all sections, add keywords, and use high-quality visuals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold">Create Content Calendar</h3>
                      <p className="text-gray-600">Plan your content mix using the 3-pillar approach</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold">Implement Engagement Strategy</h3>
                      <p className="text-gray-600">Start with LikedIn's free plan to boost initial engagement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#0077B5] rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Grow Your Business on LinkedIn?
              </h3>
              <p className="text-lg mb-6">
                Start with 100 free likes monthly to boost your company's presence!
              </p>
              <Link to="/">
                <Button size="lg" className="bg-white text-[#0077B5] hover:bg-gray-100">
                  Start Growing Free →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost; 