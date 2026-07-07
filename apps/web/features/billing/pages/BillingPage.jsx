"use client";

import { useState } from "react";

import AppLayout from "@/components/layout/AppLayout";
import ComingSoonModal from "@/features/billing/components/ComingSoonModal";
import CurrentPlanCard from "@/features/billing/components/CurrentPlanCard";
import PlanCard from "@/features/billing/components/PlanCard";
import UsageSummary from "@/features/billing/components/UsageSummary";

const plans = [
  {
    name: "Free",
    price: "0원",
    description: "처음 사용해보는 기업을 위한 무료 체험 플랜입니다.",
    features: ["AI 분석 3건", "관심 키워드 3개", "관심 공고 10개"],
  },
  {
    name: "Basic",
    price: "월 29,000원",
    description: "입찰공고를 정기적으로 확인하는 소규모 팀에 적합합니다.",
    features: ["추천 공고 확대", "AI 분석 사용량 증가", "이메일 알림 준비"],
    actionLabel: "업그레이드",
  },
  {
    name: "Pro",
    price: "월 79,000원",
    description: "여러 공고를 적극적으로 검토하는 기업을 위한 플랜입니다.",
    features: ["AI 분석 리포트 확대", "관심공고 관리", "팀 단위 검토 준비"],
    actionLabel: "업그레이드",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "문의",
    description: "기관 맞춤 설정과 대량 분석이 필요한 기업을 위한 플랜입니다.",
    features: ["맞춤 컨설팅", "전용 지원", "대량 공고 분석 준비"],
    actionLabel: "문의하기",
  },
];

export default function BillingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openComingSoonModal() {
    // 실제 결제를 연결하지 않고 준비중 모달만 띄웁니다.
    setIsModalOpen(true);
  }

  return (
    <AppLayout>
      <div className="page-stack">
        <section className="page-heading">
          <p className="page-heading__eyebrow">Billing</p>
          <h1>요금제/결제</h1>
          <p>현재 요금제와 이번 달 사용량을 확인합니다. 실제 결제 기능은 아직 연결하지 않았습니다.</p>
        </section>

        <div className="content-grid content-grid--two">
          <CurrentPlanCard />
          <UsageSummary />
        </div>

        <section className="plan-grid" aria-label="요금제 카드">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} onAction={openComingSoonModal} />
          ))}
        </section>
      </div>

      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </AppLayout>
  );
}