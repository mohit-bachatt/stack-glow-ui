import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight, Play, RocketIcon } from "lucide-react";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
          <div className="relative aspect-video">
            <video 
              className="w-full h-full object-cover rounded-lg"
              controls
              autoPlay
              src="https://res.cloudinary.com/dzf2bfv6u/video/upload/f_auto:video,q_auto/sbgnnbtwsscnj7wjncjf"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>

      {/* Main content */}
      <div className="space-y-8 max-w-5xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center bg-white/5 backdrop-blur-md rounded-full px-4 py-2 space-x-3 border border-white/10 animate-fade-in hover:bg-white/10 transition-colors">
          <span className="bg-[#4842E3] text-white text-xs px-2 py-1 rounded-full">New</span>
          <span className="text-white/70 text-sm">Automatically detects anomalies, improving quality control.</span>
          <button className="flex items-center text-white/40 hover:text-white transition-colors">
            <span className="text-sm mr-1">Read More</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h1 className="text-6xl md:text-7xl font-normal text-white tracking-tight leading-tight">
            Ready To Deploy Voice AI Agents
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
              Trained & Tested on Your Data
            </span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            Deploy and Scale Calling Workflows with Market-Ready Voice AI Agents Built from Your Company and Customer Data.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Button 
            className="bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] hover:opacity-90 text-white rounded-full px-8 py-6 h-auto text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <RocketIcon className="h-4 w-4" />
            Get Started
          </Button>
          <Button
            variant="ghost"
            onClick={() => setIsVideoOpen(true)}
            className="text-white rounded-full px-8 py-6 h-auto text-sm font-medium transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40 hover:bg-white/10 flex items-center gap-2"
          >
            <Play className="h-4 w-4" />
            View Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;