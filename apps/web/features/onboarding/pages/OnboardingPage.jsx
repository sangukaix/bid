"use client";

import { useState } from "react";
import PublicLayout from "@/components/layout/PublicLayout";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import CompanyAbilityStep from "@/features/onboarding/components/CompanyAbilityStep";
import CompanyBasicStep from "@/features/onboarding/components/CompanyBasicStep";
import BidInterestStep from "@/features/onboarding/components/BidInterestStep";
import NotificationStep from "@/features/onboarding/components/NotificationStep";

const steps = [
  { title: "회사 기본정보", component: CompanyBasicStep },
  { title: "입찰 관심 조건", component: BidInterestStep },
  { title: "회사 역량", component: CompanyAbilityStep },
  { title: "알림 설정", component: NotificationStep },
];

export default function OnboardingPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const CurrentStep = steps[stepIndex].component;
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === steps.length - 1;

  const handlePrevious = () => {
    setStepIndex((currentStep) => Math.max(currentStep - 1, 0));
  };

  const handleNext = () => {
    setStepIndex((currentStep) => Math.min(currentStep + 1, steps.length - 1));
  };

  const handleComplete = () => {
    // 온보딩 정보 저장은 나중에 Django API와 연결할 예정입니다.
    alert("기업정보 저장 기능은 추후 API 연결 예정입니다.");
  };

  return (
    <PublicLayout showFooter={false}>
      <section className="page-stack onboarding-page">
        <div className="page-heading">
          <h1>온보딩</h1>
          <p>기업정보와 관심 조건을 입력해 맞춤 공고 추천 기준을 준비합니다.</p>
        </div>

        <Card>
          <ol className="stepper" aria-label="온보딩 단계">
            {steps.map((step, index) => (
              <li
                className={`stepper__item ${index === stepIndex ? "stepper__item--active" : ""}`}
                key={step.title}
              >
                <span className="stepper__number">{index + 1}</span>
                <span className="stepper__title">{step.title}</span>
              </li>
            ))}
          </ol>

          <div className="step-panel">
            <CurrentStep />
          </div>

          <div className="form-footer">
            <Button variant="secondary" onClick={handlePrevious} disabled={isFirstStep}>
              이전
            </Button>
            {isLastStep ? (
              <Button onClick={handleComplete}>완료</Button>
            ) : (
              <Button onClick={handleNext}>다음</Button>
            )}
          </div>
        </Card>
      </section>
    </PublicLayout>
  );
}