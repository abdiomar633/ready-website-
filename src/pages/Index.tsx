import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, ExternalLink, Wave } from "lucide-react";

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();
  
  const portfolioItems = [
    { 
      id: 1, 
      title: "E-commerce Platform", 
      price: "£12,000", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "https://example.com/ecommerce"
    },
    { 
      id: 2, 
      title: "SaaS Dashboard", 
      price: "£15,000", 
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "https://example.com/saas"
    },
    { 
      id: 3, 
      title: "Mobile App", 
      price: "£10,000", 
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
      link: "https://example.com/mobile"
    },
    { 
      id: 4, 
      title: "Corporate Website", 
      price: "£8,000", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "https://example.com/corporate"
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
      title: "Opening Project",
      description: `Redirecting to ${title}...`,
    });
    window.open(link, '_blank');
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
                className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-75 blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <h2 className="relative text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent p-2">
                Web Waves Design
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </h2>
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
          <Button size="lg" className="text-lg">
            View Our Work
          </Button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
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
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-xl text-primary mb-4">{item.price}</p>
                  <Button 
                    onClick={() => handleViewProject(item.link, item.title)}
                    className="w-full"
                  >
                    View Project <ExternalLink className="ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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