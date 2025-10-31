import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Target, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dreams2Beams</h1>
              <p className="text-xl text-muted-foreground">
                Building excellence through innovation, quality, and dedication
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Founded with a vision to transform the construction industry, Dreams2Beams has grown from a small team of passionate builders to a leading construction company serving clients across the nation.
                </p>
                <p className="mb-4">
                  Our journey began with a simple belief: that every construction project, regardless of size, deserves the same level of attention, quality, and innovation. This philosophy has guided us through over 15 years of successful projects and satisfied clients.
                </p>
                <p>
                  Today, we combine traditional craftsmanship with modern technology to deliver exceptional results. Our innovative cost calculator and transparent pricing have revolutionized how clients plan their construction projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <Award className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Quality First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We never compromise on quality, using only premium materials and expert craftsmanship
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Client Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Your satisfaction is our priority. We listen, adapt, and deliver beyond expectations
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Precision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Every detail matters. We bring meticulous attention to every aspect of construction
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Embracing new technologies and methods to deliver better, faster results
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the experts behind your construction success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Engineering Team</h3>
                <p className="text-sm text-muted-foreground">
                  Licensed engineers with decades of combined experience in structural and civil engineering
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Construction Crew</h3>
                <p className="text-sm text-muted-foreground">
                  Skilled craftsmen dedicated to bringing your vision to life with precision and care
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Project Managers</h3>
                <p className="text-sm text-muted-foreground">
                  Experienced coordinators ensuring your project stays on time and within budget
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
