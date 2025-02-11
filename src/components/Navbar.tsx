
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className=" backdrop-blur-md rounded-full py-4 px-9">
              <img
                src="/lovable-uploads/bolna-logo.png"
                alt="Stack AI"
                className="h-12"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="https://agents.bolna.dev/" className="text-white/70 hover:text-white transition-colors text-sm">
                Agents
              </a>
              <a href="https://www.bolna.dev/#features" className="text-white/70 hover:text-white transition-colors text-sm">
                Features
              </a>
              <a href="https://www.bolna.dev/#pricing" className="text-white/70 hover:text-white transition-colors text-sm">
                Pricing
              </a>
              <a href="https://www.bolna.dev/#use-case" className="text-white/70 hover:text-white transition-colors text-sm">
                Use cases
              </a>
              <a href="https://www.bolna.dev/#integrations" className="text-white/70 hover:text-white transition-colors text-sm">
                Integrations
              </a>
              <a href="https://www.bolna.dev/#contact" className="text-white/70 hover:text-white transition-colors text-sm">
                Talk to us
              </a>
            </div>
          </div>
          <Button className="bg-white hover:bg-white/90 text-[#0B0B1F] rounded-full px-4 py-3 h-auto text-sm font-normal">
            Start for Free
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
