import { Download as DownloadIcon, Monitor, Smartphone, HardDrive, Github, ExternalLink, Apple, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

// GitHub Releases API URLs
const GITHUB_REPO = "XenchinRyu7/SkripsiMate"; // Update dengan repo yang benar
const LATEST_RELEASE_URL = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;
const RELEASES_URL = `https://github.com/${GITHUB_REPO}/releases`;

const platforms = [
  {
    name: "Windows",
    icon: Monitor,
    version: "v1.0.0",
    size: "447 MB",
    requirements: "Windows 10 or later",
    downloadUrl: `${RELEASES_URL}/latest/download/SkripsiMate.Setup.1.0.0.exe`,
    alternativeUrl: `${RELEASES_URL}/latest/download/SkripsiMate.1.0.0.exe`,
    primary: true
  },
  {
    name: "macOS",
    icon: Apple,
    version: "v1.0.0",
    size: "382 MB / 193 MB", 
    requirements: "macOS 10.15 or later",
    downloadUrl: `${RELEASES_URL}/latest/download/SkripsiMate-1.0.0-arm64.dmg`,
    alternativeUrl: `${RELEASES_URL}/latest/download/SkripsiMate-1.0.0.dmg`,
    primary: true
  },
  {
    name: "Linux",
    icon: Cpu,
    version: "v1.0.0",
    size: "202 MB",
    requirements: "Ubuntu 18.04+ / Fedora 32+",
    downloadUrl: `${RELEASES_URL}/latest/download/SkripsiMate-1.0.0.AppImage`,
    alternativeUrl: `${RELEASES_URL}/latest/download/skripsimate_1.0.0_amd64.deb`,
    primary: true
  }
];

const Download = () => {
  return (
    <section id="download" className="py-24 bg-surface-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Download{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SkripsiMate
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Free, open-source, and available for all major platforms. Start planning your thesis today.
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div 
              key={platform.name}
              className={`card-neu p-8 text-center hover:shadow-neu-hover transition-all duration-300 group animate-scale-in animate-delay-${(index + 1) * 100}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <platform.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
              <div className="text-sm text-muted-foreground mb-4 space-y-1">
                <div>{platform.version}</div>
                <div>{platform.size}</div>
                <div>{platform.requirements}</div>
              </div>
              
              <div className="space-y-2">
                <Button 
                  className="btn-neu-primary w-full group-hover:scale-105 transition-transform"
                  asChild
                >
                  <a href={platform.downloadUrl} download>
                    <DownloadIcon className="w-4 h-4 mr-2" />
                    Download for {platform.name}
                  </a>
                </Button>
                
                {platform.alternativeUrl && (
                  <Button 
                    variant="outline" 
                    className="btn-neu w-full text-xs"
                    asChild
                  >
                    <a href={platform.alternativeUrl} download>
                      Alternative Download
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* System Requirements */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="card-neu p-8 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <HardDrive className="w-6 h-6 text-primary" />
              System Requirements
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Minimum Requirements:</h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• 4 GB RAM</li>
                  <li>• 200 MB free disk space</li>
                  <li>• Internet connection for AI features</li>
                  <li>• Modern graphics drivers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Recommended:</h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• 8 GB RAM or more</li>
                  <li>• SSD for better performance</li>
                  <li>• Stable internet connection</li>
                  <li>• 1920x1080 resolution or higher</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-neu p-8 animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Github className="w-6 h-6 text-primary" />
              Installation Guide
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <span>Download the installer for your operating system</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <span>Run the installer and follow the setup wizard</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <span>Launch SkripsiMate and create your first thesis project</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">4</span>
                </div>
                <span>Connect to AI services and start planning!</span>
              </div>
            </div>
          </div>
        </div>

        {/* All Downloads Section */}
        <div className="text-center animate-fade-in-up animate-delay-500 mb-12">
          <div className="card-neu inline-block p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">All Downloads & Resources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Button variant="outline" className="btn-neu" asChild>
                <a href={`${RELEASES_URL}/latest/download/SkripsiMate.Setup.1.0.0.exe`} download>
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Windows Installer
                </a>
              </Button>
              <Button variant="outline" className="btn-neu" asChild>
                <a href={`${RELEASES_URL}/latest/download/SkripsiMate-1.0.0-arm64.dmg`} download>
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  macOS ARM64
                </a>
              </Button>
              <Button variant="outline" className="btn-neu" asChild>
                <a href={`${RELEASES_URL}/latest/download/SkripsiMate-1.0.0.AppImage`} download>
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Linux AppImage
                </a>
              </Button>
              <Button variant="outline" className="btn-neu" asChild>
                <a href={`${RELEASES_URL}/latest/download/skripsimate_1.0.0_amd64.deb`} download>
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Linux DEB
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="btn-neu" asChild>
                <a href={`https://github.com/${GITHUB_REPO}`} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              </Button>
              <Button variant="outline" className="btn-neu" asChild>
                <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  All Releases
                </a>
              </Button>
              <Button variant="outline" className="btn-neu" asChild>
                <a href={`https://github.com/${GITHUB_REPO}/releases/latest`} target="_blank" rel="noopener noreferrer">
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Release Notes
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Need help with installation? Check our{" "}
              <a href="/docs" className="text-primary hover:underline font-medium">
                documentation
              </a>{" "}
              or{" "}
              <a href="/community" className="text-primary hover:underline font-medium">
                ask the community
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;