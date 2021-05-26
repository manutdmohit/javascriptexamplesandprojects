const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  //   console.log(counter);
  counter.innerHTML = 0;

  const updateCounter = () => {
    const targetCount = +counter.getAttribute("data-target");
    // console.log(targetCount);
    // console.log(typeof targetCount);
    const startingCount = +counter.innerHTML;
    // console.log(startingCount);
    // console.log(typeof startingCount);

    const incr = targetCount / 100;

    if (startingCount < targetCount) {
      counter.innerHTML = Math.round(startingCount + incr);
      setTimeout(updateCounter, 10);
    } else {
      counter.innerHTML = targetCount;
    }
  };

  updateCounter();
});
