| Search Method | Time Average(Ω) | Time Best(Θ) | Time Worst(O) | BigO(Space) |
| - | - | - | - | - |
| Binary | Ω(log(n)) | Θ(1) | O(log(n)) | O(1) |
| Exponential | Ω(log(n)) | Θ(1) | O(log(n)) | O(1) |
| Linear | Ω(n) | Θ(1) | O(n) | O(1) | O(1) |
| Jump | Ω(√n) | Θ(1) | O(√n) | O(1) |
| Interpolation | Ω(log(log(n))) | Θ(1) | O(n)| O(1) |


<br />

---

<br />

### Binary Search

##### Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

<br />

### Exponential Search

##### Exponential search, also known as finger search, searches for an element in a sorted array by jumping 2^i elements every iteration where i represents the value of loop control variable, and then verifying if the search element is present between last jump and the current jump.

<br />

### Linear Search

##### A sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection.

<br />

### Jump Search

##### The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps or skipping some elements in place of searching all elements.

<br />

### Interpolation Search

##### The Interpolation Search is an improvement over Binary Search for instances, where the values in a sorted array are uniformly distributed. Binary Search always goes to the middle element to check. On the other hand, interpolation search may go to different locations according to the value of the key being searched.