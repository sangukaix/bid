# bid

AI 기반 나라장터 입찰공고 매칭 서비스입니다.

## 현재 단계

현재는 Step 0입니다. 폴더 구조와 Next.js, Django 기본 실행 뼈대만 준비합니다.

## 실행 방법

### 프론트엔드

```powershell
cd D:\mbca_home\bid\apps\web
npm.cmd install
npm.cmd run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

### 백엔드

```powershell
cd D:\mbca_home\bid\apps\server
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

브라우저에서 `http://127.0.0.1:8000/admin/`을 엽니다.

## 주의

- 아직 나라장터 API를 연결하지 않았습니다.
- 아직 OpenAI API를 연결하지 않았습니다.
- 아직 결제, 이메일, SMS 기능을 연결하지 않았습니다.
- 다음 단계에서 라우팅과 화면 뼈대를 차례로 추가합니다.
