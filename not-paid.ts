(() => {
  /* change these variables as you wish */
  const due_date: Date = new Date("2017-02-27");
  const days_deadline: number = 60;
  /* stop changing here */

  const current_date: Date = new Date();
  const utc1: number = Date.UTC(
    due_date.getFullYear(),
    due_date.getMonth(),
    due_date.getDate()
  );
  const utc2: number = Date.UTC(
    current_date.getFullYear(),
    current_date.getMonth(),
    current_date.getDate()
  );
  const days: number = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

  if (days > 0) {
    const days_late: number = days_deadline - days;
    let opacity: number = (days_late * 100) / days_deadline / 100;
    opacity = opacity < 0 ? 0 : opacity;
    opacity = opacity > 1 ? 1 : opacity;
    if (opacity >= 0 && opacity <= 1) {
      const bodyElement = document.getElementsByTagName(
        "BODY"
      )[0] as HTMLElement;
      bodyElement.style.opacity = opacity.toString();
    }
  }
})();
