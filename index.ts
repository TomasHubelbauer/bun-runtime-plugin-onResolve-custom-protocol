import demo1 from '1.demo';

console.log('demo 1', demo1);

import demo2 from 'demo:2';

console.log('demo 2', demo2);

console.log(await import('demo:alice')); // "Hi there, I am the 'alice' import!"
console.log(await import('demo:bob')); // "Hi there, I am the 'bob' import!"
