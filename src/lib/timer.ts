import * as moment from 'moment';

export default class Timer {
  private time;
  private timer;
  private initialSeconds;
  private listener: (remains: number) => void;
  private timeoutListener: () => void;

  constructor(seconds: number, listener, timeoutListener?) {
    this.initialSeconds = seconds;
    this.listener = listener;
    this.timeoutListener = timeoutListener;
    this.reset();
  }

  private start() {
    this.timer = setInterval((_) => {
      this.time.add(-1000);
      this.listener(this.time);
      if (this.time.valueOf() <= 0) {
        if (this.timeoutListener) {
          this.timeoutListener();
        }
        this.end();
      }
    }, 1000);
  }

  private end() {
    clearInterval(this.timer);
    this.reset();
  }

  private reset() {
    this.time = moment(this.initialSeconds);
  }
}
