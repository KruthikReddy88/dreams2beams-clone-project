import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const CalculatorPage = () => {
  const [projectType, setProjectType] = useState("");
  const [area, setArea] = useState("");
  const [quality, setQuality] = useState("");
  const [floors, setFloors] = useState("");
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateCost = () => {
    if (!projectType || !area || !quality || !floors) {
      toast.error("Please fill in all fields");
      return;
    }

    const areaNum = parseFloat(area);
    const floorsNum = parseFloat(floors);

    // Base cost per sq ft
    let baseCost = 0;
    switch (projectType) {
      case "residential":
        baseCost = 150;
        break;
      case "commercial":
        baseCost = 200;
        break;
      case "industrial":
        baseCost = 180;
        break;
      case "renovation":
        baseCost = 120;
        break;
    }

    // Quality multiplier
    let qualityMultiplier = 1;
    switch (quality) {
      case "standard":
        qualityMultiplier = 1;
        break;
      case "premium":
        qualityMultiplier = 1.5;
        break;
      case "luxury":
        qualityMultiplier = 2;
        break;
    }

    // Floor multiplier (more floors = slightly higher cost per sq ft)
    const floorMultiplier = 1 + (floorsNum - 1) * 0.1;

    const totalCost = areaNum * baseCost * qualityMultiplier * floorMultiplier;
    setEstimate(Math.round(totalCost));
    toast.success("Cost estimate calculated!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Construction Cost Calculator</h1>
              <p className="text-muted-foreground">
                Get an instant estimate for your construction project
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                  <CardDescription>Enter your project specifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select value={projectType} onValueChange={setProjectType}>
                      <SelectTrigger id="projectType">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Building</SelectItem>
                        <SelectItem value="commercial">Commercial Building</SelectItem>
                        <SelectItem value="industrial">Industrial Building</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">Total Area (sq ft)</Label>
                    <Input
                      id="area"
                      type="number"
                      placeholder="Enter area in square feet"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quality">Construction Quality</Label>
                    <Select value={quality} onValueChange={setQuality}>
                      <SelectTrigger id="quality">
                        <SelectValue placeholder="Select quality level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="luxury">Luxury</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="floors">Number of Floors</Label>
                    <Input
                      id="floors"
                      type="number"
                      placeholder="Enter number of floors"
                      value={floors}
                      onChange={(e) => setFloors(e.target.value)}
                    />
                  </div>

                  <Button onClick={calculateCost} className="w-full" size="lg">
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate Estimate
                  </Button>
                </CardContent>
              </Card>

              <Card className="md:sticky md:top-24 h-fit">
                <CardHeader>
                  <CardTitle>Cost Estimate</CardTitle>
                  <CardDescription>Your estimated construction cost</CardDescription>
                </CardHeader>
                <CardContent>
                  {estimate !== null ? (
                    <div className="text-center py-8">
                      <div className="text-5xl font-bold text-primary mb-4">
                        ${estimate.toLocaleString()}
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Estimated total project cost
                      </p>
                      <div className="space-y-2 text-sm text-muted-foreground text-left">
                        <p>• This is an approximate estimate</p>
                        <p>• Actual costs may vary based on materials and labor</p>
                        <p>• Includes basic construction costs</p>
                        <p>• Contact us for a detailed quote</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <Calculator className="h-16 w-16 mx-auto mb-4 opacity-20" />
                      <p>Fill in the form to calculate your estimate</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Materials</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Structural materials</li>
                      <li>• Finishing materials</li>
                      <li>• Fixtures & fittings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Labor</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Skilled workers</li>
                      <li>• Project management</li>
                      <li>• Quality control</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Services</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Design consultation</li>
                      <li>• Permits & approvals</li>
                      <li>• Site supervision</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CalculatorPage;
