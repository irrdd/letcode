import { ListNode } from "@/基本数据结构/SingleLink";
export function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false;
  let first = head;
  let low = head;
  while (first && first.next && low  ) {
    first = first.next.next;
    low = low.next;
    if (first === low) return true;
  }
  return false;
}
