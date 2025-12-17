let isRunning = false;

self.onmessage = function (event) {
  if (isRunning) return;

  isRunning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  if (!activeTask || typeof secondsRemaining !== "number") {
    self.postMessage(NaN);
    return;
  }

  const startTimestamp = new Date(activeTask.startDate).valueOf();
  if (!Number.isFinite(startTimestamp)) {
    self.postMessage(NaN);
    return;
  }

  const endDate = startTimestamp + secondsRemaining * 1000;

  const now = Date.now();
  let contDownSeconds = Math.ceil((endDate - now) / 1000);

  function tick() {
    self.postMessage(contDownSeconds);

    const now = Date.now();
    contDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000);
  }
  tick();
};
