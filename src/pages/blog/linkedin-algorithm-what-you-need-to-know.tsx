import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, User, Star, CheckCircle2, Zap, AlertTriangle, Sparkles, BarChart3, ThumbsUp, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    anchor: "introduction",
  },
  {
    id: "how-it-works",
    title: "How the Algorithm Works",
    anchor: "how-it-works",
  },
  {
    id: "ranking-factors",
    title: "Key Ranking Factors",
    anchor: "ranking-factors",
  },
  {
    id: "best-practices",
    title: "Best Practices",
    anchor: "best-practices",
  },
  {
    id: "mistakes",
    title: "Common Mistakes",
    anchor: "mistakes",
  },
  {
    id: "optimization",
    title: "Optimization Tips",
    anchor: "optimization",
  },
] as const;

const ALGORITHM_STATS = [
  {
    metric: "8hrs",
    description: "Golden window for post visibility",
  },
  {
    metric: "3x",
    description: "Higher reach with native content",
  },
  {
    metric: "48%",
    description: "Posts peak within first hour",
  },
] as const;

const RANKING_FACTORS = [
  {
    factor: "Personal Connection",
    weight: "Very High",
    description: "Engagement from close connections",
  },
  {
    factor: "Content Relevance",
    weight: "High",
    description: "Match with user interests",
  },
  {
    factor: "Engagement Velocity",
    weight: "High",
    description: "Speed of initial interactions",
  },
  {
    factor: "Dwell Time",
    weight: "Medium",
    description: "Time spent viewing content",
  },
] as const;

const COMMON_MISTAKES = [
  {
    title: "Posting External Links",
    impact: "Reduces reach by 40%",
    solution: "Share insights in text, add links in comments",
  },
  {
    title: "Wrong Posting Times",
    impact: "Reduces visibility by 60%",
    solution: "Post during business hours in target timezone",
  },
  {
    title: "Hashtag Overuse",
    impact: "Appears spammy to algorithm",
    solution: "Use 3-5 relevant hashtags maximum",
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
                <span>Elena Rodriguez</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>6 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-current" />
                <span>4.9 Rating</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              LinkedIn Algorithm: What You Need to Know
            </h1>
            <p className="text-xl opacity-90">
              Understanding how the LinkedIn algorithm works and how to make it work for you. A comprehensive guide to maximizing your content's reach.
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
                The LinkedIn algorithm determines what content appears in users' feeds and how prominently it's displayed. Understanding its mechanics is crucial for anyone looking to build a strong presence on the platform.
              </p>
              <p className="text-gray-600 mb-8">
                In this guide, we'll break down the key components of LinkedIn's algorithm, reveal the factors that influence content visibility, and share proven strategies to optimize your posts for maximum reach.
              </p>
              
              {/* Key Stats */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {ALGORITHM_STATS.map((stat) => (
                  <div key={stat.metric} className="bg-gray-50 rounded-xl p-6 text-center">
                    <p className="text-3xl font-bold text-[#0077B5] mb-2">{stat.metric}</p>
                    <p className="text-gray-600">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How it Works */}
            <div id="how-it-works" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">How the Algorithm Works</h2>
              <div className="bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">The 3-Phase Process</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold mb-2">Initial Filter</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Quality check</li>
                      <li>• Spam detection</li>
                      <li>• Content categorization</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold mb-2">Testing Period</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Initial audience sample</li>
                      <li>• Engagement monitoring</li>
                      <li>• Velocity tracking</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold mb-2">Final Score</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Reach determination</li>
                      <li>• Distribution decision</li>
                      <li>• Long-term value</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ranking Factors */}
            <div id="ranking-factors" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Key Ranking Factors</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-600">Factor</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-600">Weight</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-600">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {RANKING_FACTORS.map((factor) => (
                        <tr key={factor.factor} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{factor.factor}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              factor.weight === "Very High"
                                ? "bg-green-100 text-green-800"
                                : factor.weight === "High"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                            }`}>
                              {factor.weight}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{factor.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div id="best-practices" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center mb-4">
                    <ThumbsUp className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Engage Early</h3>
                  <p className="text-gray-600">
                    Respond to comments within the first hour. Early engagement signals quality content to the algorithm.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Start Conversations</h3>
                  <p className="text-gray-600">
                    End posts with questions. Comments carry more weight than likes in the algorithm.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Post Consistently</h3>
                  <p className="text-gray-600">
                    Maintain a regular posting schedule. The algorithm favors accounts with consistent activity.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Native Content</h3>
                  <p className="text-gray-600">
                    Use LinkedIn's native features. The algorithm prioritizes content that keeps users on the platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div id="mistakes" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Common Mistakes</h2>
              <div className="space-y-6">
                {COMMON_MISTAKES.map((mistake) => (
                  <div key={mistake.title} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{mistake.title}</h3>
                        <p className="text-red-500 text-sm">{mistake.impact}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <p className="text-gray-600">{mistake.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optimization Tips */}
            <div id="optimization" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Optimization Tips</h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold">First Hour is Critical</h3>
                      <p className="text-gray-600">Notify your network when posting and engage actively in the first hour</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold">Use LikedIn</h3>
                      <p className="text-gray-600">Get initial engagement with 100 free likes to trigger the algorithm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold">Monitor Analytics</h3>
                      <p className="text-gray-600">Track performance and adjust your strategy based on data</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#0077B5] rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Master the LinkedIn Algorithm?
              </h3>
              <p className="text-lg mb-6">
                Start with 100 free likes to boost your initial engagement!
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