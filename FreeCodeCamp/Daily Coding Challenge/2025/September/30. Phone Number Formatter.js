function formatNumber(number) {
  return `+${number.substring(0, 1)} (${number.substring(1,4)}) ${number.substring(4, 7)}-${number.substring(7)}`;
}
