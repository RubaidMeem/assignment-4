# JavaScript Interview Questions & Answers

 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 getElementById("id")
   Returns a single element with the matching .
   Fastest lookup method.
   Always returns one element 

 getElementsByClassName("class")
  Returns a live HTMLCollection of all elements with the given class.
   You must loop through the collection to access individual elements.
   Updates automatically if the DOM changes.

 querySelector("selector")
   Returns the first element that matches a CSS selector.
   More flexible because it supports full CSS selectors.

 querySelectorAll("selector")
   Returns a static NodeList of all elements matching the CSS selector.
   Does not update automatically when the DOM changes.
  


 2. How do you create and insert a new element into the DOM?



const newDiv = document.createElement("div");

newDiv.textContent = "Hello World!";
newDiv.className = "my-class";


document.body.appendChild(newDiv); 


3.  What is Event Bubbling? And how does it work?

Event bubbling is the process where an event triggered on a child element propagates upward through its ancestors in the DOM tree.

Example: Clicking a <button> inside a <div> will first run the button’s handler, then the <div> handler, then the <body> handler, unless stopped.

Default behavior in JavaScript event handling.


4.What is Event Delegation in JavaScript? Why is it useful?

document.getElementById("list").addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    console.log("List item clicked:", e.target.textContent);
  }
});


5. Difference between preventDefault() and stopPropagation()
preventDefault().

Stops the browser’s default action for an event.

Example: Prevents a form from submitting or a link from navigating.

stopPropagation()

Stops the event from bubbling up (or trickling down in capturing).

Prevents parent elements’ event handlers from being triggered.

Often used together: preventDefault() to block default behavior, and stopPropagation() to control event flow.
