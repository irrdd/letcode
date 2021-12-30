function replaceSpaces(S: string, length: number): string {
    let s = S.slice(0, length);
    return s.includes(' ') ? encodeURI(s) : s
};