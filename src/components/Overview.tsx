import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  BookOpen, 
  Code, 
  Users, 
  Newspaper, 
  ArrowRight,
  FileText,
  Globe
} from "lucide-react";

const Overview = () => {
  const sections = [
    {
      title: "Features",
      description: "Discover all the powerful features that make SkripsiMate the perfect choice for thesis planning and academic research.",
      href: "/features",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      stats: "20+ Features"
    },
    {
      title: "Developer Docs",
      description: "Technical documentation, code examples, and integration guides for developers and contributors.",
      href: "/docs",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      stats: "API Reference"
    },
    {
      title: "Community",
      description: "Join our vibrant community of developers, researchers, and students sharing knowledge and experiences.",
      href: "/community",
      icon: <Users className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      stats: "10K+ Members"
    },
    {
      title: "News & Updates",
      description: "Stay updated with the latest releases, feature announcements, and community highlights.",
      href: "/news",
      icon: <Newspaper className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      stats: "Latest Updates"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Explore{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SkripsiMate
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Dive deeper into all aspects of SkripsiMate. From detailed features to community resources, 
            everything you need is just a click away.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <Card 
              key={index} 
              className="card-neu group hover:shadow-neu-hover transition-all duration-300 animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${section.color} text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {section.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {section.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{section.stats}</p>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link 
                  to={section.href}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors group/link"
                >
                  Explore Section
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <Card className="card-neu inline-block p-8 animate-fade-in-up animate-delay-600">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">Quick Access</CardTitle>
              <CardDescription className="text-base">
                Jump to the most popular sections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  to="/features" 
                  className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <Zap className="w-4 h-4" />
                  Features
                </Link>
                <Link 
                  to="/community" 
                  className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <Users className="w-4 h-4" />
                  Community
                </Link>
                <Link 
                  to="/news" 
                  className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <Newspaper className="w-4 h-4" />
                  News
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Overview;
