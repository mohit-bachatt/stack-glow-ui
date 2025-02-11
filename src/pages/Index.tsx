
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stack-bg-start to-stack-bg-end relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjAyIiBjeD0iMTAwIiBjeT0iMTAwIiByPSIxLjUiLz48L2c+PC9zdmc+')] bg-repeat opacity-50" />
      <Navbar />
      <Hero />
    </div>
  );
};

export default Index;
