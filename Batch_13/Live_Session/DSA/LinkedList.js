class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtHead(value){
        let newNode = new Node(value);
        newNode.next = this.head
        this.head = newNode;
    }

    insertAtTail(value){
        let newNode = new Node(value);

        //check is linked list is empty
        if(this.head==null){
            this.head = newNode;
            return;
        }

        let temp = this.head;
        while(temp.next!=null){
            temp = temp.next;
        }
        //temp has reached the last node
        temp.next = newNode;
    }

    deleteTail(){
        //if single node , head will become null
        if( this.head.next == null || this.head==null){
            this.head = null;
            return;
        }
        
        let temp = this.head;
        //reach the second last node
        while(temp.next.next!=null){ 
            temp = temp.next; 
        }
        //temp is the second last node
        temp.next = null;
    }

    deleteHead(){
        if(this.head==null) {
            console.log("Linked List is empty , cannot delete node.");
            return;
        }
        this.head = this.head.next;
    }

    print(){
        let temp = this.head;
        while(temp!=null){
            console.log(temp.data);
            temp = temp.next;
        }
    }

}

let ll = new LinkedList();

ll.insertAtTail(1); //1
ll.insertAtTail(2); //1 2
ll.insertAtTail(3); //1 2 3
ll.insertAtHead(0); //0 1 2 3
ll.insertAtTail(4); //0 1 2 3 4
ll.insertAtHead(9); //9 0 1 2 3 4
ll.deleteTail(); //9 0 1 2 3
ll.deleteHead(); //0 1 2 3
ll.deleteHead(); //1 2 3
ll.deleteHead(); //2 3
ll.deleteHead(); //3
ll.deleteHead(); //3 got deleted , list is empty
ll.deleteHead(); //
ll.print();


