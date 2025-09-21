import { Github, Heart, ExternalLink, Mail, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">SkripsiMate</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Open-source thesis planning software that helps students visualize 
              their research workflow with AI-powered recommendations.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by the community</span>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#screenshots" className="text-muted-foreground hover:text-primary transition-colors">
                Screenshots
              </a>
              <a href="#download" className="text-muted-foreground hover:text-primary transition-colors">
                Download
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Release Notes
              </a>
            </nav>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Community</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub Repository
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contributing Guide
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Code of Conduct
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Discussions
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Report Issues
              </a>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                User Guide
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                API Reference
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Tutorials
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Support
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 SkripsiMate. Released under the{" "}
              <a href="#" className="text-primary hover:underline font-medium">
                MIT License
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">Star on GitHub</span>
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">View License</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;