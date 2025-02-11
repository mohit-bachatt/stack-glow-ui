
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img
              src="/lovable-uploads/dc4ce7c6-c64d-461b-afcf-1d89929a16c1.png"
              alt="Stack AI"
              className="h-8"
            />
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Solutions
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Templates
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Blog
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Customers
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Pricing
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-white/80">
              Log in
            </Button>
            <Button className="bg-white text-stack-bg-start hover:bg-white/90">
              Sign up
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
