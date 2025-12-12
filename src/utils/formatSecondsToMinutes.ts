export function formatSecondsToMinutes(secunds: number) {
  const minutes = String(Math.floor(secunds / 60)).padStart(2, "0");
  const seconsMod = String(Math.floor(secunds % 60)).padStart(2, "0");
  return `${minutes}:${seconsMod}`;
}
