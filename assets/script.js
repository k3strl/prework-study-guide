const topics = ['HTML', 'CSS', 'Git', 'JavaScript']; //defining topics array
const randomTopic = topics[Math.floor(Math.random() * topics.length)]; //randomizes the topic each refresh


function listTopics() { //iterating through the topics and printing each to the console
    for (let x = 0; x < topics.length; x++){ 
        console.log(topics[x]);
    }
}

function selectTopic() { // prints the randomly selected topic to the console
    if (randomTopic === 'HTML') {
        console.log ("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log ("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log ("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log ("Let's study Javascript!");
    } else {
        console.log ("Please try again!");
    }
}

console.log('Here are the topics we learned through our prework:');
listTopics() // Calling the function

console.log('Which topic should we study first?');
selectTopic() // Calling the function