import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-stone-100 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <span className="text-sm md:text-base font-light tracking-[0.4em] text-neutral-500 mb-4">
          INTERIOR
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-neutral-900 mb-6 tracking-tight break-keep">
          예현인테리어
        </h1>
        <p className="text-lg md:text-xl font-medium text-neutral-600 mb-10 break-keep leading-relaxed max-w-xl">
          기본에 충실한 단단함.<br className="md:hidden" />
          군더더기 없는 깔끔한 마감을 약속합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="#contact" className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white font-bold text-lg rounded-none hover:bg-neutral-800 transition-colors flex items-center justify-center">
            무료 견적 받기
          </Link>
          <Link href="#portfolio" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-neutral-900 text-neutral-900 font-bold text-lg rounded-none hover:bg-neutral-200 transition-colors flex items-center justify-center">
            시공 사례 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
