(function() {
  /* edit here */
  const startDate = new Date("2019-01-1");
  const daysExtended = 60;
  /* stop here */

  const currentDate = new Date();

  //convert milliseconds to days
  const daysOverdue = Math.floor(
    (currentDate - startDate) / (1000 * 60 * 60 * 24)
  );

  if (daysOverdue > 0) {
    const daysLate = daysExtended - daysOverdue;
    let currentOpacity = daysLate / daysExtended;
    currentOpacity = Math.max(0, Math.min(1, currentOpacity));
    document.body.style.opacity = currentOpacity;
  }
})();
