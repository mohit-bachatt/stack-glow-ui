import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const handleStartClick = () => {
    window.location.href = "https://www.ropes.ai/";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="backdrop-blur-md rounded-full py-4 px-3">
              <img
                src="/lovable-uploads/ropes-logo.png"
                alt="Ropes Logo"
                className="h-10"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="https://www.ropes.ai/" className="text-white/70 hover:text-white transition-colors text-sm">
              Home
              </a>
              <a href="https://www.ropes.ai/preview" className="text-white/70 hover:text-white transition-colors text-sm">
                Preview
              </a>
              <a href="https://www.ropes.ai/pricing" className="text-white/70 hover:text-white transition-colors text-sm">
                Pricing
              </a>
              <a href="https://www.bolna.dev/#pricing" className="text-white/70 hover:text-white transition-colors text-sm">
                Careers
              </a>
              <a href="https://www.ropes.ai/careers" className="text-white/70 hover:text-white transition-colors text-sm">
                Contact us
              </a>
            </div>
          </div>
          <Button
            onClick={handleStartClick}
            className="bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] hover:opacity-90 text-white rounded-full px-4 py-3 h-auto text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;