"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FadeIn from '@/components/ui/FadeIn';

// Zod를 이용한 입력값 검증 규칙 설정
const formSchema = z.object({
  name: z.string().min(2, { message: "이름을 2자 이상 입력해주세요." }),
  phone: z.string().regex(/^[0-9]{10,11}$/, { message: "연락처는 구분자 없이 숫자만 입력해주세요." }),
  service: z.string().min(1, { message: "시공 종류를 선택해주세요." }),
  details: z.string().min(10, { message: "현장 상황과 문의 내용을 10자 이상 자세히 적어주세요." }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "4518070a-4704-4257-a9a6-7203dae5f100",
          name: data.name,
          phone: data.phone,
          service: data.service,
          details: data.details,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "전송에 실패했습니다.");
      }
      alert("견적 문의가 접수되었습니다. 빠르게 확인 후 연락드리겠습니다!");
      reset();
    } catch (error) {
      alert(`오류가 발생했습니다: ${error instanceof Error ? error.message : "다시 시도해주세요."}`);
    }
  };

  return (
    <section id="contact" className="w-full py-24 bg-neutral-900 px-6">
      <FadeIn>
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-sm md:text-base font-light tracking-[0.4em] text-neutral-500 mb-2">
            CONTACT US
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
            무료 견적 문의
          </h3>
          <p className="mt-4 text-neutral-600 break-keep">
            현장 상황을 자세히 적어주시면 더 정확한 가견적 안내가 가능합니다.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 이름 입력 */}
            <div>
              <label className="block text-sm font-bold text-neutral-900 mb-2">이름 / 상호명</label>
              <input 
                type="text" 
                {...register("name")}
                className="w-full p-4 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors text-neutral-900 placeholder-neutral-400"
                placeholder="홍길동"
              />
              {errors.name && <p className="mt-2 text-sm text-red-600 font-medium">{errors.name.message}</p>}
            </div>

            {/* 연락처 입력 */}
            <div>
              <label className="block text-sm font-bold text-neutral-900 mb-2">연락처</label>
              <input 
                type="text" 
                {...register("phone")}
                className="w-full p-4 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors text-neutral-900 placeholder-neutral-400"
                placeholder="01012345678"
              />
              {errors.phone && <p className="mt-2 text-sm text-red-600 font-medium">{errors.phone.message}</p>}
            </div>
          </div>

          {/* 시공 종류 선택 */}
          <div>
            <label className="block text-sm font-bold text-neutral-900 mb-2">시공 종류</label>
            <select 
              {...register("service")}
              className="w-full p-4 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors appearance-none text-neutral-900 placeholder-neutral-400"
            >
              <option value="">시공 종류를 선택해주세요</option>
              <option value="실크도배">전체 실크도배</option>
              <option value="합지도배">전체 합지도배</option>
              <option value="부분도배">부분 도배 / 누수 보수</option>
              <option value="도배장판">도배 + 장판 시공</option>
              <option value="기타">기타 인테리어 문의</option>
            </select>
            {errors.service && <p className="mt-2 text-sm text-red-600 font-medium">{errors.service.message}</p>}
          </div>

          {/* 문의 내용 입력 */}
          <div>
            <label className="block text-sm font-bold text-neutral-900 mb-2">현장 주소 및 문의 내용</label>
            <textarea 
              {...register("details")}
              rows={5}
              className="w-full p-4 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors resize-none text-neutral-900 placeholder-neutral-400"
              placeholder="시공하실 현장의 지역(예: 서울시 강남구 아파트 30평형)과 현재 상태, 원하시는 시공 일정을 자유롭게 적어주세요."
            ></textarea>
            {errors.details && <p className="mt-2 text-sm text-red-600 font-medium">{errors.details.message}</p>}
          </div>

          {/* 제출 버튼 */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-5 bg-neutral-900 text-white font-bold text-lg hover:bg-neutral-800 transition-colors disabled:bg-neutral-400 mt-4"
          >
            {isSubmitting ? "접수 중..." : "견적 문의 제출하기"}
          </button>
        </form>
      </div>
      </FadeIn>
    </section>
  );
}