import DoublyLinkedList from "./src/DoublyLinkedList.js";
import HashTable from "./src/HashTable.js";
import LinkedList from "./src/LinkedList.js";
import LoopQueue from "./src/LoopQueue.js";
import PriorityQueue from "./src/PriorityQueue.js";
import Queue from "./src/Queue.js";
import Set from "./src/Set.js";
import Stack from "./src/Stack.js";
const table = new HashTable();

// table.put('Gandalf',    'gandalf@email.com');
// table.put('John', 'johnsnow®email.com');
table.put('Tyrion', 'tyrion@email.com');
table.put('Aaron',    'aaronOemail.com');
// table.put('Donnie', 'donnie@email.com');
// table.put('Ana', 'ana©email.com');
// table.put('Jonathan', 'jonathan@email.com');   
// table.put('Jamie', 'jamie@email.com');
// table.put('Sue',    'sueOemail.com');
// table.put('Mindy', 'mindy@email.com');
// table.put('Paul', 'paul©email.com');
// table.put('Nathan', 'nathan@email.com');
// console.log(table.get("Tryion"));
// console.log(table.get("Aaron"));
table.remove("Tyrion");
console.log(table);
export default {
    Stack,
    Queue,
    PriorityQueue,
    LoopQueue,
    LinkedList,
    DoublyLinkedList,
};