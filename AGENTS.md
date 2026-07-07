# bid 프로젝트 Codex 작업 기준서

## 0. 프로젝트 개요

프로젝트명: `bid`

서비스 성격: AI 기반 나라장터 입찰공고 매칭 서비스

목표:
기업 고객이 로그인해서 기업정보와 희망 입찰 조건을 입력하면, 나라장터 입찰공고를 자동 수집하고, 해당 기업에 맞는 공고를 추천한다. 이후 AI가 공고문, 제안요청서, 과업지시서 등을 분석하여 공고 요약, 금액, 참가자격, 제출서류, 위험사항, 기업 기준 입찰 가능성 등을 마이페이지에 보여준다.

초기 개발 목표:
처음부터 모든 기능을 완성하지 않는다. 먼저 더미 데이터 기반으로 전체 화면 구조와 폴더 구조를 만든다. 이후 사용자가 화면을 확인하고, 벤치마킹 결과와 나라장터 공고문 구조를 확인하면서 단계별로 기능을 붙인다.

핵심 문장:
- 오늘 우리 회사가 봐야 할 공고
- 이 공고, 우리 회사가 들어갈 수 있나?

---

## 1. 개발 방식

Codex는 한 번에 전체 서비스를 만들지 않는다. 반드시 단계별로 진행한다.

작업 원칙:
1. 한 번에 한 단계만 작업한다.
2. 각 단계가 끝나면 변경 파일 목록과 실행 방법을 설명한다.
3. 다음 단계는 사용자가 확인한 뒤 진행한다.
4. 더미 데이터 기반 화면을 먼저 만들고, 실제 API 연결은 나중에 한다.
5. 나라장터 API, OpenAI API, 이메일/SMS, 결제는 처음부터 실제 연동하지 않는다.
6. 파일 하나에 모든 코드를 몰아넣지 않는다.
7. 페이지, 기능, 공통 컴포넌트, API 호출, 더미 데이터, CSS를 역할별로 분리한다.
8. 코드에는 초보자가 이해할 수 있도록 주석을 충분히 단다.
9. 과도하게 복잡한 패턴을 쓰지 않는다.
10. 사용자가 수업에서 배운 React/Vite 개념과 연결해 이해할 수 있도록 단순하고 명확하게 작성한다.

---

## 2. 기술 스택 결정

Frontend:
- Next.js
- React
- JavaScript JSX 우선
- CSS는 초기에는 일반 CSS 또는 feature별 CSS 사용
- TypeScript는 초기에는 사용하지 않는다. 나중에 필요하면 전환한다.

Backend:
- Django
- Django REST Framework
- PostgreSQL 예정
- 초기에는 SQLite 또는 PostgreSQL 중 개발 편한 방식으로 시작 가능

AI:
- OpenAI API는 추후 연동
- 초기에는 더미 AI 분석 데이터 사용

수집:
- 나라장터/조달청 Open API는 추후 연동
- 초기에는 더미 입찰공고 데이터 사용

알림:
- 초기에는 화면만
- 이메일 발송은 2차 이후
- SMS/카카오 알림톡은 3차 이후

결제:
- `/billing` 페이지는 반드시 만든다.
- 실제 결제 기능은 구현하지 않는다.
- 업그레이드/결제 버튼 클릭 시 “결제 기능은 준비중입니다.” 모달을 보여준다.

---

## 3. Next.js와 Vite 차이 설명 기준

이 프로젝트는 Next.js 프로젝트다.

수업에서 배운 Vite React와의 차이:
- Vite React는 보통 `src/main.jsx`, `src/App.jsx`에서 시작한다.
- Next.js는 `app/` 폴더 안의 폴더명과 `page.jsx`가 페이지 주소가 된다.
- 예: `app/login/page.jsx`는 `/login` 페이지다.
- 예: `app/bids/[id]/page.jsx`는 `/bids/1` 같은 상세 페이지다.

중요 원칙:
- `app/` 폴더는 URL 주소 담당이다.
- 실제 화면 코드는 `features/` 폴더에 둔다.
- `app/page.jsx` 안에 코드를 길게 쓰지 않는다.

예시:
```jsx
import HomePage from "@/features/home/pages/HomePage";

export default function Page() {
  return <HomePage />;
}
```

---

## 4. 전체 폴더 구조

