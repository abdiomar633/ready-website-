import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();
  
  const portfolioItems = [
    { id: 1, title: "E-commerce Platform", price: "£12,000", image: "https://placehold.co/600x400/6366f1/white?text=E-commerce" },
    { id: 2, title: "SaaS Dashboard", price: "£15,000", image: "https://placehold.co/600x400/8b5cf6/white?text=SaaS" },
    { id: 3, title: "Mobile App", price: "£10,000", image: "https://placehold.co/600x400/3b82f6/white?text=Mobile" },
    { id: 4, title: "Corporate Website", price: "£8,000", image: "https://placehold.co/600x400/06b6d4/white?text=Corporate" },
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg h-screen flex items-center justify-center px-4 text-center">
        <div>
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
        <div className="portfolio-scroll">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              className="min-w-[300px] md:min-w-[600px] snap-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-muted rounded-lg overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-[300px] object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-xl text-primary">{item.price}</p>
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