const convertDuration = val => {
  let timeInMinutes = Math.floor(val / 60000);
  let timeInSeconds = ((val % 60000) / 1000).toFixed(0);
  return (
    timeInMinutes + " : " + (timeInSeconds < 10 ? "0" : "") + timeInSeconds
  );
};

export default convertDuration;
