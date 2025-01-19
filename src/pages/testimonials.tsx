import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle2, TrendingUp } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Product Manager at Google",
    image: "photo-1573496359142-b8d87734a5a2",
    text: "Started with the free tier and saw amazing results! My LinkedIn engagement increased by 400% in just two weeks. The quality of likes is outstanding, and the delivery is super fast.",
    rating: 5,
    stats: {
      increase: "400%",
      timeframe: "2 weeks",
    },
  },
  {
    name: "James Wilson",
    role: "Sales Director at Microsoft",
    image: "photo-1560250097-0b93528c311a",
    text: "The free starter plan was perfect to test the waters. Now I get 3x more connection requests and job opportunities. Best investment in my professional growth!",
    rating: 5,
    stats: {
      increase: "300%",
      timeframe: "1 month",
    },
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Lead at Amazon",
    image: "photo-1580489944761-15a19d654956",
    text: "Best value for money! Started free, then upgraded. Now my posts reach 5x more people. The support team is incredibly helpful and responsive.",
    rating: 5,
    stats: {
      increase: "500%",
      timeframe: "3 weeks",
    },
  },
  {
    name: "Michael Chang",
    role: "Tech Lead at Meta",
    image: "photo-1507003211169-0a1dd7228f2d",
    text: "The most affordable LinkedIn growth service. My profile views went from 100 to 1,000+ per week. The quality of engagement is remarkable.",
    rating: 5,
    stats: {
      increase: "900%",
      timeframe: "1 month",
    },
  },
  {
    name: "Rachel Foster",
    role: "Startup Founder",
    image: "photo-1573497019940-1c28c88b4f3e",
    text: "Game-changer for my startup's visibility! The organic growth in my network has led to multiple partnership opportunities. Highly recommend!",
    rating: 5,
    stats: {
      increase: "600%",
      timeframe: "2 months",
    },
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    image: "photo-1500648767791-00dcc994a43e",
    text: "Incredible service! My technical posts now reach a much wider audience. The engagement feels genuine and has helped establish my expertise.",
    rating: 5,
    stats: {
      increase: "450%",
      timeframe: "3 weeks",
    },
  },
] as const;

const Testimonials: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl opacity-90">
              Join thousands of professionals who've transformed their LinkedIn presence with our service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#0077B5]">50K+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#0077B5]">4.9/5</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#0077B5]">400%+</p>
              <p className="text-gray-600">Average Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="w-16 h-16 border-2 border-[#0077B5]/20">
                    <AvatarImage
                      src={`https://images.unsplash.com/${testimonial.image}`}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Growth</p>
                    <p className="font-bold text-[#0077B5]">{testimonial.stats.increase}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Timeframe</p>
                    <p className="font-bold text-[#0077B5]">{testimonial.stats.timeframe}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 bg-[#0077B5]/10 text-sm font-medium px-6 py-2 rounded-full mb-6">
              <TrendingUp className="h-4 w-4 text-[#0077B5]" />
              <span className="text-[#0077B5]">Join Our Success Stories</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your LinkedIn Presence?
            </h2>
            <Button 
              size="lg"
              className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white text-lg px-8 py-6 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Growing Free →
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                100 Free Likes
              </span>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>50K+ Happy Users</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              <span>400%+ Growth</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials; 