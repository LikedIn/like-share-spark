import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Clock, Activity, Server, Globe, Database, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    name: "API Services",
    status: "operational",
    uptime: "99.99%",
    icon: Server,
  },
  {
    name: "Web Application",
    status: "operational",
    uptime: "99.98%",
    icon: Globe,
  },
  {
    name: "Database",
    status: "operational",
    uptime: "99.99%",
    icon: Database,
  },
  {
    name: "Security Systems",
    status: "operational",
    uptime: "100%",
    icon: Shield,
  },
] as const;

const INCIDENTS = [
  {
    date: "March 15, 2024",
    title: "Scheduled Maintenance",
    description: "System upgrade and performance improvements",
    status: "completed",
    time: "2:00 AM - 4:00 AM UTC",
  },
  {
    date: "March 10, 2024",
    title: "API Response Delay",
    description: "Brief delay in API responses due to high traffic",
    status: "resolved",
    time: "3:15 PM - 3:45 PM UTC",
  },
] as const;

const Status: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              System Status
            </h1>
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-100 px-4 py-2 rounded-full">
              <CheckCircle2 className="h-5 w-5" />
              <span>All Systems Operational</span>
            </div>
          </div>
        </div>
      </section>

      {/* Status Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0077B5]/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-[#0077B5]" />
                    </div>
                    <h3 className="font-semibold">{service.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-green-500">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm font-medium">Operational</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Uptime</span>
                  <span className="font-medium">{service.uptime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Incident History</h2>
              <Link to="/subscribe">
                <Button variant="outline" className="group">
                  Subscribe to Updates
                  <Activity className="ml-2 h-4 w-4 group-hover:text-[#0077B5]" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {INCIDENTS.map((incident) => (
                <div
                  key={incident.title}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold mb-1">{incident.title}</h3>
                      <p className="text-gray-600">{incident.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-green-500">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-sm font-medium capitalize">{incident.status}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{incident.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{incident.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subscribe Section */}
            <div className="mt-20 bg-[#0077B5]/5 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Get notified about system status changes and maintenance windows.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:border-transparent"
                />
                <Link to="/subscribe">
                  <Button className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white">
                    Subscribe
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Status; 