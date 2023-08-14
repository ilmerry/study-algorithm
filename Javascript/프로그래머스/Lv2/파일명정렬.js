function solution(files) {
  return files.sort((a, b) => {
    const headA = a.split(/[0-9]/)[0].toLowerCase();
    const headB = b.split(/[0-9]/)[0].toLowerCase();
    const numberA = Number(a.split(/[^0-9]/).filter((v) => v.length > 0)[0]);
    const numberB = Number(b.split(/[^0-9]/).filter((v) => v.length > 0)[0]);
    if (headA < headB) return -1;
    if (headA === headB && numberA < numberB) return -1;
    return 1;
  });
}
