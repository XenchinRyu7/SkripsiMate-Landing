import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Code, 
  FileText, 
  Download, 
  ExternalLink, 
  ArrowLeft,
  Search,
  Filter,
  Star,
  Users,
  Clock,
  Play,
  Terminal,
  Settings,
  Zap,
  Shield,
  Globe,
  Brain,
  Workflow,
  Monitor
} from "lucide-react";

const Docs = () => {
  const quickStartSteps = [
    {
      step: 1,
      title: "Install Prerequisites",
      description: "Install Node.js (v18 or higher) and get a Google Gemini API key",
      code: "Node.js v18+ & Gemini API Key",
      icon: <Download className="w-5 h-5" />
    },
    {
      step: 2,
      title: "Clone Repository",
      description: "Clone the SkripsiMate repository to your local machine",
      code: "git clone <repository-url>",
      icon: <Terminal className="w-5 h-5" />
    },
    {
      step: 3,
      title: "Install Dependencies",
      description: "Install all required dependencies using npm or yarn",
      code: "npm install",
      icon: <Settings className="w-5 h-5" />
    },
    {
      step: 4,
      title: "Start Development",
      description: "Start the development server and run the Electron app",
      code: "npm run dev",
      icon: <Play className="w-5 h-5" />
    }
  ];

  const apiExamples = [
    {
      title: "Getting Started",
      description: "Basic setup and configuration for the SkripsiMate desktop application",
      language: "bash",
      code: `# 1. Clone the repository
git clone <repository-url>
cd SkripsiMate

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Run Electron app
npm run electron`
    },
    {
      title: "API Configuration",
      description: "Setting up Google Gemini API key for AI-powered thesis planning",
      language: "javascript",
      code: `// Configure API key in settings
const settings = {
  geminiApiKey: 'your-api-key-here',
  autoSave: true,
  theme: 'dark' // or 'light'
};

// Access settings through the app
import { useSettings } from './contexts/SettingsContext';`
    },
    {
      title: "Project Structure",
      description: "Understanding the SkripsiMate application architecture",
      language: "text",
      code: `src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── Toolbar.tsx     # Main application toolbar
│   ├── PromptInput.tsx # AI prompt input component
│   ├── FlowVisualizer.tsx # Thesis steps visualization
│   ├── NotesPanel.tsx  # Notes and statistics panel
│   └── SettingsDialog.tsx # Settings configuration
├── contexts/           # React contexts
│   ├── ThemeContext.tsx    # Theme management
│   ├── SettingsContext.tsx # App settings
│   └── ProjectContext.tsx  # Project state management
├── lib/                # Utility functions
│   ├── utils.ts        # General utilities
│   └── gemini.ts       # Gemini API integration`
    }
  ];

  const features = [
    {
      title: "AI-Powered Planning",
      description: "Generate structured thesis steps using Google's Gemini API",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Visual Flow Management",
      description: "Drag-and-drop interface for organizing thesis steps",
      icon: <Workflow className="w-6 h-6" />
    },
    {
      title: "Cross-Platform Desktop",
      description: "Native desktop app for Windows, macOS, and Linux",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "Modern Tech Stack",
      description: "React 18, TypeScript, Electron, TailwindCSS, and shadcn/ui",
      icon: <Code className="w-6 h-6" />
    }
  ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-hero-gradient">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Code className="w-4 h-4" />
                            Developer Docs
                        </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              SkripsiMate
              <span className="block text-primary">App Documentation</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Complete documentation for the SkripsiMate desktop application, including installation, 
              usage, and development guidelines.
            </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
                            <Button size="lg" className="btn-neu-primary">
                                <Download className="w-5 h-5 mr-2" />
                                Get Started
                            </Button>
                            <Button size="lg" variant="outline" className="btn-neu">
                                <ExternalLink className="w-5 h-5 mr-2" />
                                API Reference
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Start Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quick Start Guide</h2>
            <p className="text-muted-foreground">Get up and running with the SkripsiMate desktop application in minutes</p>
          </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {quickStartSteps.map((step, index) => (
                                <Card key={index} className="card-neu animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                                                    {step.icon}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Badge variant="outline" className="bg-primary/10 text-primary">
                                                        Step {step.step}
                                                    </Badge>
                                                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                                                </div>
                                                <p className="text-muted-foreground mb-4">{step.description}</p>
                                                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                                                    <code className="text-foreground">{step.code}</code>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* API Examples */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Code Examples</h2>
            <p className="text-muted-foreground">Real-world examples for the SkripsiMate desktop application</p>
          </div>

                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="basic" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 mb-8">
                                <TabsTrigger value="basic" className="btn-neu">Basic Setup</TabsTrigger>
                                <TabsTrigger value="components" className="btn-neu">Components</TabsTrigger>
                                <TabsTrigger value="state" className="btn-neu">State Management</TabsTrigger>
                            </TabsList>

                            {apiExamples.map((example, index) => (
                                <TabsContent key={index} value={index === 0 ? "basic" : index === 1 ? "components" : "state"}>
                                    <Card className="card-neu">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <Code className="w-5 h-5 text-primary" />
                                                {example.title}
                                            </CardTitle>
                                            <CardDescription>{example.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="bg-muted/50 rounded-lg p-6 overflow-x-auto">
                                                <pre className="text-sm text-foreground">
                                                    <code>{example.code}</code>
                                                </pre>
                                            </div>
                                            <div className="flex gap-2 mt-4">
                                                <Button size="sm" variant="outline" className="btn-neu">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Try it Live
                                                </Button>
                                                <Button size="sm" variant="outline" className="btn-neu">
                                                    <Download className="w-4 h-4 mr-2" />
                                                    Copy Code
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose SkripsiMate?</h2>
            <p className="text-muted-foreground">Powerful features designed for modern thesis planning and academic research</p>
          </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <Card key={index} className="card-neu text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Additional Resources</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Explore more resources to enhance your SkripsiMate development experience
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <Card className="card-neu">
                                <CardContent className="p-6 text-center">
                                    <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="font-semibold text-lg mb-2">Full Documentation</h3>
                                    <p className="text-muted-foreground mb-4">Complete API reference and guides</p>
                                    <Button variant="outline" className="btn-neu">View Docs</Button>
                                </CardContent>
                            </Card>

                            <Card className="card-neu">
                                <CardContent className="p-6 text-center">
                                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="font-semibold text-lg mb-2">Community</h3>
                                    <p className="text-muted-foreground mb-4">Join our developer community</p>
                                    <Button variant="outline" className="btn-neu">Join Community</Button>
                                </CardContent>
                            </Card>

                            <Card className="card-neu">
                                <CardContent className="p-6 text-center">
                                    <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="font-semibold text-lg mb-2">Examples</h3>
                                    <p className="text-muted-foreground mb-4">Browse example projects</p>
                                    <Button variant="outline" className="btn-neu">View Examples</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Docs;
