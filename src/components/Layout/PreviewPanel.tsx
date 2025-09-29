import { Eye, Code, Monitor, Smartphone, Tablet, Settings, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/ai-designer-hero.jpg";

export const PreviewPanel = () => {
  return (
    <div className="flex-1 flex flex-col bg-preview-bg relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-gradient-secondary opacity-80" />
      {/* Top Bar */}
      <div className="h-16 border-b border-border/50 bg-gradient-glass backdrop-blur-sm flex items-center justify-between px-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-preview-accent" />
            <span className="font-semibold text-foreground">Live Preview</span>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              Direct component rendering
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-secondary/50 rounded-lg p-1">
            <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground">
              <Monitor className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground">
              <Tablet className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground">
              <Smartphone className="w-4 h-4" />
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="text-primary hover:text-primary-glow">
            <Code className="w-4 h-4" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Preview Content */}
      <div className="flex-1 flex items-center justify-center p-8 relative z-10">
        <Card className="bg-gradient-glass backdrop-blur-sm border-border/30 shadow-warm max-w-md w-full text-center p-12">
          <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center shadow-glow animate-pulse">
            <Eye className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Preview</h2>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Generate a component to see it here. Your UI will render in real-time as you chat with the AI.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>Size: desktop • Resolution: 1920×1080</span>
          </div>
        </Card>
      </div>
    </div>
  );
};