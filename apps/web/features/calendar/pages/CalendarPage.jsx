import AppLayout from "@/components/layout/AppLayout";

export default function CalendarPage() {
  // Step 2.5에서는 공통 레이아웃만 적용하고, 실제 화면 내용은 아직 간단한 안내문으로 유지합니다.
  return (
    <AppLayout>
      <section className="placeholder-page">
        <h1>입찰 일정</h1>
        <p>공고 마감일과 주요 일정을 달력으로 볼 페이지입니다.</p>
      </section>
    </AppLayout>
  );
}