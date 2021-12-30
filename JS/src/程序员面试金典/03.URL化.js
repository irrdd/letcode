function replaceSpaces(S, length) {
    let s = S.slice(0, length);
    return s.includes(' ') ? encodeURI(s) : s;
}
;
