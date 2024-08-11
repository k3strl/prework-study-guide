const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

/*
if (topic === 'HTML') {
    console.log ("Let's study HTML!");
} else if (topic === 'CSS') {
    console.log ("Let's study CSS!");
} else if (topic === 'Git') {
    console.log ("Let's study Git!");
} else if (topic === 'JavaScript') {
    console.log ("Let's study Javascript!");
} else {
    console.log ("Please try again!");
}
*/


// iterating in a "for" loop - start at index 0 (first variable), and while x is less than the length of the array (0-3=4, so 4 times); increase x by one each time. 0, 1, 2, 3 and done, so break out of loop.

for (let x = 0; x < topics.length; x++){ 
    console.log(topics[x]);
}


