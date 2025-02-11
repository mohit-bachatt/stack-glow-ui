import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight, RocketIcon, BookOpen, Play } from "lucide-react";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleGetStarted = () => {
    window.location.href = 'https://playground.bolna.dev/login';
  };

  const handleReadMore = () => {
    window.location.href = 'https://www.producthunt.com/products/bolna?utm_source=badge-top-post-badge&utm_medium=badge#bolna';
  };

  const handleReadDocs = () => {
    window.location.href = 'https://docs.bolna.dev/introduction';
  };

  return (
    <div className="relative min-h-screen flex items-center px-4 lg:px-20">
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

      {/* Main content grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side content */}
        <div className="space-y-8 relative z-10">
          <div className="inline-flex items-center bg-white/5 backdrop-blur-md rounded-full px-4 py-2 space-x-3 border border-white/10 animate-fade-in hover:bg-white/10 transition-colors">
            <span className="bg-[#4842E3] text-white text-xs px-2 py-1 rounded-full">New</span>
            <span className="text-white/70 text-sm">Product of the Day on Product Hunt</span>
            <button 
              onClick={handleReadMore}
              className="flex items-center text-white/40 hover:text-white transition-colors"
            >
              <span className="text-sm mr-1">Read More</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h1 className="text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
              Ready Voice AI Agents
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                Trained & Tested on Your Data
              </span>
            </h1>

            <p className="text-lg text-white/60 max-w-xl leading-relaxed font-light">
              Deploy and Scale Calling Workflows with Market-Ready Voice AI Agents Built from Your Company and Customer Data.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 pt-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] hover:opacity-90 text-white rounded-full px-8 py-6 h-auto text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <RocketIcon className="h-4 w-4" />
              Get Started
            </Button>
            <Button
              variant="ghost"
              onClick={handleReadDocs}
              className="text-white rounded-full px-8 py-6 h-auto text-sm font-medium transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40 hover:bg-white/10 flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Read Docs
            </Button>
          </div>
        </div>

        {/* Right side video preview */}
        <div className="relative group animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm">
            <video 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIsVideoOpen(true)}
              loop
              muted
              autoPlay
              src="https://res.cloudinary.com/dzf2bfv6u/video/upload/f_auto:video,q_auto/sbgnnbtwsscnj7wjncjf"
            >
              Your browser does not support the video tag.
            </video>
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => setIsVideoOpen(true)}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;