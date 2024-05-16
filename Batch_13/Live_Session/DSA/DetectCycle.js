//https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/1
class Solution {
    //Function to check if the linked list has a loop.
    detectLoop(head)
    {
        let slow = head;
        let fast = head;
        
        while(fast!=null && fast.next!=null){
            slow = slow.next;
            fast = fast.next.next;
            
            if(slow==fast)
                return true; //cycle detected
        }
        
        return false; // no cycle
    }
}