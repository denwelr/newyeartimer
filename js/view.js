export const dom = {
  days: document.querySelector(".content__info-item-number_days"),
  hours: document.querySelector(".content__info-item-number_hours"),
  minutes: document.querySelector(".content__info-item-number_minutes"),
  seconds: document.querySelector(".content__info-item-number_seconds"),
};

export function updateDOM(days, hours, minutes, seconds) {
  dom.days.innerText = days;
  dom.hours.innerText = hours;
  dom.minutes.innerText = minutes;
  dom.seconds.innerText = seconds;
}
