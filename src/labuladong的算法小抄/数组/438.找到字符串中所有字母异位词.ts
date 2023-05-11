// 使用Map
export function findAnagrams(s: string, p: string): number[] {
    if (!s.length || !p.length || s.length < p.length) return []
    const mapP = new Map()
    const mapS = new Map()
    const res: number[] = []
    for (let index = 0; index < p.length; index++) {
        const element = p[index];
        if (!mapP.has(element)) {
            mapP.set(element, 1)
        } else {
            mapP.set(element, mapP.get(element) + 1)
        }
    }
    let left = 0;
    let right = 0;
    while (right < s.length) {
        if (right - left < p.length) {
            if (!mapS.has(s[right])) {
                mapS.set(s[right], 1)
            } else {
                mapS.set(s[right], mapS.get(s[right]) + 1)
            }
            right++;
        }
        if (right - left === p.length) {
            let temp = true
            for (const [str, num] of mapP.entries()) {
                if (mapS.get(str) !== num) {
                    temp = false
                    break;
                }
            }
            temp && res.push(left)
            if (mapS.get(s[left]) - 1 === 0) {
                mapS.delete(s[left])
            } else {
                mapS.set(s[left], mapS.get(s[left]) - 1)
            }
            left++
        }

    }
    return res

}
// 使用数组

export function findAnagrams1(s: string, p: string): number[] {
    if (!s.length || !p.length || s.length < p.length) return []
    const arrP = new Array(26).fill(0)
    const arrS = new Array(26).fill(0)
    const res: number[] = []
    for (let index = 0; index < p.length; index++) {
        arrP[p.charCodeAt(index) - 97]++

    }
    let left = 0
    let right = 0
    while (right < s.length) {
        if (right - left < p.length) {
            arrS[s.charCodeAt(right)-97]++
            right++
        }
        if (right - left === p.length) {
            let temp = true;
            for (let index = 0; index < arrP.length; index++) {
                if (arrP[index] !== arrS[index]) {
                    temp = false
                    break;
                }
            }
            temp && res.push(left)
            arrS[s.charCodeAt(left)-97]--
            left++
        }
    }

    return res
}
