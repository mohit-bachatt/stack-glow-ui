
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0B0B1F] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stars-bg.png')] opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1F] via-[#151538] to-[#0B0B1F]" />
      <Navbar />
      <Hero />
    </div>
  );
};

export default Index;
