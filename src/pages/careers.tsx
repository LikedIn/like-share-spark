import { type FC, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Send,
  CheckCircle2,
  X,
  Building2,
  Users,
  Sparkles,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const OPEN_POSITIONS = [
  {
    id: "frontend-engineer",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote (Europe)",
    type: "Full-time",
    salary: "€60,000 - €90,000",
    description:
      "We're looking for a Senior Frontend Engineer to help us build the future of LinkedIn automation. You'll be working with React, TypeScript, and modern web technologies.",
    requirements: [
      "5+ years of experience with React and TypeScript",
      "Experience with modern frontend tools and practices",
      "Strong understanding of web performance and optimization",
      "Experience with responsive design and cross-browser compatibility",
      "Excellent problem-solving skills and attention to detail",
    ],
    responsibilities: [
      "Build and maintain our web application using React and TypeScript",
      "Collaborate with designers to implement beautiful, responsive interfaces",
      "Optimize application for maximum speed and scalability",
      "Write clean, maintainable code with comprehensive documentation",
      "Participate in code reviews and mentor junior developers",
    ],
    benefits: [
      "Competitive salary and equity",
      "Remote-first culture",
      "Flexible working hours",
      "Learning and development budget",
      "Premium health insurance",
      "Annual team retreats",
    ],
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote (Worldwide)",
    type: "Full-time",
    salary: "€50,000 - €80,000",
    description:
      "Join our backend team to build scalable systems that power thousands of LinkedIn interactions every day. You'll work with Node.js, PostgreSQL, and cloud technologies.",
    requirements: [
      "3+ years of experience with Node.js and TypeScript",
      "Strong knowledge of SQL and database design",
      "Experience with cloud platforms (AWS/GCP)",
      "Understanding of API design and microservices",
      "Knowledge of security best practices",
    ],
    responsibilities: [
      "Design and implement scalable backend services",
      "Optimize database performance and queries",
      "Build and maintain RESTful APIs",
      "Implement security measures and best practices",
      "Collaborate with frontend team for seamless integration",
    ],
    benefits: [
      "Competitive salary and equity",
      "Remote-first culture",
      "Flexible working hours",
      "Learning and development budget",
      "Premium health insurance",
      "Annual team retreats",
    ],
  },
  {
    id: "product-designer",
    title: "Senior Product Designer",
    department: "Design",
    location: "Remote (Europe)",
    type: "Full-time",
    salary: "€55,000 - €85,000",
    description:
      "We're seeking a Senior Product Designer to craft beautiful, intuitive experiences for our users. You'll work closely with product and engineering teams to design the future of our platform.",
    requirements: [
      "5+ years of product design experience",
      "Strong portfolio demonstrating UX/UI skills",
      "Experience with Figma and modern design tools",
      "Understanding of web and mobile design principles",
      "Experience with design systems",
    ],
    responsibilities: [
      "Lead the design of new features and improvements",
      "Create and maintain our design system",
      "Conduct user research and usability testing",
      "Collaborate with engineering on implementation",
      "Mentor junior designers and provide feedback",
    ],
    benefits: [
      "Competitive salary and equity",
      "Remote-first culture",
      "Flexible working hours",
      "Learning and development budget",
      "Premium health insurance",
      "Annual team retreats",
    ],
  },
] as const;

const JobDetails: FC<{
  job: (typeof OPEN_POSITIONS)[number];
  onClose: () => void;
  onApply: (jobId: string) => void;
}> = ({ job, onClose, onApply }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Building2 className="h-4 w-4" />
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg">{job.description}</p>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Requirements</h3>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Responsibilities</h3>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Benefits</h3>
              <ul className="space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Button
              onClick={() => onApply(job.id)}
              className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white"
            >
              Apply for this position
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ApplicationForm: FC<{
  jobId: string;
  jobTitle: string;
  onClose: () => void;
}> = ({ jobId, jobTitle, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        "service_zmc5hpy",
        "template_tygg16h",
        {
          from_name: formData.get("name"),
          from_email: formData.get("email"),
          job_id: jobId,
          job_title: jobTitle,
          phone: formData.get("phone"),
          linkedin: formData.get("linkedin"),
          cover_letter: formData.get("coverLetter"),
          to_email: "jaumepuigturon4@gmail.com",
        },
        "jhJk7b-5uZVgjrn-v"
      );

      setIsSubmitted(true);
      form.reset();
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Apply for {jobTitle}</h2>
              <p className="text-gray-600">
                Fill out the form below to apply for this position.
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Application Sent!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for applying. We'll review your application and get
                back to you soon.
              </p>
              <Button
                onClick={onClose}
                variant="outline"
                className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5]/5"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="linkedin"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    id="linkedin"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:border-transparent"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  id="coverLetter"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:border-transparent resize-none"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                />
              </div>

              {error && <div className="text-red-500 text-sm">{error}</div>}

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="border-gray-300"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Application
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const Careers: FC = () => {
  useEffect(() => {
    emailjs.init("jhJk7b-5uZVgjrn-v");
  }, []);

  const [selectedJob, setSelectedJob] = useState<
    (typeof OPEN_POSITIONS)[number] | null
  >(null);
  const [isApplying, setIsApplying] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl opacity-90">
              Help us revolutionize LinkedIn growth while working with the
              latest technologies in a remote-first environment.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Join LikedIn?</h2>
              <p className="text-xl text-gray-600">
                Join a team of passionate individuals building the future of
                LinkedIn growth
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#0077B5]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Remote-First Culture</h3>
                <p className="text-gray-600">
                  Work from anywhere in the world. We believe in flexibility and
                  trust.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-[#0077B5]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation & Growth</h3>
                <p className="text-gray-600">
                  Work with cutting-edge technologies and grow your skills.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-[#0077B5]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Competitive Benefits</h3>
                <p className="text-gray-600">
                  Great compensation, equity, and comprehensive benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600">
                Find your next role and help us shape the future
              </p>
            </div>

            <div className="space-y-6">
              {OPEN_POSITIONS.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        onClick={() => setSelectedJob(job)}
                        className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5]/5"
                      >
                        View Details
                      </Button>
                      <Button
                        onClick={() => {
                          setSelectedJob(job);
                          setIsApplying(true);
                        }}
                        className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && !isApplying && (
        <JobDetails
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onApply={(jobId) => setIsApplying(true)}
        />
      )}

      {/* Application Form Modal */}
      {selectedJob && isApplying && (
        <ApplicationForm
          jobId={selectedJob.id}
          jobTitle={selectedJob.title}
          onClose={() => {
            setSelectedJob(null);
            setIsApplying(false);
          }}
        />
      )}
    </div>
  );
};

export default Careers;
