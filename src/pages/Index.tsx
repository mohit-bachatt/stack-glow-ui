
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Background3D from "@/components/Background3D";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B1F] via-[#151538] to-[#0B0B1F] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stars-bg.png')] opacity-30" />
      <Background3D />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#151538]/50 to-[#0B0B1F] pointer-events-none" />
      <Navbar />
      <Hero />
    </div>
  );
};

export default Index;