```text
bid/
│
├─ apps/
│  │
│  ├─ web/
│  │  ├─ app/
│  │  ├─ features/
│  │  ├─ components/
│  │  ├─ lib/
│  │  ├─ data/
│  │  ├─ styles/
│  │  ├─ public/
│  │  ├─ package.json
│  │  └─ next.config.js
│  │
│  └─ server/
│     ├─ config/
│     ├─ accounts/
│     ├─ companies/
│     ├─ bids/
│     ├─ matches/
│     ├─ ai_analysis/
│     ├─ notifications/
│     ├─ billing/
│     ├─ collection_logs/
│     ├─ common/
│     ├─ manage.py
│     └─ requirements.txt
│
├─ docs/
│  ├─ 01_planning.md
│  ├─ 02_pages.md
│  ├─ 03_database.md
│  ├─ 04_api.md
│  ├─ 05_ai_analysis.md
│  ├─ 06_benchmark.md
│  └─ 07_codex_tasks.md
│
├─ scripts/
│  ├─ seed_dummy_data.py
│  ├─ reset_db.py
│  ├─ fetch_sample_bids.py
│  └─ create_admin_user.py
│
├─ infra/
│  ├─ nginx/
│  ├─ docker/
│  └─ deploy/
│
├─ AGENTS.md
├─ .env.example
├─ .gitignore
├─ README.md
└─ docker-compose.yml
```

---

## 5. Frontend 상세 구조

```text
apps/web/
│
├─ app/
│  ├─ layout.jsx
│  ├─ page.jsx
│  ├─ globals.css
│  │
│  ├─ login/
│  │  └─ page.jsx
│  │
│  ├─ signup/
│  │  └─ page.jsx
│  │
│  ├─ onboarding/
│  │  └─ page.jsx
│  │
│  ├─ dashboard/
│  │  └─ page.jsx
│  │
│  ├─ bids/
│  │  ├─ recommended/
│  │  │  └─ page.jsx
│  │  ├─ search/
│  │  │  └─ page.jsx
│  │  ├─ favorites/
│  │  │  └─ page.jsx
│  │  └─ [id]/
│  │     ├─ page.jsx
│  │     └─ analysis/
│  │        └─ page.jsx
│  │
│  ├─ calendar/
│  │  └─ page.jsx
│  │
│  ├─ notifications/
│  │  └─ page.jsx
│  │
│  ├─ settings/
│  │  ├─ company/
│  │  │  └─ page.jsx
│  │  └─ matching/
│  │     └─ page.jsx
│  │
│  ├─ billing/
│  │  └─ page.jsx
│  │
│  └─ admin/
│     ├─ page.jsx
│     ├─ companies/
│     │  └─ page.jsx
│     ├─ bids/
│     │  └─ page.jsx
│     ├─ ai-jobs/
│     │  └─ page.jsx
│     ├─ notifications/
│     │  └─ page.jsx
│     └─ logs/
│        └─ page.jsx
│
├─ features/
├─ components/
├─ lib/
├─ data/
├─ styles/
└─ public/
```

---

## 6. features 구조

