export function lengthOfLongestSubstring(s: string): number {
  let n = 0;

  let i = 0;

  while (i < s.length) {
    let temp = i;
    const set = new Set();
    while (!set.has(s[temp]) && temp < s.length) {
      set.add(s[temp]);
      temp++;
    }
    n = Math.max(n, temp - i);
    i++;
  }

  return n;
}
export function lengthOfLongestSubstring2(s: string): number {
  let n = 0;
  let i = 0;
  let j = 0;
  const set = new Set();
  while (j < s.length) {
    while (!set.has(s[j]) && j < s.length) {
      set.add(s[j]);
      j++;
    }
    n = Math.max(n, j - i);
    while (i < j) {
      if (set.has(s[i])) {
        set.delete(s[i]);
        i++;
        break;
      }
      i++;
    }
  }

  return n;
}
