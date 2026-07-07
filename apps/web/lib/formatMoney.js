// 숫자 금액을 화면에서 읽기 쉬운 원화 표시로 바꿉니다.
// 예: 85000000 -> 85,000,000원
export function formatMoney(amount) {
  if (amount === null || amount === undefined) {
    return "-";
  }

  return `${Number(amount).toLocaleString("ko-KR")}원`;
}