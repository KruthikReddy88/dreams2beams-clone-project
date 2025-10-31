import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Home, Factory, Wrench, Ruler, Paintbrush } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, villas, and residential complexes built to your specifications with premium materials and expert craftsmanship.",
      features: ["Custom Home Design", "Villa Construction", "Residential Complexes", "Smart Home Integration"]
    },
    {
      icon: Building2,
      title: "Commercial Buildings",
      description: "Office buildings, retail spaces, and commercial complexes designed for functionality and aesthetics.",
      features: ["Office Buildings", "Retail Spaces", "Shopping Centers", "Mixed-Use Developments"]
    },
    {
      icon: Factory,
      title: "Industrial Construction",
      description: "Warehouses, factories, and industrial facilities built with durability and efficiency in mind.",
      features: ["Warehouses", "Manufacturing Plants", "Storage Facilities", "Industrial Parks"]
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our comprehensive renovation and remodeling services.",
      features: ["Interior Remodeling", "Exterior Renovation", "Kitchen & Bath Upgrades", "Space Optimization"]
    },
    {
      icon: Ruler,
      title: "Design & Planning",
      description: "Complete architectural design and project planning services from concept to completion.",
      features: ["Architectural Design", "3D Visualization", "Structural Engineering", "Project Planning"]
    },
    {
      icon: Paintbrush,
      title: "Finishing & Interiors",
      description: "Premium finishing services and interior design to bring your vision to life.",
      features: ["Interior Design", "Custom Finishes", "Flooring Installation", "Painting & Decoration"]
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive construction solutions tailored to your needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Icon className="h-12 w-12 text-primary mb-4" />
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach to deliver your project on time and within budget
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Discuss your vision and requirements
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Design and plan every detail
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Construction</h3>
                <p className="text-sm text-muted-foreground">
                  Build with precision and quality
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Handover</h3>
                <p className="text-sm text-muted-foreground">
                  Complete and deliver your project
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contact us today to discuss your construction project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/calculator">
                  <Button size="lg">Get Cost Estimate</Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
