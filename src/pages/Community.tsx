import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share2, 
  Star,
  TrendingUp,
  Calendar,
  MapPin,
  Globe,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Award,
  Zap,
  BookOpen,
  Code,
  Coffee
} from "lucide-react";

const Community = () => {
  const communityStats = [
    { label: "Active Members", value: "12,500+", icon: <Users className="w-6 h-6" /> },
    { label: "Projects Shared", value: "2,800+", icon: <Code className="w-6 h-6" /> },
    { label: "Discussions", value: "15,200+", icon: <MessageCircle className="w-6 h-6" /> },
    { label: "Countries", value: "45+", icon: <Globe className="w-6 h-6" /> }
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Building a Neumorphic Dashboard with SkripsiMate",
      author: "Sarah Chen",
      avatar: "/api/placeholder/40/40",
      time: "2 hours ago",
      likes: 24,
      comments: 8,
      tags: ["Tutorial", "Dashboard", "UI/UX"],
      excerpt: "Learn how to create a beautiful neumorphic dashboard using SkripsiMate's component library..."
    },
    {
      id: 2,
      title: "Performance Optimization Tips for Large Applications",
      author: "Marcus Rodriguez",
      avatar: "/api/placeholder/40/40",
      time: "5 hours ago",
      likes: 18,
      comments: 12,
      tags: ["Performance", "Optimization", "Best Practices"],
      excerpt: "Discover techniques to optimize your SkripsiMate applications for better performance..."
    },
    {
      id: 3,
      title: "Custom Theme Development Guide",
      author: "Alex Kim",
      avatar: "/api/placeholder/40/40",
      time: "1 day ago",
      likes: 31,
      comments: 15,
      tags: ["Theming", "Customization", "Design System"],
      excerpt: "A comprehensive guide to creating custom themes for your SkripsiMate projects..."
    },
    {
      id: 4,
      title: "State Management Patterns in SkripsiMate",
      author: "Emma Thompson",
      avatar: "/api/placeholder/40/40",
      time: "2 days ago",
      likes: 22,
      comments: 9,
      tags: ["State Management", "Architecture", "Patterns"],
      excerpt: "Explore different state management patterns and when to use each one..."
    }
  ];

  const upcomingEvents = [
    {
      title: "SkripsiMate Meetup - San Francisco",
      date: "March 15, 2024",
      time: "6:00 PM PST",
      location: "San Francisco, CA",
      attendees: 45,
      type: "Meetup"
    },
    {
      title: "Webinar: Advanced Neumorphic Design",
      date: "March 20, 2024",
      time: "2:00 PM EST",
      location: "Online",
      attendees: 120,
      type: "Webinar"
    },
    {
      title: "SkripsiMate Conference 2024",
      date: "April 10-12, 2024",
      time: "All Day",
      location: "Austin, TX",
      attendees: 500,
      type: "Conference"
    }
  ];

  const topContributors = [
    { name: "Sarah Chen", contributions: 156, avatar: "/api/placeholder/40/40", role: "Core Maintainer" },
    { name: "Marcus Rodriguez", contributions: 142, avatar: "/api/placeholder/40/40", role: "Framework Developer" },
    { name: "Alex Kim", contributions: 128, avatar: "/api/placeholder/40/40", role: "UI/UX Designer" },
    { name: "Emma Thompson", contributions: 115, avatar: "/api/placeholder/40/40", role: "Documentation Lead" },
    { name: "David Park", contributions: 98, avatar: "/api/placeholder/40/40", role: "Community Manager" }
  ];

  const communityChannels = [
    {
      name: "Discord",
      description: "Real-time chat and voice channels",
      members: "8,500+",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "bg-indigo-500"
    },
    {
      name: "GitHub",
      description: "Code discussions and issue tracking",
      members: "3,200+",
      icon: <Github className="w-6 h-6" />,
      color: "bg-gray-800"
    },
    {
      name: "Twitter",
      description: "Updates and community highlights",
      members: "5,800+",
      icon: <Twitter className="w-6 h-6" />,
      color: "bg-blue-400"
    },
    {
      name: "YouTube",
      description: "Tutorials and live streams",
      members: "2,100+",
      icon: <Youtube className="w-6 h-6" />,
      color: "bg-red-500"
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
              <Users className="w-4 h-4" />
              Community
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              Join Our
              <span className="block text-primary">Amazing Community</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Connect with developers, share your projects, get help, and contribute to the 
              future of neumorphic design with SkripsiMate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
              <Button size="lg" className="btn-neu-primary">
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord
              </Button>
              <Button size="lg" variant="outline" className="btn-neu">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <Card key={index} className="card-neu text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Recent Discussions</h2>
              <p className="text-muted-foreground">Latest posts from our community</p>
            </div>
            <Button variant="outline" className="btn-neu">
              View All Posts
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {recentPosts.map((post, index) => (
              <Card key={post.id} className="card-neu animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={post.avatar} />
                      <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-foreground">{post.author}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{post.time}</span>
                      </div>
                      <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                      <p className="text-muted-foreground text-sm mb-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      <Heart className="w-4 h-4 mr-2" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground">Join us at these upcoming community events</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="card-neu animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={event.type === 'Conference' ? 'default' : event.type === 'Webinar' ? 'secondary' : 'outline'}>
                      {event.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{event.attendees} attendees</span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                  <Button className="w-full mt-4 btn-neu-primary">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Top Contributors</h2>
            <p className="text-muted-foreground">Recognizing our amazing community contributors</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {topContributors.map((contributor, index) => (
              <Card key={index} className="card-neu text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={contributor.avatar} />
                    <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-foreground mb-1">{contributor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{contributor.role}</p>
                  <div className="flex items-center justify-center gap-1 text-primary">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">{contributor.contributions} contributions</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Channels</h2>
            <p className="text-muted-foreground">Connect with the community across different platforms</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityChannels.map((channel, index) => (
              <Card key={index} className="card-neu animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${channel.color} text-white rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {channel.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{channel.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{channel.description}</p>
                  <div className="text-sm text-primary font-medium mb-4">{channel.members} members</div>
                  <Button variant="outline" className="btn-neu w-full">
                    Join Channel
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of developers building amazing applications with SkripsiMate
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-neu-primary">
                <Users className="w-5 h-5 mr-2" />
                Join Community
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

export default Community;
