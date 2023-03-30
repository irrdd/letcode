export function reverseWords(s: string): string {
    const str = s.trim()
    const arr = str.split(' ')
    const temp = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element !== ' ' && element !== '') temp.push(element)
    }
    return temp.reverse().join(' ')
};

// 使用正则表达式
export function reverseWords2(s: string): string {
    // 先去除前导和尾随空格
  s = s.trim();

  // 将字符串按空格分割成单词数组
  const words = s.split(/\s+/);

  // 将单词数组翻转，并用空格连接成字符串
  return words.reverse().join(" ");
};
