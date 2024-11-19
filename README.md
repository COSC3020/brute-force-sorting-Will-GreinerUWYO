# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

This algorithm has a complexity of $O(n!*n)$ this is because there are n! possible permutations of any given array, and checksort is called for every permutation, and that is called for the length of the list n. 

The best case input is an already sorted list, there will be one permutation to check, and it will immediately determine correctness.
The worst case input would be a function that is in the last checked combination, this varies based on the length of the input array, but for an input array of [a,b,c,d], the worst possible input would be [b,c,d,a] as that would be the last permutation the algorithm would check.

The complexity does not change with random permutations. Checksort is still called for the length of the array, and there are still always n! possiblities, meaning our worst case is still $n*n!$

## Sources and Plagarism Statement

For the basic implementation of Heap's algorithm, [Wikipedia] (https://en.wikipedia.org/wiki/Heap%27s_algorithm)
To help me learn how permutation based mathemetical concepts I used [Baeldung] (https://www.baeldung.com/java-array-permutations)
Extra info on Brute Force Searches [Wikipedia] (https://en.wikipedia.org/wiki/Brute-force_search)
Used this slideshow to help visualize Heap's algorithm and learn about how it worked better. [Permutation Generation Methods](https://sedgewick.io/wp-content/uploads/2022/03/2002PermGeneration.pdf)

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
