# challenge-0

_To run tests:_  
`yarn` or `npm i`  
`yarn test` or `npm t`

---

1.  Write a polyfill for reduce method of arrays.

`./code/reduce`

---

2.  Write a function that flattens deeply nested arrays.  
    ex. input: `[[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []]`  
    ex. output: `1, 2, 3, 4, 5, 6, 7, 8, 9, 10`

`./code/flatten`

---

3.  What would be the output of this code and why?

```
for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
}
```

> The output will be 3 alerts containing the number 3. The reasoning behind this is that setTimeout is asynchronous,  
> and the anonymous function set to execute after the specified timeout holds a reference to i. (closureeee) i is not evaluated  
> until the function is actually executed, meaning that it will be 3, as that is the value that i will hold at the time of execution.

---

4.  Write a function called eval, which takes a string and returns a boolean. This string is allowed 6 different characters: 0, 1, &, |, (, and ). eval should evaluate the string as a boolean expression, where 0 is false, 1 is true, & is an and, and | is an or. E.g "(0 | (1 | 0)) & (1 & ((1 | 0) & 0))"

`./code/eval`

---

5.  Generate all subsets of a string For Eg ‘water’ should generate ‘wa’, ‘wat’, ‘wate’ etc.

`./code/subsets`


