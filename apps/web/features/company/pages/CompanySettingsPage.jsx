"use client";

import AppLayout from "@/components/layout/AppLayout";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Input from "@/components/common/Input";
import CompanyBasicForm from "@/features/company/components/CompanyBasicForm";
import CompanyCertificationForm from "@/features/company/components/CompanyCertificationForm";
import CompanyLicenseForm from "@/features/company/components/CompanyLicenseForm";
import CompanyPerformanceForm from "@/features/company/components/CompanyPerformanceForm";

export default function CompanySettingsPage() {
  const handleSave = (event) => {
    event.preventDefault();
    // 실제 저장 요청은 Django API가 준비된 뒤에 연결합니다.
    alert("기업정보 저장 기능은 추후 API 연결 예정입니다.");
  };

  return (
    <AppLayout>
      <form className="page-stack" onSubmit={handleSave}>
        <div className="page-heading">
          <h1>기업정보 설정</h1>
          <p>AI 매칭 기준이 되는 기업 기본정보와 역량 정보를 관리합니다.</p>
        </div>

        <CompanyBasicForm />

        <Card title="담당자 정보">
          <div className="form-grid form-grid--three">
            <Input id="company-manager-name" label="담당자 이름" defaultValue="홍길동" />
            <Input id="company-manager-email" label="담당자 이메일" type="email" defaultValue="manager@example.com" />
            <Input id="company-manager-phone" label="담당자 전화번호" defaultValue="010-0000-0000" />
          </div>
        </Card>

        <div className="content-grid content-grid--two">
          <CompanyLicenseForm />
          <CompanyCertificationForm />
        </div>

        <CompanyPerformanceForm />

        <div className="form-footer form-footer--end">
          <Button type="submit">저장</Button>
        </div>
      </form>
    </AppLayout>
  );
}