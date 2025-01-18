import { useState, useRef } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, ExternalLink, Waves } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();
  const portfolioRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  
  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    toast({
      title: "Scrolling to Our Premium Projects",
      description: "Check out our latest work!",
    });
  };
  
  const portfolioItems = [
    { 
      id: 1, 
      title: "Real Estate Agency Website", 
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      link: "/examples/realestate"
    },
    { 
      id: 2, 
      title: "Personal Trainer Portfolio", 
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      link: "/examples/trainer"
    },
    { 
      id: 3, 
      title: "Restaurant Website", 
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      link: "/examples/restaurant"
    },
    { 
      id: 4, 
      title: "Law Firm Website", 
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
      link: "/examples/lawfirm"
    },
    { 
      id: 5, 
      title: "Medical Clinic Website", 
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
      link: "/examples/clinic"
    },
    { 
      id: 6, 
      title: "Architecture Studio Website", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      link: "/examples/architecture"
    },
  ];

  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "UI/UX Design",
    "Mobile Development", "Cloud Architecture", "API Integration"
  ];

  const handleBooking = (date: Date | undefined) => {
    if (date) {
      toast({
        title: "Consultation Booked!",
        description: `Your consultation is scheduled for ${date.toLocaleDateString()}`,
      });
    }
  };

  const handleViewProject = (link: string, title: string) => {
    toast({
      title: "Opening Project Example",
      description: `Loading ${title} example...`,
    });
    navigate(link);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg h-screen flex items-center justify-center px-4 text-center">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 relative"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20 opacity-75 blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <div className="relative flex items-center justify-center gap-2">
                <Waves className="w-8 h-8 text-white/90" />
                <h2 className="text-3xl md:text-4xl font-bold text-white/90 p-2">
                  Web Waves Design
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white/50"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </h2>
              </div>
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Crafting Digital Excellence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Premium web solutions for ambitious brands
          </motion.p>
          <Button 
            size="lg" 
            className="text-lg rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-opacity-90 hover:bg-opacity-100"
            onClick={scrollToPortfolio}
          >
            View Our Work
          </Button>
        </div>
      </section>

      {/* Portfolio Section */}
      <motion.section 
        ref={portfolioRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Our Premium Projects</h2>
        <div className="portfolio-scroll flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-4">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              className="min-w-[300px] md:min-w-[600px] snap-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-muted rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-[300px] object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <Button 
                    onClick={() => handleViewProject(item.link, item.title)}
                    className="w-full"
                  >
                    Mini Overview on Work <ExternalLink className="ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Expertise</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="floating-skill bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Book a Consultation</h2>
        <div className="max-w-md mx-auto bg-muted p-6 rounded-lg">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="bg-background rounded-lg p-4"
          />
          <Button 
            className="w-full mt-4" 
            onClick={() => handleBooking(date)}
          >
            Book Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
