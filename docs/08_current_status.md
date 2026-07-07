# 08. 현재 작업 상태

기준일: 2026-07-08
프로젝트명: `bid`
서비스 성격: AI 기반 나라장터 입찰공고 매칭 서비스

이 문서는 AGENTS.md의 단계별 개발 원칙에 맞춰, 현재까지 완료된 작업과 다음에 진행할 작업을 정리한 상태 문서입니다.
아직 실제 API 연동 단계가 아니며, 현재는 프론트 더미 화면을 완성해 가는 단계입니다.

---

## 1. 현재 완료된 단계

### Step 0. 프로젝트 기본 구조
- 루트 기준 기본 폴더 구조를 생성했습니다.
- `apps/web`에 Next.js 프로젝트 기본 구조를 만들었습니다.
- `apps/server`에 Django 프로젝트 기본 구조를 만들었습니다.
- `docs`, `scripts`, `infra` 폴더를 만들었습니다.
- 루트에 `README.md`, `.gitignore`, `.env.example`을 준비했습니다.

### Step 1. Next.js 라우팅 뼈대
- Next.js App Router 기준으로 주요 URL 페이지를 만들었습니다.
- `app` 폴더는 URL 주소만 담당하도록 구성했습니다.
- 실제 화면 코드는 `features` 폴더 아래 기능별 페이지 컴포넌트로 분리했습니다.

예시 흐름:

```text
app/dashboard/page.jsx
→ features/dashboard/pages/DashboardPage.jsx
```

### Step 2. 공통 컴포넌트/CSS
- 공통 레이아웃 컴포넌트를 만들었습니다.
  - `PublicHeader`
  - `AppHeader`
  - `Sidebar`
  - `AdminSidebar`
  - `Footer`
  - `PageContainer`
- 공통 UI 컴포넌트를 만들었습니다.
  - `Button`
  - `Input`
  - `SelectBox`
  - `Textarea`
  - `Checkbox`
  - `Badge`
  - `Card`
  - `Modal`
  - `Table`
  - `Tabs`
  - `Loading`
  - `EmptyState`
- 공통 CSS 파일을 역할별로 분리했습니다.
  - `variables.css`
  - `reset.css`
  - `layout.css`
  - `common.css`

### Step 2.5. 공통 레이아웃 적용
- 비로그인 페이지에는 `PublicHeader`, `PageContainer`, `Footer` 구조를 적용했습니다.
- 기업회원 페이지에는 `AppHeader`, `Sidebar`, `PageContainer` 구조를 적용했습니다.
- 관리자 페이지에는 `AppHeader`, `AdminSidebar`, `PageContainer` 구조를 적용했습니다.
- 반복되는 레이아웃을 줄이기 위해 아래 컴포넌트를 추가했습니다.
  - `PublicLayout`
  - `AppLayout`
  - `AdminLayout`

### Step 3. 더미 데이터
- 화면 개발에 사용할 더미 데이터 파일을 만들었습니다.
- 금액은 숫자 형태로 저장해서 화면에서 포맷 함수로 표시할 수 있게 했습니다.
- 날짜는 문자열로 저장했습니다.
- 실제 Django API 응답 구조로 바꾸기 쉽도록 단순한 배열/객체 구조로 작성했습니다.

생성된 주요 더미 데이터:
- `dummyBids.js`
- `dummyCompanies.js`
- `dummyAiAnalysis.js`
- `dummyNotifications.js`
- `dummyDashboardStats.js`
- `dummyAdminStats.js`

### Step 4. 주요 사용자 화면 구현
- 더미 데이터를 import해서 주요 사용자 화면에 표시했습니다.
- 아직 Django API와 연결하지 않았습니다.
- 실제 저장, 검색, 관심저장, 메모 저장은 하지 않습니다.

구현된 주요 화면:
- `/dashboard`
- `/bids/recommended`
- `/bids/favorites`
- `/bids/[id]`
- `/bids/[id]/analysis`

### 통합 검색/알림/결제 화면 더미 구현
- `/bids/search` 화면을 더미 검색 폼과 결과 테이블로 구성했습니다.
- `/notifications` 화면을 더미 알림 요약 카드와 알림 목록 테이블로 구성했습니다.
- `/billing` 화면을 더미 요금제/사용량 카드로 구성했습니다.
- 결제 버튼은 실제 결제 없이 준비중 모달만 보여줍니다.

