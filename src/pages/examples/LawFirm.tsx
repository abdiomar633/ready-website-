import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Scale, Phone, Mail, Briefcase, Award } from "lucide-react";

const LawFirm = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Corporate Law",
      price: "From £200/hr",
      description: "Expert business legal solutions",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Litigation",
      price: "From £250/hr",
      description: "Professional court representation",
      icon: <Scale className="w-6 h-6" />
    },
    {
      title: "Legal Consulting",
      price: "From £180/hr",
      description: "Strategic legal advice",
      icon: <Award className="w-6 h-6" />
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
            <Scale className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">Justice & Associates</span>
          </div>
          <Button variant="ghost">Contact</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
            alt="Law Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Legal <span className="text-primary">Excellence</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Professional legal services for your needs
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                <Phone className="w-4 h-4" />
                Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Legal Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
              <div className="mb-4 text-primary">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <p className="text-primary font-bold">{service.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Justice & Associates. Professional Legal Services.</p>
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

export default LawFirm;