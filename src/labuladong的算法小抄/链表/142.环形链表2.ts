import { ListNode } from "@/links/SingleLink";

export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;
  let first = head;
  let low = head;
  while (first && first.next ) {
    low = low.next
    first = first.next.next
    if (low === first) break;
  }
  if (!(first && first.next )) return null
  first = head
  while (first !== low) {
    first = first.next
    low = low.next
  }
  return first
}
