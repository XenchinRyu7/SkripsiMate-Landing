import { Brain, Workflow, FileText, Users, Download, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Planning",
    description: "Send prompts to Gemini API to generate structured thesis step recommendations tailored to your research topic.",
    color: "text-primary"
  },
  {
    icon: Workflow,
    title: "Visual Workflow",
    description: "Interactive flow visualization with draggable cards and tree diagrams to map your thesis journey clearly.",
    color: "text-accent"
  },
  {
    icon: FileText,
    title: "Project Management",
    description: "Save and load projects locally, export to PDF, Markdown, or JSON formats for easy sharing and backup.",
    color: "text-success"
  },
  {
    icon: Users,
    title: "Open Source",
    description: "Built by the community, for the community. Contribute features, report bugs, and shape the future of thesis planning.",
    color: "text-primary"
  },
  {
    icon: Download,
    title: "Cross-Platform",
    description: "Works seamlessly on Windows, macOS, and Linux. One application, all your devices covered.",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "Modern Interface",
    description: "VSCode-inspired interface with dark/light mode support and built-in annotation system for productivity.",
    color: "text-success"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-surface-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Thesis Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Powerful features designed specifically for academic research and thesis planning workflow.
          </p>
          <Link 
            to="/features" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
          >
            Explore All Features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`card-neu p-8 hover:shadow-neu-hover transition-all duration-300 group animate-scale-in animate-delay-${(index + 1) * 100}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up animate-delay-700">
          <div className="card-neu inline-block p-6 rounded-2xl">
            <p className="text-lg font-medium mb-4">Ready to streamline your thesis process?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-neu-primary px-6 py-3 rounded-xl font-medium">
                Download for Windows
              </button>
              <button className="btn-neu px-6 py-3 rounded-xl font-medium">
                Download for macOS
              </button>
              <button className="btn-neu px-6 py-3 rounded-xl font-medium">
                Download for Linux
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;