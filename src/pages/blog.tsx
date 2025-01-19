import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User, Star, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const BLOG_POSTS = [
  {
    id: "how-to-increase-engagement",
    title: "How to Increase Your LinkedIn Engagement in 2024",
    excerpt: "Master the latest strategies and proven tactics to boost your LinkedIn presence and grow your professional network.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "5 min read",
    rating: "4.9",
  },
  {
    id: "power-of-linkedin",
    title: "The Power of LinkedIn for Business Growth",
    excerpt: "Discover how businesses are leveraging LinkedIn to reach new customers, build brand authority, and drive sustainable growth.",
    author: "James Wilson",
    date: "March 14, 2024",
    readTime: "4 min read",
    rating: "4.8",
  },
  {
    id: "linkedin-algorithm",
    title: "LinkedIn Algorithm: What You Need to Know",
    excerpt: "Understanding how the LinkedIn algorithm works and how to make it work for you. A comprehensive guide to maximizing your content's reach.",
    author: "Elena Rodriguez",
    date: "March 13, 2024",
    readTime: "6 min read",
    rating: "4.9",
  },
] as const;

const Blog: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              LinkedIn Growth Blog
            </h1>
            <p className="text-xl opacity-90">
              Expert insights and strategies to help you grow your LinkedIn presence
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12">
              {BLOG_POSTS.map((post) => (
                <Link 
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="block group"
                >
                  <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        <span className="text-gray-600">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        <span className="text-gray-600">{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 fill-current text-[#0077B5]" />
                        <span className="text-gray-600">{post.rating} Rating</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-[#0077B5] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[#0077B5]">
                      <span className="font-medium">Read more</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <BookOpen className="h-12 w-12 text-[#0077B5] mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest LinkedIn growth strategies and tips
              </p>
              <Link to="/">
                <Button size="lg" className="bg-[#0077B5] text-white hover:bg-[#0077B5]/90">
                  Subscribe Now →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Blog; 