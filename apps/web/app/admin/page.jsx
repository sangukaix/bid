import AdminDashboardPage from "@/features/admin/pages/AdminDashboardPage";

export default function Page() {
  // 관리자 대시보드 주소(/admin)를 담당하고, 실제 화면은 features/admin에서 불러옵니다.
  return <AdminDashboardPage />;
}