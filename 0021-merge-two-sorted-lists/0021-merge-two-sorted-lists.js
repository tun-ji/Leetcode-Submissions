/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    var template = new ListNode(null)
    
    var head = template
    
    var l1 = list1
    var l2 = list2
    
    while(l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            template.next = l1
            l1 = l1.next
        } else {
            template.next = l2
            l2 = l2.next
        }
        
        template = template.next
    }
            
    if (l1 == null ) template.next = l2
    if (l2 == null ) template.next = l1
    
    
    return head.next
};