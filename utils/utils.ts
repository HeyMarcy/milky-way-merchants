export function readableDate(date: string) {
  return new Date(date).toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "medium",
  });
}

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
