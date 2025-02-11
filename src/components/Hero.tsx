
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="space-y-8 max-w-5xl mx-auto relative z-10">
        <div className="inline-flex items-center bg-white/5 backdrop-blur-md rounded-full px-4 py-2 space-x-3 border border-white/10">
          <span className="bg-[#4842E3] text-white text-xs px-2 py-1 rounded-full">New</span>
          <span className="text-white/70 text-sm">Automatically detects anomalies, improving quality control.</span>
          <div className="flex items-center text-white/40 hover:text-white/60 transition-colors cursor-pointer">
            <span className="text-sm mr-1">Read More</span>
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-normal text-white tracking-tight leading-tight">
            The World's Leading
            <br />
            <span className="text-white/60">Computer Vision Platform</span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            The world's leading computer vision platform, empowering businesses
            with advanced AI-powered solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button className="bg-white hover:bg-white/90 text-[#0B0B1F] rounded-full px-8 py-6 h-auto text-sm">
            Get Started
          </Button>
          <Button 
            variant="outline" 
            className="text-white border-white/10 hover:bg-white/5 rounded-full px-8 py-6 h-auto text-sm"
          >
            Our methodology
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 text-center pb-20 z-10">
        <div className="text-[#4842E3] uppercase text-sm font-medium tracking-wider mb-8">
          Trusted by the world's top enterprises
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 px-4">
          {[
            { name: "Coinbase", width: "w-32" },
            { name: "Spotify", width: "w-28" },
            { name: "Slack", width: "w-24" },
            { name: "Dropbox", width: "w-32" },
            { name: "Zoom", width: "w-24" }
          ].map((client) => (
            <div
              key={client.name}
              className={`${client.width} bg-[#151538]/50 backdrop-blur-md px-8 py-4 rounded-full`}
            >
              <span className="text-white/80 font-light">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
