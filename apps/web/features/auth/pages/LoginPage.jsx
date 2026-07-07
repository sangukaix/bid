"use client";

import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Input from "@/components/common/Input";

export default function LoginPage() {
  const handleLogin = (event) => {
    event.preventDefault();
    // 아직 백엔드 로그인 API를 연결하지 않았기 때문에 안내 메시지만 보여줍니다.
    alert("로그인 기능은 추후 API 연결 예정입니다.");
  };

  return (
    <PublicLayout>
      <section className="page-stack auth-page">
        <div className="page-heading">
          <h1>로그인</h1>
          <p>기업 계정으로 로그인하여 추천 입찰공고를 확인하세요.</p>
        </div>

        <Card className="auth-card">
          <form className="form-stack" onSubmit={handleLogin}>
            <Input
              id="login-email"
              label="이메일"
              type="email"
              placeholder="manager@example.com"
              autoComplete="email"
            />
            <Input
              id="login-password"
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력하세요"
              autoComplete="current-password"
            />
            <Button type="submit">로그인</Button>
          </form>

          <p className="auth-switch">
            아직 계정이 없나요?{" "}
            <Link className="text-link" href="/signup">
              회원가입
            </Link>
          </p>
        </Card>
      </section>
    </PublicLayout>
  );
}