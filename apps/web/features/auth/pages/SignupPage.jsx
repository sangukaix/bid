"use client";

import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Input from "@/components/common/Input";

export default function SignupPage() {
  const handleSignup = (event) => {
    event.preventDefault();
    // 실제 회원가입 저장은 Django API 연결 단계에서 구현합니다.
    alert("회원가입 기능은 추후 API 연결 예정입니다.");
  };

  return (
    <PublicLayout>
      <section className="page-stack auth-page auth-page--wide">
        <div className="page-heading">
          <h1>회원가입</h1>
          <p>기업정보를 등록하고 맞춤 입찰공고 추천을 받아보세요.</p>
        </div>

        <Card className="auth-card">
          <form className="form-stack" onSubmit={handleSignup}>
            <div className="form-grid form-grid--two">
              <Input id="signup-email" label="이메일" type="email" placeholder="manager@example.com" />
              <Input id="signup-password" label="비밀번호" type="password" placeholder="비밀번호 입력" />
              <Input id="signup-password-confirm" label="비밀번호 확인" type="password" placeholder="비밀번호 재입력" />
              <Input id="signup-manager-name" label="담당자 이름" placeholder="홍길동" />
              <Input id="signup-manager-phone" label="담당자 전화번호" placeholder="010-0000-0000" />
              <Input id="signup-company-name" label="회사명" placeholder="주식회사 비드" />
              <Input id="signup-business-number" label="사업자등록번호" placeholder="000-00-00000" />
            </div>
            <Button type="submit">회원가입</Button>
          </form>

          <p className="auth-switch">
            이미 계정이 있나요?{" "}
            <Link className="text-link" href="/login">
              로그인
            </Link>
          </p>
        </Card>
      </section>
    </PublicLayout>
  );
}