import { Github, GitFork, Users, Heart, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const OpenSource = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Built by the{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Community
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                SkripsiMate is completely open source and free forever. Join our growing community 
                of developers and researchers making academic tools better for everyone.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="card-neu p-6 text-center">
                <Github className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">2.1k</div>
                <div className="text-sm text-muted-foreground">GitHub Stars</div>
              </div>
              <div className="card-neu p-6 text-center">
                <GitFork className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">340</div>
                <div className="text-sm text-muted-foreground">Forks</div>
              </div>
              <div className="card-neu p-6 text-center">
                <Users className="w-8 h-8 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">85</div>
                <div className="text-sm text-muted-foreground">Contributors</div>
              </div>
              <div className="card-neu p-6 text-center">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">5.6k</div>
                <div className="text-sm text-muted-foreground">Users</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-neu-primary group">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-neu">
                <Code className="w-5 h-5 mr-2" />
                Contribute
              </Button>
            </div>
          </div>

          {/* Right Content - Community Features */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="card-neu p-6 space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                Easy to Contribute
              </h3>
              <p className="text-muted-foreground">
                Well-documented codebase with clear contribution guidelines. Perfect for 
                developers of all skill levels to make meaningful contributions.
              </p>
            </div>

            <div className="card-neu p-6 space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                Active Community
              </h3>
              <p className="text-muted-foreground">
                Join discussions, share ideas, and get help from a supportive community 
                of researchers and developers passionate about academic tools.
              </p>
            </div>

            <div className="card-neu p-6 space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-3">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-success" />
                </div>
                MIT Licensed
              </h3>
              <p className="text-muted-foreground">
                Use, modify, and distribute freely. Build upon SkripsiMate for your own 
                projects or integrate it into your institution's workflow.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 card-neu p-8 text-center rounded-2xl animate-fade-in-up animate-delay-500">
          <h3 className="text-2xl font-bold mb-4">Help Shape the Future of Academic Tools</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're fixing bugs, adding features, or improving documentation - 
            every contribution makes SkripsiMate better for students worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-neu-primary">
              Read Contributing Guide
            </Button>
            <Button variant="outline" className="btn-neu">
              Report an Issue
            </Button>
            <Button variant="outline" className="btn-neu">
              Request Feature
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;