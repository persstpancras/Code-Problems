function getHeadings(csv) {
  return csv.split(",").map(str => str.trim());
}
