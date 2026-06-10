/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {

    let maxHeap = new MaxPriorityQueue();

    matrix.forEach((row) => {
        row.forEach((element) => {
            maxHeap.enqueue(element);
            if (maxHeap.size() > k) {
                maxHeap.dequeue();
            }
        })
    })

    return maxHeap.front();    
};