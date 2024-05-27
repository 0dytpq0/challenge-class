// Date.now()로 비교 가능한 시간을 기본 값으로 준 후 해당 값을 new Date의 파라미터로 주면
// 그 시간, 날짜를 얻을 수가 있음
export function formatDateTime(dateTime, longOrShort) {
  dateTime = dateTime ? new Date(dateTime) : new Date();
  const isAfterNoon = dateTime.getHours() >= 12;
  const 오전or오후 = isAfterNoon ? "오후" : "오전";
  const fullYear = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1;
  const date = dateTime.getDate();
  const hours = dateTime.getHours() - (isAfterNoon ? 12 : 0);
  const minutes = dateTime.getMinutes().toString().padStart(2, "0");

  if (longOrShort === "short") {
    return `${오전or오후} ${hours}:${minutes}`;
  } else if (longOrShort === "long") {
    return `${fullYear}년 ${month}월 ${date}일, ${오전or오후} ${hours}:${minutes}`;
  } else {
    return alert("wrong args");
  }
}
