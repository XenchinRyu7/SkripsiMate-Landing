import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  ArrowLeft, 
  Search, 
  FileX, 
  Compass,
  BookOpen,
  Users,
  Newspaper,
  Zap
} from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const suggestedPages = [
    { title: "Home", description: "Return to the main page", href: "/", icon: <Home className="w-5 h-5" /> },
    { title: "Features", description: "Learn about SkripsiMate features", href: "/features", icon: <Zap className="w-5 h-5" /> },
    { title: "Docs", description: "Technical documentation", href: "/docs", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Community", description: "Join our developer community", href: "/community", icon: <Users className="w-5 h-5" /> },
    { title: "News", description: "Latest updates and announcements", href: "/news", icon: <Newspaper className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* 404 Hero Section */}
      <section className="pt-24 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileX className="w-4 h-4" />
              Page Not Found
            </div>
            
            <div className="text-8xl md:text-9xl font-bold text-primary mb-6 animate-fade-in-up">
              404
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up animate-delay-200">
              Oops! Page Not Found
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-300">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, let's get you back on track!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
              <Button size="lg" className="btn-neu-primary" asChild>
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="btn-neu" onClick={() => window.history.back()}>
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Pages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Maybe you were looking for:</h2>
            <p className="text-muted-foreground">Here are some popular pages that might help you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {suggestedPages.map((page, index) => (
              <Card key={index} className="card-neu animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    {page.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{page.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{page.description}</p>
                  <Button variant="outline" className="btn-neu w-full" asChild>
                    <Link to={page.href}>
                      Visit Page
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Can't find what you're looking for?</h2>
            <p className="text-muted-foreground mb-8">
              Try searching our documentation or browse our site map
            </p>
            
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search our site..."
                className="input-neu w-full pl-12 pr-4 py-4 text-lg"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-neu-primary">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" className="btn-neu">
                <Compass className="w-4 h-4 mr-2" />
                Browse Site Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Error Details (for debugging) */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="card-neu max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">Error Details</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Requested URL: <code className="bg-muted/50 px-2 py-1 rounded text-xs">{location.pathname}</code>
                </p>
                <p className="text-xs text-muted-foreground">
                  If you believe this is an error, please contact our support team.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
