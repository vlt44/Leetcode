/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head;
    let slow = head;

    while ( fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    fast = head;
    slow = reverse(slow);

    while (slow) {
        if (fast.val !== slow.val) {
            return false;
        }

        slow = slow.next;
        fast = fast.next;
    }

    return true;
};

function reverse(root) {
    let prev = null;

    while(root) {
        let ref = root.next;
        root.next = prev;
        prev = root;
        root = ref;
    }

    return prev;
}