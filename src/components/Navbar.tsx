
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <img
              src="/lovable-uploads/dc4ce7c6-c64d-461b-afcf-1d89929a16c1.png"
              alt="Stack AI"
              className="h-8"
            />
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                Why
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                Solutions
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                Company
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                Developers
              </a>
            </div>
          </div>
          <Button className="bg-white text-[#13112E] hover:bg-white/90 rounded-full px-6 text-sm font-medium">
            Start for Free
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
