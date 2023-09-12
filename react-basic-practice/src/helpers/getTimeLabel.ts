export const renderTimeLeft = (timeLeft: number) => {
  if (timeLeft < 24) {
    return `${timeLeft} Hour`;
  } else {
    const daysLeft = Math.floor(timeLeft / 24);

    return `${daysLeft} Days Left`;
  }
};
