// 날짜 문자열을 화면에서 보기 좋은 형태로 바꿉니다.
// 날짜 값은 아직 더미 문자열이므로, 변환하기 어려우면 원래 값을 그대로 보여줍니다.
export function formatDate(dateText) {
  if (!dateText) {
    return "-";
  }

  const normalizedDateText = dateText.replace(" ", "T");
  const date = new Date(normalizedDateText);

  if (Number.isNaN(date.getTime())) {
    return dateText;
  }

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  if (dateText.includes(":")) {
    options.hour = "2-digit";
    options.minute = "2-digit";
  }

  return new Intl.DateTimeFormat("ko-KR", options).format(date);
}