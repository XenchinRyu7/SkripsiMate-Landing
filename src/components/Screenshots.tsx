import { Play, Zap, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import screenshotsImage from "@/assets/app-screenshots.jpg";

const Screenshots = () => {
  return (
    <section id="screenshots" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            See SkripsiMate in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the intuitive interface that makes thesis planning effortless and engaging.
          </p>
        </div>

        {/* Main Screenshot */}
        <div className="relative mb-16 animate-scale-in animate-delay-200">
          <div className="card-neu p-8 rounded-2xl overflow-hidden">
            <img 
              src={screenshotsImage}
              alt="SkripsiMate Application Screenshots"
              className="w-full h-auto rounded-xl"
            />
            
            {/* Overlay Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="btn-neu-primary p-6 rounded-full shadow-neu-hover group">
                <Play className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Floating Feature Highlights */}
          <div className="absolute top-8 left-8 card-neu p-4 rounded-xl animate-delay-300">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-foreground">AI-Powered</span>
            </div>
          </div>
          
          <div className="absolute top-8 right-8 card-neu p-4 rounded-xl animate-delay-400">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Eye className="w-4 h-4 text-accent" />
              <span className="text-foreground">Visual Workflow</span>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-8 card-neu p-4 rounded-xl animate-delay-500">
            <div className="flex items-center gap-2 text-sm font-medium">
              <FileText className="w-4 h-4 text-success" />
              <span className="text-foreground">Export Ready</span>
            </div>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <div className="card-neu-inset p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-center">Before SkripsiMate</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <span>Scattered notes across multiple platforms</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <span>Unclear thesis structure and timeline</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <span>Manual planning with spreadsheets</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <span>Overwhelming research process</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div className="card-neu p-8 rounded-2xl border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-center text-primary">After SkripsiMate</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <span className="text-foreground">AI-generated thesis roadmap</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <span className="text-foreground">Visual workflow with clear milestones</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <span className="text-foreground">Integrated note-taking system</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <span className="text-foreground">Organized, stress-free planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up animate-delay-600">
          <div className="card-neu p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart AI Suggestions</h3>
            <p className="text-muted-foreground text-sm">
              Get personalized thesis steps based on your research topic and methodology.
            </p>
          </div>

          <div className="card-neu p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Interactive Visualizations</h3>
            <p className="text-muted-foreground text-sm">
              Drag and drop to reorganize your workflow. See your progress at a glance.
            </p>
          </div>

          <div className="card-neu p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-success/20 to-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Export & Share</h3>
            <p className="text-muted-foreground text-sm">
              Export your plan to PDF, Markdown, or JSON. Share with advisors easily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;