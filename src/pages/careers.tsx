import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, ArrowRight, Building2, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const OPEN_POSITIONS = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Customer Success Specialist",
    department: "Support",
    location: "Remote",
    type: "Full-time",
  },
] as const;

const PERKS = [
  {
    icon: Users,
    title: "Remote-First Culture",
    description: "Work from anywhere in the world with our distributed team.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Choose your working hours to maintain a healthy work-life balance.",
  },
  {
    icon: Heart,
    title: "Competitive Benefits",
    description: "Comprehensive health insurance and wellness programs.",
  },
] as const;

const Careers: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl opacity-90">
              Help us empower professionals worldwide to grow their LinkedIn presence
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#0077B5]/10 text-sm font-medium px-6 py-2 rounded-full mb-6">
              <Building2 className="h-4 w-4 text-[#0077B5]" />
              <span className="text-[#0077B5]">Our Culture</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Why Work With Us?
            </h2>
            <p className="text-gray-600">
              Join a fast-growing team passionate about helping professionals succeed on LinkedIn. We offer a dynamic, remote-first environment where innovation and creativity thrive.
            </p>
          </div>

          {/* Perks Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            {PERKS.map((perk) => (
              <div 
                key={perk.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0077B5]/10 to-[#0077B5]/20 rounded-2xl flex items-center justify-center mb-6">
                  <perk.icon className="h-7 w-7 text-[#0077B5]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{perk.title}</h3>
                <p className="text-gray-600">{perk.description}</p>
              </div>
            ))}
          </div>

          {/* Open Positions */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="space-y-4">
              {OPEN_POSITIONS.map((position) => (
                <div 
                  key={position.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <Link to={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button variant="outline" className="group">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 