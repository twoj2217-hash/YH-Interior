import FadeIn from '@/components/ui/FadeIn';

export default function Services() {
  const services = [
    {
      title: "실크벽지",
      description: "고급스러운 질감과 우수한 내구성. 오염에 강해 관리가 용이하며, 이음매가 보이지 않는 깔끔한 마감이 특징입니다.",
      features: ["고급스러운 마감", "뛰어난 내구성", "오염 방지 코팅"]
    },
    {
      title: "합지벽지",
      description: "합리적인 비용과 친환경적인 소재. 통기성이 우수하여 쾌적한 실내 환경을 유지하는 데 탁월합니다.",
      features: ["합리적인 견적", "친환경 소재", "우수한 통기성"]
    },
    {
      title: "부분도배",
      description: "누수, 곰팡이, 훼손 등으로 인한 부분적인 보수. 기존 벽지와의 이질감을 최소화하는 정교한 시공을 제공합니다.",
      features: ["신속한 시공", "비용 절감", "이질감 최소화"]
    }
  ];

  return (
    <section id="services" className="w-full py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* 섹션 타이틀 */}
        <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base font-light tracking-[0.4em] text-neutral-500 mb-2">
            OUR SERVICES
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
            전문 시공 서비스
          </h3>
        </div>
        </FadeIn>

        {/* 서비스 카드 그리드 영역 (PC: 3열, 모바일: 1열) */}
        <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col p-8 border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors"
            >
              <h4 className="text-2xl font-bold text-neutral-900 mb-4">{service.title}</h4>
              <p className="text-neutral-600 mb-8 flex-grow leading-relaxed break-keep">
                {service.description}
              </p>
              <ul className="space-y-3 mt-auto border-t border-neutral-200 pt-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-sm font-medium text-neutral-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-neutral-900 mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
