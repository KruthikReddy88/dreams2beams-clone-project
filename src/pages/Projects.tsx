import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Luxury Villa Complex",
      category: "Residential",
      location: "Beverly Hills, CA",
      area: "15,000 sq ft",
      status: "Completed",
      description: "Modern luxury villa complex with smart home technology and premium finishes."
    },
    {
      title: "Corporate Office Tower",
      category: "Commercial",
      location: "Downtown LA",
      area: "50,000 sq ft",
      status: "Completed",
      description: "20-story office building with state-of-the-art facilities and sustainable design."
    },
    {
      title: "Industrial Warehouse",
      category: "Industrial",
      location: "Long Beach, CA",
      area: "80,000 sq ft",
      status: "Completed",
      description: "High-capacity warehouse with advanced logistics and storage systems."
    },
    {
      title: "Retail Shopping Center",
      category: "Commercial",
      location: "Santa Monica, CA",
      area: "35,000 sq ft",
      status: "In Progress",
      description: "Modern shopping center with mixed retail and dining spaces."
    },
    {
      title: "Residential Apartments",
      category: "Residential",
      location: "Pasadena, CA",
      area: "40,000 sq ft",
      status: "In Progress",
      description: "Multi-family apartment complex with community amenities and parking."
    },
    {
      title: "Tech Campus",
      category: "Commercial",
      location: "Silicon Valley, CA",
      area: "100,000 sq ft",
      status: "Planning",
      description: "Modern tech campus with collaborative workspaces and innovation labs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
              <p className="text-xl text-muted-foreground">
                Explore our portfolio of successful construction projects
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/50 border-y">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50M+</div>
                <div className="text-sm text-muted-foreground">Sq Ft Built</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-medium">{project.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Area:</span>
                        <span className="font-medium">{project.area}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm mb-4">
                    "Dreams2Beams transformed our vision into reality. The attention to detail and professionalism was outstanding."
                  </p>
                  <div className="font-semibold">John Smith</div>
                  <div className="text-sm text-muted-foreground">Residential Client</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm mb-4">
                    "Exceptional quality and timely delivery. They handled our commercial project with utmost professionalism."
                  </p>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">Commercial Client</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm mb-4">
                    "The cost calculator gave us a clear estimate upfront. No surprises, just excellent service throughout."
                  </p>
                  <div className="font-semibold">Michael Brown</div>
                  <div className="text-sm text-muted-foreground">Industrial Client</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
