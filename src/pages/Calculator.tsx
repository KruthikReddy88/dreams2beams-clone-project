import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const CalculatorPage = () => {
  const [areaType, setAreaType] = useState("site_area");
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [floors, setFloors] = useState("");
  const [houseType, setHouseType] = useState("duplex");
  const [bhk, setBhk] = useState("1");
  const [structure, setStructure] = useState("cement6");
  const [flooring, setFlooring] = useState("verified");
  const [doors, setDoors] = useState("ost");
  const [windows, setWindows] = useState("salwood");
  const [paintingType, setPaintingType] = useState("basic");
  const [estimate, setEstimate] = useState<number | null>(null);

  const bangaloreWards = [
    "Adugodi", "AECS Layout", "Akshayanagar", "Amrutha Hal", "Anagalapura", "Ananth Nagar", "Andrahal", "Anekal", "Anjanapura", "Annapurneshwari Nagar", "Arasanakunte", "Arekere", "Ashirvad Colony", "Ashok Nagar", "Attibele Anekal Road", "Attibele", "Attiguppe",
    "Austin Town", "Avenue Road", "Azad Nagar", "Babusa Palya", "Bagalakunte", "Bagalur", "Bagalur Road", "Bagaluru", "Bagepal", "Baiyyappanahalli", "Balagere", "Balepet", "Ballur", "Banashankari 3rd Stage", "Banashankari", "Banasvadi", "Banaswadi", "Bangalore Central",
    "Bangalore East", "Bangalore North", "Bangalore South", "Bangalore West", "Bannerghatta", "Bannerghatta Jigani Road", "Bannerghatta Road", "Bapujі Nagar", "Basapura", "Basavanagar", "Basavanagudi", "Basavanna Nagar", "Basaveshwara Nagar", "Battarahalli", "Begur",
    "Begur Road", "Belatur", "Bellandur", "Bellary Road", "Bel Road", "BEML Layout", "Bengaluru", "Benniganahalli", "Benson Town", "Bhaktnarahalli", "Bhoganhal", "Bhoopasandra", "Bhovi Palya", "Bhuvaneshwari Nagar", "Bidadi", "Bidrahal", "Bikasipura", "Bikkanahal",
    "Bilekahal", "Bileshivale", "Binny Pete", "B Narayanapura", "Bommanahal", "Bommasandra", "Bovalahal", "Brigade Road", "Brookefield", "Btm layout", "Budigere Road", "Budihal", "Byatarayanapura", "Byrathi", "CV Raman Nagar", "Chickpet", "Cooke Town", "Dasarahalli",
    "Devanahalli", "Domlur", "Electronic City", "Frazer Town", "Gandhi Nagar",
    "Gottigere", "Hebbal", "Hennur", "Horamavu", "Hoskote", "HSR Layout", "Indiranagar",
    "Jalahalli", "JP Nagar", "Kacharakanahalli", "Kamakshipalya", "Kengeri", "Koramangala",
    "Kothanur", "KR Puram", "Kumaraswamy Layout", "Lingarajapuram", "Mahadevapura", "Mahalakshmi Layout",
    "Malleswaram", "Marathahalli", "Mathikere", "Nagarbhavi", "Nagawara", "Nandini Layout",
    "Peenya", "Rajajinagar", "Rajarajeshwari Nagar", "Ramamurthy Nagar", "RT Nagar", "Sadashiva Nagar",
    "Sarjapur", "Shivaji Nagar", "Thalaghattapura", "Ulsoor", "Uttarahalli", "Vijayanagar",
    "Whitefield", "Yelahanka", "Yeshwanthpur"
  ].sort();

  const calculateCost = () => {
    if (!area || !location || !floors) {
      toast.error("Please fill in all required fields");
      return;
    }

    const areaNum = parseFloat(area);
    
    // Base cost per sq ft
    let baseCost = 1500;
    
    // House type multiplier
    const houseTypeMultiplier = houseType === "rental" ? 0.8 : houseType === "duplex_rental" ? 1.2 : 1;
    
    // BHK multiplier
    const bhkMultiplier = 1 + (parseInt(bhk) - 1) * 0.15;
    
    // Structure cost
    const structureCost = structure === "cement6" ? 0 : structure === "cement8" ? 50 : 100;
    
    // Flooring cost
    const flooringCost = flooring === "verified" ? 0 : flooring === "granite" ? 100 : 150;
    
    // Doors cost
    const doorsCost = doors === "ost" ? 0 : doors === "salwood" ? 200 : doors === "honnewood" ? 300 : 400;
    
    // Windows cost
    const windowsCost = windows === "salwood" ? 0 : windows === "honne" ? 100 : windows === "teakwood" ? 200 : windows === "upvc" ? 150 : 250;
    
    // Painting multiplier
    const paintingMultiplier = paintingType === "basic" ? 1 : 1.3;
    
    // Floor multiplier
    const floorCount = floors === "ground" ? 1 : parseInt(floors);
    const floorMultiplier = 1 + (floorCount - 1) * 0.1;
    
    const totalCostPerSqFt = (baseCost + structureCost + flooringCost + doorsCost + windowsCost) * 
                             houseTypeMultiplier * bhkMultiplier * paintingMultiplier * floorMultiplier;
    
    const totalCost = areaNum * totalCostPerSqFt;
    setEstimate(Math.round(totalCost));
    toast.success("Cost estimate calculated!");
  };

  const OptionButton = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded text-sm font-medium transition-all",
        active 
          ? "bg-emerald-500 text-white hover:bg-emerald-600" 
          : "bg-background border hover:bg-muted"
      )}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Construction Cost Calculator</h1>
              <p className="text-muted-foreground">
                Get an instant estimate for your construction project
              </p>
            </div>

            {/* <div className="grid lg:grid-cols-[200px_1fr] gap-6">
              {/* Sidebar */}
              <div className="space-y-2">
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">SITE AREA</Button>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">LOCATION</Button>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">FLOORS</Button>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">HOUSE TYPE</Button>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">BHK</Button>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">STRUCTURE</Button>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">FLOORING</Button>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">DOORS</Button>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">WINDOWS</Button>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">PAINTING TYPE</Button>
              </div> */}

              {/* Main Content */}
              <Card>
                <CardContent className="p-6 space-y-8">
                  {/* Area Type */}
                  <div className="space-y-4">
                    <RadioGroup value={areaType} onValueChange={setAreaType} className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="site_area" id="site_area" />
                        <Label htmlFor="site_area">SITE AREA</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="site_dimension" id="site_dimension" />
                        <Label htmlFor="site_dimension">SITE DIMENSION</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sq_ft" id="sq_ft" />
                        <Label htmlFor="sq_ft">SQ. FT.</Label>
                      </div>
                    </RadioGroup>
                    <div className="flex gap-2 items-center">
                      <Input
                        type="number"
                        placeholder="1200"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="flex-1"
                      />
                      <span className="text-muted-foreground">sq.ft</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-4">
                    <Label>LOCATION</Label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {bangaloreWards.map((ward) => (
                          <SelectItem key={ward} value={ward.toLowerCase()}>
                            {ward}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Floors */}
                  <div className="space-y-4">
                    <Label>FLOORS</Label>
                    <Select value={floors} onValueChange={setFloors}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select floors" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ground">Ground Floor Only</SelectItem>
                        <SelectItem value="2">Ground + 1 Floor</SelectItem>
                        <SelectItem value="3">Ground + 2 Floors</SelectItem>
                        <SelectItem value="4">Ground + 3 Floors</SelectItem>
                        <SelectItem value="5">Ground + 4 Floors</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* House Type */}
                  <div className="space-y-4">
                    <Label>HOUSE TYPE</Label>
                    <div className="flex gap-2 flex-wrap">
                      <OptionButton active={houseType === "duplex"} onClick={() => setHouseType("duplex")}>
                        Duplex House
                      </OptionButton>
                      <OptionButton active={houseType === "rental"} onClick={() => setHouseType("rental")}>
                        Rental House
                      </OptionButton>
                      <OptionButton active={houseType === "duplex_rental"} onClick={() => setHouseType("duplex_rental")}>
                        Duplex+Rental House
                      </OptionButton>
                    </div>
                  </div>

                  {/* BHK */}
                  <div className="space-y-4">
                    <Label>BHK</Label>
                    <div className="flex gap-2 flex-wrap">
                      <OptionButton active={bhk === "1"} onClick={() => setBhk("1")}>1 BHK</OptionButton>
                      <OptionButton active={bhk === "2"} onClick={() => setBhk("2")}>2 BHK</OptionButton>
                      <OptionButton active={bhk === "3"} onClick={() => setBhk("3")}>3 BHK</OptionButton>
                      <OptionButton active={bhk === "4"} onClick={() => setBhk("4")}>4 BHK</OptionButton>
                    </div>
                  </div>

                  {/* Structure */}
                  <div className="space-y-4">
                    <Label>STRUCTURE</Label>
                    <div className="flex gap-2 flex-wrap">
                      <OptionButton active={structure === "cement6"} onClick={() => setStructure("cement6")}>
                        Cement Blocks (6")
                      </OptionButton>
                      <OptionButton active={structure === "cement8"} onClick={() => setStructure("cement8")}>
                        Cement Blocks (8")
                      </OptionButton>
                      <OptionButton active={structure === "bricks"} onClick={() => setStructure("bricks")}>
                        Bricks
                      </OptionButton>
                    </div>
                  </div>

                  {/* Flooring */}
                  <div className="space-y-4">
                    <Label>FLOORING</Label>
                    <div className="flex gap-2 flex-wrap">
                      <OptionButton active={flooring === "verified"} onClick={() => setFlooring("verified")}>
                        Vetrified
                      </OptionButton>
                      <OptionButton active={flooring === "granite"} onClick={() => setFlooring("granite")}>
                        Granite
                      </OptionButton>
                      <OptionButton active={flooring === "marble_wooden"} onClick={() => setFlooring("marble_wooden")}>
                        Marble + Wooden
                      </OptionButton>
                    </div>
                  </div>

                  {/* Doors */}
                  <div className="space-y-4">
                    <Label>DOORS</Label>
                    <div className="flex gap-2 flex-wrap">
                      <OptionButton active={doors === "ost"} onClick={() => setDoors("ost")}>OSTDoors</OptionButton>
                      <OptionButton active={doors === "salwood"} onClick={() => setDoors("salwood")}>SalWood</OptionButton>
                      <OptionButton active={doors === "honnewood"} onClick={() => setDoors("honnewood")}>Honnewood</OptionButton>
                      <OptionButton active={doors === "teakwood"} onClick={() => setDoors("teakwood")}>Teakwood</OptionButton>
                    </div>
                  </div>

                  {/* Windows */}
                  <div className="space-y-4">
                    <Label>WINDOWS</Label>
                    <div className="flex gap-2 flex-wrap">
                      <OptionButton active={windows === "salwood"} onClick={() => setWindows("salwood")}>Salwood</OptionButton>
                      <OptionButton active={windows === "honne"} onClick={() => setWindows("honne")}>Honne</OptionButton>
                      <OptionButton active={windows === "teakwood"} onClick={() => setWindows("teakwood")}>Teakwood</OptionButton>
                      <OptionButton active={windows === "upvc"} onClick={() => setWindows("upvc")}>UPVC</OptionButton>
                      <OptionButton active={windows === "aluminum"} onClick={() => setWindows("aluminum")}>Aluminumum</OptionButton>
                    </div>
                  </div>

                  {/* Painting Type */}
                  <div className="space-y-4">
                    <Label>PAINTING TYPE</Label>
                    <div className="flex gap-2 flex-wrap">
                      <OptionButton active={paintingType === "basic"} onClick={() => setPaintingType("basic")}>
                        Basic
                      </OptionButton>
                      <OptionButton active={paintingType === "premium"} onClick={() => setPaintingType("premium")}>
                        Premium
                      </OptionButton>
                    </div>
                  </div>

                  {/* Calculate Button */}
                  <Button 
                    onClick={calculateCost} 
                    className="w-full bg-red-500 hover:bg-red-600 text-white h-14 text-lg rounded-full"
                    size="lg"
                  >
                    CALCULATE CONSTRUCTION COST IN BANGALORE
                  </Button>

                  {/* Result */}
                  {estimate !== null && (
                    <div className="mt-6 p-6 bg-emerald-50 dark:bg-emerald-950 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-2">Estimated Total Cost</p>
                      <div className="text-4xl font-bold text-emerald-600">
                        ₹{estimate.toLocaleString('en-IN')}
                      </div>
                      <p className="text-xs text-muted-foreground mt-4">
                        * This is an approximate estimate. Actual costs may vary based on materials, labor, and site conditions.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CalculatorPage;
