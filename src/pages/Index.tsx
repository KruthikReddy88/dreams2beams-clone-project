import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home, Building2, Factory } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description:
        "Custom-built homes, villas, and apartments crafted with precision and quality.",
    },
    {
      icon: Building2,
      title: "Commercial Projects",
      description:
        "Modern offices, retail spaces, and mixed-use developments designed for growth.",
    },
    {
      icon: Factory,
      title: "Industrial Construction",
      description:
        "Warehouses and factories built to meet demanding operational needs.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Building <span className="text-primary">Dreams</span> Into <span className="text-primary">Reality</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Transform your construction vision with expert builders, architects, and engineers — from concept to completion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calculator">
              <Button size="lg">Get Cost Estimate</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            We deliver complete end-to-end solutions for residential, commercial, and industrial construction projects.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          <div className="mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Banking Partners Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Banking Partners in Bengaluru</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Helping customers get easy access to loans for building construction in Bangalore.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
            <img src="/images/bajajfinserv.png" alt="Bajaj Finserv" className="mx-auto h-14 object-contain" />
            <img src="/images/basic.png" alt="BASIC" className="mx-auto h-14 object-contain" />
            <img src="/images/godrej.png" alt="Godrej Housing Finance" className="mx-auto h-14 object-contain" />
            <img src="/images/hdfc.png" alt="HDFC Home Loans" className="mx-auto h-14 object-contain" />
            <img src="/images/housing.png" alt="Housing.com" className="mx-auto h-14 object-contain" />
            <img src="/images/sbi.png" alt="SBI Home Loans" className="mx-auto h-14 object-contain" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Dream?</h2>
          <p className="text-muted-foreground mb-8">
            Let’s make your construction project a reality — on time and within budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calculator">
              <Button size="lg">Get Estimate</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
