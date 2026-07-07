import AppLayout from "@/components/layout/AppLayout";

export default function MatchingSettingsPage() {
  // Step 2.5에서는 공통 레이아웃만 적용하고, 실제 화면 내용은 아직 간단한 안내문으로 유지합니다.
  return (
    <AppLayout>
      <section className="placeholder-page">
        <h1>매칭 조건 설정</h1>
        <p>관심 키워드, 지역, 금액 범위 같은 매칭 조건을 관리할 페이지입니다.</p>
      </section>
    </AppLayout>
  );
}