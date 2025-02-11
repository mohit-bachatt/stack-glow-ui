
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="bg-white/5 backdrop-blur-md rounded-full py-2 px-4">
              <img
                src="/lovable-uploads/dc4ce7c6-c64d-461b-afcf-1d89929a16c1.png"
                alt="Stack AI"
                className="h-7"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                Why
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                Solutions
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                Company
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                Developers
              </a>
            </div>
          </div>
          <Button className="bg-white hover:bg-white/90 text-[#0B0B1F] rounded-full px-6 py-5 h-auto text-sm font-normal">
            Start for Free
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