```text
apps/web/features/
│
├─ home/
│  ├─ pages/
│  │  └─ HomePage.jsx
│  ├─ components/
│  │  ├─ HeroSection.jsx
│  │  ├─ FeatureSection.jsx
│  │  ├─ SampleBidSection.jsx
│  │  └─ PricingPreview.jsx
│  └─ home.css
│
├─ auth/
│  ├─ pages/
│  │  ├─ LoginPage.jsx
│  │  └─ SignupPage.jsx
│  ├─ components/
│  │  ├─ LoginForm.jsx
│  │  └─ SignupForm.jsx
│  ├─ api/
│  │  └─ authApi.js
│  └─ auth.css
│
├─ onboarding/
│  ├─ pages/
│  │  └─ OnboardingPage.jsx
│  ├─ components/
│  │  ├─ CompanyBasicStep.jsx
│  │  ├─ BidInterestStep.jsx
│  │  ├─ CompanyAbilityStep.jsx
│  │  └─ NotificationStep.jsx
│  └─ onboarding.css
│
├─ dashboard/
│  ├─ pages/
│  │  └─ DashboardPage.jsx
│  ├─ components/
│  │  ├─ DashboardStatCards.jsx
│  │  ├─ TodayRecommendedBids.jsx
│  │  ├─ DeadlineBids.jsx
│  │  └─ RecentNotifications.jsx
│  └─ dashboard.css
│
├─ bids/
│  ├─ pages/
│  │  ├─ RecommendedBidsPage.jsx
│  │  ├─ BidSearchPage.jsx
│  │  ├─ FavoriteBidsPage.jsx
│  │  ├─ BidDetailPage.jsx
│  │  └─ BidAnalysisPage.jsx
│  ├─ components/
│  │  ├─ BidCard.jsx
│  │  ├─ BidTable.jsx
│  │  ├─ BidFilter.jsx
│  │  ├─ BidDetailHeader.jsx
│  │  ├─ BidBasicInfo.jsx
│  │  ├─ BidAmountInfo.jsx
│  │  ├─ BidFileList.jsx
│  │  ├─ BidChecklist.jsx
│  │  ├─ BidMemoBox.jsx
│  │  └─ BidStatusBadge.jsx
│  ├─ api/
│  │  └─ bidsApi.js
│  ├─ hooks/
│  │  ├─ useBids.js
│  │  ├─ useBidDetail.js
│  │  └─ useFavoriteBids.js
│  ├─ utils/
│  │  ├─ bidStatus.js
│  │  └─ bidFilter.js
│  └─ bids.css
│
├─ ai/
│  ├─ pages/
│  │  └─ AiAnalysisPage.jsx
│  ├─ components/
│  │  ├─ AiSummaryBox.jsx
│  │  ├─ AiFitScore.jsx
│  │  ├─ AiRiskList.jsx
│  │  ├─ AiRequiredDocs.jsx
│  │  ├─ AiCompanyCheck.jsx
│  │  └─ AiDisclaimer.jsx
│  ├─ api/
│  │  └─ aiApi.js
│  └─ ai.css
│
├─ calendar/
│  ├─ pages/
│  │  └─ CalendarPage.jsx
│  ├─ components/
│  │  ├─ BidCalendar.jsx
│  │  └─ DeadlineList.jsx
│  └─ calendar.css
│
├─ notifications/
│  ├─ pages/
│  │  └─ NotificationsPage.jsx
│  ├─ components/
│  │  ├─ NotificationTable.jsx
│  │  └─ NotificationSettingBox.jsx
│  ├─ api/
│  │  └─ notificationsApi.js
│  └─ notifications.css
│
├─ company/
│  ├─ pages/
│  │  └─ CompanySettingsPage.jsx
│  ├─ components/
│  │  ├─ CompanyBasicForm.jsx
│  │  ├─ CompanyLicenseForm.jsx
│  │  ├─ CompanyCertificationForm.jsx
│  │  └─ CompanyPerformanceForm.jsx
│  ├─ api/
│  │  └─ companyApi.js
│  └─ company.css
│
├─ matching/
│  ├─ pages/
│  │  └─ MatchingSettingsPage.jsx
│  ├─ components/
│  │  ├─ KeywordSettingBox.jsx
│  │  ├─ RegionSettingBox.jsx
│  │  ├─ BudgetRangeBox.jsx
│  │  └─ BidTypeSettingBox.jsx
│  ├─ api/
│  │  └─ matchingApi.js
│  └─ matching.css
│
├─ billing/
│  ├─ pages/
│  │  └─ BillingPage.jsx
│  ├─ components/
│  │  ├─ CurrentPlanCard.jsx
│  │  ├─ UsageSummary.jsx
│  │  ├─ PlanCard.jsx
│  │  └─ ComingSoonModal.jsx
│  └─ billing.css
│
└─ admin/
   ├─ pages/
   │  ├─ AdminDashboardPage.jsx
   │  ├─ AdminCompaniesPage.jsx
   │  ├─ AdminBidsPage.jsx
   │  ├─ AdminAiJobsPage.jsx
   │  ├─ AdminNotificationsPage.jsx
   │  └─ AdminLogsPage.jsx
   ├─ components/
   │  ├─ AdminStatCards.jsx
   │  ├─ AdminCompanyTable.jsx
   │  ├─ AdminBidTable.jsx
   │  ├─ AdminAiJobTable.jsx
   │  ├─ AdminNotificationTable.jsx
   │  └─ AdminLogTable.jsx
   ├─ api/
   │  └─ adminApi.js
   └─ admin.css
```

