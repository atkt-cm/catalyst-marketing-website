import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, GitBranch, Code, Zap, ArrowRight } from "lucide-react";

const GitHubTemplate = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-template-primary rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-template-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-template-primary">Lovable Template</span>
          </div>
          <Badge variant="outline" className="border-template-accent text-template-accent">
            Ready to Connect
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl shadow-glow mb-6">
              <Github className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-template-primary mb-6">
              Connect Your GitHub Repository
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              This is a clean template ready to be connected to your existing GitHub repository. 
              Start building amazing web applications with Lovable's powerful AI-driven development platform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-template-secondary shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-template-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <GitBranch className="w-6 h-6 text-template-accent" />
                </div>
                <CardTitle className="text-template-primary">Bidirectional Sync</CardTitle>
                <CardDescription>
                  Automatic two-way sync between Lovable and GitHub. Changes flow seamlessly in both directions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-template-secondary shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-template-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6 text-template-accent" />
                </div>
                <CardTitle className="text-template-primary">AI-Powered Development</CardTitle>
                <CardDescription>
                  Build faster with AI assistance. Generate components, fix bugs, and implement features with natural language.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-template-secondary shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-template-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <Code className="w-6 h-6 text-template-accent" />
                </div>
                <CardTitle className="text-template-primary">Modern Stack</CardTitle>
                <CardDescription>
                  Built with React, TypeScript, Tailwind CSS, and shadcn/ui. Production-ready from day one.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Connection Instructions */}
          <Card className="border-template-accent/20 bg-template-secondary/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-template-primary flex items-center">
                <Github className="w-5 h-5 mr-2" />
                How to Connect Your Repository
              </CardTitle>
              <CardDescription>
                Follow these steps to connect your existing GitHub repository to this Lovable project.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-template-accent rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-template-primary">Click GitHub in the top menu</h4>
                  <p className="text-muted-foreground">Look for the GitHub button in the Lovable editor interface.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-template-accent rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-template-primary">Authorize the Lovable GitHub App</h4>
                  <p className="text-muted-foreground">Grant permissions to allow Lovable to sync with your repositories.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-template-accent rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-template-primary">Select your GitHub account</h4>
                  <p className="text-muted-foreground">Choose the account or organization where your repository is located.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-template-accent rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-template-primary">Create or connect repository</h4>
                  <p className="text-muted-foreground">Either create a new repository or connect to an existing one.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              Get Started with GitHub
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Need help? Check out the{" "}
              <a href="https://docs.lovable.dev/" className="text-template-accent hover:underline">
                Lovable documentation
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-template-secondary">
        <div className="text-center text-muted-foreground">
          <p>Built with ❤️ using Lovable • React • TypeScript • Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default GitHubTemplate;