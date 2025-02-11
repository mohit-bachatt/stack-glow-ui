
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="absolute top-0 right-0 left-0 h-16 bg-gradient-to-b from-stack-bg-start to-transparent" />
      
      <div className="space-y-6 max-w-4xl mx-auto animate-float">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 space-x-2">
          <span className="bg-stack-accent text-white text-xs font-medium px-2 py-1 rounded-full">New</span>
          <span className="text-white/80 text-sm">Host Stack AI On-Premise</span>
          <ArrowRight className="h-4 w-4 text-white/60" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
          The Enterprise
          <span className="bg-gradient-to-r from-stack-accent to-blue-400 bg-clip-text text-transparent"> AI Agents </span>
          Platform
        </h1>

        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          <span className="text-stack-accent">Augment</span> your workforce with{" "}
          <span className="text-stack-accent">AI Agents</span>.{" "}
          <span className="text-stack-accent">Outsource</span> back office processes to{" "}
          <span className="text-stack-accent">LLMs</span>.{" "}
          Make your organization{" "}
          <span className="text-stack-accent">smarter</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button size="lg" className="bg-white text-stack-bg-start hover:bg-white/90">
            Get a Demo
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
            Start for free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 text-center pb-20">
        <div className="text-sm text-white/60 mb-8">Trusted by the world's top enterprises</div>
        <div className="flex flex-wrap justify-center items-center gap-8 px-4">
          {["Granite", "WinIt", "Yummy", "SmartAsset", "LifeMD"].map((client) => (
            <div
              key={client}
              className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="text-white/80 font-medium">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
