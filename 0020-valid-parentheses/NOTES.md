​The logic here is:

Firstly, brackets come in pairs, so for the input to be valid in the first place, the length has to be an even number. That's why we're checking that first.

Next, we have a key (with a hashmap)  - this gives us O(1) - constant time - lookup which can't hurt our time complexity 

Now, we get into the meat of this solution - it was a bit tricky for me to understand at first, but once I tried to ditch the memorized solution and attempt it on my own, I got to understand the intutive solution to it. Coincidentally, I arrived at the same solution.

I know, based on previous practice, that this question uses a 'stack'. So, I got my sticky notes out and got to work. A stack is a LIFO (Last In First Out) data structure and it's typically implemented using the array methods 'push', 'pop' and 'peek'. That's all well and good, but how is this relevant to the question?

So, we're going to go through the input:
- If the element we're looking at is a key in the map, that means it's an opening bracket (because of the way we set our hashmap up). What we want to do then, is push it's corresponding closing bracket to the stack.
- If it isn't an opening bracket, we want to check if the last element on the stack is equal to the element we're looking at - that means we've already seen its opening **and** pushed the correct closing bracket to the stack. So we pop it off the stack.
- Otherwise, we return false because we know for sure it doesn't have a partner.

After all this, if the stack is empty, return true, and if it isn't, return false.

N.B. Remember to solve leetcode problems while communicating your thought process. It's something interviewers look out for.
