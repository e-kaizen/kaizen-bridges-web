import { Button } from "@/components/ui/button";
import { Database, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="bg-dark text-light min-h-[80vh] flex items-center section-padding">
      <div className="container container-padding">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <Database className="w-16 h-16 mx-auto mb-8 text-primary" />
          <h1 className="heading-xl mb-6">
            データ連携の自動化で、本質的な業務に集中できる環境を
          </h1>
          <p className="body-lg mb-8 text-gray-300">
            手作業によるデータ入力から解放され、ミスのない効率的な業務フローを実現します。
            Kaizen Bridgesは、あなたのビジネスに最適なデータ連携の自動化を提供します。
          </p>
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white"
            onClick={() => window.open("https://forms.gle/hAkPfX3hiEGdiZS48", "_blank")}
          >
            無料相談はこちら
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};