# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        head = ListNode(0)
        # current = head, n1 = l1, n2 = l2, carry=0;
        current, n1, n2, carry = head, l1, l2, 0
        while n1 or n2 or carry:
            v = (n1.val if n1 else 0) + (n2.val if n2 else 0) + carry
            carry = v // 10
            current.next = ListNode(v % 10)
            n1=(n1.next if n1 else None)
            n2=(n2.next if n2 else None)
            current=current.next

        return head.next
