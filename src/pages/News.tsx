import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Newspaper, 
  Calendar, 
  User, 
  Clock, 
  TrendingUp,
  Star,
  Share2,
  Bookmark,
  ExternalLink,
  Filter,
  Search,
  Tag,
  ArrowRight,
  Globe,
  Zap,
  Award,
  Users,
  Code,
  Heart
} from "lucide-react";

const News = () => {
  const featuredNews = [
    {
      id: 1,
      title: "SkripsiMate 2.0 Released with Advanced Neumorphic Components",
      excerpt: "The latest version introduces revolutionary neumorphic design components, improved performance, and enhanced developer experience.",
      author: "SkripsiMate Team",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Release",
      image: "/api/placeholder/600/300",
      featured: true,
      tags: ["Release", "Components", "Performance"]
    },
    {
      id: 2,
      title: "New Neumorphic Design System Guidelines Published",
      excerpt: "Comprehensive guidelines for creating consistent and beautiful neumorphic interfaces across all platforms.",
      author: "Design Team",
      date: "March 8, 2024",
      readTime: "8 min read",
      category: "Design",
      image: "/api/placeholder/600/300",
      featured: true,
      tags: ["Design System", "Guidelines", "UI/UX"]
    }
  ];

  const latestNews = [
    {
      id: 3,
      title: "SkripsiMate Community Reaches 10,000 Members",
      excerpt: "Our amazing community continues to grow with developers from around the world contributing to the project.",
      author: "Community Team",
      date: "March 5, 2024",
      readTime: "3 min read",
      category: "Community",
      image: "/api/placeholder/400/200",
      tags: ["Community", "Milestone", "Growth"]
    },
    {
      id: 4,
      title: "Performance Improvements in Latest Update",
      excerpt: "Significant performance optimizations reduce bundle size by 30% and improve rendering speed.",
      author: "Engineering Team",
      date: "March 3, 2024",
      readTime: "4 min read",
      category: "Performance",
      image: "/api/placeholder/400/200",
      tags: ["Performance", "Optimization", "Bundle Size"]
    },
    {
      id: 5,
      title: "New Tutorial Series: Building Modern Web Apps",
      excerpt: "Learn how to build modern web applications using SkripsiMate with our comprehensive tutorial series.",
      author: "Education Team",
      date: "March 1, 2024",
      readTime: "6 min read",
      category: "Education",
      image: "/api/placeholder/400/200",
      tags: ["Tutorial", "Education", "Web Development"]
    },
    {
      id: 6,
      title: "SkripsiMate at Web Summit 2024",
      excerpt: "We're excited to announce our participation in Web Summit 2024 with live demos and workshops.",
      author: "Events Team",
      date: "February 28, 2024",
      readTime: "4 min read",
      category: "Events",
      image: "/api/placeholder/400/200",
      tags: ["Events", "Web Summit", "Workshops"]
    },
    {
      id: 7,
      title: "TypeScript Support Enhanced in v1.8",
      excerpt: "Improved TypeScript definitions and better IDE support for enhanced developer experience.",
      author: "TypeScript Team",
      date: "February 25, 2024",
      readTime: "5 min read",
      category: "Development",
      image: "/api/placeholder/400/200",
      tags: ["TypeScript", "IDE", "Developer Experience"]
    },
    {
      id: 8,
      title: "Mobile-First Neumorphic Components",
      excerpt: "New mobile-optimized components ensure perfect neumorphic design on all screen sizes.",
      author: "Mobile Team",
      date: "February 22, 2024",
      readTime: "7 min read",
      category: "Mobile",
      image: "/api/placeholder/400/200",
      tags: ["Mobile", "Responsive", "Components"]
    }
  ];

  const categories = [
    { name: "All", count: 24, active: true },
    { name: "Release", count: 6, active: false },
    { name: "Design", count: 4, active: false },
    { name: "Community", count: 5, active: false },
    { name: "Performance", count: 3, active: false },
    { name: "Education", count: 4, active: false },
    { name: "Events", count: 2, active: false }
  ];

  const trendingTags = [
    "Neumorphic Design", "Components", "Performance", "TypeScript", 
    "Mobile", "Tutorial", "Community", "Release", "Design System", "Web Development"
  ];

  const newsletterSignup = {
    title: "Stay Updated",
    description: "Get the latest SkripsiMate news, updates, and tutorials delivered to your inbox.",
    subscribers: "5,200+ subscribers"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4" />
              Latest News
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              SkripsiMate
              <span className="block text-primary">News & Updates</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Stay informed about the latest releases, features, community highlights, 
              and everything happening in the SkripsiMate ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
              <Button size="lg" className="btn-neu-primary">
                <Bookmark className="w-5 h-5 mr-2" />
                Subscribe to Newsletter
              </Button>
              <Button size="lg" variant="outline" className="btn-neu">
                <ExternalLink className="w-5 h-5 mr-2" />
                Follow on Twitter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-foreground">Featured Stories</h2>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredNews.map((article, index) => (
              <Card key={article.id} className="card-neu overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-video bg-muted/50 relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <User className="w-4 h-4" />
                    {article.author}
                    <span>•</span>
                    <Calendar className="w-4 h-4" />
                    {article.date}
                    <span>•</span>
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>
                  <CardTitle className="text-xl mb-3">{article.title}</CardTitle>
                  <CardDescription className="text-base">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <Button className="btn-neu-primary">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories and Latest News */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <Card className="card-neu sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <Button
                        key={index}
                        variant={category.active ? "default" : "ghost"}
                        className={`w-full justify-between ${category.active ? "btn-neu-primary" : "btn-neu"}`}
                      >
                        {category.name}
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trending Tags */}
              <Card className="card-neu mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Trending Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {trendingTags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs cursor-pointer hover:bg-primary/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="card-neu mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    {newsletterSignup.title}
                  </CardTitle>
                  <CardDescription>{newsletterSignup.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="input-neu w-full"
                    />
                    <Button className="w-full btn-neu-primary">
                      Subscribe
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      {newsletterSignup.subscribers}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Latest News */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">Latest News</h2>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input 
                      type="text" 
                      placeholder="Search news..."
                      className="input-neu pl-10 pr-4 py-2 w-64"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {latestNews.map((article, index) => (
                  <Card key={article.id} className="card-neu animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="aspect-video bg-muted/50 rounded-t-lg overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <span>•</span>
                        <Calendar className="w-3 h-3" />
                        {article.date}
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                      <CardTitle className="text-lg mb-2 line-clamp-2">{article.title}</CardTitle>
                      <CardDescription className="text-sm line-clamp-3">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {article.tags.slice(0, 2).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                        <div className="flex items-center gap-1">
                          <Button variant="ghost" size="sm">
                            <Heart className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="btn-neu">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="card-neu text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Newspaper className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">150+</div>
                <div className="text-muted-foreground">Articles Published</div>
              </CardContent>
            </Card>
            
            <Card className="card-neu text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">5.2K</div>
                <div className="text-muted-foreground">Newsletter Subscribers</div>
              </CardContent>
            </Card>
            
            <Card className="card-neu text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">12</div>
                <div className="text-muted-foreground">Awards Won</div>
              </CardContent>
            </Card>
            
            <Card className="card-neu text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">24</div>
                <div className="text-muted-foreground">Releases This Year</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
