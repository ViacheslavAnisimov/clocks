const div = document.createElement('div');
const header = document.createElement('h1');
header.innerText = 'Learn Js'
const a = document.createElement('a');
a.href = '../one-clock.html';
a.innerText = 'One clock';

div.appendChild(header);
div.appendChild(a);

const a2 = document.createElement('a');
a2.href = '../two-clocks.html';
a2.innerText = 'Two clock';
div.appendChild(a2);

// document.body.appendChild(div);

const footer = document.getElementById('footer');
footer.appendChild(div)

console.log(div);
console.log(a);