import { CheckCircle, Settings, Clock } from "lucide-react";

export const Solutions = () => {
  const solutions = [
    {
      icon: CheckCircle,
      title: "完全自動化",
      description: "データ連携を100%自動化し、手作業による転記作業を撲滅します",
    },
    {
      icon: Settings,
      title: "柔軟なカスタマイズ",
      description: "お客様固有の業務フローに合わせた最適な連携を実現します",
    },
    {
      icon: Clock,
      title: "即時反映",
      description: "リアルタイムでのデータ連携により、業務の即時性を向上させます",
    },
  ];

  return (
    <section className="section-padding bg-dark text-light">
      <div className="container container-padding">
        <h2 className="heading-lg text-center mb-12">Kaizen Bridgesが解決します</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg border border-gray-700 animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <solution.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="heading-md mb-4">{solution.title}</h3>
              <p className="body-base text-gray-300">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};