---

## 7. 공통 컴포넌트 구조

```text
apps/web/components/
│
├─ layout/
│  ├─ PublicHeader.jsx
│  ├─ AppHeader.jsx
│  ├─ Sidebar.jsx
│  ├─ AdminSidebar.jsx
│  ├─ Footer.jsx
│  └─ PageContainer.jsx
│
├─ common/
│  ├─ Button.jsx
│  ├─ Input.jsx
│  ├─ SelectBox.jsx
│  ├─ Textarea.jsx
│  ├─ Checkbox.jsx
│  ├─ Badge.jsx
│  ├─ Card.jsx
│  ├─ Modal.jsx
│  ├─ Table.jsx
│  ├─ Tabs.jsx
│  ├─ Loading.jsx
│  └─ EmptyState.jsx
│
└─ icons/
   ├─ BellIcon.jsx
   ├─ SearchIcon.jsx
   ├─ CalendarIcon.jsx
   └─ FileIcon.jsx
```

---

## 8. 프론트 공통 파일

```text
apps/web/lib/
├─ apiClient.js
├─ auth.js
├─ formatDate.js
├─ formatMoney.js
├─ constants.js
├─ routes.js
└─ validators.js
```

```text
apps/web/data/
├─ dummyBids.js
├─ dummyCompanies.js
├─ dummyAiAnalysis.js
├─ dummyNotifications.js
├─ dummyDashboardStats.js
└─ dummyAdminStats.js
```

```text
apps/web/styles/
├─ variables.css
├─ reset.css
├─ layout.css
├─ common.css
└─ admin.css
```

---

## 9. 페이지 목록과 목적

### 비로그인 페이지

| 경로 | 목적 |
|---|---|
| `/` | 서비스 소개, 핵심 기능, 샘플 공고, 요금제 미리보기 |
| `/login` | 로그인 |
| `/signup` | 회원가입 |
| `/onboarding` | 가입 후 기업정보와 관심조건 입력 |

### 기업회원 페이지

| 경로 | 목적 |
|---|---|
| `/dashboard` | 오늘의 추천 공고, 마감 임박, AI 분석 완료 요약 |
| `/bids/recommended` | 기업 조건 기반 추천 공고 목록 |
| `/bids/search` | 통합 공고 검색 |
| `/bids/favorites` | 관심 공고 목록 |
| `/bids/[id]` | 공고 상세 |
| `/bids/[id]/analysis` | AI 분석 리포트 |
| `/calendar` | 입찰 일정 |
| `/notifications` | 알림 이력 |
| `/settings/company` | 기업정보 설정 |
| `/settings/matching` | 매칭 조건 설정 |
| `/billing` | 요금제/결제, 실제 결제는 준비중 처리 |

### 관리자 페이지

| 경로 | 목적 |
|---|---|
| `/admin` | 관리자 대시보드 |
| `/admin/companies` | 기업 회원 관리 |
| `/admin/bids` | 수집 공고 관리 |
| `/admin/ai-jobs` | AI 분석 작업 관리 |
| `/admin/notifications` | 알림 발송 관리 |
| `/admin/logs` | 시스템 로그 |

---

## 10. billing 페이지 정책

`/billing` 페이지는 반드시 만든다.

화면 구성:
- 현재 요금제
- 이번 달 사용량
- Free / Basic / Pro / Enterprise 요금제 카드
- 업그레이드 버튼
- 문의하기 버튼

동작:
- 업그레이드 버튼 클릭 시 실제 결제 연동 금지
- 모달 표시: “결제 기능은 준비중입니다.”
- 문의하기 버튼도 우선 준비중 또는 관리자 문의 안내 표시

---

## 11. Backend 상세 구조

