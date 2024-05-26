const markeHourString = (hour) => {
  const hourString = hour.toString().padStart(2, "0");
  return hourString;
};

export const getTime = () => {
  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes().toString().padStart(2, "0");
  if (hour >= 12) {
    const string = `오후 ${
      hour === 12 ? 12 : markeHourString(hour - 12)
    }:${minute}`;
    return string;
  } else {
    const string = `오전 ${
      hour === 24 ? "00" : markeHourString(hour)
    }:${minute}`;
    return string;
  }
};

export const getToday = () => {
  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes().toString().padStart(2, "0");
  //2024년 4월 26일, 오후 4:33
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  if (hour >= 12) {
    const string = `${year}년 ${month}월 ${day}일, 오후 ${
      hour === 12 ? 12 : markeHourString(hour - 12)
    }:${minute}`;
    return string;
  } else {
    const string = `${year}년 ${month}월 ${day}일, 오전 ${
      hour === 24 ? "00" : markeHourString(hour)
    }:${minute}`;
    return string;
  }
};
