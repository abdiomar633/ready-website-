import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Search, MapPin, Phone, Mail, Building2 } from "lucide-react";

const RealEstate = () => {
  const navigate = useNavigate();

  const featuredProperties = [
    {
      title: "Luxury Penthouse",
      location: "Mayfair, London",
      price: "£2,500,000",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
    },
    {
      title: "Modern Villa",
      location: "Kensington, London",
      price: "£3,750,000",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    },
    {
      title: "Historic Mansion",
      location: "Chelsea, London",
      price: "£4,200,000",
      image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-xl bg-background/95 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">LuxuryHomes</span>
          </div>
          <Button variant="ghost">Contact</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            alt="Luxury Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover Your <span className="text-primary">Dream Home</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Exclusive luxury properties in London's most prestigious locations
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                <Search className="w-4 h-4" />
                Browse Properties
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-4 h-4" />
                Schedule Viewing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <Card key={index} className="overflow-hidden border-none bg-muted/50 hover:bg-muted/80 transition-colors">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold text-lg">{property.price}</span>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our luxury property specialists are here to help you find your perfect home
          </p>
          <div className="flex justify-center gap-8">
            <Button variant="outline" className="gap-2">
              <Phone className="w-4 h-4" />
              +44 20 7123 4567
            </Button>
            <Button variant="outline" className="gap-2">
              <Mail className="w-4 h-4" />
              contact@luxuryhomes.com
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 LuxuryHomes. Premium Real Estate Solutions.</p>
          <Button 
            variant="link" 
            onClick={() => navigate('/')}
            className="mt-4"
          >
            Return to Portfolio
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default RealEstate;