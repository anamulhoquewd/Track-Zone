export const TIMEZONE_OFFSET = {
  PST: -7 * 60,
  EDT: -4 * 60,
  BST: 1 * 60,
  MST: -6 * 60,
};

export const LOCAL_OFFSET = (start = -11.5, end = 12) => {
  let offsets = [];
  for (let i = start; i <= end; i += 0.5) {
    offsets.push(i);
  }
  return offsets;
};
