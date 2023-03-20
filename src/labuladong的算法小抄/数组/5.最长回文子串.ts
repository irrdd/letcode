
export function longestPalindrome(s: string): string {
    if (s.length === 1) return s
    const findrome = (left, right) => {
        while (left >= 0 && right < s.length) {
            if (s[left] === s[right]) {
                left--
                right++
            }else{
                break;
            }
        }
        return s.substring(left+1, right)
    }
    let str = '';
    for (let index = 0; index < s.length; index++) {
        const one = findrome(index, index)
        const two = findrome(index, index + 1)
        const temp = one.length > two.length ? one : two;
        str = str.length > temp.length ? str : temp;
    }
    return str
};