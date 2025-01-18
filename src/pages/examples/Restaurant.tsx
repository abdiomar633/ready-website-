import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Utensils, Clock, Menu, Wine, Star } from "lucide-react";

const Restaurant = () => {
  const navigate = useNavigate();

  const specialties = [
    {
      title: "Fine Dining",
      price: "From £45",
      description: "Exquisite culinary experiences",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Wine Selection",
      price: "From £35",
      description: "Premium international wines",
      icon: <Wine className="w-6 h-6" />
    },
    {
      title: "Chef's Table",
      price: "£120 pp",
      description: "Exclusive tasting menu",
      icon: <Utensils className="w-6 h-6" />
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
            <Utensils className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">La Maison</span>
          </div>
          <Button variant="ghost">Reservations</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt="Fine Dining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Culinary <span className="text-primary">Excellence</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Experience fine dining at its finest
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                <Clock className="w-4 h-4" />
                Reserve Table
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Menu className="w-4 h-4" />
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
              <div className="mb-4 text-primary">{specialty.icon}</div>
              <h3 className="text-xl font-bold mb-2">{specialty.title}</h3>
              <p className="text-muted-foreground mb-4">{specialty.description}</p>
              <p className="text-primary font-bold">{specialty.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 La Maison. Fine Dining Restaurant.</p>
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

export default Restaurant;