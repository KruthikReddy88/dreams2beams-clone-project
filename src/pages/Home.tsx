import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calculator, Users, Award, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Construction Dreams Into Reality
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert building services, instant cost estimates, and innovative solutions for your construction projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/calculator">
                <Button size="lg" className="w-full sm:w-auto">
                  <Calculator className="mr-2 h-5 w-5" />
                  Get Cost Estimate
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Dreams2Beams</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional construction services with transparency, quality, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Calculator className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Instant Cost Calculator</CardTitle>
                <CardDescription>
                  Get accurate construction cost estimates in minutes with our advanced calculator
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Expert Team</CardTitle>
                <CardDescription>
                  Work with experienced professionals dedicated to bringing your vision to life
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Quality Assurance</CardTitle>
                <CardDescription>
                  Premium materials and craftsmanship guaranteed on every project we undertake
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>On-Time Delivery</CardTitle>
                <CardDescription>
                  Efficient project management ensures your construction stays on schedule
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Licensed & Insured</CardTitle>
                <CardDescription>
                  Fully licensed contractors with comprehensive insurance for your peace of mind
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Full-Service Solutions</CardTitle>
                <CardDescription>
                  From planning to completion, we handle every aspect of your construction project
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Construction Project?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get an instant cost estimate or speak with our team to discuss your vision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/calculator">
                <Button size="lg" className="w-full sm:w-auto">
                  Calculate Costs Now
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
