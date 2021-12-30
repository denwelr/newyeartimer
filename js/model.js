export default class {
  constructor() {}

  getTime() {
    const date = new Date();

    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
    date.setFullYear(date.getFullYear() + 1);

    // secs
    const time = (+date - Date.now()) / 1000;

    this.days = (time / (3600 * 24)).toFixed(0);
    this.hours = ((time % (3600 * 24)) / 3600).toFixed(0);
    this.minutes = ((time % 3600) / 60).toFixed(0);
    this.seconds = (time % 60).toFixed(0);
  }
}
