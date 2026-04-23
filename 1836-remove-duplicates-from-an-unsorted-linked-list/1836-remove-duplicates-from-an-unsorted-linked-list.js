/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicatesUnsorted = function(head) {
    let clone = head;
    let freqMap = {};

    while (clone !== null) {
        if (!freqMap[clone.val]) {
            freqMap[clone.val] = 1;
        } else {
            freqMap[clone.val]++
        }
        clone = clone.next;
    }

    let prev = new ListNode(-1, head);

    clone = prev;

    while (clone !== null) {
        while (clone.next && freqMap[clone.next.val] > 1) {
            clone.next = clone.next.next;
        }
        clone = clone.next;
    }

    return prev.next;    
};