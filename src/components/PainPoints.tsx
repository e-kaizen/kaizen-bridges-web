import { Clock, AlertTriangle, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const PainPoints = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "時間の浪費",
      description: "データ入力に1日4時間以上費やし、本来の業務に支障が出ている",
    },
    {
      icon: AlertTriangle,
      title: "人的ミス",
      description: "手作業による入力ミスが月平均3件発生し、業務の手戻りが発生",
    },
    {
      icon: BarChart,
      title: "非効率な業務",
      description: "データの手動処理により、月間40時間以上の工数が発生",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container container-padding">
        <h2 className="heading-lg text-center mb-12">こんな課題はありませんか？</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="pt-6">
                <point.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="heading-md text-center mb-4">{point.title}</h3>
                <p className="body-base text-gray-600 text-center">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};