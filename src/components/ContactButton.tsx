import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const ContactButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button 
        size="lg"
        className="bg-secondary hover:bg-secondary/90 text-white shadow-lg"
        onClick={() => window.open("https://forms.gle/hAkPfX3hiEGdiZS48", "_blank")}
      >
        <MessageSquare className="mr-2 h-4 w-4" />
        無料相談
      </Button>
    </div>
  );
};