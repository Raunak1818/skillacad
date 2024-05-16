class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
    }

    insertAtHead(value){
        //create a new Node
        let newNode = new Node(value);
        //if List is empty , newNode will become head
        if(this.head==null){
            this.head = newNode;
            return;
        }

        //make the links
        newNode.next = this.head;
        this.head.prev = newNode;
        //change the head 
        this.head = newNode;

    }

    insertAtTail(value){
        //create a new node
        let newNode = new Node(value);
        if(this.head==null){
            this.head = newNode;
            return;
        }
        //traverse to find last node
        let temp = this.head;
        while(temp.next!=null){
            temp = temp.next;
        }
        //now temp is the last node

        temp.next = newNode;
        newNode.prev = temp;
    }

    deleteTail(){
        if(this.head==null){
            console.log("List is empty , cannot delete node.");
            return;
        }
        if(this.head.next==null){
            this.head = null;
            return;
        }
        
        //reach secondLast node
        let temp = this.head;
        while(temp.next.next!=null){
            temp = temp.next;
        }
        //now temp is at secondLast
        temp.next = null;
    }

    deleteHead(){
        if(this.head==null){
            console.log("List is empty , cannot delete node.");
            return;
        }
        if(this.head.next==null){
            this.head = null;
            return;
        }
        
        //move head
        this.head = this.head.next;
        this.head.prev =  null;
    }

    print(){
        let temp = this.head;
        while(temp!=null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let ll = new DoublyLinkedList();
ll.insertAtTail(10); //10
ll.insertAtTail(20); //10 20
ll.insertAtTail(30); //10 20 30
ll.insertAtHead(5); //5 10 20 30
ll.insertAtHead(1); //1 5 10 20 30
ll.deleteTail(); //1 5 10 20 - (30 is deleted)
ll.deleteHead(); //5 10 20 - (1 is deleted)
ll.deleteTail(); //5 10  - (20 is deleted)
ll.deleteTail(); //5  - (10 is deleted)
ll.deleteTail(); //  - (5 is deleted)
ll.deleteTail(); //  - ( cannot delete )
ll.print();




