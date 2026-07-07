from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    # 각 기능 앱의 URL은 /api/앱이름/ 형태로 시작하도록 준비합니다.
    # 앱 내부 urls.py는 아직 비어 있으므로, 실제 API 주소는 다음 단계에서 추가합니다.
    path("api/accounts/", include("accounts.urls")),
    path("api/companies/", include("companies.urls")),
    path("api/bids/", include("bids.urls")),
    path("api/matches/", include("matches.urls")),
    path("api/ai-analysis/", include("ai_analysis.urls")),
    path("api/notifications/", include("notifications.urls")),
    path("api/billing/", include("billing.urls")),
    path("api/collection-logs/", include("collection_logs.urls")),
    path("api/common/", include("common.urls")),
]