import Image from "next/image";

export default function Portfolio() {
  // 💡 향후 사진을 추가할 때는 이 배열(projects)에 내용만 추가하면 자동으로 화면에 그려집니다.
  const projects = [
    {
      title: "30평형 아파트 전체 실크도배",
      location: "거실 및 주방",
      description: "기존 변색된 벽지를 제거하고, 화이트 톤 실크벽지로 모던하고 넓어 보이게 마감했습니다.",
      beforeImg: "/portfolio/bf.webp", // public 폴더 기준 경로
      afterImg: "/portfolio/af.webp",
    },
    // 새로운 사례 추가 시 아래 주석을 풀고 내용만 변경하세요.
    /*
    {
      title: "상업 공간 화이트 도배",
      location: "사무실 로비",
      description: "어두운 톤의 벽을 밝은 톤으로 교체하여 공간감을 극대화했습니다.",
      beforeImg: "/portfolio/before-2.jpg",
      afterImg: "/portfolio/after-2.jpg",
    }
    */
  ];

  return (
    <section id="portfolio" className="w-full py-24 bg-stone-100 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base font-light tracking-[0.4em] text-neutral-500 mb-2">
            PORTFOLIO
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
            시공 사례
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col group">
              {/* 이미지 영역: Next.js Image 컴포넌트로 최적화 및 깨짐 방지 */}
              <div className="flex w-full h-64 md:h-80 mb-6 overflow-hidden relative">
                
                {/* Before 이미지 */}
                <div className="relative w-1/2 h-full border-r-2 border-white">
                  <Image
                    src={project.beforeImg}
                    alt={`${project.title} 시공 전`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 text-white text-xs font-bold tracking-widest">
                    BEFORE
                  </div>
                </div>

                {/* After 이미지 */}
                <div className="relative w-1/2 h-full">
                  <Image
                    src={project.afterImg}
                    alt={`${project.title} 시공 후`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600/90 px-3 py-1 text-white text-xs font-bold tracking-widest">
                    AFTER
                  </div>
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
      </div>
    </section>
  );
}