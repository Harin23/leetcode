/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const head = new ListNode(0);
    let current = head, node1 = l1, node2 = l2, carry = 0;
    while (node1 || node2 || carry) {
        const v = (node1?.val ?? 0) + (node2?.val ?? 0) + carry;
        carry = 0;
        if(v > 9) carry++;
        current.next = new ListNode(v % 10);
        node1 = node1?.next;
        node2 = node2?.next;
        current = current.next;
    };

    return head.next;
};
