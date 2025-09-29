import { Bot, Sparkles, MessageSquare, Layers, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChatInterface } from "./ChatInterface";

export const Sidebar = () => {
  return (
    <div className="w-80 h-screen bg-gradient-secondary border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI Designer
            </h1>
            <p className="text-sm text-muted-foreground">Live UI code generator</p>
          </div>
        </div>
      </div>

      {/* Design Context */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Design Context</h2>
        </div>
        <Card className="bg-card-glass border-border/50 p-4 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground">
            AI Design Assistant
          </p>
        </Card>
      </div>

      {/* Chat Interface */}
      <div className="flex-1 flex flex-col">
        <ChatInterface />
      </div>

      {/* Settings */}
      <div className="p-4 border-t border-border/50">
        <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground hover:text-foreground">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>
    </div>
  );
};