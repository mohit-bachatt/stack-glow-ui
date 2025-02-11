
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 curved-section">
      <div className="absolute inset-0 bg-stars" />
      
      <div className="space-y-8 max-w-5xl mx-auto relative z-10">
        <div className="inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 space-x-2 border border-white/10">
          <span className="bg-[#4842E3] text-white text-xs font-medium px-2 py-1 rounded-full">New</span>
          <span className="text-white/70 text-sm">Automatically detects anomalies, improving quality control.</span>
          <div className="flex items-center text-white/40 hover:text-white/60 transition-colors cursor-pointer">
            <span className="text-sm mr-1">Read More</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-medium text-white tracking-tight text-glow">
            The World's Leading
            <br />
            <span className="text-[#8E8CB8]">Computer Vision Platform</span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            The world's leading computer vision platform, empowering businesses
            with advanced AI-powered solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="bg-white text-[#13112E] hover:bg-white/90 rounded-full px-8 text-sm">
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-white border-white/10 hover:bg-white/5 rounded-full px-8 text-sm"
          >
            Our methodology
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 text-center pb-20 z-10">
        <div className="text-[#4842E3] uppercase text-sm font-medium tracking-wider mb-8">
          Our Client
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 px-4">
          {[
            { name: "Coinbase", className: "w-32" },
            { name: "Spotify", className: "w-28" },
            { name: "Slack", className: "w-24" },
            { name: "Dropbox", className: "w-32" },
            { name: "Zoom", className: "w-24" }
          ].map((client) => (
            <div
              key={client.name}
              className={`${client.className} bg-[#1D1B3F] backdrop-blur-sm px-8 py-4 rounded-full`}
            >
              <span className="text-white/80 font-medium">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
