# Queue Data Structure

## Key Properties of a Queue

### FIFO Principle
- The first element inserted is the first to be removed.
- Similar to real-world queues (e.g., people in a line).
- **Example:** A printer queue processes documents in the order they were sent.

## Main Operations

### Enqueue (Add)
- Inserts an element at the rear (end) of the queue.

### Dequeue (Remove)
- Removes an element from the front (start) of the queue.

## Additional Operations

- **Peek / Front:** Returns the front element without removing it.
- **isEmpty:** Checks if the queue is empty.
- **isFull:** (for bounded queues) Checks if the queue has reached its maximum capacity.

## Time Complexity

| Operation        | Time Complexity |
|------------------|------------------|
| Enqueue          | O(1)             |
| Dequeue          | O(1)             |
| Search / Access  | O(n)             |

> Note: O(1) operations assume a proper implementation using a linked list or circular buffer.

## Types of Queues

- **Linear Queue:** Basic FIFO structure.
- **Circular Queue:** Reuses freed slots in a fixed-size buffer.
- **Priority Queue:** Elements are dequeued based on priority rather than insertion order.
- **Double-Ended Queue (Deque):** Supports insertion and removal at both the front and rear.

## Queue Structure Example

```plaintext
Queue:
  - items[] (Array or Linked List to store elements)
  - front (Pointer to the first element)
  - rear (Pointer to the last element)```

Pseudocode for Basic Operations
```
enqueue(x):
  if not isFull:
    items[rear] = x
    rear++

dequeue():
  if not isEmpty:
    x = items[front]
    front++
    return x

peek():
  if not isEmpty:
    return items[front]

isEmpty():
  return front == rear

isFull():
  return rear == max_size```
