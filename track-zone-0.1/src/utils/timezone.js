export const TIMEZONE_OFFSET = {
  PST: -7 * 60,
  EST: -4 * 60,
  EDT: -4 * 60,
  BST: 1 * 60,
  MST: -6 * 60,
};

export const getOffsets = (start = -12, end = 12) => {
  let offsets = [];
  for (let i = start; i <= end; i += 0.5) {
    offsets.push(i);
  }

  return offsets;
};

export const getTimezone = () => {
  return ["UTC", "GMT", ...Object.keys(TIMEZONE_OFFSET)];
};
