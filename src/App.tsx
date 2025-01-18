import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RealEstate from "./pages/examples/RealEstate";
import Trainer from "./pages/examples/Trainer";
import Restaurant from "./pages/examples/Restaurant";
import LawFirm from "./pages/examples/LawFirm";
import Clinic from "./pages/examples/Clinic";
import Architecture from "./pages/examples/Architecture";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/examples/realestate" element={<RealEstate />} />
          <Route path="/examples/trainer" element={<Trainer />} />
          <Route path="/examples/restaurant" element={<Restaurant />} />
          <Route path="/examples/lawfirm" element={<LawFirm />} />
          <Route path="/examples/clinic" element={<Clinic />} />
          <Route path="/examples/architecture" element={<Architecture />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;