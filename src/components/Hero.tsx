import { ArrowRight, Download, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-app-mockup.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 card-neu px-4 py-2 text-sm font-medium text-primary animate-delay-100">
              <Star className="w-4 h-4 fill-current" />
              Open Source • Free Forever
            </div>

            {/* Headline */}
            <div className="space-y-4 animate-delay-200">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Thesis Planning
                </span>{" "}
                with AI
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                SkripsiMate helps students plan and visualize their thesis workflow using AI-powered 
                recommendations and interactive flow diagrams.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-delay-300">
              <Button size="lg" className="btn-neu-primary group">
                <Download className="w-5 h-5 mr-2" />
                Download SkripsiMate
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="btn-neu group">
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground animate-delay-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Cross-Platform
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                AI-Powered
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                MIT License
              </div>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative animate-scale-in animate-delay-300">
            <div className="card-neu p-8 rounded-2xl">
              <img 
                src={heroImage} 
                alt="SkripsiMate Application Interface" 
                className="w-full h-auto rounded-xl shadow-neu-soft"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 card-neu p-4 rounded-xl animate-delay-500">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                AI Active
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 card-neu p-4 rounded-xl animate-delay-600">
              <div className="text-sm font-medium text-foreground">
                <div className="text-xs text-muted-foreground">Projects Created</div>
                <div className="text-lg font-bold text-primary">1,247+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;