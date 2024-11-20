import { MessageCircle, Clock, CheckCircle } from "lucide-react";

export const Support = () => {
  const features = [
    {
      icon: Clock,
      title: "営業時間",
      description: "平日11:00-18:00",
    },
    {
      icon: MessageCircle,
      title: "対応方法",
      description: "チャット・メールでスピーディーに対応",
    },
    {
      icon: CheckCircle,
      title: "導入サポート",
      description: "専門スタッフによるオンラインミーティング",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container container-padding">
        <h2 className="heading-lg text-center mb-12">充実のサポート体制</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="heading-md mb-4">{feature.title}</h3>
              <p className="body-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};