const time1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1st");
    }, 2000);
  });
};

const time2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2nd");
    }, 1000);
  });
};

const call = async () => {
  Promise.all([time1(), time2()]);
};

call();