```text
apps/server/
│
├─ config/
│  ├─ settings.py
│  ├─ urls.py
│  ├─ asgi.py
│  └─ wsgi.py
│
├─ accounts/
│  ├─ models.py
│  ├─ serializers.py
│  ├─ views.py
│  ├─ urls.py
│  ├─ permissions.py
│  ├─ admin.py
│  └─ tests.py
│
├─ companies/
│  ├─ models.py
│  ├─ serializers.py
│  ├─ views.py
│  ├─ urls.py
│  ├─ services.py
│  ├─ admin.py
│  └─ tests.py
│
├─ bids/
│  ├─ models.py
│  ├─ serializers.py
│  ├─ views.py
│  ├─ urls.py
│  ├─ services.py
│  ├─ g2b_client.py
│  ├─ parsers.py
│  ├─ admin.py
│  ├─ tests.py
│  └─ management/
│     └─ commands/
│        ├─ fetch_bids.py
│        ├─ fetch_bid_detail.py
│        └─ download_bid_files.py
│
├─ matches/
│  ├─ models.py
│  ├─ serializers.py
│  ├─ views.py
│  ├─ urls.py
│  ├─ services.py
│  ├─ scoring.py
│  ├─ admin.py
│  └─ tests.py
│
├─ ai_analysis/
│  ├─ models.py
│  ├─ serializers.py
│  ├─ views.py
│  ├─ urls.py
│  ├─ services.py
│  ├─ prompts.py
│  ├─ openai_client.py
│  ├─ document_reader.py
│  ├─ admin.py
│  └─ tests.py
│
├─ notifications/
│  ├─ models.py
│  ├─ serializers.py
│  ├─ views.py
│  ├─ urls.py
│  ├─ services.py
│  ├─ email_service.py
│  ├─ sms_service.py
│  ├─ admin.py
│  └─ tests.py
│
├─ billing/
│  ├─ models.py
│  ├─ serializers.py
│  ├─ views.py
│  ├─ urls.py
│  ├─ services.py
│  ├─ admin.py
│  └─ tests.py
│
├─ collection_logs/
│  ├─ models.py
│  ├─ serializers.py
│  ├─ views.py
│  ├─ urls.py
│  ├─ admin.py
│  └─ tests.py
│
├─ common/
│  ├─ utils.py
│  ├─ constants.py
│  ├─ exceptions.py
│  ├─ permissions.py
│  └─ pagination.py
│
├─ manage.py
├─ requirements.txt
└─ .env
```

---

## 12. 백엔드 앱 역할

| 앱 | 역할 |
|---|---|
| `accounts` | 회원가입, 로그인, 권한 |
| `companies` | 기업정보, 면허, 인증, 실적 |
| `bids` | 나라장터 공고 수집/저장/조회 |
| `matches` | 기업 조건과 공고 매칭 |
| `ai_analysis` | OpenAI API 분석, 공고문/RFP 요약 |
| `notifications` | 이메일, SMS, 알림톡 발송 |
| `billing` | 요금제, 사용량, 결제 준비 |
| `collection_logs` | 수집/분석/알림 로그 |
| `common` | 공통 함수, 상수, 권한, 페이지네이션 |

---

## 13. 초기 더미 데이터 예시

입찰공고 더미 데이터에는 다음 항목이 있어야 한다.

```js
{
  id: 1,
  title: "2026년 AI 기반 교육 플랫폼 유지보수 용역",
  agency: "서울특별시교육청",
  bidType: "용역",
  baseAmount: 85000000,
  closeDate: "2026-07-18 17:00",
  regionLimit: "없음",
  licenseLimit: "소프트웨어사업자",
  matchScore: 87,
  aiStatus: "분석완료",
  aiDecision: "확인 필요",
  riskSummary: "최근 3년 유사 실적 확인 필요"
}
```

AI 분석 더미 데이터에는 다음 항목이 있어야 한다.

```js
{
  summary: "온라인 교육 플랫폼의 유지보수와 운영을 수행하는 용역입니다.",
  fitLevel: "확인 필요",
  fitScore: 78,
  goodPoints: [
    "관심 키워드와 유사합니다.",
    "희망 금액 범위에 포함됩니다."
  ],
  checkPoints: [
    "소프트웨어사업자 등록 여부 확인 필요",
    "최근 3년 유사 실적 확인 필요"
  ],
  risks: [
    "제안서 제출 마감까지 기간이 짧습니다."
  ],
  requiredDocuments: [
    "입찰참가신청서",
    "사업자등록증",
    "제안서",
    "가격입찰서",
    "실적증명서"
  ]
}
```

---

## 14. UI 방향

전체 느낌:
- 기업 업무툴
- 깔끔한 B2B SaaS
- 너무 화려하지 않게
- 카드 + 테이블 중심
- 상태 배지 적극 사용