### 로그인/회원가입/온보딩/기업정보 설정/매칭조건 설정 더미 폼 구현
- `/login`에 로그인 입력 폼을 만들었습니다.
- `/signup`에 회원가입 입력 폼을 만들었습니다.
- `/onboarding`에 4단계 온보딩 입력 폼을 만들었습니다.
- `/settings/company`에 기업정보 설정 입력 폼을 만들었습니다.
- `/settings/matching`에 매칭 조건 설정 입력 폼을 만들었습니다.
- 버튼 클릭 시 실제 저장하지 않고, 추후 API 연결 예정이라는 안내 메시지만 보여줍니다.

---

## 2. 현재 구현된 주요 페이지

아래 페이지들은 현재 화면 구조가 준비되어 있거나 더미 데이터/더미 입력 폼을 기준으로 확인할 수 있습니다.

- `/`
- `/login`
- `/signup`
- `/onboarding`
- `/dashboard`
- `/bids/recommended`
- `/bids/search`
- `/bids/favorites`
- `/bids/[id]`
- `/bids/[id]/analysis`
- `/notifications`
- `/billing`
- `/settings/company`
- `/settings/matching`
- `/admin`

---

## 3. 아직 임시 상태이거나 다음에 구현할 페이지

아래 페이지들은 아직 상세 화면이 부족하거나, 다음 단계에서 더미 데이터 기반 화면으로 채워야 합니다.

- `/calendar`
- `/admin`
- `/admin/companies`
- `/admin/bids`
- `/admin/ai-jobs`
- `/admin/notifications`
- `/admin/logs`

---

## 4. 아직 더미인 기능

현재는 화면 구조와 더미 데이터 표시 단계입니다. 아래 기능들은 아직 실제로 동작하지 않습니다.

- Django API 연결 없음
- 나라장터 API 연결 없음
- OpenAI API 연결 없음
- 실제 로그인/회원가입 없음
- 실제 저장 기능 없음
- 실제 결제 없음
- 이메일/SMS/카카오 알림톡 없음
- 관심저장/검색/필터/메모 저장은 실제 저장 안 됨

---

## 5. 다음 작업

다음 작업도 아직 프론트 더미 화면 단계입니다.
Django API, 나라장터 API, OpenAI API, 결제, 알림 발송은 아직 연결하지 않습니다.

추천 진행 순서:

1. `/calendar` 화면 더미 데이터 기반 구현
2. 관리자 페이지들 더미 데이터 기반 구현
3. 프론트 화면 전체 점검 및 UI 정리
4. 그 다음 Django 모델/API 설계로 이동

---

## 6. 실행 방법

프론트엔드 개발 서버 실행:

```powershell
cd apps/web
npm install
npm run dev
```

프로젝트 루트가 `D:\mbca_home\bid`인 경우:

```powershell
cd D:\mbca_home\bid\apps\web
npm install
npm run dev
```

---

## 7. 확인 URL

개발 서버 실행 후 브라우저에서 아래 URL을 확인합니다.

- http://localhost:3000/
- http://localhost:3000/login
- http://localhost:3000/signup
- http://localhost:3000/onboarding
- http://localhost:3000/dashboard
- http://localhost:3000/bids/recommended
- http://localhost:3000/bids/search
- http://localhost:3000/bids/1
- http://localhost:3000/bids/1/analysis
- http://localhost:3000/bids/favorites
- http://localhost:3000/notifications
- http://localhost:3000/billing
- http://localhost:3000/settings/company
- http://localhost:3000/settings/matching

---

## 8. 현재 개발 원칙 메모

- 한 번에 전체 프로젝트를 완성하지 않습니다.
- 사용자가 요청한 단계만 진행합니다.
- `app` 폴더는 URL 주소만 담당합니다.
- 실제 화면 코드는 `features` 폴더에 둡니다.
- 공통으로 재사용되는 UI는 `components/common`에 둡니다.
- 공통 레이아웃은 `components/layout`에 둡니다.
- 더미 데이터는 `data` 폴더에 둡니다.
- 실제 API 연결은 프론트 화면 확인 이후 단계에서 진행합니다.