/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
    let priorityQ = new MinPriorityQueue();
    let total = 0;

    for (let stick of sticks) {
        priorityQ.enqueue(stick);
    }

    while (priorityQ.size() > 1) {
        let diff = priorityQ.dequeue() + priorityQ.dequeue();
        total += diff;
        priorityQ.enqueue(diff);    
    }

    return total;
};