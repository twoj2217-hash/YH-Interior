export default function Portfolio() {
  const projects = [
    {
      title: "30평형 아파트 전체 실크도배",
      location: "거실 및 주방",
      description: "기존 변색된 벽지를 제거하고, 화이트 톤 실크벽지로 모던하고 넓어 보이게 마감했습니다."
    },
    {
      title: "상업 공간 화이트 도배",
      location: "사무실 로비",
      description: "어두운 톤의 벽을 밝은 톤으로 교체하여 공간감을 극대화하고 깔끔한 인상을 주었습니다."
    },
    {
      title: "안방 누수 부분 보수",
      location: "침실 벽면",
      description: "누수 흔적을 완벽히 차단하고, 기존 벽지와 이질감 없이 정교하게 부분 시공을 완료했습니다."
    }
  ];

  return (
    <section id="portfolio" className="w-full py-24 bg-stone-100 px-6">
      <div className="max-w-6xl mx-auto">
        {/* 섹션 타이틀 */}
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base font-light tracking-[0.4em] text-neutral-500 mb-2">
            PORTFOLIO
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
            시공 사례
          </h3>
        </div>

        {/* 갤러리 그리드 영역 (PC: 3열, 모바일: 1열) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              {/* 이미지 영역 (Before / After 임시 박스) */}
              <div className="flex w-full h-48 md:h-64 mb-6 overflow-hidden">
                <div className="w-1/2 bg-neutral-300 flex items-center justify-center border-r border-white">
                  <span className="text-neutral-500 font-bold tracking-widest text-sm">BEFORE</span>
                </div>
                <div className="w-1/2 bg-neutral-800 flex items-center justify-center group-hover:bg-black transition-colors">
                  <span className="text-neutral-300 font-bold tracking-widest text-sm">AFTER</span>
                </div>
              </div>

              {/* 텍스트 설명 영역 */}
              <div>
                <span className="text-xs font-bold text-neutral-500 mb-2 block">
                  {project.location}
                </span>
                <h4 className="text-xl font-bold text-neutral-900 mb-3 break-keep">
                  {project.title}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed break-keep">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* 전체보기 버튼 */}
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 border border-neutral-300 text-neutral-600 font-bold text-sm hover:bg-neutral-900 hover:text-white transition-colors">
            더 많은 사례 보기
          </button>
        </div>
      </div>
    </section>
  );
}