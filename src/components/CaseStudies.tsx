import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const CaseStudies = () => {
  const cases = [
    {
      industry: "ECサイト運営企業",
      problem: "注文データの手動連携による工数とミス",
      solution: "自動連携システムの導入",
      result: "作業時間ゼロ、ミスの完全撲滅を実現",
    },
    {
      industry: "化粧品メーカー",
      problem: "PLANET VANとの手動データ連携",
      solution: "通信ツール＋受注管理システムの導入",
      result: "月次照合作業の削減、業務効率の改善",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container container-padding">
        <h2 className="heading-lg text-center mb-12">導入事例</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <Card key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader>
                <h3 className="heading-md text-primary">{case_.industry}</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">課題:</h4>
                    <p className="text-gray-600">{case_.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">解決策:</h4>
                    <p className="text-gray-600">{case_.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">効果:</h4>
                    <p className="text-gray-600">{case_.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};