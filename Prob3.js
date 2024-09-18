class Node{
	constructor(data){
  	this.data = data;
    this.next = null;
  }
};

class LinkedList{
	constructor(){
  	    this.head = null;
    }
  
  _pvt(){}
  
  append(data){
  	const newNode = new Node(data);
    if(!this.head){
    	this.head = newNode;
    } else{
    	let current = this.head;
      while(current.next !== null){
				current = current.next;      
      }
      current.next = newNode;
    }
  }

  delete(data){ 
		if(!this.head){
    	console.log("List is empty")
    	return;
    } else{
    	let current = this.head;
      let prevNode = null;
    	while(current.data !== data){
      	prevNode = current;
      	current = current.next; 
      }
      console.log(prevNode, current);
      prevNode.next = current.next;
    }
  }
  
  prepend(data){
  	let newNode = new Node(data);
    newNode.next = this.head;
		this.head = newNode;
  }
  
  search(data){
		let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    console.log("Item not found in the list or the list is empty!")        
    return null;
  }

	print(){
  	let current = this.head;
    if(current !== null){
    let elems = [];
    	while(current.next !== null){
      	/* console.log("Node Data: ", current.data, "  -->  ") */
        elems.push(current.data)
        current = current.next;
      }
      elems.push(current.data)
      console.log([...elems])
    } else{
      console.log("List is empty!")        
      return;
    }
  }
  
  getHeadPointer(){
  	let current = this.head;
    return current;
  }

};



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
function reverseList (head) {
    if(!head){
        return head;
    } else{
        let prev = null, curr = null, next = null;
        curr = head;
        while(curr.next !== null){
            next = curr.next;
            curr.next = prev;

            prev = curr;
            curr = next;
        }
        curr.next = prev;
        return curr;
    }
};


const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(5);
linkedList.print(); 
linkedList.delete(20);
linkedList.print(); 
console.log(linkedList.search(10));
console.log(linkedList.search(50));
console.log("**************************")
linkedList.print();
let headPointer = linkedList.getHeadPointer();
let reversedHead = reverseList(headPointer);
console.log(reversedHead);