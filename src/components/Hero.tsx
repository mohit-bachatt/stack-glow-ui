import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBookDemo = () => {
    // Handle demo booking with the email
    console.log('Booking demo with email:', email);
    // You can add your booking logic here
  };

  const handleReadMore = () => {
    window.location.href = 'https://www.ropes.ai/preview';
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center px-4 lg:px-20">
      {/* Main content - centered */}
      <div className="w-full max-w-5xl mx-auto text-center">
        <div className="space-y-12 relative z-10">
          <div className="inline-flex items-center bg-white/5 backdrop-blur-md rounded-full px-6 py-2 space-x-4 border border-white/10 animate-fade-in hover:bg-white/10 transition-colors">
            <span className="bg-[#4842E3] text-white text-sm px-3 py-1 rounded-full">New</span>
            <span className="text-white/70 text-base">Preview Ropes on your Job Description</span>
            <button 
              onClick={handleReadMore}
              className="flex items-center text-white/40 hover:text-white transition-colors"
            >
              <span className="text-base mr-1">Read More</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-normal text-white tracking-tight leading-tight">
              Screen AI-Vetted Engineering Talent
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                Trained & Tested on Your Criteria.
              </span>
            </h1>

            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
              Ropes designs tailored assessments specific to your company, ensuring candidates are evaluated just like real team members in real-world scenarios.
            </p>
          </div>

          <div className="max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-8 bg-white/5 backdrop-blur-md rounded-full p-2 border border-white/10">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="w-full sm:flex-1 bg-transparent text-white px-6 py-3 rounded-full outline-none placeholder:text-white/40 focus:ring-1 focus:ring-white/20"
              />
              <Button 
                onClick={handleBookDemo}
                className="w-full sm:w-auto bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] hover:opacity-90 text-white rounded-full px-8 py-4 h-auto text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                Book a Demo
              </Button>
            </div>
            <p className="text-white/40 text-xs mt-3">
              We'll never share your email. Book now for a personalized demo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;