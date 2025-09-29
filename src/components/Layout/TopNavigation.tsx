import { Code, Eye, Settings, Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const TopNavigation = () => {
  return (
    <nav className="h-16 border-b border-border/50 bg-gradient-glass backdrop-blur-sm px-6 flex items-center justify-between">
      <div className="flex items-center gap-6">
        {/* Logo already in sidebar */}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-secondary/30 rounded-lg px-3 py-2">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-sm text-foreground font-medium">Live Mode</span>
        </div>

        <Button 
          variant="outline" 
          size="sm" 
          className="bg-card-glass border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
        >
          <Code className="w-4 h-4 mr-2" />
          Code
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className="bg-card-glass border-accent/30 hover:bg-accent/10 hover:border-accent/50 transition-all"
        >
          <Eye className="w-4 h-4 mr-2" />
          Preview
        </Button>

        <div className="w-px h-6 bg-border"></div>

        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Share2 className="w-4 h-4" />
        </Button>

        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Settings className="w-4 h-4" />
        </Button>
      </div>
    </nav>
  );
};