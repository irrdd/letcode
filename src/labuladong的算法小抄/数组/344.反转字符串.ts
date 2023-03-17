export function reverseString(s: string[]): void {
    let left = 0
    let right = s.length-1
    while (right > left) {
        if (s[left] !== s[right]) {
            const temp = s[left]
            s[left] = s[right]
            s[right] = temp
        };
        left++
        right--
    }
};