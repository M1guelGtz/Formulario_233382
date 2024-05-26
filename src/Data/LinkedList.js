import { Node } from "./Node.js";

export class LinkedList {
    #count
    #head

    constructor(){
        this.#head = null
        this.#count = 0
    }

    getHead(){
        return this.#head
    }
    isEmpty(){
        return this.#head === null
    }
    push(item){
        const node = new Node(item, this.#head, null)
        if(this.#head){
            node.next = this.#head
            this.#head.prev = node 
            this.#head = node
        }else{
            this.#head = node
        }
        this.#count++
    }
    /*push(item) {
        const node = new Node(item)
        const tail = node
        let current
        if (this.#head == null) {
            this.#head = node
        } else{
            current = this.#head
            //Node.next = current
            while (current.next != null)
                current = current.next
            current.next = node
            
        }
        console.log(this.#head)
        this.#head = tail
        this.#count++

    }*/
    size(){
        return this.#count
    }
    getElementAt(index) {
        if (index>=0 && index<this.#count) {
            let node = this.#head
            for (let i=0;i<index && node != null; i++)
                node = node.next
            return node
        }
        return undefined
    }


}