색상 방향:
- 메인: 네이비 / 딥블루
- 보조: 스카이블루
- 긍정: 그린
- 확인필요: 오렌지
- 위험: 레드
- 배경: 연한 회색

화면별 구조:
- 추천 공고: 카드형 중심
- 통합 검색: 테이블형 중심
- 공고 상세: 상단 핵심 카드 + 탭 구조
- AI 분석: 요약 카드 + 체크리스트
- 관리자: 테이블 + 통계 카드

---

## 15. AI 분석 면책 문구

AI 분석 페이지와 공고 상세 페이지에는 다음 문구를 반드시 표시한다.

```text
본 AI 분석은 공고문과 입력된 기업정보를 기반으로 한 참고용 1차 검토입니다.
최종 입찰 가능 여부와 제출서류는 반드시 원문 공고문 및 담당 기관을 통해 확인하세요.
```

---

## 16. 벤치마킹 체크리스트

사용자가 별도로 가입해서 확인할 사이트:
1. 지투비플러스
2. MyBidWise
3. AI G2B
4. 디마툴즈
5. 비드큐
6. SMPP

벤치마킹할 항목:
- 회원가입 후 첫 화면
- 마이페이지 구조
- 맞춤 공고 설정 항목
- 공고 목록 UI
- 공고 상세 UI
- AI 추천/분석 표시 방식
- 관심공고/내서류가방 구조
- 알림 방식
- 요금제 구조
- 유료 기능 잠금 처리
- 면책문구

---

## 17. 단계별 개발 로드맵

### Step 0. 프로젝트 기본 세팅
- `bid` 루트 생성
- `apps/web` Next.js 세팅
- `apps/server` Django 세팅
- `docs` 생성
- `AGENTS.md` 생성

### Step 1. 프론트 전체 라우팅 뼈대
- Next.js app 라우터 페이지 생성
- 각 page.jsx는 features의 page component만 import
- 공통 레이아웃, Header, Sidebar 생성

### Step 2. 더미 데이터 기반 주요 화면
- 메인
- 로그인
- 회원가입
- 온보딩
- 대시보드
- 추천공고
- 공고상세
- 관심공고
- 설정
- 결제 준비중
- 관리자 기본

### Step 3. Django 모델/API 뼈대
- accounts
- companies
- bids
- matches
- ai_analysis
- notifications
- billing
- collection_logs
- common

### Step 4. 프론트와 백엔드 연결
- 더미 데이터 대신 Django API 조회
- 로그인/기업정보/공고 목록/공고 상세 연결

### Step 5. 나라장터 API 연동
- 나라장터 Open API 키 발급 후 테스트
- 용역 공고부터 수집
- 공고번호 기준 중복 저장 방지
- 수집 로그 저장

### Step 6. AI 분석 연동
- 공고문/제안요청서 텍스트 추출
- OpenAI API로 요약/분석
- JSON 결과 저장
- AI 분석 리포트 표시

### Step 7. 알림/결제 고도화
- 이메일 알림
- SMS/알림톡
- 실제 결제 API
- 요금제별 사용량 제한

---

## 18. 절대 하지 말 것

- 한 파일에 모든 페이지 코드를 몰아넣지 말 것
- `app/page.jsx`에 긴 UI 코드를 직접 작성하지 말 것
- 실제 결제 기능을 바로 구현하지 말 것
- 실제 OpenAI API 키를 코드에 직접 넣지 말 것
- 나라장터 API 키를 코드에 직접 넣지 말 것
- 비밀번호를 평문으로 저장하지 말 것
- AI 분석 결과를 100% 확정처럼 표현하지 말 것
- 사용자가 확인하기 전 다음 단계로 넘어가지 말 것

---

## 19. Codex 응답 형식 요구

작업 후 Codex는 반드시 아래 형식으로 답변한다.

```text
작업 완료 요약:
- 무엇을 만들었는지
- 왜 이렇게 만들었는지
- 그리고 정확히 어떤 코드가 어떤 기능들을 하는지 (현재 나는 학습중인 학생이기에, flow를 이해 해야함.)

변경 파일:
- 파일 경로 1
- 파일 경로 2

실행 방법:
- 어떤 명령어를 실행해야 하는지

확인 방법:
- 브라우저에서 어떤 페이지를 확인해야 하는지

다음 추천 작업:
- 다음에 진행할 단계
```

