import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Dumbbell, Clock, Users, Trophy, Star } from "lucide-react";

const Trainer = () => {
  const navigate = useNavigate();

  const programs = [
    {
      title: "Personal Training",
      price: "£75/session",
      description: "One-on-one customized training sessions",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Elite Performance",
      price: "£120/session",
      description: "Advanced athletic performance training",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "Group Sessions",
      price: "£25/session",
      description: "High-energy group workout classes",
      icon: <Star className="w-6 h-6" />
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
            <Dumbbell className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">Elite Fitness</span>
          </div>
          <Button variant="ghost">Contact</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
            alt="Personal Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-primary">Lifestyle</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Professional personal training for all fitness levels
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                <Clock className="w-4 h-4" />
                Book Session
              </Button>
              <Button size="lg" variant="outline">
                View Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Training Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
              <div className="mb-4 text-primary">{program.icon}</div>
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-muted-foreground mb-4">{program.description}</p>
              <p className="text-primary font-bold">{program.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Elite Fitness. Premium Personal Training.</p>
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

export default Trainer;