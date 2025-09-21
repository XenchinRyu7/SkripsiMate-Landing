import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Workflow, 
  FileText, 
  Users, 
  Download, 
  Zap,
  ArrowRight,
  CheckCircle,
  Monitor,
  Smartphone,
  Globe,
  Settings,
  BookOpen,
  Star,
  Award,
  Code,
  Palette
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      title: "AI-Powered Planning",
      description: "Generate structured thesis steps using Google's Gemini API. Enter your thesis topic and get intelligent, personalized recommendations.",
      icon: <Brain className="w-8 h-8" />,
      features: [
        "Google Gemini API integration",
        "Structured thesis step generation",
        "Personalized recommendations",
        "Research topic analysis"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Visual Flow Management",
      description: "Drag-and-drop interface for organizing thesis steps with priority indicators and progress tracking.",
      icon: <Workflow className="w-8 h-8" />,
      features: [
        "Drag-and-drop interface",
        "Priority indicators (High/Medium/Low)",
        "Progress tracking with percentages",
        "Time estimates for each step"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Project Management",
      description: "Save, load, and export your thesis plans in multiple formats. Keep track of your progress with detailed statistics.",
      icon: <FileText className="w-8 h-8" />,
      features: [
        "Save projects locally",
        "Export to PDF/Markdown/JSON",
        "Auto-save functionality",
        "Project statistics tracking"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Modern Interface",
      description: "Clean, VSCode-inspired interface with dark/light mode support, notes panel, and customizable settings.",
      icon: <Monitor className="w-8 h-8" />,
      features: [
        "VSCode-inspired design",
        "Dark/light mode support",
        "Notes & annotations panel",
        "Customizable settings"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const detailedFeatures = [
    {
      category: "AI & Intelligence",
      icon: <Brain className="w-6 h-6" />,
      features: [
        {
          title: "Gemini API Integration",
          description: "Powered by Google's Gemini AI for intelligent thesis planning and step generation.",
          icon: <Brain className="w-5 h-5" />
        },
        {
          title: "Structured Step Generation",
          description: "AI generates organized thesis steps with priorities and timelines automatically.",
          icon: <Star className="w-5 h-5" />
        },
        {
          title: "Topic Analysis",
          description: "Enter your thesis topic and get intelligent, personalized recommendations.",
          icon: <BookOpen className="w-5 h-5" />
        },
        {
          title: "Customizable Steps",
          description: "Edit, add, or remove generated steps to match your specific needs.",
          icon: <Zap className="w-5 h-5" />
        }
      ]
    },
    {
      category: "Visual Management",
      icon: <Workflow className="w-6 h-6" />,
      features: [
        {
          title: "Drag-and-Drop Interface",
          description: "Organize thesis steps with intuitive drag-and-drop functionality.",
          icon: <Workflow className="w-5 h-5" />
        },
        {
          title: "Priority Indicators",
          description: "Visual priority indicators (High/Medium/Low) for each thesis step.",
          icon: <FileText className="w-5 h-5" />
        },
        {
          title: "Progress Tracking",
          description: "Visual progress indicators and completion percentages for each step.",
          icon: <Monitor className="w-5 h-5" />
        },
        {
          title: "Time Estimates",
          description: "Built-in time estimates to help you plan your thesis timeline.",
          icon: <Palette className="w-5 h-5" />
        }
      ]
    },
    {
      category: "Project Management",
      icon: <FileText className="w-6 h-6" />,
      features: [
        {
          title: "Local Project Storage",
          description: "Save and load your thesis projects locally on your device.",
          icon: <FileText className="w-5 h-5" />
        },
        {
          title: "Multiple Export Formats",
          description: "Export your thesis plans to PDF, Markdown, or JSON formats.",
          icon: <Download className="w-5 h-5" />
        },
        {
          title: "Auto-Save Functionality",
          description: "Never lose your work with automatic saving of your progress.",
          icon: <Globe className="w-5 h-5" />
        },
        {
          title: "Notes & Annotations",
          description: "Keep track of your thoughts and progress with built-in notes system.",
          icon: <Users className="w-5 h-5" />
        }
      ]
    }
  ];

  const benefits = [
    {
      title: "AI-Powered Efficiency",
      description: "Generate structured thesis steps in minutes instead of hours with Google's Gemini AI.",
      icon: <Brain className="w-6 h-6" />,
      stat: "10x Faster"
    },
    {
      title: "Visual Organization",
      description: "Keep your thesis journey organized with drag-and-drop interface and progress tracking.",
      icon: <Workflow className="w-6 h-6" />,
      stat: "95%"
    },
    {
      title: "Cross-Platform Desktop",
      description: "Native desktop app that works seamlessly on Windows, macOS, and Linux.",
      icon: <Monitor className="w-6 h-6" />,
      stat: "3 Platforms"
    },
    {
      title: "Student Success",
      description: "Loved by students for its VSCode-inspired interface and comprehensive thesis planning tools.",
      icon: <Star className="w-6 h-6" />,
      stat: "4.9/5"
    }
  ];

  const comparisonFeatures = [
    { feature: "AI-Powered Step Generation", skripsimate: true, others: false },
    { feature: "Drag-and-Drop Interface", skripsimate: true, others: "Basic" },
    { feature: "Cross-Platform Desktop App", skripsimate: true, others: "Web Only" },
    { feature: "Google Gemini API Integration", skripsimate: true, others: false },
    { feature: "Export to PDF/Markdown/JSON", skripsimate: true, others: "Limited" },
    { feature: "Local Project Storage", skripsimate: true, others: "Cloud Only" },
    { feature: "VSCode-Inspired Interface", skripsimate: true, others: "Basic UI" },
    { feature: "Progress Tracking & Statistics", skripsimate: true, others: "Manual" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Features
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              Powerful Features for
              <span className="block text-primary">Thesis Success</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Discover the comprehensive set of features that make SkripsiMate the perfect choice 
              for planning, organizing, and completing your thesis with AI-powered assistance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
              <Button size="lg" className="btn-neu-primary">
                <Download className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="btn-neu">
                <BookOpen className="w-5 h-5 mr-2" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Core Features</h2>
            <p className="text-muted-foreground">Everything you need to plan and complete your thesis successfully</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="card-neu animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} text-white rounded-2xl flex items-center justify-center`}>
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features by Category */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Detailed Features</h2>
            <p className="text-muted-foreground">Explore all the capabilities that make thesis planning effortless</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {detailedFeatures.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="card-neu animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose SkripsiMate?</h2>
            <p className="text-muted-foreground">See the measurable benefits of using our thesis planning tool</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-neu text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{benefit.stat}</div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How We Compare</h2>
            <p className="text-muted-foreground">See how SkripsiMate stacks up against other thesis planning tools</p>
          </div>

          <Card className="card-neu max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-6 font-semibold text-foreground">Feature</th>
                      <th className="text-center p-6 font-semibold text-primary">SkripsiMate</th>
                      <th className="text-center p-6 font-semibold text-muted-foreground">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((item, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="p-6 text-foreground">{item.feature}</td>
                        <td className="p-6 text-center">
                          {item.skripsimate === true ? (
                            <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">{item.skripsimate}</span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {item.others === true ? (
                            <CheckCircle className="w-5 h-5 text-muted-foreground mx-auto" />
                          ) : item.others === false ? (
                            <span className="text-muted-foreground">✗</span>
                          ) : (
                            <span className="text-muted-foreground">{item.others}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students who are already planning their thesis successfully with SkripsiMate
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-neu-primary">
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </Button>
              <Button size="lg" variant="outline" className="btn-neu">
                <BookOpen className="w-5 h-5 mr-2" />
                Read Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
