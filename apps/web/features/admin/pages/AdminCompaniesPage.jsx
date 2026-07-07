import AdminLayout from "@/components/layout/AdminLayout";

export default function AdminCompaniesPage() {
  // Step 2.5에서는 공통 레이아웃만 적용하고, 실제 화면 내용은 아직 간단한 안내문으로 유지합니다.
  return (
    <AdminLayout>
      <section className="placeholder-page">
        <h1>관리자 기업 관리</h1>
        <p>관리자가 기업 회원을 관리할 페이지입니다.</p>
      </section>
    </AdminLayout>
  );
}