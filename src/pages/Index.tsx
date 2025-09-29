import { Sidebar } from "@/components/Layout/Sidebar";
import { PreviewPanel } from "@/components/Layout/PreviewPanel";
import { TopNavigation } from "@/components/Layout/TopNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopNavigation />
      <div className="flex-1 flex">
        <Sidebar />
        <PreviewPanel />
      </div>
    </div>
  );
};

export default Index;