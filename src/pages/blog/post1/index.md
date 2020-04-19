---
title: 'Achieving Concurrent Behavior with JavaScript'
date: '2020-04-19'
---

Few things are more frustrating for users of websites than when those websites seem to freeze up and become unresponsive to user input. If this happens to one of your users when they're on your website, they will leave your site rather than be frustrated.

Why do websites freeze up? Of course, there are many reasons. But often, the culprit is the fact that JavaScript is a the programming language of the web. 

### Threads and Programming

Many computer processors are [multi-threaded](https://en.wikipedia.org/wiki/Multithreading_(computer_architecture), which means that they can execute multiple instructions at the same time. Many programming languages are also multi-threaded, which means that they can directly take advantage of the multi-threaded structure of computer processors in order to let developers write programs which execute multiple instructions at once. 

Unfortunately, the web browser is only able to natively execute JavaScript, which is a [single-threaded](https://en.wikipedia.org/wiki/Thread_(computing)#Single_threading) programming language. This means that the JavaScript compiiler can only execute one instruction at a time, even if the computer processor in the system it is running on is multi-threaded. 

For a long time, the single-threaded nature of JavaScript was not noticeable to end users because of the speed at which the web browser processes JavaScript instructions. But as the average size of websites' JavaScript bundles has grown larger over time, more and more sites have begun feeling sluggish.

This is frustrating for users especially when they can see the user interface, move their mouse and click buttons, but those actions feel like they're not being picked up by the web browser. 

Unbeknownst to them, their actions are being picked up, it's just that they're being placed on the JavaScript call stack to be executed after the currently executing JavaScript on the call stack is complete. 

### The JavaScript Call Stack

The JavaScript runtime uses a data structure known as a [call stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack) in order to keep track of the order in which program instructions should be executed. [Stacks](https://en.wikipedia.org/wiki/Stack_(abstract_data_type) are a last-in, first-out data structure, which means that the last instruction which is placed on the stack is the first to be executed.

If every instruction in a program can be immediately executed, then the call stack only ever contains one instruction at a time. In this case, it is unlikely that users will notice JavaScript's single-threaded nature.   

<iframe width="100%" height="600px" src="https://latentflip.com/loupe/?code=Y29uc29sZS5sb2coImpveSIpOyAKCmNvbnNvbGUubG9nKCJ0byIpOyAKCmNvbnNvbGUubG9nKCJ0aGUiKTsgCgpjb25zb2xlLmxvZygid29ybGQiKTsg!!!"></iframe>

In more complex programs, executing one instruction requires the JavaScript runtime to perform other instructions first. These additional instructions are placed on the call stack after the parent instruction, which guarantees that they will be executed first. 

This is a [blocking](https://en.wikipedia.org/wiki/Blocking_(computing)) operation since the stack is a last-in, first-out data structure, and is the source of user frustration with JavaScript-based sites. Rather than user input being immediately executed, like the user expects, those instructions are put on the call stack and are blocked by code that is already being executed. 

<iframe width="100%" height="600px" src="https://latentflip.com/loupe/?code=ZnVuY3Rpb24gbXVsdGlwbHkoYSwgYil7CiAgICByZXR1cm4gYSAqIGI7IAp9CgpmdW5jdGlvbiBzcXVhcmUobil7CiAgICByZXR1cm4gbXVsdGlwbHkobiwgbik7IAp9CgpmdW5jdGlvbiBwcmludFNxdWFyZShuKXsKICAgIHZhciBzcXVhcmVkID0gc3F1YXJlKG4pOyAKICAgIGNvbnNvbGUubG9nKHNxdWFyZWQpOwp9CgpwcmludFNxdWFyZSg0KTsg!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D"></iframe>

First, the instruction `printSquare(4)` is added to the stack. Then, `var squared = square(n)`, followed by `square(4)`, followed by `multiply(4, 4)`, and then finally `4*4`. Executing `4*4` clears the stack, allowing the JavaScript runtime to move on to the last instruction it needs to execute in the program, which is `console.log(squared)`.

### The Task Queue and the Event Loop

In order to achieve concurrent behavior, developers combine the call stack of JavaScript with another data structure called a task queue. The task queue is not a part of the JavaScript language but you can access and put instructions in it using JavaScript thanks to APIs exposed by the web browser (or C++ APIs in the case of node.js on the server). 

The task queue is a first-in, first-out data structure in contrast to the call stack, which is a last-in, first-out data structure. This means that the first instruction put into the task queue will be the first instruction to be removed from it. 

The entity which decides when instructions should move from the task queue to the call stack is the [event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop). It's job is to make sure that instructions only move from the task queue to the call stack when the call stack is empty. 

By making sure that code that will prevent the user from interacting with the web site is placed in the task queue, developers make their sites much more interactive than they otherwise would be. Actions like fetching data from web servers can be postponed until after the user has interacted with the site, which makes their experience much smoother. 

### Asynchronous Callbacks and Concurrent Behavior with JavaScript

How do JavaScript developers place instructions into the browser's task queue rather than the JavaScript runtime's call stack? 

By using [asyncronous callback functions](https://flaviocopes.com/javascript-callbacks/).

For example, the [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals) function can be used to place instructions into the browser's task queue, which means that they will only be executed once the JavaScript runtime's call stack is clear. 

<iframe width="100%" height="600px" src="https://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D"></iframe>