import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, User, Star, CheckCircle2, BookOpen, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    anchor: "introduction",
  },
  {
    id: "key-metrics",
    title: "Key Engagement Metrics",
    anchor: "key-metrics",
  },
  {
    id: "content-strategy",
    title: "Content Strategy",
    anchor: "content-strategy",
  },
  {
    id: "posting-times",
    title: "Best Posting Times",
    anchor: "posting-times",
  },
  {
    id: "engagement-tactics",
    title: "Proven Engagement Tactics",
    anchor: "engagement-tactics",
  },
  {
    id: "tools",
    title: "Tools & Resources",
    anchor: "tools",
  },
] as const;

const ENGAGEMENT_STATS = [
  {
    metric: "47%",
    description: "Higher engagement with visual content",
  },
  {
    metric: "3x",
    description: "More engagement during business hours",
  },
  {
    metric: "60%",
    description: "Users engage with industry insights",
  },
] as const;

const BEST_TIMES = [
  {
    day: "Monday",
    times: ["8:00 AM - 10:00 AM", "4:00 PM - 6:00 PM"],
    engagement: "High",
  },
  {
    day: "Tuesday",
    times: ["7:00 AM - 9:00 AM", "3:00 PM - 5:00 PM"],
    engagement: "Very High",
  },
  {
    day: "Wednesday",
    times: ["8:00 AM - 10:00 AM", "2:00 PM - 4:00 PM"],
    engagement: "Peak",
  },
  {
    day: "Thursday",
    times: ["9:00 AM - 11:00 AM", "3:00 PM - 5:00 PM"],
    engagement: "High",
  },
  {
    day: "Friday",
    times: ["7:00 AM - 9:00 AM", "1:00 PM - 3:00 PM"],
    engagement: "Moderate",
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
                <span>Sarah Chen</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-current" />
                <span>4.9 Rating</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              How to Increase Your LinkedIn Engagement in 2024
            </h1>
            <p className="text-xl opacity-90">
              Master the latest strategies and proven tactics to boost your LinkedIn presence and grow your professional network.
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
                LinkedIn engagement has become more crucial than ever in 2024. With over 900 million professionals on the platform, standing out requires a strategic approach that combines consistent activity, valuable content, and smart timing.
              </p>
              <p className="text-gray-600 mb-8">
                In this comprehensive guide, we'll explore the latest trends and proven strategies to boost your LinkedIn engagement. Whether you're a business professional, entrepreneur, or company, these insights will help you maximize your presence on the platform.
              </p>
              
              {/* Key Stats */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {ENGAGEMENT_STATS.map((stat) => (
                  <div key={stat.metric} className="bg-gray-50 rounded-xl p-6 text-center">
                    <p className="text-3xl font-bold text-[#0077B5] mb-2">{stat.metric}</p>
                    <p className="text-gray-600">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div id="key-metrics" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Key Engagement Metrics</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#0077B5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-[#0077B5]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Post Impressions</h3>
                      <p className="text-gray-600">
                        Track how many times your posts appear in LinkedIn feeds. Aim for consistent growth in impressions to expand your reach.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#0077B5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-[#0077B5]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Engagement Rate</h3>
                      <p className="text-gray-600">
                        Calculate likes, comments, and shares divided by impressions. A healthy engagement rate is between 2-5%.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#0077B5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-[#0077B5]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Profile Views</h3>
                      <p className="text-gray-600">
                        Monitor how often your profile is viewed. This indicates how well your content drives interest in your professional brand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Strategy */}
            <div id="content-strategy" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Content Strategy</h2>
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">The 4-1-1 Rule</h3>
                  <p className="mb-6">
                    For every 6 pieces of content you share:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="font-bold mb-2">4 Pieces</h4>
                      <p className="text-sm">Industry insights and third-party content</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="font-bold mb-2">1 Piece</h4>
                      <p className="text-sm">Original, valuable content</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="font-bold mb-2">1 Piece</h4>
                      <p className="text-sm">Promotional content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Posting Times */}
            <div id="posting-times" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Best Posting Times</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-600">Day</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-600">Best Times</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-600">Engagement Level</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {BEST_TIMES.map((time) => (
                        <tr key={time.day} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{time.day}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {time.times.join(", ")}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              time.engagement === "Peak"
                                ? "bg-green-100 text-green-800"
                                : time.engagement === "Very High"
                                ? "bg-blue-100 text-blue-800"
                                : time.engagement === "High"
                                ? "bg-indigo-100 text-indigo-800"
                                : "bg-gray-100 text-gray-800"
                            }`}>
                              {time.engagement}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Proven Engagement Tactics */}
            <div id="engagement-tactics" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Proven Engagement Tactics</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Use Carousel Posts</h3>
                  <p className="text-gray-600">
                    Carousel posts get 3x more engagement than single-image posts. Break down complex topics into digestible slides.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Share Data Insights</h3>
                  <p className="text-gray-600">
                    Posts with data and statistics receive 37% more engagement. Back your points with credible research and numbers.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center mb-4">
                    <User className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Tell Stories</h3>
                  <p className="text-gray-600">
                    Personal stories and experiences get 2x more comments. Share your journey, lessons learned, and victories.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Ask Questions</h3>
                  <p className="text-gray-600">
                    Posts with questions get 50% more comments. Encourage discussion by asking for opinions and experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Tools & Resources */}
            <div id="tools" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Tools & Resources</h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid gap-6">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-[#0077B5]" />
                    <div>
                      <h3 className="font-bold">LikedIn</h3>
                      <p className="text-gray-600">Get 100 free likes monthly to jumpstart your engagement</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-[#0077B5]" />
                    <div>
                      <h3 className="font-bold">LinkedIn Analytics</h3>
                      <p className="text-gray-600">Track your performance and optimize your strategy</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-[#0077B5]" />
                    <div>
                      <h3 className="font-bold">Content Calendar</h3>
                      <p className="text-gray-600">Plan and schedule your posts for maximum impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#0077B5] rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Boost Your LinkedIn Engagement?
              </h3>
              <p className="text-lg mb-6">
                Start with 100 free likes monthly and watch your presence grow!
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